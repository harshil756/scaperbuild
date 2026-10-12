import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import HtmlToJsx from 'htmltojsx'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const frontend = path.resolve(__dirname, '..')
const exportRoot = path.join(root, 'scraped/export/7statespestcontrol.com.au')
const pagesDir = path.join(frontend, 'src/pages/services')
const publicAssets = path.join(frontend, 'public/assets')

const SERVICE_SLUGS = [
  'our-services',
  'solar-panel-bird-proofing',
  'our-services-ant-pest-control',
  'our-services-bed-bug-treatment',
  'our-services-cockroach-control',
  'our-services-mosquito-pest-control',
  'our-services-fly-control',
  'our-services-fox-pest-control-in-melbourne',
  'our-services-mites-control',
  'our-services-moth-control',
  'our-services-possum-pest-control',
  'rodent-control-in-melbourne',
  'our-services-silverfish-treatment',
  'our-services-spider-control-treatment',
  'our-services-termite-pest-control',
  'wasp-removal-melbourne',
  'our-services-end-of-lease-pest-control',
]

function slugToComponent(slug) {
  return `${slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')}Page`
}

function slugToMetaKey(slug) {
  return slug.replace(/-/g, '_')
}

function findHtmlFile(slug) {
  const dir = path.join(exportRoot, slug)
  const direct = path.join(dir, `${slug}.html`)
  if (fs.existsSync(direct)) return direct
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.html'))
  if (files.length === 1) return path.join(dir, files[0])
  throw new Error(`HTML not found for ${slug}`)
}

function extractMeta(html, slug) {
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.replace(/&amp;/g, '&') ?? slug
  const description =
    html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1]?.replace(/&amp;/g, '&') ??
    html.match(/<meta[^>]+content="([^"]*)"[^>]+name="description"/i)?.[1]?.replace(/&amp;/g, '&') ??
    ''
  const pageId = html.match(/elementor-page elementor-page-(\d+)/)?.[1] ?? '0'
  const elementorId = html.match(/<div class="elementor elementor-(\d+)"[^>]+data-elementor-post-type="page"/)?.[1]
  if (!elementorId) {
    throw new Error(`Elementor page id not found for ${slug}`)
  }
  return {
    slug,
    metaKey: slugToMetaKey(slug),
    componentName: slugToComponent(slug),
    route: `/${slug}`,
    title,
    description,
    pageId,
    elementorId,
    bodyClass: `wp-singular page-template page-template-elementor_header_footer page wp-custom-logo wp-embed-responsive wp-theme-hello-elementor elementor-default elementor-template-full-width elementor-kit-9 elementor-page elementor-page-${pageId}`,
  }
}

function extractBetween(source, start, end) {
  const startIdx = source.indexOf(start)
  if (startIdx === -1) throw new Error(`Start marker not found: ${start}`)
  const endIdx = source.indexOf(end, startIdx)
  if (endIdx === -1) throw new Error(`End marker not found: ${end}`)
  return source.slice(startIdx, endIdx)
}

function normalizeHtml(fragment) {
  return fragment
    .replace(/\sstyle="position:\s*fixed;\s*width:\s*1920px[^"]*"/gi, '')
    .replace(/<section[^>]*elementor-sticky__spacer[^>]*>[\s\S]*?<\/section>/gi, '')
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
}

function htmlToJsx(html) {
  const converter = new HtmlToJsx({ createClass: false })
  let jsx = converter.convert(html)

  return jsx
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
    .replace(/<meta([^>]*[^/])>/g, '<meta$1 />')
    .replace(/<link([^>]*[^/])>/g, '<link$1 />')
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name)
    const to = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      copyDir(from, to)
    } else if (!fs.existsSync(to)) {
      fs.copyFileSync(from, to)
    }
  }
}

function collectCssFromHtml(html) {
  const links = []
  for (const match of html.matchAll(/href="assets\/css\/([^"]+\.css)"/g)) {
    const href = `/assets/css/${match[1]}`
    if (!links.includes(href)) links.push(href)
  }
  return links
}

