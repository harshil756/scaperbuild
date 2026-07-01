"""Hero banners, sliders, carousels — capture URLs, download assets, display offline."""

from __future__ import annotations

import json
import re
import urllib.error
import urllib.request
from pathlib import Path
from urllib.parse import unquote

from bs4 import BeautifulSoup

from .fidelity import _asset_index, _merge_style, _resolve_url
from .polite import wait_between_requests
from .storage import assets_root, find_existing_local_asset, url_to_local_path
from .utils import extract_css_urls, normalize_url, relative_path

BANNER_SELECTORS = (
    ".race-hero",
    ".elementor-slides-wrapper",
    ".elementor-slide",
    ".swiper-slide",
    ".swiper-slide-bg",
    ".elementor-background-slideshow__slide",
    ".rev-slidebg",
    ".slick-slide",
    "[class*='hero']",
    "[class*='banner']",
    ".elementor-widget-slides",
    ".elementor-widget-image-carousel",
)

BANNER_CSS = """
/* Offline banner / hero / slider — same-to-same display */
.race-hero,
.elementor-slides-wrapper,
.elementor-widget-slides,
.elementor-widget-image-carousel,
.swiper,
.rev_slider,
.slick-slider {
  position: relative !important;
  overflow: hidden !important;
  min-height: 50vh;
}
.swiper-slide,
.elementor-slide,
.slick-slide,
.rev-slide {
  opacity: 1 !important;
  visibility: visible !important;
}
.swiper-slide-active,
.elementor-slide-active,
.slick-active {
  display: block !important;
  opacity: 1 !important;
}
.swiper-slide-bg,
.elementor-slide-bg,
.elementor-background-slideshow__slide {
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}
.elementor-background-slideshow__slide:first-child {
  opacity: 1 !important;
}
.swiper-slide-image,
.elementor-carousel-image,
.swiper-slide img {
  width: 100% !important;
  height: auto !important;
  display: block !important;
  object-fit: cover !important;
}
.elementor-background-overlay {
  pointer-events: none;
}
"""

BANNER_ATTRS = (
    "data-bg",
    "data-background",
    "data-src",
    "data-lazy-src",
    "data-original",
    "data-lazyload",
    "data-thumb",
    "data-retina",
    "data-bgretina",
    "data-lazy-bg",
    "poster",
)

BG_URL_IN_STYLE = re.compile(
    r"background(?:-image)?\s*:\s*[^;]*url\(\s*['\"]?([^)'\"]+)['\"]?\s*\)",
    re.I,
)


def extract_banner_urls(html: str, page_url: str) -> set[str]:
    """Collect every URL used in hero banners, slides, and slideshows."""
    urls: set[str] = set()
    soup = BeautifulSoup(html, "lxml")

    for el in soup.find_all(True):
        classes = " ".join(el.get("class") or [])
        is_banner = any(
            k in classes.lower()
            for k in (
                "hero",
                "banner",
                "slide",
                "swiper",
                "rev-slide",
                "slick",
                "slideshow",
                "carousel",
                "race-hero",
            )
        )
        if not is_banner and el.name not in ("video", "source", "picture"):
            for attr in BANNER_ATTRS:
                if el.get(attr):
                    is_banner = True
                    break

        if not is_banner:
            continue

        for attr in BANNER_ATTRS + ("src", "href", "srcset"):
            val = el.get(attr)
            if not val:
                continue
            if attr == "srcset":
                for part in val.split(","):
                    bit = part.strip().split()
                    if bit:
                        n = normalize_url(bit[0], page_url)
                        if n:
                            urls.add(n)
            else:
                n = normalize_url(val, page_url)
                if n:
                    urls.add(n)

        style = el.get("style") or ""
        for m in BG_URL_IN_STYLE.finditer(style):
            n = normalize_url(m.group(1), page_url)
            if n:
                urls.add(n)

        ds = el.get("data-settings")
        if ds:
            decoded = ds.replace("&quot;", '"').replace("&amp;", "&")
            for m in re.finditer(r"https?://[^\s\"'<>\\)]+", decoded):
                urls.add(m.group(0).rstrip("'\")"))
            try:
                data = json.loads(decoded)
                _walk_urls(data, urls)
            except Exception:
                pass

    for style in soup.find_all("style"):
        text = style.string or ""
        if not any(k in text.lower() for k in ("slide", "hero", "banner", "swiper", "slideshow")):
            continue
        for raw in extract_css_urls(text):
            n = normalize_url(raw, page_url)
            if n:
                urls.add(n)

    return urls


