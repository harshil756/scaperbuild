"""Find and download every asset URL referenced in scraped HTML/CSS."""

from __future__ import annotations

import json
import re
import time
import urllib.error
import urllib.request
from pathlib import Path

from bs4 import BeautifulSoup

from .polite import wait_between_requests
from .storage import assets_root, find_existing_local_asset, url_to_local_path
from .utils import (
    extract_css_urls,
    is_blocked_extra_download,
    is_local_asset_ref,
    is_recoverable_download_error,
    normalize_url,
    relative_path,
)

# Attributes that may hold asset URLs (including background video)
SCAN_ATTRS = (
    "src",
    "href",
    "poster",
    "data-src",
    "data-lazy-src",
    "data-original",
    "data-bg",
    "data-background",
    "data-video-url",
    "data-bg-video",
    "data-background-video",
    "data-css-url",
    "data-lazyload",
    "data-thumb",
    "data-retina",
    "data-bgretina",
    "content",
    "srcset",
)

HTTP_URL_RE = re.compile(r"https?://[^\s\"'<>\\)]+", re.I)
ELEMENTOR_VIDEO_RE = re.compile(
    r"background_video_link[^\"']*[\"'](https?://[^\"']+)[\"']", re.I
)


def _collect_from_data_settings(html: str) -> set[str]:
    urls: set[str] = set()
    for m in re.finditer(r'data-settings="([^"]*)"', html, re.I):
        raw = m.group(1).replace("&quot;", '"').replace("&amp;", "&")
        for vm in ELEMENTOR_VIDEO_RE.finditer(raw):
            urls.add(vm.group(1))
        try:
            data = json.loads(raw)
            _walk_json_urls(data, urls)
        except Exception:
            pass
    for m in re.finditer(r"https?://[^\s\"'<>]+\.(?:mp4|webm|mov|m4v)(?:\?[^\s\"'<>]*)?", html, re.I):
        urls.add(m.group(0).rstrip("'\")"))
    return urls


def _walk_json_urls(obj, urls: set[str]) -> None:
    if isinstance(obj, str) and obj.startswith(("http://", "https://")):
        urls.add(obj)
    elif isinstance(obj, dict):
        for v in obj.values():
            _walk_json_urls(v, urls)
    elif isinstance(obj, list):
        for v in obj:
            _walk_json_urls(v, urls)


def extract_all_urls(html: str, page_url: str) -> set[str]:
    urls: set[str] = set()
    urls.update(_collect_from_data_settings(html))

    soup = BeautifulSoup(html, "lxml")

    for link in soup.find_all("link", href=True):
        rel = " ".join(link.get("rel") or []).lower()
        href = link.get("href", "")
        if is_local_asset_ref(href):
            continue
        if any(r in rel for r in ("icon", "apple-touch-icon", "shortcut")):
            n = normalize_url(href, page_url)
            if n:
                urls.add(n)
        if link.get("as", "").lower() == "font":
            n = normalize_url(href, page_url)
            if n:
                urls.add(n)

    for tag in soup.find_all(True):
        for attr in SCAN_ATTRS:
            val = tag.get(attr)
            if not val or is_local_asset_ref(val):
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
        style = tag.get("style")
        if style:
            for raw in extract_css_urls(style):
                if is_local_asset_ref(raw):
                    continue
                n = normalize_url(raw, page_url)
                if n:
                    urls.add(n)

    for style in soup.find_all("style"):
        text = style.string or ""
        for raw in extract_css_urls(text):
            if is_local_asset_ref(raw):
                continue
            n = normalize_url(raw, page_url)
            if n:
                urls.add(n)

    for m in HTTP_URL_RE.finditer(html):
        u = m.group(0).rstrip("'\")\\")
        if is_local_asset_ref(u):
            continue
        if any(
            ext in u.lower()
            for ext in (
                ".mp4",
                ".webm",
                ".mov",
                ".woff",
                ".woff2",
                ".ttf",
                ".eot",
                ".otf",
                ".png",
                ".jpg",
                ".jpeg",
                ".webp",
                ".gif",
                ".svg",
                ".ico",
                ".css",
                ".js",
            )
        ) or "wp-content" in u or "wp-includes" in u:
            urls.add(u)

    return urls


