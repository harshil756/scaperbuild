#!/usr/bin/env python3
"""
Website page scraper — clone ONE page at a time (no auto-crawl).

Saves into per-page folders:
  export/<site>/home/home.html + home/assets/...

Usage (paste your URL when ready):
  python scrape.py https://example.com
  python scrape.py https://example.com --headed --open
  python scrape.py https://example.com --site-dir export/example.com
"""

from __future__ import annotations

import argparse
import sys
import time
import webbrowser
from pathlib import Path

from scraper.page_scraper import PageScraper


def open_with_server(site_dir: Path, html_name: str = "home.html", port: int = 8765) -> None:
    import urllib.request

    from serve import start_server

    try:
        _httpd, actual_port, url = start_server(site_dir.resolve(), port, background=True)
    except Exception as e:
        print(f"[!] Could not start server: {e}", file=sys.stderr)
        print(f'    Run manually: python serve.py "{site_dir.resolve()}"')
        return

    # Wait until the page responds (avoids opening browser before server is ready)
    for _ in range(30):
        try:
            with urllib.request.urlopen(url, timeout=1) as resp:
                if resp.status == 200:
                    break
        except Exception:
            time.sleep(0.2)
    else:
        print(f"[!] Server started but page not reachable at {url}")

    print(f"[+] Browser: {url}")
    if actual_port != port:
        print(f"[*] (Port {port} was busy — using {actual_port})")
    webbrowser.open(url)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Scrape one webpage with all CSS/JS/images/fonts (Playwright)."
    )
    parser.add_argument("url", help="Page URL e.g. https://example.com/")
    parser.add_argument(
        "-o",
        "--output",
        default="export",
        help="Root export folder (default: export)",
    )
    parser.add_argument(
        "--site-dir",
        help="Existing site folder (add page to same export; reuses css/js/images)",
    )
    parser.add_argument(
        "--wait",
        type=int,
        default=15000,
        help="Ms to wait for JS/lazy images after load (default: 15000)",
    )
    parser.add_argument("--timeout", type=int, default=180000)
    parser.add_argument("--open", action="store_true", help="Start server and open browser")
    parser.add_argument("--port", type=int, default=8765)
    parser.add_argument(
        "--headed",
        action="store_true",
        default=None,
        help="Visible browser (better for JS widgets)",
    )
    parser.add_argument("--headless", action="store_true", help="Force headless mode")
    args = parser.parse_args()
    headed = False if args.headless else args.headed

    try:
        scraper = PageScraper(
            url=args.url,
            site_dir=args.site_dir,
            output_root=Path(args.output),
            wait_ms=args.wait,
            timeout_ms=args.timeout,
            headed=headed,
        )
        html_path = scraper.scrape()
    except Exception as e:
        print(f"\n[!] Error: {e}", file=sys.stderr)
        import traceback

        traceback.print_exc()
        return 1

    if args.open:
        open_with_server(scraper.site_dir, scraper.html_name, args.port)
    return 0


if __name__ == "__main__":
    sys.exit(main())
