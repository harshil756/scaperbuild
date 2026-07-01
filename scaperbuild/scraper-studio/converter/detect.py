"""Detect website technology from scraped HTML."""

from __future__ import annotations

import re
from dataclasses import dataclass, field
from pathlib import Path


@dataclass
class TechProfile:
    platform: str
    confidence: str
    signals: list[str] = field(default_factory=list)
    plugins: list[str] = field(default_factory=list)
    recommended_stacks: list[dict] = field(default_factory=list)
    customer_summary: str = ""
    convert_recommendation: str = ""
    language: str = ""
    language_label: str = ""
    framework: str = ""  # wordpress | nextjs | react | static | shopify etc.


def _find_signals(html: str, patterns: list[tuple[str, str]]) -> list[str]:
    found = []
    for label, pattern in patterns:
        if re.search(pattern, html, re.I):
            found.append(label)
    return found


def _customer_summary(platform: str, plugins: list[str], language_label: str, framework: str) -> str:
    parts = []
    if language_label and language_label != "Unknown":
        parts.append(f"This website language is **{language_label}**.")
    if framework == "nextjs":
        parts.append("This is a **Next.js (React)** website — already a modern JavaScript framework.")
    elif framework == "react":
        parts.append("This is a **React.js** website — already a JavaScript SPA framework.")
    else:
        parts.append(f"This is a **{platform}** website.")
    if plugins:
        parts.append(f"Built with: {', '.join(plugins)}.")
    return " ".join(parts)


def _convert_recommendation(platform: str, plugins: list[str], framework: str) -> str:
    if framework == "nextjs":
        return (
            "This site is already **Next.js**. We scraped all `/_next/static/` chunks and assets. "
            "Convert to **Next.js 15** to keep the same framework structure, or **React.js 19 + Vite** "
            "for a simpler SPA. After download: `npm install` → `npm run dev`."
        )
    if framework == "react":
        return (
            "This site is already **React.js**. We scraped all bundles, chunks, CSS and images. "
            "Convert to **React.js 19 + Vite** (recommended) or **Next.js 15** for SSR/SEO. "
            "After download: `npm install` → `npm run dev`."
        )
    if platform == "WordPress":
        extra = " Elementor widgets and background videos are preserved." if "Elementor" in plugins else ""
        return (
            "We recommend **React.js Full Architecture** — scrapes all pages, auto-links every menu "
            f"and footer link in a single-page React app.{extra} "
            "After download: `npm install` → `npm run dev`."
        )
    if platform in ("Shopify", "Wix", "Webflow"):
        return (
            f"{platform} sites work best as a **static HTML mirror**. "
            "React conversion wraps the rendered HTML."
        )
    return (
        "Convert to **React.js Full Architecture** (recommended) — full site, all menus linked automatically. "
        "Or **Next.js 15** for SSR. Both run with `npm install` && `npm run dev`."
    )


def detect_from_html(
    html: str,
    url: str = "",
    language: str = "",
    language_label: str = "",
) -> TechProfile:
    wp_signals = _find_signals(
        html,
        [
            ("WordPress", r"wp-content|wp-includes|/wp-json/|wordpress"),
            ("Elementor", r"elementor|elementor-kit"),
            ("WooCommerce", r"woocommerce|wc-"),
            ("Yoast SEO", r"yoast|yoast-schema"),
            ("Contact Form 7", r"wpcf7|contact-form-7"),
            ("Hello Elementor theme", r"hello-elementor|hello-theme"),
            ("Divi", r"et_pb_|divi-theme"),
        ],
    )

    react_signals = _find_signals(
        html,
        [
            ("Next.js", r"__NEXT_DATA__|_next/static|__next|next/font|id=[\"']__next[\"']"),
            ("React (Vite)", r"@vite/client|/@react-refresh|type=[\"']module[\"'].*src=[\"']/src/"),
            ("React (CRA)", r"/static/js/|react-dom|react\.production"),
            ("React root", r'id=["\']root["\']|data-reactroot|__react'),
            ("Vue", r"__vue__|data-v-"),
            ("Angular", r"ng-version|angular"),
        ],
    )

    other_signals = _find_signals(
        html,
        [
            ("Laravel", r"laravel|livewire|@vite\(['\"]resources"),
            ("PHP", r"\.php|wp-content|index\.php"),
            ("Shopify", r"cdn\.shopify\.com|shopify-section"),
            ("Wix", r"wix\.com|wixstatic"),
            ("Webflow", r"webflow\.io|webflow\.com"),
        ],
    )

    all_signals = wp_signals + react_signals + other_signals
    framework = ""
    plugins: list[str] = []

    if any(s in wp_signals for s in ("WordPress",)):
        platform = "WordPress"
        confidence = "high" if len(wp_signals) >= 2 else "medium"
        plugins = [s for s in wp_signals if s != "WordPress"]
        framework = "wordpress"
    elif "Next.js" in react_signals:
        platform = "Next.js"
        confidence = "high"
        framework = "nextjs"
        plugins = [s for s in react_signals if s != "Next.js"]
    elif any(s in react_signals for s in ("React (Vite)", "React (CRA)", "React root")):
        platform = "React.js"
        confidence = "high" if len(react_signals) >= 2 else "medium"
        framework = "react"
        plugins = [s for s in react_signals if "React" in s]
    elif "Vue" in react_signals:
        platform, confidence, framework = "Vue.js", "medium", "vue"
    elif "Angular" in react_signals:
        platform, confidence, framework = "Angular", "medium", "angular"
    elif "Laravel" in other_signals:
        platform, confidence, framework = "Laravel", "high", "laravel"
    elif "PHP" in other_signals:
        platform, confidence, framework = "PHP", "medium", "php"
    elif "Shopify" in other_signals:
        platform, confidence, framework = "Shopify", "high", "shopify"
    elif "Wix" in other_signals:
        platform, confidence, framework = "Wix", "high", "wix"
    elif "Webflow" in other_signals:
        platform, confidence, framework = "Webflow", "high", "webflow"
    else:
        platform, confidence, framework = "Static HTML", "medium", "static"

    if not language_label:
        lang_m = re.search(r'<html[^>]+lang=["\']([^"\']+)["\']', html, re.I)
        if lang_m:
            language = lang_m.group(1)
            try:
                from scraper.site_analyze import analyze_html as _ah
                language_label = _ah(f'<html lang="{language}"></html>', "").get("language_label", language)
            except Exception:
                language_label = language

    recommended = _recommend_stacks(platform, framework, plugins)
    summary = _customer_summary(platform, plugins, language_label, framework)
    convert_rec = _convert_recommendation(platform, plugins, framework)

    return TechProfile(
        platform=platform,
        confidence=confidence,
        signals=all_signals or ["Static HTML site"],
        plugins=plugins,
        recommended_stacks=recommended,
        customer_summary=summary,
        convert_recommendation=convert_rec,
        language=language,
        language_label=language_label,
        framework=framework,
    )


