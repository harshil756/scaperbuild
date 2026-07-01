"""Job telemetry — pipeline stages, metrics, activity logs, global stats."""

from __future__ import annotations

import time
from collections import deque
from typing import Any
from urllib.parse import urlparse

PIPELINE_STAGES = [
    ("queued", "Queued"),
    ("initializing", "Initializing"),
    ("crawling", "Website Crawling"),
    ("asset_discovery", "Asset Discovery"),
    ("downloading", "Downloading Assets"),
    ("html_analysis", "HTML Analysis"),
    ("css_analysis", "CSS Analysis"),
    ("js_analysis", "JavaScript Analysis"),
    ("image_processing", "Image Processing"),
    ("video_processing", "Video Processing"),
    ("content_extraction", "Content Extraction"),
    ("ai_analysis", "AI Structure Analysis"),
    ("react_generation", "React Code Generation"),
    ("folder_structure", "Folder Structure Creation"),
    ("dependency_mapping", "Dependency Mapping"),
    ("build_validation", "Build Validation"),
    ("packaging", "Packaging"),
    ("completed", "Completed"),
]

STAGE_INDEX = {s[0]: i for i, s in enumerate(PIPELINE_STAGES)}

ACTIVE_STATUSES = {"queued", "scraping", "analyzing", "converting"}
RUNNING_STATUSES = {"scraping", "analyzing", "converting"}
COMPLETED_STATUSES = {"ready", "converted"}

_metrics_history: deque[dict[str, Any]] = deque(maxlen=120)
_prev_net_io: tuple[int, int, float] | None = None


def human_bytes(n: int | float) -> str:
    n = float(n)
    if n < 1024:
        return f"{int(n)} B"
    if n < 1024**2:
        return f"{n / 1024:.1f} KB"
    if n < 1024**3:
        return f"{n / 1024**2:.1f} MB"
    return f"{n / 1024**3:.2f} GB"


def human_speed(bps: float) -> str:
    if bps < 1024:
        return f"{bps:.0f} B/s"
    if bps < 1024**2:
        return f"{bps / 1024:.1f} KB/s"
    return f"{bps / 1024**2:.1f} MB/s"


def project_name(url: str) -> str:
    host = urlparse(url).netloc.replace("www.", "")
    return host or "project"


def _empty_assets() -> dict[str, int]:
    return {
        "images_found": 0,
        "images_downloaded": 0,
        "videos_found": 0,
        "videos_downloaded": 0,
        "css_found": 0,
        "css_downloaded": 0,
        "js_found": 0,
        "js_downloaded": 0,
        "fonts_found": 0,
        "fonts_downloaded": 0,
        "documents_found": 0,
        "documents_downloaded": 0,
    }


def _empty_crawl(url: str) -> dict[str, Any]:
    return {
        "current_url": url,
        "pages_found": 0,
        "pages_processed": 0,
        "pages_remaining": 0,
        "links_discovered": 0,
        "links_crawled": 0,
    }


def _empty_ai() -> dict[str, Any]:
    return {
        "current_task": "Waiting",
        "current_module": "—",
        "components_generated": 0,
        "components_total": 0,
        "react_files_created": 0,
        "pages_generated": 0,
        "layouts_generated": 0,
        "tokens_processed": 0,
    }


def _empty_download() -> dict[str, Any]:
    return {
        "name": "",
        "url": "",
        "percent": 0,
        "downloaded_bytes": 0,
        "total_bytes": 0,
        "downloaded_human": "0 B",
        "total_human": "0 B",
        "speed_bps": 0,
        "speed_human": "0 B/s",
        "eta_seconds": 0,
        "eta_human": "—",
    }


