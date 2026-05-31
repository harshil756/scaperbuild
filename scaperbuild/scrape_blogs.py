#!/usr/bin/env python3
"""Scrape blog index + all posts from 7statespestcontrol.com.au."""

from __future__ import annotations

import argparse
import json
import sys
import urllib.request
from pathlib import Path

from playwright.sync_api import Page, sync_playwright

from scraper.mirror import PlaywrightMirror, USER_AGENT
from scraper.page_scraper import PageScraper
from scraper.polite import print_polite_notice
from scraper.postprocess import rewrite_internal_page_links
from scraper.storage import ensure_page_dirs, ensure_site_dirs, load_manifest

SITE = "https://7statespestcontrol.com.au"
BLOG_INDEX = f"{SITE}/blog/"


class BlogMirror(PlaywrightMirror):
    """Expand Load More on the blog listing before capture."""

    def _load_page(self, page: Page) -> None:
        super()._load_page(page)
        self._prepare_blog_listing(page)

    def _prepare_blog_listing(self, page: Page) -> None:
        if "/blog" not in self.url:
            return
        print("[*] Expanding blog listing (Load More)...")
        page.keyboard.press("Escape")
        page.wait_for_timeout(500)
        for sel in (
            ".dialog-close-button",
            ".elementor-popup-modal .dialog-close-button",
            '[aria-label="Close"]',
        ):
            loc = page.locator(sel).first
            if loc.count() and loc.is_visible():
                try:
                    loc.click(timeout=2000)
                    page.wait_for_timeout(500)
                    break
                except Exception:
                    pass
        clicks = 0
        for _ in range(50):
            btn = page.locator(
                "a:has-text('Load More'), button:has-text('Load More')"
            ).first
            if btn.count() == 0 or not btn.is_visible():
                break
            try:
                btn.click(timeout=8000, force=True)
                page.wait_for_timeout(2500)
                clicks += 1
            except Exception:
                break
        print(f"[+] Blog listing expanded ({clicks} Load More clicks).")


def fetch_post_urls() -> list[str]:
    urls: list[str] = []
    page = 1
    while True:
        endpoint = (
            f"{SITE}/wp-json/wp/v2/posts?per_page=100&page={page}"
            f"&_fields=link"
        )
        with urllib.request.urlopen(endpoint, timeout=60) as resp:
            batch = json.loads(resp.read())
        if not batch:
            break
        urls.extend(item["link"].rstrip("/") + "/" for item in batch)
        if len(batch) < 100:
            break
        page += 1
    return urls


def rewrite_all_links(site_dir: Path) -> None:
    manifest = load_manifest(site_dir)
    for url, info in manifest["pages"].items():
        html_path = site_dir / info["html"]
        if html_path.exists():
            text = rewrite_internal_page_links(
                html_path.read_text(encoding="utf-8"), url, manifest, html_path
            )
            html_path.write_text(text, encoding="utf-8")
    print(f"[+] Updated internal links on {len(manifest['pages'])} pages")


def scrape_one(
    url: str,
    site_dir: Path,
    wait_ms: int,
    headed: bool | None,
    mirror_class: type = PlaywrightMirror,
    context=None,
) -> None:
    scraper = PageScraper(
        url=url,
        site_dir=site_dir,
        wait_ms=wait_ms,
        headed=headed,
        mirror_class=mirror_class,
    )
    print(f"\n{'='*60}")
    print(f"  PAGE SCRAPER — {url}")
    print(f"  Page folder: {scraper.page_folder}")
    print(f"{'='*60}\n")

    ensure_site_dirs(site_dir)
    ensure_page_dirs(scraper.page_folder)

    mirror = mirror_class(
        url=url,
        page_dir=scraper.page_folder,
        wait_ms=wait_ms,
        timeout_ms=scraper.timeout_ms,
        headed=headed,
    )
    if context is not None:
        print_polite_notice(url)
        html, _ = mirror.capture_in_context(context)
    else:
        html, _ = mirror.capture()
    scraper.finalize_from_mirror(mirror, html)


def scrape_posts_batch(
    urls: list[str],
    site_dir: Path,
    wait_ms: int,
    headed: bool | None,
) -> list[str]:
    """Reuse one browser for all blog posts."""
    failed: list[str] = []
    mode = "visible browser" if headed else "headless"
    print(f"[*] Batch mode: {mode} (one browser for {len(urls)} posts)")

    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=not headed,
            args=["--disable-blink-features=AutomationControlled"],
        )
        context = browser.new_context(
            user_agent=USER_AGENT,
            viewport={"width": 1920, "height": 1080},
            locale="en-AU",
            ignore_https_errors=True,
        )
        for i, url in enumerate(urls, 1):
            print(f"\n========== [{i}/{len(urls)}] {url} ==========")
            try:
                scrape_one(url, site_dir, wait_ms, headed, context=context)
            except Exception as e:
                print(f"[!] Failed: {e}", file=sys.stderr)
                failed.append(url)
        browser.close()
    return failed


def main() -> int:
    parser = argparse.ArgumentParser(description="Scrape blog index and all posts.")
    parser.add_argument(
        "--site-dir",
        default="export/7statespestcontrol.com.au",
        help="Site export folder",
    )
    parser.add_argument("--wait", type=int, default=10000)
    parser.add_argument("--headed", action="store_true")
    parser.add_argument("--headless", action="store_true")
    parser.add_argument(
        "--skip-index",
        action="store_true",
        help="Skip blog listing page (posts only)",
    )
    args = parser.parse_args()
    headed = False if args.headless else args.headed
    site_dir = Path(args.site_dir).resolve()

    if not site_dir.exists():
        print(f"[!] Site folder not found: {site_dir}", file=sys.stderr)
        return 1

    manifest = load_manifest(site_dir)
    existing = set(manifest.get("pages", {}).keys())

    if not args.skip_index and BLOG_INDEX not in existing:
        print(f"\n========== Blog index: {BLOG_INDEX} ==========")
        try:
            scrape_one(
                BLOG_INDEX,
                site_dir,
                args.wait,
                headed,
                mirror_class=BlogMirror,
            )
        except Exception as e:
            print(f"[!] Blog index failed: {e}", file=sys.stderr)
            return 1
    elif BLOG_INDEX in existing:
        print("[*] Blog index already scraped — skipping")

    posts = fetch_post_urls()
    print(f"\n[*] {len(posts)} blog posts from WordPress API")

    pending = []
    manifest = load_manifest(site_dir)
    for url in posts:
        if url in manifest.get("pages", {}):
            print(f"[*] skip (exists): {url}")
        else:
            pending.append(url)

    failed = scrape_posts_batch(pending, site_dir, args.wait, headed) if pending else []

    print("\n[*] Rewriting internal links across site...")
    rewrite_all_links(site_dir)

    print("\n[+] Blog scrape complete.")
    print(f"    Posts in API: {len(posts)}")
    print(f"    Scraped this run: {len(pending)}")
    if failed:
        print(f"    Failed ({len(failed)}):")
        for u in failed:
            print(f"      - {u}")
    print(f'[+] View: python3 serve.py "{site_dir}"')
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
