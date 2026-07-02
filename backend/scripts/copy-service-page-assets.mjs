#!/usr/bin/env node
/**
 * Copy service page images to backend storage.
 * Usage: node scripts/copy-service-page-assets.mjs [slug]
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { collectAssetFilenames } from './lib/service-page-cms-lib.mjs'
import { findServicePage, COMMERCIAL_PAGES, SERVICE_PAGES, ALL_CMS_PAGES } from './service-pages.config.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const slugArg = process.argv[2]
let pages = SERVICE_PAGES
if (slugArg === '--commercial') {
  pages = COMMERCIAL_PAGES
} else if (slugArg === '--all') {
  pages = ALL_CMS_PAGES
} else if (slugArg) {
  pages = [findServicePage(slugArg)].filter(Boolean)
}

if (!pages.length) {
  console.error(slugArg ? `Unknown slug: ${slugArg}` : 'No pages configured')
  process.exit(1)
}

const srcDir = path.join(root, 'frontend/public/assets/images')
let totalCopied = 0
let totalMissing = 0

for (const pageConfig of pages) {
  const dataFile = path.join(__dirname, `../database/data/${pageConfig.slug}-page.json`)
  if (!fs.existsSync(dataFile)) {
    console.warn(`[${pageConfig.slug}] Missing JSON — run extract first`)
    continue
  }
  const page = JSON.parse(fs.readFileSync(dataFile, 'utf8'))
  const filenames = collectAssetFilenames(page)
  const destDir = path.join(__dirname, `../storage/app/public/cms/${pageConfig.slug}`)
  fs.mkdirSync(destDir, { recursive: true })

  let copied = 0
  let missing = 0
  for (const name of [...filenames].sort()) {
    const src = path.join(srcDir, name)
    const dest = path.join(destDir, name)
    if (!fs.existsSync(src)) {
      console.warn(`[${pageConfig.slug}] Missing: ${name}`)
      missing++
      continue
    }
    fs.copyFileSync(src, dest)
    copied++
  }
  totalCopied += copied
  totalMissing += missing
  console.log(`[${pageConfig.slug}] Copied ${copied} images`)
}

console.log(`Done: ${totalCopied} copied, ${totalMissing} missing`)