def empty_telemetry(url: str) -> dict[str, Any]:
    now = time.time()
    return {
        "project_name": project_name(url),
        "current_stage": "queued",
        "current_url": url,
        "files_downloaded": 0,
        "files_remaining": 0,
        "bytes_downloaded": 0,
        "data_downloaded_human": "0 B",
        "download_speed_bps": 0,
        "download_speed_human": "0 B/s",
        "processing_speed": 0,
        "started_at": now,
        "started_at_fmt": time.strftime("%Y-%m-%d %H:%M:%S"),
        "eta_seconds": None,
        "eta_fmt": "—",
        "cpu_percent": 0,
        "memory_percent": 0,
        "discovered_links": 0,
        "pages_scanned": 0,
        "urls_crawled": 0,
        "concurrent_downloads": 0,
        "extraction": {
            "html": 0,
            "css": 0,
            "js": 0,
            "images": 0,
            "videos": 0,
            "fonts": 0,
            "icons": 0,
        },
        "assets": _empty_assets(),
        "crawl": _empty_crawl(url),
        "ai": _empty_ai(),
        "current_download": _empty_download(),
        "active_downloads": [],
        "workers": [],
        "pipeline": _init_pipeline(),
        "activity_log": [],
        "error_log": [],
        "error_tracking": {"count": 0, "latest": None, "retry_count": 0, "status": "—"},
        "skipped_downloads": 0,
        "warnings": [],
    }


def _init_pipeline() -> list[dict[str, Any]]:
    return [
        {"id": sid, "label": label, "status": "pending", "progress": 0, "message": ""}
        for sid, label in PIPELINE_STAGES
    ]


def get_system_metrics() -> dict[str, Any]:
    global _prev_net_io
    out: dict[str, Any] = {
        "cpu_percent": 0.0,
        "memory_percent": 0.0,
        "disk_percent": 0.0,
        "disk_used_human": "—",
        "disk_total_human": "—",
        "network_up_bps": 0,
        "network_down_bps": 0,
        "network_up_human": "0 B/s",
        "network_down_human": "0 B/s",
        "gpu_percent": None,
        "gpu_name": None,
        "timestamp": time.time(),
    }
    try:
        import psutil

        out["cpu_percent"] = psutil.cpu_percent(interval=0.05)
        mem = psutil.virtual_memory()
        out["memory_percent"] = mem.percent
        disk = psutil.disk_usage("/")
        out["disk_percent"] = disk.percent
        out["disk_used_human"] = human_bytes(disk.used)
        out["disk_total_human"] = human_bytes(disk.total)
        net = psutil.net_io_counters()
        now = time.time()
        if _prev_net_io and net:
            dt = max(now - _prev_net_io[2], 0.001)
            down = max(0, net.bytes_recv - _prev_net_io[0]) / dt
            up = max(0, net.bytes_sent - _prev_net_io[1]) / dt
            out["network_down_bps"] = int(down)
            out["network_up_bps"] = int(up)
            out["network_down_human"] = human_speed(down)
            out["network_up_human"] = human_speed(up)
        if net:
            _prev_net_io = (net.bytes_recv, net.bytes_sent, now)
    except Exception:
        pass

    try:
        import subprocess

        r = subprocess.run(
            ["nvidia-smi", "--query-gpu=utilization.gpu,name", "--format=csv,noheader,nounits"],
            capture_output=True,
            text=True,
            timeout=1,
        )
        if r.returncode == 0 and r.stdout.strip():
            line = r.stdout.strip().split("\n")[0]
            parts = [p.strip() for p in line.split(",")]
            if parts:
                out["gpu_percent"] = float(parts[0])
                out["gpu_name"] = parts[1] if len(parts) > 1 else "GPU"
    except Exception:
        pass

    sample = {
        "t": int(time.time()),
        "cpu": out["cpu_percent"],
        "memory": out["memory_percent"],
        "download_speed": 0,
        "processing_speed": 0,
        "jobs_per_min": 0,
    }
    _metrics_history.append(sample)
    out["history"] = list(_metrics_history)
    return out


def update_metrics_history(**kwargs: float) -> None:
    if _metrics_history:
        last = _metrics_history[-1]
        for k, v in kwargs.items():
            last[k] = v


def get_metrics_history() -> list[dict[str, Any]]:
    return list(_metrics_history)


