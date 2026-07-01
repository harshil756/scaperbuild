"""Scrape speed presets — fast / balanced / quality."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class SpeedProfile:
    name: str
    wait_ms: int
    fetch_delay_sec: float
    parallel_pages: int
    parallel_assets: int
    use_networkidle: bool
    css_fetch_rounds: int
    widget_mode: str  # "fast" | "full"
    skip_live_discovery_if_nav: int  # skip 2nd browser pass when homepage nav has N+ links
    block_trackers: bool


PROFILES: dict[str, SpeedProfile] = {
    "fast": SpeedProfile(
        name="fast",
        wait_ms=8000,
        fetch_delay_sec=0.03,
        parallel_pages=3,
        parallel_assets=12,
        use_networkidle=False,
        css_fetch_rounds=3,
        widget_mode="fast",
        skip_live_discovery_if_nav=2,
        block_trackers=True,
    ),
    "balanced": SpeedProfile(
        name="balanced",
        wait_ms=15000,
        fetch_delay_sec=0.1,
        parallel_pages=2,
        parallel_assets=8,
        use_networkidle=True,
        css_fetch_rounds=5,
        widget_mode="fast",
        skip_live_discovery_if_nav=4,
        block_trackers=True,
    ),
    "quality": SpeedProfile(
        name="quality",
        wait_ms=35000,
        fetch_delay_sec=0.25,
        parallel_pages=1,
        parallel_assets=4,
        use_networkidle=True,
        css_fetch_rounds=8,
        widget_mode="full",
        skip_live_discovery_if_nav=99,
        block_trackers=False,
    ),
}

_active: SpeedProfile = PROFILES["fast"]


def set_speed(mode: str) -> SpeedProfile:
    global _active
    _active = PROFILES.get(mode, PROFILES["fast"])
    return _active


def get_speed() -> SpeedProfile:
    return _active


def resolve_wait_ms(wait_ms: int | None, speed: str | None = None) -> int:
    if speed and speed in PROFILES:
        return PROFILES[speed].wait_ms
    if wait_ms and wait_ms != 35000:
        return wait_ms
    return get_speed().wait_ms