def _recommend_stacks(platform: str, framework: str, plugins: list[str]) -> list[dict]:
    stacks = [
        {
            "id": "static",
            "name": "Static HTML Mirror",
            "description": "Exact same-to-same rendered copy. All assets in separate folders.",
            "difficulty": "easy",
            "best_for": "Quick preview — identical to live site",
            "run_cmd": "python serve.py .",
        },
        {
            "id": "react-architecture",
            "name": "React.js Full Architecture",
            "description": "Production React app: all pages, routes, SEO, sitemap, lazy loading, /src structure",
            "difficulty": "advanced",
            "best_for": "Full website recreation with scalable architecture",
            "run_cmd": "npm install && npm run dev",
        },
        {
            "id": "react-vite",
            "name": "React.js 19 + Vite",
            "description": "Latest React.js SPA. Preserves scraped HTML + all JS bundles.",
            "difficulty": "medium",
            "best_for": "React sites, WordPress → React migration",
            "run_cmd": "npm install && npm run dev",
        },
        {
            "id": "laravel",
            "name": "Laravel 11",
            "description": "PHP Laravel with Blade views — all pages, assets in public/",
            "difficulty": "medium",
            "best_for": "PHP/Laravel teams, server-rendered sites",
            "run_cmd": "composer install && php artisan serve",
        },
        {
            "id": "nextjs",
            "name": "Next.js 15",
            "description": "Latest Next.js — keeps /_next/static/ structure for Next.js sites.",
            "difficulty": "medium",
            "best_for": "Next.js sites, SEO production builds",
            "run_cmd": "npm install && npm run dev",
        },
    ]

    if framework == "nextjs":
        for s in stacks:
            if s["id"] == "nextjs":
                s["recommended"] = True
                s["note"] = "Best match — site is already Next.js; chunks preserved in /_next/"
            if s["id"] == "react-vite":
                s["note"] = "Alternative — simpler React SPA wrapper"
    elif framework == "react":
        for s in stacks:
            if s["id"] == "react-vite":
                s["recommended"] = True
                s["note"] = "Best match — site is already React.js"
            if s["id"] == "nextjs":
                s["note"] = "Upgrade path — add SSR/SEO with Next.js 15"
    elif framework == "wordpress":
        for s in stacks:
            if s["id"] == "react-architecture":
                s["recommended"] = True
                s["note"] = "Best for full WordPress site → structured React app"
            if s["id"] == "react-vite":
                s["note"] = "Quick single-page React wrapper"
    elif framework == "laravel":
        for s in stacks:
            if s["id"] == "laravel":
                s["recommended"] = True
                s["note"] = "Best match — Laravel Blade project"
    elif framework in ("shopify", "wix", "webflow"):
        stacks[0]["recommended"] = True
        for s in stacks:
            if s["id"] == "react-architecture":
                s["note"] = "Wrap full site in React SPA with linked navigation"
    else:
        for s in stacks:
            if s["id"] == "react-architecture":
                s["recommended"] = True
                s["note"] = "Recommended — full multi-page React SPA, menus auto-linked"
            if s["id"] == "static":
                s["note"] = "Quick offline preview only"

    return stacks


def detect_from_site(site_dir: Path) -> TechProfile:
    entry = site_dir / "home" / "home.html"
    if not entry.exists():
        for html in site_dir.rglob("*.html"):
            if html.name != "index.html":
                entry = html
                break
    if not entry.exists():
        return TechProfile(
            platform="Unknown",
            confidence="low",
            signals=["No HTML found"],
            recommended_stacks=_recommend_stacks("Static HTML", "static", []),
            customer_summary="Could not analyze — no HTML found.",
            convert_recommendation="Try scraping again.",
        )
    html = entry.read_text(encoding="utf-8", errors="replace")
    from scraper.site_analyze import analyze_html

    stats = analyze_html(html, "")
    return detect_from_html(
        html,
        language=stats.get("language", ""),
        language_label=stats.get("language_label", ""),
    )
