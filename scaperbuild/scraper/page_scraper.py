"""
Single-page website scraper — one URL at a time, no auto-crawl.

Saves each page in its own folder:
  home/home.html + home/assets/{css,js,images,fonts}/
  about-us/about-us.html + about-us/assets/...
"""

from __future__ import annotations

import json
import re
import time
from pathlib import Path
from urllib.parse import urlparse

from .assets_fix import download_all_upload_images, fix_avatar_bin_files
from .html_cleanup import clean_scraped_html
from .mirror import PlaywrightMirror
from .postprocess import (
    apply_lazyload_fixes,
    fix_srcset_to_local,
    repair_all_css_paths,
    rewrite_internal_page_links,
)
from .rewriter import rewrite_html
from .storage import (
    count_assets,
    ensure_page_dirs,
    ensure_site_dirs,
    load_manifest,
    page_dir,
    register_page,
    url_to_html_filename,
    url_to_page_slug,
)
from .widgets import add_trustindex_css_link, inject_snapshots


class PageScraper:
    """Scrape exactly one page and its assets into a structured site folder."""

    def __init__(
        self,
        url: str,
        site_dir: Path | str | None = None,
        output_root: Path | str = "export",
        wait_ms: int = 15000,
        timeout_ms: int = 180000,
        headed: bool | None = None,
    ):
        self.url = url.strip()
        if not self.url.startswith(("http://", "https://")):
            self.url = "https://" + self.url

        parsed = urlparse(self.url)
        self.host = parsed.netloc

        if site_dir:
            self.site_dir = Path(site_dir).resolve()
        else:
            safe_host = re.sub(r"[^\w.\-]", "_", self.host)
            self.site_dir = Path(output_root) / safe_host

        self.wait_ms = wait_ms
        self.timeout_ms = timeout_ms
        self.headed = headed
        self.page_slug = url_to_page_slug(self.url)
        self.page_folder = page_dir(self.site_dir, self.page_slug)
        self.html_name = url_to_html_filename(self.url)
        self.html_path = self.page_folder / self.html_name
        self.html_relpath = f"{self.page_slug}/{self.html_name}"

    def scrape(self) -> Path:
        print(f"\n{'='*60}")
        print(f"  PAGE SCRAPER — {self.url}")
        print(f"  Page folder: {self.page_folder}")
        print(f"{'='*60}\n")

        ensure_site_dirs(self.site_dir)
        ensure_page_dirs(self.page_folder)

        mirror = PlaywrightMirror(
            url=self.url,
            page_dir=self.page_folder,
            wait_ms=self.wait_ms,
            timeout_ms=self.timeout_ms,
            headed=self.headed,
        )
        html, _ = mirror.capture()
        html = clean_scraped_html(html)

        print(f"[*] Rewriting asset paths ({len(mirror.url_map)} files)...")
        final_html = rewrite_html(
            html, self.url, mirror.url_map, self.html_path, self.page_folder
        )
        final_html = inject_snapshots(
            final_html, mirror.widget_snapshots, self.page_folder, self.html_path
        )
        n_fixed = repair_all_css_paths(self.page_folder, self.url, mirror.url_map)
        if n_fixed:
            print(f"[*] Repaired {n_fixed} CSS url() paths.")
        final_html = fix_srcset_to_local(
            final_html, self.url, mirror.url_map, self.page_folder, self.html_path
        )
        final_html = apply_lazyload_fixes(final_html)
        manifest = register_page(self.site_dir, self.url, self.html_relpath)
        final_html = rewrite_internal_page_links(
            final_html, self.url, manifest, self.html_path
        )
        final_html = add_trustindex_css_link(
            final_html, mirror.trustindex_css_url, self.page_folder, self.html_path
        )

        self.html_path.write_text(final_html, encoding="utf-8")

        n_av = fix_avatar_bin_files(self.page_folder, self.url, self.html_path)
        if n_av:
            print(f"[*] Fixed {n_av} avatar file(s).")
        n_img = download_all_upload_images(self.page_folder, self.url)
        if n_img:
            print(f"[*] Downloaded {n_img} extra image(s).")

        counts = count_assets(self.page_folder)
        meta = {
            "source_url": self.url,
            "page_slug": self.page_slug,
            "html_file": self.html_relpath,
            "scraped_at": time.strftime("%Y-%m-%d %H:%M:%S"),
            "assets_total": len(mirror.url_map),
            **counts,
            "failed": len(mirror.failed),
            "failed_samples": mirror.failed[:20],
            "view": f'python serve.py "{self.site_dir}"',
        }
        log_path = self.site_dir / "logs" / f"{self.page_slug}.json"
        log_path.parent.mkdir(exist_ok=True)
        log_path.write_text(json.dumps(meta, indent=2), encoding="utf-8")

        manifest = load_manifest(self.site_dir)
        manifest.setdefault("assets", {})[self.url] = meta
        from .storage import save_manifest

        save_manifest(self.site_dir, manifest)

        try:
            from serve import write_root_redirect

            write_root_redirect(self.site_dir)
        except Exception:
            pass

        print(f"\n[+] Saved page: {self.html_path}")
        print(f"[+] Assets: {counts}")
        print(f"[+] Site folder:\n    {self.site_dir.resolve()}\n")
        print(
            "[!] View with local server (required for JS/CSS):\n"
            f'    python serve.py "{self.site_dir.resolve()}"\n'
            f"    → http://127.0.0.1:8765/{self.html_relpath}\n"
        )
        if mirror.failed:
            print(f"[!] {len(mirror.failed)} assets failed (see logs/)")
        return self.html_path
