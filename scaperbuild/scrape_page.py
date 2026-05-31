#!/usr/bin/env python3
"""
Scrape an additional page into the same site export (manual, one at a time).

Reuses shared css/js/images/fonts. Links between scraped pages are rewritten locally.

  python scrape_page.py https://example.com/about/ --site-dir export/example.com --headed
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from scraper.page_scraper import PageScraper


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Scrape one more page into an existing site folder."
    )
    parser.add_argument("url", help="Full page URL")
    parser.add_argument(
        "--site-dir",
        required=True,
        help="Site export folder from first scrape (e.g. export/example.com)",
    )
    parser.add_argument("--wait", type=int, default=15000)
    parser.add_argument("--headed", action="store_true")
    parser.add_argument("--headless", action="store_true")
    args = parser.parse_args()
    headed = False if args.headless else args.headed

    site = Path(args.site_dir)
    if not site.exists():
        print(f"[!] Site folder not found: {site}", file=sys.stderr)
        print("    Scrape the homepage first: python scrape.py <homepage-url>")
        return 1

    try:
        scraper = PageScraper(
            url=args.url,
            site_dir=site,
            wait_ms=args.wait,
            headed=headed,
        )
        scraper.scrape()
    except Exception as e:
        print(f"[!] {e}", file=sys.stderr)
        return 1

    print(f'[+] View: python serve.py "{site.resolve()}"')
    return 0


if __name__ == "__main__":
    sys.exit(main())