def compute_global_stats(jobs: list[dict]) -> dict[str, Any]:
    today = time.strftime("%Y-%m-%d")
    total = len(jobs)
    running = queued = completed = failed = cancelled = 0
    total_files = 0
    total_bytes = 0
    total_urls = 0
    total_speed = 0
    completed_today = 0

    for j in jobs:
        st = j.get("status", "")
        if j.get("cancelled"):
            cancelled += 1
        elif st == "failed":
            failed += 1
        elif st in COMPLETED_STATUSES:
            completed += 1
            if (j.get("created_at") or "").startswith(today):
                completed_today += 1
        elif st == "queued":
            tel = j.get("telemetry") or {}
            stage = tel.get("current_stage", "queued")
            if stage and stage not in ("queued", "completed"):
                running += 1
            else:
                queued += 1
        elif st in RUNNING_STATUSES:
            running += 1

        tel = j.get("telemetry") or {}
        total_files += tel.get("files_downloaded", 0)
        total_bytes += tel.get("bytes_downloaded", 0)
        total_urls += tel.get("urls_crawled", 0)
        if st in RUNNING_STATUSES:
            total_speed += tel.get("download_speed_bps", 0)

    active_workers = running
    return {
        "total_jobs": total,
        "running_jobs": running,
        "queued_jobs": queued,
        "completed_jobs": completed,
        "failed_jobs": failed,
        "cancelled_jobs": cancelled,
        "active_workers": max(active_workers, 1 if running else 0),
        "processing_speed": round(total_speed / max(running, 1)),
        "processing_speed_human": human_speed(total_speed / max(running, 1)),
        "total_files_downloaded": total_files,
        "total_data_downloaded_bytes": total_bytes,
        "total_data_downloaded_human": human_bytes(total_bytes),
        "total_urls_crawled": total_urls,
        "pending_jobs": queued,
        "completed_today": completed_today,
    }


def log_activity(telemetry: dict, message: str, level: str = "info") -> None:
    entry = {
        "time": time.strftime("%H:%M:%S"),
        "level": level,
        "message": message,
    }
    logs = telemetry.setdefault("activity_log", [])
    logs.append(entry)
    if len(logs) > 300:
        telemetry["activity_log"] = logs[-300:]


def log_error(
    telemetry: dict,
    message: str,
    stage: str = "",
    retry_count: int = 0,
    *,
    recoverable: bool = False,
) -> None:
    if recoverable:
        warnings = telemetry.setdefault("warnings", [])
        if message not in warnings[-20:]:
            warnings.append(message)
        if len(warnings) > 30:
            telemetry["warnings"] = warnings[-30:]
        telemetry["skipped_downloads"] = telemetry.get("skipped_downloads", 0) + 1
        return

    entry = {
        "time": time.strftime("%H:%M:%S"),
        "stage": stage,
        "message": message,
        "retry_count": retry_count,
        "status": "retrying" if retry_count else "failed",
    }
    errs = telemetry.setdefault("error_log", [])
    # Deduplicate repeated errors
    if errs and errs[-1].get("message") == message:
        return
    errs.append(entry)
    if len(errs) > 50:
        telemetry["error_log"] = errs[-50:]
    tracking = telemetry.setdefault("error_tracking", {"count": 0, "latest": None, "retry_count": 0, "status": "—"})
    tracking["count"] = len(errs)
    tracking["latest"] = message
    tracking["retry_count"] = retry_count
    tracking["status"] = "Retrying" if retry_count else "Failed"


def set_stage(telemetry: dict, stage_id: str, message: str = "", progress: int = 0) -> None:
    telemetry["current_stage"] = stage_id
    pipeline = telemetry.get("pipeline") or _init_pipeline()
    idx = STAGE_INDEX.get(stage_id, 0)
    for i, step in enumerate(pipeline):
        if i < idx:
            if step["status"] != "completed":
                step["status"] = "completed"
                step["progress"] = 100
        elif i == idx:
            step["status"] = "running"
            step["progress"] = progress
            step["message"] = message
        elif i > idx and step["status"] == "running":
            step["status"] = "pending"
    telemetry["pipeline"] = pipeline
    update_workers(telemetry)
    if message:
        log_activity(telemetry, f"[{stage_id}] {message}")


