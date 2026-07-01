"""Final polish before download / convert — paths, CSS, fonts, links, videos (all stacks)."""

from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

from .assets_fix import fix_all_bin_extensions
from .offline_paths import ensure_relative_asset_paths, normalize_offline_html
from .postprocess import apply_lazyload_fixes, rewrite_internal_page_links
from .storage import assets_root, load_manifest
from .utils import relative_path

RTL_LANG_CODES = frozenset(
    {"ar", "he", "fa", "ur", "yi", "dv", "ps", "sd", "ug", "ku", "ckb"}
)

STACK_README = {
    "static": (
        "Do NOT double-click HTML files — browsers block CSS/JS on file://.\n\n"
        "Run: `./START.sh` (Mac/Linux) or `START.bat` (Windows), or `python3 serve.py .`\n"
        "Then open http://127.0.0.1:8765/home/"
    ),
    "react-vite": "Run `npm install && npm run dev` — assets in `public/assets/`.",
    "react-architecture": "Run `npm install && npm run dev` — multi-page router + `public/assets/`.",
    "nextjs": "Run `npm install && npm run dev` — assets in `public/assets/`.",
    "laravel": "Run `composer install && php artisan serve` — assets in `public/assets/`.",
}


def _asset_index(root: Path) -> dict[str, Path]:
    idx: dict[str, Path] = {}
    if not root.is_dir():
        return idx
    for f in root.rglob("*"):
        if f.is_file():
            idx[f.name.lower()] = f
            idx.setdefault(f.stem.lower(), f)
    return idx


def extract_html_lang(html: str) -> tuple[str, str]:
    lang, direction = "en", "ltr"
    m = re.search(r"<html([^>]*)>", html, re.I | re.S)
    if not m:
        return lang, direction
    attrs = m.group(1)
    lang_m = re.search(r'\blang=["\']([^"\']+)["\']', attrs, re.I)
    if lang_m:
        lang = lang_m.group(1).strip()
    dir_m = re.search(r'\bdir=["\']([^"\']+)["\']', attrs, re.I)
    if dir_m:
        direction = dir_m.group(1).strip().lower()
    elif lang.split("-")[0].lower() in RTL_LANG_CODES:
        direction = "rtl"
    return lang, direction


def ensure_html_lang_attrs(html: str) -> str:
    """Preserve or infer lang/dir on scraped pages (any language)."""
    lang, direction = extract_html_lang(html)
    if re.search(r"<html[^>]+lang=", html, re.I):
        if direction == "rtl" and not re.search(r"<html[^>]+dir=", html, re.I):
            html = re.sub(
                r"(<html[^>]*)(>)",
                r'\1 dir="rtl"\2',
                html,
                count=1,
                flags=re.I,
            )
        return html
    dir_attr = ' dir="rtl"' if direction == "rtl" else ""
    return re.sub(
        r"<html[^>]*>",
        f'<html lang="{lang}"{dir_attr}>',
        html,
        count=1,
        flags=re.I,
    )


def repair_css_file_urls(css_file: Path, page_dir: Path, index: dict[str, Path]) -> bool:
    """Rewrite url() in CSS so fonts/images load from local assets."""
    try:
        text = css_file.read_text(encoding="utf-8", errors="replace")
    except Exception:
        return False
    original = text

    def repl(m: re.Match[str]) -> str:
        raw = m.group(1).strip().strip("\"'")
        if not raw or raw.startswith("data:"):
            return m.group(0)
        if raw.startswith(("http://", "https://", "//")):
            name = Path(raw.split("?")[0]).name.lower()
            hit = index.get(name)
            if hit:
                rel = relative_path(css_file, hit)
                q = '"' if '"' in m.group(0) else "'" if "'" in m.group(0) else ""
                return f"url({q}{rel}{q})" if q else f"url({rel})"
            return m.group(0)
        clean = raw.lstrip("/")
        candidates = [
            page_dir / clean,
            page_dir / clean.replace("assets/", "assets/", 1),
            assets_root(page_dir) / clean.split("assets/", 1)[-1] if "assets/" in clean else None,
        ]
        for target in candidates:
            if target and target.is_file():
                rel = relative_path(css_file, target)
                q = '"' if '"' in m.group(0) else "'" if "'" in m.group(0) else ""
                return f"url({q}{rel}{q})" if q else f"url({rel})"
        name = Path(raw.split("?")[0]).name.lower()
        hit = index.get(name)
        if hit:
            rel = relative_path(css_file, hit)
            q = '"' if '"' in m.group(0) else "'" if "'" in m.group(0) else ""
            return f"url({q}{rel}{q})" if q else f"url({rel})"
        return m.group(0)

    text = re.sub(r"url\(\s*['\"]?([^)'\"]+)['\"]?\s*\)", repl, text, flags=re.I)
    text = ensure_relative_asset_paths(text)
    if text != original:
        css_file.write_text(text, encoding="utf-8")
        return True
    return False


