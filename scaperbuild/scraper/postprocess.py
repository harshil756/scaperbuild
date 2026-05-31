"""Post-scrape fixes: CSS paths, lazy backgrounds, internal page links."""

from __future__ import annotations

import re
from pathlib import Path
from urllib.parse import urlparse

from bs4 import BeautifulSoup

from .storage import assets_root
from .utils import extract_css_urls, normalize_url, relative_path

LAZYLOAD_FIX_CSS = """
/* Offline fix: show backgrounds blocked by lazy-load placeholders */
.e-con.e-parent:not(.e-no-lazyload),
[data-bg], [data-background] {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
"""


def repair_all_css_paths(
    page_dir: Path, page_url: str, url_map: dict[str, Path]
) -> int:
    """Fix url() in saved CSS files to point at local css/images/fonts paths."""
    fixed = 0
    css_dir = assets_root(page_dir) / "css"
    if not css_dir.exists():
        return 0
    for css_file in css_dir.rglob("*.css"):
        text = css_file.read_text(encoding="utf-8", errors="replace")
        original = text
        base = _base_url_for_css(css_file, page_url, url_map)
        for raw in extract_css_urls(text):
            abs_u = normalize_url(raw, base)
            if not abs_u or abs_u not in url_map:
                continue
            rel = relative_path(css_file, url_map[abs_u])
            if raw in text:
                text = text.replace(raw, rel)
                fixed += 1
            if abs_u in text:
                text = text.replace(abs_u, rel)
        if text != original:
            css_file.write_text(text, encoding="utf-8")
    return fixed


def _base_url_for_css(
    css_file: Path, page_url: str, url_map: dict[str, Path]
) -> str:
    for url, path in url_map.items():
        if path == css_file:
            return url
    return page_url


def apply_lazyload_fixes(html: str) -> str:
    """Remove lazy-load blockers; add minimal offline CSS."""
    soup = BeautifulSoup(html, "lxml")
    for style in soup.find_all("style"):
        s = style.string or ""
        if "e-lazyloaded" in s and "background-image: none" in s:
            style.decompose()
    for el in soup.find_all(class_=True):
        classes = el.get("class") or []
        if isinstance(classes, str):
            classes = classes.split()
        if "e-con" in classes and "e-parent" in classes and "e-lazyloaded" not in classes:
            el["class"] = classes + ["e-lazyloaded"]
    if soup.head and not soup.find("style", id="scraper-lazy-fix"):
        fix = soup.new_tag("style", id="scraper-lazy-fix")
        fix.string = LAZYLOAD_FIX_CSS
        soup.head.append(fix)
    return str(soup)


def fix_srcset_to_local(
    html: str,
    page_url: str,
    url_map: dict[str, Path],
    site_dir: Path,
    html_path: Path,
) -> str:
    soup = BeautifulSoup(html, "lxml")
    for img in soup.find_all(srcset=True):
        parts = []
        for part in img["srcset"].split(","):
            bits = part.strip().split()
            if not bits:
                continue
            n = normalize_url(bits[0], page_url)
            if n and n in url_map:
                bits[0] = relative_path(html_path, url_map[n])
            parts.append(" ".join(bits))
        img["srcset"] = ", ".join(parts)
    return str(soup)


def rewrite_internal_page_links(
    html: str, page_url: str, manifest: dict, html_path: Path
) -> str:
    """Point <a href> to local html/*.html when that page was scraped manually."""
    pages = manifest.get("pages", {})
    if not pages:
        return html
    soup = BeautifulSoup(html, "lxml")
    site_dir = html_path.parent.parent
    for a in soup.find_all("a", href=True):
        href = a["href"]
        if href.startswith(("#", "mailto:", "tel:", "javascript:")):
            continue
        abs_u = normalize_url(href, page_url)
        if not abs_u:
            continue
        for src_url, info in pages.items():
            if normalize_url(src_url, src_url) == abs_u:
                rel = info.get("html", "")
                if rel:
                    target = site_dir / rel
                    a["href"] = relative_path(html_path, target)
                break
    return str(soup)
