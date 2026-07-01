"""Analyze entire scraped website — structure, SEO, navigation, content."""

from __future__ import annotations

import json
import re
import urllib.request
from pathlib import Path
from urllib.parse import urljoin, urlparse

from bs4 import BeautifulSoup

from .site_analyze import analyze_html
from .site_crawler import discover_menu_links, discover_sitemap_urls
from .storage import load_manifest, url_to_page_slug
from .utils import normalize_url

DOC_EXT = re.compile(r"\.(pdf|docx?|xlsx?|pptx?|zip|rar)$", re.I)


def _text(s: str | None, limit: int = 500) -> str:
    if not s:
        return ""
    t = re.sub(r"\s+", " ", s).strip()
    return t[:limit] if limit else t


def fetch_robots_txt(base_url: str) -> dict:
    base = base_url.rstrip("/")
    result = {"exists": False, "raw": "", "sitemaps": [], "disallow": [], "allow": []}
    try:
        req = urllib.request.Request(
            f"{base}/robots.txt",
            headers={"User-Agent": "Mozilla/5.0 (compatible; SiteArchitecture/1.0)"},
        )
        with urllib.request.urlopen(req, timeout=15) as resp:
            raw = resp.read().decode("utf-8", errors="replace")
        result["exists"] = True
        result["raw"] = raw
        for line in raw.splitlines():
            line = line.strip()
            if line.lower().startswith("sitemap:"):
                result["sitemaps"].append(line.split(":", 1)[1].strip())
            elif line.lower().startswith("disallow:"):
                result["disallow"].append(line.split(":", 1)[1].strip())
            elif line.lower().startswith("allow:"):
                result["allow"].append(line.split(":", 1)[1].strip())
    except Exception:
        pass
    return result


def _extract_seo(soup: BeautifulSoup, page_url: str) -> dict:
    title = _text(soup.title.string if soup.title else "")
    desc_tag = soup.find("meta", attrs={"name": re.compile("^description$", re.I)})
    robots_tag = soup.find("meta", attrs={"name": re.compile("^robots$", re.I)})
    canonical = soup.find("link", rel=re.compile("^canonical$", re.I))

    og: dict[str, str] = {}
    for m in soup.find_all("meta", property=True):
        prop = m.get("property", "")
        if prop.startswith("og:") or prop.startswith("article:"):
            og[prop] = m.get("content", "")

    twitter: dict[str, str] = {}
    for m in soup.find_all("meta", attrs={"name": re.compile("^twitter:", re.I)}):
        twitter[m["name"]] = m.get("content", "")

    json_ld: list = []
    for script in soup.find_all("script", type="application/ld+json"):
        try:
            json_ld.append(json.loads(script.string or "{}"))
        except json.JSONDecodeError:
            pass

    return {
        "title": title,
        "description": desc_tag.get("content", "") if desc_tag else "",
        "robots": robots_tag.get("content", "") if robots_tag else "",
        "canonical": canonical.get("href", page_url) if canonical else page_url,
        "og": og,
        "twitter": twitter,
        "jsonLd": json_ld,
    }


def _extract_headings(soup: BeautifulSoup) -> dict[str, list[str]]:
    out: dict[str, list[str]] = {}
    for level in range(1, 7):
        tag = f"h{level}"
        texts = [_text(el.get_text()) for el in soup.find_all(tag) if _text(el.get_text())]
        if texts:
            out[tag] = texts
    return out


def _extract_media(soup: BeautifulSoup, page_url: str) -> dict:
    images, videos, documents = [], [], []
    for img in soup.find_all("img"):
        src = img.get("src") or img.get("data-src") or ""
        if src:
            images.append({"src": normalize_url(src, page_url) or src, "alt": img.get("alt", "")})
    for vid in soup.find_all("video"):
        src = vid.get("src") or ""
        poster = vid.get("poster") or ""
        sources = [normalize_url(s.get("src", ""), page_url) or s.get("src") for s in vid.find_all("source")]
        videos.append({"src": normalize_url(src, page_url) or src, "poster": poster, "sources": sources})
    for a in soup.find_all("a", href=True):
        href = a["href"]
        if DOC_EXT.search(href):
            documents.append({"href": normalize_url(href, page_url) or href, "label": _text(a.get_text(), 120)})
    return {"images": images, "videos": videos, "documents": documents}


def _extract_forms(soup: BeautifulSoup) -> list[dict]:
    forms = []
    for form in soup.find_all("form"):
        fields = []
        for inp in form.find_all(["input", "textarea", "select"]):
            fields.append(
                {
                    "tag": inp.name,
                    "type": inp.get("type", ""),
                    "name": inp.get("name", ""),
                    "id": inp.get("id", ""),
                    "placeholder": inp.get("placeholder", ""),
                }
            )
        forms.append(
            {
                "action": form.get("action", ""),
                "method": (form.get("method") or "get").lower(),
                "id": form.get("id", ""),
                "fields": fields,
            }
        )
    return forms


