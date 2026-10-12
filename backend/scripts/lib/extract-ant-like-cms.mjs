/**
 * Extract CMS blocks from ant-template service pages (fox, possum, termite).
 * Uses the same Elementor widget IDs as the ant pest control page.
 */
import {
  createBlockCollector,
  extractBackgrounds,
  extractBlogPosts,
  extractFaqItems,
  extractHeading,
  extractHtmlAfter,
  extractImageBoxes,
  extractImageSrc,
  jsxToHtml,
  slugify,
} from './service-page-cms-lib.mjs'

function extractIconListItems(jsx, id) {
  const re = new RegExp(`data-id="${id}"[\\s\\S]*?<ul className="elementor-icon-list-items">([\\s\\S]*?)<\\/ul>`)
  const m = jsx.match(re)
  if (!m) return []
  return [...m[1].matchAll(/elementor-icon-list-text">([^<]+)</g)].map((x) => x[1].trim())
}

function extractEkitImageBoxes(jsx, startMarker, endMarker) {
  const chunk = jsx.split(startMarker)[1]?.split(endMarker)[0] ?? ''
  const re =
    /src="(\/assets\/images\/[^"]+)"[\s\S]*?elementskit-info-box-title">\s*([^<]+?)\s*<\/h3>[\s\S]*?elementskit-box-style-content">\s*([^<]+?)\s*<\/div>/g
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

function extractSectionChunk(jsx, sectionStart, sectionEnd, occurrence = 0) {
  let idx = -1
  for (let i = 0; i <= occurrence; i++) {
    idx = jsx.indexOf(sectionStart, idx + 1)
    if (idx === -1) return ''
  }
  const after = jsx.slice(idx + sectionStart.length)
  const endIdx = after.indexOf(sectionEnd)
  return endIdx === -1 ? after : after.slice(0, endIdx)
}

export function extractAntLikePage({ slug, title, seo, jsx, css, elementorId }) {
  const { blocks, add, addText, addHtml, cmsPath } = createBlockCollector(slug)

  const bgMap = {
    a342089: 'hero',
    f5e4d41: 'why_inside',
    f732271: 'cta',
    '235b366': 'problems',
  }
  extractBackgrounds(css, slug, cmsPath, add, bgMap)

  const breadcrumbRe = /data-id="fd02c33"[\s\S]*?elementor-icon-list-text">([^<]+)</g
  const breadcrumbs = [...jsx.matchAll(breadcrumbRe)].map((m) => m[1].trim())
  addText('hero.breadcrumb_parent', 'hero', 'Breadcrumb parent', breadcrumbs[1] ?? 'Services')
  addText('hero.breadcrumb_current', 'hero', 'Breadcrumb current', breadcrumbs[2] ?? '')
  addText('hero.title', 'hero', 'Section title', extractHeading(jsx, '5b29971'))
  addText('hero.heading', 'hero', 'Main heading', extractHeading(jsx, 'f59a88c'))
  addHtml('hero.intro', 'hero', 'Intro paragraph', extractHtmlAfter(jsx, '424a488'))

  addText('quote_form.title', 'quote_form', 'Form heading', extractHeading(jsx, 'ed9cb71'))
  addText('quote_form.subtitle', 'quote_form', 'Form subtitle', extractHeading(jsx, 'fb9a1f0'))
  addText('quote_form.submit_text', 'quote_form', 'Submit button text', 'Submit Quote')

  addText('species.eyebrow', 'species', 'Eyebrow', extractHeading(jsx, '6501e7d'))
  addText('species.title', 'species', 'Section title', extractHeading(jsx, '578d989'))
  const speciesIntro = extractHtmlAfter(jsx, 'f6bb8ec')
  if (speciesIntro) addHtml('species.intro', 'species', 'Intro HTML', speciesIntro)

  const speciesChunk = extractSectionChunk(jsx, 'data-id="6dc7fcc"', 'data-id="2956c52"')
  extractImageBoxes(speciesChunk, cmsPath).forEach((item, i) => {
    const itemSlug = slugify(item.title) || `species_${i + 1}`
    add({
      block_key: `species.${itemSlug}`,
      section: 'species',
      label: `Species: ${item.title}`,
      type: 'json',
      image_path: cmsPath(item.image),
      metadata: { slug: itemSlug, ...item, image_src: item.image },
    })
  })

  addText('why_inside.eyebrow', 'why_inside', 'Eyebrow', extractHeading(jsx, 'cee4cbe'))
  addText('why_inside.title', 'why_inside', 'Section title', extractHeading(jsx, '6d22bd0'))
  addHtml('why_inside.list_html', 'why_inside', 'List HTML', extractHtmlAfter(jsx, '59fd6df'))
  addHtml('why_inside.footer', 'why_inside', 'Footer text', extractHtmlAfter(jsx, '2e1c8d0'))
  const whyInsideImg = extractImageSrc(jsx, '406e473')
  if (whyInsideImg) {
    add({
      block_key: 'why_inside.image',
      section: 'why_inside',
      label: 'Section image',
      type: 'image',
      image_path: cmsPath(whyInsideImg),
      metadata: { image_src: whyInsideImg },
    })
  }

  addText('problems.eyebrow', 'problems', 'Eyebrow', extractHeading(jsx, 'c204f1d'))
  addText('problems.title', 'problems', 'Section title', extractHeading(jsx, '5de8f7d'))
  const problemsIntro = extractHtmlAfter(jsx, 'ea758e9')
  if (problemsIntro) addHtml('problems.intro', 'problems', 'Intro HTML', problemsIntro)

  extractEkitImageBoxes(jsx, 'data-id="782d287"', 'data-id="12c387c"').forEach((item, i) => {
    const itemSlug = slugify(item.title) || `problem_${i + 1}`
    add({
      block_key: `problems.${itemSlug}`,
      section: 'problems',
      label: `Problem: ${item.title}`,
      type: 'json',
      image_path: cmsPath(item.image),
      metadata: { slug: itemSlug, ...item, image_src: item.image },
    })
  })

  addText('prevention.eyebrow', 'prevention', 'Eyebrow', extractHeading(jsx, '326f094'))
  addText('prevention.title', 'prevention', 'Section title', extractHeading(jsx, '010327e'))
  const preventionIntro = extractHtmlAfter(jsx, '7696069')
  if (preventionIntro) addHtml('prevention.intro', 'prevention', 'Intro HTML', preventionIntro)

  const preventionTipIds = [
    { titleId: '3bce987', listId: '446fbbb' },
    { titleId: 'd668ba4', listId: 'a4646d8' },
    { titleId: '8da92f1', listId: '5750a6f' },
    { titleId: 'e0495b8', listId: 'cb3d33f' },
    { titleId: '79db49d', listId: 'a55e290' },
    { titleId: '8d109a3', listId: '8c84a46' },
    { titleId: 'e47cc08', listId: 'acb9541', introId: '23a7e29' },
    { titleId: 'd5d1b1b', introId: 'b50781c' },
  ]
  const preventionTips = preventionTipIds.map((cfg, i) => ({
    slug: slugify(extractHeading(jsx, cfg.titleId)) || `tip_${i + 1}`,
    title: extractHeading(jsx, cfg.titleId) ?? '',
    intro: cfg.introId ? extractHtmlAfter(jsx, cfg.introId)?.replace(/<[^>]+>/g, ' ').trim() : null,
    list: cfg.listId ? extractIconListItems(jsx, cfg.listId) : [],
  }))
  if (preventionTips.length) {
    add({
      block_key: 'prevention.tips',
      section: 'prevention',
      label: 'Prevention tips',
      type: 'json',
      metadata: { tips: preventionTips },
    })
  }

  const featuresChunk = extractSectionChunk(jsx, 'data-id="df39b6f"', 'data-id="f58628f"')
  extractImageBoxes(featuresChunk, cmsPath).forEach((item, i) => {
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

  addText('faq.title', 'faq', 'FAQ title', extractHeading(jsx, 'bfd6cde'))
  const faqSidebarImg = extractImageSrc(jsx, 'e9f2f6e')
  if (faqSidebarImg) {
    add({
      block_key: 'faq.sidebar_image',
      section: 'faq',
      label: 'FAQ sidebar image',
      type: 'image',
      image_path: cmsPath(faqSidebarImg),
      metadata: { image_src: faqSidebarImg },
    })
  }
  const faqCtaTitle = jsx.match(/data-id="8a2dcb0"[\s\S]*?elementskit-info-box-title">\s*([^<]+?)\s*<\/h3>/)?.[1]?.trim()
  const faqCtaBody = jsx.match(/data-id="8a2dcb0"[\s\S]*?<p>([^<]+)<\/p>/)?.[1]?.trim()
  const faqCtaBtn = jsx.match(/data-id="8a2dcb0"[\s\S]*?<Link[^>]*to="([^"]+)"[^>]*>\s*([^<]+)/)
  addText('faq.sidebar_cta_title', 'faq', 'Sidebar CTA title', faqCtaTitle)
  addText('faq.sidebar_cta_body', 'faq', 'Sidebar CTA body', faqCtaBody)
  if (faqCtaBtn) {
    add({
      block_key: 'faq.sidebar_cta_button',
      section: 'faq',
      label: 'Sidebar CTA button',
      type: 'link',
      value: faqCtaBtn[2].trim(),
      link_url: faqCtaBtn[1],
    })
  }
  const faqItems = extractFaqItems(jsx)
  if (faqItems.length) {
    add({ block_key: 'faq.items', section: 'faq', label: 'FAQ items', type: 'json', metadata: { items: faqItems } })
  }

  addText('reviews.eyebrow', 'reviews', 'Reviews eyebrow', extractHeading(jsx, '110e690'))
  addText('reviews.title', 'reviews', 'Reviews title', extractHeading(jsx, 'e19f5a7'))
  addText('reviews.subtitle', 'reviews', 'Reviews subtitle', extractHeading(jsx, 'b16caa1'))
  const ratingLabel = jsx.match(/data-id="bc4ba90"[\s\S]*?<h6>([^<]+)<\/h6>/)?.[1]?.trim()
  addText('reviews.rating_label', 'reviews', 'Rating label', ratingLabel)
  addHtml('reviews.count_text', 'reviews', 'Review count text', extractHtmlAfter(jsx, '5c76140'))

  addText('blog.eyebrow', 'blog', 'Section eyebrow', extractHeading(jsx, '575a21f'))
  addText('blog.title', 'blog', 'Section title', extractHeading(jsx, '2fd4f30'))
  const blogPosts = extractBlogPosts(jsx, cmsPath)
  if (blogPosts.length) {
    add({ block_key: 'blog.posts', section: 'blog', label: 'Blog preview posts', type: 'json', metadata: { posts: blogPosts } })
  }

  addText('cta.eyebrow', 'cta', 'Eyebrow', extractHeading(jsx, 'eb45e17'))
  addText('cta.title', 'cta', 'Section title', extractHeading(jsx, '0d6851b'))
  addHtml('cta.body', 'cta', 'Body HTML', extractHtmlAfter(jsx, '4852935'))
  const ctaBtn = jsx.match(/data-id="3a9556f"[\s\S]*?<Link[^>]*to="([^"]+)"[^>]*>[\s\S]*?elementor-button-text">([^<]+)</)
  if (ctaBtn) {
    add({
      block_key: 'cta.button',
      section: 'cta',
      label: 'CTA button',
      type: 'link',
      value: ctaBtn[2].trim(),
      link_url: ctaBtn[1],
    })
  }

  const bodyClassMatch = jsx.match(/elementor elementor-\d+/)
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
