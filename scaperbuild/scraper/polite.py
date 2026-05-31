"""
Polite read-only scraping — does not modify the live website.

- Only HTTP GET requests (no POST/PUT/DELETE)
- One request at a time with delays (no traffic flood)
- Standard browser User-Agent (not aggressive bot)
- Same as a normal visitor loading the homepage once
"""

from __future__ import annotations

import time

# Delay between background asset fetches (seconds)
FETCH_DELAY_SEC = 0.25

# Delay before starting asset harvest after page load
POST_LOAD_DELAY_SEC = 0.5

_last_fetch_at: float = 0.0


def wait_between_requests() -> None:
    """Space out requests so we do not hammer the origin server."""
    global _last_fetch_at
    now = time.monotonic()
    elapsed = now - _last_fetch_at
    if elapsed < FETCH_DELAY_SEC:
        time.sleep(FETCH_DELAY_SEC - elapsed)
    _last_fetch_at = time.monotonic()


def print_polite_notice(url: str) -> None:
    print(
        "[*] Polite mode: read-only GET requests only — "
        "does not change or submit anything on the live site."
    )
    print(f"    Target: {url}")
    print(f"    ~{FETCH_DELAY_SEC}s delay between asset downloads.\n")
