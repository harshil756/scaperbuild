"""Convert scraped site to Laravel Blade project."""

from __future__ import annotations

import json
import re
from pathlib import Path

from scraper.storage import load_manifest, url_to_page_slug

from .shared import (
    copy_all_site_assets,
    detect_site_language,
    extract_body_inner,
    extract_head_assets,
    extract_title,
    find_main_html,
    html_root_attrs,
    load_site_pages,
    slug_to_route,
)


def _write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def convert(site_dir: Path, output_dir: Path, base_url: str | None = None) -> Path:
    site_dir = Path(site_dir)
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    pages = load_site_pages(site_dir)
    if not pages:
        html_path = find_main_html(site_dir)
        pages = [{"slug": "home", "html_path": html_path, "html_rel": "home/home.html", "url": base_url or ""}]

    public = output_dir / "public"
    copy_all_site_assets(site_dir, public)

    routes: list[str] = []
    for page in pages:
        slug = page["slug"]
        html = page["html_path"].read_text(encoding="utf-8", errors="replace")
        body = extract_body_inner(html, page["html_path"].parent)
        title = extract_title(html)
        view = slug if slug != "home" else "home"
        blade_name = f"{view}.blade.php"
        body_blade = body.replace("@", "@@")
        _write(
            output_dir / "resources" / "views" / "pages" / blade_name,
            f"""@extends('layouts.app')

@section('title', {json.dumps(title)})

@section('content')
{body_blade}
@endsection
""",
        )
        route = slug_to_route(slug)
        if slug == "home":
            routes.append("Route::get('/', fn () => view('pages.home'))->name('home');")
        else:
            routes.append(f"Route::get('/{slug}', fn () => view('pages.{view}'))->name('{slug}');")

    home = pages[0]
    home_html = home["html_path"].read_text(encoding="utf-8", errors="replace")
    lang_info = detect_site_language(home_html)
    head = extract_head_assets(home_html)
    css_links = "\n    ".join(f'<link rel="stylesheet" href="{h}" />' for h in head["css_links"])
    inline_css = "\n".join(s["content"] for s in head.get("inline_styles", []))

    _write(
        output_dir / "resources" / "views" / "layouts" / "app.blade.php",
        f"""<!DOCTYPE html>
{html_root_attrs(lang_info["lang"], lang_info["dir"])}
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Scraped Site')</title>
    {css_links}
    <style>{inline_css}</style>
    <style>
    .race-hero {{ position:relative; overflow:hidden; min-height:70vh; }}
    video.rh-video, video.elementor-background-video-hosted {{
      position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
    }}
    </style>
</head>
<body>
    @yield('content')
</body>
</html>
""",
    )

    _write(
        output_dir / "routes" / "web.php",
        "<?php\n\nuse Illuminate\\Support\\Facades\\Route;\n\n"
        + "\n".join(routes)
        + "\n",
    )

    _write(
        output_dir / "composer.json",
        json.dumps(
            {
                "name": "scraped/site",
                "description": "Scraped website as Laravel project",
                "require": {"php": "^8.2", "laravel/framework": "^11.0"},
                "autoload": {"psr-4": {"App\\\\": "app/"}},
            },
            indent=2,
        )
        + "\n",
    )

    _write(
        output_dir / "README.md",
        """# Scraped Site (Laravel)

## Setup
```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan serve
```

Open http://127.0.0.1:8000
""",
    )

    manifest = load_manifest(site_dir)
    _write(
        output_dir / "routes" / "pages.json",
        json.dumps(
            [{"slug": p["slug"], "route": slug_to_route(p["slug"])} for p in pages],
            indent=2,
        )
        + "\n",
    )

    return output_dir
