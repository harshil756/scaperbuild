"""Shared helpers for React / Next.js conversion."""

from __future__ import annotations

import json
import re
import shutil
from pathlib import Path
from urllib.parse import urlparse

ASSET_FOLDERS = ("css", "js", "images", "fonts", "videos", "icons")
FRAMEWORK_DIRS = ("_next", "static")
LOCAL_SCRIPT_PREFIXES = (
    "/assets/js/",
    "/assets/_next/",
    "/_next/",
    "/assets/static/",
    "/static/",
)
LOCAL_STYLE_PREFIXES = (
    "/assets/css/",
    "/assets/_next/",
    "/_next/",
    "/assets/static/",
    "/static/",
)


def find_main_html(site_dir: Path) -> Path:
    for candidate in (
        site_dir / "home" / "home.html",
        site_dir / "index.html",
    ):
        if candidate.exists():
            return candidate
    pages = [p for p in site_dir.rglob("*.html") if p.name != "index.html"]
    if not pages:
        raise FileNotFoundError(f"No HTML in {site_dir}")
    return pages[0]


def find_page_assets_dir(site_dir: Path, html_path: Path) -> Path:
    """Assets live next to the scraped HTML file."""
    local = html_path.parent / "assets"
    if local.is_dir():
        return local
    for page_folder in site_dir.iterdir():
        assets = page_folder / "assets"
        if assets.is_dir():
            return assets
    raise FileNotFoundError(f"No assets folder under {site_dir}")


def copy_assets_to_public(assets_dir: Path, public_dir: Path) -> None:
    """Copy standard asset folders + React/Next.js framework paths (_next, static)."""
    dest_root = public_dir / "assets"
    dest_root.mkdir(parents=True, exist_ok=True)
    for folder in ASSET_FOLDERS:
        src = assets_dir / folder
        if not src.is_dir():
            continue
        dest = dest_root / folder
        dest.mkdir(parents=True, exist_ok=True)
        for f in src.rglob("*"):
            if f.is_file():
                rel = f.relative_to(src)
                target = dest / rel
                target.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(f, target)
    for fw in FRAMEWORK_DIRS:
        src = assets_dir / fw
        if src.is_dir():
            dest = public_dir / fw
            if dest.exists():
                shutil.rmtree(dest)
            shutil.copytree(src, dest)


def _is_local_asset_path(path: str, prefixes: tuple[str, ...]) -> bool:
    if not path or path.startswith(("http://", "https://", "data:", "//")):
        return False
    p = path if path.startswith("/") else f"/{path}"
    if p.startswith(prefixes):
        return True
    if p.startswith("/assets/_next/") or p.startswith("/assets/static/"):
        return True
    return False


def _to_public_path(path: str) -> str:
    """Map scraped relative paths to public URLs for Vite/Next."""
    if not path:
        return path
    p = path.strip()
    if p.startswith(("http://", "https://", "data:")):
        return p
    # assets/_next/static/... → /_next/static/...
    m = re.match(r"^(?:\.\./)*(?:assets/)?(_next/static/.+)$", p, re.I)
    if m:
        return f"/{m.group(1)}"
    m = re.match(r"^(?:\.\./)*(?:assets/)?(static/(?:js|css|media)/.+)$", p, re.I)
    if m:
        return f"/{m.group(1)}"
    if p.startswith("assets/"):
        return f"/{p}"
    if not p.startswith("/") and p.startswith("assets/"):
        return f"/{p}"
    return p if p.startswith("/") else f"/{p}"


def ensure_relative_asset_paths_in_head(html: str) -> str:
    html = re.sub(
        r'(href|src)=(["\'])/assets/',
        r'\1=\2assets/',
        html,
        flags=re.I,
    )
    return html


