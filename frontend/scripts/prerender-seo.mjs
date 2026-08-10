/**
 * Post-build SSG: emit per-route index.html with unique title, meta, canonical, OG, and JSON-LD
 * so crawlers receive correct SEO in the initial HTML (without a full Next.js migration).
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { PAGE_SEO_EXTRA } from '../src/config/pageSeoExtra.js'
import { PAGE_META } from '../src/config/pageMetaIndex.js'
import { resolvePageSeo, seoExtraKeyToPageKey } from '../src/utils/resolvePageSeo.js'
import { pageKeyToSlug } from '../src/utils/pageKeyToSlug.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, '../dist')
const SITE_HOST = '7statespestcontrol.com.au'

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function canonicalToPath(canonical) {
  try {
    const url = new URL(canonical)
    if (url.hostname !== SITE_HOST) return null
    let p = url.pathname
    if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1)
    return p === '' ? '/' : p
  } catch {
    return null
  }
}

function collectPrerenderEntries() {
  const entries = new Map()

  for (const [seoKey, extra] of Object.entries(PAGE_SEO_EXTRA)) {
    if (!extra?.canonical) continue
    const routePath = canonicalToPath(extra.canonical)
    if (!routePath) continue
    if (routePath === '/location' || routePath.startsWith('/location/')) continue

    const pageKey = seoExtraKeyToPageKey(seoKey)
    entries.set(routePath, pageKey)
  }

  // Fallback for pages without Yoast export (use slug mapping — not used for nested service paths)
  for (const pageKey of Object.keys(PAGE_META)) {
    if (pageKey.startsWith('location_') || pageKey.startsWith('post_')) continue
    const slug = pageKeyToSlug(pageKey)
    const routePath = slug === 'home' ? '/' : `/${slug}`
    if (routePath === '/location' || routePath.startsWith('/location/')) continue
    if (entries.has(routePath)) continue
    // Skip legacy flat service slugs; canonical URLs use nested paths from PAGE_SEO_EXTRA
    if (routePath.startsWith('/our-services-')) continue
    entries.set(routePath, pageKey)
  }

  return entries
}

function replaceMeta(html, attr, name, content) {
  const escapedName = name.replace(/:/g, '\\:')
  const pattern = new RegExp(
    `<meta ${attr}="${escapedName}" content="[^"]*"\\s*/?>`,
    'i',
  )
  const tag = `<meta ${attr}="${name}" content="${escapeHtml(content)}" />`
  if (pattern.test(html)) return html.replace(pattern, tag)
  return html
}

function injectSeoIntoHtml(html, seo) {
  let out = html

  out = out.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(seo.title)}</title>`,
  )

  if (seo.description) {
    out = replaceMeta(out, 'name', 'description', seo.description)
  }

  if (seo.robots) {
    out = replaceMeta(out, 'name', 'robots', seo.robots)
  }

  if (seo.canonical) {
    out = out.replace(
      /<link rel="canonical" href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`,
    )
  }

  for (const [property, content] of Object.entries(seo.og ?? {})) {
    if (!content) continue
    out = replaceMeta(out, 'property', property, content)
  }

  for (const [name, content] of Object.entries(seo.twitter ?? {})) {
    if (!content) continue
    out = replaceMeta(out, 'name', name, content)
  }

  if (seo.jsonLd) {
    out = out.replace(
      /<script type="application\/ld\+json" class="yoast-schema-graph">[\s\S]*?<\/script>/i,
      `<script type="application/ld+json" class="yoast-schema-graph">${seo.jsonLd}</script>`,
    )
  }

  return out
}

function writeRouteHtml(routePath, pageKey, templateHtml) {
  const seo = resolvePageSeo(pageKey)
  if (!seo?.title) {
    console.warn(`[prerender-seo] No SEO for pageKey=${pageKey} path=${routePath}`)
    return false
  }

  const html = injectSeoIntoHtml(templateHtml, seo)

  if (routePath === '/') {
    fs.writeFileSync(path.join(distDir, 'index.html'), html)
    return true
  }

  const dir = path.join(distDir, routePath.replace(/^\//, ''))
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html)
  return true
}

function main() {
  const templatePath = path.join(distDir, 'index.html')
  if (!fs.existsSync(templatePath)) {
    console.error('[prerender-seo] dist/index.html not found — run vite build first')
    process.exit(1)
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf8')
  const entries = collectPrerenderEntries()
  let written = 0

  for (const [routePath, pageKey] of entries) {
    if (writeRouteHtml(routePath, pageKey, templateHtml)) written++
  }

  console.log(`[prerender-seo] Generated ${written} route HTML files with unique SEO metadata`)
}

main()
