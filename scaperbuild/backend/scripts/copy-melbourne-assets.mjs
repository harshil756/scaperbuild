#!/usr/bin/env node
/**
 * Copy Melbourne page images to backend storage.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { collectAssetFilenames } from './lib/service-page-cms-lib.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const slug = 'melbourne'
const dataFile = path.join(__dirname, `../database/data/${slug}-page.json`)
const srcDir = path.join(__dirname, '../../frontend/public/assets/images')
const destDir = path.join(__dirname, `../storage/app/public/cms/${slug}`)

if (!fs.existsSync(dataFile)) {
  console.error('Run extract-melbourne-cms.mjs first.')
  process.exit(1)
}

const page = JSON.parse(fs.readFileSync(dataFile, 'utf8'))
const filenames = collectAssetFilenames(page)
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
