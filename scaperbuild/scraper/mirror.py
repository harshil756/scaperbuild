"""Save every asset the browser loads — exact bytes, same session/cookies."""

from __future__ import annotations

import os
import time
from pathlib import Path
from urllib.parse import urlparse

from playwright.sync_api import BrowserContext, Page, Response, sync_playwright

from .polite import print_polite_notice, wait_between_requests
from .storage import ASSET_TYPES, ASSETS_DIR, url_to_local_path
from .utils import extract_css_urls, is_asset_url, normalize_url
from .widgets import SNAPSHOT_JS, WIDGET_WAIT_JS

USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/120.0.0.0 Safari/537.36"
)

DOM_HARVEST_JS = """
() => {
  const urls = new Set();
  const add = (v) => {
    if (!v || typeof v !== 'string') return;
    const s = v.trim();
    if (!s || s.startsWith('data:') || s.startsWith('blob:') || s.startsWith('javascript:') || s === '#')
      return;
    urls.add(s);
  };
  document.querySelectorAll(
    'link[href], script[src], img, source, video, audio, embed, object, iframe, use, image, ' +
    '[data-src], [data-lazy-src], [data-bg], [data-background], [data-original], [data-css-url]'
  ).forEach(el => {
    ['href','src','data-src','data-lazy-src','data-original','data-bg',
     'data-background','data-css-url','poster'].forEach(a => add(el.getAttribute(a)));
    const ss = el.getAttribute('srcset');
    if (ss) ss.split(',').forEach(p => add(p.trim().split(/\\s+/)[0]));
  });
  document.querySelectorAll('style').forEach(s => {
    const re = /url\\(\\s*['"]?([^'")\\s]+)/gi;
    let m;
    while ((m = re.exec(s.textContent || '')) !== null) add(m[1]);
  });
  document.querySelectorAll('[style]').forEach(el => {
    const re = /url\\(\\s*['"]?([^'")\\s]+)/gi;
    let m;
    while ((m = re.exec(el.getAttribute('style') || '')) !== null) add(m[1]);
  });
  try {
    performance.getEntriesByType('resource').forEach(r => add(r.name));
  } catch (e) {}
  return [...urls];
}
"""


