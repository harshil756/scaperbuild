/**
 * Shared CMS extraction helpers for service pages.
 */
import fs from 'node:fs'
import path from 'node:path'

export function slugify(text) {
  return (text ?? '')
    .toLowerCase()
    .replace(/&amp;/g, 'and')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
    .slice(0, 48)
}

export function resolveCssFile(root, elementorId) {
  const cssDir = path.join(root, 'frontend/public/assets/css')
  const prefix = `post-${elementorId}_`
  const match = fs.readdirSync(cssDir).find((f) => f.startsWith(prefix) && f.endsWith('.css'))
  if (!match) return null
  return path.join(cssDir, match)
}

export function readSeo(seoRaw, seoKey) {
  const re = new RegExp(
    `"${seoKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*\\{[\\s\\S]*?"title":\\s*"([^"]+)"[\\s\\S]*?"description":\\s*"([^"]+)"`,
  )
  const m = seoRaw.match(re)
  return { seo_title: m?.[1] ?? '', seo_description: m?.[2] ?? '' }
}

export function jsxToHtml(fragment) {
  return (fragment ?? '')
    .replace(/className=/g, 'class=')
    .replace(/style=\{\{[^}]+\}\}/g, '')
    .replace(/\{&quot;([^&]+)&quot;\}/g, '"$1"')
    .replace(/<Link([^>]*)to="([^"]+)"([^>]*)>/g, '<a$1href="$2"$3>')
    .replace(/<\/Link>/g, '</a>')
    .replace(/defaultValue=\{[^}]+\}/g, '')
    .trim()
}

export function createBlockCollector(slug) {
  let sort = 0
  const blocks = []
  const usedKeys = new Set()

  function cmsPath(url) {
    return `cms/${slug}/${path.basename(url)}`
  }

  function uniqueKey(key) {
    let candidate = key
    let i = 2
    while (usedKeys.has(candidate)) {
      candidate = `${key}_${i++}`
    }
    usedKeys.add(candidate)
    return candidate
  }

  function add(block) {
    const block_key = uniqueKey(block.block_key)
    blocks.push({ sort_order: sort++, ...block, block_key })
  }

  function addText(key, section, label, value) {
    if (!value?.trim()) return
    add({ block_key: key, section, label, type: 'text', value: value.trim() })
  }

  function addHtml(key, section, label, value) {
    if (!value?.trim()) return
    add({ block_key: key, section, label, type: 'html', value: value.trim() })
  }

  return { blocks, add, addText, addHtml, cmsPath }
}

export function extractHeading(jsx, id) {
  const re = new RegExp(`data-id="${id}"[\\s\\S]*?<h[1-6][^>]*>([\\s\\S]*?)</h[1-6]>`)
  const m = jsx.match(re)
  if (!m) return null
  const text = m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').replace(/&amp;/g, '&').trim()
  if (text.includes('{cmsText') || text.includes('c?.')) return null
  return text
}

export function extractHtmlAfter(jsx, id) {
  const start = jsx.indexOf(`data-id="${id}"`)
  if (start === -1) return null
  const after = jsx.slice(start)
  const open = after.indexOf('<div className="elementor-widget-container">')
  if (open === -1) return null
  let idx = open + '<div className="elementor-widget-container">'.length
  let depth = 1
  const tagRe = /<(\/?)div\b/g
  tagRe.lastIndex = idx
  let m
  while ((m = tagRe.exec(after))) {
    if (m[1] === '') {
      depth++
    } else {
      depth--
      if (depth === 0) {
        return jsxToHtml(after.slice(idx, m.index))
      }
    }
  }
  return null
}

export function extractImageSrc(jsx, id) {
  const re = new RegExp(`data-id="${id}"[\\s\\S]*?src="(\\/assets\\/images\\/[^"]+)"`)
  return jsx.match(re)?.[1] ?? null
}

