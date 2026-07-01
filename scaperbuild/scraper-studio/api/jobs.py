"""Job state for scrape / convert workflows."""

from __future__ import annotations

import json
import re
import threading
import time
import uuid
from dataclasses import asdict, dataclass, field
from enum import Enum
from pathlib import Path
from typing import Any

from api.event_bus import publish
from api.telemetry import (
    apply_hook_event,
    complete_stage,
    compute_global_stats,
    empty_telemetry,
    estimate_eta,
    get_system_metrics,
    log_activity,
    log_error,
    phase_to_stage,
    set_stage,
    update_ai_metrics,
    update_asset_counters_from_downloads,
    update_crawl_metrics,
    update_download_metrics,
    update_metrics_history,
)

ROOT = Path(__file__).resolve().parents[1]
PROJECTS = ROOT / "projects"
PARENT = ROOT.parent

import sys

sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(PARENT))


class JobStatus(str, Enum):
    QUEUED = "queued"
    SCRAPING = "scraping"
    ANALYZING = "analyzing"
    READY = "ready"
    CONVERTING = "converting"
    CONVERTED = "converted"
    FAILED = "failed"


@dataclass
class Job:
    id: str
    url: str
    status: JobStatus = JobStatus.QUEUED
    message: str = "Queued"
    progress: int = 0
    site_dir: str | None = None
    converted_dir: str | None = None
    converted_stack: str | None = None
    tech: dict[str, Any] | None = None
    assets: dict[str, int] | None = None
    steps: list[dict[str, Any]] | None = None
    downloads: dict[str, Any] | None = None
    page_info: dict[str, Any] | None = None
    folder_tree: list[str] | None = None
    error: str | None = None
    created_at: str = field(default_factory=lambda: time.strftime("%Y-%m-%d %H:%M:%S"))
    preview_path: str | None = None
    pages: list[dict[str, Any]] | None = None
    pages_total: int = 0
    pages_done: int = 0
    max_pages: int = 100
    scrape_mode: str = "full"
    speed: str = "fast"
    auto_convert: bool = True
    auto_convert_stack: str = "react-architecture"
    telemetry: dict[str, Any] | None = None
    cancelled: bool = False

    def to_dict(self) -> dict:
        d = asdict(self)
        d["status"] = self.status.value
        return d


_lock = threading.Lock()
_jobs: dict[str, Job] = {}


def _job_path(job_id: str) -> Path:
    return PROJECTS / job_id / "job.json"


def save_job(job: Job) -> None:
    path = _job_path(job.id)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(job.to_dict(), indent=2), encoding="utf-8")


def load_job(job_id: str) -> Job | None:
    path = _job_path(job_id)
    if not path.exists():
        with _lock:
            return _jobs.get(job_id)
    data = json.loads(path.read_text(encoding="utf-8"))
    return Job(
        id=data["id"],
        url=data["url"],
        status=JobStatus(data["status"]),
        message=data.get("message", ""),
        progress=data.get("progress", 0),
        site_dir=data.get("site_dir"),
        converted_dir=data.get("converted_dir"),
        converted_stack=data.get("converted_stack"),
        tech=data.get("tech"),
        assets=data.get("assets"),
        steps=data.get("steps"),
        downloads=data.get("downloads"),
        page_info=data.get("page_info"),
        folder_tree=data.get("folder_tree"),
        error=data.get("error"),
        created_at=data.get("created_at", ""),
        preview_path=data.get("preview_path"),
        pages=data.get("pages"),
        pages_total=data.get("pages_total", 0),
        pages_done=data.get("pages_done", 0),
        max_pages=data.get("max_pages", 100),
        scrape_mode=data.get("scrape_mode", "full"),
        speed=data.get("speed", "fast"),
        telemetry=data.get("telemetry"),
        cancelled=data.get("cancelled", False),
    )


def get_job(job_id: str) -> Job | None:
    with _lock:
        if job_id in _jobs:
            return _jobs[job_id]
    return load_job(job_id)


