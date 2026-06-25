#!/usr/bin/env node
/**
 * Copy blog images from frontend/public/assets/images to backend storage.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const dataFile = path.join(__dirname, '../database/data/blogs.json')
const srcDir = path.join(root, 'frontend/public/assets/images')
const exportRoot = path.join(root, 'export/7statespestcontrol.com.au')
const destDir = path.join(__dirname, '../storage/app/public/cms/blog')

if (!fs.existsSync(dataFile)) {
  console.error('Run extract-blogs-cms.mjs first.')
  process.exit(1)
}

const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'))
const filenames = new Set()

function collectFromHtml(html) {
  if (!html) return
  for (const match of html.matchAll(/\/(?:storage\/cms\/blog|assets\/images)\/([^"'\s,]+)/g)) {
    filenames.add(match[1])
  }
}

for (const post of data.posts) {
  if (post.featured_image_path) {
    filenames.add(path.basename(post.featured_image_path))
  }
  collectFromHtml(post.content_html)
}

fs.mkdirSync(destDir, { recursive: true })

/** @type {Map<string, string>} */
const exportIndex = new Map()

function indexExportImages(dir) {
  if (!fs.existsSync(dir)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      indexExportImages(full)
    } else if (!exportIndex.has(entry.name)) {
      exportIndex.set(entry.name, full)
    }
  }
}

indexExportImages(exportRoot)

let copied = 0
let missing = 0

for (const name of [...filenames].sort()) {
  const dest = path.join(destDir, name)
  const src = path.join(srcDir, name)
  const fallback = exportIndex.get(name)

  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest)
    copied++
    continue
  }

  if (fallback && fs.existsSync(fallback)) {
    fs.copyFileSync(fallback, dest)
    copied++
    continue
  }

  console.warn(`Missing: ${name}`)
  missing++
}

console.log(`Copied ${copied} files to ${destDir}`)
if (missing) console.warn(`${missing} files not found in frontend assets`)
