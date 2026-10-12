import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import HtmlToJsx from 'htmltojsx'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const frontend = path.resolve(__dirname, '..')

const PAGES = {
  home: {
    htmlPath: path.join(root, 'scraped/export/7statespestcontrol.com.au/home/home.html'),
    start: '<div class="elementor elementor-14"',
    end: '<div class="ekit-template-content-markup ekit-template-content-footer',
    outPath: path.join(frontend, 'src/pages/HomePage.jsx'),
    componentName: 'HomePage',
  },
  about: {
    htmlPath: path.join(root, 'scraped/export/7statespestcontrol.com.au/about-us/about-us.html'),
    start: '<div class="elementor elementor-16"',
    end: '<div class="ekit-template-content-markup ekit-template-content-footer',
    outPath: path.join(frontend, 'src/pages/AboutPage.jsx'),
    componentName: 'AboutPage',
  },
}

function extractBetween(source, start, end) {
  const startIdx = source.indexOf(start)
  if (startIdx === -1) {
    throw new Error(`Start marker not found: ${start}`)
  }
  const endIdx = source.indexOf(end, startIdx)
  if (endIdx === -1) {
    throw new Error(`End marker not found: ${end}`)
  }
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

function convertPage(page) {
  const html = fs.readFileSync(page.htmlPath, 'utf8')
  const fragment = normalizeHtml(extractBetween(html, page.start, page.end))
  const jsx = htmlToJsx(fragment)

  const output = `import usePageMeta from '../hooks/usePageMeta.js'

export default function ${page.componentName}() {
  usePageMeta('${page.metaKey}')

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

  fs.mkdirSync(path.dirname(page.outPath), { recursive: true })
  fs.writeFileSync(page.outPath, output, 'utf8')
  console.log(`Wrote ${page.outPath} (${output.length.toLocaleString()} chars)`)
}

const target = process.argv[2] || 'all'
const selected = target === 'all' ? Object.keys(PAGES) : [target]

for (const key of selected) {
  const page = PAGES[key]
  if (!page) {
    console.error(`Unknown page: ${key}`)
    process.exit(1)
  }
  page.metaKey = key
  convertPage(page)
}