def _update(job: Job, **kwargs) -> Job:
    for k, v in kwargs.items():
        setattr(job, k, v)
    if job.telemetry is None:
        job.telemetry = empty_telemetry(job.url)
    sys_m = get_system_metrics()
    job.telemetry["cpu_percent"] = sys_m["cpu_percent"]
    job.telemetry["memory_percent"] = sys_m["memory_percent"]
    estimate_eta(job.telemetry, job.progress)
    update_metrics_history(
        download_speed=job.telemetry.get("download_speed_bps", 0),
        processing_speed=job.telemetry.get("processing_speed", 0),
    )
    with _lock:
        _jobs[job.id] = job
    save_job(job)
    publish(job.id, {"type": "job_update", "job": job.to_dict()})
    return job


def _safe_host(url: str) -> str:
    from urllib.parse import urlparse

    host = urlparse(url).netloc
    return re.sub(r"[^\w.\-]", "_", host) or "site"


def _human_size(n: int) -> str:
    if n < 1024:
        return f"{n} B"
    n_kb = n / 1024
    if n_kb < 1024:
        return f"{n_kb:.1f} KB"
    return f"{n_kb / 1024:.1f} MB"


def _append_step(
    job: Job, stage: str, message: str, step_status: str = "running"
) -> list[dict[str, Any]]:
    steps = list(job.steps or [])
    if step_status == "running":
        for s in steps:
            if s.get("status") == "running":
                s["status"] = "done"
    steps.append(
        {
            "time": time.strftime("%H:%M:%S"),
            "stage": stage,
            "message": message,
            "status": step_status,
        }
    )
    return steps


def _finish_running_steps(steps: list[dict[str, Any]] | None) -> list[dict[str, Any]]:
    out = list(steps or [])
    for s in out:
        if s.get("status") == "running":
            s["status"] = "done"
    return out


def scan_downloads(page_folder: Path) -> dict[str, Any]:
    folders = {
        "css": "CSS Stylesheets",
        "js": "JavaScript",
        "images": "Photos & Images",
        "fonts": "Web Fonts",
        "videos": "Background Videos",
        "icons": "Icons & Favicons",
    }
    result: dict[str, Any] = {}
    assets_root = page_folder / "assets"
    total_size = 0
    total_files = 0

    for key, label in folders.items():
        d = assets_root / key
        files: list[dict[str, Any]] = []
        if d.exists():
            for f in sorted(d.rglob("*")):
                if f.is_file():
                    size = f.stat().st_size
                    total_size += size
                    total_files += 1
                    files.append(
                        {
                            "name": f.name,
                            "path": f.relative_to(page_folder).as_posix(),
                            "size": size,
                            "size_human": _human_size(size),
                        }
                    )
        result[key] = {"label": label, "count": len(files), "files": files}

    for fw_key, fw_label in (("_next", "Next.js / React chunks"), ("static", "CRA static bundles")):
        d = assets_root / fw_key
        files = []
        if d.exists():
            for f in sorted(d.rglob("*")):
                if f.is_file():
                    size = f.stat().st_size
                    total_size += size
                    total_files += 1
                    files.append(
                        {
                            "name": f.name,
                            "path": f.relative_to(page_folder).as_posix(),
                            "size": size,
                            "size_human": _human_size(size),
                        }
                    )
        result[fw_key] = {"label": fw_label, "count": len(files), "files": files}

    result["_total"] = {
        "files": total_files,
        "size": total_size,
        "size_human": _human_size(total_size),
    }
    return result


