"""Generate production-ready React.js app with full /src architecture."""

from __future__ import annotations

import json
import re
from pathlib import Path

from scraper.site_architecture import analyze_site_architecture

from .shared import (
    UNIVERSAL_OFFLINE_CSS,
    build_route_map,
    copy_all_site_assets,
    extract_body_class,
    extract_body_inner,
    extract_head_assets,
    extract_scripts,
    extract_title,
    load_site_pages,
    rewrite_html_links_for_router,
    slug_to_component,
    slug_to_route,
    write_site_scripts_component,
)


def _write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def _build_slug_map(pages: list[dict]) -> dict[str, str]:
    return {p["slug"]: p["html_rel"] for p in pages}


def convert(site_dir: Path, output_dir: Path, base_url: str | None = None) -> Path:
    site_dir = Path(site_dir)
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    architecture = analyze_site_architecture(site_dir, base_url)
    pages = load_site_pages(site_dir)
    if not pages:
        raise FileNotFoundError(f"No pages in {site_dir}")

    slug_map = _build_slug_map(pages)
    route_map = build_route_map(pages, architecture.get("base_url"), architecture)
    lang = architecture.get("language") or "en"
    site_name = architecture["pages"].get("home", {}).get("title", "Scraped Site")

    public = output_dir / "public"
    src = output_dir / "src"
    copy_all_site_assets(site_dir, public)

    page_exports: list[dict] = []
    route_entries: list[str] = []
    lazy_imports: list[str] = []

    for page in pages:
        slug = page["slug"]
        comp = slug_to_component(slug)
        route = slug_to_route(slug)
        html = page["html_path"].read_text(encoding="utf-8", errors="replace")
        body_inner = rewrite_html_links_for_router(
            extract_body_inner(html, page["html_path"].parent), slug_map, route_map
        )
        scripts = extract_scripts(html)
        body_class = extract_body_class(html)
        arch_page = architecture["pages"].get(slug, {})
        seo = arch_page.get("seo", {})

        data = {
            "slug": slug,
            "route": route,
            "url": arch_page.get("url", page["url"]),
            "title": seo.get("title") or extract_title(html),
            "bodyClass": body_class,
            "bodyHtml": body_inner,
            "seo": seo,
            "headings": arch_page.get("headings", {}),
            "type": arch_page.get("type", "page"),
            "breadcrumbs": arch_page.get("breadcrumbs", []),
            "faqs": arch_page.get("faqs", []),
            "forms": arch_page.get("forms", []),
            "ctas": arch_page.get("ctas", []),
        }

        _write(src / "data" / "pages" / f"{slug}.js", f"export default {json.dumps(data, ensure_ascii=False, indent=2)}\n")

        if slug == "home":
            write_site_scripts_component(src, scripts, "SiteScripts.jsx")
            script_import = "import SiteScripts from '../components/SiteScripts.jsx'"
        else:
            script_file = f"SiteScripts{comp}.jsx"
            write_site_scripts_component(src, scripts, script_file)
            script_import = f"import SiteScripts from '../components/{script_file}'"

        _write(
            src / "pages" / f"{comp}.jsx",
            f"""import pageData from '../data/pages/{slug}.js'
import ScrapedContent from '../components/common/ScrapedContent.jsx'
import PageMeta from '../components/seo/PageMeta.jsx'
{script_import}

export default function {comp}() {{
  return (
    <>
      <PageMeta page={{pageData}} />
      <ScrapedContent html={{pageData.bodyHtml}} bodyClass={{pageData.bodyClass}} />
      <SiteScripts />
    </>
  )
}}
""",
        )

        if slug == "home":
            route_entries.append("        <Route index element={<HomePage />} />")
        else:
            lazy_imports.append(f"const {comp} = lazy(() => import('../pages/{comp}.jsx'))")
            route_entries.append(
                f'        <Route path="{slug}" element={{<Suspense fallback={{<LoadingSpinner />}}><{comp} /></Suspense>}} />'
            )

        page_exports.append({"slug": slug, "component": comp, "route": route, "title": data["title"]})

    nav = architecture.get("navigation", {})
    _write(src / "data" / "navigation.js", f"export default {json.dumps(nav, ensure_ascii=False, indent=2)}\n")
    _write(src / "data" / "routeMap.js", f"export default {json.dumps(route_map, ensure_ascii=False, indent=2)}\n")
    _write(src / "data" / "site.js", f"""export const siteConfig = {json.dumps({
        "name": site_name,
        "baseUrl": architecture["base_url"],
        "language": lang,
        "pageCount": len(pages),
    }, indent=2)}
export const pages = {json.dumps(page_exports, indent=2)}
""")
    _write(src / "data" / "architecture.json", json.dumps(architecture, indent=2, ensure_ascii=False) + "\n")

    _generate_core_files(output_dir, src, lang, site_name, architecture, route_entries, lazy_imports, pages[0])
    _generate_sitemap(output_dir, architecture, page_exports)
    _generate_package_files(output_dir, site_name, len(pages))

    return output_dir


