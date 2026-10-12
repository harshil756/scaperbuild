#!/usr/bin/env node
/**
 * Copy home page images from frontend/public/assets/images to backend storage.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const dataFile = path.join(__dirname, '../database/data/home-page.json')
const srcDir = path.join(root, 'frontend/public/assets/images')
const destDir = path.join(__dirname, '../storage/app/public/cms/home')

if (!fs.existsSync(dataFile)) {
  console.error('Run extract-home-cms.mjs first.')
  process.exit(1)
}

const page = JSON.parse(fs.readFileSync(dataFile, 'utf8'))
const filenames = new Set()

function collect(pathOrMeta) {
  if (!pathOrMeta) return
  if (typeof pathOrMeta === 'string') {
    filenames.add(path.basename(pathOrMeta))
    return
  }
  if (pathOrMeta.image_path) filenames.add(path.basename(pathOrMeta.image_path))
  if (pathOrMeta.background_image_path) filenames.add(path.basename(pathOrMeta.background_image_path))
  if (pathOrMeta.metadata) {
    if (pathOrMeta.metadata.filename) filenames.add(pathOrMeta.metadata.filename)
    if (pathOrMeta.metadata.image_src) filenames.add(path.basename(pathOrMeta.metadata.image_src))
    if (pathOrMeta.metadata.posts) {
      for (const p of pathOrMeta.metadata.posts) {
        if (p.image_src) filenames.add(path.basename(p.image_src))
      }
    }
  }
}

for (const block of page.blocks) {
  collect(block)
}

fs.mkdirSync(destDir, { recursive: true })

let copied = 0
let missing = 0
for (const name of [...filenames].sort()) {
  const src = path.join(srcDir, name)
  const dest = path.join(destDir, name)
  if (!fs.existsSync(src)) {
    console.warn(`Missing: ${name}`)
    missing++
    continue
  }
  fs.copyFileSync(src, dest)
  copied++
}

console.log(`Copied ${copied} files to ${destDir}`)
if (missing) console.warn(`${missing} files not found in frontend assets`)
