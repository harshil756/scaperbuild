"""Rewrite HTML/CSS to use local asset paths under css/, js/, images/, fonts/."""

from __future__ import annotations

import re
from pathlib import Path

from bs4 import BeautifulSoup

from .utils import (
    extract_css_urls,
    is_skippable_url,
    link_should_download,
    normalize_url,
    relative_path,
)

STYLE_URL_PATTERN = re.compile(
    r"""url\(\s*['"]?([^'")\s]+)['"]?\s*\)""",
    re.IGNORECASE,
)

ATTRS = [
    ("img", "src"),
    ("img", "data-src"),
    ("img", "data-lazy-src"),
    ("img", "data-original"),
    ("img", "data-bg"),
    ("img", "data-background"),
    ("source", "src"),
    ("source", "srcset"),
    ("video", "src"),
    ("video", "poster"),
    ("audio", "src"),
    ("script", "src"),
    ("embed", "src"),
    ("object", "data"),
    ("iframe", "src"),
    ("use", "href"),
    ("image", "href"),
    ("input", "src"),
    ("div", "data-bg"),
    ("section", "data-bg"),
    ("link", "data-css-url"),
]


def rewrite_html(
    html: str,
    page_url: str,
    url_map: dict[str, Path],
    html_path: Path,
    site_dir: Path,
) -> str:
    soup = BeautifulSoup(html, "lxml")
    for base in soup.find_all("base"):
        base.decompose()

    for tag, attr in ATTRS:
        for el in soup.find_all(tag):
            val = el.get(attr)
            if not val:
                continue
            if attr == "srcset":
                el[attr] = _rewrite_srcset(val, page_url, url_map, html_path)
            else:
                loc = _to_local(val, page_url, url_map, html_path)
                if loc:
                    el[attr] = loc

    for el in soup.find_all("link"):
        href = el.get("href")
        if not href or not link_should_download(el.get("rel"), el.get("as")):
            continue
        loc = _to_local(href, page_url, url_map, html_path)
        if loc:
            el["href"] = loc

    for style in soup.find_all("style"):
        if style.string:
            style.string.replace_with(
                _rewrite_css_text(style.string, page_url, url_map, html_path)
            )

    for el in soup.find_all(style=True):
        el["style"] = _rewrite_css_text(el["style"], page_url, url_map, html_path)

    for url, path in list(url_map.items()):
        if path.suffix.lower() == ".css" or ".css" in path.name.lower():
            try:
                css = path.read_text(encoding="utf-8", errors="replace")
                path.write_text(
                    _rewrite_css_text(css, url, url_map, path),
                    encoding="utf-8",
                )
            except Exception:
                pass

    return str(soup)


def _rewrite_srcset(
    srcset: str, base: str, url_map: dict[str, Path], from_file: Path
) -> str:
    parts = []
    for part in srcset.split(","):
        bits = part.strip().split()
        if not bits:
            continue
        loc = _to_local(bits[0], base, url_map, from_file) or bits[0]
        parts.append(f"{loc} {' '.join(bits[1:])}".strip())
    return ", ".join(parts)


def _to_local(
    raw: str, base: str, url_map: dict[str, Path], from_file: Path
) -> str | None:
    if is_skippable_url(raw):
        return raw
    abs_url = normalize_url(raw, base)
    if abs_url and abs_url in url_map:
        return relative_path(from_file, url_map[abs_url])
    return None


def _rewrite_css_text(
    css: str, base: str, url_map: dict[str, Path], from_file: Path
) -> str:
    def repl_url(m: re.Match) -> str:
        raw = m.group(1).strip()
        if is_skippable_url(raw):
            return m.group(0)
        abs_url = normalize_url(raw, base)
        if abs_url and abs_url in url_map:
            rel = relative_path(from_file, url_map[abs_url])
            q = '"' if '"' in m.group(0) else "'" if "'" in m.group(0) else ""
            return f"url({q}{rel}{q})" if q else f"url({rel})"
        return m.group(0)

    css = STYLE_URL_PATTERN.sub(repl_url, css)

    def repl_import(m: re.Match) -> str:
        raw = m.group(1).strip()
        abs_url = normalize_url(raw, base)
        if abs_url and abs_url in url_map:
            rel = relative_path(from_file, url_map[abs_url])
            return f'@import url("{rel}")'
        return m.group(0)

    return re.sub(
        r"""@import\s+(?:url\()?['"]?([^'")\s;]+)['"]?\)?""",
        repl_import,
        css,
        flags=re.IGNORECASE,
    )
