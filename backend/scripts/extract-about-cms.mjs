#!/usr/bin/env node
/**
 * Build about-us page CMS blocks from about-page-source.mjs + post-16 CSS backgrounds.
 * Output: backend/database/data/about-page.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { ABOUT_PAGE_SOURCE as src } from './about-page-source.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const aboutCss = path.join(__dirname, '../../frontend/public/assets/css/post-16_febe85c7.css')
const seoFile = path.join(__dirname, '../../frontend/src/config/pageSeoExtra.js')
const outFile = path.join(__dirname, '../database/data/about-page.json')

const css = fs.readFileSync(aboutCss, 'utf8')
const seoRaw = fs.readFileSync(seoFile, 'utf8')

const seoMatch = seoRaw.match(
  /"about-us":\s*\{[\s\S]*?"title":\s*"([^"]+)"[\s\S]*?"description":\s*"([^"]+)"/,
)

let sort = 0
const blocks = []

function add(block) {
  blocks.push({ sort_order: sort++, ...block })
}

function cmsPath(url) {
  return `cms/about/${path.basename(url)}`
}

function addText(key, section, label, value) {
  if (!value) return
  add({ block_key: key, section, label, type: 'text', value })
}

function addHtml(key, section, label, value) {
  if (!value) return
  add({ block_key: key, section, label, type: 'html', value })
}

function addLink(key, section, label, value, link_url) {
  add({ block_key: key, section, label, type: 'link', value, link_url })
}

// Background images from CSS
const bgMap = {
  f945d28: { key: 'hero.hidden_banner', label: 'Hidden banner background' },
  ec28cb9: { key: 'hero', label: 'Hero section background' },
  '5529364': { key: 'cta', label: 'Talk to us section background' },
  '20c12d2': { key: 'services.rodent', label: 'Rodent card background' },
  e22eba8: { key: 'services.cockroach', label: 'Cockroach card background' },
  f136ba6: { key: 'services.bed_bug', label: 'Bed bug card background' },
  '14a5f46': { key: 'services.ant', label: 'Ant card background' },
  '59f28062': { key: 'why_choose', label: 'Why Choose section background' },
  '4972cab': { key: 'process.preventive', label: 'Preventive steps column background' },
}

const bgRe = /elementor-element-([a-f0-9]+)[^{]*\{[^}]*background-image:url\(["']?\.\.\/images\/([^"')]+)/g
let bgM
while ((bgM = bgRe.exec(css))) {
  const meta = bgMap[bgM[1]]
  if (!meta) continue
  add({
    block_key: `background.${meta.key}`,
    section: meta.key.split('.')[0],
    label: meta.label,
    type: 'background',
    background_image_path: cmsPath(bgM[2]),
    metadata: { elementor_id: bgM[1], filename: bgM[2] },
  })
}

// Hero
addText('hero.breadcrumb', 'hero', 'Breadcrumb current page', src.hero.breadcrumb)
addText('hero.title', 'hero', 'Section title', src.hero.title)
addText('hero.heading', 'hero', 'Main heading', src.hero.heading)
addHtml('hero.body', 'hero', 'Intro body (HTML)', src.hero.body)
addLink('hero.button', 'hero', 'Find Services button', src.hero.button_label, src.hero.button_url)

// Quote form
addText('quote_form.title', 'quote_form', 'Form heading', src.quote_form.title)
addText('quote_form.subtitle', 'quote_form', 'Form subtitle', src.quote_form.subtitle)
addText('quote_form.submit_text', 'quote_form', 'Submit button text', src.quote_form.submit_text)

// Stand for
addText('stand_for.counter_title', 'stand_for', 'Counter label', src.stand_for.counter_title)
add({ block_key: 'stand_for.counter', section: 'stand_for', label: 'Projects counter', type: 'json', metadata: src.stand_for.counter })
add({
  block_key: 'stand_for.image',
  section: 'stand_for',
  label: 'Stand for section image',
  type: 'image',
  image_path: cmsPath(src.stand_for.image),
  metadata: { alt: src.stand_for.image_alt, image_src: src.stand_for.image },
})
addText('stand_for.eyebrow', 'stand_for', 'Eyebrow', src.stand_for.eyebrow)
addText('stand_for.title', 'stand_for', 'Section title', src.stand_for.title)
addHtml('stand_for.purpose', 'stand_for', 'Purpose paragraph', src.stand_for.purpose)
add({ block_key: 'stand_for.mission', section: 'stand_for', label: 'Stand for mission', type: 'json', metadata: src.stand_for.mission })
add({ block_key: 'stand_for.vision', section: 'stand_for', label: 'Stand for vision', type: 'json', metadata: src.stand_for.vision })

// CTA
addText('cta.title', 'cta', 'CTA title', src.cta.title)
addHtml('cta.body', 'cta', 'CTA body (HTML)', src.cta.body)
addLink('cta.button', 'cta', 'Contact Us button', src.cta.button_label, src.cta.button_url)

// Services
addText('services.eyebrow', 'services', 'Services eyebrow', src.services.eyebrow)
addText('services.title', 'services', 'Services title', src.services.title)
addHtml('services.intro', 'services', 'Services intro', src.services.intro)
for (const card of src.services.cards) {
  add({
    block_key: `services.${card.slug}`,
    section: 'services',
    label: `Service card: ${card.title}`,
    type: 'json',
    image_path: cmsPath(card.image),
    metadata: {
      ...card,
      call_label: 'Call Now',
      call_url: 'tel:+61434660060',
      image_src: card.image,
    },
  })
}
addLink('services.more_button', 'services', 'More Services button', src.services.more_button_label, src.services.more_button_url)

// Why choose
addText('why_choose.eyebrow', 'why_choose', 'Why Choose eyebrow', src.why_choose.eyebrow)
addText('why_choose.title', 'why_choose', 'Why Choose title', src.why_choose.title)
addHtml('why_choose.intro', 'why_choose', 'Why Choose intro', src.why_choose.intro)
add({ block_key: 'why_choose.list_left', section: 'why_choose', label: 'Why Choose list (left)', type: 'json', metadata: { items: src.why_choose.list_left } })
add({ block_key: 'why_choose.list_right', section: 'why_choose', label: 'Why Choose list (right)', type: 'json', metadata: { items: src.why_choose.list_right } })

// Process
addText('process.eyebrow', 'process', 'Process eyebrow', src.process.eyebrow)
addText('process.title', 'process', 'Process title', src.process.title)
addHtml('process.intro', 'process', 'Process intro', src.process.intro)
for (const step of src.process.steps) {
  add({
    block_key: `process.${step.slug}`,
    section: 'process',
    label: `Process step: ${step.title}`,
    type: 'json',
    image_path: step.image ? cmsPath(step.image) : null,
    metadata: {
      title: step.title,
      body_html: step.body_html,
      list_items: step.list_items ?? [],
      alt: step.alt ?? '',
      image_src: step.image ?? null,
    },
  })
}

// Reviews
addText('reviews.eyebrow', 'reviews', 'Reviews eyebrow', src.reviews.eyebrow)
addText('reviews.title', 'reviews', 'Reviews title', src.reviews.title)
addText('reviews.subtitle', 'reviews', 'Reviews subtitle', src.reviews.subtitle)
addText('reviews.rating_label', 'reviews', 'Rating label', src.reviews.rating_label)
addHtml('reviews.count_text', 'reviews', 'Reviews count text', src.reviews.count_text)

const page = {
  slug: 'about-us',
  title: 'About Us',
  seo_title: seoMatch?.[1] ?? 'About Us',
  seo_description: seoMatch?.[2] ?? '',
  body_class:
    'wp-singular page-template page-template-elementor_header_footer page page-id-16 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor elementor-default elementor-template-full-width elementor-kit-9 elementor-page elementor-page-16',
  elementor_id: 16,
  is_published: true,
  blocks,
}

fs.mkdirSync(path.dirname(outFile), { recursive: true })
fs.writeFileSync(outFile, JSON.stringify(page, null, 2))
console.log(`Wrote ${blocks.length} blocks to ${outFile}`)