def complete_stage(telemetry: dict, stage_id: str, message: str = "") -> None:
    pipeline = telemetry.get("pipeline") or _init_pipeline()
    for step in pipeline:
        if step["id"] == stage_id:
            step["status"] = "completed"
            step["progress"] = 100
            step["message"] = message
            break
    telemetry["pipeline"] = pipeline
    update_workers(telemetry)
    if message:
        log_activity(telemetry, f"✓ {message}")


def update_workers(telemetry: dict) -> None:
    stage = telemetry.get("current_stage", "queued")
    workers = [
        {"id": 1, "name": "Worker #1", "task": "Idle", "status": "idle"},
        {"id": 2, "name": "Worker #2", "task": "Idle", "status": "idle"},
        {"id": 3, "name": "Worker #3", "task": "Idle", "status": "idle"},
        {"id": 4, "name": "Worker #4", "task": "Idle", "status": "idle"},
    ]
    mapping = {
        "downloading": (0, "Downloading Assets"),
        "crawling": (0, "Crawling Pages"),
        "asset_discovery": (0, "Discovering Assets"),
        "html_analysis": (1, "Parsing HTML"),
        "css_analysis": (1, "Parsing CSS"),
        "js_analysis": (1, "Parsing JavaScript"),
        "image_processing": (3, "Processing Images"),
        "video_processing": (3, "Processing Videos"),
        "ai_analysis": (2, "AI Structure Analysis"),
        "react_generation": (2, "Generating React Components"),
        "folder_structure": (2, "Creating Folder Structure"),
        "dependency_mapping": (2, "Mapping Dependencies"),
        "packaging": (2, "Packaging Export"),
    }
    if stage in mapping:
        idx, task = mapping[stage]
        workers[idx]["task"] = task
        workers[idx]["status"] = "busy"
    telemetry["workers"] = workers


def update_crawl_metrics(
    telemetry: dict,
    *,
    current_url: str | None = None,
    pages_found: int | None = None,
    pages_processed: int | None = None,
    links_discovered: int | None = None,
    links_crawled: int | None = None,
) -> None:
    crawl = telemetry.setdefault("crawl", _empty_crawl(telemetry.get("current_url", "")))
    if current_url:
        crawl["current_url"] = current_url
        telemetry["current_url"] = current_url
    if pages_found is not None:
        crawl["pages_found"] = pages_found
    if pages_processed is not None:
        crawl["pages_processed"] = pages_processed
        telemetry["urls_crawled"] = pages_processed
    if links_discovered is not None:
        crawl["links_discovered"] = links_discovered
        telemetry["discovered_links"] = links_discovered
    if links_crawled is not None:
        crawl["links_crawled"] = links_crawled
    found = crawl.get("pages_found", 0)
    done = crawl.get("pages_processed", 0)
    crawl["pages_remaining"] = max(0, found - done)


def update_ai_metrics(
    telemetry: dict,
    *,
    current_task: str | None = None,
    current_module: str | None = None,
    components_generated: int | None = None,
    components_total: int | None = None,
    react_files: int | None = None,
    react_files_created: int | None = None,
    pages_generated: int | None = None,
    layouts_generated: int | None = None,
    tokens_delta: int = 0,
) -> None:
    ai = telemetry.setdefault("ai", _empty_ai())
    if current_task:
        ai["current_task"] = current_task
    if current_module:
        ai["current_module"] = current_module
    if components_generated is not None:
        ai["components_generated"] = components_generated
    if components_total is not None:
        ai["components_total"] = components_total
    rf = react_files_created if react_files_created is not None else react_files
    if rf is not None:
        ai["react_files_created"] = rf
    if pages_generated is not None:
        ai["pages_generated"] = pages_generated
    if layouts_generated is not None:
        ai["layouts_generated"] = layouts_generated
    if tokens_delta:
        ai["tokens_processed"] = ai.get("tokens_processed", 0) + tokens_delta


