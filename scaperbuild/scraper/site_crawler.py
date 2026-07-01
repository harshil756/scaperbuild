"""Automatically discover and scrape every dedicated page — same-to-same."""

from __future__ import annotations

import json
import re
import urllib.request
from pathlib import Path
from urllib.parse import urlparse, urlunparse

from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright

from .mirror import PlaywrightMirror, USER_AGENT
from .page_scraper import PageScraper
from .polite import print_polite_notice
from .postprocess import rewrite_internal_page_links
from .storage import load_manifest, url_to_page_slug
from .utils import normalize_url

SKIP_EXT = re.compile(
    r"\.(pdf|zip|rar|docx?|xlsx?|pptx?|xml|json|ico|png|jpe?g|gif|webp|svg|css|js|woff2?|mp4|webm)$",
    re.I,
)
SKIP_PREFIXES = (
    "/wp-admin",
    "/wp-login",
    "/wp-json",
    "/feed",
    "/cart",
    "/checkout",
    "/account",
    "/xmlrpc",
)
SKIP_PATTERNS = re.compile(r"/tag/|/author/|/page/\d+/?$|/attachment/", re.I)

MENU_SELECTORS = (
    "nav a[href]",
    "header a[href]",
    "footer a[href]",
    "[role='navigation'] a[href]",
    ".menu a[href]",
    ".nav a[href]",
    ".navbar a[href]",
    ".main-navigation a[href]",
    ".elementor-nav-menu a[href]",
    ".elementor-item a[href]",
    ".sub-menu a[href]",
    ".dropdown-menu a[href]",
    "#menu a[href]",
    "#primary-menu a[href]",
    ".wp-block-navigation a[href]",
    ".site-header a[href]",
    ".site-footer a[href]",
    ".footer-menu a[href]",
    ".footer-widgets a[href]",
    ".elementor-location-header a[href]",
    ".elementor-location-footer a[href]",
    "[class*='nav-menu'] a[href]",
    "[class*='menu-item'] a[href]",
)

FOOTER_SELECTORS = (
    "footer a[href]",
    ".site-footer a[href]",
    "#footer a[href]",
    ".footer a[href]",
    ".footer-widgets a[href]",
    ".footer-menu a[href]",
    ".elementor-location-footer a[href]",
    "[class*='footer'] a[href]",
)

EXPAND_MENUS_JS = """
async () => {
  const delay = ms => new Promise(r => setTimeout(r, ms));
  const click = sel => {
    document.querySelectorAll(sel).forEach(el => {
      try { el.click(); } catch (e) {}
    });
  };
  click('.menu-toggle, .navbar-toggler, .elementor-menu-toggle, .mobile-menu-toggle, ' +
    '[class*="hamburger"], [aria-label*="menu" i], button[class*="menu"]');
  await delay(600);
  document.querySelectorAll('nav li, .menu-item, .elementor-nav-menu li, .navbar-nav li').forEach(li => {
    try {
      li.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
      li.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    } catch (e) {}
  });
  await delay(800);
  document.querySelectorAll(
    '.sub-menu, .dropdown-menu, .elementor-nav-menu--dropdown, [class*="sub-menu"], [class*="submenu"]'
  ).forEach(el => {
    el.style.display = 'block';
    el.style.visibility = 'visible';
    el.style.opacity = '1';
    el.style.height = 'auto';
    el.removeAttribute('hidden');
    el.setAttribute('aria-hidden', 'false');
  });
  await delay(400);
  return true;
}
"""

HARVEST_NAV_LINKS_JS = """
() => {
  const urls = new Map();
  const add = (a) => {
    if (!a || !a.href) return;
    const h = a.href.trim();
    if (!h || h.startsWith('javascript:') || h.startsWith('mailto:') || h.startsWith('tel:'))
      return;
    const text = (a.innerText || a.textContent || '').replace(/\\s+/g, ' ').trim().slice(0, 120);
    if (!urls.has(h) && text) urls.set(h, text);
    else if (!urls.has(h)) urls.set(h, '');
  };
  const sels = %SELECTORS%;
  sels.forEach(sel => {
    try { document.querySelectorAll(sel).forEach(add); } catch (e) {}
  });
  document.querySelectorAll('a[href]').forEach(a => {
    if (a.closest('nav, header, footer, [role="navigation"], .menu, .navbar, .site-header, .site-footer'))
      add(a);
  });
  return Object.fromEntries(urls);
}
"""


