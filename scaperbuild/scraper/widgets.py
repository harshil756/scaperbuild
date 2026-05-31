"""Capture JavaScript-rendered widgets (Google reviews, forms) into static HTML."""

from __future__ import annotations

import re
from pathlib import Path

from bs4 import BeautifulSoup

from .utils import normalize_url, relative_path

# Wait for TrustIndex reviews + scroll to hero form & reviews
WIDGET_WAIT_JS = """
async () => {
  const delay = ms => new Promise(r => setTimeout(r, ms));
  const go = sel => {
    const el = document.querySelector(sel);
    if (el) { el.scrollIntoView({ block: 'center', behavior: 'instant' }); return true; }
    return false;
  };
  go('[data-id="37fdbc3f"], [data-id="0b53c03"]');
  await delay(1500);
  go('.elementor-form, [data-id="8c7fc6e"], [data-id="e5afdbe"]');
  await delay(1500);
  document.querySelectorAll('.iti__dropdown-content').forEach(el => el.classList.add('iti__hide'));
  document.querySelectorAll('.iti__country-list').forEach(el => { el.innerHTML = ''; });
  await delay(500);
  go('[data-id="d7e30f8"], .elementor-shortcode, .ti-widget');
  await delay(2500);
  for (let i = 0; i < 120; i++) {
    const reviews = document.querySelectorAll('.ti-review-item').length;
    const ti = document.querySelector('.ti-widget.ti-goog, .ti-widget');
    if (reviews >= 3 || (ti && (ti.outerHTML || '').length > 800)) break;
    await delay(500);
  }
  await delay(2000);
  const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  for (let y = 0; y <= h; y += 180) {
    window.scrollTo(0, y);
    await delay(40);
  }
  window.scrollTo(0, 0);
  await delay(1200);
}
"""

SNAPSHOT_JS = """
() => {
  const snapshots = [];
  const extraUrls = new Set();

  document.querySelectorAll('[data-css-url]').forEach(el => {
    const u = el.getAttribute('data-css-url');
    if (u) extraUrls.add(u);
  });

  const pushTi = (ti, widgetId) => {
    if (!ti || (ti.outerHTML || '').length < 200) return;
    snapshots.push({ widgetId: widgetId || 'd7e30f8', html: ti.outerHTML });
  };

  const seen = new Set();
  document.querySelectorAll('.ti-widget.ti-goog, .ti-widget').forEach(ti => {
    const key = ti.outerHTML.length;
    if (seen.has(key)) return;
    seen.add(key);
    const widget = ti.closest('[data-id]');
    pushTi(ti, widget ? widget.getAttribute('data-id') : 'd7e30f8');
  });

  document.querySelectorAll('.elementor-shortcode').forEach(wrap => {
    const inner = wrap.querySelector('[data-ti-widget-inited]') || wrap;
    const ti = inner.querySelector('.ti-widget.ti-goog') ||
               inner.querySelector('.ti-widget') ||
               inner.querySelector('.ti-reviews-container');
    if (!ti) return;
    const widget = wrap.closest('[data-id]');
    pushTi(ti, widget ? widget.getAttribute('data-id') : null);
  });

  document.querySelectorAll('.elementor-form').forEach((form, i) => {
    if (form.innerHTML.length < 100) return;
    snapshots.push({
      widgetId: 'form-' + i,
      html: form.outerHTML,
      isForm: true,
    });
  });

  return { snapshots, extraUrls: [...extraUrls] };
}
"""


def inject_snapshots(
    html: str, snapshots: list[dict], page_dir: Path, html_path: Path | None = None
) -> str:
    """Replace empty widget placeholders with rendered HTML from browser."""
    if not snapshots:
        return html
    if "ti-widget ti-goog" in html or "ti-review-item" in html:
        print("[+] Google reviews already present in HTML.")
        return html
    soup = BeautifulSoup(html, "lxml")
    injected_reviews = False

    for snap in snapshots:
        if snap.get("isForm"):
            continue
        wid = snap.get("widgetId")
        new_html = snap.get("html", "")
        if not new_html or len(new_html) < 200:
            continue
        injected = False
        if wid:
            w = soup.find(attrs={"data-id": wid})
            if w:
                sc = w.find(class_="elementor-shortcode")
                if sc:
                    sc.clear()
                    frag = BeautifulSoup(new_html, "html.parser")
                    body = frag.body
                    nodes = list(body.contents) if body else list(frag.contents)
                    for child in nodes:
                        sc.append(child)
                    injected = True
                    injected_reviews = True
        if not injected:
            for div in soup.find_all("div", attrs={"data-ti-widget-inited": True}):
                if len(div.get_text(strip=True)) < 50:
                    parent = div.parent if div.parent and "shortcode" in " ".join(
                        div.parent.get("class") or []
                    ) else div
                    target = parent if parent.name == "div" else div
                    target.clear()
                    frag = BeautifulSoup(new_html, "html.parser")
                    body = frag.body
                    nodes = list(body.contents) if body else list(frag.contents)
                    for child in nodes:
                        target.append(child)
                    injected = True
                    injected_reviews = True
                    break

    if injected_reviews:
        print("[+] Injected Google reviews widget into page.")
    return str(soup)


def add_trustindex_css_link(
    html: str,
    css_url: str | None,
    page_dir: Path,
    html_path: Path,
) -> str:
    if not css_url:
        return html
    soup = BeautifulSoup(html, "lxml")
    if not soup.head:
        return html
    href = css_url
    if href.startswith("http"):
        norm = normalize_url(href, css_url)
        from .storage import url_to_local_path

        if norm:
            local = url_to_local_path(norm, page_dir)
            if local.exists():
                href = relative_path(html_path, local)
    link = soup.new_tag("link", rel="stylesheet", href=href, id="trustindex-widget-css")
    soup.head.append(link)
    return str(soup)