def _walk_urls(obj, urls: set[str]) -> None:
    if isinstance(obj, str) and obj.startswith(("http://", "https://")):
        urls.add(obj)
    elif isinstance(obj, dict):
        for v in obj.values():
            _walk_urls(v, urls)
    elif isinstance(obj, list):
        for v in obj:
            _walk_urls(v, urls)


def download_banner_assets(
    page_dir: Path,
    page_url: str,
    html_path: Path,
    html: str | None = None,
) -> int:
    """Force-download banner/slider images and videos not yet on disk."""
    html = html or (html_path.read_text(encoding="utf-8") if html_path.exists() else "")
    if not html:
        return 0

    urls = extract_banner_urls(html, page_url)
    saved = 0
    mapping: dict[str, str] = {}

    for abs_url in sorted(urls):
        if not abs_url.startswith(("http://", "https://")):
            continue
        local = url_to_local_path(abs_url, page_dir)
        existing = find_existing_local_asset(page_dir, abs_url, local)
        if existing:
            mapping[abs_url] = relative_path(html_path, existing)
            continue
        if local.exists() and local.stat().st_size > 100:
            mapping[abs_url] = relative_path(html_path, local)
            continue
        try:
            wait_between_requests()
            req = urllib.request.Request(
                abs_url,
                headers={
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36",
                    "Referer": page_url,
                },
            )
            with urllib.request.urlopen(req, timeout=60) as resp:
                data = resp.read()
            if len(data) < 20:
                continue
            local.parent.mkdir(parents=True, exist_ok=True)
            local.write_bytes(data)
            mapping[abs_url] = relative_path(html_path, local)
            saved += 1
        except (urllib.error.HTTPError, urllib.error.URLError, OSError):
            continue

    if mapping and html_path.exists():
        text = html_path.read_text(encoding="utf-8")
        for abs_url, rel in mapping.items():
            text = text.replace(abs_url, rel)
        html_path.write_text(text, encoding="utf-8")

    if saved:
        print(f"[*] Downloaded {saved} banner/slider asset(s).")
    return saved


