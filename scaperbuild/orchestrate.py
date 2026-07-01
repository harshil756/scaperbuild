#!/usr/bin/env python3
"""One-command: scrape full website → React SPA with linked menus.

Usage:
  python orchestrate.py https://example.com
  python orchestrate.py https://example.com --max-pages 50 --dev
  python orchestrate.py https://example.com --output export/example.com
"""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(ROOT / "scraper-studio"))


def _safe_host(url: str) -> str:
    return urlparse(url).netloc.replace(":", "-") or "site"


def main() -> int:
    parser = argparse.ArgumentParser(description="Scrape full site → React SPA (auto-linked menus)")
    parser.add_argument("url", help="Website URL to scrape")
    parser.add_argument("--max-pages", type=int, default=100, help="Max pages to scrape (default 100)")
    parser.add_argument("--speed", choices=("fast", "balanced", "quality"), default="fast")
    parser.add_argument("--wait", type=int, default=12000, help="Page wait ms (default 12000)")
    parser.add_argument("--output", help="Output folder for scraped site (default: export/<host>)")
    parser.add_argument("--stack", default="react-architecture", help="Conversion stack (default: react-architecture)")
    parser.add_argument("--no-convert", action="store_true", help="Skip React conversion")
    parser.add_argument("--dev", action="store_true", help="Run npm run dev after conversion")
    parser.add_argument("--headed", action="store_true", help="Show browser while scraping")
    args = parser.parse_args()

    url = args.url.strip()
    if not url.startswith(("http://", "https://")):
        url = "https://" + url

    host = _safe_host(url)
    site_dir = Path(args.output) if args.output else ROOT / "export" / host
    site_dir.mkdir(parents=True, exist_ok=True)

    print(f"→ Scraping full site: {url}")
    print(f"  Output: {site_dir}")

    from scraper.site_crawler import crawl_site
    from scraper.site_architecture import analyze_site_architecture
    from scraper.export_polish import polish_entire_site

    result = crawl_site(
        url,
        site_dir,
        wait_ms=args.wait,
        max_pages=args.max_pages,
        scrape_mode="full",
        headed=args.headed,
        speed=args.speed,
    )
    print(f"  Scraped {result['done']}/{result['total']} pages")

    architecture = analyze_site_architecture(site_dir, url)
    nav_count = len(architecture.get("navigation", {}).get("header", []))
    print(f"  Detected {architecture.get('page_count', 0)} pages, {nav_count} nav links")

    polish = polish_entire_site(site_dir)
    print(f"  Polished {polish.get('pages', 0)} pages")

    try:
        from ai.enhance import enhance_architecture

        architecture = enhance_architecture(site_dir, architecture)
        print("  AI structure analysis complete")
    except Exception:
        pass

    if args.no_convert:
        print(f"\n✓ Done. Preview: python serve.py {site_dir}")
        return 0

    converted_dir = site_dir.parent / f"{site_dir.name}-react"
    print(f"\n→ Converting to {args.stack}...")

    stack_modules = {
        "react-architecture": "converter.react_architecture",
        "react-vite": "converter.react_vite",
        "nextjs": "converter.nextjs",
        "laravel": "converter.laravel",
        "static": "converter.zip_export",
    }
    import importlib

    mod_name = stack_modules.get(args.stack, f"converter.{args.stack.replace('-', '_')}")
    mod = importlib.import_module(mod_name)
    mod.convert(site_dir, converted_dir, url)

    print(f"  React project: {converted_dir}")
    print(f"  Pages: {result['done']} | Menus auto-linked via SPA router")

    if args.dev:
        print("\n→ Starting dev server...")
        subprocess.run(["npm", "install"], cwd=converted_dir, check=True)
        subprocess.run(["npm", "run", "dev"], cwd=converted_dir)
    else:
        print(f"\n✓ Ready! Run:")
        print(f"  cd {converted_dir}")
        print(f"  npm install && npm run dev")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
