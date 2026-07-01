"""Download missing images and fix avatar MIME types after scrape."""

from __future__ import annotations

import re
import urllib.request
from pathlib import Path

from bs4 import BeautifulSoup

from .polite import wait_between_requests
from .storage import ASSET_TYPES, assets_root, url_to_local_path
from .utils import extension_from_bytes, normalize_url, relative_path

_FOLDER_DEFAULT_EXT = {"css": ".css", "js": ".js", "fonts": ".woff2", "images": ".jpg", "videos": ".mp4"}


def fix_all_bin_extensions(page_dir: Path) -> int:
    """Rename .bin assets to correct extensions and update HTML/CSS/JS references."""
    fixed = 0
    replacements: list[tuple[str, str]] = []

    for folder in ASSET_TYPES:
        d = assets_root(page_dir) / folder
        if not d.is_dir():
            continue
        for path in list(d.rglob("*.bin")):
            if not path.is_file():
                continue
            data = path.read_bytes()
            ext = extension_from_bytes(data) or _FOLDER_DEFAULT_EXT.get(folder)
            if not ext:
                continue
            new_path = path.with_suffix(ext)
            if new_path == path:
                continue
            old_name = path.name
            if new_path.exists():
                path.unlink()
            else:
                path.rename(new_path)
            replacements.append((old_name, new_path.name))
            fixed += 1

    if replacements:
        _apply_text_replacements(page_dir, replacements)
    return fixed


def _apply_text_replacements(page_dir: Path, pairs: list[tuple[str, str]]) -> None:
    for f in page_dir.rglob("*"):
        if not f.is_file():
            continue
        if f.suffix.lower() not in (".html", ".css", ".js", ".json", ".svg"):
            continue
        try:
            text = f.read_text(encoding="utf-8")
        except Exception:
            continue
        new_text = text
        for old, new in pairs:
            if old in new_text:
                new_text = new_text.replace(old, new)
        if new_text != text:
            f.write_text(new_text, encoding="utf-8")


def fix_avatar_bin_files(page_dir: Path, page_url: str, html_path: Path) -> int:
    images_dir = assets_root(page_dir) / "images"
    if not images_dir.exists():
        return 0
    fixed = 0
    html = html_path.read_text(encoding="utf-8") if html_path.exists() else ""

    for path in list(images_dir.rglob("*.bin")):
        data = path.read_bytes()[:12]
        if not (data.startswith(b"\xff\xd8") or data.startswith(b"\x89PNG")):
            continue
        ext = ".jpg" if data.startswith(b"\xff\xd8") else ".png"
        new_path = path.with_suffix(ext)
        if new_path == path:
            continue
        old_rel = relative_path(html_path, path)
        path.rename(new_path)
        html = html.replace(old_rel, relative_path(html_path, new_path))
        fixed += 1

    if fixed and html_path.exists():
        html_path.write_text(html, encoding="utf-8")
    return fixed


def download_all_upload_images(page_dir: Path, page_url: str) -> int:
    saved = 0
    html_files = list(page_dir.glob("*.html"))
    if not html_files:
        return 0
    for html_file in html_files:
        text = html_file.read_text(encoding="utf-8")
        urls: set[str] = set()
        for img in BeautifulSoup(text, "lxml").find_all("img"):
            for attr in ("src", "data-src", "data-lazy-src", "data-original"):
                val = img.get(attr)
                if not val:
                    continue
                n = normalize_url(val, page_url)
                if n and (
                    "wp-content" in n
                    or n.lower().endswith(
                        (".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg")
                    )
                ):
                    urls.add(n)
        for m in re.finditer(
            r"https?://[^\s\"']+?/wp-content/uploads/[^\s\"')]+", text, re.I
        ):
            urls.add(m.group(0).rstrip("'\")"))

        for abs_url in urls:
            local = url_to_local_path(abs_url, page_dir)
            if local.exists() and local.stat().st_size > 100:
                continue
            if _download(abs_url, local):
                saved += 1
                text = text.replace(abs_url, relative_path(html_file, local))
        if saved:
            html_file.write_text(text, encoding="utf-8")
    return saved


def _download(url: str, local: Path) -> bool:
    try:
        wait_between_requests()
        req = urllib.request.Request(
            url, headers={"User-Agent": "Mozilla/5.0 (compatible; PageScraper/1.0)"}
        )
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = resp.read()
        local.parent.mkdir(parents=True, exist_ok=True)
        local.write_bytes(data)
        return True
    except Exception:
        return False
