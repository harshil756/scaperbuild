#!/usr/bin/env node
/**
 * Regenerate src/data/blogPosts.js from backend/database/data/blogs.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const blogsFile = path.join(root, 'backend/database/data/blogs.json')
const assetsDir = path.join(__dirname, '../public/assets/images')
const outFile = path.join(__dirname, '../src/data/blogPosts.js')

const blogs = JSON.parse(fs.readFileSync(blogsFile, 'utf8'))
const assetFiles = fs.readdirSync(assetsDir)

function basenameFromCmsPath(cmsPath) {
  if (!cmsPath) return null
  return path.basename(cmsPath)
}

function findThumbAsset(filename) {
  const stem = filename.replace(/\.[^.]+$/, '')
  const candidates = assetFiles.filter(
    (file) => file.startsWith(stem) && /-300x\d+_/.test(file),
  )
  if (candidates.length) return `/assets/images/${candidates[0]}`
  if (assetFiles.includes(filename)) return `/assets/images/${filename}`
  return `/assets/images/${filename}`
}

function buildSrcSet(filename) {
  const stem = filename.replace(/\.[^.]+$/, '')
  const matches = assetFiles
    .filter((file) => file.startsWith(stem))
    .sort((a, b) => a.localeCompare(b))

  if (!matches.length) return undefined

  return matches
    .map((file) => {
      const widthMatch = file.match(/-(\d+)x\d+_/)
      const width = widthMatch?.[1]
      return width ? `/assets/images/${file} ${width}w` : `/assets/images/${file}`
    })
    .join(', ')
}

function toListItem(post) {
  const filename = basenameFromCmsPath(post.featured_image_path)
  const src = filename ? findThumbAsset(filename) : '/assets/images/blog-image-1_64df4213.jpeg'
  const srcSet = filename ? buildSrcSet(filename) : undefined
  const category = post.tags?.[0]?.slug ?? 'category-blog'

  return {
    id: String(post.wordpress_id ?? post.slug),
    path: `/${post.slug}/`,
    title: post.title,
    excerpt: post.excerpt ?? '',
    img: {
      alt: post.featured_image_alt || post.title,
      className: post.wordpress_id
        ? `attachment-medium size-medium wp-image-${post.wordpress_id}`
        : 'attachment-medium size-medium',
      decoding: 'async',
      height: '158',
      sizes: '(max-width: 300px) 100vw, 300px',
      src,
      ...(srcSet ? { srcSet } : {}),
      width: '300',
    },
    thumbClass: 'elementor-fit-height',
    category,
  }
}

const posts = [...(blogs.posts ?? [])]
  .filter((post) => post.is_published !== false)
  .sort((a, b) => {
    const wpDiff = (b.wordpress_id ?? 0) - (a.wordpress_id ?? 0)
    if (wpDiff !== 0) return wpDiff
    return String(b.published_at ?? '').localeCompare(String(a.published_at ?? ''))
  })
  .map(toListItem)

const output = `// Auto-generated from blogs.json — run: node scripts/generate-blog-posts-data.mjs
export const BLOG_POSTS_PER_PAGE = 9

export const blogPosts = ${JSON.stringify(posts, null, 2)}
`

fs.writeFileSync(outFile, output, 'utf8')
console.log(`Wrote ${posts.length} posts to ${path.relative(root, outFile)}`)
