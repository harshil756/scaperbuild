"""Download missing images and fix avatar MIME types after scrape."""

from __future__ import annotations

import re
import urllib.request
from pathlib import Path

from bs4 import BeautifulSoup

from .polite import wait_between_requests
from .storage import assets_root, url_to_local_path
from .utils import normalize_url, relative_path


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
        path.rename(new_path)
        html = html.replace(
            relative_path(html_path, path), relative_path(html_path, new_path)
        )
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
