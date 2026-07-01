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
    ("img", "srcset"),
    ("source", "src"),
    ("source", "srcset"),
    ("video", "src"),
    ("video", "poster"),
    ("video", "data-src"),
    ("audio", "src"),
    ("script", "src"),
    ("embed", "src"),
    ("object", "data"),
    ("iframe", "src"),
    ("use", "href"),
    ("image", "href"),
    ("input", "src"),
    ("div", "data-bg"),
    ("div", "data-background"),
    ("div", "data-video-url"),
    ("div", "data-bg-video"),
    ("section", "data-bg"),
    ("section", "data-background"),
    ("section", "data-video-url"),
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
        if not href:
            continue
        rel = el.get("rel")
        as_attr = el.get("as")
        if not link_should_download(rel, as_attr):
            # Still rewrite stylesheets/preloads even if rel is nonstandard
            rel_s = " ".join(rel).lower() if isinstance(rel, list) else str(rel or "").lower()
            if "stylesheet" not in rel_s and as_attr not in ("style", "font", "script"):
                continue
        loc = _to_local(href, page_url, url_map, html_path)
        if loc:
            el["href"] = loc
            if "stylesheet" in str(rel or "").lower() or (as_attr or "").lower() == "style":
                el["rel"] = "stylesheet"

    for style in soup.find_all("style"):
        if style.string:
            style.string.replace_with(
                _rewrite_css_text(style.string, page_url, url_map, html_path)
            )

    for el in soup.find_all(style=True):
        el["style"] = _rewrite_css_text(el["style"], page_url, url_map, html_path)

    from .fidelity import rewrite_data_settings

    html_out = rewrite_data_settings(str(soup), page_url, url_map, html_path, site_dir)
    soup = BeautifulSoup(html_out, "lxml")

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
    if abs_url:
        from urllib.parse import unquote, urlparse

        name = Path(unquote(urlparse(abs_url).path)).name.lower()
        if name:
            for path in url_map.values():
                if path.name.lower() == name:
                    return relative_path(from_file, path)
                if name in path.name.lower() or path.stem.lower() in name:
                    return relative_path(from_file, path)
    return None


def _page_dir_for_asset(from_file: Path) -> Path:
    p = from_file.parent
    for _ in range(8):
        if (p / "assets").is_dir():
            return p
        if p.parent == p:
            break
        p = p.parent
    return from_file.parent


def _rewrite_css_text(
    css: str, base: str, url_map: dict[str, Path], from_file: Path
) -> str:
    page_dir = _page_dir_for_asset(from_file)

    def repl_url(m: re.Match) -> str:
        raw = m.group(1).strip()
        if is_skippable_url(raw):
            return m.group(0)
        abs_url = normalize_url(raw, base)
        if abs_url and abs_url in url_map:
            rel = relative_path(from_file, url_map[abs_url])
            q = '"' if '"' in m.group(0) else "'" if "'" in m.group(0) else ""
            return f"url({q}{rel}{q})" if q else f"url({rel})"
        if abs_url:
            from .storage import find_existing_local_asset

            hit = find_existing_local_asset(page_dir, abs_url)
            if hit:
                rel = relative_path(from_file, hit)
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
