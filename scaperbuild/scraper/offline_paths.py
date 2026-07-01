"""Normalize asset URLs for offline static mirror (relative paths, fix mangled refs)."""

from __future__ import annotations

import re
from pathlib import Path

from bs4 import BeautifulSoup

_ASSET_ATTRS = (
    "src",
    "href",
    "poster",
    "data-src",
    "data-lazy-src",
    "data-original",
    "data-bg",
    "data-background",
    "data-video-url",
    "content",
)


def ensure_relative_asset_paths(html: str) -> str:
    """Convert root-absolute /assets/... → relative assets/... for page-local mirrors."""
    html = re.sub(
        r'(src|href|poster|data-src|data-lazy-src|data-original|data-bg|data-background|data-video-url|content)=(["\'])/assets/',
        r'\1=\2assets/',
        html,
        flags=re.I,
    )
    html = re.sub(
        r'url\(\s*(["\']?)/assets/',
        r"url(\1assets/",
        html,
        flags=re.I,
    )
    # Bare quoted /assets/ in JSON or inline scripts
    html = re.sub(r'(["\'])/assets/', r"\1assets/", html)
    return html


def fix_mangled_asset_urls(html: str, page_dir: Path) -> str:
    """Repair URLs where image canonical replacement glued onto wp-content or other paths."""
    from .storage import assets_root
    from .utils import relative_path

    assets = assets_root(page_dir)
    by_name: dict[str, Path] = {}
    by_suffix: dict[str, Path] = {}
    if assets.is_dir():
        for f in assets.rglob("*"):
            if not f.is_file():
                continue
            by_name[f.name.lower()] = f
            rel = f.relative_to(assets).as_posix().lower()
            by_suffix[rel] = f
            by_suffix.setdefault(f.name.lower(), f)

    html_path_guess = page_dir / "home.html"
    if not html_path_guess.exists():
        pages = list(page_dir.glob("*.html"))
        html_path_guess = pages[0] if pages else page_dir / "page.html"

    def resolve_tail(tail: str) -> str | None:
        clean = tail.split("?")[0].split("#")[0]
        name = Path(clean).name.lower()
        hit = by_name.get(name)
        if hit:
            return relative_path(html_path_guess, hit)
        key = clean.lstrip("/").lower()
        if key.startswith("wp-content/"):
            key = key.split("wp-content/", 1)[-1]
        for suffix, path in by_suffix.items():
            if suffix.endswith(key) or suffix == name:
                return relative_path(html_path_guess, path)
        return None

    def repl_wp(m: re.Match[str]) -> str:
        resolved = resolve_tail(m.group(1))
        return resolved if resolved else m.group(0)

    # asset_HASH.jpgwp-content/themes/... → local css/font file
    html = re.sub(
        r'(?:\.\./)*(?:assets/images/)?asset_[a-f0-9]+\.(?:jpg|jpeg|png|webp|gif|bin|svg)(wp-content/[^"\'\s<>?#]+)',
        repl_wp,
        html,
        flags=re.I,
    )
    # Leading slash variant
    html = re.sub(
        r'/assets/images/asset_[a-f0-9]+\.(?:jpg|jpeg|png|webp|bin)(wp-content/[^"\'\s<>?#]+)',
        repl_wp,
        html,
        flags=re.I,
    )
    html = re.sub(
        r'href=(["\'])/assets/images/asset_[^"\']+\.(?:jpg|png|webp|bin)(assets/[^"\']+)\1',
        r'href="\2"',
        html,
        flags=re.I,
    )
    # asset_HASH.jpg/gtm.js or asset_HASH.jpgwp-content/... glued in href/src
    html = re.sub(
        r'(?:\.\./)*(?:assets/images/)?asset_[a-f0-9]+\.(?:jpg|jpeg|png|webp|gif|bin|svg)/(?:gtm\.js|fbevents)[^"\'\s<>]*',
        "",
        html,
        flags=re.I,
    )
    return html


def verify_and_relink_assets(html: str, page_dir: Path, html_path: Path) -> str:
    """Point every assets/ href at a real file on disk when possible."""
    from .storage import assets_root
    from .utils import relative_path

    assets = assets_root(page_dir)
    if not assets.is_dir():
        return html

    by_name: dict[str, Path] = {}
    for f in assets.rglob("*"):
        if f.is_file():
            by_name[f.name.lower()] = f
            stem = f.stem.lower()
            by_name.setdefault(stem, f)

    soup = BeautifulSoup(html, "lxml")

    def rel_for(path: Path) -> str:
        return relative_path(html_path, path)

    for el in soup.find_all(True):
        for attr in _ASSET_ATTRS:
            val = el.get(attr)
            if not val or val.startswith(("data:", "http://", "https://", "//", "#")):
                continue
            clean = val.split("?")[0].split("#")[0]
            if clean.startswith("/assets/"):
                clean = clean.lstrip("/")
            if not clean.startswith("assets/"):
                continue
            fname = Path(clean).name.lower()
            if (page_dir / clean).is_file():
                continue
            hit = by_name.get(fname)
            if hit:
                el[attr] = rel_for(hit)

    for style in soup.find_all("style"):
        if style.string:
            style.string.replace_with(
                _fix_css_asset_urls(style.string, page_dir, html_path, by_name)
            )

    return str(soup)


def _fix_css_asset_urls(
    css: str, page_dir: Path, html_path: Path, by_name: dict[str, Path]
) -> str:
    from .utils import relative_path

    def repl(m: re.Match[str]) -> str:
        raw = m.group(1).strip()
        if raw.startswith(("data:", "http://", "https://")):
            return m.group(0)
        clean = raw.lstrip("/")
        if (page_dir / clean).is_file():
            return m.group(0)
        fname = Path(clean).name.lower()
        hit = by_name.get(fname)
        if hit:
            rel = relative_path(html_path, hit)
            q = '"' if '"' in m.group(0) else "'" if "'" in m.group(0) else ""
            return f"url({q}{rel}{q})" if q else f"url({rel})"
        return m.group(0)

    return re.sub(r"url\(\s*['\"]?([^)'\"]+)['\"]?\s*\)", repl, css, flags=re.I)


def normalize_offline_html(html: str, page_dir: Path, html_path: Path) -> str:
    html = fix_mangled_asset_urls(html, page_dir)
    html = ensure_relative_asset_paths(html)
    html = verify_and_relink_assets(html, page_dir, html_path)
    html = ensure_relative_asset_paths(html)
    html = _fix_remaining_root_assets_in_css_attrs(html, page_dir, html_path)
    from .postprocess import apply_offline_runtime_fixes
    from .offline_popups import apply_offline_popup_fixes

    html = apply_offline_runtime_fixes(html)
    html = apply_offline_popup_fixes(html, page_dir)
    return html


def _fix_remaining_root_assets_in_css_attrs(html: str, page_dir: Path, html_path: Path) -> str:
    """Fix src/href still pointing at /assets when file exists under page_dir."""
    from .utils import relative_path

    soup = BeautifulSoup(html, "lxml")
    changed = False
    for el in soup.find_all(True):
        for attr in _ASSET_ATTRS:
            val = el.get(attr)
            if not val or not str(val).startswith("/assets/"):
                continue
            rel = val.lstrip("/")
            target = page_dir / rel
            if target.is_file():
                el[attr] = relative_path(html_path, target)
                changed = True
    return str(soup) if changed else html
