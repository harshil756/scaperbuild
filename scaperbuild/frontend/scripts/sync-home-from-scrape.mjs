#!/usr/bin/env node
/**
 * Sync home page SEO + TrustIndex reviews HTML from scraped export.
 * Run: node scripts/sync-home-from-scrape.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { extractSeoFromHtml } from './extract-seo-from-html.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const htmlPath = path.join(root, 'export/7statespestcontrol.com.au/home/home.html')
const seoExtraPath = path.join(__dirname, '../src/config/pageSeoExtra.js')
const reviewsOut = path.join(__dirname, '../public/assets/html/trustindex-home-reviews.html')

if (!fs.existsSync(htmlPath)) {
  console.error('Missing scraped home.html — run: python scrape_page.py https://7statespestcontrol.com.au/')
  process.exit(1)
}

const html = fs.readFileSync(htmlPath, 'utf8')
const seo = extractSeoFromHtml(html)

const templateMatch = html.match(/<template id="trustindex-google-widget-html">([\s\S]*?)<\/template>/i)
if (templateMatch) {
  fs.mkdirSync(path.dirname(reviewsOut), { recursive: true })
  fs.writeFileSync(reviewsOut, templateMatch[1].trim(), 'utf8')
  console.log(`Wrote TrustIndex HTML (${templateMatch[1].length} chars) → ${reviewsOut}`)
} else if (html.includes('ti-review-item')) {
  const widgetMatch = html.match(/<div class="ti-widget ti-goog[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i)
  if (widgetMatch) {
    fs.mkdirSync(path.dirname(reviewsOut), { recursive: true })
    fs.writeFileSync(reviewsOut, widgetMatch[0], 'utf8')
    console.log(`Wrote TrustIndex widget snippet → ${reviewsOut}`)
  }
} else {
  console.warn('No TrustIndex reviews found in scrape')
}

const SITE_URL = 'https://7statespestcontrol.com.au/'
const CORRUPT_BASE = 'assets/images/asset_de7990ed.jpg'

function normalizeHomeUrls(value) {
  if (typeof value !== 'string') return value
  return value
    .replaceAll(`${CORRUPT_BASE}wp-content/`, `${SITE_URL}wp-content/`)
    .replaceAll(`${CORRUPT_BASE}?s=`, `${SITE_URL}?s=`)
    .replaceAll(CORRUPT_BASE, SITE_URL)
}

function normalizeHomeSeo(seo) {
  const og = Object.fromEntries(
    Object.entries(seo.og ?? {}).map(([key, value]) => [key, normalizeHomeUrls(value)]),
  )
  if (!og['og:image:width']) og['og:image:width'] = '150'
  if (!og['og:image:height']) og['og:image:height'] = '150'
  if (!og['og:image:type']) og['og:image:type'] = 'image/webp'

  return {
    ...seo,
    canonical: normalizeHomeUrls(seo.canonical) || SITE_URL,
    og,
    jsonLd: normalizeHomeUrls(seo.jsonLd),
  }
}

const homeSeo = normalizeHomeSeo({
  title: seo.title,
  description: seo.description,
  canonical: seo.canonical || SITE_URL,
  robots: seo.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  og: seo.og,
  twitter: seo.twitter,
  jsonLd: seo.jsonLd,
})

let seoFile = fs.readFileSync(seoExtraPath, 'utf8')
const homeBlockRe = /"home":\s*\{[\s\S]*?\n  \},/
if (!homeBlockRe.test(seoFile)) {
  console.error('Could not find "home" block in pageSeoExtra.js')
  process.exit(1)
}

const replacement = `"home": ${JSON.stringify(homeSeo, null, 2).replace(/\n/g, '\n  ')},`
seoFile = seoFile.replace(homeBlockRe, replacement)
fs.writeFileSync(seoExtraPath, seoFile, 'utf8')
console.log('Updated pageSeoExtra.js home SEO (title, og, jsonLd)')

const gtmMatch = html.match(/GTM-[A-Z0-9]+/)
const fbMatch = html.match(/11349564632|fbq\('init',\s*'(\d+)'/)
console.log('GTM:', gtmMatch?.[0] ?? 'not found')
console.log('FB pixel:', fbMatch?.[0] ?? 'check GTM container')
