"""
Polite read-only scraping — does not modify the live website.

- Only HTTP GET requests (no POST/PUT/DELETE)
- One request at a time with delays (no traffic flood)
- Standard browser User-Agent (not aggressive bot)
- Same as a normal visitor loading the homepage once
"""

from __future__ import annotations

import time

# Delay between background asset fetches (seconds) — overridden by speed profile
FETCH_DELAY_SEC = 0.25

# Delay before starting asset harvest after page load
POST_LOAD_DELAY_SEC = 0.5

_last_fetch_at: float = 0.0
_fetch_delay_override: float | None = None


def set_fetch_delay(seconds: float) -> None:
    global _fetch_delay_override
    _fetch_delay_override = max(0.0, seconds)


def get_fetch_delay() -> float:
    if _fetch_delay_override is not None:
        return _fetch_delay_override
    try:
        from .speed import get_speed
        return get_speed().fetch_delay_sec
    except Exception:
        return FETCH_DELAY_SEC


def wait_between_requests() -> None:
    """Space out requests so we do not hammer the origin server."""
    global _last_fetch_at
    delay = get_fetch_delay()
    if delay <= 0:
        _last_fetch_at = time.monotonic()
        return
    now = time.monotonic()
    elapsed = now - _last_fetch_at
    if elapsed < delay:
        time.sleep(delay - elapsed)
    _last_fetch_at = time.monotonic()


def print_polite_notice(url: str) -> None:
    print(
        "[*] Polite mode: read-only GET requests only — "
        "does not change or submit anything on the live site."
    )
    print(f"    Target: {url}")
    print(f"    ~{FETCH_DELAY_SEC}s delay between asset downloads.\n")