def repair_all_css_in_page(page_dir: Path) -> int:
    css_dir = assets_root(page_dir) / "css"
    if not css_dir.is_dir():
        return 0
    index = _asset_index(page_dir)
    n = 0
    for css_file in list(css_dir.rglob("*")):
        if not css_file.is_file():
            continue
        if css_file.suffix.lower() not in (".css", ".bin"):
            continue
        if css_file.suffix == ".bin":
            from .utils import extension_from_bytes

            data = css_file.read_bytes()
            ext = extension_from_bytes(data) or ".css"
            css_file = css_file.rename(css_file.with_suffix(ext))
        if repair_css_file_urls(css_file, page_dir, index):
            n += 1
    return n


def polish_page(page_dir: Path, html_path: Path, site_dir: Path, manifest: dict) -> None:
    if not html_path.exists():
        return
    fix_all_bin_extensions(page_dir)
    repair_all_css_in_page(page_dir)

    page_url = ""
    html_rel = html_path.relative_to(site_dir).as_posix()
    for url, info in manifest.get("pages", {}).items():
        if info.get("html") == html_rel:
            page_url = url
            break

    html = html_path.read_text(encoding="utf-8", errors="replace")
    html = ensure_html_lang_attrs(html)
    html = normalize_offline_html(html, page_dir, html_path)
    try:
        from .banner_fix import apply_banner_fixes
        from .fidelity import apply_full_fidelity_fixes
        from .seo_preserve import ensure_seo_head, extract_seo, save_page_seo

        html = apply_banner_fixes(html, page_dir, html_path, page_url or "")
        html = apply_full_fidelity_fixes(html, page_dir, html_path, page_url or "")
        seo = extract_seo(html, page_url or "")
        html = ensure_seo_head(html, seo)
        if page_url:
            slug = manifest.get("pages", {}).get(page_url, {}).get("slug") or page_dir.name
            save_page_seo(site_dir, slug, seo)
    except Exception:
        pass
    html = apply_lazyload_fixes(html)
    if page_url:
        html = rewrite_internal_page_links(html, page_url, manifest, html_path)
    html = normalize_offline_html(html, page_dir, html_path)
    html = ensure_html_lang_attrs(html)
    html_path.write_text(html, encoding="utf-8")


