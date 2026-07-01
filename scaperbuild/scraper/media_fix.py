"""Fix videos, hero banners, and broken NitroPack image paths for offline/React."""

from __future__ import annotations

import re
from pathlib import Path

from bs4 import BeautifulSoup

HERO_MEDIA_CSS = """
/* Scraper: hero background video — same-to-same */
.race-hero,
.elementor-background-video-container,
.elementor-element[class*="background-video"] {
  position: relative !important;
  overflow: hidden !important;
}
.race-hero video.rh-video,
.race-hero .rh-video,
video.elementor-background-video-hosted,
.elementor-background-video-hosted {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  min-width: 100% !important;
  min-height: 100% !important;
  width: auto !important;
  height: auto !important;
  max-width: none !important;
  object-fit: cover !important;
  z-index: 0 !important;
}
.race-hero .rh-overlay,
.race-hero .rh-content {
  position: relative !important;
  z-index: 1 !important;
}
"""


def _image_lookup(images_dir: Path) -> dict[str, str]:
    """Map lowercase stems and original names → relative assets/images/ path."""
    lookup: dict[str, str] = {}
    if not images_dir.is_dir():
        return lookup
    for f in images_dir.rglob("*"):
        if not f.is_file():
            continue
        rel = f"assets/images/{f.relative_to(images_dir).as_posix()}"
        lookup[f.name.lower()] = rel
        stem = f.stem.lower()
        lookup[stem] = rel
        base = re.sub(r"_[a-f0-9]{6,}$", "", stem, flags=re.I)
        if base:
            lookup.setdefault(base, rel)
    return lookup


def _resolve_nitro_path(raw: str, lookup: dict[str, str]) -> str | None:
    """Turn Nitro .bin proxy paths into real /assets/images/... URLs."""
    if ".bin/" not in raw and "nitro" not in raw.lower():
        return None
    # Last path segment that looks like a file
    for part in reversed(raw.replace("\\", "/").split("/")):
        if not part or part.endswith(".bin"):
            continue
        if "." not in part:
            continue
        name = part.split("?")[0]
        hit = lookup.get(name.lower())
        if hit:
            return hit
        stem = Path(name).stem.lower()
        hit = lookup.get(stem)
        if hit:
            return hit
        base = re.sub(r"_[a-f0-9]{6,}$", "", stem, flags=re.I)
        hit = lookup.get(base)
        if hit:
            return hit
    return None


def fix_nitro_image_paths(html: str, page_dir: Path) -> str:
    images_dir = page_dir / "assets" / "images"
    lookup = _image_lookup(images_dir)
    if not lookup:
        return html

    def repl_attr(m: re.Match[str]) -> str:
        attr, quote, val = m.group(1), m.group(2), m.group(3)
        fixed = _resolve_nitro_path(val, lookup)
        if fixed:
            return f'{attr}={quote}{fixed}{quote}'
        return m.group(0)

    html = re.sub(
        r'(src|href|data-src|data-lazy-src|poster|data-bg|data-background)=(["\'])([^"\']+)\2',
        repl_attr,
        html,
        flags=re.I,
    )

    def repl_url(m: re.Match[str]) -> str:
        inner = m.group(1)
        fixed = _resolve_nitro_path(inner, lookup)
        if fixed:
            return f"url({fixed})"
        return m.group(0)

    html = re.sub(r"url\(\s*['\"]?([^)'\"]+)['\"]?\s*\)", repl_url, html, flags=re.I)

    # Catch-all: any Nitro .bin/ proxy path in the document
    def repl_any(m: re.Match[str]) -> str:
        raw = m.group(0)
        fixed = _resolve_nitro_path(raw, lookup)
        return fixed if fixed else raw

    html = re.sub(
        r'(?:/assets/images/)?assets/images/asset_[a-f0-9]+\.bin/[^"\'<>\s]+',
        repl_any,
        html,
        flags=re.I,
    )
    return html


def fix_video_elements(html: str, page_dir: Path) -> str:
    """Repair video tags for React/Vite offline playback."""
    soup = BeautifulSoup(html, "lxml")
    videos_dir = page_dir / "assets" / "videos"
    changed = False

    for video in soup.find_all("video"):
        for br in video.find_all("br"):
            br.decompose()
            changed = True

        video["playsinline"] = ""
        video.attrs["webkit-playsinline"] = ""
        if not video.get("muted"):
            video["muted"] = ""
        if not video.get("autoplay"):
            video["autoplay"] = ""

        # Remove invalid </source> closers — source is void
        sources = video.find_all("source")
        seen_src: set[str] = set()
        for src in sources:
            s = src.get("src", "")
            if s:
                if not s.startswith(("assets/", "http")):
                    fname = Path(s.replace("\\", "/")).name
                    local = videos_dir / fname
                    if local.exists():
                        src["src"] = f"assets/videos/{fname}"
                        changed = True
                elif s.startswith("/assets/"):
                    src["src"] = s.lstrip("/")
                    changed = True
                if src.get("src") in seen_src:
                    src.decompose()
                else:
                    seen_src.add(src.get("src", ""))

        if not sources and video.get("src"):
            s = video["src"]
            fname = Path(s.replace("\\", "/")).name
            if (videos_dir / fname).exists():
                video["src"] = f"assets/videos/{fname}"
                changed = True

        # Drop fixed width/height that shrink hero video
        if "rh-video" in " ".join(video.get("class") or []):
            for attr in ("width", "height"):
                if video.get(attr):
                    del video[attr]
                    changed = True

    return str(soup) if changed else html


def ensure_relative_asset_paths(html: str) -> str:
    """Use page-relative assets/ paths (works with serve.py and Studio preview)."""
    html = re.sub(
        r'(src|href|poster|data-src|data-bg|data-background|data-video-url)=["\']/assets/',
        r'\1="assets/',
        html,
        flags=re.I,
    )
    html = re.sub(
        r'url\(\s*["\']?/assets/',
        'url(assets/',
        html,
        flags=re.I,
    )
    html = re.sub(r'(?<=["\'])/assets/(images|videos|fonts|css|js|icons)/', r"assets/\1/", html)
    return html


def ensure_absolute_asset_paths(html: str) -> str:
    """Legacy name — static mirrors use relative paths."""
    return ensure_relative_asset_paths(html)


def apply_media_fixes(html: str, page_dir: Path) -> str:
    page_dir = Path(page_dir)
    html = fix_nitro_image_paths(html, page_dir)
    html = fix_video_elements(html, page_dir)
    html = ensure_relative_asset_paths(html)
    return html


def inject_hero_media_css(html: str) -> str:
    soup = BeautifulSoup(html, "lxml")
    if not soup.head:
        return html
    if soup.find("style", id="scraper-hero-media"):
        return html
    tag = soup.new_tag("style", id="scraper-hero-media")
    tag.string = HERO_MEDIA_CSS
    soup.head.append(tag)
    return str(soup)
