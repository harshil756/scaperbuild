/**
 * Wire generic service pages to usePageCms (hero, quote form, backgrounds, SEO).
 * Run from frontend/: node scripts/wire-service-pages-cms.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '../..')
const DATA_DIR = path.join(ROOT, 'backend/database/data')

const PAGES = [
  { slug: 'our-services-bed-bug-treatment', jsx: 'frontend/src/pages/services/OurServicesBedBugTreatmentPage.jsx', pageKey: 'our_services_bed_bug_treatment' },
  { slug: 'our-services-cockroach-control', jsx: 'frontend/src/pages/services/OurServicesCockroachControlPage.jsx', pageKey: 'our_services_cockroach_control' },
  { slug: 'our-services-mosquito-pest-control', jsx: 'frontend/src/pages/services/OurServicesMosquitoPestControlPage.jsx', pageKey: 'our_services_mosquito_pest_control' },
  { slug: 'our-services-fly-control', jsx: 'frontend/src/pages/services/OurServicesFlyControlPage.jsx', pageKey: 'our_services_fly_control' },
  { slug: 'our-services-fox-pest-control-in-melbourne', jsx: 'frontend/src/pages/services/OurServicesFoxPestControlInMelbournePage.jsx', pageKey: 'our_services_fox_pest_control_in_melbourne' },
  { slug: 'our-services-mites-control', jsx: 'frontend/src/pages/services/OurServicesMitesControlPage.jsx', pageKey: 'our_services_mites_control' },
  { slug: 'our-services-moth-control', jsx: 'frontend/src/pages/services/OurServicesMothControlPage.jsx', pageKey: 'our_services_moth_control' },
  { slug: 'our-services-possum-pest-control', jsx: 'frontend/src/pages/services/OurServicesPossumPestControlPage.jsx', pageKey: 'our_services_possum_pest_control' },
  { slug: 'our-services-silverfish-treatment', jsx: 'frontend/src/pages/services/OurServicesSilverfishTreatmentPage.jsx', pageKey: 'our_services_silverfish_treatment' },
  { slug: 'our-services-spider-control-treatment', jsx: 'frontend/src/pages/services/OurServicesSpiderControlTreatmentPage.jsx', pageKey: 'our_services_spider_control_treatment' },
  { slug: 'our-services-termite-pest-control', jsx: 'frontend/src/pages/services/OurServicesTermitePestControlPage.jsx', pageKey: 'our_services_termite_pest_control' },
  { slug: 'our-services-end-of-lease-pest-control', jsx: 'frontend/src/pages/services/OurServicesEndOfLeasePestControlPage.jsx', pageKey: 'our_services_end_of_lease_pest_control' },
  { slug: 'rodent-control-in-melbourne', jsx: 'frontend/src/pages/services/RodentControlInMelbournePage.jsx', pageKey: 'rodent_control_in_melbourne' },
  { slug: 'wasp-removal-melbourne', jsx: 'frontend/src/pages/services/WaspRemovalMelbournePage.jsx', pageKey: 'wasp_removal_melbourne' },
  { slug: 'solar-panel-bird-proofing', jsx: 'frontend/src/pages/services/SolarPanelBirdProofingPage.jsx', pageKey: 'solar_panel_bird_proofing' },
  { slug: 'office-pest-control', jsx: 'frontend/src/pages/commercial/OfficePestControlPage.jsx', pageKey: 'office_pest_control' },
  { slug: 'restaurant-cafe-pest-control', jsx: 'frontend/src/pages/commercial/RestaurantCafePestControlPage.jsx', pageKey: 'restaurant_cafe_pest_control' },
  { slug: 'school-and-hospitality-facility-pest-control', jsx: 'frontend/src/pages/commercial/SchoolAndHospitalityFacilityPestControlPage.jsx', pageKey: 'school_and_hospitality_facility_pest_control' },
  { slug: 'warehouse-and-factory-pest-control-services-melbourne', jsx: 'frontend/src/pages/commercial/WarehouseAndFactoryPestControlServicesMelbournePage.jsx', pageKey: 'warehouse_and_factory_pest_control_services_melbourne' },
]

function loadPageData(slug) {
  const file = path.join(DATA_DIR, `${slug}-page.json`)
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}

function bgId(blocks, key) {
  return blocks.find((b) => b.block_key === key)?.metadata?.elementor_id ?? null
}

function heroFields(blocks) {
  const get = (k) => blocks.find((b) => b.block_key === k)?.value ?? ''
  return {
    breadcrumb_parent: get('hero.breadcrumb_parent'),
    breadcrumb_current: get('hero.breadcrumb_current'),
    title: get('hero.title'),
    heading: get('hero.heading'),
    intro: blocks.find((b) => b.block_key === 'hero.intro')?.value ?? '',
  }
}

function quoteFields(blocks) {
  const get = (k) => blocks.find((b) => b.block_key === k)?.value ?? ''
  return {
    title: get('quote_form.title') || 'Get A Free Quote Now!',
    subtitle: get('quote_form.subtitle') || 'Have an enquiry? Leave us your details and we’ll call you back during business hours.',
    submit_text: get('quote_form.submit_text') || 'Submit Quote',
  }
}

function escJs(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')
}

function ensureImports(src) {
  const imports = [
    "import CmsHtml from '../../components/home/CmsHtml.jsx'",
    "import ServiceCmsStyles from '../../components/service/ServiceCmsStyles.jsx'",
    "import ServiceCmsContentBlocks from '../../components/service/ServiceCmsContentBlocks.jsx'",
    "import usePageCms from '../../hooks/usePageCms.js'",
    "import { cmsText } from '../../utils/cmsMedia.js'",
  ]
  let out = src
  for (const imp of imports) {
    if (!out.includes(imp.split("'")[1])) {
      const anchor = out.match(/^import .+ from .+\n/m)
      if (anchor) {
        out = out.replace(anchor[0], anchor[0] + imp + '\n')
      }
    }
  }
  if (!out.includes("import usePageCms")) {
    out = imports.join('\n') + '\n' + out
  }
  return out
}

function wirePage({ slug, jsx, pageKey }) {
  const filePath = path.join(ROOT, jsx)
  const data = loadPageData(slug)
  const hero = heroFields(data.blocks)
  const quote = quoteFields(data.blocks)
  const heroBgId = bgId(data.blocks, 'background.hero')
  const ctaBgId = bgId(data.blocks, 'background.cta')

  let src = fs.readFileSync(filePath, 'utf8')
  if (src.includes('usePageCms(')) {
    console.log('skip (already wired):', slug)
    return
  }

  src = ensureImports(src)

  src = src.replace(
    /export default function (\w+)\(\) \{\n\s*usePageMeta\('([^']+)'\)\n/,
    `export default function $1() {\n  const { page, content: c } = usePageCms('${slug}')\n  usePageMeta('${pageKey}', page)\n`,
  )

  src = src.replace(
    /return \(\n\s*<>\n/,
    `return (\n    <>\n      <ServiceCmsStyles content={c} heroBgId="${heroBgId ?? ''}" ctaBgId="${ctaBgId ?? ''}" />\n      <ServiceCmsContentBlocks content={c} />\n`,
  )

  src = src.replace(
    /<span className="elementor-icon-list-text">Services<\/span>/g,
    `<span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb_parent, '${escJs(hero.breadcrumb_parent || 'Services')}')}</span>`,
  )

  // Third breadcrumb (current page) — last breadcrumb span before hero h2
  if (hero.breadcrumb_current) {
    src = src.replace(
      new RegExp(`<span className="elementor-icon-list-text">${hero.breadcrumb_current.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}<\/span>`),
      `<span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb_current, '${escJs(hero.breadcrumb_current)}')}</span>`,
    )
  }

  src = src.replace(
    /<h2 className="elementor-heading-title elementor-size-default">Get A Free Quote Now!<\/h2>/g,
    `<h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.title, '${escJs(quote.title)}')}</h2>`,
  )

  src = src.replace(
    /<h6 className="elementor-heading-title elementor-size-default">Have an enquiry\? Leave us your details and we’ll call you back during business hours\.<\/h6>/g,
    `<h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.subtitle, '${escJs(quote.subtitle)}')}</h6>`,
  )

  src = src.replace(
    /<span className="elementor-button-text">Submit Quote<\/span>/g,
    `<span className="elementor-button-text">{cmsText(c?.quote_form?.submit_text, '${escJs(quote.submit_text)}')}</span>`,
  )

  if (hero.title) {
    src = src.replace(
      new RegExp(`<h2 className="elementor-heading-title elementor-size-default">${hero.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}<\/h2>`),
      `<h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, '${escJs(hero.title)}')}</h2>`,
    )
  }

  if (hero.heading) {
    src = src.replace(
      new RegExp(`<h1 className="elementor-heading-title elementor-size-default">${hero.heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}<\/h1>`),
      `<h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.heading, '${escJs(hero.heading)}')}</h1>`,
    )
  }

  if (hero.intro) {
    const introFallback = escJs(hero.intro)
    src = src.replace(
      /(<div className="elementor-element elementor-element-[a-f0-9]+ elementor-widget elementor-widget-text-editor"[^>]*data-widget_type="text-editor\.default">\s*<div className="elementor-widget-container">)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>\s*<div className="elementor-element elementor-element-[a-f0-9]+ e-con-full e-flex e-con e-child"[^>]*data-element_type="container")/,
      `$1<CmsHtml html={c?.hero?.intro ?? '${introFallback}'} />$3`,
    )
  }

  fs.writeFileSync(filePath, src)
  console.log('wired:', slug)
}

for (const page of PAGES) {
  wirePage(page)
}

console.log('done')
