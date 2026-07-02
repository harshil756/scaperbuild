/**
 * CMS extractor for commercial pest control pages (office, restaurant, school, warehouse).
 */
import {
  createBlockCollector,
  ensureAllImages,
  extractBackgrounds,
  extractButton,
  extractCounter,
  extractEkitImageBoxWidgets,
  extractElementskitHeading,
  extractElementorIconBoxes,
  extractFaqItems,
  extractFaqSidebar,
  extractHeading,
  extractHtmlAfter,
  extractIconBoxWidgets,
  extractImageSrc,
  findAllWidgets,
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
      addText('hero.breadcrumb_parent', 'hero', 'Breadcrumb parent', crumbs[0] === 'Home' ? '' : crumbs[0])
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
  const allQuoteHeadings = [...before.matchAll(/data-widget_type="heading\.default"[\s\S]*?data-id="([^"]+)"[\s\S]*?<h[1-6][^>]*>([^<]+)</g)]
  const title = allQuoteHeadings.find((m) => /quote/i.test(m[2]))?.[2]?.trim() ?? allQuoteHeadings.at(-2)?.[2]?.trim()
  const subtitle = allQuoteHeadings.find((m) => /enquiry/i.test(m[2]))?.[2]?.trim() ?? allQuoteHeadings.at(-1)?.[2]?.trim()

  addText('quote_form.title', 'quote_form', 'Form heading', title)
  addText('quote_form.subtitle', 'quote_form', 'Form subtitle', subtitle)
  const submit = jsx.match(new RegExp(`data-id="${formWidget.id}"[\\s\\S]*?elementor-button-text">([^<]+)<`))?.[1]
  addText('quote_form.submit_text', 'quote_form', 'Submit button text', submit ?? 'Submit Quote')
}

function extractAboutSection(jsx, add, addText, addHtml, cmsPath, skipIds) {
  const counterWidget = findAllWidgets(jsx).find((w) => w.type === 'counter.default')
  if (counterWidget) {
    skipIds.add(counterWidget.id)
    const counter = extractCounter(jsx, counterWidget.id)
    if (counter?.title) addText('about.counter_title', 'about', 'Counter label', counter.title)
    if (counter?.value) addText('about.counter_value', 'about', 'Counter value', counter.value)
    if (counter?.suffix) addText('about.counter_suffix', 'about', 'Counter suffix', counter.suffix)

    const counterIdx = jsx.indexOf(`data-id="${counterWidget.id}"`)
    const whyIdx = jsx.indexOf('Why Choose', counterIdx)
    const endIdx = whyIdx === -1 ? counterIdx + 6000 : whyIdx
    var sectionChunk = jsx.slice(counterIdx, endIdx)

    const imageWidget = findAllWidgets(sectionChunk).find((w) => w.type === 'image.default')
    if (imageWidget) {
      skipIds.add(imageWidget.id)
      const src = extractImageSrc(jsx, imageWidget.id)
      if (src) {
        add({
          block_key: 'about.image',
          section: 'about',
          label: 'About section image',
          type: 'image',
          image_path: cmsPath(src),
          metadata: { elementor_id: imageWidget.id, image_src: src },
        })
      }
    }
  } else {
    const formWidget = findAllWidgets(jsx).find((w) => w.type === 'form.default')
    const whyIdx = jsx.indexOf('Why Choose')
    if (!formWidget || whyIdx === -1) return

    const formIdx = jsx.indexOf(`data-id="${formWidget.id}"`)
    var sectionChunk = jsx.slice(formIdx, whyIdx)
  }

  const headings = findAllWidgets(sectionChunk)
    .filter((w) => w.type === 'heading.default')
    .map((w) => ({ id: w.id, text: extractHeading(jsx, w.id) }))
    .filter((h) => h.text && !/quote|enquiry/i.test(h.text))
  if (headings[0]) {
    skipIds.add(headings[0].id)
    addText('about.title', 'about', 'Section title', headings[0].text)
  }
  if (headings[1]) {
    skipIds.add(headings[1].id)
    addText('about.subtitle', 'about', 'Section subtitle', headings[1].text)
  }

  const textWidget = findAllWidgets(sectionChunk).find((w) => w.type === 'text-editor.default')
  if (textWidget) {
    skipIds.add(textWidget.id)
    const html = extractHtmlAfter(jsx, textWidget.id)
    if (html) addHtml('about.intro', 'about', 'About intro', html)
  }
}

