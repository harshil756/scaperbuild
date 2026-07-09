import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '../public')
const baseUrl = 'https://7statespestcontrol.com.au'

const files = [
  'robots.txt',
  'llms.txt',
  'sitemap_index.xml',
  'sitemap.xml',
  'post-sitemap.xml',
  'page-sitemap.xml',
  'elementskit_template-sitemap.xml',
  'location-sitemap.xml',
  'category-sitemap.xml',
  'author-sitemap.xml',
]

fs.mkdirSync(publicDir, { recursive: true })

for (const file of files) {
  const url = `${baseUrl}/${file}`
  const res = await fetch(url)
  if (!res.ok) {
    console.error(`Failed to fetch ${url}: ${res.status}`)
    process.exitCode = 1
    continue
  }
  const body = await res.text()
  const outPath = path.join(publicDir, file)
  fs.writeFileSync(outPath, body, 'utf8')
  console.log(`Wrote ${file} (${body.length.toLocaleString()} bytes)`)
}
