#!/usr/bin/env node
/**
 * Extract all blog posts from site export into database/data/blogs.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const exportRoot = path.join(root, 'scraped/export/7statespestcontrol.com.au')
const frontend = path.join(root, 'frontend')
const outFile = path.join(__dirname, '../database/data/blogs.json')

const KNOWN_SLUGS = new Set([
  'home',
  'about-us',
  'blog',
  'contact-us',
  'our-services',
  'melbourne',
  'office-pest-control',
  'restaurant-cafe-pest-control',
  'school-and-hospitality-facility-pest-control',
  'warehouse-and-factory-pest-control-services-melbourne',
  'solar-panel-bird-proofing',
  'rodent-control-in-melbourne',
  'wasp-removal-melbourne',
  'flea-treatment',
  'logs',
])

const CATEGORY_LABELS = {
  'category-blog': 'Blog',
  'category-affordable-pest-control-melbourne': 'Affordable Pest Control Melbourne',
  'category-bed-bug-removal-melbourne': 'Bed Bug Removal Melbourne',
  'category-fox-pest-control': 'Fox Pest Control',
  'category-german-cockroach': 'German Cockroach',
  'category-mice-exterminator': 'Mice Exterminator',
  'category-mosquito-control': 'Mosquito Control',
  'category-moth': 'Moth',
  'category-professionals-pest-control': 'Professionals Pest Control',
  'category-rodent-pest-control': 'Rodent Pest Control',
  'category-silverfish-treatment': 'Silverfish Treatment',
  'category-spider-control-melbourne': 'Spider Control Melbourne',
  'category-uncategorized': 'Uncategorized',
  'category-wasp-nest-removal': 'Wasp Nest Removal',
}

function findHtmlFile(slug) {
  const dir = path.join(exportRoot, slug)
  const direct = path.join(dir, `${slug}.html`)
  if (fs.existsSync(direct)) return direct
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.html'))
  if (files.length === 1) return path.join(dir, files[0])
  throw new Error(`HTML not found for ${slug}`)
}

function isBlogPostHtml(html) {
  return html.includes('elementor-location-single') && html.includes('type-post')
}

function discoverBlogSlugs() {
  return fs
    .readdirSync(exportRoot, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .filter((slug) => !KNOWN_SLUGS.has(slug) && !slug.startsWith('our-services-'))
    .filter((slug) => {
      try {
        const html = fs.readFileSync(findHtmlFile(slug), 'utf8')
        return isBlogPostHtml(html)
      } catch {
        return false
      }
    })
    .sort()
}

function decodeEntities(text) {
  return (text ?? '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
}

function extractMetaDescription(html) {
  const raw =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1] ??
    html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i)?.[1] ??
    ''

  return decodeEntities(raw)
}

function categorySlugToName(slug) {
  if (CATEGORY_LABELS[slug]) return CATEGORY_LABELS[slug]
  return slug
    .replace(/^category-/, '')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function extractCategories(html) {
  const postClass =
    html.match(/class="[^"]*post-\d+[^"]*category-[^"]*"/)?.[0] ??
    html.match(/class="[^"]*category-[^"]*post-\d+[^"]*"/)?.[0] ??
    ''
  const slugs = [...postClass.matchAll(/\bcategory-[a-z0-9-]+/g)].map((m) => m[0])
  return [...new Set(slugs)]
}

function cmsImagePath(url) {
  if (!url) return null
  const normalized = url
    .replace(/^\/assets\/images\//, '')
    .replace(/^assets\/images\//, '')
    .replace(/^https?:\/\/[^/]+\/assets\/images\//, '')
  const filename = path.basename(normalized.split('?')[0])
  return filename ? `cms/blog/${filename}` : null
}

function normalizeContentHtml(html) {
  return html
    .replace(/\sstyle="position:\s*fixed;\s*width:\s*1920px[^"]*"/gi, '')
    .replace(/src="assets\/images\//g, 'src="/storage/cms/blog/')
    .replace(/srcset="assets\/images\//g, 'srcset="/storage/cms/blog/')
    .replace(/,\s*assets\/images\//g, ', /storage/cms/blog/')
    .replace(/src="\/assets\/images\//g, 'src="/storage/cms/blog/')
    .replace(/srcset="\/assets\/images\//g, 'srcset="/storage/cms/blog/')
    .replace(/,\s*\/assets\/images\//g, ', /storage/cms/blog/')
    .replace(/href="assets\//g, 'href="/assets/')
    .replace(/href="\.\.\/([^"]+)\/"/g, 'href="/$1/"')
    .replace(/href="\.\.\/\.\.\/([^"]+)\/"/g, 'href="/$1/"')
    .replace(/href="([^"]+)\.html"/g, (_, p) => {
      if (p === 'home') return 'href="/"'
      if (p === 'blog') return 'href="/blog"'
      return `href="/${p}/"`
    })
    .trim()
}

function extractContentHtml(html) {
  const marker = 'data-widget_type="theme-post-content.default"'
  const startIdx = html.indexOf(marker)
  if (startIdx === -1) return ''

  const containerStart = html.indexOf('<div class="elementor-widget-container">', startIdx)
  if (containerStart === -1) return ''

  const contentStart = containerStart + '<div class="elementor-widget-container">'.length
  let depth = 1
  let i = contentStart

  while (i < html.length && depth > 0) {
    const nextOpen = html.indexOf('<div', i)
    const nextClose = html.indexOf('</div>', i)

    if (nextClose === -1) break

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++
      i = nextOpen + 4
    } else {
      depth--
      if (depth === 0) {
        return normalizeContentHtml(html.slice(contentStart, nextClose))
      }
      i = nextClose + 6
    }
  }

  return ''
}

function extractFeaturedImage(html) {
  const block =
    html.match(
      /data-widget_type="theme-post-featured-image\.default"[\s\S]*?<img([^>]+)>/,
    )?.[1] ?? ''
  const src = block.match(/\bsrc="([^"]+)"/)?.[1] ?? null
  const alt = decodeEntities(block.match(/\balt="([^"]*)"/)?.[1] ?? '')
  return { path: cmsImagePath(src), alt }
}

function extractTitle(html) {
  const h1 =
    html.match(
      /data-widget_type="theme-post-title\.default"[\s\S]*?<h1[^>]*>([\s\S]*?)<\/h1>/,
    )?.[1] ?? ''
  const cleaned = decodeEntities(h1.replace(/<[^>]+>/g, '').trim())
  if (cleaned) return cleaned

  const metaTitle = html.match(/<title>([^<]*)<\/title>/i)?.[1]
  return decodeEntities(metaTitle ?? '')
}

function extractPublishedAt(html) {
  const jsonLdBlocks = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
  for (const match of jsonLdBlocks) {
    try {
      const data = JSON.parse(match[1])
      const graph = Array.isArray(data['@graph']) ? data['@graph'] : [data]
      const article = graph.find((node) => node['@type'] === 'Article')
      if (article?.datePublished) return article.datePublished
    } catch {
      // try next block
    }
  }

  const ogPublished = html.match(
    /<meta[^>]+property="article:published_time"[^>]+content="([^"]+)"/i,
  )?.[1]
  return ogPublished ?? null
}

function extractExcerpt(contentHtml, fallback = '') {
  const firstP = contentHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1]
  if (firstP) {
    const text = decodeEntities(firstP.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
    if (text.length > 40) return text.slice(0, 300)
  }
  return fallback
}

function loadBlogListExcerpts() {
  const file = path.join(frontend, 'src/data/blogPosts.js')
  if (!fs.existsSync(file)) return new Map()

  const src = fs.readFileSync(file, 'utf8')
  const match = src.match(/export const blogPosts = (\[[\s\S]*\])/)
  if (!match) return new Map()

  let parsed
  try {
    parsed = JSON.parse(match[1])
  } catch {
    // eslint-disable-next-line no-eval
    parsed = eval(match[1])
  }

  const map = new Map()
  for (const post of parsed) {
    const slug = post.path?.replace(/^\/|\/$/g, '')
    if (slug) map.set(slug, post.excerpt ?? '')
  }
  return map
}

function extractPost(slug, listExcerpts) {
  const html = fs.readFileSync(findHtmlFile(slug), 'utf8')
  const seoTitle = decodeEntities(html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '')
  const seoDescription = extractMetaDescription(html)
  const wordpressId =
    html.match(/\bpostid-(\d+)\b/)?.[1] ??
    html.match(/\bpost-(\d+)\b/)?.[1] ??
    null
  const elementorId = html.match(
    /<div class="elementor elementor-(\d+)[^"]*elementor-location-single/,
  )?.[1] ?? null
  const bodyClass = html.match(/<body[^>]+class="([^"]+)"/)?.[1] ?? null
  const title = extractTitle(html)
  const contentHtml = extractContentHtml(html)
  const featured = extractFeaturedImage(html)
  const categories = extractCategories(html)
  const excerpt = listExcerpts.get(slug) || extractExcerpt(contentHtml)

  return {
    slug,
    title,
    excerpt,
    content_html: contentHtml,
    featured_image_path: featured.path,
    featured_image_alt: featured.alt || title,
    seo_title: seoTitle,
    seo_description: seoDescription,
    body_class: bodyClass,
    wordpress_id: wordpressId ? Number(wordpressId) : null,
    elementor_id: elementorId ? Number(elementorId) : null,
    tags: categories.map((tagSlug) => ({
      slug: tagSlug,
      name: categorySlugToName(tagSlug),
    })),
    is_published: true,
    published_at: extractPublishedAt(html),
  }
}

if (!fs.existsSync(exportRoot)) {
  console.error(`Export folder not found: ${exportRoot}`)
  process.exit(1)
}

const slugs = discoverBlogSlugs()
const listExcerpts = loadBlogListExcerpts()
const posts = []
const errors = []

console.log(`Extracting ${slugs.length} blog posts...`)

for (const slug of slugs) {
  try {
    const post = extractPost(slug, listExcerpts)
    if (!post.title) throw new Error('Missing title')
    posts.push(post)
    console.log(`  ✓ ${slug}`)
  } catch (err) {
    errors.push({ slug, error: err.message })
    console.warn(`  ✗ ${slug}: ${err.message}`)
  }
}

const allTags = new Map()
for (const post of posts) {
  for (const tag of post.tags) {
    allTags.set(tag.slug, tag.name)
  }
}

const output = {
  posts,
  tags: [...allTags.entries()].map(([slug, name]) => ({ slug, name })),
}

fs.mkdirSync(path.dirname(outFile), { recursive: true })
fs.writeFileSync(outFile, JSON.stringify(output, null, 2), 'utf8')

console.log(`\nDone: ${posts.length} posts, ${allTags.size} tags`)
if (errors.length) {
  console.warn(`${errors.length} errors`)
  process.exit(1)
}