function extractWhyChooseSection(jsx, add, addText, addHtml, cmsPath, skipIds) {
  const whyIdx = jsx.search(/>\s*Why Choose\s*</)
  if (whyIdx === -1) return

  const contactIdx = jsx.indexOf('Get in Touch', whyIdx)
  const endIdx = contactIdx === -1 ? whyIdx + 20000 : contactIdx
  const chunk = jsx.slice(whyIdx - 2000, endIdx)

  const eyebrowWidget = findAllWidgets(chunk).find((w) => {
    if (w.type !== 'heading.default') return false
    return extractHeading(jsx, w.id) === 'Why Choose'
  })
  if (eyebrowWidget) {
    skipIds.add(eyebrowWidget.id)
    addText('why_choose.eyebrow', 'why_choose', 'Eyebrow', 'Why Choose')
  }

  const ekitHeading = findAllWidgets(chunk).find((w) => w.type === 'elementskit-heading.default')
  if (ekitHeading) {
    skipIds.add(ekitHeading.id)
    const title = extractElementskitHeading(jsx, ekitHeading.id)
    if (title) addText('why_choose.title', 'why_choose', 'Section title', title)
  }

  const introWidget = findAllWidgets(chunk).find((w) => w.type === 'text-editor.default')
  if (introWidget) {
    skipIds.add(introWidget.id)
    const html = extractHtmlAfter(jsx, introWidget.id)
    if (html) addHtml('why_choose.intro', 'why_choose', 'Intro HTML', html)
  }

  extractEkitImageBoxWidgets(jsx, cmsPath)
    .filter((item) => {
      const itemIdx = jsx.indexOf(`data-id="${item.id}"`)
      return itemIdx >= whyIdx - 2000 && itemIdx < endIdx
    })
    .forEach((item, i) => {
      skipIds.add(item.id)
      const itemSlug = slugify(item.title) || `reason_${i + 1}`
      add({
        block_key: `why_choose.${itemSlug}`,
        section: 'why_choose',
        label: `Why choose: ${item.title}`,
        type: 'json',
        image_path: cmsPath(item.image),
        metadata: { slug: itemSlug, ...item, image_src: item.image },
      })
    })
}

function extractContactSection(jsx, add, addText, addHtml, skipIds) {
  const contactWidget = findAllWidgets(jsx).find((w) => {
    if (w.type !== 'heading.default') return false
    return extractHeading(jsx, w.id) === 'Get in Touch'
  })
  if (!contactWidget) return

  const contactIdx = jsx.indexOf(`data-id="${contactWidget.id}"`)
  const servicesWidget = findAllWidgets(jsx).find((w) => {
    if (w.type !== 'heading.default') return false
    const text = extractHeading(jsx, w.id)
    return text && /^Our Services/i.test(text)
  })
  const endIdx = servicesWidget ? jsx.indexOf(`data-id="${servicesWidget.id}"`) : jsx.indexOf('Our Services', contactIdx)
  const chunk = jsx.slice(contactIdx, endIdx === -1 ? contactIdx + 8000 : endIdx)

  skipIds.add(contactWidget.id)
  addText('contact.eyebrow', 'contact', 'Eyebrow', 'Get in Touch')

  const headings = findAllWidgets(chunk)
    .filter((w) => w.type === 'heading.default' && w.id !== contactWidget.id)
    .map((w) => ({ id: w.id, text: extractHeading(jsx, w.id) }))
    .filter((h) => h.text)
  if (headings[0]) {
    skipIds.add(headings[0].id)
    addText('contact.title', 'contact', 'Section title', headings[0].text)
  }

  const textWidget = findAllWidgets(chunk).find((w) => w.type === 'text-editor.default')
  if (textWidget) {
    skipIds.add(textWidget.id)
    const html = extractHtmlAfter(jsx, textWidget.id)
    if (html) addHtml('contact.body', 'contact', 'Body HTML', html)
  }

  const buttonWidget = findAllWidgets(chunk).find((w) => w.type === 'button.default')
  if (buttonWidget) {
    skipIds.add(buttonWidget.id)
    const btn = extractButton(jsx, buttonWidget.id)
    if (btn) {
      add({
        block_key: 'contact.button',
        section: 'contact',
        label: 'Contact button',
        type: 'link',
        value: btn.label,
        link_url: btn.url,
      })
    }
  }
}

