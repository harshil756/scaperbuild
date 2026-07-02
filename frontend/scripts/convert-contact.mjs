import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import HtmlToJsx from 'htmltojsx'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const frontend = path.resolve(__dirname, '..')
const exportRoot = path.join(root, 'scraped/export/7statespestcontrol.com.au')
const publicAssets = path.join(frontend, 'public/assets')
const slug = 'contact-us'

function findHtmlFile() {
  const dir = path.join(exportRoot, slug)
  const direct = path.join(dir, `${slug}.html`)
  if (fs.existsSync(direct)) return direct
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.html'))
  if (files.length === 1) return path.join(dir, files[0])
  throw new Error('contact-us.html not found')
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
    .replace(/href="blog\.html"/g, 'href="/blog"')
    .replace(/href="contact-us\.html"/g, 'href="/contact-us"')
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
    if (entry.isDirectory()) copyDir(from, to)
    else if (!fs.existsSync(to)) fs.copyFileSync(from, to)
  }
}

const htmlPath = findHtmlFile()
const html = fs.readFileSync(htmlPath, 'utf8')

const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.replace(/&amp;/g, '&') ?? 'Contact Us'
const description =
  html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1]?.replace(/&amp;/g, '&') ??
  html.match(/<meta[^>]+content="([^"]*)"[^>]+name="description"/i)?.[1]?.replace(/&amp;/g, '&') ??
  ''
const pageId = html.match(/elementor-page elementor-page-(\d+)/)?.[1] ?? '86'
const elementorId = html.match(/<div class="elementor elementor-(\d+)"[^>]+data-elementor-post-type="page"/)?.[1]
if (!elementorId) throw new Error('Elementor page id not found for contact-us')

console.log('Copying contact-us assets...')
const assetsDir = path.join(exportRoot, slug, 'assets')
for (const sub of ['css', 'images', 'fonts', 'js']) {
  copyDir(path.join(assetsDir, sub), path.join(publicAssets, sub))
}

const start = `<div class="elementor elementor-${elementorId}"`
const end = '<div class="ekit-template-content-markup ekit-template-content-footer'
const jsx = htmlToJsx(normalizeHtml(extractBetween(html, start, end)))

const outPath = path.join(frontend, 'src/pages/ContactPage.jsx')
fs.writeFileSync(
  outPath,
  `import usePageMeta from '../hooks/usePageMeta.js'

export default function ContactPage() {
  usePageMeta('contact_us')

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

fs.writeFileSync(
  path.join(frontend, 'src/config/contactPageMeta.js'),
  `// Auto-generated by scripts/convert-contact.mjs
export const CONTACT_PAGE_META = {
  contact_us: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    bodyClass: "wp-singular page-template page-template-elementor_header_footer page page-id-${pageId} wp-custom-logo wp-embed-responsive wp-theme-hello-elementor elementor-default elementor-template-full-width elementor-kit-9 elementor-page elementor-page-${pageId}",
  },
}
`,
  'utf8',
)

const indexPath = path.join(frontend, 'index.html')
let indexHtml = fs.readFileSync(indexPath, 'utf8')
const existingCss = new Set([...indexHtml.matchAll(/href="(\/assets\/css\/[^"]+)"/g)].map((m) => m[1]))
for (const match of html.matchAll(/href="assets\/css\/([^"]+\.css)"/g)) {
  existingCss.add(`/assets/css/${match[1]}`)
}

indexHtml = indexHtml.replace(/    <link rel="stylesheet" href="\/assets\/css\/[^"]+" \/>\n/g, '')
const cssTags = [...existingCss]
  .sort()
  .map((href) => `    <link rel="stylesheet" href="${href}" />`)
  .join('\n')
indexHtml = indexHtml.replace(/(<link rel="apple-touch-icon"[^>]+>\n)/, `$1${cssTags}\n`)
fs.writeFileSync(indexPath, indexHtml, 'utf8')

console.log(`Wrote ${outPath} (${jsx.length.toLocaleString()} chars)`)
console.log(`CSS files: ${existingCss.size}`)