def _canonical_page_url(url: str) -> str | None:
    if not url or url.startswith(("#", "mailto:", "tel:", "javascript:")):
        return None
    parsed = urlparse(url.strip())
    if parsed.scheme not in ("http", "https"):
        return None
    path = parsed.path or "/"
    if SKIP_EXT.search(path):
        return None
    if any(path.lower().startswith(p) for p in SKIP_PREFIXES):
        return None
    if SKIP_PATTERNS.search(path):
        return None
    clean = urlunparse((parsed.scheme, parsed.netloc, path, "", "", ""))
    if not clean.endswith("/") and "." not in Path(path).name:
        clean += "/"
    return clean


def _same_host(url: str, host: str) -> bool:
    return urlparse(url).netloc.replace("www.", "") == host.replace("www.", "")


def discover_links_from_html(html: str, page_url: str, host: str) -> set[str]:
    found: set[str] = set()
    soup = BeautifulSoup(html, "lxml")
    for a in soup.find_all("a", href=True):
        abs_u = normalize_url(a["href"].strip(), page_url)
        if not abs_u:
            continue
        canon = _canonical_page_url(abs_u)
        if canon and _same_host(canon, host):
            found.add(canon)
    return found


def discover_footer_links(html: str, page_url: str, host: str) -> set[str]:
    """Dedicated pages linked from site footer."""
    found: set[str] = set()
    soup = BeautifulSoup(html, "lxml")
    for sel in FOOTER_SELECTORS:
        for a in soup.select(sel):
            href = a.get("href", "").strip()
            abs_u = normalize_url(href, page_url)
            if not abs_u:
                continue
            canon = _canonical_page_url(abs_u)
            if canon and _same_host(canon, host):
                found.add(canon)
    return found


def discover_menu_links(html: str, page_url: str, host: str) -> set[str]:
    """Dedicated pages from navigation — header, footer, menus."""
    found: set[str] = set()
    soup = BeautifulSoup(html, "lxml")
    for sel in MENU_SELECTORS:
        for a in soup.select(sel):
            href = a.get("href", "").strip()
            abs_u = normalize_url(href, page_url)
            if not abs_u:
                continue
            canon = _canonical_page_url(abs_u)
            if canon and _same_host(canon, host):
                found.add(canon)
    return found


def _harvest_js_for_selectors(selectors: tuple[str, ...]) -> str:
    import json as _json

    return HARVEST_NAV_LINKS_JS.replace("%SELECTORS%", _json.dumps(list(selectors)))


def discover_links_live(
    browser,
    start_url: str,
    host: str,
    wait_ms: int = 3500,
) -> tuple[set[str], set[str], dict[str, str]]:
    """
    Open live page, expand menus/dropdowns, harvest header + footer links.
    Catches JS-rendered navigation that static HTML may miss.
    """
    context = _new_browser_context(browser)
    menu_urls: set[str] = set()
    footer_urls: set[str] = set()
    titles: dict[str, str] = {}
    try:
        page = context.new_page()
        page.goto(start_url, wait_until="domcontentloaded", timeout=120000)
        page.wait_for_timeout(min(wait_ms, 8000))
        try:
            page.evaluate(EXPAND_MENUS_JS)
        except Exception:
            pass
        page.wait_for_timeout(500)

        menu_raw = page.evaluate(_harvest_js_for_selectors(MENU_SELECTORS)) or {}
        footer_raw = page.evaluate(_harvest_js_for_selectors(FOOTER_SELECTORS)) or {}

        for raw_map, bucket in ((menu_raw, menu_urls), (footer_raw, footer_urls)):
            for abs_u, label in raw_map.items():
                canon = _canonical_page_url(abs_u)
                if not canon or not _same_host(canon, host):
                    continue
                bucket.add(canon)
                if label and (canon not in titles or len(label) < len(titles[canon])):
                    titles[canon] = label
    except Exception:
        pass
    finally:
        context.close()
    return menu_urls, footer_urls, titles


