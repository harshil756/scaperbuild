#!/usr/bin/env python3
"""Convert scraped home.html into React components (pixel-perfect copy)."""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
HTML_PATH = ROOT / "export/7statespestcontrol.com.au/home/home.html"
FRONTEND = Path(__file__).resolve().parents[1]
SRC = FRONTEND / "src"


def read_html() -> str:
    return HTML_PATH.read_text(encoding="utf-8")


def extract_between(html: str, start_marker: str, end_marker: str) -> str:
    start = html.index(start_marker)
    end = html.index(end_marker, start)
    return html[start:end]


def fix_asset_path(path: str) -> str:
    if path.startswith("/"):
        return path
    if path.startswith("assets/"):
        return f"/{path}"
    return path


def fix_paths(html: str) -> str:
    html = html.replace('href="assets/', 'href="/assets/')
    html = html.replace("href='assets/", "href='/assets/")
    html = html.replace('src="assets/', 'src="/assets/')
    html = html.replace("src='assets/", "src='/assets/")
    html = html.replace('srcset="assets/', 'srcset="/assets/')
    html = html.replace('href="home.html"', 'href="/"')
    return html


def js_string(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def extract_head_assets(html: str) -> dict:
    head = fix_paths(extract_between(html, "<head>", "</head>"))
    css_links = []
    for m in re.finditer(r'<link[^>]+href="([^"]+)"[^>]*rel="stylesheet"[^>]*>', head):
        href = m.group(1)
        if href.startswith("/assets/") and href not in css_links:
            css_links.append(href)
    for m in re.finditer(r'<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"[^>]*>', head):
        href = m.group(1)
        if href.startswith("/assets/") and href not in css_links:
            css_links.append(href)

    inline_styles = []
    for m in re.finditer(r"<style[^>]*>(.*?)</style>", head, re.DOTALL):
        content = m.group(1).strip()
        style_id = re.search(r'id="([^"]+)"', m.group(0))
        sid = style_id.group(1) if style_id else f"inline-{len(inline_styles)}"
        inline_styles.append({"id": sid, "content": content})

    for m in re.finditer(r'<link[^>]+href="([^"]+)"[^>]*rel="stylesheet"[^>]*>', html):
        href = m.group(1)
        if href.startswith("/assets/") or href.startswith("assets/"):
            href = href if href.startswith("/") else f"/{href}"
            if href not in css_links:
                css_links.append(href)

    return {"css_links": css_links, "inline_styles": inline_styles}


def parse_script_tag(attrs: str, content: str = "") -> dict | None:
    src_m = re.search(r'src="([^"]+)"', attrs)
    id_m = re.search(r'id="([^"]+)"', attrs)
    if not src_m and not content.strip():
        return None
    src = fix_asset_path(src_m.group(1)) if src_m else None
    if src and not src.startswith("/assets/"):
        return None
    return {
        "id": id_m.group(1) if id_m else None,
        "src": src,
        "inline": content.strip() if not src_m and content.strip() else None,
    }


def extract_scripts(html: str) -> list[dict]:
    wanted_ids = {
        "jquery-core-js",
        "jquery-migrate-js",
        "hello-theme-frontend-js",
        "elementor-webpack-runtime-js",
        "elementor-frontend-modules-js",
        "jquery-ui-core-js",
        "elementor-frontend-js-before",
        "elementor-frontend-js",
        "elementskit-framework-js-frontend-js",
        "elementskit-framework-js-frontend-js-after",
        "ekit-widget-scripts-js",
        "e-sticky-js",
        "trustindex-loader-js-js",
        "elementor-pro-webpack-runtime-js",
        "wp-hooks-js",
        "wp-i18n-js",
        "wp-i18n-js-after",
        "elementor-pro-frontend-js-before",
        "elementor-pro-frontend-js",
        "pro-elements-handlers-js",
        "animate-circle-js",
        "elementskit-elementor-js-extra",
        "elementskit-elementor-js",
        "ccfef-country-code-library-script-js",
        "ccfef-country-code-script-js-extra",
        "ccfef-country-code-script-js",
        "ccfef-country-code-script-hello-js-extra",
        "ccfef-country-code-script-hello-js",
    }
    wanted_src_suffixes = (
        "dialog.min_2ea13967.js",
    )
    scripts = []
    seen = set()

    for m in re.finditer(
        r'<script([^>]*)>(.*?)</script>',
        html,
        re.DOTALL | re.IGNORECASE,
    ):
        entry = parse_script_tag(m.group(1), m.group(2))
        if not entry:
            continue
        script_id = entry["id"]
        if script_id and script_id not in wanted_ids and not entry["src"]:
            continue
        if entry["src"]:
            if not entry["src"].startswith("/assets/js/"):
                continue
            if (
                script_id not in wanted_ids
                and not entry["src"].endswith(wanted_src_suffixes)
            ):
                continue
        if entry["inline"] and script_id not in wanted_ids:
            if not any(
                marker in (entry["inline"] or "")
                for marker in ("lazyloadRunObserver", "elementorFrontendConfig")
            ):
                continue
        key = entry["id"] or entry["src"] or entry["inline"][:40]
        if key in seen:
            continue
        seen.add(key)
        scripts.append(entry)

    order = list(wanted_ids)
    scripts.sort(
        key=lambda s: (
            order.index(s["id"])
            if s["id"] in order
            else len(order) + (0 if s["src"] else 1)
        )
    )
    return scripts


def write_html_module(name: str, html: str) -> None:
    data_dir = SRC / "data"
    data_dir.mkdir(parents=True, exist_ok=True)
    path = data_dir / f"{name}Html.js"
    path.write_text(
        f"export const {name}Html = {js_string(fix_paths(html))};\n",
        encoding="utf-8",
    )


def write_component(name: str, import_name: str, class_name: str) -> None:
    comp_dir = SRC / "components"
    comp_dir.mkdir(parents=True, exist_ok=True)
    path = comp_dir / f"{name}.jsx"
    path.write_text(
        f"""import {{ {import_name}Html }} from '../data/{import_name}Html.js'

export default function {name}() {{
  return (
    <div
      className="{class_name}"
      dangerouslySetInnerHTML={{{{ __html: {import_name}Html }}}}
    />
  )
}}
""",
        encoding="utf-8",
    )


def write_index_html(head_assets: dict) -> None:
    css_tags = "\n    ".join(
        f'<link rel="stylesheet" href="{href}" />' for href in head_assets["css_links"]
    )
    style_tags = "\n    ".join(
        f'<style id="{s["id"]}">{s["content"]}</style>'
        for s in head_assets["inline_styles"]
    )

    index = f"""<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pest Control Melbourne | Pest Exterminator &amp; Removal Services</title>
    <meta name="description" content="Pest control Melbourne &amp; pest removal Melbourne experts. Pest exterminator Melbourne, pest control Melbourne CBD &amp; pest control service in Melbourne." />
    <link rel="icon" href="/assets/images/favicon-150x150_310a113c.png" sizes="32x32" />
    <link rel="icon" href="/assets/images/favicon_2fc68884.png" sizes="192x192" />
    <link rel="apple-touch-icon" href="/assets/images/favicon_2fc68884.png" />
    {css_tags}
    {style_tags}
    <style id="react-root-fix">#root {{ display: contents; }}</style>
  </head>
  <body class="home wp-singular page-template page-template-elementor_header_footer page page-id-14 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor elementor-default elementor-template-full-width elementor-kit-9 elementor-page elementor-page-14">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
"""
    (FRONTEND / "index.html").write_text(index, encoding="utf-8")


def write_site_scripts(scripts: list[dict]) -> None:
    path = SRC / "components" / "SiteScripts.jsx"
    path.write_text(
        f"""import {{ useEffect }} from 'react'

const SCRIPTS = {json.dumps(scripts, indent=2)}

function loadScript({{ id, src, inline }}) {{
  return new Promise((resolve, reject) => {{
    if (id && document.getElementById(id)) {{
      resolve()
      return
    }}
    const el = document.createElement('script')
    if (id) el.id = id
    if (src) {{
      el.src = src
      el.async = false
      el.onload = () => resolve()
      el.onerror = reject
    }} else if (inline) {{
      el.textContent = inline
    }}
    document.body.appendChild(el)
    if (!src) resolve()
  }})
}}

export default function SiteScripts() {{
  useEffect(() => {{
    const jquery = SCRIPTS.find((s) => s.id === 'jquery-core-js')
    const migrate = SCRIPTS.find((s) => s.id === 'jquery-migrate-js')
    const rest = SCRIPTS.filter(
      (s) => s.id !== 'jquery-core-js' && s.id !== 'jquery-migrate-js'
    )

    let cancelled = false

    async function boot() {{
      if (jquery) await loadScript(jquery)
      if (migrate) await loadScript(migrate)
      for (const script of rest) {{
        if (cancelled) return
        try {{
          await loadScript(script)
        }} catch {{
          // keep going if optional widget scripts fail offline
        }}
      }}
      document.dispatchEvent(new Event('DOMContentLoaded'))
    }}

    boot()
    return () => {{ cancelled = true }}
  }}, [])

  return null
}}
""",
        encoding="utf-8",
    )


def main() -> None:
    html = read_html()

    header = extract_between(
        html,
        '<div class="ekit-template-content-markup ekit-template-content-header',
        '<div class="elementor elementor-14"',
    )
    home = extract_between(
        html,
        '<div class="elementor elementor-14"',
        '<div class="ekit-template-content-markup ekit-template-content-footer',
    )
    footer = extract_between(
        html,
        '<div class="ekit-template-content-markup ekit-template-content-footer',
        '<script type="speculationrules">',
    )

    write_html_module("header", header)
    write_html_module("home", home)
    write_html_module("footer", footer)

    write_component("Header", "header", "site-header")
    write_component("Home", "home", "site-home")
    write_component("Footer", "footer", "site-footer")

    head_assets = extract_head_assets(html)
    write_index_html(head_assets)

    scripts = extract_scripts(html)
    write_site_scripts(scripts)

    app = SRC / "App.jsx"
    app.write_text(
        """import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import SiteScripts from './components/SiteScripts.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content">
        <Home />
      </main>
      <Footer />
      <SiteScripts />
    </>
  )
}
""",
        encoding="utf-8",
    )

    main_jsx = SRC / "main.jsx"
    main_jsx.write_text(
        """import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
""",
        encoding="utf-8",
    )

    print("Converted home page -> React components")
    print(f"  Header: {len(header):,} chars")
    print(f"  Home:   {len(home):,} chars")
    print(f"  Footer: {len(footer):,} chars")
    print(f"  CSS:    {len(head_assets['css_links'])} files")
    print(f"  JS:     {len(scripts)} scripts")


if __name__ == "__main__":
    main()