def _generate_core_files(
    output_dir: Path,
    src: Path,
    lang: str,
    site_name: str,
    architecture: dict,
    route_entries: list[str],
    lazy_imports: list[str],
    first_page: dict,
) -> None:
    home_html = first_page["html_path"].read_text(encoding="utf-8", errors="replace")
    head_assets = extract_head_assets(home_html)
    css_tags = "\n    ".join(f'<link rel="stylesheet" href="{h}" />' for h in head_assets["css_links"])
    icon_tags = "\n    ".join(f'<link rel="icon" href="{h}" />' for h in head_assets.get("icon_links", []))
    style_tags = "\n    ".join(
        f'<style id="{s["id"]}">{s["content"]}</style>' for s in head_assets["inline_styles"]
    )

    _write(
        output_dir / "index.html",
        f"""<!doctype html>
<html lang="{lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{site_name}</title>
    {icon_tags}
    {css_tags}
    {style_tags}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
    <script src="/assets/js/offline-popups.js" defer id="scraper-offline-popups"></script>
  </body>
</html>
""",
    )

    _write(
        src / "main.jsx",
        """import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
""",
    )

    _write(
        src / "App.jsx",
        """import Layout from './components/layout/Layout.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { SiteProvider } from './context/SiteContext.jsx'

export default function App() {
  return (
    <SiteProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </SiteProvider>
  )
}
""",
    )

    lazy_block = "\n".join(lazy_imports)
    routes_block = "\n".join(route_entries)

    _write(
        src / "routes" / "AppRoutes.jsx",
        f"""import {{ lazy, Suspense }} from 'react'
import {{ Routes, Route }} from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import LoadingSpinner from '../components/common/LoadingSpinner.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

{lazy_block}

export default function AppRoutes() {{
  return (
    <Suspense fallback={{<LoadingSpinner />}}>
      <Routes>
{routes_block}
        <Route path="*" element={{<NotFoundPage />}} />
      </Routes>
    </Suspense>
  )
}}
""",
    )

    _write(
        src / "routes" / "index.js",
        """export { default as AppRoutes } from './AppRoutes.jsx'
""",
    )

    _write(
        src / "components" / "layout" / "Layout.jsx",
        """import { useSpaLinkInterceptor } from '../../hooks/useSpaLinkInterceptor.js'

/** Layout wrapper — intercepts scraped menu/footer links for SPA navigation */
export default function Layout({ children }) {
  useSpaLinkInterceptor()
  return (
    <div className="site-layout">
      <main id="main-content" className="site-main">
        {children}
      </main>
    </div>
  )
}
""",
    )

    nav_header = architecture.get("navigation", {}).get("header", [])
    nav_footer = architecture.get("navigation", {}).get("footer", [])

    _write(
        src / "components" / "layout" / "Header.jsx",
        """import { Link, useLocation } from 'react-router-dom'
import navigation from '../../data/navigation.js'
import { slugToRoute } from '../../utils/routes.js'

export default function Header() {
  const location = useLocation()
  const links = navigation.header?.length ? navigation.header : navigation.primary || []

  if (!links.length) return null

  return (
    <header className="site-header" role="banner">
      <nav className="site-nav" aria-label="Main navigation">
        <ul className="site-nav__list">
          {links.map((item) => {
            const route = slugToRoute(item.slug)
            const active = location.pathname === route
            return (
              <li key={item.slug} className={active ? 'is-active' : ''}>
                <Link to={route}>{item.label}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
""",
    )

    _write(
        src / "components" / "layout" / "Footer.jsx",
        """import { Link } from 'react-router-dom'
import navigation from '../../data/navigation.js'
import { slugToRoute } from '../../utils/routes.js'
import { siteConfig } from '../../data/site.js'

export default function Footer() {
  const links = navigation.footer || []

  return (
    <footer className="site-footer" role="contentinfo">
      {links.length > 0 && (
        <nav className="site-footer__nav" aria-label="Footer navigation">
          <ul>
            {links.map((item) => (
              <li key={item.slug}>
                <Link to={slugToRoute(item.slug)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <p className="site-footer__copy">&copy; {new Date().getFullYear()} {siteConfig.name}</p>
    </footer>
  )
}
""",
    )

    _write(
        src / "components" / "common" / "ScrapedContent.jsx",
        """import { useEffect } from 'react'

export default function ScrapedContent({ html, bodyClass }) {
  useEffect(() => {
    if (bodyClass) {
      document.body.className = bodyClass
    }
    return () => {
      document.body.className = ''
    }
  }, [bodyClass])

  return (
    <div
      className="scraped-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
""",
    )

    _write(
        src / "components" / "common" / "LoadingSpinner.jsx",
        """export default function LoadingSpinner() {
  return (
    <div className="loading-spinner" role="status" aria-label="Loading">
      <div className="loading-spinner__ring" />
    </div>
  )
}
""",
    )

    _write(
        src / "components" / "common" / "LazyImage.jsx",
        """import { useState } from 'react'

export default function LazyImage({ src, alt = '', className = '', ...props }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <img
      src={src}
      alt={alt}
      className={`lazy-image${loaded ? ' is-loaded' : ''} ${className}`.trim()}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      {...props}
    />
  )
}
""",
    )

    _write(
        src / "components" / "seo" / "PageMeta.jsx",
        """import { Helmet } from 'react-helmet-async'

export default function PageMeta({ page }) {
  const seo = page.seo || {}
  const title = seo.title || page.title || 'Page'
  const description = seo.description || ''
  const canonical = seo.canonical || page.url || ''
  const og = seo.og || {}
  const jsonLd = seo.jsonLd || []

  return (
    <Helmet>
      <html lang={document.documentElement.lang || 'en'} />
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {seo.robots && <meta name="robots" content={seo.robots} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {Object.entries(og).map(([key, value]) =>
        value ? <meta key={key} property={key} content={value} /> : null
      )}
      {jsonLd.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  )
}
""",
    )

    _write(
        src / "components" / "forms" / "FormPlaceholder.jsx",
        """/** Preserved form metadata — wire to your API in services/forms.js */
export default function FormPlaceholder({ form }) {
  if (!form) return null
  return (
    <form className="scraped-form" action={form.action} method={form.method} data-form-id={form.id}>
      {form.fields?.map((field, i) => (
        <input
          key={i}
          type={field.type || 'text'}
          name={field.name}
          id={field.id}
          placeholder={field.placeholder}
          readOnly
          aria-hidden="true"
          style={{ display: 'none' }}
        />
      ))}
    </form>
  )
}
""",
    )

    _write(
        src / "hooks" / "usePageMeta.js",
        """import { useEffect } from 'react'

export function usePageMeta({ title, description, bodyClass }) {
  useEffect(() => {
    if (title) document.title = title
    if (bodyClass) document.body.className = bodyClass
    let descEl = document.querySelector('meta[name="description"]')
    if (description) {
      if (!descEl) {
        descEl = document.createElement('meta')
        descEl.setAttribute('name', 'description')
        document.head.appendChild(descEl)
      }
      descEl.setAttribute('content', description)
    }
    return () => {
      document.body.className = ''
    }
  }, [title, description, bodyClass])
}
""",
    )

    _write(
        src / "hooks" / "useSiteNavigation.js",
        """import { useMemo } from 'react'
import navigation from '../data/navigation.js'
import { slugToRoute } from '../utils/routes.js'

export function useSiteNavigation() {
  return useMemo(() => ({
    header: (navigation.header || []).map((item) => ({
      ...item,
      route: slugToRoute(item.slug),
    })),
    footer: (navigation.footer || []).map((item) => ({
      ...item,
      route: slugToRoute(item.slug),
    })),
  }), [])
}
""",
    )

    _write(
        src / "context" / "SiteContext.jsx",
        """import { createContext, useContext } from 'react'
import { siteConfig, pages } from '../data/site.js'

const SiteContext = createContext({ siteConfig, pages })

export function SiteProvider({ children }) {
  return (
    <SiteContext.Provider value={{ siteConfig, pages }}>
      {children}
    </SiteContext.Provider>
  )
}

export function useSite() {
  return useContext(SiteContext)
}
""",
    )

    _write(
        src / "services" / "api.js",
        """const API_BASE = import.meta.env.VITE_API_BASE || ''

export async function fetchJson(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json()
}
""",
    )

    _write(
        src / "services" / "content.js",
        """import architecture from '../data/architecture.json'

export function getPageBySlug(slug) {
  return architecture.pages?.[slug] || null
}

export function getAllPages() {
  return Object.values(architecture.pages || {})
}

export function getBlogPages() {
  return (architecture.collections?.blog || []).map((slug) => getPageBySlug(slug))
}
""",
    )

    _write(
        src / "utils" / "routes.js",
        """import routeMap from '../data/routeMap.js'
import { siteConfig } from '../data/site.js'

export function slugToRoute(slug) {
  return slug === 'home' ? '/' : `/${slug}`
}

export function routeToSlug(pathname) {
  if (!pathname || pathname === '/') return 'home'
  return pathname.replace(/^\\//, '')
}

export function resolveInternalRoute(href) {
  if (!href) return null
  if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return null
  if (/^javascript:/i.test(href)) return null

  let path = href
  if (/^https?:\\/\\//i.test(href)) {
    try {
      const u = new URL(href)
      const base = new URL(siteConfig.baseUrl || window.location.origin)
      if (u.hostname.replace(/^www\\./, '') !== base.hostname.replace(/^www\\./, '')) return null
      path = u.pathname + u.search
    } catch {
      return null
    }
  }

  if (routeMap[path]) return routeMap[path]
  if (routeMap[path + '/']) return routeMap[path + '/']

  const normalized = path.startsWith('/') ? path : `/${path.replace(/^(\\.\\.\\/)+/, '')}`
  const stripped = normalized.replace(/\\/+$/, '') || '/'
  return routeMap[normalized] ?? routeMap[stripped] ?? routeMap[`${stripped}/`] ?? null
}
""",
    )

    _write(
        src / "hooks" / "useSpaLinkInterceptor.js",
        """import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { resolveInternalRoute } from '../utils/routes.js'

/** Intercept clicks on scraped HTML links — menus, footer, body all work in SPA */
export function useSpaLinkInterceptor() {
  const navigate = useNavigate()

  useEffect(() => {
    function onClick(event) {
      const anchor = event.target.closest('a[href]')
      if (!anchor) return
      if (anchor.target === '_blank' || anchor.hasAttribute('download')) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const route = resolveInternalRoute(anchor.getAttribute('href'))
      if (!route) return

      event.preventDefault()
      navigate(route)
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [navigate])
}
""",
    )

    _write(
        src / "utils" / "seo.js",
        """export function buildCanonical(baseUrl, route) {
  const base = baseUrl.replace(/\\/$/, '')
  return route === '/' ? `${base}/` : `${base}${route}`
}
""",
    )

    _write(
        src / "constants" / "routes.js",
        f"export const ROUTES = {json.dumps({slug: slug_to_route(slug) for slug in architecture.get('pages', {})}, indent=2)}\n",
    )

    for sub in ("images", "videos", "icons", "fonts"):
        _write(src / "assets" / sub / ".gitkeep", "")

    _write(
        src / "styles" / "global.css",
        UNIVERSAL_OFFLINE_CSS
        + """
.site-layout { min-height: 100vh; display: flex; flex-direction: column; }
.site-main { flex: 1; }

.site-header {
  position: sticky; top: 0; z-index: 100;
  background: rgba(255,255,255,0.95);
  border-bottom: 1px solid #e5e7eb;
  padding: 0.75rem 1.5rem;
}
.site-nav__list {
  display: flex; flex-wrap: wrap; gap: 1rem;
  list-style: none; margin: 0; padding: 0;
}
.site-nav__list a { text-decoration: none; color: #1e293b; font-weight: 500; }
.site-nav__list .is-active a { color: #2563eb; }

.site-footer {
  padding: 2rem 1.5rem;
  background: #0f172a; color: #e2e8f0;
  margin-top: auto;
}
.site-footer__nav ul {
  display: flex; flex-wrap: wrap; gap: 1rem;
  list-style: none; margin: 0 0 1rem; padding: 0;
}
.site-footer__nav a { color: #94a3b8; text-decoration: none; }
.site-footer__copy { margin: 0; font-size: 0.85rem; color: #64748b; }

.loading-spinner {
  display: flex; align-items: center; justify-content: center;
  min-height: 40vh;
}
.loading-spinner__ring {
  width: 40px; height: 40px;
  border: 3px solid #e5e7eb;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

@media (max-width: 768px) {
  .site-nav__list { flex-direction: column; gap: 0.5rem; }
}
""",
    )

    _write(
        src / "pages" / "NotFoundPage.jsx",
        """import { Link } from 'react-router-dom'
import PageMeta from '../components/seo/PageMeta.jsx'

export default function NotFoundPage() {
  return (
    <>
      <PageMeta page={{ title: 'Page Not Found', seo: {} }} />
      <section className="not-found" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">Back to home</Link>
      </section>
    </>
  )
}
""",
    )

    _write(
        src / "api" / "index.js",
        """export { fetchJson } from '../services/api.js'
export { getPageBySlug, getAllPages, getBlogPages } from '../services/content.js'
""",
    )