def harvest_nav_from_page(page, page_url: str) -> dict:
    """Harvest menu/footer page URLs from live browser (before page closes)."""
    host = urlparse(page_url).netloc
    menu_urls: set[str] = set()
    footer_urls: set[str] = set()
    titles: dict[str, str] = {}
    try:
        page.evaluate(EXPAND_MENUS_JS)
        page.wait_for_timeout(600)
        menu_raw = page.evaluate(_harvest_js_for_selectors(MENU_SELECTORS)) or {}
        footer_raw = page.evaluate(_harvest_js_for_selectors(FOOTER_SELECTORS)) or {}
        for raw_map, bucket in ((menu_raw, menu_urls), (footer_raw, footer_urls)):
            for abs_u, label in raw_map.items():
                canon = _canonical_page_url(abs_u)
                if not canon or not _same_host(canon, host):
                    continue
                bucket.add(canon)
                if label:
                    titles.setdefault(canon, label)
    except Exception:
        pass
    return {"menu": menu_urls, "footer": footer_urls, "titles": titles}


def discover_whole_site_urls(
    start_url: str,
    homepage_html: str,
    host: str,
    browser=None,
    wait_ms: int = 3500,
    homepage_nav: dict | None = None,
) -> dict:
    """
    Collect every page URL for a full-site scrape.
    Priority order: home → header menus → footer → WP API → sitemap → all links.
    """
    base = f"{urlparse(start_url).scheme}://{host}"
    start = _canonical_page_url(start_url) or start_url

    menu = discover_menu_links(homepage_html, start_url, host)
    footer = discover_footer_links(homepage_html, start_url, host)
    titles = discover_link_titles_from_html(homepage_html, start_url, host)

    if homepage_nav:
        menu.update(homepage_nav.get("menu") or set())
        footer.update(homepage_nav.get("footer") or set())
        for u, t in (homepage_nav.get("titles") or {}).items():
            titles.setdefault(u, t)

    if browser is not None:
        nav_count = len(menu) + len(footer)
        try:
            from .speed import get_speed

            threshold = get_speed().skip_live_discovery_if_nav
        except Exception:
            threshold = 99
        if nav_count < threshold:
            live_menu, live_footer, live_titles = discover_links_live(
                browser, start_url, host, wait_ms
            )
            menu.update(live_menu)
            footer.update(live_footer)
            for u, t in live_titles.items():
                titles.setdefault(u, t)

    wp_pages, wp_posts = fetch_wordpress_urls(base, host)
    wp = wp_pages | wp_posts
    sitemap = discover_sitemap_urls(base, host)
    all_links = discover_links_from_html(homepage_html, start_url, host)

    raw_ordered: list[str] = []
    seen: set[str] = set()

    def add(urls: set[str] | list[str]) -> None:
        for u in urls:
            if u not in seen:
                seen.add(u)
                raw_ordered.append(u)

    add([start])
    add(menu)
    add(footer)
    add(wp_pages)
    add(sitemap)
    add(all_links)
    add(wp_posts)

    from .page_priority import sort_urls_by_scrape_tier

    sorted_entries = sort_urls_by_scrape_tier(
        raw_ordered,
        menu=menu,
        footer=footer,
        wp_pages=wp_pages,
        wp_posts=wp_posts,
        start=start,
    )
    ordered = [url for url, _tier, _kind in sorted_entries]
    url_tiers = {url: tier for url, tier, kind in sorted_entries}
    url_kinds = {url: kind for url, tier, kind in sorted_entries}

    return {
        "ordered": ordered,
        "menu": menu,
        "footer": footer,
        "wp": wp,
        "wp_pages": wp_pages,
        "wp_posts": wp_posts,
        "sitemap": sitemap,
        "all_links": all_links,
        "titles": titles,
        "start": start,
        "url_tiers": url_tiers,
        "url_kinds": url_kinds,
    }


def discover_link_titles_from_html(html: str, page_url: str, host: str) -> dict[str, str]:
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


def auto_discover_seeds(start_url: str, homepage_html: str, host: str) -> list[str]:
    """Ordered seed URLs: home → menus → footer → WP/sitemap → all links."""
    return discover_whole_site_urls(start_url, homepage_html, host)["ordered"]