def _extract_ctas(soup: BeautifulSoup) -> list[dict]:
    ctas = []
    selectors = [
        "a.btn", "a.button", "button", ".cta a", "a.cta",
        "[class*='btn-']", ".elementor-button", ".wp-block-button__link",
    ]
    seen: set[str] = set()
    for sel in selectors:
        for el in soup.select(sel):
            label = _text(el.get_text(), 80)
            href = el.get("href", "") if el.name == "a" else ""
            key = f"{label}|{href}"
            if label and key not in seen:
                seen.add(key)
                ctas.append({"label": label, "href": href, "tag": el.name})
    return ctas[:30]


def _extract_faqs(soup: BeautifulSoup) -> list[dict]:
    faqs = []
    for script in soup.find_all("script", type="application/ld+json"):
        try:
            data = json.loads(script.string or "{}")
            items = []
            if isinstance(data, dict) and data.get("@type") == "FAQPage":
                items = data.get("mainEntity", [])
            elif isinstance(data, list):
                for block in data:
                    if isinstance(block, dict) and block.get("@type") == "FAQPage":
                        items.extend(block.get("mainEntity", []))
            for item in items:
                if isinstance(item, dict):
                    faqs.append(
                        {
                            "question": item.get("name", ""),
                            "answer": _text(
                                item.get("acceptedAnswer", {}).get("text", ""), 1000
                            ),
                        }
                    )
        except json.JSONDecodeError:
            pass
    for details in soup.select("details"):
        summary = details.find("summary")
        if summary:
            faqs.append(
                {
                    "question": _text(summary.get_text()),
                    "answer": _text(details.get_text().replace(summary.get_text(), ""), 1000),
                }
            )
    return faqs


def _extract_breadcrumbs(soup: BeautifulSoup) -> list[dict]:
    crumbs = []
    for nav in soup.select(
        "[class*='breadcrumb'] a, nav.breadcrumb a, .yoast-breadcrumb a, "
        "[aria-label='breadcrumb'] a, ol.breadcrumb a"
    ):
        href = nav.get("href", "")
        crumbs.append({"label": _text(nav.get_text()), "href": href})
    if not crumbs:
        for li in soup.select("[class*='breadcrumb'] li, .breadcrumb li"):
            a = li.find("a")
            if a:
                crumbs.append({"label": _text(a.get_text()), "href": a.get("href", "")})
    return crumbs


def _extract_nav_links(soup: BeautifulSoup, page_url: str, host: str) -> list[dict]:
    links = []
    seen: set[str] = set()
    for sel in (
        "nav a[href]", "header a[href]", ".main-navigation a[href]",
        ".elementor-nav-menu a[href]", "[role='navigation'] a[href]",
    ):
        for a in soup.select(sel):
            href = a.get("href", "").strip()
            abs_u = normalize_url(href, page_url)
            if not abs_u or not _same_host(abs_u, host):
                continue
            slug = url_to_page_slug(abs_u)
            label = _text(a.get_text(), 80)
            if label and slug not in seen:
                seen.add(slug)
                links.append({"label": label, "href": abs_u, "slug": slug})
    return links


def _extract_footer_links(soup: BeautifulSoup, page_url: str, host: str) -> list[dict]:
    links = []
    seen: set[str] = set()
    for a in soup.select("footer a[href], .site-footer a[href], #footer a[href]"):
        href = a.get("href", "").strip()
        abs_u = normalize_url(href, page_url)
        if not abs_u or not _same_host(abs_u, host):
            continue
        slug = url_to_page_slug(abs_u)
        label = _text(a.get_text(), 80)
        if label and slug not in seen:
            seen.add(slug)
            links.append({"label": label, "href": abs_u, "slug": slug})
    return links


def _same_host(url: str, host: str) -> bool:
    return urlparse(url).netloc.replace("www.", "") == host.replace("www.", "")


def _classify_page(url: str, soup: BeautifulSoup, slug: str) -> str:
    path = urlparse(url).path.lower()
    if slug == "home" or path in ("", "/"):
        return "landing"
    if any(x in path for x in ("/blog/", "/news/", "/post/", "/article/")):
        return "blog"
    if any(x in path for x in ("/category/", "/categories/", "/tag/")):
        return "category"
    if soup.find("article") or soup.find(class_=re.compile("post|blog|entry", re.I)):
        return "blog"
    og_type = ""
    og = soup.find("meta", property="og:type")
    if og:
        og_type = og.get("content", "")
    if og_type == "article":
        return "blog"
    return "page"


def _infer_categories(url: str, all_slugs: set[str]) -> list[str]:
    path = urlparse(url).path.strip("/").split("/")
    cats = []
    if len(path) > 1:
        parent = path[0]
        parent_slug = url_to_page_slug(f"https://x/{parent}")
        if parent_slug in all_slugs:
            cats.append(parent_slug)
    return cats


