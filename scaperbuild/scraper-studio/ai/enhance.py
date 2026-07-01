"""Enhance scraped site architecture with AI or heuristics.

Set OPENAI_API_KEY to enable LLM-powered page classification and nav grouping.
Without an API key, uses rule-based analysis (always works offline).
"""

from __future__ import annotations

import json
import os
import re
from pathlib import Path
from typing import Any


def _heuristic_enhance(architecture: dict) -> dict:
    """Rule-based structure hints — works without any API key."""
    pages = architecture.get("pages", {})
    collections: dict[str, list[str]] = {"services": [], "blog": [], "legal": [], "contact": []}

    for slug, page in pages.items():
        ptype = page.get("type", "page")
        path = (page.get("path") or "").lower()
        title = (page.get("seo", {}).get("title") or page.get("title") or "").lower()

        if ptype == "blog" or any(x in path for x in ("/blog/", "/news/", "/post/")):
            collections["blog"].append(slug)
        elif any(x in path or x in title for x in ("service", "pest", "treatment", "control")):
            collections["services"].append(slug)
        elif any(x in path or x in title for x in ("privacy", "terms", "cookie", "legal")):
            collections["legal"].append(slug)
        elif any(x in path or x in title for x in ("contact", "quote", "book")):
            collections["contact"].append(slug)

    for key, slugs in collections.items():
        if slugs:
            architecture.setdefault("collections", {})[key] = slugs

    nav = architecture.get("navigation", {})
    header = nav.get("header", [])
    if header:
        architecture["ai_nav_summary"] = {
            "top_level_items": len(header),
            "labels": [item.get("label", "") for item in header[:12]],
            "method": "heuristic",
        }

    architecture["ai_enhanced"] = True
    architecture["ai_method"] = "heuristic"
    return architecture


def _llm_enhance(architecture: dict, site_dir: Path) -> dict | None:
    """Optional OpenAI call for page grouping and nav hierarchy."""
    api_key = os.environ.get("OPENAI_API_KEY", "").strip()
    if not api_key:
        return None

    try:
        import urllib.request

        pages_summary = []
        for slug, page in list(architecture.get("pages", {}).items())[:40]:
            pages_summary.append({
                "slug": slug,
                "title": page.get("seo", {}).get("title") or page.get("title", ""),
                "type": page.get("type", "page"),
                "path": page.get("path", ""),
            })

        prompt = (
            "Analyze this scraped website structure. Return JSON only with keys: "
            "collections (object mapping category name to slug arrays), "
            "nav_hierarchy (array of {label, slug, children}), "
            "language_detected, site_purpose (one sentence).\n\n"
            f"Pages: {json.dumps(pages_summary, ensure_ascii=False)}"
        )

        payload = json.dumps({
            "model": os.environ.get("OPENAI_MODEL", "gpt-4o-mini"),
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.2,
            "response_format": {"type": "json_object"},
        }).encode()

        req = urllib.request.Request(
            "https://api.openai.com/v1/chat/completions",
            data=payload,
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            },
            method="POST",
        )
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = json.loads(resp.read().decode())

        content = data["choices"][0]["message"]["content"]
        result = json.loads(content)

        if result.get("collections"):
            for cat, slugs in result["collections"].items():
                if isinstance(slugs, list) and slugs:
                    architecture.setdefault("collections", {})[cat] = slugs

        if result.get("nav_hierarchy"):
            architecture["ai_nav_hierarchy"] = result["nav_hierarchy"]

        architecture["ai_site_purpose"] = result.get("site_purpose", "")
        architecture["ai_language"] = result.get("language_detected", architecture.get("language", ""))
        architecture["ai_enhanced"] = True
        architecture["ai_method"] = "openai"

        out = site_dir / "ai_analysis.json"
        out.write_text(json.dumps(result, indent=2, ensure_ascii=False), encoding="utf-8")
        return architecture
    except Exception:
        return None


def enhance_architecture(site_dir: Path, architecture: dict[str, Any]) -> dict[str, Any]:
    """Enhance architecture with AI (if key set) or heuristics (always)."""
    site_dir = Path(site_dir)
    enhanced = _llm_enhance(architecture, site_dir)
    if enhanced:
        arch_path = site_dir / "site_architecture.json"
        if arch_path.exists():
            arch_path.write_text(json.dumps(enhanced, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        return enhanced

    result = _heuristic_enhance(architecture)
    arch_path = site_dir / "site_architecture.json"
    if arch_path.exists():
        arch_path.write_text(json.dumps(result, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return result
