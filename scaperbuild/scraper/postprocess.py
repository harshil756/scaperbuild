"""Post-scrape fixes: CSS paths, lazy backgrounds, internal page links."""

from __future__ import annotations

import re
from pathlib import Path
from urllib.parse import unquote, urlparse

from bs4 import BeautifulSoup

from .storage import assets_root
from .utils import extract_css_urls, normalize_url, local_page_href, relative_path

LAZYLOAD_FIX_CSS = """
/* Offline fix: show backgrounds blocked by lazy-load placeholders */
.e-con.e-parent:not(.e-no-lazyload),
[data-bg], [data-background] {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
/* Elementor background video — same-to-same offline */
.elementor-background-video-container,
.elementor-background-video-embed {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
video.elementor-background-video-hosted {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
}
/* Preserve CSS animations offline */
@media (prefers-reduced-motion: no-preference) {
  .animated, [class*="elementor-animation-"] {
    animation-fill-mode: both;
  }
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
    for css_file in css_dir.rglob("*"):
        if not css_file.is_file():
            continue
        if css_file.suffix.lower() not in (".css", ".bin"):
            continue
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


OFFLINE_STUB_SCRIPT = """
(function () {
  var noop = function () {};
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || noop;
  window.fbq = window.fbq || function () {
    (window.fbq.queue = window.fbq.queue || []).push(arguments);
  };
  window.fbq.queue = window.fbq.queue || [];
  window.grecaptcha = window.grecaptcha || {
    ready: function (cb) { if (cb) setTimeout(cb, 0); },
    execute: function () { return Promise.resolve("offline"); },
    render: noop,
  };
})();
"""

_OFFLINE_SCRIPT_MARKERS = (
    "recaptcha",
    "googletagmanager",
    "gtm.js",
    "fbevents",
    "clarity.ms",
    "google-analytics",
    "connect.facebook",
)


def apply_offline_runtime_fixes(html: str) -> str:
    """Stub analytics/recaptcha and drop scripts that cannot run offline."""
    soup = BeautifulSoup(html, "lxml")
    if not soup.head:
        return html

    for script in list(soup.find_all("script", src=True)):
        src = (script.get("src") or "").lower()
        if any(m in src for m in _OFFLINE_SCRIPT_MARKERS):
            script.decompose()
            continue
        if "asset_" in src and (".jpg" in src or ".png" in src) and (
            "gtm" in src or "fbevents" in src or ".js" in src
        ):
            script.decompose()

    if not soup.find("script", id="scraper-offline-stubs"):
        stub = soup.new_tag("script", id="scraper-offline-stubs")
        stub.string = OFFLINE_STUB_SCRIPT
        soup.head.insert(0, stub)

    return str(soup)


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
    from .storage import find_existing_local_asset

    page_dir = html_path.parent
    soup = BeautifulSoup(html, "lxml")
    for el in soup.find_all(srcset=True):
        parts = []
        for part in el["srcset"].split(","):
            bits = part.strip().split()
            if not bits:
                continue
            n = normalize_url(bits[0], page_url)
            if n and n in url_map:
                bits[0] = relative_path(html_path, url_map[n])
            elif n:
                hit = find_existing_local_asset(page_dir, n)
                if hit:
                    bits[0] = relative_path(html_path, hit)
            parts.append(" ".join(bits))
        el["srcset"] = ", ".join(parts)
    return str(soup)


def _canonical_path(url: str) -> str:
    path = unquote(urlparse(url).path).rstrip("/").lower()
    return path or "/"


def _build_page_path_lookup(pages: dict) -> dict[str, str]:
    """Map site URL paths to manifest html paths (handles short /foo aliases)."""
    lookup: dict[str, str] = {}
    for src_url, info in pages.items():
        html = info.get("html", "")
        if not html:
            continue
        path = _canonical_path(src_url)
        lookup[path] = html
        prefix = "/our-services/"
        if path.startswith(prefix):
            lookup.setdefault("/" + path[len(prefix) :], html)
    for alias, target in (
        ("/wasp-nest-removal-melbourne", "/wasp-removal-melbourne"),
        ("/our-services/rodent-control-melbourne", "/rodent-control-in-melbourne"),
        ("/rodent-control-melbourne", "/rodent-control-in-melbourne"),
    ):
        if target in lookup:
            lookup.setdefault(alias, lookup[target])
    return lookup


def _rewrite_local_html_links(html: str, html_path: Path, site_dir: Path) -> str:
    """Convert ../slug/slug.html → ../slug/ for already-rewritten local links."""
    import re

    def repl(match: re.Match[str]) -> str:
        slug = match.group(2)
        folder = site_dir / slug
        if not (folder / f"{slug}.html").exists():
            return match.group(0)
        href = local_page_href(html_path, site_dir, f"{slug}/{slug}.html")
        return f'href="{href}"'

    return re.sub(
        r'(href="(?:\.\./)+)([a-z0-9-]+)/\2\.html"',
        repl,
        html,
        flags=re.IGNORECASE,
    )


def rewrite_internal_page_links(
    html: str, page_url: str, manifest: dict, html_path: Path
) -> str:
    """Point <a href> to local page folders (clean URLs, no .html)."""
    pages = manifest.get("pages", {})
    if not pages:
        return html
    lookup = _build_page_path_lookup(pages)
    site_host = urlparse(page_url).netloc
    soup = BeautifulSoup(html, "lxml")
    site_dir = html_path.parent.parent
    for a in soup.find_all("a", href=True):
        href = a["href"]
        if href.startswith(("#", "mailto:", "tel:", "javascript:")):
            continue
        abs_u = normalize_url(href, page_url)
        if not abs_u:
            continue
        parsed = urlparse(abs_u)
        if parsed.netloc and parsed.netloc != site_host:
            continue
        html_rel = lookup.get(_canonical_path(abs_u))
        if html_rel:
            a["href"] = local_page_href(html_path, site_dir, html_rel)
    html = str(soup)
    return _rewrite_local_html_links(html, html_path, site_dir)