def materialize_banners(
    html: str,
    page_url: str,
    url_map: dict,
    html_path: Path,
    page_dir: Path,
) -> str:
    """Bake slide backgrounds and carousel images for offline display."""
    index = _asset_index(page_dir)
    soup = BeautifulSoup(html, "lxml")

    for el in soup.find_all(True):
        classes = " ".join(el.get("class") or []).lower()
        is_slide = any(
            k in classes
            for k in (
                "slide",
                "swiper",
                "hero",
                "banner",
                "slideshow",
                "carousel",
                "race-hero",
                "rev-slide",
                "slick",
            )
        )
        if not is_slide and el.name not in ("img", "video", "source"):
            continue

        for attr in BANNER_ATTRS:
            val = el.get(attr)
            if not val:
                continue
            loc = _resolve_url(val, page_url, url_map, html_path, page_dir, index)
            if loc and not loc.startswith(("http://", "https://")):
                if attr in ("data-bg", "data-background", "data-lazy-bg"):
                    q = '"' if " " in loc else ""
                    el["style"] = _merge_style(
                        el.get("style"),
                        f"background-image:url({q}{loc}{q});background-size:cover;background-position:center",
                    )
                elif el.name == "img" or attr in ("data-src", "data-lazy-src", "data-original"):
                    if el.name == "img":
                        el["src"] = loc
                    el[attr] = loc

        style = el.get("style") or ""
        for m in BG_URL_IN_STYLE.finditer(style):
            raw = m.group(1)
            loc = _resolve_url(raw, page_url, url_map, html_path, page_dir, index)
            if loc and not loc.startswith(("http://", "https://")):
                q = '"' if " " in loc else ""
                new_bg = f"background-image:url({q}{loc}{q})"
                style = style.replace(m.group(0), new_bg)
        if style != (el.get("style") or ""):
            el["style"] = style

        ds = el.get("data-settings")
        if ds:
            decoded = ds.replace("&quot;", '"').replace("&amp;", "&")
            try:
                data = json.loads(decoded)
                gallery = data.get("background_slideshow_gallery")
                if isinstance(gallery, list) and gallery:
                    first = gallery[0]
                    if isinstance(first, dict) and first.get("url"):
                        url = first["url"]
                        loc = _resolve_url(url, page_url, url_map, html_path, page_dir, index)
                        if loc and not loc.startswith(("http://", "https://")):
                            q = '"' if " " in loc else ""
                            el["style"] = _merge_style(
                                el.get("style"),
                                f"background-image:url({q}{loc}{q});background-size:cover;background-position:center",
                            )
                bg_img = data.get("background_image")
                if isinstance(bg_img, dict) and bg_img.get("url"):
                    loc = _resolve_url(
                        bg_img["url"], page_url, url_map, html_path, page_dir, index
                    )
                    if loc and not loc.startswith(("http://", "https://")):
                        q = '"' if " " in loc else ""
                        el["style"] = _merge_style(
                            el.get("style"),
                            f"background-image:url({q}{loc}{q});background-size:cover;background-position:center",
                        )
            except Exception:
                pass

        if "swiper-slide" in classes or "elementor-slide" in classes:
            el["style"] = _merge_style(el.get("style"), "opacity:1;visibility:visible")

    for img in soup.select(
        ".swiper-slide-image, .elementor-carousel-image, .race-hero img, "
        "[class*='banner'] img, [class*='hero'] img"
    ):
        lazy = None
        for attr in ("data-src", "data-lazy-src", "data-original", "data-lazyload"):
            if img.get(attr):
                lazy = img[attr]
                break
        src = (img.get("src") or "").strip()
        if lazy:
            loc = _resolve_url(lazy, page_url, url_map, html_path, page_dir, index) or lazy
            if loc and not loc.startswith(("http://", "https://")):
                img["src"] = loc
        elif src:
            loc = _resolve_url(src, page_url, url_map, html_path, page_dir, index)
            if loc:
                img["src"] = loc

    for pic in soup.find_all("picture"):
        for src in pic.find_all("source"):
            ss = src.get("srcset")
            if not ss:
                continue
            parts = []
            for part in ss.split(","):
                bits = part.strip().split()
                if not bits:
                    continue
                loc = _resolve_url(bits[0], page_url, url_map, html_path, page_dir, index)
                if loc:
                    bits[0] = loc
                parts.append(" ".join(bits))
            src["srcset"] = ", ".join(parts)

    return str(soup)


def inject_banner_css(html: str) -> str:
    soup = BeautifulSoup(html, "lxml")
    if not soup.head or soup.find("style", id="scraper-banner-fix"):
        return html
    tag = soup.new_tag("style", id="scraper-banner-fix")
    tag.string = BANNER_CSS
    soup.head.append(tag)
    return str(soup)


def apply_banner_fixes(
    html: str,
    page_dir: Path,
    html_path: Path,
    page_url: str,
    url_map: dict | None = None,
) -> str:
    url_map = url_map or {}
    download_banner_assets(page_dir, page_url, html_path, html)
    html = html_path.read_text(encoding="utf-8") if html_path.exists() else html
    html = materialize_banners(html, page_url, url_map, html_path, page_dir)
    html = inject_banner_css(html)
    return html