def _generate_sitemap(output_dir: Path, architecture: dict, pages: list[dict]) -> None:
    base = architecture.get("base_url", "").rstrip("/")
    urls = []
    for p in pages:
        loc = f"{base}{p['route']}" if p["route"] != "/" else f"{base}/"
        urls.append(f"  <url>\n    <loc>{loc}</loc>\n    <changefreq>weekly</changefreq>\n  </url>")

    sitemap_xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(urls)}
</urlset>
"""
    _write(output_dir / "public" / "sitemap.xml", sitemap_xml)
    _write(
        output_dir / "public" / "robots.txt",
        f"""User-agent: *
Allow: /

Sitemap: {base}/sitemap.xml
""",
    )


def _generate_package_files(output_dir: Path, site_name: str, page_count: int) -> None:
    safe_name = re.sub(r"[^\w\-]+", "-", site_name.lower())[:40] or "scraped-site"

    _write(
        output_dir / "package.json",
        json.dumps(
            {
                "name": safe_name,
                "private": True,
                "type": "module",
                "scripts": {
                    "dev": "vite",
                    "build": "vite build",
                    "preview": "vite preview",
                },
                "dependencies": {
                    "react": "^19.0.0",
                    "react-dom": "^19.0.0",
                    "react-router-dom": "^7.1.0",
                    "react-helmet-async": "^2.0.5",
                },
                "devDependencies": {
                    "@vitejs/plugin-react": "^4.3.4",
                    "vite": "^6.0.0",
                },
            },
            indent=2,
        )
        + "\n",
    )

    _write(
        output_dir / "vite.config.js",
        """import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          helmet: ['react-helmet-async'],
        },
      },
    },
  },
  server: { port: 5173, open: true },
})
""",
    )

    _write(output_dir / ".gitignore", "node_modules/\ndist/\n.DS_Store\n.env\n")

    _write(
        output_dir / "README.md",
        f"""# {site_name} — React.js Architecture

Production-ready React.js 19 application recreated from scraped website.
**{page_count} pages** with routing, SEO, lazy loading, and organized assets.

## Structure

```
src/
├── assets/          (use public/assets for scraped media)
├── components/
│   ├── common/      ScrapedContent, LazyImage, LoadingSpinner
│   ├── layout/      Header, Footer, Layout
│   ├── forms/       Form placeholders
│   └── seo/         PageMeta (title, OG, JSON-LD)
├── pages/           One component per scraped page (lazy loaded)
├── routes/          React Router configuration
├── services/        API & content services
├── hooks/           usePageMeta, useSiteNavigation
├── context/         SiteContext
├── utils/           routes, seo helpers
├── constants/       Route map
├── styles/          Global CSS
├── data/            Page data, navigation, architecture JSON
└── api/             Public API exports
public/
├── assets/          images, videos, fonts, css, js, icons
├── sitemap.xml
└── robots.txt
```

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
""",
    )
