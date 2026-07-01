"""In-memory pub/sub for real-time SSE job updates."""

from __future__ import annotations

import json
import queue
import threading
from typing import Any

_subscribers: dict[str, list[queue.Queue]] = {}
_global_subscribers: list[queue.Queue] = []
_lock = threading.Lock()

KEEPALIVE = ": keepalive\n\n"


def subscribe(job_id: str | None = None) -> queue.Queue:
    q: queue.Queue = queue.Queue(maxsize=200)
    with _lock:
        if job_id:
            _subscribers.setdefault(job_id, []).append(q)
        else:
            _global_subscribers.append(q)
    return q


def unsubscribe(job_id: str | None, q: queue.Queue) -> None:
    with _lock:
        if job_id:
            subs = _subscribers.get(job_id, [])
            if q in subs:
                subs.remove(q)
        elif q in _global_subscribers:
            _global_subscribers.remove(q)


def publish(job_id: str, event: dict[str, Any]) -> None:
    payload = json.dumps({**event, "job_id": job_id}, default=str)
    msg = f"data: {payload}\n\n"
    with _lock:
        targets = list(_global_subscribers)
        targets.extend(_subscribers.get(job_id, []))
    for q in targets:
        try:
            q.put_nowait(msg)
        except queue.Full:
            pass


def format_sse(event: dict[str, Any]) -> str:
    return f"data: {json.dumps(event, default=str)}\n\n"
