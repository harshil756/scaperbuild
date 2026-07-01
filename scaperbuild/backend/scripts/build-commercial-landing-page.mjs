#!/usr/bin/env node
/**
 * Build commercial-pest-control landing page CMS JSON from commercial sub-pages.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDir = path.join(__dirname, '../database/data')

const COMMERCIAL_SLUGS = [
  {
    slug: 'office-pest-control',
    path: '/office-pest-control',
    serviceSlug: 'office_pest_control',
    widgetId: 'c1a1001',
    title: 'Office Pest Control',
  },
  {
    slug: 'restaurant-cafe-pest-control',
    path: '/restaurant-cafe-pest-control',
    serviceSlug: 'restaurant_cafe_pest_control',
    widgetId: 'c1a1002',
    title: 'Restaurant & Cafe Pest Control',
  },
  {
    slug: 'school-and-hospitality-facility-pest-control',
    path: '/school-and-hospitality-facility-pest-control',
    serviceSlug: 'school_and_hospitality',
    widgetId: 'c1a1003',
    title: 'School & Hospitality Facility Pest Control',
  },
  {
    slug: 'warehouse-and-factory-pest-control-services-melbourne',
    path: '/warehouse-and-factory-pest-control-services-melbourne',
    serviceSlug: 'warehouse_factory',
    widgetId: 'c1a1004',
    title: 'Warehouse & Factory Pest Control',
  },
]

function readPage(slug) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, `${slug}-page.json`), 'utf8'))
}

function copyImage(srcPath, destSlug, filename) {
  if (!srcPath) return null
  const base = path.basename(srcPath)
  const src = path.join(__dirname, `../storage/app/public/${srcPath}`)
  const destDir = path.join(__dirname, `../storage/app/public/cms/${destSlug}`)
  fs.mkdirSync(destDir, { recursive: true })
  const destRel = `cms/${destSlug}/${base}`
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(__dirname, `../storage/app/public/${destRel}`))
    return destRel
  }
  const pubSrc = path.join(__dirname, `../../frontend/public/assets/images/${base}`)
  if (fs.existsSync(pubSrc)) {
    fs.copyFileSync(pubSrc, path.join(destDir, base))
    return destRel
  }
  return srcPath
}

const heroBg = readPage('office-pest-control').blocks.find((b) => b.block_key === 'background.hero')
const ctaBg = readPage('office-pest-control').blocks.find((b) => b.block_key === 'background.cta')

const serviceBlocks = COMMERCIAL_SLUGS.map((item, i) => {
  const page = readPage(item.slug)
  const heroImg =
    page.blocks.find((b) => b.block_key === 'background.hero')?.background_image_path
    ?? page.blocks.find((b) => b.block_key.startsWith('services.'))?.image_path
  const imagePath = copyImage(heroImg, 'commercial-pest-control', null)

  return {
    sort_order: 20 + i,
    block_key: `services.${item.serviceSlug}`,
    section: 'services',
    label: `Service: ${item.title}`,
    type: 'json',
    image_path: imagePath,
    metadata: {
      slug: item.serviceSlug,
      id: item.widgetId,
      title: item.title,
      link: item.path,
      button_text: 'Learn More',
      alt: item.title,
    },
  }
})

const page = {
  slug: 'commercial-pest-control',
  title: 'Commercial Pest Control',
  seo_title: 'Commercial Pest Control - 7 States Pest Control',
  seo_description:
    'Professional commercial pest control in Melbourne for offices, restaurants, schools, warehouses and factories. Customised pest management solutions for your business.',
  body_class:
    'wp-singular page-template page-template-elementor_header_footer page wp-custom-logo wp-embed-responsive wp-theme-hello-elementor elementor-default elementor-template-full-width elementor-kit-9 elementor-page elementor-page-694',
  elementor_id: 694,
  is_published: true,
  blocks: [
    {
      sort_order: 0,
      block_key: 'background.hero',
      section: 'hero',
      label: 'Hero background',
      type: 'background',
      background_image_path: copyImage(heroBg?.background_image_path, 'commercial-pest-control'),
      metadata: { elementor_id: 'd694001', filename: path.basename(heroBg?.background_image_path ?? '') },
    },
    {
      sort_order: 1,
      block_key: 'background.cta',
      section: 'cta',
      label: 'CTA background',
      type: 'background',
      background_image_path: copyImage(ctaBg?.background_image_path, 'commercial-pest-control'),
      metadata: { elementor_id: 'd694002', filename: path.basename(ctaBg?.background_image_path ?? '') },
    },
    {
      sort_order: 2,
      block_key: 'hero.breadcrumb_current',
      section: 'hero',
      label: 'Breadcrumb current',
      type: 'text',
      value: 'Commercial Pest Control',
    },
    {
      sort_order: 3,
      block_key: 'hero.title',
      section: 'hero',
      label: 'Section title',
      type: 'text',
      value: 'Commercial Pest Control',
    },
    {
      sort_order: 4,
      block_key: 'hero.heading',
      section: 'hero',
      label: 'Main heading',
      type: 'text',
      value: 'Commercial Pest Control Services in Melbourne',
    },
    {
      sort_order: 5,
      block_key: 'hero.intro',
      section: 'hero',
      label: 'Intro paragraph',
      type: 'html',
      value:
        '<p>Protect your business reputation with professional commercial pest control in Melbourne. 7 States Pest Control delivers tailored pest management for offices, restaurants, schools, hospitals, warehouses and factories — keeping your workplace safe, compliant and pest-free.</p><p>From proactive prevention to full-scale treatment, our licensed technicians work around your schedule with discreet, effective solutions designed for commercial environments.</p>',
    },
    {
      sort_order: 6,
      block_key: 'quote_form.title',
      section: 'quote_form',
      label: 'Form heading',
      type: 'text',
      value: 'Get A Free Quote Now!',
    },
    {
      sort_order: 7,
      block_key: 'quote_form.subtitle',
      section: 'quote_form',
      label: 'Form subtitle',
      type: 'text',
      value: 'Have an enquiry? Leave us your details and we’ll call you back during business hours.',
    },
    {
      sort_order: 8,
      block_key: 'quote_form.submit_text',
      section: 'quote_form',
      label: 'Submit button text',
      type: 'text',
      value: 'Submit Quote',
    },
    {
      sort_order: 9,
      block_key: 'services.eyebrow',
      section: 'services',
      label: 'Eyebrow',
      type: 'text',
      value: 'Our Commercial Services',
    },
    {
      sort_order: 10,
      block_key: 'services.title',
      section: 'services',
      label: 'Section title',
      type: 'text',
      value: 'Specialised Pest Control for Every Business Type',
    },
    {
      sort_order: 11,
      block_key: 'services.intro',
      section: 'services',
      label: 'Intro HTML',
      type: 'html',
      value:
        '<p>Choose the commercial pest control service that matches your industry. Each solution is tailored to your facility, compliance requirements and pest risks.</p>',
    },
    ...serviceBlocks,
    {
      sort_order: 30,
      block_key: 'contact.eyebrow',
      section: 'contact',
      label: 'Eyebrow',
      type: 'text',
      value: 'Get in Touch',
    },
    {
      sort_order: 31,
      block_key: 'contact.title',
      section: 'contact',
      label: 'Section title',
      type: 'text',
      value: 'Contact 7 States Pest Control for Commercial Pest Control',
    },
    {
      sort_order: 32,
      block_key: 'contact.body',
      section: 'contact',
      label: 'Body HTML',
      type: 'html',
      value:
        '<p>Don’t let pests disrupt your business. Contact <a href="/"><strong>7 States Pest Control</strong></a> today for reliable commercial pest management across Melbourne.</p>',
    },
    {
      sort_order: 33,
      block_key: 'contact.button',
      section: 'contact',
      label: 'Contact button',
      type: 'link',
      value: 'Contact Us',
      link_url: '/contact-us',
    },
  ],
}

const outFile = path.join(dataDir, 'commercial-pest-control-page.json')
fs.writeFileSync(outFile, JSON.stringify(page, null, 2))
console.log(`Wrote ${page.blocks.length} blocks → ${outFile}`)
