#!/usr/bin/env python3
"""Serve a scraped site over HTTP so JavaScript and CSS load correctly."""

from __future__ import annotations

import argparse
import http.server
import mimetypes
import socket
import socketserver
import sys
import threading
from pathlib import Path
from urllib.parse import unquote

mimetypes.add_type("image/webp", ".webp")
mimetypes.add_type("image/avif", ".avif")
mimetypes.add_type("image/svg+xml", ".svg")
mimetypes.add_type("image/jpeg", ".bin")
mimetypes.add_type("font/woff2", ".woff2")


def find_free_port(start: int, max_tries: int = 20) -> int:
    for port in range(start, start + max_tries):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            try:
                s.bind(("", port))
                return port
            except OSError:
                continue
    raise OSError(f"No free port between {start} and {start + max_tries - 1}")


def find_entry(site_dir: Path) -> Path | None:
    if (site_dir / "home" / "home.html").exists():
        return site_dir / "home" / "home.html"
    if (site_dir / "home.html").exists():
        return site_dir / "home.html"
    for sub in sorted(site_dir.iterdir()):
        if sub.is_dir() and not sub.name.startswith("."):
            pages = sorted(sub.glob("*.html"))
            if pages:
                return pages[0]
    html_dir = site_dir / "html"
    if html_dir.exists():
        if (html_dir / "index.html").exists():
            return html_dir / "index.html"
        pages = sorted(html_dir.glob("*.html"))
        if pages:
            return pages[0]
    pages = sorted(site_dir.glob("*.html"))
    return pages[0] if pages else None


def write_root_redirect(site_dir: Path) -> None:
    entry = find_entry(site_dir)
    if not entry:
        return
    rel = entry.relative_to(site_dir).as_posix()
    (site_dir / "index.html").write_text(
        f'<!DOCTYPE html><html><head>'
        f'<meta http-equiv="refresh" content="0;url={rel}">'
        f'<script>location.replace("{rel}");</script>'
        f'</head><body><p><a href="{rel}">Open cloned site</a></p></body></html>',
        encoding="utf-8",
    )


def make_handler(site_dir: Path, entry: Path):
    entry_rel = entry.relative_to(site_dir).as_posix()

    class Handler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *a, **kw):
            super().__init__(*a, directory=str(site_dir), **kw)

        def translate_path(self, path: str) -> str:
            path = unquote(path.split("?", 1)[0].split("#", 1)[0])
            return super().translate_path(path)

        def do_GET(self) -> None:
            clean = unquote(self.path.split("?", 1)[0].split("#", 1)[0])
            if clean in ("/", ""):
                self.send_response(302)
                self.send_header("Location", f"/{entry_rel}")
                self.end_headers()
                return
            super().do_GET()

        def log_message(self, fmt: str, *args) -> None:
            if args and str(args[1]).startswith("4"):
                sys.stderr.write(f"[!] {fmt % args}\n")

    return Handler


def start_server(
    site_dir: Path, port: int = 8765, background: bool = False
) -> tuple[socketserver.TCPServer, int, str]:
    site_dir = site_dir.resolve()
    entry = find_entry(site_dir)
    if not entry:
        raise FileNotFoundError(f"No HTML pages in {site_dir}")

    write_root_redirect(site_dir)
    entry_rel = entry.relative_to(site_dir).as_posix()
    Handler = make_handler(site_dir, entry)

    socketserver.TCPServer.allow_reuse_address = True
    httpd = None
    actual_port = port
    for attempt in range(20):
        try:
            httpd = socketserver.TCPServer(("", actual_port), Handler)
            break
        except OSError as e:
            if e.errno != 98:
                raise
            if attempt == 0:
                print(f"[!] Port {actual_port} busy, trying next...")
            actual_port = find_free_port(port + attempt + 1, max_tries=5)

    if httpd is None:
        raise OSError("Could not bind any port")

    url = f"http://127.0.0.1:{actual_port}/{entry_rel}"

    if background:
        thread = threading.Thread(target=httpd.serve_forever, daemon=True)
        thread.start()
    return httpd, actual_port, url


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Serve scraped site locally (required for JS/CSS)."
    )
    parser.add_argument(
        "folder",
        nargs="?",
        default=".",
        help="Site export folder",
    )
    parser.add_argument("-p", "--port", type=int, default=8765)
    args = parser.parse_args()

    directory = Path(args.folder).resolve()
    try:
        httpd, port, url = start_server(directory, args.port, background=False)
    except FileNotFoundError as e:
        print(f"[!] {e}", file=sys.stderr)
        return 1
    except OSError as e:
        print(f"[!] {e}", file=sys.stderr)
        return 1

    print(f"[*] Serving: {directory}")
    print(f"[+] Open: {url}")
    print(f"[+] Also:  http://127.0.0.1:{port}/")
    if port != args.port:
        print(f"[*] (Port {args.port} was in use — using {port})")
    print("[*] Press Ctrl+C to stop")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[*] Stopped.")
    finally:
        httpd.server_close()
    return 0


if __name__ == "__main__":
    sys.exit(main())
