#!/usr/bin/env python3
"""Start Scraper Studio web app."""

from __future__ import annotations

import socket
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(ROOT.parent))

DEFAULT_PORT = 8080


def find_free_port(start: int = DEFAULT_PORT, max_tries: int = 20) -> int:
    for port in range(start, start + max_tries):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            try:
                s.bind(("127.0.0.1", port))
                return port
            except OSError:
                continue
    raise OSError(f"No free port between {start} and {start + max_tries - 1}")


def check_playwright() -> None:
    try:
        from playwright.sync_api import sync_playwright

        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            browser.close()
    except Exception as e:
        if "Executable doesn't exist" in str(e) or "playwright install" in str(e).lower():
            print(
                "\n[!] Playwright browser not installed. Run:\n"
                "    source venv/bin/activate\n"
                "    playwright install chromium\n"
            )
            sys.exit(1)
        raise


def main() -> None:
    import uvicorn

    check_playwright()

    port = find_free_port(DEFAULT_PORT)
    if port != DEFAULT_PORT:
        print(f"\n[*] Port {DEFAULT_PORT} is already in use (Scraper Studio may already be running).")
        print(f"[*] Using port {port} instead.\n")

    print("\n" + "=" * 50)
    print("  SCRAPER STUDIO")
    print("  Paste URL → Scrape → Convert → Download")
    print("=" * 50)
    print(f"\n  Open: http://127.0.0.1:{port}\n")

    uvicorn.run(
        "api.main:app",
        host="127.0.0.1",
        port=port,
        reload=False,
    )


if __name__ == "__main__":
    main()
