/**
 * Add ServiceCmsContentBlocks to all service pages that already use usePageCms.
 * Run: node scripts/add-service-cms-blocks.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SERVICES_DIR = path.resolve(__dirname, '../src/pages/services')
const COMMERCIAL_DIR = path.resolve(__dirname, '../src/pages/commercial')

const IMPORT = "import ServiceCmsContentBlocks from '../../components/service/ServiceCmsContentBlocks.jsx'"
const COMMERCIAL_IMPORT = "import ServiceCmsContentBlocks from '../../components/service/ServiceCmsContentBlocks.jsx'"

const PAGES = [
  ...fs.readdirSync(SERVICES_DIR).filter((f) => f.endsWith('.jsx')),
  ...fs.readdirSync(COMMERCIAL_DIR).filter((f) => f.endsWith('.jsx')),
]

for (const file of PAGES) {
  const dir = file.includes('Commercial') || COMMERCIAL_DIR.includes('commercial')
    ? COMMERCIAL_DIR
    : SERVICES_DIR
  const fullPath = path.join(
    file.includes('Office') || file.includes('Restaurant') || file.includes('School') || file.includes('Warehouse')
      ? COMMERCIAL_DIR
      : SERVICES_DIR,
    file,
  )

  if (!fs.existsSync(fullPath)) continue

  let src = fs.readFileSync(fullPath, 'utf8')
  if (!src.includes('usePageCms(')) continue
  if (src.includes('ServiceCmsContentBlocks')) {
    console.log('skip:', file)
    continue
  }

  const isCommercial = fullPath.includes('/commercial/')
  const imp = isCommercial ? COMMERCIAL_IMPORT : IMPORT

  if (!src.includes(imp)) {
    const anchor = src.match(/^import .+\n/m)
    if (anchor) src = src.replace(anchor[0], anchor[0] + imp + '\n')
  }

  src = src.replace(
    /<ServiceCmsStyles([^/]*)\/>\n/,
    (m) => `${m}      <ServiceCmsContentBlocks content={c} />\n`,
  )

  if (!src.includes('ServiceCmsContentBlocks')) {
    src = src.replace(
      /return \(\n\s*<>\n/,
      'return (\n    <>\n      <ServiceCmsContentBlocks content={c} />\n',
    )
  }

  fs.writeFileSync(fullPath, src)
  console.log('added blocks:', file)
}

console.log('done')