def polish_entire_site(site_dir: Path) -> dict:
    """Run on scraped site before preview download or convert."""
    site_dir = Path(site_dir)
    manifest = load_manifest(site_dir)
    stats = {"pages": 0, "css_fixed": 0, "bins_fixed": 0}

    for html_path in sorted(site_dir.rglob("*.html")):
        if html_path.name == "index.html" and html_path.parent == site_dir:
            continue
        page_dir = html_path.parent
        stats["bins_fixed"] += fix_all_bin_extensions(page_dir)
        stats["css_fixed"] += repair_all_css_in_page(page_dir)
        polish_page(page_dir, html_path, site_dir, manifest)
        stats["pages"] += 1

    _write_open_instructions_index(site_dir)
    _bundle_local_server(site_dir)
    _write_readme(site_dir, manifest, "static")
    (site_dir / "site.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    return stats


def _find_site_entry(site_dir: Path) -> Path | None:
    for candidate in (
        site_dir / "home" / "home.html",
        site_dir / "home.html",
    ):
        if candidate.exists():
            return candidate
    pages = [p for p in site_dir.rglob("*.html") if p.name not in ("index.html", "OPEN_SITE.html")]
    return pages[0] if pages else None


def _write_open_instructions_index(site_dir: Path) -> None:
    """index.html with CORS warning — never auto-open home.html via file://."""
    entry = _find_site_entry(site_dir)
    entry_hint = entry.relative_to(site_dir).as_posix() if entry else "home/home.html"
    (site_dir / "index.html").write_text(
        f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>How to open this scraped site</title>
  <style>
    body {{ font-family: system-ui, sans-serif; max-width: 42rem; margin: 2rem auto; padding: 0 1rem; line-height: 1.5; }}
    h1 {{ color: #b45309; }}
    code, pre {{ background: #f1f5f9; padding: 0.15rem 0.4rem; border-radius: 4px; }}
    pre {{ padding: 1rem; overflow-x: auto; }}
    .warn {{ background: #fff7ed; border: 1px solid #fdba74; padding: 1rem; border-radius: 8px; }}
  </style>
</head>
<body>
  <h1>Do not open {entry_hint} directly</h1>
  <div class="warn">
    <p><strong>Opening HTML files from Downloads uses <code>file://</code>.</strong>
    Chrome blocks CSS and JavaScript on <code>file://</code> (CORS policy) — the page will look broken.</p>
  </div>
  <h2>Correct way (local web server)</h2>
  <p><strong>Mac / Linux:</strong></p>
  <pre>cd "$(dirname "$0")"
./START.sh</pre>
  <p><strong>Windows:</strong> double-click <code>START.bat</code></p>
  <p><strong>Or with Python:</strong></p>
  <pre>python3 serve.py .</pre>
  <p>Then open <a href="http://127.0.0.1:8765/home/">http://127.0.0.1:8765/home/</a> in your browser.</p>
  <p><small>Entry page: <code>{entry_hint}</code></small></p>
</body>
</html>
""",
        encoding="utf-8",
    )


def _bundle_local_server(site_dir: Path) -> None:
    """Copy serve.py and one-click starters into every static export ZIP."""
    site_dir = Path(site_dir)
    if not _find_site_entry(site_dir):
        return
    root = Path(__file__).resolve().parents[1]
    serve_src = root / "serve.py"
    if serve_src.is_file():
        shutil.copy2(serve_src, site_dir / "serve.py")
    (site_dir / "START.sh").write_text(
        """#!/bin/bash
cd "$(dirname "$0")"
if command -v python3 >/dev/null 2>&1; then
  exec python3 serve.py .
elif command -v python >/dev/null 2>&1; then
  exec python serve.py .
else
  echo "Install Python 3, then run: python3 serve.py ."
  exit 1
fi
""",
        encoding="utf-8",
    )
    try:
        (site_dir / "START.sh").chmod(0o755)
    except OSError:
        pass
    (site_dir / "START.bat").write_text(
        """@echo off
cd /d "%~dp0"
where python >nul 2>nul && python serve.py . && exit /b 0
where py >nul 2>nul && py -3 serve.py . && exit /b 0
echo Install Python 3 from https://python.org then run: python serve.py .
pause
""",
        encoding="utf-8",
    )
    (site_dir / "OPEN_FIRST.txt").write_text(
        """HOW TO VIEW THIS SITE
=====================

Do NOT double-click home.html — CSS and JS will NOT load (browser security).

1. Mac/Linux: run ./START.sh
   Windows:    double-click START.bat
   Or:         python3 serve.py .

2. Open http://127.0.0.1:8765/home/ in your browser.

The site will look exactly like the live website when served over http://.
""",
        encoding="utf-8",
    )


def _write_root_redirect(site_dir: Path) -> None:
    entry = None
    for candidate in (site_dir / "home" / "home.html", site_dir / "index.html"):
        if candidate.exists():
            entry = candidate
            break
    if not entry:
        pages = [p for p in site_dir.rglob("*.html") if p.name != "index.html"]
        entry = pages[0] if pages else None
    if not entry:
        return
    rel = entry.relative_to(site_dir).as_posix()
    (site_dir / "index.html").write_text(
        f'<!DOCTYPE html><html><head><meta charset="utf-8">'
        f'<meta http-equiv="refresh" content="0;url={rel}">'
        f'<script>location.replace("{rel}");</script></head>'
        f'<body><p><a href="{rel}">Open site</a></p></body></html>',
        encoding="utf-8",
    )


def _write_readme(site_dir: Path, manifest: dict, stack: str = "static") -> None:
    pages = manifest.get("pages", {})
    run_hint = STACK_README.get(stack, STACK_README["static"])
    (site_dir / "README.md").write_text(
        f"""# Scraped Website (offline mirror)

{len(pages)} page(s) — CSS, JS, images, fonts, banners, and videos included locally.
Works in any language (RTL/LTR) — `lang` and `dir` preserved from the original site.
SEO data saved in `seo/*.json` (title, description, Open Graph, JSON-LD).

## View locally (required for CSS/JS)

{run_hint}

## Structure

```
home/home.html
home/assets/css/
home/assets/js/
home/assets/images/
home/assets/fonts/
home/assets/videos/
```

All asset links are wired automatically — works offline with no internet.
""",
        encoding="utf-8",
    )


def _repair_public_css_urls(css_file: Path, public: Path, index: dict[str, Path]) -> bool:
    try:
        text = css_file.read_text(encoding="utf-8", errors="replace")
    except Exception:
        return False
    original = text

    def repl(m: re.Match[str]) -> str:
        raw = m.group(1).strip().strip("\"'")
        if not raw or raw.startswith("data:"):
            return m.group(0)
        if raw.startswith("/assets/"):
            return m.group(0)
        if raw.startswith(("http://", "https://", "//")):
            name = Path(raw.split("?")[0]).name.lower()
            hit = index.get(name)
            if hit:
                web = "/" + hit.relative_to(public).as_posix()
                return f"url({web})"
            return m.group(0)
        if raw.startswith("../") or (not raw.startswith("/") and "assets/" in raw):
            web = "/" + raw.lstrip("./")
            if (public / web.lstrip("/")).exists():
                return f"url({web})"
        name = Path(raw.split("?")[0]).name.lower()
        hit = index.get(name)
        if hit:
            return f"url(/{hit.relative_to(public).as_posix()})"
        return m.group(0)

    text = re.sub(r"url\(\s*['\"]?([^)'\"]+)['\"]?\s*\)", repl, text, flags=re.I)
    if text != original:
        css_file.write_text(text, encoding="utf-8")
        return True
    return False


def polish_public_folder(public: Path) -> dict:
    """Fix CSS url(), .bin extensions, and asset paths under public/ (all frameworks)."""
    public = Path(public)
    stats = {"css_fixed": 0, "bins_fixed": 0}
    if not public.is_dir():
        return stats

    try:
        from .offline_popups import OFFLINE_POPUP_JS

        js_dest = public / "assets" / "js" / "offline-popups.js"
        js_dest.parent.mkdir(parents=True, exist_ok=True)
        if not js_dest.exists():
            js_dest.write_text(OFFLINE_POPUP_JS.strip() + "\n", encoding="utf-8")
    except Exception:
        pass

    assets = public / "assets"
    index = _asset_index(public)

    for page_like in public.rglob("*"):
        if not page_like.is_file():
            continue
        if page_like.suffix.lower() == ".bin":
            stats["bins_fixed"] += fix_all_bin_extensions(page_like.parent)

    if assets.is_dir():
        stats["bins_fixed"] += sum(
            fix_all_bin_extensions(d) for d in {f.parent for f in assets.rglob("*.bin")}
        )
        css_dir = assets / "css"
        if css_dir.is_dir():
            for css_file in css_dir.rglob("*.css"):
                if _repair_public_css_urls(css_file, public, index):
                    stats["css_fixed"] += 1

    for fw in ("_next", "static"):
        fw_dir = public / fw
        if fw_dir.is_dir():
            for css_file in fw_dir.rglob("*.css"):
                if _repair_public_css_urls(css_file, public, index):
                    stats["css_fixed"] += 1

    return stats


def _append_offline_readme(project_dir: Path, stack: str) -> None:
    readme = Path(project_dir) / "README.md"
    if not readme.exists():
        return
    text = readme.read_text(encoding="utf-8")
    if "Offline guarantee" in text:
        return
    hint = STACK_README.get(stack, "")
    readme.write_text(
        text
        + f"""

## Offline guarantee (auto-linked assets)

- All stylesheets, images, fonts, and videos load from `public/assets/` (or local `assets/` for static)
- Internal page links are wired for offline browsing
- Language and text direction (`lang` / `dir`) match the scraped site
- {hint}
""",
        encoding="utf-8",
    )


def polish_converted_project(project_dir: Path, stack: str = "react-vite") -> dict:
    """Polish any converted project — React, Next.js, Laravel, or static copy."""
    project_dir = Path(project_dir)
    stack = (stack or "static").lower()
    stats: dict = {"stack": stack}

    if stack == "static":
        stats.update(polish_entire_site(project_dir))
        return stats

    if _find_site_entry(project_dir):
        _bundle_local_server(project_dir)
        _write_open_instructions_index(project_dir)

    public = project_dir / "public"
    if public.is_dir():
        stats.update(polish_public_folder(public))
    elif (project_dir / "assets").is_dir():
        for html_path in project_dir.rglob("*.html"):
            if html_path.name == "index.html" and html_path.parent == project_dir:
                continue
            page_dir = html_path.parent
            fix_all_bin_extensions(page_dir)
            repair_all_css_in_page(page_dir)

    _append_offline_readme(project_dir, stack)
    return stats


def polish_converted_react(project_dir: Path) -> None:
    """Backward-compatible alias — polishes public/assets for Vite/React/Next."""
    polish_converted_project(project_dir, "react-vite")
