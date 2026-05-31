"""Export layout: <page>/page.html + <page>/assets/{css,js,images,fonts}/"""

from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path
from urllib.parse import unquote, urlparse

from .utils import extension_from_url, is_asset_url

ASSETS_DIR = "assets"
ASSET_TYPES = ("css", "js", "images", "fonts")

CSS_EXT = {".css"}
JS_EXT = {".js", ".mjs", ".cjs"}
FONT_EXT = {".woff", ".woff2", ".ttf", ".eot", ".otf"}
IMAGE_EXT = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".ico", ".avif", ".bmp"}


def url_to_page_slug(url: str) -> str:
    """Homepage → home; /about-us/ → about-us."""
    parsed = urlparse(url)
    path = unquote(parsed.path).strip("/")
    if not path:
        return "home"
    slug = re.sub(r"[^\w\-]+", "-", path).strip("-").lower()
    return slug or "home"


def url_to_html_filename(url: str) -> str:
    slug = url_to_page_slug(url)
    return "home.html" if slug == "home" else f"{slug}.html"


def page_dir(site_dir: Path, page_slug: str) -> Path:
    return site_dir / page_slug


def assets_root(page_dir: Path) -> Path:
    return page_dir / ASSETS_DIR


def ensure_page_dirs(page_dir: Path) -> None:
    page_dir.mkdir(parents=True, exist_ok=True)
    for name in ASSET_TYPES:
        (assets_root(page_dir) / name).mkdir(parents=True, exist_ok=True)


def ensure_site_dirs(site_dir: Path) -> None:
    site_dir.mkdir(parents=True, exist_ok=True)
    (site_dir / "logs").mkdir(exist_ok=True)


def classify_asset(url: str, content_type: str = "") -> str:
    ct = (content_type or "").lower()
    if "text/css" in ct:
        return "css"
    if "javascript" in ct or "ecmascript" in ct:
        return "js"
    if "font" in ct or "woff" in ct:
        return "fonts"
    if "image" in ct or "svg" in ct:
        return "images"

    ext = extension_from_url(url) or ""
    if ext in CSS_EXT:
        return "css"
    if ext in JS_EXT:
        return "js"
    if ext in FONT_EXT:
        return "fonts"
    if ext in IMAGE_EXT or ext == ".bin":
        return "images"
    if is_asset_url(url, content_type):
        path = urlparse(url).path.lower()
        if path.endswith(".css"):
            return "css"
        if any(path.endswith(e) for e in JS_EXT):
            return "js"
        if any(path.endswith(e) for e in FONT_EXT):
            return "fonts"
    return "images"


def _safe_filename(url: str) -> str:
    parsed = urlparse(url)
    path = unquote(parsed.path).lstrip("/")
    basename = Path(path).name or "asset"
    stem = Path(basename).stem
    ext = Path(basename).suffix
    if not ext:
        ext = extension_from_url(url) or ".bin"
    safe_stem = re.sub(r"[^\w.\-]+", "_", stem).strip("._")[:55] or "asset"
    url_hash = hashlib.md5(url.encode()).hexdigest()[:8]
    if parsed.query:
        url_hash = hashlib.md5((url + "?" + parsed.query).encode()).hexdigest()[:8]
    return f"{safe_stem}_{url_hash}{ext}"


def url_to_local_path(url: str, page_dir: Path, content_type: str = "") -> Path:
    folder = classify_asset(url, content_type)
    fname = _safe_filename(url)
    return assets_root(page_dir) / folder / fname


def load_manifest(site_dir: Path) -> dict:
    path = site_dir / "site.json"
    if path.exists():
        return json.loads(path.read_text(encoding="utf-8"))
    return {"pages": {}, "assets": {}}


def save_manifest(site_dir: Path, manifest: dict) -> None:
    (site_dir / "site.json").write_text(
        json.dumps(manifest, indent=2), encoding="utf-8"
    )


def register_page(site_dir: Path, url: str, html_relpath: str) -> dict:
    manifest = load_manifest(site_dir)
    manifest.setdefault("pages", {})[url] = {
        "html": html_relpath,
        "slug": url_to_page_slug(url),
        "scraped_at": __import__("time").strftime("%Y-%m-%d %H:%M:%S"),
    }
    save_manifest(site_dir, manifest)
    return manifest


def count_assets(page_dir: Path) -> dict:
    out = {}
    root = assets_root(page_dir)
    for folder in ASSET_TYPES:
        d = root / folder
        out[f"{folder}_files"] = (
            sum(1 for p in d.rglob("*") if p.is_file()) if d.exists() else 0
        )
    return out