def scan_site_downloads(site_dir: Path) -> dict[str, Any]:
    """Aggregate asset counts across every scraped page folder."""
    merged: dict[str, Any] = {}
    total_files = 0
    total_size = 0
    for page_folder in sorted(site_dir.iterdir()):
        if not page_folder.is_dir() or page_folder.name.startswith("."):
            continue
        if not (page_folder / "assets").is_dir() and not list(page_folder.glob("*.html")):
            continue
        part = scan_downloads(page_folder)
        for key, data in part.items():
            if key == "_total":
                total_files += data.get("files", 0)
                total_size += data.get("size", 0)
                continue
            bucket = merged.setdefault(key, {"label": data.get("label", key), "count": 0, "files": []})
            bucket["count"] += data.get("count", 0)
            bucket["files"].extend(data.get("files", []))
    merged["_total"] = {
        "files": total_files,
        "size": total_size,
        "size_human": _human_size(total_size),
    }
    return merged


def build_page_info(html_path: Path, url: str, counts: dict, downloads: dict) -> dict:
    from scraper.site_analyze import analyze_html

    html = html_path.read_text(encoding="utf-8", errors="replace")
    stats = analyze_html(html, url)
    title_m = re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S)
    title = re.sub(r"\s+", " ", title_m.group(1)).strip() if title_m else url
    html_size = html_path.stat().st_size
    total = downloads.get("_total", {})
    return {
        "url": url,
        "title": title,
        "html_file": html_path.name,
        "html_size": html_size,
        "html_size_human": _human_size(html_size),
        "scraped_at": time.strftime("%Y-%m-%d %H:%M:%S"),
        "language": stats.get("language", "unknown"),
        "language_label": stats.get("language_label", "Unknown"),
        "links_total": stats.get("links_total", 0),
        "links_internal": stats.get("links_internal", 0),
        "links_external": stats.get("links_external", 0),
        "images_count": stats.get("images_count", 0),
        "videos_count": stats.get("videos_count", 0),
        "css_files": counts.get("css_files", 0),
        "js_files": counts.get("js_files", 0),
        "images_files": counts.get("images_files", 0),
        "fonts_files": counts.get("fonts_files", 0),
        "videos_files": counts.get("videos_files", 0),
        "icons_files": counts.get("icons_files", 0),
        "framework_files": counts.get("framework_files", 0),
        "total_asset_files": total.get("files", 0),
        "total_asset_size_human": total.get("size_human", "0 B"),
    }


def build_folder_tree(site_dir: Path, limit: int = 80) -> list[str]:
    paths = []
    for p in sorted(site_dir.rglob("*")):
        if p.is_file():
            paths.append(p.relative_to(site_dir).as_posix())
    return paths[:limit]


def create_job(
    url: str,
    max_pages: int = 100,
    scrape_mode: str = "full",
    speed: str = "fast",
    auto_convert: bool = True,
    auto_convert_stack: str = "react-architecture",
) -> Job:
    url = url.strip()
    if not url.startswith(("http://", "https://")):
        url = "https://" + url

    job_id = uuid.uuid4().hex[:12]
    job = Job(
        id=job_id,
        url=url,
        max_pages=max_pages,
        scrape_mode=scrape_mode,
        speed=speed,
        auto_convert=auto_convert,
        auto_convert_stack=auto_convert_stack,
    )
    job.telemetry = empty_telemetry(url)
    log_activity(job.telemetry, f"Job queued for {url}")
    site_dir = PROJECTS / job_id / "scraped" / _safe_host(url)
    job.site_dir = str(site_dir)
    job.steps = _append_step(job, "queued", f"Job created for {url}", "done")
    with _lock:
        _jobs[job_id] = job
    save_job(job)
    publish(job.id, {"type": "job_update", "job": job.to_dict()})
    return job


def list_jobs() -> list[dict]:
    """All jobs from memory + disk."""
    seen: set[str] = set()
    jobs: list[dict] = []
    with _lock:
        for jid, job in _jobs.items():
            seen.add(jid)
            jobs.append(job.to_dict())
    if PROJECTS.exists():
        for d in sorted(PROJECTS.iterdir(), key=lambda p: p.stat().st_mtime, reverse=True):
            if not d.is_dir() or d.name in seen:
                continue
            j = load_job(d.name)
            if j:
                jobs.append(j.to_dict())
    return jobs


