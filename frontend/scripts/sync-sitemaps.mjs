import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '../public')
const sourceUrl = (process.env.SITEMAP_SOURCE_URL || 'https://7statespestcontrol.com.au').replace(/\/$/, '')
const siteUrl = (process.env.SITE_URL || process.env.VITE_SITE_URL || sourceUrl).replace(/\/$/, '')
const xslPath = '/main-sitemap.xsl'

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

function rewriteSeoFiles(body, file) {
  let next = body

  if (file.endsWith('.xml')) {
    next = next.replace(
      /<\?xml-stylesheet[^?]+\?>/,
      `<?xml-stylesheet type="text/xsl" href="${xslPath}"?>`,
    )
  }

  if (sourceUrl !== siteUrl) {
    next = next.replaceAll(sourceUrl, siteUrl)
  }

  if (file === 'robots.txt') {
    next = next.replace(
      /^Sitemap:\s*.+$/m,
      `Sitemap: ${siteUrl}/sitemap_index.xml`,
    )
  }

  return next
}

fs.mkdirSync(publicDir, { recursive: true })

const xslRes = await fetch(`${sourceUrl}/wp-content/plugins/wordpress-seo/css/main-sitemap.xsl`)
if (!xslRes.ok) {
  console.error(`Failed to fetch XSL stylesheet: ${xslRes.status}`)
  process.exitCode = 1
} else {
  const xslBody = await xslRes.text()
  fs.writeFileSync(path.join(publicDir, 'main-sitemap.xsl'), xslBody, 'utf8')
  console.log(`Wrote main-sitemap.xsl (${xslBody.length.toLocaleString()} bytes)`)
}

for (const file of files) {
  const url = `${sourceUrl}/${file}`
  const res = await fetch(url)
  if (!res.ok) {
    console.error(`Failed to fetch ${url}: ${res.status}`)
    process.exitCode = 1
    continue
  }
  const body = rewriteSeoFiles(await res.text(), file)
  const outPath = path.join(publicDir, file)
  fs.writeFileSync(outPath, body, 'utf8')
  console.log(`Wrote ${file} (${body.length.toLocaleString()} bytes)`)
}

console.log(`Sitemap source: ${sourceUrl}`)
console.log(`Published URLs: ${siteUrl}`)
