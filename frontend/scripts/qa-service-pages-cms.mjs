#!/usr/bin/env node
/**
 * QA: compare service page JSX hardcoded widgets vs API content_blocks coverage.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')

const PAGES = [
  { slug: 'our-services', jsx: 'frontend/src/pages/services/OurServicesPage.jsx', route: '/our-services' },
  { slug: 'solar-panel-bird-proofing', jsx: 'frontend/src/pages/services/SolarPanelBirdProofingPage.jsx', route: '/solar-panel-bird-proofing', type: 'dedicated' },
  { slug: 'our-services-ant-pest-control', jsx: 'frontend/src/pages/services/OurServicesAntPestControlPage.jsx', route: '/our-services/ant-pest-control', type: 'dedicated' },
  { slug: 'our-services-bed-bug-treatment', jsx: 'frontend/src/pages/services/OurServicesBedBugTreatmentPage.jsx', route: '/our-services/bed-bug-treatment', type: 'inline' },
  { slug: 'our-services-cockroach-control', jsx: 'frontend/src/pages/services/OurServicesCockroachControlPage.jsx', route: '/our-services/cockroach-control' },
  { slug: 'our-services-mosquito-pest-control', jsx: 'frontend/src/pages/services/OurServicesMosquitoPestControlPage.jsx', route: '/our-services/mosquito-pest-control' },
  { slug: 'our-services-fly-control', jsx: 'frontend/src/pages/services/OurServicesFlyControlPage.jsx', route: '/our-services/fly-control' },
  { slug: 'our-services-fox-pest-control-in-melbourne', jsx: 'frontend/src/pages/services/OurServicesFoxPestControlInMelbournePage.jsx', route: '/our-services/fox-pest-control-in-melbourne' },
  { slug: 'our-services-mites-control', jsx: 'frontend/src/pages/services/OurServicesMitesControlPage.jsx', route: '/our-services/mites-control' },
  { slug: 'our-services-moth-control', jsx: 'frontend/src/pages/services/OurServicesMothControlPage.jsx', route: '/our-services/moth-control' },
  { slug: 'our-services-possum-pest-control', jsx: 'frontend/src/pages/services/OurServicesPossumPestControlPage.jsx', route: '/our-services/possum-pest-control' },
  { slug: 'rodent-control-in-melbourne', jsx: 'frontend/src/pages/services/RodentControlInMelbournePage.jsx', route: '/rodent-control-in-melbourne' },
  { slug: 'our-services-silverfish-treatment', jsx: 'frontend/src/pages/services/OurServicesSilverfishTreatmentPage.jsx', route: '/our-services/silverfish-treatment' },
  { slug: 'our-services-spider-control-treatment', jsx: 'frontend/src/pages/services/OurServicesSpiderControlTreatmentPage.jsx', route: '/our-services/spider-control-treatment' },
  { slug: 'our-services-termite-pest-control', jsx: 'frontend/src/pages/services/OurServicesTermitePestControlPage.jsx', route: '/our-services/termite-pest-control' },
  { slug: 'wasp-removal-melbourne', jsx: 'frontend/src/pages/services/WaspRemovalMelbournePage.jsx', route: '/wasp-removal-melbourne' },
  { slug: 'our-services-end-of-lease-pest-control', jsx: 'frontend/src/pages/services/OurServicesEndOfLeasePestControlPage.jsx', route: '/our-services/end-of-lease-pest-control' },
]

function analyzeJsx(src) {
  const hasUsePageCms = /usePageCms\s*\(\s*['"][^'"]+['"]\s*\)/.test(src)
  const slugMatch = src.match(/usePageCms\s*\(\s*['"]([^'"]+)['"]\s*\)/)
  const hasDomPatcher = src.includes('ServiceCmsContentBlocks')
  const hasInlineCms = src.includes('cmsWidgetText') || src.includes('cmsWidgetHtml')
  const cmsTextCount = (src.match(/cmsText\s*\(/g) ?? []).length
  const cmsHtmlCount = (src.match(/CmsHtml\s+/g) ?? []).length
  const cmsMediaCount = (src.match(/cmsMediaUrl\s*\(/g) ?? []).length

  // Hardcoded headings (not using {cms...})
  const hardcodedHeadings = [...src.matchAll(
    /data-id="([a-f0-9]+)"[\s\S]{0,800}?elementor-heading-title[^>]*>([^<{]+)</g,
  )].map((m) => ({ id: m[1], text: m[2].trim().slice(0, 60) }))

  // Widget ids with inline React CMS bindings nearby
  const wiredIds = new Set([
    ...[...src.matchAll(/cmsWidget(?:Text|Html|Image|List)\([^,]+,\s*['"]([a-f0-9]+)['"]/g)].map((m) => m[1]),
    ...[...src.matchAll(/widgetId="([a-f0-9]+)"/g)].map((m) => m[1]),
  ])

  const heroWired = /cmsText\s*\(\s*c\?\.hero/.test(src)
  const quoteWired = /cmsText\s*\(\s*c\?\.quote_form/.test(src)
  const faqWired = /ServiceFaqSection|ServiceFaqCms|AntFaqSection|cmsText\s*\(\s*c\?\.faq|cmsText\s*\(\s*faq/.test(src)
  const reviewsWired = /cmsText\s*\(\s*c\?\.reviews/.test(src)

  return {
    hasUsePageCms,
    slug: slugMatch?.[1],
    hasDomPatcher,
    hasInlineCms,
    cmsTextCount,
    cmsHtmlCount,
    cmsMediaCount,
    hardcodedHeadings,
    wiredIds,
    heroWired,
    quoteWired,
    faqWired,
    reviewsWired,
  }
}

async function fetchApi(slug) {
  const url = `http://127.0.0.1:8000/api/pages/${slug}`
  try {
    const res = await fetch(url)
    if (!res.ok) return { ok: false, status: res.status }
    const data = await res.json()
    const c = data.content ?? {}
    const blocks = c.content_blocks ?? []
    const blockIds = new Set(blocks.map((b) => {
      const m = b.block_key?.match(/^content\.(?:heading|text|image|list)_([a-f0-9]+)/)
      return m?.[1]
    }).filter(Boolean))
    return {
      ok: true,
      status: 200,
      blockCount: blocks.length,
      blockIds,
      hasHero: Boolean(c.hero?.heading),
      faqItems: c.faq?.items?.length ?? 0,
      structuredKeys: Object.keys(c).filter((k) => k !== 'content_blocks'),
    }
  } catch {
    return { ok: false, status: 'ERR' }
  }
}

console.log('Pest Control Services — CMS QA Report\n')
console.log('Page | API | usePageCms | Hero | Quote | FAQ | Reviews | CMS blocks | Hardcoded headings | Unpatched*')
console.log('-'.repeat(110))

const issues = []

for (const page of PAGES) {
  const jsxPath = path.join(root, page.jsx)
  const src = fs.readFileSync(jsxPath, 'utf8')
  const jsx = analyzeJsx(src)
  const api = await fetchApi(page.slug)

  const hardcoded = jsx.hardcodedHeadings.filter((h) => h.text && h.text !== 'Home')
  let unpatched = 0
  if (api.ok && jsx.hasDomPatcher) {
    for (const h of hardcoded) {
      if (!api.blockIds.has(h.id) && !jsx.wiredIds.has(h.id)) unpatched++
    }
  }

  const apiStatus = api.ok ? '200' : String(api.status)
  const blocks = api.ok ? String(api.blockCount) : '-'
  const type = page.type ?? (jsx.hasInlineCms ? 'inline' : jsx.hasDomPatcher ? 'dom-patch' : 'static?')

  const row = [
    page.route.padEnd(42),
    apiStatus,
    jsx.hasUsePageCms ? 'Y' : 'N',
    jsx.heroWired ? 'Y' : 'N',
    jsx.quoteWired ? 'Y' : 'N',
    jsx.faqWired ? 'Y' : 'N',
    jsx.reviewsWired ? 'Y' : 'N',
    blocks.padStart(3),
    String(hardcoded.length).padStart(3),
    String(unpatched).padStart(3),
    type,
  ].join(' | ')

  console.log(row)

  if (!jsx.hasUsePageCms || !api.ok) {
    issues.push(`${page.route}: missing usePageCms or API ${apiStatus}`)
  } else if (type === 'dom-patch' && unpatched > 0) {
    issues.push(`${page.route}: ${unpatched} hardcoded headings without CMS block (dom-patch may miss)`)
  } else if (!jsx.heroWired) {
    issues.push(`${page.route}: hero not wired to cmsText`)
  } else if (api.faqItems > 0 && !jsx.faqWired) {
    issues.push(`${page.route}: ${api.faqItems} FAQ items in API but FAQ not wired`)
  }
}

console.log('\n* Unpatched = hardcoded heading widgets with no matching content_blocks id (dom-patch pages only)')
console.log('\n--- Issues ---')
if (issues.length === 0) {
  console.log('None critical — dom-patch pages rely on ServiceCmsContentBlocks at runtime.')
} else {
  for (const i of issues) console.log('-', i)
}
