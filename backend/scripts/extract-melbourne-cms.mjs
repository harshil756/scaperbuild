#!/usr/bin/env node
/**
 * Extract Melbourne office page CMS blocks from JSX + post-710 CSS.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  createBlockCollector,
  extractBackgrounds,
  extractEkitImageBoxWidgets,
  extractHeading,
  extractHtmlAfter,
  extractIconBoxWidgets,
  readSeo,
  resolveCssFile,
  slugify,
} from './lib/service-page-cms-lib.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const slug = 'melbourne'
const jsxPath = path.join(root, 'frontend/src/pages/offices/MelbournePage.jsx')
const outFile = path.join(__dirname, `../database/data/${slug}-page.json`)

const jsx = fs.readFileSync(jsxPath, 'utf8')
const css = fs.readFileSync(resolveCssFile(root, 710), 'utf8')
const seo = readSeo(fs.readFileSync(path.join(root, 'frontend/src/config/pageSeoExtra.js'), 'utf8'), 'melbourne')
const { blocks, add, addText, addHtml, cmsPath } = createBlockCollector(slug)

const bgMap = {
  e7c65bf: 'hero',
  fd1c4b6: 'contact',
  '8bb4a2d': 'contact_side',
}
extractBackgrounds(css, slug, cmsPath, add, bgMap, { onlyMapped: true })

const breadcrumbRe = /data-id="8e7efdb"[\s\S]*?elementor-icon-list-text">([^<]+)</g
const breadcrumbs = [...jsx.matchAll(breadcrumbRe)].map((m) => m[1].trim())
addText('hero.breadcrumb_parent', 'hero', 'Breadcrumb parent', breadcrumbs[1] ?? 'our offices')
addText('hero.breadcrumb_current', 'hero', 'Breadcrumb current', breadcrumbs[2] ?? 'melbourne')
addText('hero.title', 'hero', 'Section title', extractHeading(jsx, 'b4e84d1'))
addText('hero.heading', 'hero', 'Main heading', extractHeading(jsx, '1726365'))
addHtml('hero.intro', 'hero', 'Intro paragraph', extractHtmlAfter(jsx, '952a4e6'))

addText('quote_form.title', 'quote_form', 'Form heading', extractHeading(jsx, 'bbce55a'))
addText('quote_form.subtitle', 'quote_form', 'Form subtitle', extractHeading(jsx, 'e9ccf15'))
addText('quote_form.submit_text', 'quote_form', 'Submit button text', 'Submit Quote')

addText('why_choose.eyebrow', 'why_choose', 'Eyebrow', extractHeading(jsx, '67dcc8a'))
const whyTitle = jsx.match(/data-id="775c5c0"[\s\S]*?elementskit-section-title">([^<]+)</)?.[1]?.trim()
addText('why_choose.title', 'why_choose', 'Section title', whyTitle)
addHtml('why_choose.intro', 'why_choose', 'Intro HTML', extractHtmlAfter(jsx, 'd51c078'))

extractEkitImageBoxWidgets(jsx, cmsPath).forEach((item, i) => {
  const itemSlug = slugify(item.title) || `reason_${i + 1}`
  add({
    block_key: `why_choose.${itemSlug}`,
    section: 'why_choose',
    label: `Why choose: ${item.title}`,
    type: 'json',
    image_path: cmsPath(item.image),
    metadata: { slug: itemSlug, ...item, image_src: item.image },
  })
})

addText('contact.eyebrow', 'contact', 'Eyebrow', extractHeading(jsx, '252ec92'))
addText('contact.title', 'contact', 'Section title', extractHeading(jsx, '464d28a'))
addHtml('contact.body', 'contact', 'Body HTML', extractHtmlAfter(jsx, '47e9844'))
const contactBtn = jsx.match(/data-id="a701e34"[\s\S]*?<Link[^>]*to="([^"]+)"[^>]*>[\s\S]*?elementor-button-text">([^<]+)</)
if (contactBtn) {
  add({
    block_key: 'contact.button',
    section: 'contact',
    label: 'Contact button',
    type: 'link',
    value: contactBtn[2].trim(),
    link_url: contactBtn[1],
  })
}

addText('services.eyebrow', 'services', 'Eyebrow', extractHeading(jsx, '7b2b0f7'))
addText('services.title', 'services', 'Section title', extractHeading(jsx, '5a6b098'))
addHtml('services.intro', 'services', 'Intro HTML', extractHtmlAfter(jsx, '25aac3f'))

extractIconBoxWidgets(jsx).forEach((item, i) => {
  const itemSlug = slugify(item.title) || `service_${i + 1}`
  add({
    block_key: `services.${itemSlug}`,
    section: 'services',
    label: `Service: ${item.title}`,
    type: 'json',
    image_path: cmsPath(item.image),
    metadata: { slug: itemSlug, ...item, image_src: item.image },
  })
})

const page = {
  slug,
  title: 'Melbourne',
  seo_title: seo.seo_title,
  seo_description: seo.seo_description,
  body_class:
    'wp-singular page-template page-template-elementor_header_footer page wp-custom-logo wp-embed-responsive wp-theme-hello-elementor elementor-default elementor-template-full-width elementor-kit-9 elementor-page elementor-page-710',
  elementor_id: 710,
  is_published: true,
  blocks,
}

fs.mkdirSync(path.dirname(outFile), { recursive: true })
fs.writeFileSync(outFile, JSON.stringify(page, null, 2))
console.log(`Wrote ${blocks.length} blocks to ${outFile}`)