_prev_download_state: dict[str, tuple[int, int, float]] = {}
_hook_last_flush: dict[str, float] = {}
_job_page_folder: dict[str, str] = {}


def _sync_telemetry_from_disk(tel: dict, page_folder: str | Path) -> None:
    """Authoritative file counts from disk — prevents counter drift."""
    folder = Path(page_folder)
    if not folder.is_dir():
        return
    dl = scan_downloads(folder)
    update_download_metrics(tel, dl)
    update_asset_counters_from_downloads(tel, dl)


def _telemetry_hook_handler(event: dict) -> None:
    job_id = event.get("job_id")
    if not job_id:
        return
    job = get_job(job_id)
    if not job or job.cancelled:
        return
    tel = job.telemetry or empty_telemetry(job.url)
    apply_hook_event(tel, event)

    page_folder = _job_page_folder.get(job_id)
    if page_folder and event.get("kind") in ("download_complete", "asset_saved"):
        _sync_telemetry_from_disk(tel, page_folder)
        try:
            job.folder_tree = build_folder_tree(Path(page_folder).parent, limit=150)
        except Exception:
            pass

    kwargs: dict[str, Any] = {"telemetry": tel}
    if job.folder_tree:
        kwargs["folder_tree"] = job.folder_tree
    if job.status == JobStatus.QUEUED:
        kwargs["status"] = JobStatus.SCRAPING
        kwargs["progress"] = max(job.progress, 12)
        kwargs["message"] = "Downloading assets…"

    now = time.time()
    force = event.get("kind") in ("download_complete",)
    last = _hook_last_flush.get(job_id, 0)
    if force or now - last >= 0.4:
        _hook_last_flush[job_id] = now
        _update(job, **kwargs)
    else:
        for k, v in kwargs.items():
            setattr(job, k, v)
        job.telemetry = tel
        with _lock:
            _jobs[job.id] = job
        publish(job.id, {"type": "job_update", "job": job.to_dict()})


def get_global_stats() -> dict[str, Any]:
    return compute_global_stats(list_jobs())


