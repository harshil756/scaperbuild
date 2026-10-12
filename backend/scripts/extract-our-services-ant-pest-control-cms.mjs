#!/usr/bin/env node
/**
 * Extract our-services-ant-pest-control CMS blocks from source JSX snapshot + post-766 CSS.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const jsxPath = path.join(__dirname, 'our-services-ant-pest-control-page-source.jsx')
const cssPath = path.join(root, 'frontend/public/assets/css/post-766_82d8fad4.css')
const seoFile = path.join(root, 'frontend/src/config/pageSeoExtra.js')
const outFile = path.join(__dirname, '../database/data/our-services-ant-pest-control-page.json')

const jsx = fs.readFileSync(jsxPath, 'utf8')
const css = fs.readFileSync(cssPath, 'utf8')
const seoRaw = fs.readFileSync(seoFile, 'utf8')

const seoMatch = seoRaw.match(
  /"our-services-ant-pest-control":\s*\{[\s\S]*?"title":\s*"([^"]+)"[\s\S]*?"description":\s*"([^"]+)"/,
)

let sort = 0
const blocks = []

function add(block) {
  blocks.push({ sort_order: sort++, ...block })
}

function cmsPath(url) {
  return `cms/our-services-ant-pest-control/${path.basename(url)}`
}

function extractHeading(id) {
  const re = new RegExp(`data-id="${id}"[\\s\\S]*?<h[1-6][^>]*>([^<]+)</h[1-6]>`)
  return jsx.match(re)?.[1]?.replace(/\s+/g, ' ').replace(/&amp;/g, '&').trim()
}

function extractHtmlAfter(id) {
  const re = new RegExp(`data-id="${id}"[\\s\\S]*?<div className="elementor-widget-container">\\s*([\\s\\S]*?)<\\/div>\\s*<\\/div>`)
  const m = jsx.match(re)
  if (!m) return null
  return m[1]
    .replace(/className=/g, 'class=')
    .replace(/style=\{\{[^}]+\}\}/g, '')
    .replace(/\{&quot;([^&]+)&quot;\}/g, '"$1"')
    .replace(/<Link([^>]*)to="([^"]+)"([^>]*)>/g, '<a$1href="$2"$3>')
    .replace(/<\/Link>/g, '</a>')
    .trim()
}

function extractParagraph(id) {
  const re = new RegExp(`data-id="${id}"[\\s\\S]*?<p[^>]*>([\\s\\S]*?)<\\/p>`)
  const m = jsx.match(re)
  return m?.[1]?.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() ?? null
}

function addText(key, section, label, value) {
  if (!value) return
  add({ block_key: key, section, label, type: 'text', value })
}

function addHtml(key, section, label, value) {
  if (!value) return
  add({ block_key: key, section, label, type: 'html', value })
}

function extractSectionChunk(sectionStart, sectionEnd, occurrence = 0) {
  let idx = -1
  for (let i = 0; i <= occurrence; i++) {
    idx = jsx.indexOf(sectionStart, idx + 1)
    if (idx === -1) return ''
  }
  const after = jsx.slice(idx + sectionStart.length)
  const endIdx = after.indexOf(sectionEnd)
  return endIdx === -1 ? after : after.slice(0, endIdx)
}

function extractImageBoxes(sectionStart, sectionEnd, occurrence = 0) {
  const chunk = extractSectionChunk(sectionStart, sectionEnd, occurrence)
  const re =
    /src="(\/assets\/images\/[^"]+)"[\s\S]*?elementor-image-box-title">\s*([^<]+?)\s*<\/(?:h3|p|span)>[\s\S]*?(?:elementor-image-box-description">\s*([^<]+?)\s*<\/p>)?/g
  const items = []
  let m
  while ((m = re.exec(chunk))) {
    items.push({
      image: m[1],
      title: m[2].trim(),
      description: (m[3] ?? '').trim(),
    })
  }
  return items
}

function extractEkitImageBoxes(sectionStart, sectionEnd) {
  const chunk = jsx.split(sectionStart)[1]?.split(sectionEnd)[0] ?? ''
  const re =
    /src="(\/assets\/images\/[^"]+)"[\s\S]*?elementskit-info-box-title">\s*([^<]+?)\s*<\/h3>[\s\S]*?elementskit-box-style-content">\s*([^<]+?)\s*<\/div>/g
  const items = []
  let m
  while ((m = re.exec(chunk))) {
    items.push({
      image: m[1],
      title: m[2].replace(/\s+/g, ' ').trim(),
      description: m[3].replace(/\s+/g, ' ').trim(),
    })
  }
  return items
}

function extractIconListItems(id) {
  const re = new RegExp(`data-id="${id}"[\\s\\S]*?<ul className="elementor-icon-list-items">([\\s\\S]*?)<\\/ul>`)
  const m = jsx.match(re)
  if (!m) return []
  return [...m[1].matchAll(/elementor-icon-list-text">([^<]+)</g)].map((x) => x[1].trim())
}

function extractImageSrc(id) {
  const re = new RegExp(`data-id="${id}"[\\s\\S]*?src="(\\/assets\\/images\\/[^"]+)"`)
  return jsx.match(re)?.[1] ?? null
}

// Backgrounds from CSS
const bgMap = {
  a342089: { key: 'hero', label: 'Hero background' },
  f5e4d41: { key: 'why_inside', label: 'Why inside section background' },
  f732271: { key: 'cta', label: 'CTA section background' },
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
const breadcrumbRe = /data-id="fd02c33"[\s\S]*?elementor-icon-list-text">([^<]+)</g
const breadcrumbs = [...jsx.matchAll(breadcrumbRe)].map((m) => m[1].trim())
addText('hero.breadcrumb_parent', 'hero', 'Breadcrumb parent', breadcrumbs[1] ?? 'Services')
addText('hero.breadcrumb_current', 'hero', 'Breadcrumb current', breadcrumbs[2] ?? 'ant pest contral')
addText('hero.title', 'hero', 'Section title', extractHeading('5b29971'))
addText('hero.heading', 'hero', 'Main heading', extractHeading('f59a88c'))
addHtml('hero.intro', 'hero', 'Intro paragraph', extractHtmlAfter('424a488'))

// Quote form
addText('quote_form.title', 'quote_form', 'Form heading', extractHeading('ed9cb71'))
addText('quote_form.subtitle', 'quote_form', 'Form subtitle', extractHeading('fb9a1f0'))
addText('quote_form.submit_text', 'quote_form', 'Submit button text', 'Submit Quote')

// Species
addText('species.eyebrow', 'species', 'Eyebrow', extractHeading('6501e7d'))
addText('species.title', 'species', 'Section title', extractHeading('578d989'))
addHtml('species.intro', 'species', 'Intro HTML', extractParagraph('f6bb8ec') ? `<p>${extractParagraph('f6bb8ec')}</p>` : null)
const speciesItems = extractImageBoxes('data-id="6dc7fcc"', 'data-id="2956c52"')
const speciesSlugs = ['argentine', 'carpenter', 'white_footed', 'coastal_brown']
speciesItems.forEach((item, i) => {
  const slug = speciesSlugs[i] ?? `species_${i}`
  add({
    block_key: `species.${slug}`,
    section: 'species',
    label: `Species: ${item.title}`,
    type: 'json',
    image_path: cmsPath(item.image),
    metadata: { slug, ...item, image_src: item.image },
  })
})

// Why inside
addText('why_inside.eyebrow', 'why_inside', 'Eyebrow', extractHeading('cee4cbe'))
addText('why_inside.title', 'why_inside', 'Section title', extractHeading('6d22bd0'))
addHtml('why_inside.list_html', 'why_inside', 'List HTML', extractHtmlAfter('59fd6df'))
addHtml('why_inside.footer', 'why_inside', 'Footer text', extractHtmlAfter('2e1c8d0'))
const whyInsideImg = extractImageSrc('406e473')
if (whyInsideImg) {
  add({
    block_key: 'why_inside.image',
    section: 'why_inside',
    label: 'Section image',
    type: 'image',
    image_path: cmsPath(whyInsideImg),
    metadata: { image_src: whyInsideImg },
  })
}

// Problems
addText('problems.eyebrow', 'problems', 'Eyebrow', extractHeading('c204f1d'))
addText('problems.title', 'problems', 'Section title', extractHeading('5de8f7d'))
addHtml('problems.intro', 'problems', 'Intro HTML', extractParagraph('ea758e9') ? `<p>${extractParagraph('ea758e9')}</p>` : null)
const problemItems = extractEkitImageBoxes('data-id="782d287"', 'data-id="12c387c"')
const problemSlugs = [
  'food_contamination',
  'structural_damage',
  'bites_stings',
  'electrical_damage',
  'infestation_growth',
  'business_disruptions',
]
problemItems.forEach((item, i) => {
  const slug = problemSlugs[i] ?? `problem_${i}`
  add({
    block_key: `problems.${slug}`,
    section: 'problems',
    label: `Problem: ${item.title}`,
    type: 'json',
    image_path: cmsPath(item.image),
    metadata: { slug, ...item, image_src: item.image },
  })
})

// Prevention
addText('prevention.eyebrow', 'prevention', 'Eyebrow', extractHeading('326f094'))
addText('prevention.title', 'prevention', 'Section title', extractHeading('010327e'))
addHtml('prevention.intro', 'prevention', 'Intro HTML', extractParagraph('7696069') ? `<p>${extractParagraph('7696069')}</p>` : null)

const preventionTipConfigs = [
  { slug: 'clean_home', titleId: '3bce987', listId: '446fbbb' },
  { slug: 'seal_entries', titleId: 'd668ba4', listId: 'a4646d8' },
  { slug: 'eliminate_moisture', titleId: '8da92f1', listId: '5750a6f' },
  { slug: 'natural_deterrents', titleId: 'e0495b8', listId: 'cb3d33f' },
  { slug: 'outdoor_clean', titleId: '79db49d', listId: 'a55e290' },
  { slug: 'baits_traps', titleId: '8d109a3', listId: '8c84a46' },
  { slug: 'control_moisture', titleId: 'e47cc08', listId: 'acb9541', introId: '23a7e29' },
  { slug: 'professional', titleId: 'd5d1b1b', introId: 'b50781c' },
]

const preventionTips = preventionTipConfigs.map((cfg) => ({
  slug: cfg.slug,
  title: extractHeading(cfg.titleId) ?? '',
  intro: cfg.introId ? extractParagraph(cfg.introId) : null,
  list: cfg.listId ? extractIconListItems(cfg.listId) : [],
}))

add({
  block_key: 'prevention.tips',
  section: 'prevention',
  label: 'Prevention tips',
  type: 'json',
  metadata: { tips: preventionTips },
})

// Features
const featureItems = extractImageBoxes('data-id="df39b6f"', 'data-id="f58628f"')
const featureSlugs = ['free_quotes', 'five_star_reviews', 'licensed', 'satisfaction', 'local_owned']
featureItems.forEach((item, i) => {
  const slug = featureSlugs[i] ?? `feature_${i}`
  add({
    block_key: `features.${slug}`,
    section: 'features',
    label: `Feature: ${item.title}`,
    type: 'json',
    image_path: cmsPath(item.image),
    metadata: { slug, ...item, image_src: item.image },
  })
})

// FAQ
addText('faq.title', 'faq', 'FAQ title', extractHeading('bfd6cde'))
const faqSidebarImg = extractImageSrc('e9f2f6e')
if (faqSidebarImg) {
  add({
    block_key: 'faq.sidebar_image',
    section: 'faq',
    label: 'FAQ sidebar image',
    type: 'image',
    image_path: cmsPath(faqSidebarImg),
    metadata: { image_src: faqSidebarImg },
  })
}

const faqCtaTitle = jsx.match(/data-id="8a2dcb0"[\s\S]*?elementskit-info-box-title">\s*([^<]+?)\s*<\/h3>/)?.[1]?.trim()
const faqCtaBody = jsx.match(/data-id="8a2dcb0"[\s\S]*?<p>([^<]+)<\/p>/)?.[1]?.trim()
const faqCtaBtn = jsx.match(/data-id="8a2dcb0"[\s\S]*?<Link[^>]*to="([^"]+)"[^>]*>\s*([^<]+)/)
addText('faq.sidebar_cta_title', 'faq', 'Sidebar CTA title', faqCtaTitle)
addText('faq.sidebar_cta_body', 'faq', 'Sidebar CTA body', faqCtaBody)
if (faqCtaBtn) {
  add({
    block_key: 'faq.sidebar_cta_button',
    section: 'faq',
    label: 'Sidebar CTA button',
    type: 'link',
    value: faqCtaBtn[2].trim(),
    link_url: faqCtaBtn[1],
  })
}

const faqItems = []
const faqRe = /ekit-accordion-title">\s*([^<]+)<\/span>[\s\S]*?<div className="elementskit-card-body ekit-accordion--content">\s*([\s\S]*?)<\/div>/g
let fM
while ((fM = faqRe.exec(jsx))) {
  faqItems.push({
    question: fM[1].replace(/\s+/g, ' ').trim(),
    answer_html: fM[2].trim(),
  })
}
add({
  block_key: 'faq.items',
  section: 'faq',
  label: 'FAQ items',
  type: 'json',
  metadata: { items: faqItems },
})

// Reviews
addText('reviews.eyebrow', 'reviews', 'Reviews eyebrow', extractHeading('110e690'))
addText('reviews.title', 'reviews', 'Reviews title', extractHeading('e19f5a7'))
addText('reviews.subtitle', 'reviews', 'Reviews subtitle', extractHeading('b16caa1'))
const ratingLabel = jsx.match(/data-id="bc4ba90"[\s\S]*?<h6>([^<]+)<\/h6>/)?.[1]?.trim()
addText('reviews.rating_label', 'reviews', 'Rating label', ratingLabel)
addHtml('reviews.count_text', 'reviews', 'Review count text', extractHtmlAfter('5c76140'))

// Blog
addText('blog.eyebrow', 'blog', 'Section eyebrow', extractHeading('575a21f'))
addText('blog.title', 'blog', 'Section title', extractHeading('2fd4f30'))
const blogPosts = []
const blogRe = /<div className="elementskit-post-image-card">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g
let bM
while ((bM = blogRe.exec(jsx))) {
  const chunk = bM[1]
  const link = chunk.match(/to="([^"]+)"/)?.[1]
  const img = chunk.match(/src="(\/assets\/images\/[^"]+)"/)?.[1]
  const alt = chunk.match(/alt="([^"]*)"/)?.[1] ?? ''
  const title = chunk.match(/<h2 className="entry-title">[\s\S]*?>\s*([^<]+)/)?.[1]?.replace(/\s+/g, ' ').trim()
  const excerpt = chunk.match(/<p>([^<]+)<\/p>/)?.[1]?.trim()
  if (!link || !img || !title) continue
  blogPosts.push({ title, excerpt, link, alt, image_src: img, image_path: cmsPath(img) })
}
add({
  block_key: 'blog.posts',
  section: 'blog',
  label: 'Blog preview posts',
  type: 'json',
  metadata: { posts: blogPosts },
})

// CTA
addText('cta.eyebrow', 'cta', 'Eyebrow', extractHeading('eb45e17'))
addText('cta.title', 'cta', 'Section title', extractHeading('0d6851b'))
addHtml('cta.body', 'cta', 'Body HTML', extractHtmlAfter('4852935'))
const ctaBtn = jsx.match(/data-id="3a9556f"[\s\S]*?<Link[^>]*to="([^"]+)"[^>]*>[\s\S]*?elementor-button-text">([^<]+)</)
if (ctaBtn) {
  add({
    block_key: 'cta.button',
    section: 'cta',
    label: 'CTA button',
    type: 'link',
    value: ctaBtn[2].trim(),
    link_url: ctaBtn[1],
  })
}

const page = {
  slug: 'our-services-ant-pest-control',
  title: 'Ant Pest Control',
  seo_title: seoMatch?.[1] ?? 'Ant Pest Control Treatment in Melbourne - 7 States Pest Control',
  seo_description: seoMatch?.[2] ?? '',
  body_class:
    'wp-singular page-template page-template-elementor_header_footer page wp-custom-logo wp-embed-responsive wp-theme-hello-elementor elementor-default elementor-template-full-width elementor-kit-9 elementor-page elementor-page-766',
  elementor_id: 766,
  is_published: true,
  blocks,
}

fs.mkdirSync(path.dirname(outFile), { recursive: true })
fs.writeFileSync(outFile, JSON.stringify(page, null, 2))
console.log(`Wrote ${blocks.length} blocks to ${outFile}`)
