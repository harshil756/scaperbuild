"""URL and filesystem helpers."""

from __future__ import annotations

import hashlib
import re
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse, urlunparse

SKIP_SCHEMES = ("data:", "blob:", "javascript:", "mailto:", "tel:", "#")
CSS_URL_PATTERN = re.compile(
    r"""url\(\s*['"]?([^'")\s]+)['"]?\s*\)""",
    re.IGNORECASE,
)
IMPORT_PATTERN = re.compile(
    r"""@import\s+(?:url\()?['"]?([^'")\s;]+)['"]?\)?""",
    re.IGNORECASE,
)
ASSET_EXT_RE = re.compile(
    r"\.(css|js|mjs|cjs|woff2?|ttf|eot|otf|svg|png|jpe?g|webp|gif|ico|avif)(\?|$)",
    re.IGNORECASE,
)


def is_skippable_url(url: str | None) -> bool:
    if not url or not url.strip():
        return True
    u = url.strip()
    return u.startswith(SKIP_SCHEMES) or u == "#"


def normalize_url(url: str, base: str) -> str | None:
    """Resolve relative URL against base; return None if invalid/skippable."""
    url = url.strip()
    if is_skippable_url(url):
        return None
    if url.startswith("//"):
        parsed_base = urlparse(base)
        url = f"{parsed_base.scheme}:{url}"
    full = urljoin(base, url)
    parsed = urlparse(full)
    if parsed.scheme not in ("http", "https"):
        return None
    return urlunparse(
        (parsed.scheme, parsed.netloc, parsed.path, parsed.params, parsed.query, "")
    )


def is_asset_url(url: str, content_type: str = "") -> bool:
    """True if URL looks like a downloadable static asset."""
    ct = content_type.lower()
    if any(
        x in ct
        for x in (
            "text/css",
            "javascript",
            "image/",
            "font/",
            "woff",
            "svg+xml",
            "octet-stream",
        )
    ):
        return True
    return bool(ASSET_EXT_RE.search(urlparse(url).path))


def extension_from_url(url: str) -> str | None:
    path = urlparse(url).path.lower()
    m = ASSET_EXT_RE.search(path)
    if m:
        ext = m.group(1).lower()
        if ext in ("jpeg", "jpg"):
            return ".jpg"
        if ext == "js" or ext in ("mjs", "cjs"):
            return ".js"
        return f".{ext}"
    return None


def url_to_asset_path(url: str, base_url: str, assets_dir: Path) -> Path:
    """Map URL to a unique path under assets_dir preserving folder hint."""
    parsed = urlparse(url)
    path = unquote(parsed.path).lstrip("/")
    if not path:
        path = "index"
    local = assets_dir / parsed.netloc / path
    if parsed.query:
        qhash = hashlib.md5(parsed.query.encode()).hexdigest()[:8]
        stem = local.stem + f"_{qhash}"
        local = local.with_name(stem + local.suffix)
    if not local.suffix:
        ext = extension_from_url(url)
        if ext:
            local = local.with_suffix(ext)
        else:
            local = local.with_suffix(".bin")
    return local


def local_page_href(html_path: Path, site_dir: Path, html_rel: str) -> str:
    """Clean local URL like ../office-pest-control/ (matches live site paths)."""
    slug = Path(html_rel).parts[0]
    target = site_dir / slug
    href = relative_path(html_path, target)
    return href if href.endswith("/") else f"{href}/"


def relative_path(from_file: Path, to_file: Path) -> str:
    """POSIX-style relative path from one file to another (always works)."""
    import os

    from_dir = Path(from_file).parent.resolve()
    to_path = Path(to_file).resolve()
    rel = os.path.relpath(to_path, from_dir)
    return rel.replace("\\", "/")


def web_path_from_root(asset_path: Path, site_root: Path) -> str:
    """Absolute web path e.g. /assets/host/file.css for index.html."""
    import os

    rel = os.path.relpath(asset_path.resolve(), site_root.resolve())
    return "/" + rel.replace("\\", "/")


def extract_css_urls(css_text: str) -> list[str]:
    urls: list[str] = []
    for m in CSS_URL_PATTERN.finditer(css_text):
        urls.append(m.group(1).strip())
    for m in IMPORT_PATTERN.finditer(css_text):
        urls.append(m.group(1).strip())
    return urls


def link_should_download(rel: list[str] | str | None, as_attr: str | None) -> bool:
    """Only download <link> tags that point to real files (CSS, fonts, icons)."""
    if rel is None:
        return False
    if isinstance(rel, str):
        rel = [rel]
    rel = [r.lower() for r in rel]
    if any(r in ("stylesheet", "icon", "shortcut icon", "apple-touch-icon") for r in rel):
        return True
    if "preload" in rel and as_attr:
        return as_attr.lower() in ("style", "font", "script", "image")
    return False