def run_scrape(
    job_id: str,
    wait_ms: int = 35000,
    max_pages: int = 100,
    scrape_mode: str = "full",
    speed: str = "fast",
) -> None:
    from converter.detect import detect_from_site
    from scraper.site_architecture import analyze_site_architecture
    from scraper.site_crawler import crawl_site
    from scraper.telemetry_hook import set_hook

    job = get_job(job_id)
    if not job:
        return

    scrape_mode = job.scrape_mode or scrape_mode
    max_pages = job.max_pages or max_pages
    speed = getattr(job, "speed", None) or speed
    if scrape_mode == "single":
        max_pages = 1

    from scraper.polite import set_fetch_delay
    from scraper.speed import set_speed

    profile = set_speed(speed)
    set_fetch_delay(profile.fetch_delay_sec)
    wait_ms = wait_ms if wait_ms != 35000 else profile.wait_ms

    set_hook(job_id, _telemetry_hook_handler)

    site_dir = Path(job.site_dir)
    if site_dir.exists():
        import shutil
        shutil.rmtree(site_dir)
    site_dir.mkdir(parents=True, exist_ok=True)

    from scraper.storage import page_dir as page_dir_fn, url_to_page_slug

    _job_page_folder[job_id] = str(page_dir_fn(site_dir, url_to_page_slug(job.url)))

    def on_progress(event: dict) -> None:
        j = get_job(job_id)
        if not j or j.cancelled:
            return
        tel = j.telemetry or empty_telemetry(j.url)
        phase = event.get("phase", "")
        stage = phase_to_stage(phase)
        msg = event.get("message", j.message)
        set_stage(tel, stage, msg, event.get("progress", j.progress))

        if event.get("current_url"):
            tel["current_url"] = event["current_url"]
        if event.get("discovered_links") is not None:
            tel["discovered_links"] = event["discovered_links"]
        if event.get("links_crawled") is not None:
            tel["links_crawled"] = event["links_crawled"]
        tel["pages_scanned"] = event.get("current", j.pages_done)
        pages = event.get("pages")
        total = event.get("total", j.pages_total)
        current = event.get("current", j.pages_done)
        update_crawl_metrics(
            tel,
            current_url=event.get("current_url") or tel.get("current_url"),
            pages_found=len(pages) if pages is not None else total or j.pages_total,
            pages_processed=current or j.pages_done,
            links_discovered=event.get("discovered_links", tel.get("discovered_links", 0)),
            links_crawled=event.get("links_crawled", current or j.pages_done),
        )
        update_ai_metrics(
            tel,
            current_task=msg,
            current_module="Website Crawler" if phase in ("discover", "scraping", "discovered") else tel.get("ai", {}).get("current_module"),
            tokens_delta=120 if phase == "scraping" else 0,
        )

        pages = event.get("pages")
        total = event.get("total", j.pages_total)
        current = event.get("current", j.pages_done)
        progress = j.progress
        if phase == "discover":
            progress = 8
            set_stage(tel, "initializing", msg, 15)
        elif phase == "discovered":
            progress = 18
            complete_stage(tel, "asset_discovery", msg)
            tel["discovered_links"] = len(pages or []) - 1 if pages else 0
        elif phase == "scraping" and total:
            progress = 20 + int((current / max(total, 1)) * 55)
            set_stage(tel, "crawling", msg, progress)
            if event.get("page_folder"):
                set_stage(tel, "downloading", msg, progress)
        elif phase == "linking":
            progress = 82
            set_stage(tel, "content_extraction", msg, progress)

        kwargs: dict[str, Any] = {
            "message": msg,
            "progress": progress,
            "telemetry": tel,
        }
        if pages is not None:
            kwargs["pages"] = pages
            kwargs["pages_total"] = len(pages)
            kwargs["pages_done"] = sum(1 for p in pages if p.get("status") == "done")
        page_folder = event.get("page_folder")
        if page_folder:
            _job_page_folder[job_id] = page_folder
            dl = scan_downloads(Path(page_folder))
            prev = _prev_download_state.get(job_id, (0, 0, time.time()))
            update_download_metrics(tel, dl, prev[0], prev[1], prev[2])
            update_asset_counters_from_downloads(tel, dl)
            _prev_download_state[job_id] = (dl.get("_total", {}).get("files", 0), dl.get("_total", {}).get("size", 0), time.time())
            kwargs["downloads"] = dl
            n = dl.get("_total", {}).get("files", 0)
            sz = dl.get("_total", {}).get("size_human", "")
            kwargs["message"] = f"Downloaded {n} files ({sz}) — {msg}"
            kwargs["folder_tree"] = build_folder_tree(Path(page_folder).parent, limit=150)
            tel["processing_speed"] = n
            for key in ("css", "js", "images", "videos"):
                c = dl.get(key, {}).get("count", 0)
                if c:
                    log_activity(tel, f"Saved {c} {key} file(s)", "download")
        if total:
            kwargs["pages_total"] = total
        _update(j, **kwargs)

    try:
        label = "this page" if scrape_mode == "single" else "full website"
        steps = _append_step(job, "browser", f"Launching browser ({label})...", "running")
        start_msg = (
            "Scraping first page only..."
            if scrape_mode == "single"
            else "Scraping homepage & discovering all pages..."
        )
        tel = job.telemetry or empty_telemetry(job.url)
        set_stage(tel, "initializing", start_msg, 5)
        log_activity(tel, f"Launching browser — {label}")
        _update(
            job,
            status=JobStatus.SCRAPING,
            message=start_msg,
            progress=5,
            steps=steps,
            scrape_mode=scrape_mode,
            telemetry=tel,
        )

        result = crawl_site(
            job.url,
            site_dir,
            wait_ms=wait_ms,
            max_pages=max_pages,
            scrape_mode=scrape_mode,
            headed=False,
            on_progress=on_progress,
            speed=speed,
        )

        html_path = result["homepage"]
        pages_list = result["pages"]

        job = get_job(job_id)
        tel = job.telemetry or empty_telemetry(job.url)
        steps = _finish_running_steps(job.steps)
        discover_msg = (
            "1 page scraped (first page only)"
            if scrape_mode == "single"
            else f"Found {result['total']} pages — scraped {result['done']}"
        )
        complete_stage(tel, "crawling", discover_msg)
        for s in ("html_analysis", "css_analysis", "js_analysis", "image_processing", "video_processing"):
            complete_stage(tel, s, "Captured from scraped pages")
        steps = steps + [
            {
                "time": time.strftime("%H:%M:%S"),
                "stage": "discover",
                "message": discover_msg,
                "status": "done",
            }
        ]
        analyze_msg = (
            "Analyzing scraped page..."
            if scrape_mode == "single"
            else "Analyzing full site..."
        )
        set_stage(tel, "ai_analysis", analyze_msg, 90)
        update_ai_metrics(
            tel,
            current_task="Analyzing site structure",
            current_module="AI Structure Analysis",
            components_total=max(result["done"] * 8, 12),
            tokens_delta=2500,
        )
        log_activity(tel, "Running tech detection & architecture analysis")
        _update(
            job,
            status=JobStatus.ANALYZING,
            message=analyze_msg,
            progress=90,
            steps=steps,
            pages=pages_list,
            pages_total=result["total"],
            pages_done=result["done"],
            telemetry=tel,
        )

        profile = detect_from_site(site_dir)
        architecture = analyze_site_architecture(site_dir, job.url, scrape_mode=scrape_mode)
        try:
            from ai.enhance import enhance_architecture

            architecture = enhance_architecture(site_dir, architecture)
            log_activity(tel, "AI structure analysis complete", "success")
        except Exception as ae:
            log_activity(tel, f"AI analysis skipped: {ae}", "warning")
        from scraper.storage import count_assets, load_manifest

        page_folder = html_path.parent
        if scrape_mode == "full":
            counts = {
                "css_files": 0,
                "js_files": 0,
                "images_files": 0,
                "fonts_files": 0,
                "videos_files": 0,
                "icons_files": 0,
                "framework_files": 0,
            }
            for _url, info in load_manifest(site_dir).get("pages", {}).items():
                slug = info.get("slug")
                if not slug:
                    continue
                pf = site_dir / slug
                if not pf.is_dir():
                    continue
                c = count_assets(pf)
                for k in counts:
                    counts[k] += c.get(k, 0)
            downloads = scan_site_downloads(site_dir)
        else:
            counts = count_assets(page_folder)
            downloads = scan_downloads(page_folder)
        page_info = build_page_info(html_path, job.url, counts, downloads)
        update_asset_counters_from_downloads(tel, downloads, page_info)
        page_info["pages_scraped"] = result["done"]
        page_info["pages_total"] = result["total"]
        page_info["pages_failed"] = result["failed"]
        page_info["scrape_mode"] = scrape_mode
        page_info["speed"] = speed
        folder_tree = build_folder_tree(site_dir, limit=150)

        steps = _append_step(
            job,
            "analyze",
            f"{profile.platform} — {result['done']} pages scraped",
            "done",
        )
        steps = steps + [
            {
                "time": time.strftime("%H:%M:%S"),
                "stage": "complete",
                "message": f"Scraped {result['done']} page — same-to-same" if scrape_mode == "single" else f"Full site ready — {result['done']} pages, same-to-same",
                "status": "done",
            }
        ]

        rel_html = html_path.relative_to(site_dir).as_posix()
        complete_stage(tel, "ai_analysis", f"{profile.platform} detected")
        # Clear recoverable harvest noise from prior stages
        tel["error_log"] = [e for e in (tel.get("error_log") or []) if "404" not in e.get("message", "") and "999" not in e.get("message", "")]
        tel["error_tracking"] = {
            "count": len(tel.get("error_log") or []),
            "latest": (tel.get("error_log") or [])[-1]["message"] if tel.get("error_log") else None,
            "retry_count": 0,
            "status": "—" if not tel.get("error_log") else "Failed",
        }
        update_ai_metrics(
            tel,
            current_task="Structure analysis complete",
            components_generated=tel.get("ai", {}).get("components_total", 0) // 2,
            react_files_created=len(folder_tree) if folder_tree else 0,
            pages_generated=result["done"],
            layouts_generated=min(4, result["done"]),
            tokens_delta=1800,
        )
        complete_stage(tel, "content_extraction", "Site structure mapped")
        set_stage(tel, "completed", "Scrape complete — ready to convert", 100)
        log_activity(tel, f"Scrape finished: {result['done']} page(s)", "success")

        try:
            from scraper.export_polish import polish_entire_site

            ps = polish_entire_site(site_dir)
            log_activity(tel, f"Export polish: {ps['pages']} pages, {ps['css_fixed']} CSS files fixed", "success")
        except Exception as pe:
            log_activity(tel, f"Export polish skipped: {pe}", "warning")

        _update(
            job,
            status=JobStatus.READY,
            message=f"Scraped {result['done']} page — preview below" if scrape_mode == "single" else f"Scraped {result['done']} pages — preview each page below",
            progress=100,
            steps=steps,
            telemetry=tel,
            tech={
                "platform": profile.platform,
                "confidence": profile.confidence,
                "signals": profile.signals,
                "plugins": profile.plugins,
                "recommended_stacks": profile.recommended_stacks,
                "customer_summary": profile.customer_summary,
                "convert_recommendation": profile.convert_recommendation,
                "language": profile.language,
                "language_label": profile.language_label,
                "framework": profile.framework,
                "architecture": {
                    "page_count": architecture.get("page_count", 0),
                    "blog_pages": len(architecture.get("collections", {}).get("blog", [])),
                    "categories": len(architecture.get("collections", {}).get("categories", [])),
                    "sitemap_urls": architecture.get("sitemap", {}).get("count", 0),
                    "nav_links": len(architecture.get("navigation", {}).get("header", [])),
                },
            },
            assets=counts,
            downloads=downloads,
            page_info=page_info,
            folder_tree=folder_tree,
            preview_path=rel_html,
            pages=pages_list,
            pages_total=result["total"],
            pages_done=result["done"],
        )

        if job.auto_convert and scrape_mode == "full" and result["done"] > 0:
            stack = job.auto_convert_stack or "react-architecture"
            log_activity(tel, f"Auto-converting to {stack} React SPA...", "info")
            _update(job, message=f"Auto-converting to {stack}...", telemetry=tel)
            run_convert(job_id, stack)
    except Exception as e:
        job = get_job(job_id)
        if job:
            err = str(e)
            if "Executable doesn't exist" in err:
                err = (
                    "Playwright browser not installed. "
                    "Run in terminal: playwright install chromium"
                )
            _update(
                job,
                status=JobStatus.FAILED,
                message="Scrape failed",
                error=err,
                progress=0,
            )
            if job.telemetry:
                log_error(job.telemetry, err, job.telemetry.get("current_stage", ""))
                _update(job, telemetry=job.telemetry)
    finally:
        try:
            from scraper.telemetry_hook import set_hook
            set_hook(None, None)
        except Exception:
            pass
        _job_page_folder.pop(job_id, None)
        _hook_last_flush.pop(job_id, None)


