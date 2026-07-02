#!/usr/bin/env node
/**
 * Replace JSX literals accidentally stored as CMS values (from wire-service-cms-inline).
 * Run: node backend/scripts/fix-corrupt-cms-blocks.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

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
  const match = trimmed.match(/^\{cmsText\([^,]+,\s*'((?:\\'|[^'])*)'\s*\)\}$/)
  if (match) return match[1].replace(/\\'/g, "'")
  return value
}

function fixCmsHtmlValue(value) {
  if (typeof value !== 'string' || !value.trim().startsWith('<CmsHtml')) return value

  const marker = "?? '"
  const start = value.indexOf(marker)
  if (start === -1) return value

  let inner = value.slice(start + marker.length)
  if (inner.endsWith("'} />")) inner = inner.slice(0, -5)
  inner = inner.replace(/\\"/g, '"').replace(/\\'/g, "'")

  const containerMatch = inner.match(
    /<div class="elementor-widget-container">([\s\S]*)<\/div>\s*<\/div>\s*$/,
  )
  if (containerMatch) return containerMatch[1].trim()

  return inner.trim()
}

function fixBlockValue(blockKey, value, slug) {
  if (typeof value !== 'string') return value

  let fixed = fixCmsTextValue(value)
  fixed = fixCmsHtmlValue(fixed)

  if (blockKey === 'quote_form.title' && QUOTE_FORM_TITLES[slug]) {
    fixed = QUOTE_FORM_TITLES[slug]
  }

  return fixed
}

function fixJsonFile(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  let changed = 0

  for (const block of data.blocks ?? []) {
    if (typeof block.value !== 'string') continue
    const next = fixBlockValue(block.block_key, block.value, data.slug)
    if (next !== block.value) {
      block.value = next
      changed += 1
    }
  }

  if (changed > 0) {
    fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
  }

  return changed
}

const slugs = [
  'office-pest-control',
  'restaurant-cafe-pest-control',
  'school-and-hospitality-facility-pest-control',
  'warehouse-and-factory-pest-control-services-melbourne',
]

let total = 0
for (const slug of slugs) {
  const filePath = path.join(dataDir, `${slug}-page.json`)
  const n = fixJsonFile(filePath)
  total += n
  console.log(`${slug}: fixed ${n} block(s)`)
}

console.log(`Done — ${total} values corrected.`)
