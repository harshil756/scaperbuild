"""Export layout: <page>/page.html + <page>/assets/{css,js,images,fonts}/"""

from __future__ import annotations

import hashlib
import json
import re
import threading
from pathlib import Path
from urllib.parse import unquote, urlparse

from .utils import extension_from_content_type, extension_from_url, is_asset_url

ASSETS_DIR = "assets"
ASSET_TYPES = ("css", "js", "images", "fonts", "videos", "icons")

_manifest_lock = threading.RLock()

CSS_EXT = {".css"}
JS_EXT = {".js", ".mjs", ".cjs"}
FONT_EXT = {".woff", ".woff2", ".ttf", ".eot", ".otf"}
VIDEO_EXT = {".mp4", ".webm", ".ogv", ".mov", ".m4v", ".avi"}
IMAGE_EXT = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".ico", ".avif", ".bmp"}


def url_to_page_slug(url: str) -> str:
    """Homepage → home; /about-us/ → about-us; /services/solar/ → services-solar."""
    parsed = urlparse(url)
    path = unquote(parsed.path).strip("/")
    if not path:
        return "home"
    # Normalize path segments to a single folder-safe slug
    parts = [re.sub(r"[^\w\-]+", "-", p).strip("-").lower() for p in path.split("/") if p]
    parts = [p for p in parts if p]
    if not parts:
        return "home"
    slug = "-".join(parts)
    return slug[:120] or "home"


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


ICON_HINTS = ("favicon", "apple-touch-icon", "android-chrome", "mstile", "site-icon", "/icon")


def _is_icon_url(url: str) -> bool:
    path = urlparse(url).path.lower()
    if path.endswith(".ico"):
        return True
    return any(h in path for h in ICON_HINTS)


def classify_asset(url: str, content_type: str = "") -> str:
    ct = (content_type or "").lower()
    if "text/css" in ct:
        return "css"
    if "javascript" in ct or "ecmascript" in ct:
        return "js"
    if "font" in ct or "woff" in ct:
        return "fonts"
    if "video" in ct or "mpegurl" in ct:
        return "videos"
    if "audio" in ct:
        return "videos"
    if "image" in ct or "svg" in ct:
        return "images"

    ext = extension_from_url(url) or ""
    if ext in CSS_EXT:
        return "css"
    if ext in JS_EXT:
        return "js"
    if ext in FONT_EXT:
        return "fonts"
    if ext in VIDEO_EXT:
        return "videos"
    if _is_icon_url(url):
        return "icons"
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
        if any(path.endswith(e) for e in VIDEO_EXT):
            return "videos"
    return "images"


def _safe_filename(url: str, content_type: str = "") -> str:
    parsed = urlparse(url)
    path = unquote(parsed.path).lstrip("/")
    basename = Path(path).name or "asset"
    stem = Path(basename).stem
    path_ext = Path(basename).suffix.lower()

    ct_ext = extension_from_content_type(content_type)

    if ct_ext:
        ext = ct_ext
    elif path_ext and path_ext not in (".bin",):
        ext = path_ext
    else:
        ext = extension_from_url(url) or ".bin"

    safe_stem = re.sub(r"[^\w.\-]+", "_", stem).strip("._")[:55] or "asset"
    url_hash = hashlib.md5(url.encode()).hexdigest()[:8]
    if parsed.query:
        url_hash = hashlib.md5((url + "?" + parsed.query).encode()).hexdigest()[:8]
    return f"{safe_stem}_{url_hash}{ext}"


def _framework_relative_path(url: str) -> str | None:
    """Preserve Next.js / CRA / Vite build paths so React apps keep working."""
    path = unquote(urlparse(url).path).lstrip("/")
    if path.startswith("_next/"):
        return path
    if path.startswith("static/") and "/static/" in f"/{path}":
        return path
    return None


def url_to_local_path(url: str, page_dir: Path, content_type: str = "") -> Path:
    fw = _framework_relative_path(url)
    if fw:
        dest = assets_root(page_dir) / fw
        dest.parent.mkdir(parents=True, exist_ok=True)
        return dest
    folder = classify_asset(url, content_type)
    fname = _safe_filename(url, content_type)
    return assets_root(page_dir) / folder / fname


def find_existing_local_asset(page_dir: Path, url: str, local: Path | None = None) -> Path | None:
    """Return an on-disk asset if the browser mirror already saved it."""
    target = local or url_to_local_path(url, page_dir)
    if target.exists() and target.stat().st_size > 50:
        return target

    from urllib.parse import urlparse

    orig = Path(unquote(urlparse(url).path)).name.lower()
    folder = target.parent
    if not folder.is_dir():
        return None

    stem = target.stem.rsplit("_", 1)[0].lower() if target.stem else ""
    for f in folder.rglob("*"):
        if not f.is_file() or f.stat().st_size < 50:
            continue
        name = f.name.lower()
        if orig and (name == orig or orig in name):
            return f
        if stem and len(stem) > 3 and f.stem.lower().startswith(stem):
            return f
    return None


def load_manifest(site_dir: Path) -> dict:
    path = site_dir / "site.json"
    if path.exists():
        return json.loads(path.read_text(encoding="utf-8"))
    return {"pages": {}, "assets": {}}


def save_manifest(site_dir: Path, manifest: dict) -> None:
    with _manifest_lock:
        (site_dir / "site.json").write_text(
            json.dumps(manifest, indent=2), encoding="utf-8"
        )


def register_page(
    site_dir: Path,
    url: str,
    html_relpath: str,
    seo: dict | None = None,
    title: str | None = None,
    source: str | None = None,
    kind: str | None = None,
) -> dict:
    from .page_discovery import allocate_page_slug, slug_to_display_name

    with _manifest_lock:
        manifest = load_manifest(site_dir)
        slug = allocate_page_slug(site_dir, url)
        entry = {
            "html": html_relpath,
            "slug": slug,
            "url": url,
            "name": title or slug_to_display_name(slug),
            "scraped_at": __import__("time").strftime("%Y-%m-%d %H:%M:%S"),
        }
        if source:
            entry["source"] = source
        if kind:
            entry["kind"] = kind
        if seo:
            entry["seo"] = {
                "title": seo.get("title", ""),
                "description": seo.get("description", ""),
                "canonical": seo.get("canonical", url),
            }
        manifest.setdefault("pages", {})[url] = entry
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
    fw = 0
    for name in ("_next", "static"):
        d = root / name
        if d.exists():
            fw += sum(1 for p in d.rglob("*") if p.is_file())
    out["framework_files"] = fw
    return out
