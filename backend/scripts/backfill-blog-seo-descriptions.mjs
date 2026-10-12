#!/usr/bin/env node
/**
 * Backfill empty blog seo_description values in database/data/blogs.json
 * from frontend PAGE_SEO_EXTRA (Yoast export).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PAGE_SEO_EXTRA } from '../../frontend/src/config/pageSeoExtra.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const blogsPath = path.join(__dirname, '../database/data/blogs.json')

const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'))
let filled = 0
let skipped = 0

for (const post of blogs.posts ?? []) {
  if (post.seo_description) {
    skipped++
    continue
  }

  const description = PAGE_SEO_EXTRA[post.slug]?.description
  if (!description) {
    console.warn(`No description source for: ${post.slug}`)
    continue
  }

  post.seo_description = description
  filled++
}

fs.writeFileSync(blogsPath, `${JSON.stringify(blogs, null, 2)}\n`, 'utf8')
console.log(`Updated blogs.json: ${filled} descriptions filled, ${skipped} already had values.`)
