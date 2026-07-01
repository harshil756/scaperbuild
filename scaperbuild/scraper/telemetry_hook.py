"""Optional live telemetry callbacks during scrape (wired from Scraper Studio)."""

from __future__ import annotations

import threading
from typing import Any, Callable

_lock = threading.Lock()
_job_id: str | None = None
_callback: Callable[[dict[str, Any]], None] | None = None
_active_downloads = 0


def set_hook(job_id: str | None, callback: Callable[[dict[str, Any]], None] | None) -> None:
    global _job_id, _callback, _active_downloads
    with _lock:
        _job_id = job_id
        _callback = callback
        _active_downloads = 0


def _emit(event: dict[str, Any]) -> None:
    with _lock:
        cb = _callback
        jid = _job_id
    if cb and jid:
        cb({**event, "job_id": jid})


def report_download_start(name: str, url: str = "", total_bytes: int = 0) -> None:
    global _active_downloads
    with _lock:
        _active_downloads += 1
        concurrent = _active_downloads
    _emit(
        {
            "kind": "download_start",
            "name": name,
            "url": url,
            "total_bytes": total_bytes,
            "concurrent_downloads": concurrent,
        }
    )


def report_download_progress(
    name: str,
    downloaded: int,
    total: int,
    speed_bps: int = 0,
) -> None:
    _emit(
        {
            "kind": "download_progress",
            "name": name,
            "downloaded_bytes": downloaded,
            "total_bytes": total,
            "speed_bps": speed_bps,
        }
    )


def report_download_complete(name: str, size: int, category: str = "") -> None:
    global _active_downloads
    with _lock:
        _active_downloads = max(0, _active_downloads - 1)
        concurrent = _active_downloads
    _emit(
        {
            "kind": "download_complete",
            "name": name,
            "size": size,
            "category": category,
            "concurrent_downloads": concurrent,
        }
    )


def report_download_error(name: str, error: str, retry_count: int = 0) -> None:
    global _active_downloads
    with _lock:
        _active_downloads = max(0, _active_downloads - 1)
    _emit(
        {
            "kind": "download_error",
            "name": name,
            "error": error,
            "retry_count": retry_count,
        }
    )


def report_asset_saved(name: str, size: int, category: str = "") -> None:
    _emit({"kind": "asset_saved", "name": name, "size": size, "category": category})


def report_activity(message: str, level: str = "info") -> None:
    _emit({"kind": "activity", "message": message, "level": level})
