"""Scraper Studio — paste URL, scrape, convert, download."""

from __future__ import annotations

import asyncio
import queue as queue_mod
import sys
from pathlib import Path

from fastapi import BackgroundTasks, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, HTMLResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

ROOT = Path(__file__).resolve().parents[1]
PARENT = ROOT.parent
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(PARENT))

from api.jobs import (  # noqa: E402
    JobStatus,
    create_job,
    get_download_path,
    get_global_stats,
    get_job,
    list_jobs,
    run_convert,
    run_scrape,
)
from api.event_bus import KEEPALIVE, subscribe, unsubscribe  # noqa: E402
from api.telemetry import get_metrics_history, get_system_metrics  # noqa: E402

WEB = ROOT / "web"
PROJECTS = ROOT / "projects"
PROJECTS.mkdir(parents=True, exist_ok=True)

app = FastAPI(title="Scraper Studio", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class ScrapeRequest(BaseModel):
    url: str = Field(..., min_length=3, description="Website URL to scrape")
    wait_ms: int = Field(12000, ge=5000, le=90000)
    mode: str = Field("full", pattern="^(single|full)$", description="single = first page only, full = entire website")
    max_pages: int = Field(100, ge=1, le=300, description="Auto-detect up to this many pages (full mode only)")
    speed: str = Field("fast", pattern="^(fast|balanced|quality)$", description="fast = parallel + short waits, quality = slowest best")
    auto_convert: bool = Field(True, description="Automatically convert to React SPA after full scrape")
    auto_convert_stack: str = Field("react-architecture", pattern="^(static|react-vite|react-architecture|nextjs|laravel)$")


class ConvertRequest(BaseModel):
    stack: str = Field(..., pattern="^(static|react-vite|react-architecture|nextjs|laravel)$")


@app.get("/api/health")
def health():
    return {"ok": True, "service": "scraper-studio"}


@app.post("/api/scrape")
def start_scrape(body: ScrapeRequest, background: BackgroundTasks):
    job = create_job(
        body.url,
        body.max_pages,
        body.mode,
        body.speed,
        body.auto_convert,
        body.auto_convert_stack,
    )
    background.add_task(run_scrape, job.id, body.wait_ms, body.max_pages, body.mode, body.speed)
    return {
        "job_id": job.id,
        "status": job.status.value,
        "url": job.url,
        "mode": body.mode,
        "speed": body.speed,
        "auto_convert": body.auto_convert,
    }


@app.get("/api/jobs")
def all_jobs():
    return {"jobs": list_jobs()}


@app.get("/api/system")
def system_metrics():
    return get_system_metrics()


@app.get("/api/stats")
def global_stats():
    sys_m = get_system_metrics()
    stats = get_global_stats()
    hist = sys_m.get("history", [])
    if hist:
        hist[-1]["jobs_per_min"] = stats.get("running_jobs", 0) * 2
        hist[-1]["download_speed"] = stats.get("processing_speed", 0)
    return {**sys_m, "stats": stats, "history": hist}


@app.get("/api/jobs/{job_id}/stream")
async def job_event_stream(job_id: str):
    if not get_job(job_id):
        raise HTTPException(404, "Job not found")

    async def generate():
        q = subscribe(job_id)
        try:
            yield f"data: {{\"type\":\"connected\",\"job_id\":\"{job_id}\"}}\n\n"
            while True:
                try:
                    msg = await asyncio.to_thread(q.get, True, 12)
                    yield msg
                except queue_mod.Empty:
                    sys_m = get_system_metrics()
                    stats = get_global_stats()
                    import json
                    hist = sys_m.get("history", [])
                    if hist:
                        hist[-1]["jobs_per_min"] = stats.get("running_jobs", 0) * 2
                    payload = json.dumps({
                        "type": "heartbeat",
                        "cpu": sys_m["cpu_percent"],
                        "memory": sys_m["memory_percent"],
                        "disk": sys_m.get("disk_percent", 0),
                        "network_down": sys_m.get("network_down_bps", 0),
                        "network_down_human": sys_m.get("network_down_human", "0 B/s"),
                        "gpu": sys_m.get("gpu_percent"),
                        "gpu_name": sys_m.get("gpu_name"),
                        "stats": stats,
                        "history": hist,
                    })
                    yield f"data: {payload}\n\n"
        finally:
            unsubscribe(job_id, q)

    return StreamingResponse(
        generate(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "Connection": "keep-alive", "X-Accel-Buffering": "no"},
    )


@app.get("/api/stream")
async def global_event_stream():
    async def generate():
        q = subscribe(None)
        try:
            yield "data: {\"type\":\"connected\",\"scope\":\"global\"}\n\n"
            while True:
                try:
                    msg = await asyncio.to_thread(q.get, True, 12)
                    yield msg
                except queue_mod.Empty:
                    sys_m = get_system_metrics()
                    stats = get_global_stats()
                    import json
                    payload = json.dumps({
                        "type": "heartbeat",
                        "cpu": sys_m["cpu_percent"],
                        "memory": sys_m["memory_percent"],
                        "disk": sys_m.get("disk_percent", 0),
                        "stats": stats,
                        "history": sys_m.get("history", []),
                    })
                    yield f"data: {payload}\n\n"
        finally:
            unsubscribe(None, q)

    return StreamingResponse(
        generate(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "Connection": "keep-alive", "X-Accel-Buffering": "no"},
    )


@app.get("/api/jobs/{job_id}")
def job_status(job_id: str):
    job = get_job(job_id)
    if not job:
        raise HTTPException(404, "Job not found")
    return job.to_dict()


@app.post("/api/jobs/{job_id}/convert")
def convert_job(job_id: str, body: ConvertRequest, background: BackgroundTasks):
    job = get_job(job_id)
    if not job:
        raise HTTPException(404, "Job not found")
    if job.status not in (JobStatus.READY, JobStatus.CONVERTED):
        raise HTTPException(400, f"Job not ready (status: {job.status.value})")

    background.add_task(run_convert, job_id, body.stack)
    return {"job_id": job_id, "stack": body.stack, "status": "converting"}


@app.get("/api/jobs/{job_id}/download")
def download_job(job_id: str, kind: str = "scraped"):
    job = get_job(job_id)
    if not job:
        raise HTTPException(404, "Job not found")
    if kind == "converted" and job.status != JobStatus.CONVERTED:
        raise HTTPException(400, "Convert first before downloading project")
    if kind not in ("scraped", "converted"):
        raise HTTPException(400, "kind must be scraped or converted")

    zip_path = get_download_path(job_id, kind)
    if not zip_path or not zip_path.exists():
        raise HTTPException(404, "Nothing to download yet")

    filename = zip_path.name
    return FileResponse(
        zip_path,
        media_type="application/zip",
        filename=filename,
    )


@app.get("/api/jobs/{job_id}/preview/{path:path}")
def preview_asset(job_id: str, path: str):
    job = get_job(job_id)
    if not job or not job.site_dir:
        raise HTTPException(404, "Job not found")

    site_root = Path(job.site_dir).resolve()
    if not site_root.is_dir():
        raise HTTPException(404, "Scraped site not found on disk")

    sys.path.insert(0, str(PARENT))
    from scraper.preview_serve import (
        prepare_preview_html,
        preview_media_type,
        resolve_preview_file,
    )

    file_path = resolve_preview_file(site_root, path)
    if not file_path:
        raise HTTPException(404, f"Preview file not found: {path}")

    if file_path.suffix.lower() in (".html", ".htm"):
        html = file_path.read_text(encoding="utf-8", errors="replace")
        html = prepare_preview_html(html, job_id, file_path, site_root)
        return HTMLResponse(html, media_type="text/html; charset=utf-8")

    media_type = preview_media_type(file_path)
    return FileResponse(file_path, media_type=media_type)


if WEB.exists():
    app.mount("/", StaticFiles(directory=str(WEB), html=True), name="web")
