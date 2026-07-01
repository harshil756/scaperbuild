"""Prepare scraped pages for in-studio iframe preview."""

from __future__ import annotations

import json
import re
from pathlib import Path
from urllib.parse import unquote, urlparse

from bs4 import BeautifulSoup

from .offline_paths import normalize_offline_html
from .utils import normalize_url


def resolve_preview_file(site_root: Path, path: str) -> Path | None:
    """Map preview URL path to an HTML or asset file on disk."""
    site_root = site_root.resolve()
    clean = path.strip("/")
    if not clean:
        for candidate in (site_root / "home" / "home.html", site_root / "home.html"):
            if candidate.is_file():
                return candidate
        return None

    target = (site_root / clean).resolve()
    if not str(target).startswith(str(site_root)):
        return None

    if target.is_file():
        return target

    folder = target if target.is_dir() else target.parent
    if folder.is_dir() and str(folder).startswith(str(site_root)):
        slug = folder.name
        for name in (f"{slug}.html", "home.html", "index.html"):
            candidate = folder / name
            if candidate.is_file():
                return candidate
    return None


def _preview_base_href(job_id: str, file_path: Path, site_root: Path) -> str:
    rel_dir = file_path.parent.relative_to(site_root.resolve()).as_posix()
    if rel_dir in (".", ""):
        return f"/api/jobs/{job_id}/preview/"
    return f"/api/jobs/{job_id}/preview/{rel_dir}/"


def _rewrite_internal_links_for_preview(
    soup: BeautifulSoup, job_id: str, file_path: Path, site_root: Path
) -> None:
    """Point folder-style page links at preview URLs so navigation works offline."""
    manifest_path = site_root / "site.json"
    if not manifest_path.exists():
        return
    try:
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    except Exception:
        return

    pages = manifest.get("pages", {})
    if not pages:
        return

    page_url = next((u for u, info in pages.items() if info.get("html") == file_path.relative_to(site_root).as_posix()), "")
    if not page_url:
        for u, info in pages.items():
            html_rel = info.get("html", "")
            if html_rel and (site_root / html_rel) == file_path:
                page_url = u
                break

    for a in soup.find_all("a", href=True):
        href = a["href"].strip()
        if not href or href.startswith(("#", "mailto:", "tel:", "javascript:", "data:")):
            continue
        abs_u = normalize_url(href, page_url or f"https://local/{file_path.name}")
        if not abs_u:
            continue
        html_rel = None
        for src_url, info in pages.items():
            if _same_path(src_url, abs_u):
                html_rel = info.get("html")
                break
        if not html_rel:
            continue
        dest = site_root / html_rel
        if not dest.is_file():
            continue
        folder_rel = dest.parent.relative_to(site_root).as_posix()
        preview = f"/api/jobs/{job_id}/preview/{folder_rel}/"
        a["href"] = preview


def _same_path(a: str, b: str) -> bool:
    pa = unquote(urlparse(a).path).rstrip("/").lower() or "/"
    pb = unquote(urlparse(b).path).rstrip("/").lower() or "/"
    return pa == pb


def prepare_preview_html(html: str, job_id: str, file_path: Path, site_root: Path) -> str:
    """Normalize offline HTML and inject preview base URL for assets + nav."""
    page_dir = file_path.parent
    html = normalize_offline_html(html, page_dir, file_path)

    soup = BeautifulSoup(html, "lxml")
    if not soup.head:
        head = soup.new_tag("head")
        if soup.html:
            soup.html.insert(0, head)
        else:
            wrapped = soup.new_tag("html")
            wrapped.append(head)
            if soup.body:
                wrapped.append(soup.body.extract())
            soup.append(wrapped)

    for tag in soup.find_all("base"):
        tag.decompose()

    base_href = _preview_base_href(job_id, file_path, site_root)
    base_tag = soup.new_tag("base", href=base_href)
    soup.head.insert(0, base_tag)

    _rewrite_internal_links_for_preview(soup, job_id, file_path, site_root)

    if not soup.find("script", id="scraper-preview-shim"):
        shim = soup.new_tag("script", id="scraper-preview-shim")
        shim.string = """
(function () {
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a) return;
    var h = a.getAttribute('href');
    if (!h || h.charAt(0) !== '/' || h.indexOf('/api/jobs/') !== 0) return;
    if (!h.endsWith('/')) return;
    e.preventDefault();
    window.location.href = h;
  }, true);
})();
"""
        soup.head.append(shim)

    return str(soup)


def preview_media_type(file_path: Path) -> str | None:
    ext = file_path.suffix.lower()
    mapping = {
        ".css": "text/css",
        ".js": "application/javascript",
        ".mjs": "application/javascript",
        ".cjs": "application/javascript",
        ".html": "text/html",
        ".htm": "text/html",
        ".woff2": "font/woff2",
        ".woff": "font/woff",
        ".ttf": "font/ttf",
        ".eot": "application/vnd.ms-fontobject",
        ".otf": "font/otf",
        ".svg": "image/svg+xml",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".webp": "image/webp",
        ".ico": "image/x-icon",
        ".avif": "image/avif",
        ".mp4": "video/mp4",
        ".webm": "video/webm",
    }
    if ext in mapping:
        return mapping[ext]
    if ext == ".bin":
        parent = file_path.parent.name.lower()
        return {
            "css": "text/css",
            "js": "application/javascript",
            "fonts": "font/woff2",
            "images": "image/jpeg",
            "icons": "image/png",
        }.get(parent)
    return None