def update_current_download(
    telemetry: dict,
    *,
    name: str = "",
    url: str = "",
    downloaded: int = 0,
    total: int = 0,
    speed_bps: int = 0,
) -> None:
    dl = telemetry.setdefault("current_download", _empty_download())
    if name:
        dl["name"] = name
    if url:
        dl["url"] = url
    dl["downloaded_bytes"] = downloaded
    dl["total_bytes"] = total
    dl["downloaded_human"] = human_bytes(downloaded)
    dl["total_human"] = human_bytes(total) if total else "—"
    pct = int((downloaded / total) * 100) if total > 0 else (100 if downloaded else 0)
    dl["percent"] = min(100, pct)
    dl["speed_bps"] = speed_bps
    dl["speed_human"] = human_speed(speed_bps)
    if speed_bps > 0 and total > downloaded:
        remaining = (total - downloaded) / speed_bps
        dl["eta_seconds"] = int(remaining)
        m, s = divmod(int(remaining), 60)
        dl["eta_human"] = f"{m}m {s}s" if m else f"{s} sec"
    else:
        dl["eta_seconds"] = 0
        dl["eta_human"] = "—"


def apply_hook_event(telemetry: dict, event: dict[str, Any]) -> None:
    kind = event.get("kind")
    if kind == "download_start":
        name = event.get("name", "file")
        total = event.get("total_bytes", 0)
        telemetry["concurrent_downloads"] = event.get("concurrent_downloads", 1)
        update_current_download(telemetry, name=name, url=event.get("url", ""), downloaded=0, total=total)
        set_stage(telemetry, "downloading", f"Downloading {name}", telemetry.get("current_download", {}).get("percent", 0))
    elif kind == "download_progress":
        name = event.get("name", telemetry.get("current_download", {}).get("name", ""))
        downloaded = event.get("downloaded_bytes", 0)
        total = event.get("total_bytes", 0)
        speed = event.get("speed_bps", 0)
        update_current_download(telemetry, name=name, downloaded=downloaded, total=total, speed_bps=speed)
        telemetry["download_speed_bps"] = speed
        telemetry["download_speed_human"] = human_speed(speed)
    elif kind == "download_complete":
        name = event.get("name", "file")
        size = event.get("size", 0)
        cat = event.get("category", "")
        telemetry["concurrent_downloads"] = event.get("concurrent_downloads", 0)
        update_current_download(telemetry, name=name, downloaded=size, total=size, speed_bps=0)
        _bump_asset_downloaded(telemetry, cat)
        log_activity(telemetry, f"Downloaded {name}", "download")
        active = list(telemetry.get("active_downloads") or [])
        active.append({"name": name, "folder": cat, "size_human": human_bytes(size), "percent": 100})
        telemetry["active_downloads"] = active[-20:]
    elif kind == "download_error":
        err = event.get("error", "")
        try:
            from scraper.utils import is_recoverable_download_error
            recoverable = is_recoverable_download_error(err)
        except Exception:
            recoverable = "404" in str(err) or "999" in str(err)
        log_error(
            telemetry,
            f"Failed downloading {event.get('name', 'file')}: {err}",
            "downloading",
            event.get("retry_count", 0),
            recoverable=recoverable,
        )
    elif kind == "asset_saved":
        name = event.get("name", "")
        size = event.get("size", 0)
        cat = event.get("category", "")
        _bump_asset_downloaded(telemetry, cat)
        # Mirror captures many files quickly — log sparingly
        logs = telemetry.get("activity_log") or []
        if not logs or logs[-1].get("message") != f"Saved {name}":
            log_activity(telemetry, f"Saved {name}", "download")
    elif kind == "activity":
        log_activity(telemetry, event.get("message", ""), event.get("level", "info"))


def _bump_asset_downloaded(telemetry: dict, category: str) -> None:
    assets = telemetry.setdefault("assets", _empty_assets())
    key_map = {
        "images": "images_downloaded",
        "videos": "videos_downloaded",
        "css": "css_downloaded",
        "js": "js_downloaded",
        "fonts": "fonts_downloaded",
        "documents": "documents_downloaded",
    }
    field = key_map.get(category)
    if field:
        assets[field] = assets.get(field, 0) + 1