def _download(url: str, local: Path, page_url: str) -> bool:
    """Download only when not already on disk; never surface recoverable HTTP errors."""
    try:
        from .telemetry_hook import (
            report_download_complete,
            report_download_progress,
            report_download_start,
        )

        wait_between_requests()
        req = urllib.request.Request(
            url,
            headers={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
                "Referer": page_url,
            },
        )
        report_download_start(local.name, url)
        with urllib.request.urlopen(req, timeout=60) as resp:
            if resp.status and resp.status >= 400:
                return False
            total = int(resp.headers.get("Content-Length") or 0)
            chunks: list[bytes] = []
            downloaded = 0
            chunk_size = 65536
            start = time.time()
            while True:
                block = resp.read(chunk_size)
                if not block:
                    break
                chunks.append(block)
                downloaded += len(block)
                elapsed = max(time.time() - start, 0.001)
                speed = int(downloaded / elapsed)
                report_download_progress(local.name, downloaded, total or downloaded, speed)
            data = b"".join(chunks)
        if len(data) < 10:
            return False
        local.parent.mkdir(parents=True, exist_ok=True)
        local.write_bytes(data)
        folder = local.parent.name if local.parent.name in ("css", "js", "images", "videos", "fonts") else "assets"
        report_download_complete(local.name, len(data), folder)
        return True
    except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError, OSError):
        return False
    except Exception:
        return False


def _rewrite_text_paths(text: str, page_url: str, html_path: Path, mapping: dict[str, str]) -> str:
    for abs_url, rel in mapping.items():
        text = text.replace(abs_url, rel)
    return text


def download_all_missing_assets(page_dir: Path, page_url: str, html_path: Path) -> int:
    """Download videos, fonts, and any URL found in HTML/CSS but not yet saved."""
    if not html_path.exists():
        return 0

    html = html_path.read_text(encoding="utf-8")
    urls = extract_all_urls(html, page_url)

    css_dir = assets_root(page_dir) / "css"
    if css_dir.exists():
        for css_file in css_dir.rglob("*.css"):
            try:
                css_text = css_file.read_text(encoding="utf-8", errors="replace")
            except Exception:
                continue
            base = page_url
            for raw in extract_css_urls(css_text):
                if is_local_asset_ref(raw):
                    continue
                n = normalize_url(raw, base)
                if n:
                    urls.add(n)

    saved = 0
    skipped = 0
    mapping: dict[str, str] = {}

    for abs_url in sorted(urls):
        if not abs_url.startswith(("http://", "https://")):
            continue
        if is_blocked_extra_download(abs_url) or is_local_asset_ref(abs_url):
            skipped += 1
            continue

        local = url_to_local_path(abs_url, page_dir)
        existing = find_existing_local_asset(page_dir, abs_url, local)
        if existing:
            mapping[abs_url] = relative_path(html_path, existing)
            skipped += 1
            continue
        if local.exists() and local.stat().st_size > 50:
            mapping[abs_url] = relative_path(html_path, local)
            continue

        if _download(abs_url, local, page_url):
            saved += 1
            mapping[abs_url] = relative_path(html_path, local)
        else:
            skipped += 1

    if mapping:
        new_html = _rewrite_text_paths(html, page_url, html_path, mapping)
        if new_html != html:
            html_path.write_text(new_html, encoding="utf-8")

        if css_dir.exists():
            for css_file in css_dir.rglob("*.css"):
                try:
                    css_text = css_file.read_text(encoding="utf-8", errors="replace")
                except Exception:
                    continue
                updated = _rewrite_text_paths(css_text, page_url, html_path, mapping)
                if updated != css_text:
                    css_file.write_text(updated, encoding="utf-8")

    if saved:
        print(f"[*] Downloaded {saved} extra asset(s) (videos/fonts/images).")
    if skipped:
        print(f"[*] Skipped {skipped} asset URL(s) (already local or unavailable).")
    return saved
