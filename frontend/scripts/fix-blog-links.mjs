import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { normalizeInternalPath } from './link-utils.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.join(__dirname, '../src')

function walk(dir) {
  const files = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...walk(full))
    else if (entry.name.endsWith('.jsx')) files.push(full)
  }
  return files
}

let updated = 0
for (const file of walk(srcDir)) {
  const original = fs.readFileSync(file, 'utf8')
  let next = original
    .replace(/,\s*assets\//g, ', /assets/')
    .replace(/\bto="\/\.\.\/([^"]+)"/g, 'to="/$1"')

  next = next.replace(/\bto="([^"]+)"/g, (match, href) => {
    const normalized = normalizeInternalPath(href)
    if (!normalized || normalized === href) return match
    return `to="${normalized}"`
  })

  if (next !== original) {
    fs.writeFileSync(file, next, 'utf8')
    updated += 1
    console.log(`  ✓ ${path.relative(srcDir, file)}`)
  }
}

console.log(`\nUpdated ${updated} files`)
