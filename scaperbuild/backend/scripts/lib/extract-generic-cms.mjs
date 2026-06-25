/**
 * Generic CMS extractor for service pages with varying Elementor layouts.
 */
import {
  createBlockCollector,
  ensureAllImages,
  extractBackgrounds,
  extractBlogPosts,
  extractFaqItems,
  extractFaqSidebar,
  extractHeading,
  extractHtmlAfter,
  extractImageBoxes,
  extractImageSrc,
  findAllWidgets,
  jsxToHtml,
  slugify,
} from './service-page-cms-lib.mjs'

function extractHero(jsx, addText, addHtml, skipIds) {
  const iconWidget = findAllWidgets(jsx).find((w) => w.type === 'icon-list.default')
  if (iconWidget) {
    skipIds.add(iconWidget.id)
    const chunk = jsx.match(new RegExp(`data-id="${iconWidget.id}"[\\s\\S]*?<\\/ul>`))?.[0] ?? ''
    const crumbs = [...chunk.matchAll(/elementor-icon-list-text">([^<]+)</g)].map((m) => m[1].trim())
    if (crumbs.length >= 3) {
      addText('hero.breadcrumb_parent', 'hero', 'Breadcrumb parent', crumbs[1])
      addText('hero.breadcrumb_current', 'hero', 'Breadcrumb current', crumbs[2])
    } else if (crumbs.length === 2) {
      addText('hero.breadcrumb_parent', 'hero', 'Breadcrumb parent', crumbs[0] === 'Home' ? 'Services' : crumbs[0])
      addText('hero.breadcrumb_current', 'hero', 'Breadcrumb current', crumbs[1])
    }
  }

  const widgets = findAllWidgets(jsx)
  const formIdx = widgets.findIndex((w) => w.type === 'form.default')
  const heroWidgets = formIdx === -1 ? widgets.slice(0, 20) : widgets.slice(0, formIdx)

  let heroH2 = null
  let heroH1 = null
  for (const w of heroWidgets) {
    if (w.type !== 'heading.default') continue
    const text = extractHeading(jsx, w.id)
    if (!text || text === 'Home' || text === 'Services') continue
    const level = jsx.match(new RegExp(`data-id="${w.id}"[\\s\\S]*?<h([1-6])`))?.[1]
    if (level === '2' && !heroH2) heroH2 = { id: w.id, text }
    if (level === '1' && !heroH1) heroH1 = { id: w.id, text }
  }

  if (heroH2) {
    skipIds.add(heroH2.id)
    addText('hero.title', 'hero', 'Section title', heroH2.text)
  }
  if (heroH1) {
    skipIds.add(heroH1.id)
    addText('hero.heading', 'hero', 'Main heading', heroH1.text)
  }

  for (const w of heroWidgets) {
    if (w.type !== 'text-editor.default') continue
    const html = extractHtmlAfter(jsx, w.id)
    if (!html || html.length < 30) continue
    skipIds.add(w.id)
    addHtml('hero.intro', 'hero', 'Intro paragraph', html)
    break
  }
}

function extractQuoteForm(jsx, addText, skipIds) {
  const formWidget = findAllWidgets(jsx).find((w) => w.type === 'form.default')
  if (!formWidget) return
  skipIds.add(formWidget.id)

  const formIdx = jsx.indexOf(`data-id="${formWidget.id}"`)
  const before = jsx.slice(0, formIdx)
  const quoteHeadings = [...before.matchAll(/data-widget_type="heading\.default"[\s\S]*?data-id="([^"]+)"[\s\S]*?<h[1-6][^>]*>([^<]+)</g)]
    .map((m) => ({ id: m[1], text: m[1].replace(/\s+/g, ' ').trim() }))
    .slice(-4)

  const allQuoteHeadings = [...before.matchAll(/data-widget_type="heading\.default"[\s\S]*?data-id="([^"]+)"[\s\S]*?<h[1-6][^>]*>([^<]+)</g)]
  const title = allQuoteHeadings.find((m) => /quote/i.test(m[2]))?.[2]?.trim() ?? allQuoteHeadings.at(-2)?.[2]?.trim()
  const subtitle = allQuoteHeadings.find((m) => /enquiry/i.test(m[2]))?.[2]?.trim() ?? allQuoteHeadings.at(-1)?.[2]?.trim()

  addText('quote_form.title', 'quote_form', 'Form heading', title)
  addText('quote_form.subtitle', 'quote_form', 'Form subtitle', subtitle)
  const submit = jsx.match(new RegExp(`data-id="${formWidget.id}"[\\s\\S]*?elementor-button-text">([^<]+)<`))?.[1]
  addText('quote_form.submit_text', 'quote_form', 'Submit button text', submit ?? 'Submit Quote')
}

function extractReviews(jsx, addText, addHtml, skipIds) {
  const ratingWidget = findAllWidgets(jsx).find((w) => w.type === 'rating.default')
  if (!ratingWidget) return
  skipIds.add(ratingWidget.id)

  const ratingIdx = jsx.indexOf(`data-id="${ratingWidget.id}"`)
  const chunk = jsx.slice(Math.max(0, ratingIdx - 5000), ratingIdx + 2500)
  const headings = [...chunk.matchAll(/data-widget_type="heading\.default"[\s\S]*?data-id="([^"]+)"[\s\S]*?<h[1-6][^>]*>([^<]+)</g)]
  if (headings[0]) addText('reviews.eyebrow', 'reviews', 'Reviews eyebrow', headings[0][2].trim())
  if (headings[1]) addText('reviews.title', 'reviews', 'Reviews title', headings[1][2].trim())
  if (headings[2]) addText('reviews.subtitle', 'reviews', 'Reviews subtitle', headings[2][2].trim())
  const ratingLabel = chunk.match(/<h6>([^<]+)<\/h6>/)?.[1]?.trim()
  if (ratingLabel) addText('reviews.rating_label', 'reviews', 'Rating label', ratingLabel)
  const countHtml = chunk.match(
    /data-widget_type="text-editor\.default"[\s\S]*?<div className="elementor-widget-container">\s*([\s\S]*?)<\/div>\s*<\/div>/,
  )?.[1]
  if (countHtml) addHtml('reviews.count_text', 'reviews', 'Review count text', jsxToHtml(countHtml))
}

function extractCta(jsx, addText, addHtml) {
  const ctaIdx = jsx.lastIndexOf('elementor-button-text')
  if (ctaIdx === -1) return null
  const chunk = jsx.slice(Math.max(0, ctaIdx - 8000), ctaIdx + 500)
  const headings = [...chunk.matchAll(/data-widget_type="heading\.default"[\s\S]*?<h[1-6][^>]*>([^<]+)</g)].map((m) =>
    m[1].replace(/\s+/g, ' ').trim(),
  )
  if (headings[0]) addText('cta.eyebrow', 'cta', 'Eyebrow', headings[0])
  if (headings[1]) addText('cta.title', 'cta', 'Section title', headings[1])
  const body = chunk.match(
    /data-widget_type="text-editor\.default"[\s\S]*?<div className="elementor-widget-container">\s*([\s\S]*?)<\/div>\s*<\/div>/,
  )?.[1]
  if (body) addHtml('cta.body', 'cta', 'Body HTML', jsxToHtml(body))
  const btn = chunk.match(/<Link[^>]*to="([^"]+)"[^>]*>[\s\S]*?elementor-button-text">([^<]+)</)
  if (btn) return { label: btn[2].trim(), url: btn[1] }
  const btnA = chunk.match(/href="([^"]+)"[^>]*>[\s\S]*?elementor-button-text">([^<]+)</)
  if (btnA) return { label: btnA[2].trim(), url: btnA[1] }
  return null
}

