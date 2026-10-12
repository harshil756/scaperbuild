#!/usr/bin/env node
/**
 * Safely wire generic service pages to Laravel CMS (dom-patch pattern).
 * Does NOT inline cmsWidgetText — avoids JSX breakage.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')

const PAGES = [
  { slug: 'our-services', jsx: 'frontend/src/pages/services/OurServicesPage.jsx', meta: 'our_services', heroBg: 'd60c811', faq: null },
  { slug: 'our-services-bed-bug-treatment', jsx: 'frontend/src/pages/services/OurServicesBedBugTreatmentPage.jsx', meta: 'our_services_bed_bug_treatment', heroBg: '11c1f5d', faq: null },
  { slug: 'our-services-cockroach-control', jsx: 'frontend/src/pages/services/OurServicesCockroachControlPage.jsx', meta: 'our_services_cockroach_control', heroBg: '13ca266', faq: null },
  { slug: 'our-services-mosquito-pest-control', jsx: 'frontend/src/pages/services/OurServicesMosquitoPestControlPage.jsx', meta: 'our_services_mosquito_pest_control', heroBg: '1357195', faq: null },
  { slug: 'our-services-fly-control', jsx: 'frontend/src/pages/services/OurServicesFlyControlPage.jsx', meta: 'our_services_fly_control', heroBg: '46a82e4', faq: '5146096' },
  { slug: 'our-services-fox-pest-control-in-melbourne', jsx: 'frontend/src/pages/services/OurServicesFoxPestControlInMelbournePage.jsx', meta: 'our_services_fox_pest_control_in_melbourne', heroBg: 'a342089', faq: 'fb5a99f' },
  { slug: 'our-services-mites-control', jsx: 'frontend/src/pages/services/OurServicesMitesControlPage.jsx', meta: 'our_services_mites_control', heroBg: '11474e8', faq: '5146096' },
  { slug: 'our-services-moth-control', jsx: 'frontend/src/pages/services/OurServicesMothControlPage.jsx', meta: 'our_services_moth_control', heroBg: 'f469a6a', faq: '5146096' },
  { slug: 'our-services-possum-pest-control', jsx: 'frontend/src/pages/services/OurServicesPossumPestControlPage.jsx', meta: 'our_services_possum_pest_control', heroBg: 'a342089', faq: 'fb5a99f' },
  { slug: 'rodent-control-in-melbourne', jsx: 'frontend/src/pages/services/RodentControlInMelbournePage.jsx', meta: 'rodent_control_in_melbourne', heroBg: '42170a4', faq: '5146096' },
  { slug: 'our-services-silverfish-treatment', jsx: 'frontend/src/pages/services/OurServicesSilverfishTreatmentPage.jsx', meta: 'our_services_silverfish_treatment', heroBg: 'd4c4a94', faq: '5146096', skip: true },
  { slug: 'our-services-spider-control-treatment', jsx: 'frontend/src/pages/services/OurServicesSpiderControlTreatmentPage.jsx', meta: 'our_services_spider_control_treatment', heroBg: '75a76e0', faq: '5146096' },
  { slug: 'our-services-termite-pest-control', jsx: 'frontend/src/pages/services/OurServicesTermitePestControlPage.jsx', meta: 'our_services_termite_pest_control', heroBg: 'a342089', faq: 'fb5a99f' },
  { slug: 'wasp-removal-melbourne', jsx: 'frontend/src/pages/services/WaspRemovalMelbournePage.jsx', meta: 'wasp_removal_melbourne', heroBg: '4ac47ae', faq: '5146096' },
  { slug: 'our-services-end-of-lease-pest-control', jsx: 'frontend/src/pages/services/OurServicesEndOfLeasePestControlPage.jsx', meta: 'our_services_end_of_lease_pest_control', heroBg: '04044b8', faq: null },
]

const CTA_BG = '057b4d3'

function addImports(src) {
  if (src.includes("import usePageCms")) return src
  const block = `import ServiceCmsContentBlocks from '../../components/service/ServiceCmsContentBlocks.jsx'
import ServiceFaqCms from '../../components/service/ServiceFaqCms.jsx'
import { cmsText } from '../../utils/cmsMedia.js'
import usePageCms from '../../hooks/usePageCms.js'
import ServiceCmsStyles from '../../components/service/ServiceCmsStyles.jsx'
import CmsHtml from '../../components/home/CmsHtml.jsx'
`
  return src.replace(
    /import PhoneNumberInput from '\.\.\/\.\.\/components\/PhoneNumberInput\.jsx'\n/,
    `import PhoneNumberInput from '../../components/PhoneNumberInput.jsx'\n${block}`,
  )
}

function wireComponent(page, src) {
  if (src.includes('usePageCms(')) {
    if (!src.includes('const { page, content: c }')) {
      src = src.replace(
        /usePageMeta\((['"][^'"]+['"])(?:,\s*page)?\)/,
        `const { page, content: c } = usePageCms('${page.slug}')\n  usePageMeta($1, page)`,
      )
    }
    return src
  }

  src = src.replace(
    /export default function (\w+)\(\) \{\n  usePageMeta\(['"][^'"]+['"]\)/,
    `export default function $1() {\n  const { page, content: c } = usePageCms('${page.slug}')\n  usePageMeta('${page.meta}', page)`,
  )
  return src
}

function addCmsComponents(page, src) {
  if (src.includes('<ServiceCmsContentBlocks')) return src
  const faqLine = page.faq
    ? `\n      <ServiceFaqCms faq={c?.faq} accordionWidgetId="${page.faq}" />`
    : ''
  return src.replace(
    /return \(\n    <>\n/,
    `return (\n    <>\n      <ServiceCmsStyles content={c} heroBgId="${page.heroBg}" ctaBgId="${CTA_BG}" />${faqLine}\n      <ServiceCmsContentBlocks content={c} />\n`,
  )
}

function wireHeroSection(src) {
  if (!src.includes('cmsText(c?.hero?.breadcrumb_parent')) {
    src = src.replace(
      /(<span className="elementor-icon-list-text">)Services(<\/span>)/,
      '$1{cmsText(c?.hero?.breadcrumb_parent, \'Services\')}$2',
    )
  }

  // Third breadcrumb item (current page)
  if (!src.includes('cmsText(c?.hero?.breadcrumb_current')) {
    src = src.replace(
      /(<li className="elementor-icon-list-item elementor-inline-item">\s*<a href="#">[\s\S]*?<span className="elementor-icon-list-text">)([^<{]+)(<\/span>\s*<\/a>\s*<\/li>\s*<\/ul>)/,
      (m, pre, text, post) => `${pre}{cmsText(c?.hero?.breadcrumb_current, '${text.trim().replace(/'/g, "\\'")}')}${post}`,
    )
  }

  // First h2 in hero (after breadcrumbs, before h1)
  if (!src.includes('cmsText(c?.hero?.title')) {
    src = src.replace(
      /(<h2 className="elementor-heading-title elementor-size-default">)([^<{]+)(<\/h2>[\s\S]*?<h1 className="elementor-heading-title)/,
      (m, pre, text, post) => `${pre}{cmsText(c?.hero?.title, '${text.trim().replace(/'/g, "\\'")}')}${post}`,
    )
  }

  // First h1 in page
  if (!src.includes('cmsText(c?.hero?.heading')) {
    src = src.replace(
      /(<h1 className="elementor-heading-title elementor-size-default">)([^<{]+)(<\/h1>)/,
      (m, pre, text, post) => `${pre}{cmsText(c?.hero?.heading, '${text.trim().replace(/'/g, "\\'")}')}${post}`,
    )
  }

  // Hero intro — replace innerHTML of first text-editor widget container after h1
  if (!src.includes('CmsHtml html={c?.hero?.intro')) {
    src = src.replace(
      /(<h1 className="elementor-heading-title elementor-size-default">[\s\S]*?<\/h1>[\s\S]*?<div className="elementor-element elementor-element-[a-f0-9]+ elementor-widget elementor-widget-text-editor"[^>]*>\s*<div className="elementor-widget-container">)\s*[\s\S]*?(<\/div>\s*<\/div>\s*<div className="elementor-element elementor-element-[a-f0-9]+ e-con-full)/,
      '$1\n                  <CmsHtml html={c?.hero?.intro} />\n                $2',
    )
  }

  return src
}

function wireQuoteForm(src) {
  if (!src.includes('cmsText(c?.quote_form?.title')) {
    src = src.replace(
      /(<h2 className="elementor-heading-title elementor-size-default">)Get A Free Quote Now!(<\/h2>)/g,
      '$1{cmsText(c?.quote_form?.title, \'Get A Free Quote Now!\')}$2',
    )
  }
  if (!src.includes('cmsText(c?.quote_form?.subtitle')) {
    src = src.replace(
      /(<h6 className="elementor-heading-title elementor-size-default">)(Have an enquiry\? Leave us your details and we.ll call you back during business hours\.)(<\/h6>)/,
      '$1{cmsText(c?.quote_form?.subtitle, \'Have an enquiry? Leave us your details and we\\\'ll call you back during business hours.\')}$3',
    )
  }
  return src
}

function wireReviews(src) {
  if (src.includes('cmsText(c?.reviews')) return src
  // Common reviews section patterns
  src = src.replace(
    /(<h6 className="elementor-heading-title elementor-size-default">)EXCELLENT(<\/h6>)/g,
    '$1{cmsText(c?.reviews?.title, \'EXCELLENT\')}$2',
  )
  src = src.replace(
    /(<h3 className="elementor-heading-title elementor-size-default">)Reviews of Our Pest Control Services(<\/h3>)/g,
    '$1{cmsText(c?.reviews?.subtitle, \'Reviews of Our Pest Control Services\')}$2',
  )
  src = src.replace(
    /(<h2 className="elementor-heading-title elementor-size-default">)7 States Pest Control for Reliable Pest Management Solutions(<\/h2>)/g,
    '$1{cmsText(c?.reviews?.eyebrow, \'7 States Pest Control for Reliable Pest Management Solutions\')}$2',
  )
  return src
}

for (const page of PAGES) {
  if (page.skip) continue
  const filePath = path.join(root, page.jsx)
  let src = fs.readFileSync(filePath, 'utf8')
  const orig = src
  src = addImports(src)
  src = wireComponent(page, src)
  src = addCmsComponents(page, src)
  src = wireHeroSection(src)
  src = wireQuoteForm(src)
  src = wireReviews(src)
  if (src !== orig) {
    fs.writeFileSync(filePath, src)
    console.log('Wired', page.slug)
  }
}
