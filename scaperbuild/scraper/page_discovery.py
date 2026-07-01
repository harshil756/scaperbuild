"""Auto-discover page URLs, slugs, names, and build site catalog."""

from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path
from urllib.parse import urlparse

from bs4 import BeautifulSoup

from .page_priority import kind_from_url, tier_for_kind
from .storage import load_manifest, save_manifest, url_to_page_slug
from .utils import normalize_url


def slug_to_display_name(slug: str) -> str:
    if slug == "home":
        return "Home"
    return slug.replace("-", " ").replace("_", " ").title()


def discover_link_titles(html: str, page_url: str, host: str) -> dict[str, str]:
    """Map canonical page URL → anchor text (menu / link label)."""
    from .site_crawler import _canonical_page_url, _same_host

    titles: dict[str, str] = {}
    soup = BeautifulSoup(html, "lxml")
    for a in soup.find_all("a", href=True):
        href = a.get("href", "").strip()
        abs_u = normalize_url(href, page_url)
        if not abs_u:
            continue
        canon = _canonical_page_url(abs_u)
        if not canon or not _same_host(canon, host):
            continue
        text = re.sub(r"\s+", " ", a.get_text()).strip()
        if not text or len(text) > 120:
            continue
        if canon not in titles or len(text) < len(titles[canon]):
            titles[canon] = text
    return titles


def _source_for_url(
    url: str,
    menu: set[str],
    footer: set[str],
    wp: set[str],
    sitemap: set[str],
    start: str,
) -> str:
    if url == start:
        return "homepage"
    if url in menu:
        return "menu"
    if url in footer:
        return "footer"
    if url in wp:
        return "wordpress"
    if url in sitemap:
        return "sitemap"
    return "link"


def discover_page_catalog(
    start_url: str,
    homepage_html: str,
    host: str,
    site_dir: Path | None = None,
    browser=None,
    wait_ms: int = 3500,
    homepage_nav: dict | None = None,
) -> list[dict]:
    """
    Auto-find every page: URL, slug, display name, discovery source.
    Order: home → menus → footer → WP API → sitemap → all links.
    """
    from .site_crawler import discover_whole_site_urls

    discovered = discover_whole_site_urls(
        start_url,
        homepage_html,
        host,
        browser=browser,
        wait_ms=wait_ms,
        homepage_nav=homepage_nav,
    )
    menu = discovered["menu"]
    footer = discovered["footer"]
    wp = discovered["wp"]
    wp_pages = discovered.get("wp_pages", set())
    wp_posts = discovered.get("wp_posts", set())
    sitemap = discovered["sitemap"]
    titles = discovered["titles"]
    start = discovered["start"]
    ordered_urls = discovered["ordered"]
    url_kinds = discovered.get("url_kinds", {})
    url_tiers = discovered.get("url_tiers", {})
    used_slugs: set[str] = set()
    if site_dir:
        for info in load_manifest(site_dir).get("pages", {}).values():
            if info.get("slug"):
                used_slugs.add(info["slug"])

    catalog: list[dict] = []
    for url in ordered_urls:
        slug = url_to_page_slug(url)
        if slug in used_slugs:
            slug = f"{slug}-{hashlib.md5(url.encode()).hexdigest()[:6]}"
        used_slugs.add(slug)
        name = titles.get(url) or slug_to_display_name(slug)
        kind = url_kinds.get(url) or "main"
        tier = url_tiers.get(url, 0)
        catalog.append(
            {
                "url": url,
                "slug": slug,
                "name": name,
                "source": _source_for_url(url, menu, footer, wp, sitemap, start),
                "kind": kind,
                "tier": tier,
                "html": f"{slug}/home.html" if slug == "home" else f"{slug}/{slug}.html",
            }
        )
    return catalog


def allocate_page_slug(site_dir: Path, url: str) -> str:
    """Unique folder slug per URL (no overwrite on nested path collisions)."""
    site_dir = Path(site_dir)
    base = url_to_page_slug(url)
    manifest = load_manifest(site_dir)

    for existing_url, info in manifest.get("pages", {}).items():
        if existing_url == url and info.get("slug"):
            return info["slug"]

    slug = base
    taken = {info.get("slug") for info in manifest.get("pages", {}).values() if info.get("slug")}
    if slug in taken:
        slug = f"{base}-{hashlib.md5(url.encode()).hexdigest()[:6]}"
    return slug


def write_pages_catalog(site_dir: Path) -> Path:
    """Write pages/catalog.json — all URLs, slugs, names, SEO paths."""
    site_dir = Path(site_dir)
    manifest = load_manifest(site_dir)
    pages: list[dict] = []

    for url, info in manifest.get("pages", {}).items():
        slug = info.get("slug") or url_to_page_slug(url)
        seo_path = site_dir / "seo" / f"{slug}.json"
        seo = {}
        if seo_path.exists():
            try:
                seo = json.loads(seo_path.read_text(encoding="utf-8"))
            except Exception:
                pass
        pages.append(
            {
                "url": url,
                "slug": slug,
                "name": info.get("name") or seo.get("title") or slug_to_display_name(slug),
                "kind": info.get("kind") or kind_from_url(url),
                "html": info.get("html", ""),
                "title": seo.get("title") or info.get("seo", {}).get("title", ""),
                "description": seo.get("description") or info.get("seo", {}).get("description", ""),
                "scraped_at": info.get("scraped_at", ""),
            }
        )

    pages.sort(
        key=lambda p: (
            tier_for_kind(p.get("kind") or "main"),
            p["slug"] != "home",
            p["slug"],
        )
    )
    out = site_dir / "pages" / "catalog.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps({"pages": pages, "count": len(pages)}, indent=2, ensure_ascii=False), encoding="utf-8")

    manifest["catalog"] = f"pages/catalog.json"
    manifest["page_count"] = len(pages)
    save_manifest(site_dir, manifest)
    return out
