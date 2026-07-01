"""Same-to-same fidelity: backgrounds, lazy images, animations, data-settings."""

from __future__ import annotations

import json
import re
from pathlib import Path
from urllib.parse import unquote, urlparse

from bs4 import BeautifulSoup

from .storage import assets_root, find_existing_local_asset
from .utils import normalize_url, relative_path

LAZY_IMG_PLACEHOLDER = re.compile(
    r"data:image|placeholder|1x1|blank\.|spacer|loading\.gif|pixel\.|svg\+xml",
    re.I,
)

ANIMATION_FIX_CSS = """
/* Offline: preserve visible state for scroll/entrance animations */
[data-aos] {
  opacity: 1 !important;
  transform: none !important;
  transition: none !important;
}
.elementor-invisible,
.elementor-widget-invisible {
  visibility: visible !important;
  opacity: 1 !important;
}
.elementor-motion-effects-element,
.elementor-motion-effects-layer {
  transform: none !important;
  opacity: 1 !important;
}
.animated {
  animation-fill-mode: both;
}
.wow, .fadeIn, .fadeInUp, .fadeInDown, .zoomIn {
  visibility: visible !important;
  opacity: 1 !important;
}
"""

BG_ATTRS = ("data-bg", "data-background", "data-lazy-bg")
LAZY_IMG_ATTRS = ("data-src", "data-lazy-src", "data-original", "data-lazyload")


def _asset_index(page_dir: Path) -> dict[str, Path]:
    idx: dict[str, Path] = {}
    root = assets_root(page_dir)
    if not root.is_dir():
        return idx
    for f in root.rglob("*"):
        if f.is_file():
            idx[f.name.lower()] = f
            idx.setdefault(f.stem.lower(), f)
    return idx


def _resolve_url(
    raw: str,
    page_url: str,
    url_map: dict[str, Path],
    html_path: Path,
    page_dir: Path,
    index: dict[str, Path],
) -> str | None:
    if not raw or raw.startswith(("data:", "blob:", "javascript:", "#")):
        return None
    if raw.startswith("assets/"):
        target = page_dir / raw.split("?")[0]
        if target.is_file():
            return relative_path(html_path, target)
    abs_u = normalize_url(raw, page_url)
    if abs_u and abs_u in url_map:
        return relative_path(html_path, url_map[abs_u])
    if abs_u:
        hit = find_existing_local_asset(page_dir, abs_u)
        if hit:
            return relative_path(html_path, hit)
    name = Path(unquote(raw.split("?")[0])).name.lower()
    if name and name in index:
        return relative_path(html_path, index[name])
    return None


def _merge_style(existing: str | None, extra: str) -> str:
    base = (existing or "").strip().rstrip(";")
    return f"{base}; {extra}" if base else extra


def _walk_json_replace(obj, replacer) -> object:
    if isinstance(obj, str):
        return replacer(obj) or obj
    if isinstance(obj, dict):
        return {k: _walk_json_replace(v, replacer) for k, v in obj.items()}
    if isinstance(obj, list):
        return [_walk_json_replace(v, replacer) for v in obj]
    return obj


def rewrite_data_settings(
    html: str,
    page_url: str,
    url_map: dict[str, Path],
    html_path: Path,
    page_dir: Path,
) -> str:
    """Rewrite remote URLs inside Elementor data-settings JSON to local paths."""
    index = _asset_index(page_dir)

    def replacer(val: str) -> str | None:
        if not val.startswith(("http://", "https://", "//")):
            return None
        return _resolve_url(val, page_url, url_map, html_path, page_dir, index)

    soup = BeautifulSoup(html, "lxml")
    changed = False
    for el in soup.find_all(attrs={"data-settings": True}):
        raw = el.get("data-settings") or ""
        if not raw:
            continue
        decoded = raw.replace("&quot;", '"').replace("&amp;", "&")
        try:
            data = json.loads(decoded)
            new_data = _walk_json_replace(data, replacer)
            new_raw = json.dumps(new_data, separators=(",", ":"))
            if new_raw != decoded:
                el["data-settings"] = new_raw
                changed = True
        except Exception:
            new_decoded = decoded
            for m in re.finditer(r"https?://[^\s\"'<>\\)]+", decoded):
                u = m.group(0)
                loc = replacer(u)
                if loc:
                    new_decoded = new_decoded.replace(u, loc)
                    changed = True
            if new_decoded != decoded:
                el["data-settings"] = new_decoded
    return str(soup) if changed else html