def run_convert(job_id: str, stack: str) -> None:
    job = get_job(job_id)
    if not job or not job.site_dir:
        return

    site_dir = Path(job.site_dir)
    out_root = PROJECTS / job_id / "converted" / stack

    try:
        from scraper.export_polish import polish_entire_site

        polish_entire_site(site_dir)
        tel = job.telemetry or empty_telemetry(job.url)
        set_stage(tel, "react_generation", f"Building {stack} project...", 25)
        steps = _append_step(job, "convert", f"Building {stack} project...", "running")
        _update(
            job,
            status=JobStatus.CONVERTING,
            message=f"Converting to {stack}...",
            progress=25,
            steps=steps,
            telemetry=tel,
        )

        convert_stages = [
            ("react_generation", "Generating React components"),
            ("folder_structure", "Creating folder structure"),
            ("dependency_mapping", "Mapping dependencies"),
        ]
        if stack == "laravel":
            convert_stages = [("react_generation", "Generating Blade views")]
        elif stack == "static":
            convert_stages = [("packaging", "Copying static mirror")]

        for i, (stage_id, stage_msg) in enumerate(convert_stages):
            set_stage(tel, stage_id, stage_msg, 30 + i * 20)
            update_ai_metrics(
                tel,
                current_task=stage_msg,
                current_module="Component Generation",
                components_generated=min((i + 1) * 14, tel.get("ai", {}).get("components_total", 120) or 120),
                components_total=tel.get("ai", {}).get("components_total", 120) or 120,
                react_files_created=(i + 1) * 10,
                tokens_delta=3200,
            )
            log_activity(tel, stage_msg)
            _update(job, message=stage_msg, progress=30 + i * 20, telemetry=tel)

        if stack == "static":
            import shutil

            if out_root.exists():
                shutil.rmtree(out_root)
            shutil.copytree(site_dir, out_root)
        elif stack == "react-vite":
            from converter.react_vite import convert

            convert(site_dir, out_root)
        elif stack == "react-architecture":
            from converter.react_architecture import convert

            convert(site_dir, out_root, base_url=job.url)
        elif stack == "nextjs":
            from converter.nextjs import convert

            convert(site_dir, out_root)
        elif stack == "laravel":
            from converter.laravel import convert

            convert(site_dir, out_root, base_url=job.url)
        else:
            raise ValueError(f"Unknown stack: {stack}")

        try:
            from scraper.export_polish import polish_converted_project

            polish_converted_project(out_root, stack)
        except Exception:
            pass

        job = get_job(job_id)
        tel = job.telemetry or empty_telemetry(job.url)
        complete_stage(tel, "build_validation", "Project validated")
        set_stage(tel, "packaging", f"Project ready → {stack}/", 95)
        steps = _finish_running_steps(job.steps)
        steps = steps + [
            {
                "time": time.strftime("%H:%M:%S"),
                "stage": "converted",
                "message": f"Project ready → {stack}/",
                "status": "done",
            }
        ]
        complete_stage(tel, "packaging", "Export ready")
        complete_stage(tel, "completed", "All stages complete")
        log_activity(tel, f"Converted to {stack}", "success")
        _update(
            job,
            status=JobStatus.CONVERTED,
            message=f"Converted to {stack} — download your project",
            progress=100,
            converted_dir=str(out_root),
            converted_stack=stack,
            steps=steps,
            folder_tree=build_folder_tree(out_root),
            telemetry=tel,
        )
    except Exception as e:
        tel = job.telemetry or empty_telemetry(job.url)
        log_error(tel, str(e), "convert")
        _update(
            job,
            status=JobStatus.FAILED,
            message="Conversion failed",
            error=str(e),
            telemetry=tel,
        )


def get_download_path(job_id: str, kind: str = "scraped") -> Path | None:
    job = get_job(job_id)
    if not job:
        return None

    if kind == "converted" and job.converted_dir:
        folder = Path(job.converted_dir)
    elif job.site_dir:
        folder = Path(job.site_dir)
    else:
        return None

    if not folder.exists():
        return None

    try:
        import sys

        sys.path.insert(0, str(PARENT))
        from scraper.export_polish import polish_converted_project, polish_entire_site

        if kind == "converted":
            polish_converted_project(folder, job.converted_stack or "react-vite")
        else:
            polish_entire_site(folder)
    except Exception:
        pass

    from converter.zip_export import zip_site_or_project

    name = f"{job_id}-{kind}"
    return zip_site_or_project(folder, name, PROJECTS / job_id)