function extractImageCards(jsx, add, cmsPath) {
  const cardTypes = ['image-box.default', 'elementskit-image-box.default']
  const widgets = findAllWidgets(jsx).filter((w) => cardTypes.includes(w.type))
  if (!widgets.length) return

  widgets.forEach((widget, i) => {
    const chunk = jsx.match(new RegExp(`data-id="${widget.id}"[\\s\\S]*?(?=data-element_type="widget" data-id=|data-elementor-id=)`))?.[0] ?? ''
    const items = extractImageBoxes(chunk, cmsPath)
    const item = items[0]
    if (!item) return
    const itemSlug = slugify(item.title) || `card_${i + 1}`
    add({
      block_key: `cards.${itemSlug}`,
      section: 'cards',
      label: `Card: ${item.title}`,
      type: 'json',
      image_path: cmsPath(item.image),
      metadata: { slug: itemSlug, ...item, image_src: item.image },
    })
  })
}

function extractContentWidgets(jsx, add, addText, addHtml, cmsPath, skipIds) {
  let contentIndex = 0
  for (const { id, type } of findAllWidgets(jsx)) {
    if (skipIds.has(id)) continue

    if (type === 'heading.default' || type === 'elementskit-heading.default') {
      const text = extractHeading(jsx, id)
      if (!text) continue
      addText(`content.heading_${id}`, 'content', `Heading: ${text.slice(0, 60)}`, text)
      continue
    }

    if (type === 'text-editor.default') {
      const html = extractHtmlAfter(jsx, id)
      if (!html || html.length < 20) continue
      addHtml(`content.text_${id}`, 'content', `Content block ${++contentIndex}`, html)
      continue
    }

    if (type === 'image.default') {
      const src = extractImageSrc(jsx, id)
      if (!src) continue
      add({
        block_key: `content.image_${id}`,
        section: 'content',
        label: `Image (${id})`,
        type: 'image',
        image_path: cmsPath(src),
        metadata: { elementor_id: id, image_src: src },
      })
      continue
    }

    if (type === 'icon-list.default') {
      const items = [...(jsx.match(new RegExp(`data-id="${id}"[\\s\\S]*?<\\/ul>`))?.[0] ?? '').matchAll(/elementor-icon-list-text">([^<]+)</g)].map(
        (x) => x[1].trim(),
      )
      if (items.length) {
        add({
          block_key: `content.list_${id}`,
          section: 'content',
          label: `Icon list (${id})`,
          type: 'json',
          metadata: { items },
        })
      }
    }
  }
}

export function extractGenericPage({ slug, title, seo, jsx, css, elementorId }) {
  const { blocks, add, addText, addHtml, cmsPath } = createBlockCollector(slug)
  const skipIds = new Set()

  extractBackgrounds(css, slug, cmsPath, add, {}, { heroAndCtaOnly: true })
  extractHero(jsx, addText, addHtml, skipIds)
  extractQuoteForm(jsx, addText, skipIds)

  const faqItems = extractFaqItems(jsx)
  if (faqItems.length) {
    add({ block_key: 'faq.items', section: 'faq', label: 'FAQ items', type: 'json', metadata: { items: faqItems } })
    const faqTitleIdx = jsx.indexOf('ekit-accordion-title')
    if (faqTitleIdx !== -1) {
      const before = jsx.slice(0, faqTitleIdx)
      const faqHeading = [...before.matchAll(/data-widget_type="heading\.default"[\s\S]*?<h[1-6][^>]*>([^<]+)</g)].at(-1)?.[1]
      if (faqHeading) addText('faq.title', 'faq', 'FAQ title', faqHeading.trim())
    }
    extractFaqSidebar(jsx, add, addText, addHtml, cmsPath, skipIds)
  }

  extractReviews(jsx, addText, addHtml, skipIds)
  extractImageCards(jsx, add, cmsPath)

  const blogPosts = extractBlogPosts(jsx, cmsPath)
  if (blogPosts.length) {
    add({ block_key: 'blog.posts', section: 'blog', label: 'Blog preview posts', type: 'json', metadata: { posts: blogPosts } })
  }

  const ctaBtn = extractCta(jsx, addText, addHtml)
  if (ctaBtn) {
    add({
      block_key: 'cta.button',
      section: 'cta',
      label: 'CTA button',
      type: 'link',
      value: ctaBtn.label,
      link_url: ctaBtn.url,
    })
  }

  if (/Free Quotes|100\+ Google|Licensed|100% Satisfaction|Local Family/i.test(jsx)) {
    const idx = jsx.indexOf('controll-icons')
    if (idx !== -1) {
      extractImageBoxes(jsx.slice(idx, idx + 8000), cmsPath).forEach((item, i) => {
        const itemSlug = slugify(item.title) || `feature_${i + 1}`
        add({
          block_key: `features.${itemSlug}`,
          section: 'features',
          label: `Feature: ${item.title}`,
          type: 'json',
          image_path: cmsPath(item.image),
          metadata: { slug: itemSlug, ...item, image_src: item.image },
        })
      })
    }
  }

  extractContentWidgets(jsx, add, addText, addHtml, cmsPath, skipIds)
  ensureAllImages(jsx, blocks, add, cmsPath)

  return {
    slug,
    title,
    seo_title: seo.seo_title,
    seo_description: seo.seo_description,
    body_class: `wp-singular page-template page-template-elementor_header_footer page wp-custom-logo wp-embed-responsive wp-theme-hello-elementor elementor-default elementor-template-full-width elementor-kit-9 elementor-page elementor-page-${elementorId}`,
    elementor_id: elementorId,
    is_published: true,
    blocks,
  }
}