def analyze_page(html: str, page_url: str, host: str, all_slugs: set[str]) -> dict:
    soup = BeautifulSoup(html, "lxml")
    slug = url_to_page_slug(page_url)
    stats = analyze_html(html, page_url)
    seo = _extract_seo(soup, page_url)
    body = soup.find("body")
    text_content = _text(body.get_text() if body else "", 5000)

    return {
        "url": page_url,
        "slug": slug,
        "route": "/" if slug == "home" else f"/{slug}",
        "path": urlparse(page_url).path or "/",
        "type": _classify_page(page_url, soup, slug),
        "language": stats.get("language", ""),
        "title": seo["title"],
        "seo": seo,
        "headings": _extract_headings(soup),
        "content": {
            "text_excerpt": text_content[:500],
            "word_count": len(text_content.split()),
            **_extract_media(soup, page_url),
        },
        "forms": _extract_forms(soup),
        "ctas": _extract_ctas(soup),
        "faqs": _extract_faqs(soup),
        "breadcrumbs": _extract_breadcrumbs(soup),
        "internal_links": [
            url_to_page_slug(normalize_url(a["href"], page_url) or "")
            for a in soup.find_all("a", href=True)
            if normalize_url(a["href"], page_url) and _same_host(normalize_url(a["href"], page_url) or "", host)
        ],
        "categories": _infer_categories(page_url, all_slugs),
        "stats": stats,
    }


def analyze_site_architecture(
    site_dir: Path,
    base_url: str | None = None,
    scrape_mode: str = "full",
) -> dict:
    """Build site architecture from scraped mirror only (no extra crawling in single mode)."""
    site_dir = Path(site_dir)
    manifest = load_manifest(site_dir)
    pages_meta = manifest.get("pages", {})

    if not pages_meta:
        for folder in site_dir.iterdir():
            if folder.is_dir() and (folder / f"{folder.name}.html").exists():
                slug = folder.name
                html_file = f"{slug}/{slug}.html" if slug != "home" else "home/home.html"
                if slug == "home" and (folder / "home.html").exists():
                    html_file = "home/home.html"
                pages_meta[f"local://{slug}"] = {"html": html_file, "slug": slug}

    if not base_url:
        for url in pages_meta:
            if url.startswith("http"):
                base_url = f"{urlparse(url).scheme}://{urlparse(url).netloc}"
                break
    base_url = base_url or "https://example.com"
    host = urlparse(base_url).netloc

    all_slugs = {info.get("slug") or Path(info["html"]).parts[0] for info in pages_meta.values()}

    single_page = scrape_mode == "single"

    robots = fetch_robots_txt(base_url) if not single_page else {"exists": False, "raw": "", "sitemaps": [], "disallow": [], "allow": []}
    if single_page:
        sitemap_list = []
    else:
        sitemap_urls = discover_sitemap_urls(base_url, host)
        sitemap_list = sorted(sitemap_urls)

    analyzed_pages: dict[str, dict] = {}
    link_graph: dict[str, list[str]] = {}
    home_html = ""

    for page_url, info in pages_meta.items():
        html_rel = info.get("html", "")
        html_path = site_dir / html_rel
        if not html_path.exists():
            continue
        html = html_path.read_text(encoding="utf-8", errors="replace")
        real_url = page_url if page_url.startswith("http") else urljoin(base_url, info.get("path", f"/{info.get('slug', '')}/"))
        page = analyze_page(html, real_url, host, all_slugs)
        page["html"] = html_rel
        analyzed_pages[page["slug"]] = page
        link_graph[page["slug"]] = sorted(set(page["internal_links"]) & all_slugs)
        if page["slug"] == "home":
            home_html = html

    navigation = {"header": [], "footer": [], "primary": []}
    if home_html:
        soup = BeautifulSoup(home_html, "lxml")
        navigation["header"] = _extract_nav_links(soup, base_url, host)
        navigation["footer"] = _extract_footer_links(soup, base_url, host)
        navigation["primary"] = discover_menu_links(home_html, base_url, host)
        navigation["primary"] = [
            {"label": url_to_page_slug(u).replace("-", " ").title(), "href": u, "slug": url_to_page_slug(u)}
            for u in sorted(navigation["primary"])
        ]

    hierarchy: dict[str, dict] = {}
    for slug, page in analyzed_pages.items():
        for cat in page.get("categories", []):
            hierarchy.setdefault(cat, {"slug": cat, "children": []})
            if slug not in hierarchy[cat]["children"]:
                hierarchy[cat]["children"].append(slug)

    blog_pages = [s for s, p in analyzed_pages.items() if p["type"] == "blog"]
    category_pages = [s for s, p in analyzed_pages.items() if p["type"] == "category"]

    architecture = {
        "base_url": base_url,
        "host": host,
        "scrape_mode": scrape_mode,
        "language": next((p["language"] for p in analyzed_pages.values() if p.get("language")), "en"),
        "page_count": len(analyzed_pages),
        "robots": robots,
        "sitemap": {"urls": sitemap_list, "count": len(sitemap_list)},
        "navigation": navigation,
        "hierarchy": hierarchy,
        "pages": analyzed_pages,
        "link_graph": link_graph,
        "collections": {
            "blog": blog_pages,
            "categories": category_pages,
            "landing": [s for s, p in analyzed_pages.items() if p["type"] == "landing"],
        },
    }

    out_path = site_dir / "site_architecture.json"
    out_path.write_text(json.dumps(architecture, indent=2, ensure_ascii=False), encoding="utf-8")
    return architecture