def materialize_backgrounds(
    html: str,
    page_url: str,
    url_map: dict[str, Path],
    html_path: Path,
    page_dir: Path,
) -> str:
    """Bake data-bg / data-settings backgrounds into inline background-image."""
    index = _asset_index(page_dir)
    soup = BeautifulSoup(html, "lxml")

    for el in soup.find_all(True):
        for attr in BG_ATTRS:
            val = el.get(attr)
            if not val:
                continue
            loc = _resolve_url(val, page_url, url_map, html_path, page_dir, index) or val
            if loc.startswith(("http://", "https://")):
                continue
            q = '"' if " " in loc else ""
            bg = f"background-image:url({q}{loc}{q});background-size:cover;background-position:center;background-repeat:no-repeat"
            el["style"] = _merge_style(el.get("style"), bg)
            el["class"] = _add_class(el.get("class"), "e-lazyloaded")

        ds = el.get("data-settings")
        if ds:
            decoded = ds.replace("&quot;", '"').replace("&amp;", "&")
            for key in ("background_image", "background_slideshow_gallery"):
                try:
                    data = json.loads(decoded)
                    if key == "background_image" and isinstance(data.get("background_image"), dict):
                        url = data["background_image"].get("url")
                        if url:
                            loc = _resolve_url(url, page_url, url_map, html_path, page_dir, index)
                            if loc and not loc.startswith(("http://", "https://")):
                                q = '"' if " " in loc else ""
                                el["style"] = _merge_style(
                                    el.get("style"),
                                    f"background-image:url({q}{loc}{q});background-size:cover;background-position:center",
                                )
                                el["class"] = _add_class(el.get("class"), "e-lazyloaded")
                except Exception:
                    pass

        classes = el.get("class") or []
        if isinstance(classes, str):
            classes = classes.split()
        if "e-con" in classes and "e-parent" in classes:
            el["class"] = _add_class(classes, "e-lazyloaded")

    return str(soup)


def _add_class(classes, name: str):
    if isinstance(classes, str):
        classes = classes.split()
    if name not in classes:
        return classes + [name]
    return classes


def promote_lazy_images(
    html: str,
    page_url: str,
    url_map: dict[str, Path],
    html_path: Path,
    page_dir: Path,
) -> str:
    """Copy data-src → src so images show without lazy-load JS."""
    index = _asset_index(page_dir)
    soup = BeautifulSoup(html, "lxml")

    for img in soup.find_all("img"):
        src = (img.get("src") or "").strip()
        lazy = None
        for attr in LAZY_IMG_ATTRS:
            if img.get(attr):
                lazy = img[attr]
                break
        if lazy:
            loc = _resolve_url(lazy, page_url, url_map, html_path, page_dir, index) or lazy
            if loc and not loc.startswith(("http://", "https://")):
                img["data-src"] = loc
                if not src or LAZY_IMG_PLACEHOLDER.search(src):
                    img["src"] = loc
                if img.get("loading") == "lazy":
                    img["loading"] = "eager"

    for el in soup.find_all(srcset=True):
        parts = []
        for part in el["srcset"].split(","):
            bits = part.strip().split()
            if not bits:
                continue
            loc = _resolve_url(bits[0], page_url, url_map, html_path, page_dir, index)
            if loc:
                bits[0] = loc
            parts.append(" ".join(bits))
        el["srcset"] = ", ".join(parts)

    return str(soup)


def strip_lazy_hide_styles(html: str) -> str:
    """Remove Elementor rules that hide backgrounds until JS runs."""
    soup = BeautifulSoup(html, "lxml")
    for style in list(soup.find_all("style")):
        s = style.string or ""
        if not s:
            continue
        if ("e-lazyloaded" in s or "e-parent" in s) and (
            "background-image: none" in s
            or "background-image:none" in s
            or "opacity: 0" in s
            or "opacity:0" in s
            or "visibility: hidden" in s
        ):
            style.decompose()
    return str(soup)


def apply_offline_animation_fixes(html: str) -> str:
    """CSS shims so AOS/Elementor motion effects appear without scroll JS."""
    soup = BeautifulSoup(html, "lxml")
    if soup.head and not soup.find("style", id="scraper-animation-fix"):
        tag = soup.new_tag("style", id="scraper-animation-fix")
        tag.string = ANIMATION_FIX_CSS
        soup.head.append(tag)
    return str(soup)


def apply_full_fidelity_fixes(
    html: str,
    page_dir: Path,
    html_path: Path,
    page_url: str,
    url_map: dict[str, Path] | None = None,
) -> str:
    """Run all same-to-same visual fidelity fixes on finalized HTML."""
    url_map = url_map or {}
    html = strip_lazy_hide_styles(html)
    html = rewrite_data_settings(html, page_url, url_map, html_path, page_dir)
    html = materialize_backgrounds(html, page_url, url_map, html_path, page_dir)
    html = promote_lazy_images(html, page_url, url_map, html_path, page_dir)
    html = apply_offline_animation_fixes(html)
    return html
