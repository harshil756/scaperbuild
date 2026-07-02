#!/usr/bin/env node
/**
 * Extract home page CMS blocks from frontend HomePage.jsx + post-14 CSS.
 * Output: backend/database/data/home-page.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const homeJsx = path.join(root, 'frontend/src/pages/HomePage.jsx')
const homeCss = path.join(root, 'frontend/public/assets/css/post-14_5ba022e1.css')
const seoFile = path.join(root, 'frontend/src/config/pageSeoExtra.js')
const outFile = path.join(__dirname, '../database/data/home-page.json')

const jsx = fs.readFileSync(homeJsx, 'utf8')
const css = fs.readFileSync(homeCss, 'utf8')
const seoRaw = fs.readFileSync(seoFile, 'utf8')

const seoMatch = seoRaw.match(/"home":\s*\{[\s\S]*?"title":\s*"([^"]+)"[\s\S]*?"description":\s*"([^"]+)"/)
const seoTitle = seoMatch?.[1] ?? 'Home'
const seoDescription = seoMatch?.[2] ?? ''

let sort = 0
const blocks = []

function add(block) {
  blocks.push({ sort_order: sort++, ...block })
}

function cmsPath(url) {
  const name = path.basename(url)
  return `cms/home/${name}`
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

// --- Background images from CSS ---
const bgMap = {
  '37fdbc3f': { key: 'hero', label: 'Hero section background' },
  '9dd63a9': { key: 'services.cockroach', label: 'Cockroach card background' },
  '26bc2d0': { key: 'services.wasp', label: 'Wasp card background' },
  '60b19b0': { key: 'services.spider', label: 'Spider card background' },
  '8bbce6f': { key: 'services.moth', label: 'Moth card background' },
  '5e1d8c8': { key: 'services.rodent', label: 'Rodent card background' },
  'bc1e76c': { key: 'services.ant', label: 'Ant card background' },
  '3bf254e8': { key: 'about', label: 'About section background' },
  'db0472': { key: 'about.image_column', label: 'About column background image' },
  '7a1baa44': { key: 'why_choose', label: 'Why Choose section background' },
  '9286835': { key: 'reviews', label: 'Reviews section background' },
}

const bgRe = /elementor-element-([a-f0-9]+)[^{]*\{[^}]*background-image:url\(["']?\.\.\/images\/([^"')]+)/g
let bgM
while ((bgM = bgRe.exec(css))) {
  const id = bgM[1]
  const file = bgM[2]
  const meta = bgMap[id]
  if (!meta) continue
  add({
    block_key: `background.${meta.key}`,
    section: meta.key.split('.')[0],
    label: meta.label,
    type: 'background',
    background_image_path: cmsPath(file),
    metadata: { elementor_id: id, filename: file },
  })
}

// --- Headings (by Elementor data-id for accuracy) ---
function extractHeading(dataId) {
  const re = new RegExp(`data-id="${dataId}"[\\s\\S]*?<h[1-6][^>]*>([^<]+)</h[1-6]>`)
  return jsx.match(re)?.[1]?.replace(/\s+/g, ' ').trim()
}

function extractEkitTitle(dataId) {
  const re = new RegExp(`data-id="${dataId}"[\\s\\S]*?elementskit-section-title">([^<]+)<`)
  return jsx.match(re)?.[1]?.replace(/\s+/g, ' ').trim()
}

function addText(key, section, label, value) {
  if (!value) return
  add({ block_key: key, section, label, type: 'text', value })
}

addText('hero.quote_title', 'quote_form', 'Quote form title', extractHeading('d6a136d'))
addText('hero.quote_subtitle', 'quote_form', 'Quote form subtitle', extractHeading('ab5d866'))
addText('hero.eyebrow', 'hero', 'Hero eyebrow', extractHeading('2b2e869'))
addText('hero.title', 'hero', 'Hero main title', extractHeading('2c05737'))
addText('services.eyebrow', 'services', 'Services eyebrow', extractHeading('5a9324c'))
addText('services.title', 'services', 'Services title', extractHeading('6b16c23'))
addText('about.eyebrow', 'about', 'About eyebrow', extractHeading('22ca238'))
addText('about.title', 'about', 'About title', extractHeading('63e59634'))
addText('why_choose.eyebrow', 'why_choose', 'Why Choose eyebrow', extractHeading('ccd7152'))
addText('why_choose.title', 'why_choose', 'Why Choose title', extractEkitTitle('63a0589a'))
addText('cta.eyebrow', 'cta', 'CTA eyebrow', extractHeading('62e9fce4'))
addText('cta.title', 'cta', 'CTA title', extractHeading('71cbec9d'))
addText('process.eyebrow', 'process', 'Process eyebrow', extractHeading('7c5f161'))
addText('process.title', 'process', 'Process title', extractHeading('55c70f33'))
addText('reviews.eyebrow', 'reviews', 'Reviews eyebrow', extractHeading('d13b462'))
addText('reviews.title', 'reviews', 'Reviews title', extractHeading('bef6205'))
addText('reviews.subtitle', 'reviews', 'Reviews subtitle', extractHeading('e35f23f'))
addText('reviews.rating_label', 'reviews', 'Reviews rating label', extractHeading('89cdf79'))
addText('faq.eyebrow', 'faq', 'FAQ eyebrow', extractHeading('e14eb60'))
addText('faq.title', 'faq', 'FAQ title', extractHeading('5a80fdcb'))
addText('blog.eyebrow', 'blog', 'Blog eyebrow', extractHeading('4744bf9'))
addText('blog.title', 'blog', 'Blog title', extractHeading('affbaf9'))

// --- Service cards ---
const cardRe =
  /elementskit-infobox[\s\S]*?<img[^>]*src="(\/assets\/images\/[^"]+)"[^>]*(?:alt="([^"]*)")?[\s\S]*?<h3 className="elementskit-info-box-title">\s*([^<]+)[\s\S]*?<p>([^<]+)<\/p>[\s\S]*?<span className="ekit-badge">([^<]+)<\/span>/g
let cM
let cardIdx = 0
const serviceSlugs = ['cockroach', 'wasp', 'spider', 'moth', 'rodent', 'ant']
while ((cM = cardRe.exec(jsx))) {
  const slug = serviceSlugs[cardIdx] ?? `service_${cardIdx}`
  add({
    block_key: `services.${slug}`,
    section: 'services',
    label: `Service card: ${cM[3].trim()}`,
    type: 'json',
    value: null,
    image_path: cmsPath(cM[1]),
    metadata: {
      title: cM[3].trim(),
      price_text: cM[4].trim(),
      badge: cM[5].trim(),
      alt: (cM[2] ?? '').trim(),
      image_src: cM[1],
    },
  })
  cardIdx++
}

// --- HTML text blocks (key paragraphs) ---
const htmlBlocks = [
  {
    key: 'services.intro',
    section: 'services',
    label: 'Services intro paragraph',
    pattern: /data-id="2e27784"[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/,
  },
  {
    key: 'about.body',
    section: 'about',
    label: 'About us body text',
    pattern: /data-id="733b5627"[\s\S]*?<div className="elementor-widget-container">\s*([\s\S]*?)<\/div>/,
  },
  {
    key: 'why_choose.intro',
    section: 'why_choose',
    label: 'Why Choose intro',
    pattern: /data-id="362ceb03"[\s\S]*?<p>([\s\S]*?)<\/p>/,
  },
  {
    key: 'why_choose.benefits',
    section: 'why_choose',
    label: 'Why Choose benefits list',
    pattern: /data-id="45d765f"[\s\S]*?<div className="elementor-widget-container">\s*([\s\S]*?)<\/div>/,
  },
  {
    key: 'cta.body',
    section: 'cta',
    label: 'CTA body text',
    pattern: /data-id="6eee8f25"[\s\S]*?<div className="elementor-widget-container">\s*([\s\S]*?)<\/div>/,
  },
  {
    key: 'process.intro',
    section: 'process',
    label: 'Process intro',
    pattern: /data-id="5c022552"[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/,
  },
]

for (const hb of htmlBlocks) {
  const m = jsx.match(hb.pattern)
  if (m) {
    let html = m[1]
      .replace(/className=/g, 'class=')
      .replace(/style=\{\{fontWeight:\s*400\}\}/g, 'style="font-weight:400"')
      .replace(/style=\{\{fontWeight:\s*400\}\}/g, '')
      .replace(/\{&quot;([^&]+)&quot;\}/g, '"$1"')
      .trim()
    add({
      block_key: hb.key,
      section: hb.section,
      label: hb.label,
      type: 'html',
      value: html,
    })
  }
}

// --- Feature icon boxes ---
const featureRe = /<h3 className="elementor-icon-box-title">\s*<span>\s*([^<]+)\s*<\/span>/g
let fM
let fIdx = 0
const featureKeys = ['features.prompt_service', 'features.family_safe', 'features.trained_techs', 'features.professional']
while ((fM = featureRe.exec(jsx))) {
  const key = featureKeys[fIdx]
  if (key) {
    add({
      block_key: key,
      section: 'features',
      label: `Feature ${fIdx + 1}`,
      type: 'text',
      value: fM[1].replace(/\s+/g, ' ').trim(),
    })
  }
  fIdx++
}

// --- Process steps ---
const processSteps = [
  { slug: 'inspection', headingId: '955adb1', textId: '91217db', imageId: '1605948' },
  { slug: 'treatment_plan', headingId: 'd81403f', textId: '86afff7', imageId: 'e2eaaba' },
  { slug: 'extermination', headingId: 'b9adb7e', textId: '0937eb6', imageId: 'affd0ea' },
  { slug: 'monitoring', headingId: 'bcea69a', textId: '2ca744f', imageId: '2e07a24' },
  { slug: 'prevention', headingId: 'f460faf', textId: '9e335b2', imageId: 'ed53ee8' },
]

for (const step of processSteps) {
  const title = extractHeading(step.headingId)
  const descMatch = jsx.match(
    new RegExp(`data-id="${step.textId}"[\\s\\S]*?<div className="elementor-widget-container">\\s*([\\s\\S]*?)</div>`),
  )
  const imgMatch = jsx.match(
    new RegExp(`data-id="${step.imageId}"[\\s\\S]*?src="(\\/assets\\/images\\/[^"]+)"[^>]*(?:alt="([^"]*)")?`),
  )
  if (!title || !imgMatch) continue
  add({
    block_key: `process.${step.slug}`,
    section: 'process',
    label: `Process step: ${title}`,
    type: 'json',
    image_path: cmsPath(imgMatch[1]),
    metadata: {
      title,
      description: descMatch?.[1]?.trim() ?? '',
      alt: (imgMatch[2] ?? '').trim(),
      image_src: imgMatch[1],
    },
  })
}

// --- FAQ ---
const faqItems = []
const faqTitleRe = /<span className="ekit-accordion-title">\s*([^<]+)<\/span>[\s\S]*?<div className="elementskit-card-body ekit-accordion--content">\s*<p>([\s\S]*?)<\/p>/g
let faqM
while ((faqM = faqTitleRe.exec(jsx))) {
  faqItems.push({
    question: faqM[1].replace(/\s+/g, ' ').trim(),
    answer_html: faqM[2].trim(),
  })
}
add({
  block_key: 'faq.items',
  section: 'faq',
  label: 'FAQ accordion items',
  type: 'json',
  metadata: { items: faqItems },
})

// --- FAQ sidebar ---
const faqSidebarRe = /data-id="6af4e30d"[\s\S]*?<h3 className="elementskit-info-box-title">\s*([^<]+)[\s\S]*?<p>([^<]+)<\/p>/
const faqSide = jsx.match(faqSidebarRe)
if (faqSide) {
  add({
    block_key: 'faq.sidebar',
    section: 'faq',
    label: 'FAQ sidebar callout',
    type: 'json',
    metadata: { title: faqSide[1].trim(), text: faqSide[2].trim(), link: '/contact-us' },
  })
}

// --- FAQ image ---
const faqImgRe = /data-id="76075da8"[\s\S]*?<img[^>]*src="(\/assets\/images\/[^"]+)"[^>]*(?:alt="([^"]*)")?/
const faqImg = jsx.match(faqImgRe)
if (faqImg) {
  add({
    block_key: 'faq.image',
    section: 'faq',
    label: 'FAQ section image',
    type: 'image',
    image_path: cmsPath(faqImg[1]),
    metadata: { alt: faqImg[2], image_src: faqImg[1] },
  })
}

// --- Blog posts ---
const blogRe =
  /<div className="elementskit-post-image-card">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g
let bM
let bIdx = 0
const blogPosts = []
while ((bM = blogRe.exec(jsx))) {
  const chunk = bM[1]
  const link = chunk.match(/to="([^"]+)"/)?.[1]
  const img = chunk.match(/src="(\/assets\/images\/[^"]+)"/)
  const alt = chunk.match(/alt="([^"]*)"/)?.[1] ?? ''
  const title = chunk.match(/<h2 className="entry-title">[\s\S]*?>\s*([^<]+)/)?.[1]
  const excerpt = chunk.match(/<p>([^<]+)<\/p>/)?.[1]
  if (!link || !img || !title) continue
  blogPosts.push({
    slug: bIdx + 1,
    title: title.replace(/\s+/g, ' ').trim(),
    excerpt: (excerpt ?? '').trim(),
    link,
    alt,
    image_src: img[1],
    image_path: cmsPath(img[1]),
  })
  bIdx++
}
add({
  block_key: 'blog.posts',
  section: 'blog',
  label: 'Blog preview posts',
  type: 'json',
  metadata: { posts: blogPosts },
})

// --- About & CTA buttons ---
const aboutBtn = jsx.match(/data-id="6e73320e"[\s\S]*?to="([^"]+)"[\s\S]*?elementor-button-text">([^<]+)</)
if (aboutBtn) {
  add({
    block_key: 'about.button',
    section: 'about',
    label: 'About More About Us button',
    type: 'link',
    value: aboutBtn[2].trim(),
    link_url: aboutBtn[1],
  })
}

const ctaBtn = jsx.match(/data-id="2c3c324e"[\s\S]*?to="([^"]+)"[\s\S]*?elementor-button-text">([^<]+)</)
if (ctaBtn) {
  add({
    block_key: 'cta.button',
    section: 'cta',
    label: 'CTA Contact Us button',
    type: 'link',
    value: ctaBtn[2].trim(),
    link_url: ctaBtn[1],
  })
}

// --- Hero buttons ---
add({
  block_key: 'hero.button_contact',
  section: 'hero',
  label: 'Hero Contact Us button',
  type: 'link',
  value: 'Contact Us',
  link_url: '/contact-us',
})
add({
  block_key: 'hero.button_services',
  section: 'hero',
  label: 'Hero Our Services button',
  type: 'link',
  value: 'Our Services',
  link_url: '/our-services',
})

// --- Quote form ---
add({
  block_key: 'quote_form.submit_text',
  section: 'quote_form',
  label: 'Quote form submit button',
  type: 'text',
  value: 'Submit Quote',
})

const page = {
  slug: 'home',
  title: 'Home',
  seo_title: seoTitle,
  seo_description: seoDescription,
  body_class: 'page-template-default page page-id-14',
  elementor_id: 14,
  is_published: true,
  blocks,
}

fs.mkdirSync(path.dirname(outFile), { recursive: true })
fs.writeFileSync(outFile, JSON.stringify(page, null, 2))
console.log(`Wrote ${blocks.length} blocks to ${outFile}`)
