"""Convert scraped site folder into a runnable React + Vite project."""

from __future__ import annotations

import json
from pathlib import Path

from .shared import (
    UNIVERSAL_OFFLINE_CSS,
    copy_assets_to_public,
    detect_site_language,
    extract_body_class,
    extract_body_inner,
    extract_head_assets,
    extract_scripts,
    extract_title,
    find_main_html,
    find_page_assets_dir,
    html_root_attrs,
    normalize_paths_for_public,
    write_site_scripts_component,
)


def convert(site_dir: Path, output_dir: Path) -> Path:
    html_path = find_main_html(site_dir)
    html = html_path.read_text(encoding="utf-8")
    assets_dir = find_page_assets_dir(site_dir, html_path)

    title = extract_title(html)
    body_class = extract_body_class(html)
    lang_info = detect_site_language(html)
    body_inner = extract_body_inner(html, html_path.parent)
    head_assets = extract_head_assets(html)
    scripts = extract_scripts(html)

    output_dir.mkdir(parents=True, exist_ok=True)
    public = output_dir / "public"
    src = output_dir / "src"
    public.mkdir(exist_ok=True)
    src.mkdir(exist_ok=True)

    copy_assets_to_public(assets_dir, public)

    (src / "data").mkdir(parents=True, exist_ok=True)
    (src / "data" / "pageHtml.js").write_text(
        f"export const pageHtml = {json.dumps(body_inner, ensure_ascii=False)};\n",
        encoding="utf-8",
    )

    write_site_scripts_component(src, scripts)

    css_tags = "\n    ".join(
        f'<link rel="stylesheet" href="{h}" />' for h in head_assets["css_links"]
    )
    icon_tags = "\n    ".join(
        f'<link rel="icon" href="{h}" />' for h in head_assets.get("icon_links", [])
    )
    style_tags = "\n    ".join(
        f'<style id="{s["id"]}">{s["content"]}</style>'
        for s in head_assets["inline_styles"]
    )

    (output_dir / "index.html").write_text(
        f"""<!doctype html>
{html_root_attrs(lang_info["lang"], lang_info["dir"])}
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    {icon_tags}
    {css_tags}
    {style_tags}
    <style id="react-root-fix">#root {{ display: contents; }}</style>
  </head>
  <body class="{body_class}">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
    <script src="/assets/js/offline-popups.js" defer id="scraper-offline-popups"></script>
  </body>
</html>
""",
        encoding="utf-8",
    )

    (src / "App.jsx").write_text(
        """import { pageHtml } from './data/pageHtml.js'
import SiteScripts from './components/SiteScripts.jsx'

export default function App() {
  return (
    <>
      <div
        className="scraped-page"
        dangerouslySetInnerHTML={{ __html: pageHtml }}
      />
      <SiteScripts />
    </>
  )
}
""",
        encoding="utf-8",
    )

    (src / "main.jsx").write_text(
        """import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
""",
        encoding="utf-8",
    )

    (src / "global.css").write_text(
        UNIVERSAL_OFFLINE_CSS
        + """
/* Preserve scraped layout — fonts, alignment, banners */
.scraped-page { display: contents; }
html, body { width: 100%; overflow-x: hidden; }
""",
        encoding="utf-8",
    )

    (output_dir / "package.json").write_text(
        json.dumps(
            {
                "name": "scraped-site",
                "private": True,
                "type": "module",
                "scripts": {
                    "dev": "vite",
                    "build": "vite build",
                    "preview": "vite preview",
                },
                "dependencies": {
                    "react": "^19.0.0",
                    "react-dom": "^19.0.0",
                },
                "devDependencies": {
                    "@vitejs/plugin-react": "^4.3.4",
                    "vite": "^6.0.0",
                },
            },
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )

    (output_dir / "vite.config.js").write_text(
        """import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  server: {
    port: 5173,
    open: true,
    fs: { strict: false },
  },
  build: {
    assetsInlineLimit: 0,
  },
})
""",
        encoding="utf-8",
    )

    (output_dir / ".gitignore").write_text(
        "node_modules/\ndist/\n.DS_Store\n",
        encoding="utf-8",
    )

    (output_dir / "README.md").write_text(
        """# Scraped Site (React.js 19 + Vite)

Pixel-perfect React.js 19 app — same look as the scraped website.

## Folder structure

```
public/assets/
  css/       ← stylesheets
  js/        ← scripts (jQuery, Elementor, etc.)
  images/    ← photos & graphics
  fonts/     ← web fonts (.woff2, .ttf)
  videos/    ← background videos (.mp4, .webm)
  icons/     ← favicons & app icons
src/
  data/pageHtml.js
  components/SiteScripts.jsx
  App.jsx
  main.jsx
```

## Run (only 2 commands)

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```
""",
        encoding="utf-8",
    )

    return output_dir