def normalize_paths_for_public(text: str) -> str:
    """Turn scraped relative paths into Vite/Next public paths."""
    if not text:
        return text

    text = re.sub(
        r"url\(\s*['\"]?(?:\.\./|\./)?assets/(_next/[^)'\"]+)",
        r"url(/\1",
        text,
        flags=re.I,
    )
    text = re.sub(
        r"url\(\s*['\"]?(?:\.\./|\./)?assets/(static/[^)'\"]+)",
        r"url(/\1",
        text,
        flags=re.I,
    )
    text = re.sub(r"url\(\s*['\"]?(?:\.\./|\./)?assets/", "url(/assets/", text, flags=re.I)

    for attr in ("src", "href", "poster", "data-src", "data-bg", "data-background", "data-video-url"):
        text = re.sub(
            rf'({attr}=["\'])(?:\.\./|\./)?assets/(_next/[^"\']+)',
            r"\1/\2",
            text,
            flags=re.I,
        )
        text = re.sub(
            rf'({attr}=["\'])(?:\.\./|\./)?assets/(static/[^"\']+)',
            r"\1/\2",
            text,
            flags=re.I,
        )
        text = re.sub(
            rf'({attr}=["\'])(?:\.\./|\./)?assets/',
            r"\1/assets/",
            text,
            flags=re.I,
        )

    text = re.sub(r'(?<=["\'])assets/(_next/[^"\']+)', r"/\1", text)
    text = re.sub(r'(?<=["\'])assets/(static/[^"\']+)', r"/\1", text)
    text = re.sub(r'(?<=["\'])assets/', "/assets/", text)

    return text


def extract_title(html: str) -> str:
    m = re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S)
    return re.sub(r"\s+", " ", m.group(1)).strip() if m else "Scraped Site"


def extract_body_class(html: str) -> str:
    m = re.search(r"<body[^>]*class=[\"']([^\"']+)[\"']", html, re.I)
    return m.group(1) if m else ""


def extract_head_assets(html: str) -> dict:
    html = ensure_relative_asset_paths_in_head(html)
    html = normalize_paths_for_public(html)
    head_m = re.search(r"<head[^>]*>(.*?)</head>", html, re.I | re.S)
    head = head_m.group(1) if head_m else ""
    css_links: list[str] = []
    for m in re.finditer(
        r'<link[^>]+rel=["\']stylesheet["\'][^>]+href=["\']([^"\']+)["\']',
        head,
        re.I,
    ):
        href = m.group(1)
        h = _to_public_path(href)
        if _is_local_asset_path(h, LOCAL_STYLE_PREFIXES) or h.startswith("/assets/"):
            if h not in css_links:
                css_links.append(h)
    for m in re.finditer(
        r'<link[^>]+href=["\']([^"\']+)["\'][^>]+rel=["\']stylesheet["\']',
        head,
        re.I,
    ):
        href = m.group(1)
        h = _to_public_path(href)
        if (_is_local_asset_path(h, LOCAL_STYLE_PREFIXES) or h.startswith("/assets/")) and h not in css_links:
            css_links.append(h)

    inline_styles = []
    for m in re.finditer(r"<style[^>]*>(.*?)</style>", html, re.DOTALL | re.I):
        sid = re.search(r'id=["\']([^"\']+)["\']', m.group(0))
        content = normalize_paths_for_public(m.group(1))
        inline_styles.append(
            {"id": sid.group(1) if sid else f"inline-{len(inline_styles)}", "content": content}
        )

    icon_links = []
    for m in re.finditer(
        r'<link[^>]+rel=["\'](?:icon|shortcut icon|apple-touch-icon)["\'][^>]+href=["\']([^"\']+)["\']',
        head,
        re.I,
    ):
        href = normalize_paths_for_public(m.group(1))
        icon_links.append(href if href.startswith("/") else f"/{href}")
    for m in re.finditer(
        r'<link[^>]+href=["\']([^"\']+)["\'][^>]+rel=["\'](?:icon|shortcut icon|apple-touch-icon)["\']',
        head,
        re.I,
    ):
        href = normalize_paths_for_public(m.group(1))
        h = href if href.startswith("/") else f"/{href}"
        if h not in icon_links:
            icon_links.append(h)

    return {"css_links": css_links, "inline_styles": inline_styles, "icon_links": icon_links}


