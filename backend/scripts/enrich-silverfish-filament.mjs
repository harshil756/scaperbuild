#!/usr/bin/env node
/**
 * Complete Filament CMS data for silverfish treatment page.
 * Fills structured sections + step cards + fixes known bad values.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const file = path.join(__dirname, '../database/data/our-services-silverfish-treatment-page.json')
const slug = 'our-services-silverfish-treatment'

const d = JSON.parse(fs.readFileSync(file, 'utf8'))
const blocks = d.blocks
const byKey = Object.fromEntries(blocks.map((b) => [b.block_key, b]))

function upsert(block) {
  if (byKey[block.block_key]) {
    Object.assign(byKey[block.block_key], block)
  } else {
    block.sort_order = blocks.length
    blocks.push(block)
    byKey[block.block_key] = block
  }
}

function cmsPath(file) {
  return `cms/${slug}/${path.basename(file)}`
}

function fixCmsText(s) {
  if (typeof s !== 'string' || !s.includes('{cmsText')) return s
  const m = s.match(/\{cmsText\([^,]+,\s*'((?:\\'|[^'])*)'\)\}/) ?? s.match(/\{cmsText\([^,]+,\s*"((?:\\"|[^"])*)"\)\}/)
  return m ? m[1].replace(/\\'/g, "'") : s
}

// Clean corrupted cmsText literals in all blocks
for (const b of blocks) {
  if (typeof b.value === 'string') b.value = fixCmsText(b.value)
}

// --- Structured sections from page content ---
upsert({ block_key: 'services.title', section: 'services', label: 'Approach section title', type: 'text', value: 'Our Approach to Treat Silverfish Infestation' })
upsert({
  block_key: 'services.intro',
  section: 'services',
  label: 'Approach section intro',
  type: 'html',
  value: '<p>At 7 States Pest Control, we initiate a customized approach to treat silverfish infestation. Our silverfish pest control process depends on the following aspects, ensuring&nbsp;<a href="/"><strong>affordable pest control in Melbourne</strong></a>.</p>',
})

upsert({ block_key: 'why_choose.eyebrow', section: 'why_choose', label: 'Eyebrow', type: 'text', value: 'Our USPs' })
upsert({ block_key: 'why_choose.title', section: 'why_choose', label: 'Section title', type: 'text', value: 'Our USPs' })
upsert({
  block_key: 'why_choose.intro',
  section: 'why_choose',
  label: 'Intro',
  type: 'html',
  value: '<p>As a trustworthy pest control agency, we at 7 States Pest Control have specific USPs as mentioned below.</p>',
})

upsert({ block_key: 'reviews.subtitle', section: 'reviews', label: 'Reviews subtitle', type: 'text', value: 'Reviews of Our Pest Control Services' })
upsert({ block_key: 'reviews.count_text', section: 'reviews', label: 'Review count', type: 'html', value: '<p>Based on&nbsp;45 reviews</p>' })

upsert({
  block_key: 'cta.body',
  section: 'cta',
  label: 'Body HTML',
  type: 'html',
  value: 'Do you have any specific questions about us, our services, or anything related to pest infestation issues? Call us today on&nbsp;<a href="tel:+61434660060"> +61 434 660 060</a>&nbsp;or use our contact form to connect with our&nbsp;<b>7 States Pest Control</b>. You can get answers to your questions, get upfront quotes for the&nbsp;<b>7 States Pest Control</b>&nbsp;issues, and receive high-quality tailored services.',
})

upsert({
  block_key: 'faq.sidebar_cta_button',
  section: 'faq',
  label: 'Sidebar CTA button',
  type: 'link',
  value: 'Contact Us',
  link_url: '/contact-us',
})

// --- Step cards (heading + body widget ids for frontend) ---
const STEPS = [
  {
    slug: 'investigate',
    title: 'Investigate the Primary Cause of Silverfish Infestation',
    description: '<p>Our professional pest control technicians will inspect your home for the presence of silverfish.</p>',
    image: 'pest_control_services.jpg_f26d74af.webp',
    bg_id: '29847cb',
    heading_id: 'ce41091',
    body_id: 'bc8e2a4',
  },
  {
    slug: 'protection',
    title: 'Protection of Your Property from Silverfish',
    description: '<p>We will treat your property\u2019s perimeter properly to eliminate silverfish bugs.</p>',
    image: 'Protection-of-Your-Property-from-Silverfish.jpg_6dfca4e1.webp',
    bg_id: '894f45a',
    heading_id: '35840e7',
    body_id: '138f9ac',
  },
  {
    slug: 'securing',
    title: 'Securing Your Property to Fend off Silverfish Infestations',
    description: '<p>Our expert pest control technicians will plug holes and seal cracks to prevent the entry of silverfish bugs.</p>',
    image: 'Silver-Fish-1_512b7fad.jpg',
    bg_id: 'caf2005',
    heading_id: 'fe2bf3a',
    body_id: '1b7d436',
  },
  {
    slug: 'reports',
    title: 'Get Extensive Reports with Detailed Analysis',
    description: '<p>What sets 7 States Pest Control apart is our transparency. We will provide a detailed report with the analysis of the silverfish control services offered to you.</p>',
    image: 'Get-Extensive-Reports-with-Detailed-Analysis.jpg_2023a858.webp',
    bg_id: 'f6e08bf',
    heading_id: '795098b',
    body_id: 'fea8dfa',
  },
]

// Remove duplicate/wrong auto-extracted cards + stale why_choose.title_2
const keepCardKeys = new Set(STEPS.map((s) => `cards.${s.slug}`))
d.blocks = d.blocks.filter((b) => {
  if (b.block_key === 'why_choose.title_2') return false
  if (!b.block_key.startsWith('cards.')) return true
  return keepCardKeys.has(b.block_key)
})
const freshBlocks = d.blocks
const freshByKey = Object.fromEntries(freshBlocks.map((b) => [b.block_key, b]))
function freshUpsert(block) {
  if (freshByKey[block.block_key]) Object.assign(freshByKey[block.block_key], block)
  else {
    block.sort_order = freshBlocks.length
    freshBlocks.push(block)
    freshByKey[block.block_key] = block
  }
}

for (const step of STEPS) {
  freshUpsert({
    block_key: `cards.${step.slug}`,
    section: 'cards',
    label: `Step: ${step.title}`,
    type: 'json',
    image_path: cmsPath(step.image),
    metadata: {
      slug: step.slug,
      title: step.title,
      description: step.description,
      alt: step.title,
      image_src: `/assets/images/${step.image}`,
      elementor_id: step.bg_id,
      heading_id: step.heading_id,
      body_id: step.body_id,
    },
  })
}

freshUpsert({
  block_key: 'why_choose.image',
  section: 'why_choose',
  label: 'Section image',
  type: 'image',
  image_path: cmsPath('Why-Pest-Control.jpg_ef5bccf6.webp'),
  metadata: { elementor_id: '0bb7e99', alt: 'Why choose 7 States Pest Control' },
})

// Re-index sort_order
d.blocks = freshBlocks
d.blocks.forEach((b, i) => {
  b.sort_order = i
})

fs.writeFileSync(file, JSON.stringify(d, null, 2))
console.log(`Enriched ${d.blocks.length} blocks → ${file}`)
