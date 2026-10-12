import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const blogDir = path.join(__dirname, '../src/pages/blog')

let updated = 0
for (const file of fs.readdirSync(blogDir).filter((name) => name.endsWith('.jsx'))) {
  const filePath = path.join(blogDir, file)
  const original = fs.readFileSync(filePath, 'utf8')
  let next = original
    .replace(/^\s*import \{ Link \} from 'react-router-dom'\s*\n/gm, (match, offset) => {
      return offset === 0 ? match : ''
    })
    .replace(/,\s*assets\//g, ', /assets/')

  if (next !== original) {
    fs.writeFileSync(filePath, next, 'utf8')
    updated += 1
    console.log(`  ✓ ${file}`)
  }
}

console.log(`\nFixed ${updated} blog pages`)