def extract_body_inner(html: str, page_dir: Path | None = None) -> str:
    m = re.search(r"<body[^>]*>(.*)</body>", html, re.I | re.S)
    body = m.group(1).strip() if m else html
    body = re.sub(r"<script[^>]*>.*?</script>", "", body, flags=re.I | re.S)
    if page_dir:
        from scraper.media_fix import apply_media_fixes, ensure_relative_asset_paths
        from scraper.offline_paths import normalize_offline_html

        page_path = page_dir / "home.html"
        if not page_path.exists():
            html_files = list(page_dir.glob("*.html"))
            page_path = html_files[0] if html_files else page_dir / "page.html"
        body = normalize_offline_html(f"<body>{body}</body>", page_dir, page_path)
        body = re.sub(r"^<body>|</body>$", "", body, flags=re.I)
        body = apply_media_fixes(body, page_dir)
        body = ensure_relative_asset_paths(body)
    body = normalize_paths_for_public(body)
    return body


def extract_scripts(html: str) -> list[dict]:
    """Extract local JS from scraped HTML for sequential loading."""
    scripts: list[dict] = []
    seen: set[str] = set()
    for m in re.finditer(
        r"<script([^>]*)>(.*?)</script>",
        html,
        re.DOTALL | re.I,
    ):
        attrs = m.group(1)
        content = m.group(2).strip()
        src_m = re.search(r'src=["\']([^"\']+)["\']', attrs, re.I)
        id_m = re.search(r'id=["\']([^"\']+)["\']', attrs, re.I)
        src = src_m.group(1) if src_m else None
        if src:
            src = _to_public_path(normalize_paths_for_public(src))
            if not _is_local_asset_path(src, LOCAL_SCRIPT_PREFIXES) and not src.startswith("/assets/"):
                continue
            if not src.startswith("/"):
                src = f"/{src}"
        elif not content:
            continue
        key = src or content[:60]
        if key in seen:
            continue
        seen.add(key)
        scripts.append(
            {
                "id": id_m.group(1) if id_m else None,
                "src": src,
                "inline": content if not src else None,
            }
        )
    return scripts


def write_site_scripts_component(src_dir: Path, scripts: list[dict], filename: str = "SiteScripts.jsx") -> None:
    comp = src_dir / "components" / filename
    comp.parent.mkdir(parents=True, exist_ok=True)
    comp.write_text(
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
      el.onerror = () => resolve()
    }} else if (inline) {{
      el.textContent = inline
    }}
    document.body.appendChild(el)
    if (!src) resolve()
  }})
}}