function convertServicePage(meta) {
  const htmlPath = findHtmlFile(meta.slug)
  const html = fs.readFileSync(htmlPath, 'utf8')
  const start = `<div class="elementor elementor-${meta.elementorId}"`
  const end = '<div class="ekit-template-content-markup ekit-template-content-footer'
  const fragment = normalizeHtml(extractBetween(html, start, end))
  const jsx = htmlToJsx(fragment)
  const outPath = path.join(pagesDir, `${meta.componentName}.jsx`)

  const output = `import usePageMeta from '../../hooks/usePageMeta.js'

export default function ${meta.componentName}() {
  usePageMeta('${meta.metaKey}')

  return (
    <>
${jsx
  .split('\n')
  .map((line) => `      ${line}`)
  .join('\n')}
    </>
  )
}
`

  fs.writeFileSync(outPath, output, 'utf8')
  console.log(`  ✓ ${meta.slug} -> ${meta.componentName}.jsx`)
  return collectCssFromHtml(html)
}

// Copy assets from all service folders
console.log('Copying service assets...')
for (const slug of SERVICE_SLUGS) {
  const assetsDir = path.join(exportRoot, slug, 'assets')
  for (const sub of ['css', 'images', 'fonts', 'js']) {
    copyDir(path.join(assetsDir, sub), path.join(publicAssets, sub))
  }
}

fs.mkdirSync(pagesDir, { recursive: true })

const allMeta = {}
const allCss = new Set()

console.log('Converting service pages...')
for (const slug of SERVICE_SLUGS) {
  const htmlPath = findHtmlFile(slug)
  const html = fs.readFileSync(htmlPath, 'utf8')
  const meta = extractMeta(html, slug)
  const css = convertServicePage(meta)
  css.forEach((href) => allCss.add(href))
  allMeta[meta.metaKey] = {
    title: meta.title,
    description: meta.description,
    bodyClass: meta.bodyClass,
  }
}

// Write page meta config
const metaOut = `// Auto-generated by scripts/convert-services.mjs
export const SERVICE_PAGE_META = ${JSON.stringify(allMeta, null, 2)}
`
fs.writeFileSync(path.join(frontend, 'src/config/servicePageMeta.js'), metaOut, 'utf8')

// Write routes file
const routesOut = `// Auto-generated by scripts/convert-services.mjs
${SERVICE_SLUGS.map((slug) => {
  const component = slugToComponent(slug)
  return `import ${component} from './pages/services/${component}.jsx'`
}).join('\n')}

export const serviceRoutes = [
${SERVICE_SLUGS.map((slug) => {
  const component = slugToComponent(slug)
  return `  { path: '${slug}', element: <${component} /> },`
}).join('\n')}
]
`
fs.writeFileSync(path.join(frontend, 'src/serviceRoutes.jsx'), routesOut, 'utf8')

// Merge CSS into index.html
const indexPath = path.join(frontend, 'index.html')
let indexHtml = fs.readFileSync(indexPath, 'utf8')
const existingCss = new Set(
  [...indexHtml.matchAll(/href="(\/assets\/css\/[^"]+)"/g)].map((m) => m[1]),
)
for (const href of allCss) existingCss.add(href)
const cssTags = [...existingCss]
  .sort()
  .map((href) => `    <link rel="stylesheet" href="${href}" />`)
  .join('\n')

indexHtml = indexHtml.replace(
  /    <link rel="stylesheet" href="\/assets\/css\/[^"]+" \/>\n(?=    <link rel="stylesheet" href="\/assets\/css\/|<style id="inline-0">)/,
  '',
)
indexHtml = indexHtml.replace(
  /    <link rel="icon" href="\/assets\/images\/favicon[^"]+"[^/]*\/>\n/,
  (match) => `${match}${cssTags}\n`,
)

// If replace didn't work, insert after apple-touch-icon
if (!indexHtml.includes('post-7780')) {
  indexHtml = indexHtml.replace(
    /(<link rel="apple-touch-icon"[^>]+>\n)/,
    `$1${cssTags}\n`,
  )
}

fs.writeFileSync(indexPath, indexHtml, 'utf8')

console.log(`\nDone: ${SERVICE_SLUGS.length} service pages converted`)
console.log(`CSS files: ${existingCss.size}`)
