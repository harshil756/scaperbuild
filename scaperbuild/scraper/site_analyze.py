"""Analyze scraped page — language, links, media counts."""

from __future__ import annotations

import re
from urllib.parse import urlparse

from bs4 import BeautifulSoup


def analyze_html(html: str, page_url: str) -> dict:
    soup = BeautifulSoup(html, "lxml")
    html_tag = soup.find("html")
    lang = (html_tag.get("lang") or "").strip() if html_tag else ""
    if not lang:
        meta_lang = soup.find("meta", attrs={"http-equiv": re.compile("content-language", re.I)})
        if meta_lang:
            lang = meta_lang.get("content", "").strip()

    links = soup.find_all("a", href=True)
    internal = external = 0
    host = urlparse(page_url).netloc
    for a in links:
        href = a.get("href", "")
        if href.startswith(("#", "mailto:", "tel:", "javascript:")):
            continue
        abs_u = href
        if href.startswith("//"):
            abs_u = "https:" + href
        elif href.startswith("/"):
            abs_u = f"{urlparse(page_url).scheme}://{host}{href}"
        elif not href.startswith("http"):
            internal += 1
            continue
        if host and host in urlparse(abs_u).netloc:
            internal += 1
        else:
            external += 1

    return {
        "language": lang or "unknown",
        "language_label": _lang_label(lang),
        "links_total": len(links),
        "links_internal": internal,
        "links_external": external,
        "images_count": len(soup.find_all("img")),
        "videos_count": len(soup.find_all("video")),
        "fonts_in_css": _count_font_faces(html),
    }


def _lang_label(code: str) -> str:
    labels = {
        "en": "English",
        "en-us": "English (US)",
        "en-au": "English (Australia)",
        "en-gb": "English (UK)",
        "es": "Spanish",
        "fr": "French",
        "de": "German",
        "it": "Italian",
        "pt": "Portuguese",
        "hi": "Hindi",
        "zh": "Chinese",
        "ja": "Japanese",
        "ar": "Arabic",
    }
    return labels.get(code.lower(), code.upper() if code else "Unknown")


def _count_font_faces(html: str) -> int:
    return len(re.findall(r"@font-face\s*\{", html, re.I))
