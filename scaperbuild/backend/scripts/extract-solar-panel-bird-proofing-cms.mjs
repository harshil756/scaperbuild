#!/usr/bin/env node
/**
 * Extract solar-panel-bird-proofing CMS blocks from source JSX snapshot + post-1353 CSS.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const jsxPath = path.join(__dirname, 'solar-panel-bird-proofing-page-source.jsx')
const cssPath = path.join(root, 'frontend/public/assets/css/post-1353_1e5cb601.css')
const seoFile = path.join(root, 'frontend/src/config/pageSeoExtra.js')
const outFile = path.join(__dirname, '../database/data/solar-panel-bird-proofing-page.json')

const jsx = fs.readFileSync(jsxPath, 'utf8')
const css = fs.readFileSync(cssPath, 'utf8')
const seoRaw = fs.readFileSync(seoFile, 'utf8')

const seoMatch = seoRaw.match(
  /"solar-panel-bird-proofing":\s*\{[\s\S]*?"title":\s*"([^"]+)"[\s\S]*?"description":\s*"([^"]+)"/,
)

let sort = 0
const blocks = []

function add(block) {
  blocks.push({ sort_order: sort++, ...block })
}

function cmsPath(url) {
  return `cms/solar-panel-bird-proofing/${path.basename(url)}`
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

function extractIconBoxes(sectionStart, sectionEnd) {
  const chunk = jsx.split(sectionStart)[1]?.split(sectionEnd)[0] ?? ''
  const re =
    /src="(\/assets\/images\/[^"]+)"[\s\S]*?elementor-icon-box-title">\s*<span>\s*([^<]+)\s*<\/span>[\s\S]*?elementor-icon-box-description">\s*([\s\S]*?)<\/p>/g
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

function extractTextIconBoxes(sectionStart, sectionEnd) {
  const chunk = jsx.split(sectionStart)[1]?.split(sectionEnd)[0] ?? ''
  const re =
    /elementor-icon-box-title">\s*<span>\s*([^<]+?)\s*<\/span>[\s\S]*?elementor-icon-box-description">\s*([\s\S]*?)<\/p>/g
  const items = []
  let m
  while ((m = re.exec(chunk))) {
    items.push({
      title: m[1].replace(/\s+/g, ' ').trim(),
      description: m[2].replace(/\s+/g, ' ').trim(),
    })
  }
  return items
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
    /src="(\/assets\/images\/[^"]+)"[\s\S]*?elementor-image-box-title">\s*([^<]+?)\s*<\/(?:h3|p|span)>[\s\S]*?elementor-image-box-description">\s*([^<]+?)\s*<\/p>/g
  const items = []
  let m
  while ((m = re.exec(chunk))) {
    items.push({
      image: m[1],
      title: m[2].trim(),
      description: m[3].trim(),
    })
  }
  return items
}

function extractEkitBoxes(sectionStart, sectionEnd) {
  const chunk = jsx.split(sectionStart)[1]?.split(sectionEnd)[0] ?? ''
  const re =
    /src="(\/assets\/images\/[^"]+)"[\s\S]*?elementskit-info-box-title">\s*([^<]+)[\s\S]*?<p>([^<]+)<\/p>/g
  const items = []
  let m
  while ((m = re.exec(chunk))) {
    items.push({
      image: m[1],
      title: m[2].replace(/\s+/g, ' ').trim(),
      description: m[3].trim(),
    })
  }
  return items
}

function extractListItems(sectionStart, sectionEnd) {
  const chunk = jsx.split(sectionStart)[1]?.split(sectionEnd)[0] ?? ''
  return [...chunk.matchAll(/elementor-icon-list-text">([^<]+)</g)].map((m) => m[1].trim())
}

// Backgrounds from CSS
const bgMap = {
  ba9dae3: { key: 'hero', label: 'Hero background' },
  de3415d: { key: 'intro_video', label: 'Intro / video section background' },
  '9630408': { key: 'services', label: 'Services section background' },
  a047a50: { key: 'signs', label: 'Signs section background' },
  d3bcb94: { key: 'results', label: 'Results section background' },
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
addText('hero.breadcrumb', 'hero', 'Breadcrumb label', 'Get Affordable Bird Removal Service')
addText('hero.title', 'hero', 'Section title', extractHeading('d943147'))
addText('hero.heading', 'hero', 'Main heading', extractHeading('8153e7d'))
addHtml('hero.intro', 'hero', 'Intro paragraph', extractParagraph('7a605c4') ? `<p>${extractParagraph('7a605c4')}</p>` : null)

// Quote form
addText('quote_form.title', 'quote_form', 'Form heading', extractHeading('a1efe77'))
addText('quote_form.subtitle', 'quote_form', 'Form subtitle', extractHeading('b5f062e'))
addText('quote_form.submit_text', 'quote_form', 'Submit button text', 'Submit Quote')

// Intro / video section
addText('intro_video.eyebrow', 'intro_video', 'Eyebrow', extractHeading('69e92b8'))
addText('intro_video.title', 'intro_video', 'Section title', extractHeading('30889d3'))
addHtml('intro_video.body', 'intro_video', 'Body HTML', extractHtmlAfter('751c049'))
const ytMatch = jsx.match(/youtube\.com\/embed\/([^"?]+)/)
if (ytMatch) {
  add({
    block_key: 'intro_video.youtube_id',
    section: 'intro_video',
    label: 'YouTube video ID',
    type: 'text',
    value: ytMatch[1],
  })
}

// Protection services
addText('services.title', 'services', 'Section title', extractHeading('75692a3'))
addHtml('services.intro', 'services', 'Intro HTML', extractParagraph('3440d1b') ? `<p>${extractParagraph('3440d1b')}</p>` : null)
addHtml('services.footer', 'services', 'Footer HTML', extractParagraph('6be9f35') ? `<p>${extractParagraph('6be9f35')}</p>` : null)

const serviceItems = extractIconBoxes('Complete Solar Panel Bird Protection Services', 'Why Bird Pest Control')
const serviceSlugs = ['cleaning', 'spikes', 'mesh', 'uv_gel', 'nest_removal', 'maintenance']
serviceItems.forEach((item, i) => {
  const slug = serviceSlugs[i] ?? `service_${i}`
  add({
    block_key: `services.${slug}`,
    section: 'services',
    label: `Service: ${item.title}`,
    type: 'json',
    image_path: cmsPath(item.image),
    metadata: { slug, ...item, image_src: item.image },
  })
})

// Why essential
addText('why_essential.title', 'why_essential', 'Section title', extractHeading('e5287db'))
addHtml('why_essential.intro', 'why_essential', 'Intro HTML', extractParagraph('879c572') ? `<p>${extractParagraph('879c572')}</p>` : null)
const hazards = extractEkitBoxes('Why Bird Pest Control in Melbourne', 'Signs of Bird Infestation')
const hazardSlugs = ['energy', 'damage', 'health', 'noise', 'water_leaks', 'gutters', 'mites']
hazards.forEach((item, i) => {
  if (item.title === 'Any questions you want to ask?') return
  const slug = hazardSlugs[i] ?? `hazard_${i}`
  add({
    block_key: `why_essential.${slug}`,
    section: 'why_essential',
    label: `Hazard: ${item.title}`,
    type: 'json',
    image_path: cmsPath(item.image),
    metadata: { slug, ...item, image_src: item.image },
  })
})

// Signs of infestation
addText('signs.title', 'signs', 'Section title', extractHeading('63390a6'))
addHtml('signs.intro', 'signs', 'Intro HTML', extractParagraph('26fb24f') ? `<p>${extractParagraph('26fb24f')}</p>` : null)
// Second "Signs of Bird Infestation" heading is the bird-type cards section (not the checklist above).
const signItems = extractImageBoxes('Signs of Bird Infestation', 'Sustainable Bird Proofing', 1)
const signSlugs = ['pigeons', 'sparrows', 'seagulls', 'starlings', 'indian_mynas']
signItems.forEach((item, i) => {
  const slug = signSlugs[i] ?? `sign_${i}`
  add({
    block_key: `signs.${slug}`,
    section: 'signs',
    label: `Bird sign: ${item.title}`,
    type: 'json',
    image_path: cmsPath(item.image),
    metadata: { slug, ...item, image_src: item.image },
  })
})

// Sustainable
addText('sustainable.title', 'sustainable', 'Section title', extractHeading('1822e51'))
addHtml('sustainable.body_left', 'sustainable', 'Left column HTML', extractHtmlAfter('d6889d0'))
addHtml('sustainable.body_right_intro', 'sustainable', 'Right intro HTML', extractParagraph('aab713d') ? `<p>${extractParagraph('aab713d')}</p>` : null)
add({
  block_key: 'sustainable.list',
  section: 'sustainable',
  label: 'Sustainable bullet list',
  type: 'json',
  metadata: { items: extractListItems('Sustainable Bird Proofing for Your Property', 'The Advantages of Bird Proofing') },
})

// Advantages
addText('advantages.title', 'advantages', 'Section title', extractHeading('78b0737'))
const advantageItems = extractIconBoxes('The Advantages of Bird Proofing', 'Solar Panel Bird Proofing and Cleaning Process')
const advSlugs = ['maintenance', 'efficiency', 'lifespan', 'output', 'eco_friendly']
advantageItems.forEach((item, i) => {
  const slug = advSlugs[i] ?? `advantage_${i}`
  add({
    block_key: `advantages.${slug}`,
    section: 'advantages',
    label: `Advantage: ${item.title}`,
    type: 'json',
    image_path: cmsPath(item.image),
    metadata: { slug, ...item, image_src: item.image },
  })
})

// Process
addText('process.title', 'process', 'Section title', extractHeading('146cab3'))
addHtml('process.intro', 'process', 'Intro HTML', extractParagraph('1a621e7') ? `<p>${extractParagraph('1a621e7')}</p>` : null)
const processItems = extractTextIconBoxes('Solar Panel Bird Proofing and Cleaning Process', 'Understanding the Cost')
const processSlugs = ['quote', 'inspection', 'installation']
processItems.forEach((item, i) => {
  const slug = processSlugs[i] ?? `step_${i}`
  add({
    block_key: `process.${slug}`,
    section: 'process',
    label: `Process step: ${item.title}`,
    type: 'json',
    metadata: { slug, title: item.title, description: item.description },
  })
})
const callBtn = jsx.match(/data-id="903b6e0"[\s\S]*?href="([^"]+)"[\s\S]*?elementor-button-text">([^<]+)</)
if (callBtn) {
  add({
    block_key: 'process.call_button',
    section: 'process',
    label: 'Call button',
    type: 'link',
    value: callBtn[2].trim(),
    link_url: callBtn[1],
  })
}

// Cost
addText('cost.title', 'cost', 'Section title', extractHeading('2c61aef'))
addHtml('cost.intro', 'cost', 'Intro HTML', extractParagraph('fa0244c') ? `<p>${extractParagraph('fa0244c')}</p>` : null)
add({
  block_key: 'cost.list',
  section: 'cost',
  label: 'Cost factors list',
  type: 'json',
  metadata: { items: extractListItems('Understanding the Cost of Solar Panel Bird Proofing', 'Why You Should Choose Us') },
})
addHtml('cost.body', 'cost', 'Cost body HTML', extractHtmlAfter('687d362'))

// Why choose us
addText('why_choose.title', 'why_choose', 'Section title', extractHeading('dfdc56d'))
const whyItems = extractTextIconBoxes('Why You Should Choose Us for Your Bird Proofing Services', 'Our Results Speak For Themselves')
const whySlugs = ['experts', 'quick_service', 'technicians', 'guarantee']
whyItems.forEach((item, i) => {
  const slug = whySlugs[i] ?? `reason_${i}`
  add({
    block_key: `why_choose.${slug}`,
    section: 'why_choose',
    label: `Reason: ${item.title}`,
    type: 'json',
    metadata: { slug, title: item.title, description: item.description },
  })
})

// Results carousel
addText('results.title', 'results', 'Section title', extractHeading('4ea020a'))
const carouselImgs = [...new Set([...jsx.matchAll(/before-after[^"]+\.(jpg|webp|png)/g)].map((m) => {
  const full = jsx.match(new RegExp(`/assets/images/([^"]*${m[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^"]*)"`))?.[1]
  return full ? `/assets/images/${full}` : null
}).filter(Boolean))]
// simpler: unique before-after images
const beforeAfter = [...new Set([...jsx.matchAll(/src="(\/assets\/images\/before-after[^"]+)"/g)].map((m) => m[1]))]
add({
  block_key: 'results.carousel',
  section: 'results',
  label: 'Before/after carousel images',
  type: 'json',
  metadata: {
    images: beforeAfter.map((src, i) => ({
      slug: i + 1,
      alt: 'solar panel bird proofing melbourne',
      image_src: src,
      image_path: cmsPath(src),
    })),
  },
})
add({
  block_key: 'results.checklist',
  section: 'results',
  label: 'Results checklist',
  type: 'json',
  metadata: { items: extractListItems('Our Results Speak For Themselves', 'Our Latest Article') },
})
addHtml('results.body', 'results', 'Results body HTML', extractHtmlAfter('879c38b'))

// Blog
addText('blog.eyebrow', 'blog', 'Section eyebrow', extractHeading('e073564'))
addText('blog.title', 'blog', 'Section title', extractHeading('4da7361'))
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

// Reviews
addText('reviews.eyebrow', 'reviews', 'Reviews eyebrow', extractHeading('92c6e6f'))
addText('reviews.title', 'reviews', 'Reviews title', extractHeading('4be1725'))
addText('reviews.subtitle', 'reviews', 'Reviews subtitle', extractHeading('6cf5838'))
addText('reviews.rating_label', 'reviews', 'Rating label', extractHeading('1cc2612'))
addHtml('reviews.count_text', 'reviews', 'Review count text', extractParagraph('70789cd') ? `<p>${extractParagraph('70789cd')}</p>` : null)

// FAQ
addText('faq.title', 'faq', 'FAQ title', extractHeading('fcf506e'))
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

const page = {
  slug: 'solar-panel-bird-proofing',
  title: 'Solar Panel Bird Proofing',
  seo_title: seoMatch?.[1] ?? 'Solar Panel Bird Proofing Services in Melbourne',
  seo_description: seoMatch?.[2] ?? '',
  body_class:
    'wp-singular page-template page-template-elementor_header_footer page wp-custom-logo wp-embed-responsive wp-theme-hello-elementor elementor-default elementor-template-full-width elementor-kit-9 elementor-page elementor-page-1353',
  elementor_id: 1353,
  is_published: true,
  blocks,
}

fs.mkdirSync(path.dirname(outFile), { recursive: true })
fs.writeFileSync(outFile, JSON.stringify(page, null, 2))
console.log(`Wrote ${blocks.length} blocks to ${outFile}`)