def fetch_wordpress_urls(base_url: str, host: str) -> tuple[set[str], set[str]]:
    """Return (pages, posts) from WP REST API."""
    pages: set[str] = set()
    posts: set[str] = set()
    base = base_url.rstrip("/")
    for kind in ("posts", "pages"):
        page_num = 1
        while page_num <= 30:
            endpoint = (
                f"{base}/wp-json/wp/v2/{kind}?per_page=100&page={page_num}&_fields=link"
            )
            try:
                req = urllib.request.Request(
                    endpoint,
                    headers={"User-Agent": "Mozilla/5.0 (compatible; SiteCrawler/1.0)"},
                )
                with urllib.request.urlopen(req, timeout=30) as resp:
                    batch = json.loads(resp.read())
            except Exception:
                break
            if not batch:
                break
            bucket = posts if kind == "posts" else pages
            for item in batch:
                link = item.get("link", "")
                canon = _canonical_page_url(link)
                if canon and _same_host(canon, host):
                    bucket.add(canon)
            if len(batch) < 100:
                break
            page_num += 1
    return pages, posts


def fetch_wordpress_urls_all(base_url: str, host: str) -> set[str]:
    pages, posts = fetch_wordpress_urls(base_url, host)
    return pages | posts


def _fetch_sitemap_locs(sm_url: str) -> list[str]:
    try:
        req = urllib.request.Request(
            sm_url, headers={"User-Agent": "Mozilla/5.0 (compatible; SiteCrawler/1.0)"}
        )
        with urllib.request.urlopen(req, timeout=20) as resp:
            text = resp.read().decode("utf-8", errors="replace")
        return [m.group(1).strip() for m in re.finditer(r"<loc>([^<]+)</loc>", text, re.I)]
    except Exception:
        return []


def discover_sitemap_urls(base_url: str, host: str) -> set[str]:
    urls: set[str] = set()
    base = base_url.rstrip("/")
    for path in ("/sitemap.xml", "/sitemap_index.xml", "/wp-sitemap.xml", "/sitemap-index.xml"):
        locs = _fetch_sitemap_locs(base + path)
        for loc in locs:
            if loc.lower().endswith(".xml") and "sitemap" in loc.lower():
                for child in _fetch_sitemap_locs(loc):
                    canon = _canonical_page_url(child)
                    if canon and _same_host(canon, host):
                        urls.add(canon)
            else:
                canon = _canonical_page_url(loc)
                if canon and _same_host(canon, host):
                    urls.add(canon)
    return urls


def _page_title(html_path: Path) -> str:
    if not html_path.exists():
        return html_path.parent.name
    html = html_path.read_text(encoding="utf-8", errors="replace")
    m = re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S)
    if m:
        return re.sub(r"\s+", " ", m.group(1)).strip()[:80]
    return html_path.parent.name


def rewrite_all_internal_links(site_dir: Path) -> None:
    manifest = load_manifest(site_dir)
    for url, info in manifest.get("pages", {}).items():
        html_path = site_dir / info["html"]
        if html_path.exists():
            text = rewrite_internal_page_links(
                html_path.read_text(encoding="utf-8"), url, manifest, html_path
            )
            html_path.write_text(text, encoding="utf-8")


def scrape_page_in_context(
    url: str,
    site_dir: Path,
    wait_ms: int,
    context,
    headed: bool = False,
    timeout_ms: int = 180000,
) -> tuple[Path, dict]:
    scraper = PageScraper(
        url=url,
        site_dir=site_dir,
        wait_ms=wait_ms,
        timeout_ms=timeout_ms,
        headed=headed,
    )
    mirror = PlaywrightMirror(
        url=url,
        page_dir=scraper.page_folder,
        wait_ms=wait_ms,
        timeout_ms=timeout_ms,
        headed=headed,
    )
    print_polite_notice(url)
    html, _ = mirror.capture_in_context(context)
    path = scraper.finalize_from_mirror(mirror, html)
    nav = getattr(mirror, "nav_discovery", None) or {}
    return path, nav


