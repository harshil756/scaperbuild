#!/usr/bin/env node
/**
 * Replace JSX literals accidentally stored as CMS values (from wire-service-cms-inline).
 * Run: node backend/scripts/fix-corrupt-cms-blocks.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { ALL_CMS_PAGES } from './service-pages.config.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDir = path.join(__dirname, '../database/data')

const QUOTE_FORM_TITLES = {
  'office-pest-control': 'Office Pest Control In Melbourne',
  'restaurant-cafe-pest-control': 'Restaurant & Cafe Pest Control In Melbourne',
  'school-and-hospitality-facility-pest-control':
    'School And Hospitality Facility Pest Control in Melbourne',
  'warehouse-and-factory-pest-control-services-melbourne':
    'Warehouse and Factory Pest Control Services Melbourne',
}

function fixCmsTextValue(value) {
  if (typeof value !== 'string') return value
  const trimmed = value.trim()
  const single = trimmed.match(/^\{cmsText\([^,]+,\s*'((?:\\'|[^'])*)'\s*\)\}$/)
  if (single) return single[1].replace(/\\'/g, "'")
  const double = trimmed.match(/^\{cmsText\([^,]+,\s*"((?:\\"|[^"])*)"\s*\)\}$/)
  if (double) return double[1].replace(/\\"/g, '"')
  return value
}

function fixCmsHtmlValue(value) {
  if (typeof value !== 'string' || !value.trim().startsWith('<CmsHtml')) return value

  const markers = ["?? '", '?? "']
  let start = -1
  let marker = null
  for (const m of markers) {
    const idx = value.indexOf(m)
    if (idx !== -1) {
      start = idx
      marker = m
      break
    }
  }
  if (start === -1) {
    // Bare <CmsHtml html={c?.hero?.intro} /> with no fallback — drop to empty so frontend uses JSX fallback.
    return ''
  }

  const quote = marker.endsWith("'") ? "'" : '"'
  let inner = value.slice(start + marker.length)

  if (quote === "'" && inner.endsWith("'} />")) inner = inner.slice(0, -5)
  else if (quote === '"' && inner.endsWith('"} />')) inner = inner.slice(0, -5)
  else if (inner.endsWith("' />")) inner = inner.slice(0, -4)
  else if (inner.endsWith('" />')) inner = inner.slice(0, -4)

  inner = inner.replace(/\\"/g, '"').replace(/\\'/g, "'")

  const containerMatch = inner.match(
    /<div class="elementor-widget-container">([\s\S]*)<\/div>\s*<\/div>\s*$/,
  )
  if (containerMatch) return containerMatch[1].trim()

  return inner.trim()
}

function fixAnyString(value) {
  if (typeof value !== 'string') return value
  let fixed = fixCmsTextValue(value)
  fixed = fixCmsHtmlValue(fixed)
  // Labels like "Heading: {cmsText(...)}"
  if (fixed.includes('{cmsText(')) {
    fixed = fixed.replace(/\{cmsText\([^,]+,\s*'((?:\\'|[^'])*)'\s*\)\}/g, (_, t) => t.replace(/\\'/g, "'"))
    fixed = fixed.replace(/\{cmsText\([^,]+,\s*"((?:\\"|[^"])*)"\s*\)\}/g, (_, t) => t.replace(/\\"/g, '"'))
  }
  if (fixed.includes('<CmsHtml')) {
    fixed = fixCmsHtmlValue(fixed)
  }
  return fixed
}

function fixMetadata(meta) {
  if (!meta || typeof meta !== 'object') return { meta, changed: 0 }
  let changed = 0
  const next = Array.isArray(meta) ? [...meta] : { ...meta }

  if (Array.isArray(next)) {
    for (let i = 0; i < next.length; i++) {
      if (typeof next[i] === 'string') {
        const fixed = fixAnyString(next[i])
        if (fixed !== next[i]) {
          next[i] = fixed
          changed += 1
        }
      } else if (next[i] && typeof next[i] === 'object') {
        const nested = fixMetadata(next[i])
        if (nested.changed) {
          next[i] = nested.meta
          changed += nested.changed
        }
      }
    }
    return { meta: next, changed }
  }

  for (const [k, v] of Object.entries(next)) {
    if (typeof v === 'string') {
      const fixed = fixAnyString(v)
      if (fixed !== v) {
        next[k] = fixed
        changed += 1
      }
    } else if (v && typeof v === 'object') {
      const nested = fixMetadata(v)
      if (nested.changed) {
        next[k] = nested.meta
        changed += nested.changed
      }
    }
  }

  return { meta: next, changed }
}

function fixBlockValue(blockKey, value, slug) {
  if (typeof value !== 'string') return value

  let fixed = fixAnyString(value)

  if (blockKey === 'quote_form.title' && QUOTE_FORM_TITLES[slug]) {
    fixed = QUOTE_FORM_TITLES[slug]
  }

  return fixed
}

function fixJsonFile(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  let changed = 0

  for (const block of data.blocks ?? []) {
    if (typeof block.value === 'string') {
      const next = fixBlockValue(block.block_key, block.value, data.slug)
      if (next !== block.value) {
        block.value = next
        changed += 1
      }
    }
    if (typeof block.label === 'string') {
      const nextLabel = fixAnyString(block.label)
      if (nextLabel !== block.label) {
        block.label = nextLabel
        changed += 1
      }
    }
    if (block.metadata) {
      const { meta, changed: metaChanged } = fixMetadata(block.metadata)
      if (metaChanged) {
        block.metadata = meta
        changed += metaChanged
      }
    }
  }

  if (changed > 0) {
    fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
  }

  return changed
}

const extraSlugs = [
  'solar-panel-bird-proofing',
  'our-services-ant-pest-control',
]

const slugs = [
  ...new Set([
    ...ALL_CMS_PAGES.map((p) => p.slug),
    ...extraSlugs,
  ]),
]

let total = 0
for (const slug of slugs) {
  const filePath = path.join(dataDir, `${slug}-page.json`)
  if (!fs.existsSync(filePath)) {
    console.log(`${slug}: missing seed file`)
    continue
  }
  const n = fixJsonFile(filePath)
  total += n
  console.log(`${slug}: fixed ${n} value(s)`)
}

console.log(`Done — ${total} values corrected.`)
