"""Preserve SEO meta tags, Open Graph, Twitter cards, JSON-LD in scraped pages."""

from __future__ import annotations

import json
import re
from pathlib import Path

from bs4 import BeautifulSoup


def extract_seo(html: str, page_url: str) -> dict:
    soup = BeautifulSoup(html, "lxml")
    title = ""
    if soup.title and soup.title.string:
        title = re.sub(r"\s+", " ", soup.title.string).strip()

    desc = ""
    desc_tag = soup.find("meta", attrs={"name": re.compile(r"^description$", re.I)})
    if desc_tag:
        desc = desc_tag.get("content", "")

    keywords = ""
    kw_tag = soup.find("meta", attrs={"name": re.compile(r"^keywords$", re.I)})
    if kw_tag:
        keywords = kw_tag.get("content", "")

    robots = ""
    robots_tag = soup.find("meta", attrs={"name": re.compile(r"^robots$", re.I)})
    if robots_tag:
        robots = robots_tag.get("content", "")

    canonical = page_url
    can_tag = soup.find("link", rel=re.compile(r"^canonical$", re.I))
    if can_tag and can_tag.get("href"):
        canonical = can_tag["href"]

    og: dict[str, str] = {}
    for m in soup.find_all("meta", property=True):
        prop = m.get("property", "")
        if prop.startswith(("og:", "article:")):
            og[prop] = m.get("content", "")

    twitter: dict[str, str] = {}
    for m in soup.find_all("meta", attrs={"name": re.compile(r"^twitter:", re.I)}):
        twitter[m["name"]] = m.get("content", "")

    json_ld: list = []
    for script in soup.find_all("script", type="application/ld+json"):
        try:
            json_ld.append(json.loads(script.string or "{}"))
        except json.JSONDecodeError:
            pass

    hreflang: list[dict[str, str]] = []
    for link in soup.find_all("link", rel=re.compile(r"alternate", re.I)):
        if link.get("hreflang"):
            hreflang.append({"lang": link["hreflang"], "href": link.get("href", "")})

    return {
        "url": page_url,
        "title": title,
        "description": desc,
        "keywords": keywords,
        "robots": robots,
        "canonical": canonical,
        "og": og,
        "twitter": twitter,
        "jsonLd": json_ld,
        "hreflang": hreflang,
    }


def ensure_seo_head(html: str, seo: dict | None = None) -> str:
    """Ensure critical SEO tags exist in <head> (never stripped)."""
    soup = BeautifulSoup(html, "lxml")
    if not soup.head:
        return html

    if soup.title is None or not (soup.title.string or "").strip():
        if seo and seo.get("title"):
            title = soup.new_tag("title")
            title.string = seo["title"]
            soup.head.insert(0, title)

    def ensure_meta(name: str, content: str, *, prop: str | None = None) -> None:
        if not content:
            return
        if prop:
            existing = soup.find("meta", property=prop)
            if existing:
                existing["content"] = content
                return
            tag = soup.new_tag("meta")
            tag["property"] = prop
            tag["content"] = content
        else:
            existing = soup.find("meta", attrs={"name": name})
            if existing:
                existing["content"] = content
                return
            tag = soup.new_tag("meta")
            tag["name"] = name
            tag["content"] = content
        soup.head.append(tag)

    if seo:
        ensure_meta("description", seo.get("description", ""))
        if seo.get("keywords"):
            ensure_meta("keywords", seo["keywords"])
        if seo.get("robots"):
            ensure_meta("robots", seo["robots"])
        for prop, val in (seo.get("og") or {}).items():
            ensure_meta("", val, prop=prop)
        for name, val in (seo.get("twitter") or {}).items():
            ensure_meta(name, val)
        if seo.get("canonical") and not soup.find("link", rel=re.compile(r"canonical", re.I)):
            link = soup.new_tag("link", rel="canonical", href=seo["canonical"])
            soup.head.append(link)

    if not soup.find("meta", charset=True):
        charset = soup.new_tag("meta", charset="utf-8")
        soup.head.insert(0, charset)

    if not soup.find("meta", attrs={"name": "viewport"}):
        vp = soup.new_tag("meta", attrs={"name": "viewport", "content": "width=device-width, initial-scale=1.0"})
        soup.head.insert(1, vp)

    return str(soup)


def save_page_seo(site_dir: Path, page_slug: str, seo: dict) -> Path:
    out = Path(site_dir) / "seo" / f"{page_slug}.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(seo, indent=2, ensure_ascii=False), encoding="utf-8")
    return out
