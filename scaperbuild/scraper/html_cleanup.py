"""Clean scraped HTML before save — remove widget bloat, keep layout."""

from __future__ import annotations

from bs4 import BeautifulSoup, Comment


def clean_scraped_html(html: str) -> str:
    """
    Fix common scrape artifacts without changing visible layout.
    - Collapse intl-tel-input country list (huge DOM bloat)
    - Remove HTML comments
    - Strip analytics iframes that break offline view
    """
    soup = BeautifulSoup(html, "lxml")

    for c in soup.find_all(string=lambda t: isinstance(t, Comment)):
        c.extract()

    # Phone field: keep flag + input, drop 200+ country <li> nodes
    for ul in soup.find_all("ul", class_=lambda c: c and "iti__country-list" in c):
        ul.clear()
        ul["aria-hidden"] = "true"

    for dropdown in soup.find_all(class_=lambda c: c and "iti__dropdown-content" in c):
        dropdown.decompose()

    # Offline clone: drop third-party tracking iframes
    for iframe in soup.find_all("iframe"):
        src = iframe.get("src") or ""
        if any(
            x in src
            for x in (
                "googletagmanager",
                "doubleclick",
                "facebook",
                "clarity.ms",
            )
        ):
            iframe.decompose()

    # Playwright often injects the same analytics script multiple times
    seen_src: set[str] = set()
    for script in soup.find_all("script", src=True):
        src = script.get("src", "").strip()
        if not src:
            continue
        if src in seen_src:
            script.decompose()
        else:
            seen_src.add(src)

    return str(soup)