def update_asset_counters_from_downloads(telemetry: dict, downloads: dict[str, Any], html_stats: dict | None = None) -> None:
    assets = telemetry.setdefault("assets", _empty_assets())
    for key, found_key, dl_key in (
        ("images", "images_found", "images_downloaded"),
        ("videos", "videos_found", "videos_downloaded"),
        ("css", "css_found", "css_downloaded"),
        ("js", "js_found", "js_downloaded"),
        ("fonts", "fonts_found", "fonts_downloaded"),
    ):
        cat = downloads.get(key, {})
        count = cat.get("count", 0)
        assets[dl_key] = max(assets.get(dl_key, 0), count)
        assets[found_key] = max(assets.get(found_key, 0), count)

    if html_stats:
        assets["images_found"] = max(assets["images_found"], html_stats.get("images_count", 0))
        assets["videos_found"] = max(assets["videos_found"], html_stats.get("videos_count", 0))
        assets["documents_found"] = max(assets.get("documents_found", 0), html_stats.get("links_total", 0) // 10)

    total = downloads.get("_total", {})
    telemetry["files_downloaded"] = total.get("files", telemetry.get("files_downloaded", 0))
    telemetry["bytes_downloaded"] = total.get("size", telemetry.get("bytes_downloaded", 0))
    telemetry["data_downloaded_human"] = human_bytes(telemetry["bytes_downloaded"])
    telemetry["extraction"] = {
        "html": 1 if total.get("files") else telemetry.get("extraction", {}).get("html", 0),
        "css": assets["css_downloaded"],
        "js": assets["js_downloaded"],
        "images": assets["images_downloaded"],
        "videos": assets["videos_downloaded"],
        "fonts": assets["fonts_downloaded"],
        "icons": downloads.get("icons", {}).get("count", 0),
    }


def update_download_metrics(
    telemetry: dict,
    downloads: dict[str, Any],
    prev_files: int = 0,
    prev_bytes: int = 0,
    prev_time: float | None = None,
) -> None:
    total = downloads.get("_total", {})
    files = total.get("files", 0)
    size = total.get("size", 0)
    telemetry["files_downloaded"] = files
    telemetry["bytes_downloaded"] = size
    telemetry["data_downloaded_human"] = human_bytes(size)
    update_asset_counters_from_downloads(telemetry, downloads)

    now = time.time()
    if prev_time and now > prev_time:
        dt = now - prev_time
        if files > prev_files:
            telemetry["download_speed_bps"] = int((files - prev_files) / dt)
        if size > prev_bytes:
            bps = (size - prev_bytes) / dt
            telemetry["download_speed_bps"] = int(bps)
            telemetry["download_speed_human"] = human_speed(bps)

    active = []
    for key in ("css", "js", "images", "videos", "fonts", "icons"):
        cat = downloads.get(key, {})
        for f in (cat.get("files") or [])[-5:]:
            active.append(
                {
                    "name": f.get("name", ""),
                    "folder": key,
                    "size_human": f.get("size_human", ""),
                    "size": f.get("size", 0),
                    "percent": 100,
                }
            )
    telemetry["active_downloads"] = active[-20:]


def estimate_eta(telemetry: dict, overall_progress: int) -> None:
    started = telemetry.get("started_at", time.time())
    elapsed = time.time() - started
    if overall_progress > 5 and elapsed > 0:
        total_est = elapsed / (overall_progress / 100)
        remaining = max(0, total_est - elapsed)
        telemetry["eta_seconds"] = int(remaining)
        m, s = divmod(int(remaining), 60)
        telemetry["eta_fmt"] = f"{m}m {s}s" if m else f"{s}s"
    else:
        telemetry["eta_seconds"] = None
        telemetry["eta_fmt"] = "—"


def phase_to_stage(phase: str) -> str:
    return {
        "discover": "asset_discovery",
        "discovered": "asset_discovery",
        "scraping": "crawling",
        "downloading": "downloading",
        "linking": "content_extraction",
        "analyze": "ai_analysis",
        "convert": "react_generation",
    }.get(phase, "crawling")
