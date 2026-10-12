#!/usr/bin/env node
/**
 * Fetch location archive + suburb pages from the live site, download CSS,
 * convert to React pages, and generate routes/meta.
 */
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import HtmlToJsx from 'htmltojsx'
import { convertInternalAnchorsToLinks } from './link-utils.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const frontend = path.resolve(__dirname, '..')
const exportRoot = path.join(root, 'scraped/export/7statespestcontrol.com.au')
const pagesDir = path.join(frontend, 'src/pages/location')
const publicAssets = path.join(frontend, 'public/assets')
const siteOrigin = 'https://7statespestcontrol.com.au'

function slugToComponent(slug) {
  if (slug === 'location') return 'LocationArchivePage'
  return `Location${slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')}Page`
}

function slugToMetaKey(slug) {
  return slug === 'location' ? 'location_archive' : `location_${slug.replace(/-/g, '_')}`
}

function extractBetween(source, start, end) {
  const startIdx = source.indexOf(start)
  if (startIdx === -1) throw new Error(`Start marker not found: ${start}`)
  const endIdx = source.indexOf(end, startIdx)
  if (endIdx === -1) throw new Error(`End marker not found: ${end}`)
  return source.slice(startIdx, endIdx)
}

function removeShortcodeWidgets(html) {
  const marker = 'elementor-widget-shortcode'
  let result = html
  let searchFrom = 0

  while (searchFrom < result.length) {
    const markerIdx = result.indexOf(marker, searchFrom)
    if (markerIdx === -1) break

    const start = result.lastIndexOf('<div ', markerIdx)
    if (start === -1) break

    let depth = 0
    let end = -1
    for (let i = start; i < result.length; i += 1) {
      if (result.startsWith('<div', i)) depth += 1
      if (result.startsWith('</div>', i)) {
        depth -= 1
        if (depth === 0) {
          end = i + 6
          break
        }
      }
    }

    if (end === -1) break
    result = `${result.slice(0, start)}${result.slice(end)}`
    searchFrom = start
  }

  return result
}

function normalizeHtml(fragment) {
  return removeShortcodeWidgets(
    fragment
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/\sstyle="position:\s*fixed;\s*width:\s*1920px[^"]*"/gi, '')
    .replace(/<section[^>]*elementor-sticky__spacer[^>]*>[\s\S]*?<\/section>/gi, '')
    .replace(/https:\/\/7statespestcontrol\.com\.au/g, '')
    .replace(/href="\/wp-content\/uploads\//g, 'href="/assets/images/')
    .replace(/src="\/wp-content\/uploads\//g, 'src="/assets/images/')
    .replace(/srcset="\/wp-content\/uploads\//g, 'srcset="/assets/images/')
    .replace(/,\s*\/wp-content\/uploads\//g, ', /assets/images/')
    .replace(/href="assets\//g, 'href="/assets/')
    .replace(/src="assets\//g, 'src="/assets/')
    .replace(/srcset="assets\//g, 'srcset="/assets/')
    .replace(/href="home\.html"/g, 'href="/"')
    .replace(/href="about-us\.html"/g, 'href="/about-us"')
    .replace(
      /<a href="#">\s*<span class="elementor-icon-list-text">Home<\/span>/g,
      '<a href="/"><span class="elementor-icon-list-text">Home</span>',
    )
    .replace(/href="\.\.\/([^"]+)\/"/g, 'href="/$1"')
    .replace(/href="\.\.\/\.\.\/([^"]+)\/"/g, 'href="/$1"')
    .replace(/\srequired="required"/g, ' required')
    .replace(/\ssize="1"/g, '')
    .replace(/\sekit-dom-added="yes"/g, '')
  )
}

function htmlToJsx(html) {
  const converter = new HtmlToJsx({ createClass: false })
  let jsx = converter.convert(html)
  jsx = jsx
    .replace(/\bonclick="toggleReadMore\(\)"/g, 'type="button"')
    .replace(/\bclass=/g, 'className=')
    .replace(/\bfor=/g, 'htmlFor=')
    .replace(/\bviewbox=/g, 'viewBox=')
    .replace(/\btabindex=/g, 'tabIndex=')
    .replace(/\breadonly=/g, 'readOnly=')
    .replace(/\bmaxlength=/g, 'maxLength=')
    .replace(/\bcolspan=/g, 'colSpan=')
    .replace(/\browspan=/g, 'rowSpan=')
    .replace(/\bautocomplete=/g, 'autoComplete=')
    .replace(/\bcrossorigin=/g, 'crossOrigin=')
    .replace(/\bstroke-width=/g, 'strokeWidth=')
    .replace(/\bfill-rule=/g, 'fillRule=')
    .replace(/\bclip-rule=/g, 'clipRule=')
    .replace(/\bclip-path=/g, 'clipPath=')
    .replace(/\bstop-color=/g, 'stopColor=')
    .replace(/\bstop-opacity=/g, 'stopOpacity=')
    .replace(/\bfill-opacity=/g, 'fillOpacity=')
    .replace(/\bstroke-opacity=/g, 'strokeOpacity=')
    .replace(/\bstroke-linecap=/g, 'strokeLinecap=')
    .replace(/\bstroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/\bstroke-miterlimit=/g, 'strokeMiterlimit=')
    .replace(/\bfont-family=/g, 'fontFamily=')
    .replace(/\bfont-size=/g, 'fontSize=')
    .replace(/\btext-anchor=/g, 'textAnchor=')
    .replace(/\bdominant-baseline=/g, 'dominantBaseline=')
    .replace(/\bxml:space=/g, 'xmlSpace=')
    .replace(/\bxlink:href=/g, 'xlinkHref=')
    .replace(/<(\w+)([^>]*?)\s\/>/g, '<$1$2 />')
    .replace(/<img([^>]*[^/])>/g, '<img$1 />')
    .replace(/<input([^>]*[^/])>/g, '<input$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
  return convertInternalAnchorsToLinks(jsx)
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'scaperbuild-location-sync/1.0' },
    redirect: 'follow',
  })
  if (!res.ok) throw new Error(`Fetch failed ${res.status} for ${url}`)
  return res.text()
}

function parseLocationSlugs() {
  const xml = fs.readFileSync(path.join(frontend, 'public/location-sitemap.xml'), 'utf8')
  const slugs = [...xml.matchAll(/<loc>https:\/\/7statespestcontrol\.com\.au\/location\/([^/<]+)\/<\/loc>/g)]
    .map((m) => m[1])
    .filter((slug) => slug !== 'feed' && !slug.startsWith('page'))
  return [...new Set(slugs)].sort()
}

function extractArchiveMeta(html) {
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.replace(/&amp;/g, '&') ?? 'Locations'
  const description =
    html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1]?.replace(/&amp;/g, '&') ?? ''
  const elementorId =
    html.match(/data-elementor-id="(\d+)" class="elementor elementor-\d+ elementor-location-archive"/)?.[1] ?? '9386'
  const bodyClass =
    html.match(/<body[^>]+class="([^"]+)"/i)?.[1] ??
    'archive post-type-archive post-type-archive-location wp-custom-logo wp-embed-responsive wp-theme-hello-elementor elementor-page elementor-page-9386 elementor-default elementor-template-full-width elementor-kit-9'
  return { slug: 'location', title, description, elementorId, bodyClass }
}