def _new_browser_context(browser):
    """Fresh context per page — same isolation as single-page scrape."""
    return browser.new_context(
        user_agent=USER_AGENT,
        viewport={"width": 1920, "height": 1080},
        locale="en-AU",
        ignore_https_errors=True,
    )


def _scrape_one_page(
    browser,
    url: str,
    site_dir: Path,
    wait_ms: int,
    headed: bool = False,
) -> tuple[Path, dict]:
    context = _new_browser_context(browser)
    try:
        return scrape_page_in_context(url, site_dir, wait_ms, context, headed)
    finally:
        context.close()


def _scrape_standalone(
    url: str,
    site_dir: Path,
    wait_ms: int,
    headed: bool = False,
) -> tuple[Path, dict]:
    """Scrape one page in its own browser — safe for parallel workers."""
    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=not headed,
            args=["--disable-blink-features=AutomationControlled"],
        )
        try:
            context = _new_browser_context(browser)
            try:
                return scrape_page_in_context(url, site_dir, wait_ms, context, headed)
            finally:
                context.close()
        finally:
            browser.close()


def post_crawl_polish(site_dir: Path) -> dict:
    """Run full polish on every page after multi-page crawl (banners, SEO, assets)."""
    from scraper.export_polish import polish_entire_site
    from scraper.page_discovery import write_pages_catalog

    result = polish_entire_site(site_dir)
    try:
        write_pages_catalog(site_dir)
    except Exception:
        pass
    return result


def _make_page_entry(
    url: str,
    status: str,
    source: str,
    site_dir: Path | None = None,
    **extra,
) -> dict:
    from .page_discovery import allocate_page_slug, slug_to_display_name

    slug = allocate_page_slug(site_dir, url) if site_dir else url_to_page_slug(url)
    name = extra.get("name") or extra.get("title") or slug_to_display_name(slug)
    return {
        "url": url,
        "slug": slug,
        "name": name,
        "status": status,
        "source": source,
        "kind": extra.get("kind", "main"),
        "title": extra.get("title") or name,
        "preview_path": extra.get("preview_path"),
        "error": extra.get("error"),
    }


