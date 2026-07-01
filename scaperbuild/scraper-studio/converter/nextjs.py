"""Convert scraped site folder into a Next.js static export project."""

from __future__ import annotations

import json
from pathlib import Path

from .shared import (
    UNIVERSAL_OFFLINE_CSS,
    copy_assets_to_public,
    detect_site_language,
    extract_body_inner,
    extract_head_assets,
    extract_title,
    find_main_html,
    find_page_assets_dir,
    normalize_paths_for_public,
)


def convert(site_dir: Path, output_dir: Path) -> Path:
    html_path = find_main_html(site_dir)
    html = html_path.read_text(encoding="utf-8")
    assets_dir = find_page_assets_dir(site_dir, html_path)

    title = extract_title(html)
    lang_info = detect_site_language(html)
    body_inner = extract_body_inner(html, html_path.parent)
    head_assets = extract_head_assets(html)

    output_dir.mkdir(parents=True, exist_ok=True)
    app_dir = output_dir / "app"
    public = output_dir / "public"
    app_dir.mkdir(exist_ok=True)
    public.mkdir(exist_ok=True)

    copy_assets_to_public(assets_dir, public)

    css_links_block = "\n".join(
        f'    <link rel="stylesheet" href="{h}" />' for h in head_assets["css_links"]
    )
    extra_css = normalize_paths_for_public(
        "\n".join(s["content"] for s in head_assets["inline_styles"])
    )
    globals_css = (
        UNIVERSAL_OFFLINE_CSS
        + "* { box-sizing: border-box; }\n"
        + extra_css
    )

    (app_dir / "globals.css").write_text(globals_css, encoding="utf-8")

    (app_dir / "page.jsx").write_text(
        f"""export const metadata = {{
  title: {json.dumps(title)},
}}

export default function Home() {{
  return (
    <>
{css_links_block}
      <div
        className="scraped-page"
        dangerouslySetInnerHTML={{{{ __html: {json.dumps(body_inner)} }}}}
      />
    </>
  )
}}
""",
        encoding="utf-8",
    )

    dir_attr = ' dir="rtl"' if lang_info["dir"] == "rtl" else ""
    (app_dir / "layout.jsx").write_text(
        f"""import './globals.css'

export default function RootLayout({{ children }}) {{
  return (
    <html lang="{lang_info["lang"]}"{dir_attr}>
      <body>{{children}}</body>
    </html>
  )
}}
""",
        encoding="utf-8",
    )

    (output_dir / "next.config.mjs").write_text(
        """/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
}

export default nextConfig
""",
        encoding="utf-8",
    )

    (output_dir / "package.json").write_text(
        json.dumps(
            {
                "name": "scraped-site-next",
                "private": True,
                "scripts": {
                    "dev": "next dev",
                    "build": "next build",
                    "start": "next start",
                },
                "dependencies": {
                    "next": "^15.0.0",
                    "react": "^19.0.0",
                    "react-dom": "^19.0.0",
                },
            },
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )

    (output_dir / ".gitignore").write_text(
        "node_modules/\n.next/\nout/\n.DS_Store\n",
        encoding="utf-8",
    )

    (output_dir / "README.md").write_text(
        """# Scraped Site (Next.js)

Static export from scraped HTML mirror.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build static site

```bash
npm run build
```

Output in `out/` — deploy to Vercel, Netlify, or any static host.

Assets are in `public/assets/{css,js,images,fonts,videos}/`.
""",
        encoding="utf-8",
    )

    return output_dir