function extractSuburbMeta(html, slug) {
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.replace(/&amp;/g, '&') ?? slug
  const description =
    html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1]?.replace(/&amp;/g, '&') ?? ''
  const elementorId = html.match(/class="elementor elementor-(\d+)" data-elementor-post-type="location"/)?.[1]
  if (!elementorId) throw new Error(`Elementor id not found for ${slug}`)
  const pageId = html.match(new RegExp(`post-${elementorId}`)) ? elementorId : elementorId
  const bodyClass =
    html.match(/<body[^>]+class="([^"]+)"/i)?.[1] ??
    `wp-singular location-template-default single single-location postid-${pageId} wp-custom-logo wp-embed-responsive wp-theme-hello-elementor elementor-default elementor-template-full-width elementor-kit-9 elementor-page elementor-page-${pageId}`
  return { slug, title, description, elementorId, bodyClass, pageId }
}

function extractArchiveBody(html, elementorId) {
  const start = `<div data-elementor-type="archive" data-elementor-id="${elementorId}"`
  return extractBetween(html, start, '<div class="ekit-template-content-markup ekit-template-content-footer')
}

function extractSuburbBody(html, elementorId) {
  const marker = `class="elementor elementor-${elementorId}" data-elementor-post-type="location"`
  const markerIdx = html.indexOf(marker)
  if (markerIdx === -1) throw new Error('Suburb body start not found')
  const startIdx = html.lastIndexOf('<div ', markerIdx)
  const endIdx = html.indexOf('<div class="ekit-template-content-markup ekit-template-content-footer', startIdx)
  if (endIdx === -1) throw new Error('Suburb body end not found')
  return html.slice(startIdx, endIdx)
}

function hashCss(content) {
  return crypto.createHash('md5').update(content).digest('hex').slice(0, 8)
}

async function ensurePostCss(postId, cssLinks) {
  const url = `${siteOrigin}/wp-content/uploads/elementor/css/post-${postId}.css`
  const css = await fetchText(url)
  const fileName = `post-${postId}_${hashCss(css)}.css`
  const dest = path.join(publicAssets, 'css', fileName)
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.writeFileSync(dest, css)
    console.log(`  ↓ css post-${postId}`)
  }
  cssLinks.add(`/assets/css/${fileName}`)
}

