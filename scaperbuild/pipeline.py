#!/usr/bin/env python3
"""
Scrape homepage from site config (one page, read-only).

  python pipeline.py
  python pipeline.py --headed --open
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SITE_CONFIG = ROOT / "sites" / "site.json"


def load_site() -> dict:
    if SITE_CONFIG.exists():
        return json.loads(SITE_CONFIG.read_text(encoding="utf-8"))
    legacy = ROOT / "sites" / "7states.json"
    if legacy.exists():
        return json.loads(legacy.read_text(encoding="utf-8"))
    raise FileNotFoundError(
        f"No config at {SITE_CONFIG}. Create sites/site.json with homepage URL."
    )


def main() -> int:
    parser = argparse.ArgumentParser(description="Scrape homepage from sites/site.json")
    parser.add_argument("--headed", action="store_true")
    parser.add_argument("--wait", type=int, default=20000)
    parser.add_argument("--open", action="store_true")
    parser.add_argument("-o", "--output", default="export")
    args = parser.parse_args()

    site = load_site()
    url = site.get("homepage") or site.get("base_url")
    if not url:
        print("[!] site.json needs 'homepage' URL", file=sys.stderr)
        return 1

    print(f"\n{'='*60}\n  SCRAPE — {site.get('name', url)}\n{'='*60}\n")

    cmd = [
        sys.executable,
        str(ROOT / "scrape.py"),
        url,
        "-o",
        args.output,
        "--wait",
        str(args.wait),
    ]
    if args.headed:
        cmd.append("--headed")
    if args.open:
        cmd.append("--open")

    return subprocess.run(cmd, cwd=ROOT).returncode


if __name__ == "__main__":
    sys.exit(main())
