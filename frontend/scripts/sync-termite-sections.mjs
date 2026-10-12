#!/usr/bin/env node
/**
 * Insert missing termite page sections from the live site into the React page.
 */
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import HtmlToJsx from 'htmltojsx'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const pagePath = path.join(root, 'frontend/src/pages/services/OurServicesTermitePestControlPage.jsx')
const imagesDir = path.join(root, 'frontend/public/assets/images')

const LIVE_URL = 'https://7statespestcontrol.com.au/our-services/termite-pest-control/'

const SECTIONS = [
  { id: '167fefb', insertBefore: '2956c52' },
  { id: '6a9db2f', insertBefore: 'f58628f' },
  { id: '542df0a', insertBefore: 'f58628f' },
]

function htmlToJsx(html) {
  const converter = new HtmlToJsx({ createClass: false })
  let jsx = converter.convert(html)
  return jsx
    .replace(/\bclass=/g, 'className=')
    .replace(/\bfor=/g, 'htmlFor=')
    .replace(/\bviewbox=/g, 'viewBox=')
    .replace(/\btabindex=/g, 'tabIndex=')
    .replace(/\breadonly=/g, 'readOnly=')
    .replace(/\bautocomplete=/g, 'autoComplete=')
    .replace(/data-id="(\d+)"/g, 'data-id="$1"')
    .replace(/data-id=\{(\d+)\}/g, 'data-id="$1"')
    .replace(/<(\w+)([^>]*?)\s\/>/g, '<$1$2 />')
    .replace(/<img([^>]*[^/])>/g, '<img$1 />')
    .replace(/<input([^>]*[^/])>/g, '<input$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/style="([^"]*)"/g, (_, style) => {
      const props = style
        .split(';')
        .filter(Boolean)
        .map((rule) => {
          const [key, val] = rule.split(':').map((s) => s.trim())
          if (!key || !val) return null
          const camel = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
          return `${camel}: '${val.replace(/'/g, "\\'")}'`
        })
        .filter(Boolean)
      return props.length ? `style={{${props.join(', ')}}}` : ''
    })
}

function extractSection(html, startId, endId = null) {
  const marker = `elementor-element-${startId}`
  const start = html.lastIndexOf('<div', html.indexOf(marker))
  if (start === -1) throw new Error(`Section ${startId} not found`)

  let depth = 0
  const tagRe = /<div\b[^>]*>|<\/div>/gi
  tagRe.lastIndex = start
  let match
  while ((match = tagRe.exec(html))) {
    if (match[0].startsWith('</')) depth -= 1
    else depth += 1
    if (depth === 0) return html.slice(start, tagRe.lastIndex)
  }

  if (endId) {
    const end = html.indexOf(`elementor-element-${endId}`, start + marker.length)
    if (end === -1) throw new Error(`End ${endId} not found after ${startId}`)
    const endDiv = html.lastIndexOf('<div', end)
    return html.slice(start, endDiv >= start ? endDiv : end)
  }

  throw new Error(`Could not close section ${startId}`)
}

async function downloadImage(url) {
  const clean = url.split(/\s/)[0]
  const base = path.basename(clean.split('?')[0])
  const ext = path.extname(base) || '.jpg'
  const stem = path.basename(base, ext).replace(/[^a-zA-Z0-9._-]+/g, '_')
  const hash = crypto.createHash('md5').update(clean).digest('hex').slice(0, 8)
  const filename = `${stem}_${hash}${ext}`
  const dest = path.join(imagesDir, filename)
  if (!fs.existsSync(dest)) {
    const res = await fetch(clean)
    if (!res.ok) throw new Error(`Failed ${clean}: ${res.status}`)
    fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()))
    console.log(`  downloaded ${filename}`)
  }
  return `/assets/images/${filename}`
}

async function localizeImages(fragment) {
  const urls = [...fragment.matchAll(/https:\/\/7statespestcontrol\.com\.au\/wp-content\/uploads\/[^"'\s)]+/g)].map((m) => m[0])
  let out = fragment
  for (const url of [...new Set(urls)]) {
    const local = await downloadImage(url)
    out = out.split(url).join(local)
    const encoded = url.replace(/&/g, '&amp;')
    out = out.split(encoded).join(local)
  }
  return out
}

function indentJsx(jsx, spaces = 8) {
  const pad = ' '.repeat(spaces)
  return jsx
    .split('\n')
    .map((line) => (line.trim() ? `${pad}${line}` : ''))
    .join('\n')
}

async function main() {
  console.log(`Fetching ${LIVE_URL}`)
  const res = await fetch(LIVE_URL)
  const html = await res.text()

  let page = fs.readFileSync(pagePath, 'utf8')

  for (const section of SECTIONS) {
    if (page.includes(`data-id="${section.id}"`)) {
      console.log(`Skip ${section.id} — already present`)
      continue
    }

    const marker = `data-id="${section.insertBefore}"`
    const idx = page.indexOf(marker)
    if (idx === -1) throw new Error(`Insert marker ${section.insertBefore} not found`)
    const lineStart = page.lastIndexOf('\n', idx) + 1

    let chunk = extractSection(html, section.id)
    chunk = chunk.replace(/\sstyle="position:\s*fixed;\s*width:\s*1920px[^"]*"/gi, '')
    chunk = await localizeImages(chunk)
    const jsx = indentJsx(htmlToJsx(chunk))
    page = `${page.slice(0, lineStart)}\n${jsx}\n${page.slice(lineStart)}`
    console.log(`Inserted section ${section.id} before ${section.insertBefore}`)
  }

  fs.writeFileSync(pagePath, page, 'utf8')
  console.log(`Updated ${pagePath}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
