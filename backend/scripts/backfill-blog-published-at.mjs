#!/usr/bin/env node
/**
 * Backfill published_at on blogs.json from frontend pageSeoExtra.js publish dates.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const blogsFile = path.join(__dirname, '../database/data/blogs.json')
const seoFile = path.join(root, 'frontend/src/config/pageSeoExtra.js')

const seoSrc = fs.readFileSync(seoFile, 'utf8')
const blogs = JSON.parse(fs.readFileSync(blogsFile, 'utf8'))

function publishedAtForSlug(slug) {
  const blockRe = new RegExp(
    `"${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*\\{([\\s\\S]*?)\\n  \\},`,
  )
  const block = seoSrc.match(blockRe)?.[1] ?? ''
  const fromOg = block.match(/"article:published_time":\s*"([^"]+)"/)?.[1]
  if (fromOg) return fromOg

  const jsonLdMatch = block.match(/"jsonLd":\s*"((?:[^"\\]|\\.)*)"/)?.[1]
  if (jsonLdMatch) {
    try {
      const jsonLd = JSON.parse(jsonLdMatch.replace(/\\"/g, '"'))
      const article = jsonLd['@graph']?.find((node) => node['@type'] === 'Article')
      if (article?.datePublished) return article.datePublished
      if (article?.dateModified) return article.dateModified
    } catch {
      // fall through
    }
  }

  return null
}

let updated = 0
for (const post of blogs.posts ?? []) {
  const publishedAt = publishedAtForSlug(post.slug)
  if (!publishedAt) continue
  if (post.published_at === publishedAt) continue
  post.published_at = publishedAt
  updated += 1
}

fs.writeFileSync(blogsFile, `${JSON.stringify(blogs, null, 2)}\n`, 'utf8')
console.log(`Backfilled published_at for ${updated} posts in blogs.json`)
