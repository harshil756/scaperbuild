#!/usr/bin/env node
/** Add ServiceFaqCms, fix FAQ/reviews headings, remove unused ServiceCmsContentBlocks imports. */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')

const FAQ_PAGES = [
  { file: 'frontend/src/pages/services/OurServicesSilverfishTreatmentPage.jsx', accordionId: '5146096' },
  { file: 'frontend/src/pages/services/OurServicesFlyControlPage.jsx', accordionId: '5146096' },
  { file: 'frontend/src/pages/services/OurServicesFoxPestControlInMelbournePage.jsx', accordionId: 'fb5a99f' },
  { file: 'frontend/src/pages/services/OurServicesMitesControlPage.jsx', accordionId: '5146096' },
  { file: 'frontend/src/pages/services/OurServicesMothControlPage.jsx', accordionId: '5146096' },
  { file: 'frontend/src/pages/services/OurServicesPossumPestControlPage.jsx', accordionId: 'fb5a99f' },
  { file: 'frontend/src/pages/services/RodentControlInMelbournePage.jsx', accordionId: '5146096' },
  { file: 'frontend/src/pages/services/OurServicesSpiderControlTreatmentPage.jsx', accordionId: '5146096' },
  { file: 'frontend/src/pages/services/OurServicesTermitePestControlPage.jsx', accordionId: 'fb5a99f' },
  { file: 'frontend/src/pages/services/WaspRemovalMelbournePage.jsx', accordionId: '5146096' },
]

function wireFaqPage(relPath, accordionId) {
  const filePath = path.join(root, relPath)
  let src = fs.readFileSync(filePath, 'utf8')
  let changed = false

  if (!src.includes("import ServiceFaqCms")) {
    src = src.replace(
      /import ServiceCmsStyles from '\.\.\/\.\.\/components\/service\/ServiceCmsStyles\.jsx'\n/,
      "import ServiceCmsStyles from '../../components/service/ServiceCmsStyles.jsx'\nimport ServiceFaqCms from '../../components/service/ServiceFaqCms.jsx'\n",
    )
    changed = true
  }

  const faqCmsLine = `      <ServiceFaqCms faq={c?.faq} accordionWidgetId="${accordionId}" />\n`
  if (!src.includes('ServiceFaqCms')) {
    src = src.replace(
      /<ServiceCmsStyles content=\{c\}[^/]*\/>\n/,
      (m) => m + faqCmsLine,
    )
    changed = true
  }

  // FAQ section title (hidden desktop section often has wrong widget binding)
  const faqTitleExpr = "cmsText(c?.faq?.title, 'Frequently Asked Questions')"
  if (src.includes("cmsWidgetText(b, '32945a7', 'Get Extensive Reports with Detailed Analysis')")) {
    src = src.replace(
      "cmsWidgetText(b, '32945a7', 'Get Extensive Reports with Detailed Analysis')",
      faqTitleExpr,
    )
    changed = true
  }

  // Reviews section headings (wire script mismatched widget ids)
  const reviewFixes = [
    ["cmsWidgetText(b, 'ce3fd5e', 'Frequently Asked Questions')", "cmsText(c?.reviews?.eyebrow, '7 States Pest Control for Reliable Pest Management Solutions')"],
    ["cmsWidgetText(b, '32945a7', 'Frequently Asked Questions')", "cmsText(c?.reviews?.subtitle, 'Reviews of Our Pest Control Services')"],
    ["cmsWidgetText(b, '02c8fc4', 'Clients Reviews')", "cmsText(c?.reviews?.title, 'EXCELLENT')"],
    ["cmsWidgetText(b, '75b617d', 'Clients Reviews')", "cmsText(c?.reviews?.rating_label, 'EXCELLENT')"],
  ]
  for (const [from, to] of reviewFixes) {
    if (src.includes(from)) {
      src = src.replaceAll(from, to)
      changed = true
    }
  }

  if (src.includes('ServiceCmsContentBlocks') && !src.includes('<ServiceCmsContentBlocks')) {
    src = src.replace(
      /import ServiceCmsContentBlocks from '\.\.\/\.\.\/components\/service\/ServiceCmsContentBlocks\.jsx'\n/,
      '',
    )
    changed = true
  }

  if (changed) {
    fs.writeFileSync(filePath, src)
    console.log('Updated', relPath)
  } else {
    console.log('Skipped (no changes)', relPath)
  }
}

for (const { file, accordionId } of FAQ_PAGES) {
  wireFaqPage(file, accordionId)
}

// Remove unused ServiceCmsContentBlocks from non-FAQ pages that no longer use it
const OTHER = [
  'frontend/src/pages/services/OurServicesPage.jsx',
  'frontend/src/pages/services/OurServicesCockroachControlPage.jsx',
  'frontend/src/pages/services/OurServicesMosquitoPestControlPage.jsx',
  'frontend/src/pages/services/OurServicesEndOfLeasePestControlPage.jsx',
]

for (const file of OTHER) {
  const filePath = path.join(root, file)
  let src = fs.readFileSync(filePath, 'utf8')
  if (src.includes('ServiceCmsContentBlocks') && !src.includes('<ServiceCmsContentBlocks')) {
    src = src.replace(
      /import ServiceCmsContentBlocks from '\.\.\/\.\.\/components\/service\/ServiceCmsContentBlocks\.jsx'\n/,
      '',
    )
    fs.writeFileSync(filePath, src)
    console.log('Removed unused import', file)
  }
}