def crawl_site(
    start_url: str,
    site_dir: Path,
    wait_ms: int = 35000,
    max_pages: int = 100,
    scrape_mode: str = "full",
    headed: bool = False,
    on_progress=None,
    speed: str = "fast",
) -> dict:
    """
    Scrape a website same-to-same.
    scrape_mode: "single" = only the pasted URL; "full" = auto-detect & scrape all pages.
    speed: "fast" | "balanced" | "quality"
    """
    from concurrent.futures import ThreadPoolExecutor, as_completed

    from .polite import set_fetch_delay
    from .speed import get_speed, resolve_wait_ms, set_speed

    profile = set_speed(speed)
    set_fetch_delay(profile.fetch_delay_sec)
    wait_ms = resolve_wait_ms(wait_ms, speed)
    parallel_pages = profile.parallel_pages if scrape_mode == "full" else 1

    site_dir = Path(site_dir)
    host = urlparse(start_url).netloc
    start = _canonical_page_url(start_url) or start_url
    single_page = scrape_mode == "single"

    if on_progress:
        msg = (
            "Scraping this page..."
            if single_page
            else "Finding all pages — menus, footer, sitemap & links..."
        )
        on_progress({"phase": "discover", "message": msg})

    pages_state: list[dict] = []
    seen: set[str] = set()
    queue: list[str] = []

    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=not headed,
            args=["--disable-blink-features=AutomationControlled"],
        )

        # --- Homepage / target page (fresh context = same quality as single-page mode) ---
        if on_progress:
            scrape_label = "Scraping this page..." if single_page else "Scraping homepage..."
            on_progress({"phase": "scraping", "message": scrape_label, "pages": pages_state})

        html_path, home_nav = _scrape_one_page(browser, start, site_dir, wait_ms, headed)
        home_html = html_path.read_text(encoding="utf-8", errors="replace")

        seen.add(start)
        pages_state.append(
            _make_page_entry(
                start,
                "done",
                "homepage",
                site_dir=site_dir,
                title=_page_title(html_path),
                preview_path=html_path.relative_to(site_dir).as_posix(),
            )
        )
        if on_progress:
            on_progress(
                {
                    "phase": "scraping",
                    "pages": list(pages_state),
                    "message": "Downloaded assets for page 1",
                    "page_folder": str(html_path.parent),
                }
            )

        if single_page:
            if on_progress:
                on_progress(
                    {
                        "phase": "discovered",
                        "pages": list(pages_state),
                        "total": 1,
                        "message": "Scraped 1 page (first page only)",
                    }
                )
            browser.close()
        else:
            # --- Auto-detect whole website (menus, footer, WP, sitemap, links) ---
            from .page_discovery import discover_page_catalog

            if on_progress:
                on_progress(
                    {
                        "phase": "discover",
                        "message": "Expanding menus & reading header/footer navigation...",
                    }
                )

            catalog = discover_page_catalog(
                start_url,
                home_html,
                host,
                site_dir,
                browser=browser,
                wait_ms=wait_ms,
                homepage_nav=home_nav,
            )

            done_count = 1
            q_idx = 0
            url_tiers: dict[str, int] = {}
            wp_pages_set: set[str] = set()
            wp_posts_set: set[str] = set()
            menu_set: set[str] = set()
            footer_set: set[str] = set()

            from .page_priority import classify_url, insert_url_by_tier

            def _enqueue(
                url: str,
                source: str,
                name: str | None = None,
                kind: str | None = None,
                tier: int | None = None,
            ) -> None:
                nonlocal pages_state
                if url in seen or len(seen) >= max_pages:
                    return
                if tier is None or kind is None:
                    tier, kind = classify_url(
                        url,
                        menu=menu_set,
                        footer=footer_set,
                        wp_pages=wp_pages_set,
                        wp_posts=wp_posts_set,
                        start=start,
                    )
                seen.add(url)
                entry = _make_page_entry(
                    url,
                    "pending",
                    source,
                    site_dir=site_dir,
                    name=name or None,
                    kind=kind,
                )
                pages_state.append(entry)
                insert_url_by_tier(queue, url, tier, url_tiers)

            _disc = discover_whole_site_urls(start_url, home_html, host, homepage_nav=home_nav)
            wp_pages_set = set(_disc.get("wp_pages", set()))
            wp_posts_set = set(_disc.get("wp_posts", set()))
            menu_set = set(_disc.get("menu", set()))
            footer_set = set(_disc.get("footer", set()))

            for item in catalog:
                u = item["url"]
                if u == start:
                    continue
                if len(seen) >= max_pages:
                    break
                _enqueue(
                    u,
                    item["source"],
                    item.get("name"),
                    kind=item.get("kind"),
                    tier=item.get("tier"),
                )

            if on_progress:
                on_progress(
                    {
                        "phase": "discovered",
                        "pages": list(pages_state),
                        "total": len(pages_state),
                        "message": (
                            f"Found {len(pages_state)} pages — main first, then blog, then posts"
                            if len(pages_state) > 1
                            else "Warning: only homepage found — check URL or try again"
                        ),
                    }
                )
            if len(pages_state) <= 1:
                print(
                    "[!] Full-site mode: no extra pages discovered from menus, footer, sitemap, or links."
                )

            # --- BFS: scrape main → blog listings → blog posts ---
            def _enqueue_discovered(page_html: str, page_url: str) -> list[str]:
                menu_new = discover_menu_links(page_html, page_url, host)
                footer_new = discover_footer_links(page_html, page_url, host)
                body_new = discover_links_from_html(page_html, page_url, host)
                added: list[str] = []
                for nav_link in sorted(menu_new | footer_new):
                    source = "menu" if nav_link in menu_new else "footer"
                    before = len(seen)
                    _enqueue(nav_link, source)
                    if len(seen) > before:
                        added.append(nav_link)
                for body_link in sorted(body_new - menu_new - footer_new):
                    before = len(seen)
                    _enqueue(body_link, "discovered")
                    if len(seen) > before:
                        added.append(body_link)
                return added

            while q_idx < len(queue) and done_count < max_pages:

                def _apply_scrape_result(url: str, entry: dict, path: Path) -> None:
                    nonlocal done_count
                    page_html = path.read_text(encoding="utf-8", errors="replace")
                    entry["status"] = "done"
                    entry["preview_path"] = path.relative_to(site_dir).as_posix()
                    entry["title"] = _page_title(path)
                    entry["slug"] = load_manifest(site_dir)["pages"].get(url, {}).get(
                        "slug", entry.get("slug")
                    )
                    done_count += 1
                    if on_progress:
                        on_progress(
                            {
                                "phase": "scraping",
                                "pages": list(pages_state),
                                "current": done_count,
                                "total": len(pages_state),
                                "current_url": url,
                                "discovered_links": len(seen),
                                "links_crawled": done_count,
                                "message": f"Downloaded assets — page {done_count}/{len(pages_state)}",
                                "page_folder": str(path.parent),
                            }
                        )
                    for link in _enqueue_discovered(page_html, url):
                        if on_progress:
                            on_progress(
                                {
                                    "phase": "scraping",
                                    "pages": list(pages_state),
                                    "current": done_count,
                                    "total": len(pages_state),
                                    "discovered_links": len(seen),
                                    "message": f"Found new page: {link}",
                                }
                            )

                batch: list[tuple[str, dict]] = []
                while q_idx < len(queue) and len(batch) < parallel_pages and done_count + len(batch) < max_pages:
                    url = queue[q_idx]
                    q_idx += 1
                    entry = next((p for p in pages_state if p["url"] == url), None)
                    if not entry or entry["status"] == "done":
                        continue
                    entry["status"] = "scraping"
                    batch.append((url, entry))

                if not batch:
                    continue

                if on_progress:
                    on_progress(
                        {
                            "phase": "scraping",
                            "pages": list(pages_state),
                            "current": done_count + 1,
                            "total": len(pages_state),
                            "message": f"Scraping {len(batch)} page(s) in parallel ({done_count + 1}/{len(pages_state)})",
                        }
                    )

                if parallel_pages <= 1:
                    for url, entry in batch:
                        try:
                            path, _nav = _scrape_one_page(browser, url, site_dir, wait_ms, headed)
                            _apply_scrape_result(url, entry, path)
                        except Exception as e:
                            entry["status"] = "failed"
                            entry["error"] = str(e)
                else:
                    with ThreadPoolExecutor(max_workers=len(batch)) as pool:
                        futures = {
                            pool.submit(_scrape_standalone, url, site_dir, wait_ms, headed): (url, entry)
                            for url, entry in batch
                        }
                        for fut in as_completed(futures):
                            url, entry = futures[fut]
                            try:
                                path, _nav = fut.result()
                                _apply_scrape_result(url, entry, path)
                            except Exception as e:
                                entry["status"] = "failed"
                                entry["error"] = str(e)

            # Retry failed pages once (fresh context each time)
            for entry in pages_state:
                if entry["status"] != "failed":
                    continue
                url = entry["url"]
                if on_progress:
                    on_progress(
                        {
                            "phase": "scraping",
                            "pages": list(pages_state),
                            "message": f"Retrying failed page: {url}",
                        }
                    )
                try:
                    path, _nav = _scrape_one_page(browser, url, site_dir, wait_ms, headed)
                    entry["status"] = "done"
                    entry["error"] = None
                    entry["preview_path"] = path.relative_to(site_dir).as_posix()
                    entry["title"] = _page_title(path)
                    entry["slug"] = load_manifest(site_dir)["pages"].get(url, {}).get(
                        "slug", entry.get("slug")
                    )
                    done_count += 1
                except Exception as e:
                    entry["error"] = str(e)

            browser.close()

    if on_progress:
        link_msg = "Finalizing page..." if single_page else "Linking all pages together (same-to-same)..."
        on_progress({"phase": "linking", "message": link_msg})
    if not single_page:
        rewrite_all_internal_links(site_dir)

    try:
        post_crawl_polish(site_dir)
    except Exception:
        pass

    try:
        from serve import write_root_redirect

        write_root_redirect(site_dir)
    except Exception:
        pass

    return {
        "pages": pages_state,
        "total": len(pages_state),
        "done": sum(1 for p in pages_state if p["status"] == "done"),
        "failed": sum(1 for p in pages_state if p["status"] == "failed"),
        "homepage": html_path,
    }
