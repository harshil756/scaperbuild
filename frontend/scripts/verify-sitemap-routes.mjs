import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '../public')
const baseHost = '7statespestcontrol.com.au'

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}

function toPath(loc) {
  const url = new URL(loc)
  if (url.hostname !== baseHost) return null
  let p = url.pathname
  if (p !== '/' && p.endsWith('/')) p = p.slice(0, -1)
  return p || '/'
}

function collectAppRoutes() {
  const routes = new Set(['/'])
  const files = [
    '../src/App.jsx',
    '../src/serviceRoutes.jsx',
    '../src/commercialOfficeRoutes.jsx',
    '../src/locationRoutes.jsx',
    '../src/blogPostRoutes.jsx',
  ]
  for (const rel of files) {
    const src = fs.readFileSync(path.join(__dirname, rel), 'utf8')
    for (const match of src.matchAll(/path[=:]\s*['"]([^'"]+)['"]/g)) {
      const raw = match[1].replace(/\/$/, '')
      if (!raw || raw.startsWith('http') || raw.includes('Navigate')) continue
      routes.add(`/${raw}`)
    }
  }
  return routes
}

const sitemapFiles = fs
  .readdirSync(publicDir)
  .filter((f) => f.endsWith('-sitemap.xml') && f !== 'sitemap_index.xml')

const allLocs = new Set()
for (const file of sitemapFiles) {
  const xml = fs.readFileSync(path.join(publicDir, file), 'utf8')
  for (const loc of extractLocs(xml)) {
    const p = toPath(loc)
    if (p) allLocs.add(p)
  }
}

const appRoutes = collectAppRoutes()

const contentUrls = new Set(
  [...allLocs].filter(
    (p) =>
      !p.startsWith('/category/') &&
      !p.startsWith('/author/') &&
      !p.includes('elementskit_template') &&
      p !== '/404-page',
  ),
)

const redirectSources = new Set(
  [...fs.readFileSync(path.join(__dirname, '../src/serviceRoutes.jsx'), 'utf8').matchAll(/path:\s*['"]([^'"]+)['"]/g)]
    .map((m) => `/${m[1].replace(/\/$/, '')}`)
    .filter((p) => p.includes('our-services-') || p === '/flea-treatment'),
)

const missingInApp = [...contentUrls].filter((p) => !appRoutes.has(p) && !redirectSources.has(p))
const extraInApp = [...appRoutes].filter(
  (p) => !contentUrls.has(p) && !p.startsWith('/our-services-') && p !== '/flea-treatment',
)

console.log(`Sitemap content URLs: ${contentUrls.size}`)
console.log(`SPA routes: ${appRoutes.size}`)
if (missingInApp.length) {
  console.log('\nIn sitemap but no SPA route:')
  missingInApp.forEach((p) => console.log(`  ${p}`))
}
if (extraInApp.length) {
  console.log('\nSPA route not in page/post sitemaps:')
  extraInApp.forEach((p) => console.log(`  ${p}`))
}
if (!missingInApp.length && !extraInApp.length) {
  console.log('\nAll page/post sitemap URLs match SPA routes.')
}
