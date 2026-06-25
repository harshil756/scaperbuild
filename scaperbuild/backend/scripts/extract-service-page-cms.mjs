#!/usr/bin/env node
/**
 * Extract CMS blocks for a single service page.
 * Usage: node scripts/extract-service-page-cms.mjs [slug]
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { extractAntLikePage } from './lib/extract-ant-like-cms.mjs'
import { extractCommercialPage } from './lib/extract-commercial-cms.mjs'
import { extractGenericPage } from './lib/extract-generic-cms.mjs'
import { readSeo, resolveCssFile } from './lib/service-page-cms-lib.mjs'
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

const seoRaw = fs.readFileSync(path.join(root, 'frontend/src/config/pageSeoExtra.js'), 'utf8')

for (const pageConfig of pages) {
  const jsxPath = path.join(root, pageConfig.jsxPath)
  if (!fs.existsSync(jsxPath)) {
    console.error(`Missing JSX: ${jsxPath}`)
    continue
  }
  const jsx = fs.readFileSync(jsxPath, 'utf8')
  const cssPath = resolveCssFile(root, pageConfig.elementorId)
  const css = cssPath && fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : ''
  const seo = readSeo(seoRaw, pageConfig.seoKey)

  let page
  if (pageConfig.template === 'ant-like') {
    page = extractAntLikePage({ ...pageConfig, seo, jsx, css })
  } else if (pageConfig.template === 'commercial') {
    page = extractCommercialPage({ ...pageConfig, seo, jsx, css })
  } else {
    page = extractGenericPage({ ...pageConfig, seo, jsx, css })
  }

  const outFile = path.join(__dirname, `../database/data/${pageConfig.slug}-page.json`)
  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, JSON.stringify(page, null, 2))
  console.log(`[${pageConfig.slug}] Wrote ${page.blocks.length} blocks → ${outFile}`)
}
