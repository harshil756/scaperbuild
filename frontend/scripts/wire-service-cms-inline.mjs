/**
 * Wire service page content_blocks to inline React CMS bindings (like bed bug page).
 * Usage: node scripts/wire-service-cms-inline.mjs <slug>
 * Example: node scripts/wire-service-cms-inline.mjs our-services-silverfish-treatment
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const slug = process.argv[2]

if (!slug) {
  console.error('Usage: node scripts/wire-service-cms-inline.mjs <slug>')
  process.exit(1)
}

const dataPath = path.join(root, 'backend/database/data', `${slug}-page.json`)
if (!fs.existsSync(dataPath)) {
  console.error(`Missing ${dataPath}`)
  process.exit(1)
}

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const blocks = data.blocks.filter((b) => b.block_key?.startsWith('content.'))

const jsxFiles = fs.readdirSync(path.join(root, 'frontend/src/pages/services'))
  .filter((f) => f.endsWith('.jsx'))

let pagePath = null
for (const file of jsxFiles) {
  const full = path.join(root, 'frontend/src/pages/services', file)
  const src = fs.readFileSync(full, 'utf8')
  if (src.includes(`usePageCms('${slug}')`)) {
    pagePath = full
    break
  }
}

if (!pagePath) {
  console.error(`No JSX page found for slug ${slug}`)
  process.exit(1)
}

let src = fs.readFileSync(pagePath, 'utf8')
const esc = (s) => String(s ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')

if (!src.includes('cmsWidgetHtml')) {
  if (src.includes("import { cmsText } from '../../utils/cmsMedia.js'")) {
    src = src.replace(
      "import { cmsText } from '../../utils/cmsMedia.js'",
      "import CmsIconList from '../../components/service/CmsIconList.jsx'\nimport { cmsText } from '../../utils/cmsMedia.js'\nimport { cmsWidgetHtml, cmsWidgetImage, cmsWidgetText } from '../../utils/cmsContent.js'",
    )
  }
}

if (!src.includes('const b = c?.content_blocks')) {
  src = src.replace(
    /(usePageMeta\([^)]+\)\n)/,
    "$1  const b = c?.content_blocks\n",
  )
}

src = src.replace(/\s*<ServiceCmsContentBlocks content=\{c\} \/>\n/, '\n')

let wired = 0

for (const block of blocks) {
  const m = block.block_key.match(/^content\.(heading|text|image|list)_([a-f0-9]+)$/)
  if (!m) continue
  const [, type, widgetId] = m
  const value = block.value ?? ''

  if (type === 'heading') {
    const patterns = [
      `(data-id="${widgetId}"[\\s\\S]*?data-widget_type="heading\\.default"[\\s\\S]*?<h[1-6] className="elementor-heading-title[^"]*">)([^<{]+)(</h[1-6]>)`,
      `(data-id="${widgetId}"[\\s\\S]*?data-widget_type="elementskit-heading\\.default"[\\s\\S]*?<h2 className="ekit-heading--title elementskit-section-title">)([^<{]+)(</h2>)`,
    ]
    for (const pat of patterns) {
      const re = new RegExp(pat, 'g')
      if (re.test(src)) {
        src = src.replace(new RegExp(pat, 'g'), `$1{cmsWidgetText(b, '${widgetId}', '${esc(value)}')}$3`)
        wired++
        break
      }
    }
  }

  if (type === 'text' && value && !value.includes('elementor-element-')) {
    const re = new RegExp(
      `(data-id="${widgetId}"[^>]*data-widget_type="text-editor\\.default">\\s*<div className="elementor-widget-container">\\s*)([\\s\\S]*?)(\\s*</div>\\s*</div>)`,
      'g',
    )
    if (re.test(src) && !src.includes(`cmsWidgetHtml(b, '${widgetId}'`)) {
      src = src.replace(re, `$1<CmsHtml html={cmsWidgetHtml(b, '${widgetId}', '${esc(value)}')} />$3`)
      wired++
    }
  }

  if (type === 'image' && (block.image_path || block.metadata?.image_src)) {
    const fallback = esc(block.metadata?.image_src || block.image_path || '')
    const re = new RegExp(
      `(data-id="${widgetId}"[^>]*data-widget_type="image\\.default">[\\s\\S]*?<img[^>]*\\ssrc=")([^"{]+)(")`,
      'g',
    )
    if (re.test(src) && !src.includes(`cmsWidgetImage(b, '${widgetId}'`)) {
      src = src.replace(re, `$1{cmsWidgetImage(b, '${widgetId}', '${fallback}')}$3`)
      src = src.replace(
        new RegExp(`(data-id="${widgetId}"[\\s\\S]*?<img[^>]*) srcSet="[^"]*"`, 'g'),
        '$1',
      )
      wired++
    }
  }

  if (type === 'list' && block.metadata?.items?.length) {
    const items = block.metadata.items.map((i) => `'${esc(i)}'`).join(', ')
    const re = new RegExp(
      `(data-id="${widgetId}"[^>]*data-widget_type="icon-list\\.default">\\s*<div className="elementor-widget-container">\\s*)<ul className="elementor-icon-list-items">[\\s\\S]*?</ul>`,
      'g',
    )
    if (re.test(src) && !src.includes(`widgetId="${widgetId}"`)) {
      src = src.replace(
        re,
        `$1<CmsIconList blocks={b} fallback={[${items}]} widgetId="${widgetId}" />`,
      )
      wired++
    }
  }
}

// Reviews + CTA + FAQ headings (common patterns)
src = src.replace(
  /<h2 className="elementor-heading-title elementor-size-default">Clients Reviews<\/h2>/g,
  '<h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.eyebrow, \'Clients Reviews\')}</h2>',
)
src = src.replace(
  /<h2 className="elementor-heading-title elementor-size-default">7 States Pest Control for Reliable Pest Management Solutions<\/h2>/g,
  '<h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.title, \'7 States Pest Control for Reliable Pest Management Solutions\')}</h2>',
)
src = src.replace(
  /<h3 className="elementor-heading-title elementor-size-default">Reviews of Our Pest Control Services<\/h3>/g,
  '<h3 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.subtitle, \'Reviews of Our Pest Control Services\')}</h3>',
)
src = src.replace(
  /<h6 className="elementor-heading-title elementor-size-default">EXCELLENT<\/h6>/g,
  '<h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.rating_label, \'EXCELLENT\')}</h6>',
)

// CTA headings
src = src.replace(
  /<h2 className="elementor-heading-title elementor-size-default">Ideas to reality<\/h2>/g,
  '<h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.cta?.eyebrow, \'Ideas to reality\')}</h2>',
)
src = src.replace(
  /<h2 className="elementor-heading-title elementor-size-default">Talk to Us Today to Learn More<\/h2>/g,
  '<h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.cta?.title, \'Talk to Us Today to Learn More\')}</h2>',
)

// FAQ title
src = src.replace(
  /<h2 className="elementor-heading-title elementor-size-default">Frequently Asked Questions<\/h2>/g,
  '<h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.faq?.title, \'Frequently Asked Questions\')}</h2>',
)

// Remove unused ServiceCmsContentBlocks import if no longer used
if (!src.includes('ServiceCmsContentBlocks')) {
  src = src.replace(/import ServiceCmsContentBlocks from '[^']+'\n/, '')
}

fs.writeFileSync(pagePath, src)
console.log(`[${slug}] Wired ${wired} blocks in ${path.basename(pagePath)}`)
