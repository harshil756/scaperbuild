import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import HtmlToJsx from 'htmltojsx'
import { convertInternalAnchorsToLinks } from './link-utils.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const frontend = path.resolve(__dirname, '..')
const exportRoot = path.join(root, 'export/7statespestcontrol.com.au')
const pagesDir = path.join(frontend, 'src/pages/blog')
const publicAssets = path.join(frontend, 'public/assets')

const KNOWN_SLUGS = new Set([
  'home',
  'about-us',
  'blog',
  'contact-us',
  'our-services',
  'melbourne',
  'office-pest-control',
  'restaurant-cafe-pest-control',
  'school-and-hospitality-facility-pest-control',
  'warehouse-and-factory-pest-control-services-melbourne',
  'solar-panel-bird-proofing',
  'rodent-control-in-melbourne',
  'wasp-removal-melbourne',
  'flea-treatment',
  'logs',
])

function slugToComponent(slug) {
  let name = slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
  if (/^\d/.test(name)) name = `Post${name}`
  return `${name}PostPage`
}

function slugToMetaKey(slug) {
  return `post_${slug.replace(/-/g, '_')}`
}

function findHtmlFile(slug) {
  const dir = path.join(exportRoot, slug)
  const direct = path.join(dir, `${slug}.html`)
  if (fs.existsSync(direct)) return direct
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.html'))
  if (files.length === 1) return path.join(dir, files[0])
  throw new Error(`HTML not found for ${slug}`)
}

function extractBetween(source, start, end) {
  const startIdx = source.indexOf(start)
  if (startIdx === -1) throw new Error(`Start marker not found for ${start}`)
  const endIdx = source.indexOf(end, startIdx)
  if (endIdx === -1) throw new Error(`End marker not found`)
  return source.slice(startIdx, endIdx)
}

function normalizeHtml(fragment) {
  return fragment
    .replace(/\sstyle="position:\s*fixed;\s*width:\s*1920px[^"]*"/gi, '')
    .replace(/<section[^>]*elementor-sticky__spacer[^>]*>[\s\S]*?<\/section>/gi, '')
    .replace(/href="assets\//g, 'href="/assets/')
    .replace(/src="assets\//g, 'src="/assets/')
    .replace(/srcset="assets\//g, 'srcset="/assets/')
    .replace(/,\s*assets\//g, ', /assets/')
    .replace(/href="home\.html"/g, 'href="/"')
    .replace(/href="about-us\.html"/g, 'href="/about-us"')
    .replace(/href="blog\.html"/g, 'href="/blog"')
    .replace(/href="contact-us\.html"/g, 'href="/contact-us"')
    .replace(
      /<a href="#">\s*<span class="elementor-icon-list-text">Home<\/span>/g,
      '<a href="/"><span class="elementor-icon-list-text">Home</span>',
    )
    .replace(/href="\.\.\/([^"]+)\/"/g, 'href="/$1"')
    .replace(/href="\.\.\/\.\.\/([^"]+)\/"/g, 'href="/$1/"')
    .replace(/href="\.\.\/([^"]+)\/"/g, 'href="/$1/"')
    .replace(/\srequired="required"/g, ' required')
    .replace(/\ssize="1"/g, '')
    .replace(/\sekit-dom-added="yes"/g, '')
}

function htmlToJsx(html) {
  const converter = new HtmlToJsx({ createClass: false })
  let jsx = converter.convert(html)
  jsx = jsx
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

function extractMeta(html, slug) {
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.replace(/&amp;/g, '&') ?? slug
  const description =
    html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1]?.replace(/&amp;/g, '&') ??
    ''
  const pageId = html.match(/postid-(\d+)/)?.[1] ?? html.match(/elementor-page-(\d+)/)?.[1] ?? '0'
  const elementorId =
    html.match(/<div class="elementor elementor-(\d+)[^"]*elementor-location-single/)?.[1] ??
    html.match(/<div class="elementor elementor-(\d+)"[^>]+data-elementor-post-type="page"/)?.[1]
  if (!elementorId) throw new Error(`Elementor id not found for ${slug}`)
  return { slug, title, description, pageId, elementorId }
}

function isBlogPostHtml(html) {
  return html.includes('elementor-location-single') && html.includes('type-post')
}

function discoverBlogSlugs() {
  return fs
    .readdirSync(exportRoot, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .filter((slug) => !KNOWN_SLUGS.has(slug) && !slug.startsWith('our-services-'))
    .filter((slug) => {
      try {
        const html = fs.readFileSync(findHtmlFile(slug), 'utf8')
        return isBlogPostHtml(html)
      } catch {
        return false
      }
    })
}

const slugs = discoverBlogSlugs()
fs.mkdirSync(pagesDir, { recursive: true })

const allMeta = {}
const routeEntries = []

console.log(`Converting ${slugs.length} blog posts...`)

for (const slug of slugs) {
  try {
    const htmlPath = findHtmlFile(slug)
    const html = fs.readFileSync(htmlPath, 'utf8')
    const meta = extractMeta(html, slug)
    const start = `<div class="elementor elementor-${meta.elementorId} elementor-location-single`
    const end = '<div class="ekit-template-content-markup ekit-template-content-footer'
    const jsx = htmlToJsx(normalizeHtml(extractBetween(html, start, end)))
    const componentName = slugToComponent(slug)
    const metaKey = slugToMetaKey(slug)

    const assetsDir = path.join(exportRoot, slug, 'assets')
    for (const sub of ['css', 'images', 'fonts', 'js']) {
      copyDir(path.join(assetsDir, sub), path.join(publicAssets, sub))
    }

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

    allMeta[metaKey] = {
      title: meta.title,
      description: meta.description,
      bodyClass: `wp-singular single single-post wp-custom-logo wp-embed-responsive wp-theme-hello-elementor elementor-default elementor-template-full-width elementor-kit-9 elementor-page elementor-page-${meta.pageId}`,
    }
    routeEntries.push({ slug, componentName })
    console.log(`  ✓ ${slug}`)
  } catch (err) {
    console.warn(`  ✗ ${slug}: ${err.message}`)
  }
}

fs.writeFileSync(
  path.join(frontend, 'src/config/blogPostPageMeta.js'),
  `// Auto-generated by scripts/convert-blog-posts.mjs
export const BLOG_POST_PAGE_META = ${JSON.stringify(allMeta, null, 2)}
`,
  'utf8',
)

fs.writeFileSync(
  path.join(frontend, 'src/config/blogSlugs.js'),
  `// Auto-generated by scripts/convert-blog-posts.mjs
export const BLOG_SLUGS = new Set(${JSON.stringify(routeEntries.map((r) => r.slug), null, 2)})
`,
  'utf8',
)

fs.writeFileSync(
  path.join(frontend, 'src/blogPostRoutes.jsx'),
  `// Auto-generated by scripts/convert-blog-posts.mjs
${routeEntries.map((r) => `import ${r.componentName} from './pages/blog/${r.componentName}.jsx'`).join('\n')}

export const blogPostRoutes = [
${routeEntries.flatMap((r) => [
  `  { path: '${r.slug}', element: <${r.componentName} /> },`,
  `  { path: '${r.slug}/', element: <${r.componentName} /> },`,
]).join('\n')}
]
`,
  'utf8',
)

console.log(`\nDone: ${routeEntries.length} blog post pages`)
