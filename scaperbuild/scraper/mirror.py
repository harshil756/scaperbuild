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
from .widgets import SNAPSHOT_JS, SPA_HYDRATION_WAIT_JS, widget_wait_js

TRACKER_HOST_FRAGMENTS = (
    "googletagmanager.com",
    "google-analytics.com",
    "googleadservices.com",
    "doubleclick.net",
    "facebook.net",
    "connect.facebook.net",
    "hotjar.com",
    "clarity.ms",
    "segment.io",
    "segment.com",
    "mixpanel.com",
    "fullstory.com",
    "mouseflow.com",
    "crazyegg.com",
    "optimizely.com",
)

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
  const attrs = [
    'href','src','data-src','data-lazy-src','data-original','data-bg',
    'data-background','data-css-url','data-video-url','data-bg-video',
    'data-background-video','data-lazyload','data-thumb','data-retina','poster'
  ];
  document.querySelectorAll(
    'link[href], script[src], img, source, video, audio, embed, object, iframe, use, image, ' +
    '[data-src], [data-lazy-src], [data-bg], [data-background], [data-original], ' +
    '[data-css-url], [data-settings], [data-video-url], [data-bg-video]'
  ).forEach(el => {
    attrs.forEach(a => add(el.getAttribute(a)));
    const ss = el.getAttribute('srcset');
    if (ss) ss.split(',').forEach(p => add(p.trim().split(/\\s+/)[0]));
    const ds = el.getAttribute('data-settings');
    if (ds) {
      const decoded = ds.replace(/&quot;/g,'"').replace(/&amp;/g,'&');
      const re = /https?:\\/\\/[^"'\\s<>]+/gi;
      let m;
      while ((m = re.exec(decoded)) !== null) add(m[0]);
    }
    try {
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none') {
        const re = /url\\(\\s*['"]?([^'")\\s]+)/gi;
        let m;
        while ((m = re.exec(bg)) !== null) add(m[1]);
      }
    } catch (e) {}
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
  document.querySelectorAll('video source, audio source').forEach(el => {
    add(el.getAttribute('src'));
    const ss = el.getAttribute('srcset');
    if (ss) ss.split(',').forEach(p => add(p.trim().split(/\\s+/)[0]));
  });
  try {
    performance.getEntriesByType('resource').forEach(r => add(r.name));
  } catch (e) {}
  return [...urls];
}
"""


MATERIALIZE_DOM_JS = """
() => {
  try {
    if (typeof lazyloadRunObserver === 'function') lazyloadRunObserver();
  } catch (e) {}
  document.querySelectorAll('.e-con.e-parent:not(.e-lazyloaded)').forEach(el => {
    el.classList.add('e-lazyloaded');
  });
  document.querySelectorAll('[data-bg], [data-background]').forEach(el => {
    const url = el.getAttribute('data-bg') || el.getAttribute('data-background');
    if (url && !url.startsWith('data:')) {
      el.style.backgroundImage = 'url("' + url + '")';
      if (!el.style.backgroundSize) el.style.backgroundSize = 'cover';
      if (!el.style.backgroundPosition) el.style.backgroundPosition = 'center';
      if (!el.style.backgroundRepeat) el.style.backgroundRepeat = 'no-repeat';
    }
    el.classList.add('e-lazyloaded');
  });
  document.querySelectorAll('.e-con.e-parent, .elementor-section').forEach(el => {
    try {
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none' && (!el.style.backgroundImage || el.style.backgroundImage === 'none')) {
        el.style.backgroundImage = bg;
      }
    } catch (e) {}
  });
  document.querySelectorAll('img[data-src], img[data-lazy-src], img[data-original]').forEach(img => {
    const lazy = img.getAttribute('data-src') || img.getAttribute('data-lazy-src') || img.getAttribute('data-original');
    const src = img.getAttribute('src') || '';
    if (lazy && (!src || src.indexOf('data:image') === 0 || src.length < 12)) {
      img.setAttribute('src', lazy);
    }
  });
  document.querySelectorAll('.swiper-slide, .elementor-slide, .slick-slide, .rev-slide').forEach(slide => {
    slide.style.opacity = '1';
    slide.style.visibility = 'visible';
    const bgEl = slide.querySelector('.swiper-slide-bg, .elementor-slide-bg, .slide-bg, .rev-slidebg');
    if (bgEl) {
      try {
        const bg = getComputedStyle(bgEl).backgroundImage;
        if (bg && bg !== 'none') bgEl.style.backgroundImage = bg;
      } catch (e) {}
    }
    try {
      const bg = getComputedStyle(slide).backgroundImage;
      if (bg && bg !== 'none') slide.style.backgroundImage = bg;
    } catch (e) {}
  });
  document.querySelectorAll('.swiper-slide-image, .elementor-carousel-image').forEach(img => {
    const lazy = img.getAttribute('data-src') || img.getAttribute('data-lazy-src');
    if (lazy) img.setAttribute('src', lazy);
  });
  document.querySelectorAll('.elementor-background-slideshow__slide').forEach((el, i) => {
    try {
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none') {
        el.style.backgroundImage = bg;
        el.style.opacity = i === 0 ? '1' : '0';
      }
    } catch (e) {}
  });
  document.querySelectorAll('video.elementor-background-video-hosted, .race-hero video').forEach(v => {
    v.setAttribute('autoplay', '');
    v.setAttribute('muted', '');
    v.setAttribute('playsinline', '');
    try { v.play(); } catch (e) {}
  });
  try {
    if (typeof AOS !== 'undefined' && AOS.refresh) AOS.refresh();
  } catch (e) {}
  try {
    if (window.elementorFrontend && elementorFrontend.elementsHandler && elementorFrontend.elementsHandler.runReadyTrigger) {
      elementorFrontend.elementsHandler.runReadyTrigger();
    }
  } catch (e) {}
  return true;
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
            html, all_urls = self._capture_in_context(context)
            browser.close()

        if self.widget_snapshots:
            print(f"[+] Captured {len(self.widget_snapshots)} live widget(s).")
        return html, all_urls

    def capture_in_context(self, context: BrowserContext) -> tuple[str, set[str]]:
        """Capture using an existing browser context (reuse across pages)."""
        self.url_map = {}
        self.failed = []
        self._pending_responses = []
        self.widget_snapshots = []
        self.trustindex_css_url = None
        return self._capture_in_context(context)

    def _capture_in_context(self, context: BrowserContext) -> tuple[str, set[str]]:
        all_urls: set[str] = set()
        self._setup_routes(context)
        page = context.new_page()
        page.on("response", self._queue_response)
        self._load_page(page)
        self._wait_widgets(page)
        try:
            page.evaluate(MATERIALIZE_DOM_JS)
            page.wait_for_timeout(800)
        except Exception:
            pass
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
        self.nav_discovery = {}
        try:
            from .site_crawler import harvest_nav_from_page

            self.nav_discovery = harvest_nav_from_page(page, self.url)
        except Exception:
            pass
        self._fetch_missing(context, all_urls)
        self._css_deep_fetch(context, all_urls)
        page.close()
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
                if "_next/" in url or "/static/" in url:
                    return is_asset_url(url, ct) or "json" in ct or "javascript" in ct
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
        from .utils import extension_from_bytes, extension_from_content_type

        path = url_to_local_path(url, self.page_dir, content_type)
        if path.suffix == ".bin":
            better = extension_from_content_type(content_type) or extension_from_bytes(body)
            if better:
                path = path.with_suffix(better)
            else:
                folder = path.parent.name
                fallback = {"css": ".css", "js": ".js", "fonts": ".woff2"}.get(folder)
                if fallback:
                    path = path.with_suffix(fallback)
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(body)
        self.url_map[url] = path
        try:
            from .telemetry_hook import report_asset_saved

            folder = path.parent.name if path.parent.name in ("css", "js", "images", "videos", "fonts", "icons") else "assets"
            report_asset_saved(path.name, len(body), folder)
        except Exception:
            pass

    def _setup_routes(self, context: BrowserContext) -> None:
        try:
            from .speed import get_speed

            if not get_speed().block_trackers:
                return
        except Exception:
            return

        def _handler(route):
            url = route.request.url.lower()
            if any(t in url for t in TRACKER_HOST_FRAGMENTS):
                return route.abort()
            return route.continue_()

        try:
            context.route("**/*", _handler)
        except Exception:
            pass

    def _fetch_missing(self, context: BrowserContext, known: set[str]) -> None:
        missing = [u for u in known if u not in self.url_map]
        if not missing:
            return
        print(f"[*] Fetching {len(missing)} extra assets...")
        try:
            from .speed import get_speed

            workers = get_speed().parallel_assets
        except Exception:
            workers = 4

        if workers > 1 and len(missing) > 3:
            self._fetch_missing_parallel(context, missing, workers)
            return

        api = context.request
        for url in missing:
            if url in self.url_map:
                continue
            wait_between_requests()
            self._fetch_one(api, url)

    def _fetch_one(self, api, url: str) -> None:
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
                    return
                self.failed.append((url, f"HTTP {resp.status}"))
                return
            except Exception as e:
                if attempt == 2:
                    self.failed.append((url, str(e)))
                time.sleep(0.15)

    def _fetch_missing_parallel(
        self, context: BrowserContext, missing: list[str], workers: int
    ) -> None:
        import urllib.error
        import urllib.request
        from concurrent.futures import ThreadPoolExecutor, as_completed

        def worker(url: str) -> tuple[str, bytes | None, str, str | None]:
            for attempt in range(2):
                try:
                    req = urllib.request.Request(
                        url,
                        headers={"Referer": self.url, "User-Agent": USER_AGENT},
                    )
                    with urllib.request.urlopen(req, timeout=25) as resp:
                        body = resp.read()
                        ct = resp.headers.get("Content-Type", "")
                        if "text/html" in ct.lower():
                            norm = normalize_url(url, self.url)
                            norm_page = normalize_url(self.url, self.url)
                            if norm != norm_page:
                                return url, None, ct, "skip-html"
                        return url, body, ct, None
                except Exception as e:
                    if attempt == 1:
                        return url, None, "", str(e)
            return url, None, "", "failed"

        with ThreadPoolExecutor(max_workers=workers) as pool:
            futures = {pool.submit(worker, u): u for u in missing if u not in self.url_map}
            for fut in as_completed(futures):
                url, body, ct, err = fut.result()
                if body is not None:
                    self._write_asset(url, body, ct)
                elif err and err not in ("skip-html",):
                    self.failed.append((url, err or "failed"))

    def _css_deep_fetch(self, context: BrowserContext, known: set[str]) -> None:
        try:
            from .speed import get_speed

            rounds = get_speed().css_fetch_rounds
        except Exception:
            rounds = 8
        for _ in range(rounds):
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
            from .speed import get_speed

            if get_speed().use_networkidle:
                page.wait_for_load_state("networkidle", timeout=25000)
            else:
                page.wait_for_load_state("load", timeout=20000)
        except Exception:
            pass
        page.wait_for_timeout(self.wait_ms)
        for selector in ("header", "main", "body"):
            try:
                page.wait_for_selector(selector, timeout=5000)
                break
            except Exception:
                continue
        print("[+] Page rendered.")

    def _wait_widgets(self, page: Page) -> None:
        print("[*] Waiting for lazy images, JS widgets & SPA hydration...")
        try:
            from .speed import get_speed

            fast = get_speed().widget_mode == "fast"
            use_idle = get_speed().use_networkidle
        except Exception:
            fast, use_idle = True, False
        page.evaluate(widget_wait_js(fast))
        try:
            hydrated = page.evaluate(SPA_HYDRATION_WAIT_JS)
            if hydrated:
                print("[+] React/Next.js SPA hydrated.")
                page.wait_for_timeout(1000 if fast else 2000)
        except Exception:
            pass
        if use_idle:
            try:
                page.wait_for_load_state("networkidle", timeout=15000)
            except Exception:
                pass
        page.wait_for_timeout(800 if fast else 2000)
        print("[+] Widgets ready.")