class PlaywrightMirror:
    """Mirror one page: capture rendered HTML + all assets via Playwright."""

    def __init__(
        self,
        url: str,
        page_dir: Path,
        wait_ms: int = 15000,
        timeout_ms: int = 180000,
        headed: bool | None = None,
    ):
        self.url = url
        self.page_dir = page_dir
        self.wait_ms = wait_ms
        self.timeout_ms = timeout_ms
        if headed is None:
            headed = bool(os.environ.get("DISPLAY"))
        self.headed = headed
        self.url_map: dict[str, Path] = {}
        self.failed: list[tuple[str, str]] = []
        self._pending_responses: list[Response] = []
        self.widget_snapshots: list[dict] = []
        self.trustindex_css_url: str | None = None

    def capture(self) -> tuple[str, set[str]]:
        all_urls: set[str] = set()
        print_polite_notice(self.url)

        with sync_playwright() as p:
            mode = "visible browser" if self.headed else "headless"
            print(f"[*] Browser: {mode}")
            browser = p.chromium.launch(
                headless=not self.headed,
                args=["--disable-blink-features=AutomationControlled"],
            )
            context = browser.new_context(
                user_agent=USER_AGENT,
                viewport={"width": 1920, "height": 1080},
                locale="en-AU",
                ignore_https_errors=True,
            )
            page = context.new_page()
            page.on("response", self._queue_response)
            self._load_page(page)
            self._wait_widgets(page)
            html = page.content()
            snap = page.evaluate(SNAPSHOT_JS)
            self.widget_snapshots = snap.get("snapshots", [])
            for u in snap.get("extraUrls", []):
                n = normalize_url(u, self.url)
                if n:
                    all_urls.add(n)
                    if "trustindex" in n and ".css" in n:
                        self.trustindex_css_url = n
            self._flush_responses()
            dom_urls = page.evaluate(DOM_HARVEST_JS)
            self._flush_responses()
            all_urls.update(self.url_map.keys())
            for raw in dom_urls:
                n = normalize_url(raw, self.url)
                if n:
                    all_urls.add(n)
            self._fetch_missing(context, all_urls)
            self._css_deep_fetch(context, all_urls)
            browser.close()

        if self.widget_snapshots:
            print(f"[+] Captured {len(self.widget_snapshots)} live widget(s).")
        return html, all_urls

    def _queue_response(self, response: Response) -> None:
        if self._should_capture(response):
            self._pending_responses.append(response)

    def _should_capture(self, response: Response) -> bool:
        try:
            if response.status < 200 or response.status >= 400:
                return False
            url = response.url
            if not url.startswith(("http://", "https://")):
                return False
            ct = (response.headers.get("content-type") or "").lower()
            if "text/html" in ct:
                norm_page = normalize_url(self.url, self.url)
                norm_resp = normalize_url(url, self.url)
                if norm_resp and norm_page and norm_resp != norm_page:
                    return False
            rtype = response.request.resource_type
            if rtype in ("stylesheet", "script", "image", "font", "media"):
                return True
            if rtype in ("xhr", "fetch", "other"):
                return is_asset_url(url, ct) or "json" in ct or "javascript" in ct
            return is_asset_url(url, ct)
        except Exception:
            return False

    def _flush_responses(self) -> None:
        for response in self._pending_responses:
            url = normalize_url(response.url, self.url)
            if not url or url in self.url_map:
                continue
            try:
                body = response.body()
                ct = response.headers.get("content-type", "")
                self._write_asset(url, body, ct)
            except Exception as e:
                self.failed.append((url, str(e)))
        self._pending_responses.clear()

    def _write_asset(self, url: str, body: bytes, content_type: str = "") -> None:
        path = url_to_local_path(url, self.page_dir, content_type)
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(body)
        self.url_map[url] = path

    def _fetch_missing(self, context: BrowserContext, known: set[str]) -> None:
        missing = [u for u in known if u not in self.url_map]
        if not missing:
            return
        print(f"[*] Fetching {len(missing)} extra assets...")
        api = context.request
        for url in missing:
            if url in self.url_map:
                continue
            wait_between_requests()
            for attempt in range(3):
                try:
                    resp = api.get(
                        url,
                        timeout=45000,
                        headers={"Referer": self.url, "User-Agent": USER_AGENT},
                    )
                    if resp.status >= 200 and resp.status < 400:
                        ct = resp.headers.get("content-type", "")
                        if "text/html" in ct.lower():
                            norm = normalize_url(url, self.url)
                            norm_page = normalize_url(self.url, self.url)
                            if norm != norm_page:
                                break
                        self._write_asset(url, resp.body(), ct)
                        known.add(url)
                        break
                    self.failed.append((url, f"HTTP {resp.status}"))
                    break
                except Exception as e:
                    if attempt == 2:
                        self.failed.append((url, str(e)))
                    time.sleep(0.3)

    def _css_deep_fetch(self, context: BrowserContext, known: set[str]) -> None:
        for _ in range(8):
            new_urls: set[str] = set()
            for path in list(self.url_map.values()):
                if path.suffix.lower() != ".css" and ".css" not in path.name.lower():
                    continue
                try:
                    text = path.read_text(encoding="utf-8", errors="replace")
                except Exception:
                    continue
                base = self._url_for_path(path)
                for raw in extract_css_urls(text):
                    n = normalize_url(raw, base)
                    if n and n not in self.url_map:
                        new_urls.add(n)
            if not new_urls:
                break
            known.update(new_urls)
            before = len(self.url_map)
            self._fetch_missing(context, new_urls | known)
            if len(self.url_map) == before:
                break

    def _url_for_path(self, path: Path) -> str:
        for url, p in self.url_map.items():
            if p == path:
                return url
        for folder in ASSET_TYPES:
            try:
                path.relative_to(self.page_dir / ASSETS_DIR / folder)
                return self.url
            except ValueError:
                continue
        return self.url

    def _load_page(self, page: Page) -> None:
        print("[*] Loading page in Chromium...")
        page.goto(self.url, wait_until="domcontentloaded", timeout=self.timeout_ms)
        try:
            page.wait_for_load_state("networkidle", timeout=60000)
        except Exception:
            pass
        page.wait_for_timeout(self.wait_ms)
        for selector in ("header", "main", "body"):
            try:
                page.wait_for_selector(selector, timeout=8000)
                break
            except Exception:
                continue
        print("[+] Page rendered.")

    def _wait_widgets(self, page: Page) -> None:
        print("[*] Waiting for lazy images and JS widgets...")
        page.evaluate(WIDGET_WAIT_JS)
        try:
            page.wait_for_load_state("networkidle", timeout=30000)
        except Exception:
            pass
        page.wait_for_timeout(2000)
        print("[+] Widgets ready.")