function extractServicesSection(jsx, add, addText, addHtml, cmsPath, skipIds) {
  const servicesIdx = jsx.indexOf('Our Services')
  if (servicesIdx === -1) return

  const expertiseIdx = jsx.indexOf('Our Expertise', servicesIdx)
  const faqIdx = jsx.indexOf('Frequently Asked Questions', servicesIdx)
  const endIdx = [expertiseIdx, faqIdx].filter((i) => i !== -1).sort((a, b) => a - b)[0] ?? servicesIdx + 50000
  const chunk = jsx.slice(servicesIdx - 500, endIdx)

  const headings = findAllWidgets(chunk)
    .filter((w) => w.type === 'heading.default')
    .map((w) => ({ id: w.id, text: extractHeading(jsx, w.id) }))
    .filter((h) => h.text && /services/i.test(h.text))
  if (headings[0]) {
    skipIds.add(headings[0].id)
    addText('services.eyebrow', 'services', 'Eyebrow', headings[0].text)
  }
  if (headings[1]) {
    skipIds.add(headings[1].id)
    addText('services.title', 'services', 'Section title', headings[1].text)
  }

  const introWidget = findAllWidgets(chunk).find((w) => w.type === 'text-editor.default')
  if (introWidget) {
    skipIds.add(introWidget.id)
    const html = extractHtmlAfter(jsx, introWidget.id)
    if (html) addHtml('services.intro', 'services', 'Intro HTML', html)
  }

  extractIconBoxWidgets(jsx, { afterIndex: servicesIdx, beforeIndex: endIdx }).forEach((item, i) => {
    skipIds.add(item.id)
    const itemSlug = slugify(item.title) || `service_${i + 1}`
    add({
      block_key: `services.${itemSlug}`,
      section: 'services',
      label: `Service: ${item.title}`,
      type: 'json',
      image_path: cmsPath(item.image),
      metadata: { slug: itemSlug, ...item, image_src: item.image },
    })
  })
}

function extractExpertiseSection(jsx, add, addText, skipIds) {
  const expertiseIdx = jsx.indexOf('Our Expertise')
  if (expertiseIdx === -1) return

  const faqIdx = jsx.indexOf('Frequently Asked Questions', expertiseIdx)
  const endIdx = faqIdx === -1 ? expertiseIdx + 15000 : faqIdx
  const chunk = jsx.slice(expertiseIdx - 500, endIdx)

  const heading = findAllWidgets(chunk)
    .filter((w) => w.type === 'heading.default')
    .map((w) => ({ id: w.id, text: extractHeading(jsx, w.id) }))
    .find((h) => h.text && /expertise/i.test(h.text))
  if (heading) {
    skipIds.add(heading.id)
    addText('expertise.title', 'expertise', 'Section title', heading.text)
  }

  extractElementorIconBoxes(jsx, { afterIndex: expertiseIdx, beforeIndex: endIdx }).forEach((item, i) => {
    skipIds.add(item.id)
    const itemSlug = slugify(item.title) || `item_${i + 1}`
    add({
      block_key: `expertise.${itemSlug}`,
      section: 'expertise',
      label: `Expertise: ${item.title}`,
      type: 'json',
      metadata: { slug: itemSlug, title: item.title },
    })
  })
}

export function extractCommercialPage({ slug, title, seo, jsx, css, elementorId }) {
  const { blocks, add, addText, addHtml, cmsPath } = createBlockCollector(slug)
  const skipIds = new Set()

  extractBackgrounds(css, slug, cmsPath, add, {}, { heroAndCtaOnly: true })
  extractHero(jsx, addText, addHtml, skipIds)
  extractQuoteForm(jsx, addText, skipIds)
  extractAboutSection(jsx, add, addText, addHtml, cmsPath, skipIds)
  extractWhyChooseSection(jsx, add, addText, addHtml, cmsPath, skipIds)
  extractContactSection(jsx, add, addText, addHtml, skipIds)
  extractServicesSection(jsx, add, addText, addHtml, cmsPath, skipIds)
  extractExpertiseSection(jsx, add, addText, skipIds)

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