export default function SiteScripts() {{
  useEffect(() => {{
    let cancelled = false
    async function boot() {{
      const jquery = SCRIPTS.find((s) => s.id === 'jquery-core-js')
      const migrate = SCRIPTS.find((s) => s.id === 'jquery-migrate-js')
      const ordered = SCRIPTS.filter(
        (s) => s.id !== 'jquery-core-js' && s.id !== 'jquery-migrate-js'
      )
      if (jquery) await loadScript(jquery)
      if (migrate) await loadScript(migrate)
      for (const script of ordered) {{
        if (cancelled) return
        await loadScript(script)
      }}
      await loadScript({{ id: 'scraper-offline-popups', src: '/assets/js/offline-popups.js' }})
      document.dispatchEvent(new Event('DOMContentLoaded'))
      window.dispatchEvent(new Event('load'))
    }}
    boot()
    return () => {{ cancelled = true }}
  }}, [])
  return null
}}
""",
        encoding="utf-8",
    )


def slug_to_route(slug: str) -> str:
    return "/" if slug == "home" else f"/{slug}"


def slug_to_component(slug: str) -> str:
    if slug == "home":
        return "HomePage"
    parts = [p.capitalize() for p in slug.split("-") if p]
    return "".join(parts) + "Page"


def load_site_pages(site_dir: Path) -> list[dict]:
    """Load all pages from site.json manifest."""
    manifest_path = site_dir / "site.json"
    if not manifest_path.exists():
        return []
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    pages = []
    for url, info in manifest.get("pages", {}).items():
        html_rel = info.get("html", "")
        html_path = site_dir / html_rel
        if not html_path.exists():
            continue
        slug = info.get("slug") or Path(html_rel).parts[0]
        pages.append({"url": url, "slug": slug, "html_path": html_path, "html_rel": html_rel})
    pages.sort(key=lambda p: (0 if p["slug"] == "home" else 1, p["slug"]))
    return pages


def _add_route_alias(mapping: dict[str, str], alias: str, route: str) -> None:
    """Register href variants that should resolve to the same SPA route."""
    if not alias:
        return
    mapping[alias] = route
    stripped = alias.rstrip("/") or "/"
    mapping[stripped] = route
    if not alias.endswith("/") and stripped != "/":
        mapping[f"{alias}/"] = route
    if stripped != alias:
        mapping[f"{stripped}/"] = route


def build_route_map(
    pages: list[dict],
    base_url: str | None = None,
    architecture: dict | None = None,
) -> dict[str, str]:
    """Map every internal href variant (paths, slugs, full URLs) to React Router routes."""
    mapping: dict[str, str] = {}
    arch_pages = (architecture or {}).get("pages", {})

    for page in pages:
        slug = page["slug"]
        route = slug_to_route(slug)
        _add_route_alias(mapping, slug, route)
        _add_route_alias(mapping, f"/{slug}", route)
        _add_route_alias(mapping, f"../{slug}", route)
        _add_route_alias(mapping, f"../{slug}/", route)

        page_url = page.get("url", "")
        if page_url:
            _add_route_alias(mapping, page_url, route)
            parsed = urlparse(page_url)
            _add_route_alias(mapping, parsed.path or "/", route)

        arch_page = arch_pages.get(slug, {})
        orig_path = arch_page.get("path", "")
        if orig_path:
            _add_route_alias(mapping, orig_path, route)
            # WordPress nested paths → flat slug routes (e.g. /our-services/ant → /our-services-ant)
            parts = orig_path.strip("/").split("/")
            if len(parts) > 1:
                nested_flat = "/".join(parts[:-1]) + "-" + parts[-1]
                _add_route_alias(mapping, f"/{nested_flat}", route)

        for link in arch_page.get("internal_links", []):
            href = link if isinstance(link, str) else link.get("href", "")
            if href:
                _add_route_alias(mapping, href, route)
                _add_route_alias(mapping, urlparse(href).path or "/", route)

    if base_url:
        host = urlparse(base_url).netloc.lower()
        extra: dict[str, str] = {}
        for alias, route in mapping.items():
            if alias.startswith(("http://", "https://")):
                continue
            path = alias if alias.startswith("/") else f"/{alias.lstrip('/')}"
            extra[f"https://{host}{path}"] = route
            extra[f"http://{host}{path}"] = route
        mapping.update(extra)

    return mapping


def rewrite_html_links_for_router(
    html: str,
    slug_map: dict[str, str],
    route_map: dict[str, str] | None = None,
) -> str:
    """Convert scraped folder links and internal URLs to React Router paths."""
    if route_map:
        for alias in sorted(route_map, key=len, reverse=True):
            route = route_map[alias]
            if alias.startswith(("http://", "https://")):
                html = re.sub(
                    rf'href=["\']{re.escape(alias)}/?["\']',
                    f'href="{route}"',
                    html,
                    flags=re.I,
                )
            else:
                for variant in {alias, alias.rstrip("/") or "/", f"{alias.rstrip('/')}/"}:
                    html = re.sub(
                        rf'href=["\']{re.escape(variant)}["\']',
                        f'href="{route}"',
                        html,
                        flags=re.I,
                    )

    for slug in slug_map:
        route = slug_to_route(slug)
        patterns = [
            rf'href=["\'](?:\.\./)+{re.escape(slug)}/?["\']',
            rf'href=["\']{re.escape(slug)}/?["\']',
            rf'href=["\']/{re.escape(slug)}/?["\']',
        ]
        for pat in patterns:
            html = re.sub(pat, f'href="{route}"', html, flags=re.I)
    return html


def copy_all_site_assets(site_dir: Path, public_dir: Path) -> None:
    """Merge assets from every scraped page into public/assets."""
    public_assets = public_dir / "assets"
    public_assets.mkdir(parents=True, exist_ok=True)
    for page in load_site_pages(site_dir):
        assets_dir = page["html_path"].parent / "assets"
        if not assets_dir.is_dir():
            continue
        for folder in ASSET_FOLDERS:
            src = assets_dir / folder
            if not src.is_dir():
                continue
            dest = public_assets / folder
            dest.mkdir(parents=True, exist_ok=True)
            for f in src.rglob("*"):
                if f.is_file():
                    rel = f.relative_to(src)
                    target = dest / rel
                    if not target.exists():
                        target.parent.mkdir(parents=True, exist_ok=True)
                        shutil.copy2(f, target)
        for fw in FRAMEWORK_DIRS:
            src = assets_dir / fw
            if src.is_dir():
                dest = public_dir / fw
                dest.mkdir(parents=True, exist_ok=True)
                for f in src.rglob("*"):
                    if f.is_file():
                        rel = f.relative_to(src)
                        target = dest / rel
                        if not target.exists():
                            target.parent.mkdir(parents=True, exist_ok=True)
                            shutil.copy2(f, target)


RTL_LANG_CODES = frozenset(
    {"ar", "he", "fa", "ur", "yi", "dv", "ps", "sd", "ug", "ku", "ckb"}
)

UNIVERSAL_OFFLINE_CSS = """
/* Offline mirror — layout, RTL, fonts, video, modals (all languages) */
html { -webkit-text-size-adjust: 100%; }
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html[dir="rtl"] body { direction: rtl; text-align: start; }
html[dir="ltr"] body { direction: ltr; }
img, video, svg { max-width: 100%; height: auto; }
.scraped-page, .scraped-content { display: contents; }
.race-hero, .elementor-background-video-container {
  position: relative; overflow: hidden;
}
.race-hero video.rh-video,
video.elementor-background-video-hosted,
.elementor-background-video-hosted {
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; z-index: 0;
}
.race-hero .rh-overlay, .race-hero .rh-content { position: relative; z-index: 1; }
.pum-overlay, .elementor-popup-modal, .modal, [class*="popup"] { z-index: 99999; }
.elementor-popup-modal .dialog-close-button,
.elementor-popup-modal .dialog-lightbox-close-button {
  display: block !important;
  pointer-events: all !important;
  cursor: pointer !important;
}
/* CSS animations preserved offline */
@media (prefers-reduced-motion: no-preference) {
  .animated, [class*="elementor-animation-"] { animation-fill-mode: both; }
}
[data-aos] { opacity: 1 !important; transform: none !important; }
.elementor-invisible { visibility: visible !important; opacity: 1 !important; }
.lazy-image { opacity: 1; }
"""


def detect_site_language(html: str) -> dict[str, str]:
    """Read lang/dir from scraped HTML for any export stack."""
    lang = "en"
    direction = "ltr"
    m = re.search(r"<html([^>]*)>", html, re.I | re.S)
    if m:
        attrs = m.group(1)
        lang_m = re.search(r'\blang=["\']([^"\']+)["\']', attrs, re.I)
        if lang_m:
            lang = lang_m.group(1).strip()
        dir_m = re.search(r'\bdir=["\']([^"\']+)["\']', attrs, re.I)
        if dir_m:
            direction = dir_m.group(1).strip().lower()
        else:
            base = lang.split("-")[0].lower()
            direction = "rtl" if base in RTL_LANG_CODES else "ltr"
    if direction not in ("rtl", "ltr"):
        direction = "ltr"
    return {"lang": lang, "dir": direction}


def html_root_attrs(lang: str, direction: str) -> str:
    """Opening <html> tag with lang and optional dir."""
    if direction == "rtl":
        return f'<html lang="{lang}" dir="rtl">'
    return f'<html lang="{lang}">'
