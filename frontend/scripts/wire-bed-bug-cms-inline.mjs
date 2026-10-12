/**
 * Wire bed bug page content blocks to inline React CMS bindings.
 * Run: node scripts/wire-bed-bug-cms-inline.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pagePath = path.resolve(__dirname, '../src/pages/services/OurServicesBedBugTreatmentPage.jsx')
const dataPath = path.resolve(__dirname, '../../backend/database/data/our-services-bed-bug-treatment-page.json')

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const blocks = data.blocks.filter((b) => b.block_key?.startsWith('content.'))

let src = fs.readFileSync(pagePath, 'utf8')

// Ensure imports and block alias
if (!src.includes('cmsWidgetHtml')) {
  src = src.replace(
    "import { cmsText } from '../../utils/cmsMedia.js'",
    "import CmsIconList from '../../components/service/CmsIconList.jsx'\nimport { cmsText } from '../../utils/cmsMedia.js'\nimport { cmsWidgetHtml, cmsWidgetImage, cmsWidgetList, cmsWidgetText } from '../../utils/cmsContent.js'",
  )
}

if (!src.includes('const b = c?.content_blocks')) {
  src = src.replace(
    "usePageMeta('our_services_bed_bug_treatment', page)\n",
    "usePageMeta('our_services_bed_bug_treatment', page)\n  const b = c?.content_blocks\n",
  )
}

// Remove DOM-patcher (inline bindings replace it)
src = src.replace(/\s*<ServiceCmsContentBlocks content=\{c\} \/>\n/, '\n')

for (const block of blocks) {
  const m = block.block_key.match(/^content\.(heading|text|image|list)_([a-f0-9]+)$/)
  if (!m) continue
  const [, type, widgetId] = m
  const value = block.value ?? ''
  const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')

  if (type === 'heading') {
    // elementor heading
    const re = new RegExp(
      `(data-id="${widgetId}"[^>]*data-widget_type="heading\\.default">[\\s\\S]*?<h[12] className="elementor-heading-title[^"]*">)([^<]*)(</h[12]>)`,
      'g',
    )
    src = src.replace(re, `$1{cmsWidgetText(b, '${widgetId}', '${esc(value)}')}$3`)

    // elementskit heading
    const reEkit = new RegExp(
      `(data-id="${widgetId}"[^>]*data-widget_type="elementskit-heading\\.default">[\\s\\S]*?<h2 className="ekit-heading--title elementskit-section-title">)([^<]*)(</h2>)`,
      'g',
    )
    src = src.replace(reEkit, `$1{cmsWidgetText(b, '${widgetId}', '${esc(value)}')}$3`)
  }

  if (type === 'text' && value && !value.includes('elementor-element-')) {
    const re = new RegExp(
      `(data-id="${widgetId}"[^>]*data-widget_type="text-editor\\.default">\\s*<div className="elementor-widget-container">\\s*)([\\s\\S]*?)(\\s*</div>\\s*</div>)`,
      'g',
    )
    const fallback = esc(value)
    src = src.replace(re, `$1<CmsHtml html={cmsWidgetHtml(b, '${widgetId}', '${fallback}')} />$3`)
  }

  if (type === 'image' && block.image_path) {
    const fallback = esc(block.metadata?.image_src || `/storage/${block.image_path}`)
    const re = new RegExp(
      `(data-id="${widgetId}"[^>]*data-widget_type="image\\.default">[\\s\\S]*?<img[^>]*src=")([^"]*)(")`,
      'g',
    )
    src = src.replace(re, `$1{cmsWidgetImage(b, '${widgetId}', '${fallback}')}$3`)
  }

  if (type === 'list' && block.metadata?.items?.length) {
    const items = block.metadata.items.map((i) => `'${esc(i)}'`).join(', ')
    const re = new RegExp(
      `(data-id="${widgetId}"[^>]*data-widget_type="icon-list\\.default">\\s*<div className="elementor-widget-container">\\s*)<ul className="elementor-icon-list-items">[\\s\\S]*?</ul>`,
      'g',
    )
    src = src.replace(
      re,
      `$1<CmsIconList blocks={b} fallback={[${items}]} widgetId="${widgetId}" />`,
    )
  }
}

// Reviews from structured content
src = src.replace(
  /<h2 className="elementor-heading-title elementor-size-default">Clients Reviews<\/h2>/,
  '<h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.eyebrow, \'Clients Reviews\')}</h2>',
)
src = src.replace(
  /<h2 className="elementor-heading-title elementor-size-default">7 States Pest Control for Reliable Pest Management Solutions<\/h2>/,
  '<h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.title, \'7 States Pest Control for Reliable Pest Management Solutions\')}</h2>',
)
src = src.replace(
  /<h3 className="elementor-heading-title elementor-size-default">Reviews of Our Pest Control Services<\/h3>/,
  '<h3 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.subtitle, \'Reviews of Our Pest Control Services\')}</h3>',
)
src = src.replace(
  /<h6 className="elementor-heading-title elementor-size-default">EXCELLENT<\/h6>/,
  '<h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.rating_label, \'EXCELLENT\')}</h6>',
)
src = src.replace(
  /<p>Based on&nbsp;45 reviews<\/p>/,
  '<CmsHtml html={c?.reviews?.count_text ?? \'<p>Based on&nbsp;45 reviews</p>\'} />',
)

// CTA structured
src = src.replace(
  /<h2 className="elementor-heading-title elementor-size-default">Ideas to reality<\/h2>/,
  '<h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.cta?.eyebrow, \'Ideas to reality\')}</h2>',
)
src = src.replace(
  /<h2 className="elementor-heading-title elementor-size-default">Talk to Us Today to Learn More<\/h2>/,
  '<h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.cta?.title, \'Talk to Us Today to Learn More\')}</h2>',
)

// CTA body - only if still static paragraph in e97e10c widget
const ctaBodyRe = /(data-id="e97e10c"[^>]*data-widget_type="text-editor\.default">\s*<div className="elementor-widget-container">\s*)<p>Do you have any specific/
if (ctaBodyRe.test(src) && data.blocks.find((b) => b.block_key === 'cta.body')) {
  const ctaBody = esc(data.blocks.find((b) => b.block_key === 'cta.body').value)
  src = src.replace(
    /(data-id="e97e10c"[^>]*data-widget_type="text-editor\.default">\s*<div className="elementor-widget-container">\s*)<p>[\s\S]*?<\/p>(\s*<\/div>)/,
    `$1<CmsHtml html={c?.cta?.body ?? '${ctaBody}'} />$2`,
  )
}

fs.writeFileSync(pagePath, src)
console.log('Wired bed bug page with inline CMS bindings')
