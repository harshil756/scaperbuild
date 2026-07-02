#!/usr/bin/env node
/**
 * Fix malformed nested div wrappers left by wire-service-cms-inline.mjs around CmsHtml.
 */
import fs from 'node:fs'
import glob from 'node:glob'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')

function extractCmsHtml(src, fromIndex = 0) {
  const start = src.indexOf('<CmsHtml.category', fromIndex)
  const start2 = src.indexOf('<CmsHtml', fromIndex)
  const idx = start2 === -1 ? -1 : start2
  if (idx === -1) return null

  let depth = 0
  for (let i = idx; i < src.length; i++) {
    const ch = src[i]
    if (ch === '{') depth++
    else if (ch === '}') {
      depth--
      if (depth === 0 && src.slice(i, i + 4) === '} />') {
        return { html: src.slice(idx, i + 4), end: i + 4 }
      }
    }
  }
  return null
}

function fixFile(filePath) {
  let src = fs.readFileSync(filePath, 'utf8')
  let changed = false

  // Remove nested 57329fa > 9407d80 wrappers around CmsHtml
  const nested57329 = /<div className="elementor-element elementor-element-57329fa[^>]*>\s*<div className="elementor-widget-container">\s*<div className="elementor-element elementor-element-9407d80[^>]*>\s*<div className="elementor-widget-container">\s*/g
  if (nested57329.test(src)) {
    src = src.replace(nested57329, '')
    changed = true
  }

  // Remove nested de434cf > inner widget wrappers before CmsHtml
  src = src.replace(
    /<div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor"[^>]*>\s*<div className="elementor-widget-container">\s*(?=<CmsHtml)/g,
    () => { changed = true; return '' },
  )

  // Remove nested de434cf > de434cf wrappers before plain <p>
  src = src.replace(
    /<div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor"[^>]*>\s*<div className="elementor-widget-container">\s*<div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor"[^>]*>\s*<div className="elementor-widget-container">\s*(?=<p>)/g,
    () => { changed = true; return '' },
  )

  // Remove nested de434cf > other widget before CmsHtml
  src = src.replace(
    /<div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor"[^>]*>\s*<div className="elementor-widget-container">\s*<div className="elementor-element elementor-element-[a-f0-9]+ elementor-widget elementor-widget-text-editor"[^>]*>\s*<div className="elementor-widget-container">\s*(?=<CmsHtml)/g,
    () => { changed = true; return '' },
  )

  // After CmsHtml or </p>, strip extra closing divs and junk until line ends or next widget
  src = src.replace(
    /(<CmsHtml html=\{cmsWidgetHtml\(b, '[^']+', '(?:\\'|[^'])*'\)\} \/>|<\/p>)(\s*<\/div>)+(?:\s*<div><div className="standard-markdown[^"]*"[^>]*>[^<]*<\/div><\/div>)?(?:\s*<\/div>)*\s*<\/div>\s*<\/div>/g,
    (match, content) => {
      changed = true
      return content
    },
  )

  // Trailing orphan closes after CmsHtml on same line (4-div pattern)
  src = src.replace(
    /(<CmsHtml html=\{cmsWidgetHtml\(b, '[^']+', '(?:\\'|[^'])*'\)\} \/>)\s*(?:<\/div>\s*){2,6}<\/div>\s*<\/div>/g,
    (match, content) => {
      changed = true
      return content
    },
  )

  if (changed) {
    fs.writeFileSync(filePath, src)
    console.log('Fixed', path.relative(root, filePath))
  }
}

const files = glob.sync('frontend/src/pages/services/*Page.jsx', { cwd: root, absolute: true })
for (const file of files) fixFile(file)