export function extractBackgrounds(css, slug, cmsPath, add, sectionMap = {}, options = {}) {
  if (!css) return
  const onlyMapped = options.onlyMapped ?? false
  const heroAndCtaOnly = options.heroAndCtaOnly ?? false
  const bgRe = /elementor-element-([a-f0-9]+)[^{]*\{[^}]*background-image:url\(["']?\.\.\/images\/([^"')]+)/g
  const items = []
  let m
  while ((m = bgRe.exec(css))) {
    items.push({ id: m[1], file: m[2] })
  }

  items.forEach((item, index) => {
    let section = sectionMap[item.id] ?? null
    if (!section) {
      if (onlyMapped) return
      if (heroAndCtaOnly) {
        if (index === 0) {
          section = 'hero'
        } else if (index === items.length - 1 && items.length > 1) {
          section = 'cta'
        } else {
          return
        }
      } else if (index === 0) {
        section = 'hero'
      } else if (index === items.length - 1 && items.length > 1) {
        section = 'cta'
      } else {
        section = item.id
      }
    }

    add({
      block_key: section === 'hero' || section === 'cta' ? `background.${section}` : `background.${item.id}`,
      section: section === 'hero' || section === 'cta' ? section : 'backgrounds',
      label: section === 'hero' ? 'Hero background' : (section === 'cta' ? 'CTA background' : `Background (${item.id})`),
      type: 'background',
      background_image_path: cmsPath(item.file),
      metadata: { elementor_id: item.id, filename: item.file },
    })
  })
}

/** Strip nested Elementor widget wrappers — keep inner content only. */
export function simplifyHtml(html) {
  if (!html) return html
  let out = html.trim()
  if (!out.includes('elementor-element-')) return out
  const ps = [...out.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map((m) => `<p>${m[1]}</p>`)
  if (ps.length) return ps.join('')
  return out.replace(/<div[^>]*class="elementor[^"]*"[^>]*>/gi, '').replace(/<\/div>/gi, '')
}

export function parseCssBackgrounds(css) {
  if (!css) return []
  const bgRe = /elementor-element-([a-f0-9]+)[^{]*\{[^}]*background-image:url\(["']?\.\.\/images\/([^"')]+)/g
  const items = []
  let m
  while ((m = bgRe.exec(css))) {
    items.push({ id: m[1], file: m[2] })
  }
  return items
}

function headingNearContainer(jsx, containerId) {
  const idx = jsx.indexOf(`data-id="${containerId}"`)
  if (idx === -1) return null
  const chunk = jsx.slice(Math.max(0, idx - 4000), idx + 8000)
  const sibling = jsx.slice(idx, idx + 8000)
  for (const source of [sibling, chunk]) {
    const m =
      source.match(/elementskit-section-title[^>]*>([^<]+)</)?.[1]
      ?? source.match(/elementor-heading-title[^>]*>([^<]+)</)?.[1]
    if (m && m.trim().length > 3 && !/^home$/i.test(m.trim())) {
      return m.replace(/\s+/g, ' ').trim()
    }
  }
  return null
}

function introNearContainer(jsx, containerId) {
  const idx = jsx.indexOf(`data-id="${containerId}"`)
  if (idx === -1) return null
  const chunk = jsx.slice(idx, idx + 8000)
  const widgets = findAllWidgets(chunk).filter((w) => w.type === 'text-editor.default')
  for (const w of widgets) {
    const html = extractHtmlAfter(chunk, w.id)
    if (html && html.length > 20) return simplifyHtml(html)
  }
  return null
}

function eyebrowBefore(jsx, titleWidgetId) {
  const idx = jsx.indexOf(`data-id="${titleWidgetId}"`)
  if (idx === -1) return null
  const before = jsx.slice(Math.max(0, idx - 2500), idx)
  const headings = [...before.matchAll(/elementor-heading-title[^>]*>([^<]+)</g)].map((x) => x[1].replace(/\s+/g, ' ').trim())
  return headings.at(-1) ?? null
}

/** Map problems / prevention / image step cards for generic service pages. */
export function extractStructuredGenericSections(jsx, css, { add, addText, addHtml, cmsPath, skipIds }) {
  for (const w of findAllWidgets(jsx)) {
    const title =
      (w.type === 'heading.default' || w.type === 'elementskit-heading.default' ? extractHeading(jsx, w.id) : null)
      ?? (w.type === 'elementskit-heading.default'
        ? jsx.match(new RegExp(`data-id="${w.id}"[\\s\\S]*?elementskit-section-title[^>]*>([^<]+)`))?.[1]?.trim()
        : null)
    if (!title) continue

    if (/issues related|problems caused|problems with/i.test(title)) {
      skipIds.add(w.id)
      const eyebrow = eyebrowBefore(jsx, w.id)
      if (eyebrow) addText('problems.eyebrow', 'problems', 'Eyebrow', eyebrow)
      addText('problems.title', 'problems', 'Section title', title)
      const introWidget = findAllWidgets(jsx).find((tw) => {
        if (tw.type !== 'text-editor.default') return false
        const pos = jsx.indexOf(`data-id="${tw.id}"`)
        const titlePos = jsx.indexOf(`data-id="${w.id}"`)
        return pos > titlePos && pos < titlePos + 3000
      })
      if (introWidget) {
        skipIds.add(introWidget.id)
        const html = simplifyHtml(extractHtmlAfter(jsx, introWidget.id))
        if (html) addHtml('problems.intro', 'problems', 'Intro', html)
      }
    }

    if (/symptoms of|signs of|how to identify/i.test(title)) {
      skipIds.add(w.id)
      const eyebrow = eyebrowBefore(jsx, w.id)
      if (eyebrow) addText('prevention.eyebrow', 'prevention', 'Eyebrow', eyebrow)
      addText('prevention.title', 'prevention', 'Section title', title)
      const introWidget = findAllWidgets(jsx).find((tw) => {
        if (tw.type !== 'text-editor.default') return false
        const pos = jsx.indexOf(`data-id="${tw.id}"`)
        const titlePos = jsx.indexOf(`data-id="${w.id}"`)
        return pos > titlePos && pos < titlePos + 3000
      })
      if (introWidget) {
        skipIds.add(introWidget.id)
        const html = simplifyHtml(extractHtmlAfter(jsx, introWidget.id))
        if (html) addHtml('prevention.intro', 'prevention', 'Intro', html)
      }
    }

    if (/^our usps$/i.test(title)) {
      skipIds.add(w.id)
      addText('why_choose.title', 'why_choose', 'Section title', title)
    }
  }

  const decorative = /^BG3_/i
  for (const { id, file } of parseCssBackgrounds(css)) {
    if (decorative.test(file)) continue
    if (id === 'd4c4a94' || id === '057b4d3') continue

    const title = headingNearContainer(jsx, id)
    if (!title) continue
    const description = introNearContainer(jsx, id) ?? ''
    const itemSlug = slugify(title) || slugify(file.replace(/\.[^.]+$/, ''))
    if (skipIds.has(id)) continue

    add({
      block_key: `cards.${itemSlug}`,
      section: 'cards',
      label: `Card: ${title}`,
      type: 'json',
      image_path: cmsPath(`/assets/images/${file}`),
      metadata: {
        slug: itemSlug,
        title,
        description,
        alt: title,
        image_src: `/assets/images/${file}`,
        elementor_id: id,
      },
    })
  }
}

export function extractFaqItems(jsx) {
  const items = []
  const re = /ekit-accordion-title">\s*([^<]+)<\/span>[\s\S]*?<div className="elementskit-card-body ekit-accordion--content">\s*([\s\S]*?)<\/div>/g
  let m
  while ((m = re.exec(jsx))) {
    items.push({
      question: m[1].replace(/\s+/g, ' ').trim(),
      answer_html: jsxToHtml(m[2]),
    })
  }
  return items
}

export function extractBlogPosts(jsx, cmsPath) {
  const posts = []
  const re = /<div className="elementskit-post-image-card">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g
  let m
  while ((m = re.exec(jsx))) {
    const chunk = m[1]
    const link = chunk.match(/to="([^"]+)"/)?.[1]
    const img = chunk.match(/src="(\/assets\/images\/[^"]+)"/)?.[1]
    const alt = chunk.match(/alt="([^"]*)"/)?.[1] ?? ''
    const title = chunk.match(/<h2 className="entry-title">[\s\S]*?>\s*([^<]+)/)?.[1]?.replace(/\s+/g, ' ').trim()
    const excerpt = chunk.match(/<p>([^<]+)<\/p>/)?.[1]?.trim()
    if (!link || !img || !title) continue
    posts.push({ title, excerpt, link, alt, image_src: img, image_path: cmsPath(img) })
  }
  return posts
}

export function extractImageBoxes(chunk, cmsPath) {
  const re =
    /src="(\/assets\/images\/[^"]+)"[\s\S]*?(?:elementor-image-box-title|elementskit-info-box-title)">\s*([^<]+?)\s*<\/(?:h3|p|span)>[\s\S]*?(?:elementor-image-box-description|elementskit-box-style-content)">\s*([^<]*?)\s*<\/(?:p|div)>/g
  const items = []
  let m
  while ((m = re.exec(chunk))) {
    items.push({
      image: m[1],
      title: m[2].replace(/\s+/g, ' ').trim(),
      description: (m[3] ?? '').replace(/\s+/g, ' ').trim(),
    })
  }
  return items
}

export function extractEkitImageBoxWidgets(jsx, cmsPath) {
  const widgets = findAllWidgets(jsx).filter((w) => w.type === 'elementskit-image-box.default')
  return widgets.map((widget) => {
    const chunk = jsx.match(new RegExp(`data-id="${widget.id}"[\\s\\S]*`))?.[0] ?? ''
    const slice = chunk.split(/data-element_type="widget" data-id=/)[0]
    const img = slice.match(/src="(\/assets\/images\/[^"]+)"/)?.[1]
    const title = slice.match(/elementskit-info-box-title">\s*([^<]+)/)?.[1]?.replace(/\s+/g, ' ').trim()
    const description = slice.match(/elementskit-box-style-content">\s*([\s\S]*?)<\/div>/)?.[1]?.replace(/\s+/g, ' ').trim()
    return { id: widget.id, image: img, title, description: description ?? '' }
  }).filter((item) => item.image && item.title)
}

export function extractIconBoxWidgets(jsx, options = {}) {
  const { afterIndex = 0, beforeIndex = jsx.length } = options
  const slice = jsx.slice(afterIndex, beforeIndex)
  const widgets = findAllWidgets(slice).filter((w) => w.type === 'elementskit-icon-box.default')
  return widgets.map((widget) => {
    const chunk = slice.match(new RegExp(`data-id="${widget.id}"[\\s\\S]*`))?.[0] ?? ''
    const widgetSlice = chunk.split(/data-element_type="widget" data-id=/)[0]
    const img = widgetSlice.match(/src="(\/assets\/images\/[^"]+)"/)?.[1]
    const title = widgetSlice.match(/elementskit-info-box-title">\s*([^<]+)/)?.[1]?.replace(/\s+/g, ' ').trim()
    const link = widgetSlice.match(/to="([^"]+)"/)?.[1] ?? ''
    const alt = widgetSlice.match(/alt="([^"]*)"/)?.[1] ?? ''
    const button_text = widgetSlice.match(/elementskit-btn[^>]*>[\s\S]*?>\s*([^<\s][^<]*?)\s*</)?.[1]?.replace(/\s+/g, ' ').trim() ?? 'Learn More'
    return { id: widget.id, image: img, title, link, alt, button_text }
  }).filter((item) => item.image && item.title)
}

export function extractElementorIconBoxes(jsx, options = {}) {
  const { afterIndex = 0, beforeIndex = jsx.length } = options
  const slice = jsx.slice(afterIndex, beforeIndex)
  const widgets = findAllWidgets(slice).filter((w) => w.type === 'icon-box.default')
  return widgets.map((widget) => {
    const chunk = slice.match(new RegExp(`data-id="${widget.id}"[\\s\\S]*`))?.[0] ?? ''
    const widgetSlice = chunk.split(/data-element_type="widget" data-id=/)[0]
    const title = widgetSlice.match(/elementor-icon-box-title[\s\S]*?<span>\s*([^<]+)/)?.[1]?.replace(/\s+/g, ' ').trim()
    return { id: widget.id, title: title ?? '' }
  }).filter((item) => item.title)
}

export function extractElementskitHeading(jsx, id) {
  const chunk = jsx.match(new RegExp(`data-id="${id}"[\\s\\S]*`))?.[0] ?? ''
  const slice = chunk.split(/data-element_type="widget" data-id=/)[0]
  return slice.match(/elementskit-section-title">([^<]+)/)?.[1]?.replace(/\s+/g, ' ').trim() ?? null
}

export function extractCounter(jsx, id) {
  const chunk = jsx.match(new RegExp(`data-id="${id}"[\\s\\S]*`))?.[0] ?? ''
  const slice = chunk.split(/data-element_type="widget" data-id=/)[0]
  const title = slice.match(/elementor-counter-title">([^<]+)/)?.[1]?.trim()
  const value = slice.match(/elementor-counter-number[^>]*>(\d+)/)?.[1]
  const suffix = slice.match(/elementor-counter-number-suffix">([^<]+)/)?.[1]?.trim() ?? ''
  if (!title && !value) return null
  return { title, value, suffix }
}

export function extractButton(jsx, id) {
  const chunk = jsx.match(new RegExp(`data-id="${id}"[\\s\\S]*`))?.[0] ?? ''
  const slice = chunk.split(/data-element_type="widget" data-id=/)[0]
  const link = slice.match(/to="([^"]+)"/)?.[1] ?? slice.match(/href="([^"]+)"/)?.[1] ?? ''
  const label = slice.match(/elementor-button-text">([^<]+)/)?.[1]?.trim()
  if (!label) return null
  return { label, url: link }
}

export function extractFaqSidebar(jsx, add, addText, addHtml, cmsPath, skipIds) {
  const faqIdx = jsx.indexOf('ekit-accordion-title')
  if (faqIdx === -1) return
  const faqSection = jsx.slice(faqIdx - 5000, faqIdx + 25000)

  const imageWidget = findAllWidgets(faqSection).find((w) => w.type === 'image.default')
  if (imageWidget) {
    const src = extractImageSrc(faqSection, imageWidget.id) || extractImageSrc(jsx, imageWidget.id)
    if (src) {
      skipIds.add(imageWidget.id)
      add({
        block_key: 'faq.sidebar_image',
        section: 'faq',
        label: 'FAQ sidebar image',
        type: 'image',
        image_path: cmsPath(src),
        metadata: { elementor_id: imageWidget.id, image_src: src },
      })
    }
  }

  const sidebarWidgets = findAllWidgets(faqSection).filter((w) => w.type === 'elementskit-icon-box.default')
  for (const widget of sidebarWidgets) {
    const chunk = faqSection.match(new RegExp(`data-id="${widget.id}"[\\s\\S]*`))?.[0] ?? ''
    const slice = chunk.split(/data-element_type="widget" data-id=/)[0]
    const title = slice.match(/elementskit-info-box-title">\s*([^<]+)/)?.[1]?.replace(/\s+/g, ' ').trim()
    if (!title || !/question/i.test(title)) continue
    skipIds.add(widget.id)
    const body = slice.match(/<p>([^<]+)<\/p>/)?.[1]?.trim()
    const linkMatch = slice.match(/to="([^"]+)"[^>]*>\s*([^<]+)\s*</)
    addText('faq.sidebar_cta_title', 'faq', 'Sidebar CTA title', title)
    if (body) addText('faq.sidebar_cta_body', 'faq', 'Sidebar CTA body', body)
    if (linkMatch) {
      add({
        block_key: 'faq.sidebar_cta_button',
        section: 'faq',
        label: 'Sidebar CTA button',
        type: 'link',
        value: linkMatch[2].trim(),
        link_url: linkMatch[1],
      })
    }
    break
  }
}

export function findAllWidgets(jsx) {
  const re = /data-element_type="widget" data-id="([a-f0-9]+)"[^>]*data-widget_type="([^"]+)"/g
  const widgets = []
  let m
  while ((m = re.exec(jsx))) {
    widgets.push({ id: m[1], type: m[2] })
  }
  return widgets
}

export function ensureAllImages(jsx, blocks, add, cmsPath) {
  const existing = new Set()
  for (const block of blocks) {
    if (block.image_path) existing.add(path.basename(block.image_path))
    if (block.background_image_path) existing.add(path.basename(block.background_image_path))
    if (block.metadata?.image_src) existing.add(path.basename(block.metadata.image_src))
    if (block.metadata?.filename) existing.add(block.metadata.filename)
  }

  const re = /src="(\/assets\/images\/([^"]+))"/g
  let m
  while ((m = re.exec(jsx))) {
    const file = m[2]
    if (existing.has(file)) continue
    const key = `content.image_${slugify(file.replace(/\.[^.]+$/, ''))}`
    add({
      block_key: key,
      section: 'content',
      label: `Image: ${file}`,
      type: 'image',
      image_path: cmsPath(m[1]),
      metadata: { image_src: m[1], filename: file },
    })
    existing.add(file)
  }
}

export function collectAssetFilenames(page) {
  const filenames = new Set()
  function collect(pathOrMeta) {
    if (!pathOrMeta) return
    if (typeof pathOrMeta === 'string') {
      filenames.add(path.basename(pathOrMeta))
      return
    }
    if (pathOrMeta.image_path) filenames.add(path.basename(pathOrMeta.image_path))
    if (pathOrMeta.background_image_path) filenames.add(path.basename(pathOrMeta.background_image_path))
    const meta = pathOrMeta.metadata
    if (!meta) return
    if (meta.filename) filenames.add(meta.filename)
    if (meta.image_src) filenames.add(path.basename(meta.image_src))
    for (const key of ['items', 'posts', 'tips', 'cards', 'images']) {
      if (!Array.isArray(meta[key])) continue
      for (const item of meta[key]) {
        if (item.image_src) filenames.add(path.basename(item.image_src))
        if (item.image_path) filenames.add(path.basename(item.image_path))
        if (item.image) filenames.add(path.basename(item.image))
      }
    }
  }
  for (const block of page.blocks) collect(block)
  return filenames
}
