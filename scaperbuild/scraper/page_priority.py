"""Scrape order: main pages → blog listings → blog post details."""

from __future__ import annotations

import re
from urllib.parse import urlparse

# Blog section roots (listing / archive pages)
BLOG_ROOT_SEGMENTS = frozenset(
    {
        "blog",
        "news",
        "articles",
        "insights",
        "resources",
        "updates",
        "posts",
        "stories",
        "journal",
    }
)

ARCHIVE_SEGMENTS = frozenset(
    {"category", "categories", "tag", "tags", "archive", "author", "page"}
)

DATE_PATH_RE = re.compile(r"^/(\d{4})/(\d{1,2})(/|$)")

# tier 0 = main, 1 = blog listing/archive, 2 = blog post detail
TIER_MAIN = 0
TIER_BLOG = 1
TIER_BLOG_POST = 2

KIND_LABELS = {
    "main": "main",
    "blog": "blog",
    "blog_post": "blog post",
}


def _path_segments(url: str) -> list[str]:
    return [s for s in urlparse(url).path.lower().strip("/").split("/") if s]


def kind_from_url(url: str) -> str:
    """Classify URL as main, blog (listing/archive), or blog_post (article detail)."""
    path = urlparse(url).path.lower()
    segs = _path_segments(url)
    if not segs:
        return "main"

    if DATE_PATH_RE.match(path):
        return "blog_post"

    if segs[0] in ARCHIVE_SEGMENTS:
        return "blog"

    if len(segs) == 1 and segs[0] in BLOG_ROOT_SEGMENTS:
        return "blog"

    if segs[0] in BLOG_ROOT_SEGMENTS:
        if len(segs) == 1:
            return "blog"
        if segs[1] in ARCHIVE_SEGMENTS:
            return "blog"
        # /blog/my-post-slug or /blog/2024/title
        return "blog_post"

    if any(x in path for x in ("/category/", "/categories/", "/tag/", "/tags/", "/archive/")):
        return "blog"

    if any(x in path for x in ("/post/", "/article/", "/entry/")):
        return "blog_post"

    return "main"


def tier_for_kind(kind: str) -> int:
    if kind == "blog_post":
        return TIER_BLOG_POST
    if kind == "blog":
        return TIER_BLOG
    return TIER_MAIN


def classify_url(
    url: str,
    *,
    menu: set[str] | None = None,
    footer: set[str] | None = None,
    wp_pages: set[str] | None = None,
    wp_posts: set[str] | None = None,
    start: str | None = None,
) -> tuple[int, str]:
    """
    Scrape priority tier (lower = earlier) and kind label.
    Main nav pages first; blog index second; post details last.
    """
    menu = menu or set()
    footer = footer or set()
    wp_pages = wp_pages or set()
    wp_posts = wp_posts or set()

    if start and url == start:
        return TIER_MAIN, "main"

    if url in wp_posts:
        return TIER_BLOG_POST, "blog_post"
    if url in wp_pages:
        return TIER_MAIN, "main"

    path_kind = kind_from_url(url)

    # Menu/footer: main site pages first; blog index in nav → tier blog; posts → last
    if url in menu or url in footer:
        if path_kind == "blog_post":
            return TIER_BLOG_POST, "blog_post"
        if path_kind == "blog":
            return TIER_BLOG, "blog"
        return TIER_MAIN, "main"

    tier = tier_for_kind(path_kind)
    return tier, path_kind


def sort_urls_by_scrape_tier(
    urls: list[str],
    *,
    menu: set[str],
    footer: set[str],
    wp_pages: set[str],
    wp_posts: set[str],
    start: str,
) -> list[tuple[str, int, str]]:
    """Stable sort: main → blog → blog_post (keeps discovery order within each group)."""
    keyed: list[tuple[int, int, str, str]] = []
    for i, url in enumerate(urls):
        tier, kind = classify_url(
            url,
            menu=menu,
            footer=footer,
            wp_pages=wp_pages,
            wp_posts=wp_posts,
            start=start,
        )
        keyed.append((tier, i, url, kind))
    keyed.sort(key=lambda x: (x[0], x[1]))
    return [(url, tier, kind) for tier, _i, url, kind in keyed]


def insert_url_by_tier(queue: list[str], url: str, tier: int, tiers: dict[str, int]) -> None:
    """Insert URL into queue before any URL with a worse (higher) tier."""
    tiers[url] = tier
    insert_at = len(queue)
    for i, existing in enumerate(queue):
        if tiers.get(existing, TIER_MAIN) > tier:
            insert_at = i
            break
    queue.insert(insert_at, url)