function writePage(componentName, metaKey, jsx) {
  fs.writeFileSync(
    path.join(pagesDir, `${componentName}.jsx`),
    `import { Link } from 'react-router-dom'
import usePageMeta from '../../hooks/usePageMeta.js'

export default function ${componentName}() {
  usePageMeta('${metaKey}')

  return (
    <>
${jsx
  .split('\n')
  .map((line) => `      ${line}`)
  .join('\n')}
    </>
  )
}
`,
    'utf8',
  )
}

function updateIndexCss(cssLinks) {
  const indexPath = path.join(frontend, 'index.html')
  let indexHtml = fs.readFileSync(indexPath, 'utf8')
  const existingCss = new Set([...indexHtml.matchAll(/href="(\/assets\/css\/[^"]+)"/g)].map((m) => m[1]))
  for (const href of cssLinks) existingCss.add(href)
  indexHtml = indexHtml.replace(/    <link rel="stylesheet" href="\/assets\/css\/[^"]+" \/>\n/g, '')
  const cssTags = [...existingCss]
    .sort()
    .map((href) => `    <link rel="stylesheet" href="${href}" />`)
    .join('\n')
  indexHtml = indexHtml.replace(
    /(<link rel="apple-touch-icon"[^>]+>\n)/,
    `$1${cssTags}\n`,
  )
  fs.writeFileSync(indexPath, indexHtml, 'utf8')
}

async function main() {
  const suburbSlugs = parseLocationSlugs()
  fs.mkdirSync(pagesDir, { recursive: true })
  fs.mkdirSync(exportRoot, { recursive: true })

  const allMeta = {}
  const routeEntries = []
  const cssLinks = new Set()

  console.log('Fetching location archive...')
  const archiveUrl = `${siteOrigin}/location/`
  const archiveHtml = await fetchText(archiveUrl)
  fs.mkdirSync(path.join(exportRoot, 'location'), { recursive: true })
  fs.writeFileSync(path.join(exportRoot, 'location/location.html'), archiveHtml, 'utf8')

  const archiveMeta = extractArchiveMeta(archiveHtml)
  await ensurePostCss(archiveMeta.elementorId, cssLinks)
  const archiveJsx = htmlToJsx(normalizeHtml(extractArchiveBody(archiveHtml, archiveMeta.elementorId)))
  const archiveComponent = slugToComponent('location')
  writePage(archiveComponent, slugToMetaKey('location'), archiveJsx)
  allMeta[slugToMetaKey('location')] = {
    title: archiveMeta.title,
    description: archiveMeta.description,
    bodyClass: archiveMeta.bodyClass,
  }
  routeEntries.push({ path: 'location', component: archiveComponent })
  console.log(`  ✓ location archive -> ${archiveComponent}.jsx`)

  console.log(`Fetching ${suburbSlugs.length} suburb pages...`)
  for (const slug of suburbSlugs) {
    const url = `${siteOrigin}/location/${slug}/`
    const html = await fetchText(url)
    const outDir = path.join(exportRoot, `location-${slug}`)
    fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(path.join(outDir, `${slug}.html`), html, 'utf8')

    const meta = extractSuburbMeta(html, slug)
    await ensurePostCss(meta.elementorId, cssLinks)
    const jsx = htmlToJsx(normalizeHtml(extractSuburbBody(html, meta.elementorId)))
    const componentName = slugToComponent(slug)
    const metaKey = slugToMetaKey(slug)
    writePage(componentName, metaKey, jsx)
    allMeta[metaKey] = {
      title: meta.title,
      description: meta.description,
      bodyClass: meta.bodyClass,
    }
    routeEntries.push({ path: `location/${slug}`, component: componentName })
    console.log(`  ✓ ${slug} -> ${componentName}.jsx`)
  }

  fs.writeFileSync(
    path.join(frontend, 'src/config/locationPageMeta.js'),
    `// Auto-generated by scripts/scrape-and-convert-location.mjs
export const LOCATION_PAGE_META = ${JSON.stringify(allMeta, null, 2)}
`,
    'utf8',
  )

  fs.writeFileSync(
    path.join(frontend, 'src/locationRoutes.jsx'),
    `// Auto-generated by scripts/scrape-and-convert-location.mjs
import { Suspense, lazy } from 'react'

const Loading = () => <div style={{ minHeight: 200 }} />
const withSuspense = (node) => <Suspense fallback={<Loading />}>{node}</Suspense>

${routeEntries
  .map(({ component }) => `const ${component}Lazy = lazy(() => import('./pages/location/${component}.jsx'))`)
  .join('\n')}

export const locationRoutes = [
${routeEntries
  .map(({ path, component }) => `  { path: '${path}', element: withSuspense(<${component}Lazy />) },`)
  .join('\n')}
]
`,
    'utf8',
  )

  updateIndexCss(cssLinks)
  console.log(`\nDone: ${routeEntries.length} location pages converted`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
