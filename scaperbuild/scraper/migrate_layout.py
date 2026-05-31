#!/usr/bin/env python3
"""Move flat export (home.html + assets/) into per-page folders."""

from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

from .postprocess import rewrite_internal_page_links
from .storage import load_manifest, save_manifest, url_to_page_slug


ASSET_REF = re.compile(r"assets/(?:css|js|images|fonts)/[^\s\"'<>]+")


def migrate_site(site_dir: Path) -> None:
    site_dir = site_dir.resolve()
    shared = site_dir / "assets"
    moved: list[tuple[str, Path]] = []

    for html_file in sorted(site_dir.glob("*.html")):
        if html_file.name == "index.html":
            continue
        slug = html_file.stem
        page_folder = site_dir / slug
        page_folder.mkdir(parents=True, exist_ok=True)
        dest_html = page_folder / html_file.name
        if html_file.resolve() != dest_html.resolve():
            shutil.move(str(html_file), str(dest_html))
        moved.append((slug, dest_html))

        text = dest_html.read_text(encoding="utf-8")
        for ref in set(ASSET_REF.findall(text)):
            src = site_dir / ref
            if not src.exists() and shared.exists():
                src = shared / Path(ref).relative_to("assets")
            dest = page_folder / ref
            if src.exists():
                dest.parent.mkdir(parents=True, exist_ok=True)
                if not dest.exists():
                    shutil.copy2(src, dest)

        print(f"[+] {slug}/{html_file.name} + assets/")

    if shared.exists():
        shutil.rmtree(shared)

    manifest = load_manifest(site_dir)
    pages = manifest.get("pages", {})
    for url, info in list(pages.items()):
        slug = info.get("slug") or url_to_page_slug(url)
        name = Path(info.get("html", f"{slug}.html")).name
        info["html"] = f"{slug}/{name}"
        info["slug"] = slug
        pages[url] = info

    for slug, dest_html in moved:
        for url, info in pages.items():
            if info.get("slug") == slug or slug in info.get("html", ""):
                text = rewrite_internal_page_links(
                    dest_html.read_text(encoding="utf-8"),
                    url,
                    manifest,
                    dest_html,
                )
                dest_html.write_text(text, encoding="utf-8")
                break

    manifest["pages"] = pages
    save_manifest(site_dir, manifest)
    print(f"[+] Updated site.json ({len(pages)} pages)")
