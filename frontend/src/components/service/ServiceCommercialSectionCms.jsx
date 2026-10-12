import { useLayoutEffect } from 'react'
import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'
import { COMMERCIAL_PAGE_CMS_SECTIONS } from '../../config/commercialPageCmsSections.js'

function patchHeading(widgetId, text) {
  if (!text || !widgetId) return
  const widget = document.querySelector(`.elementor-element-${widgetId}`)
  const el =
    widget?.querySelector('.elementor-heading-title')
    ?? widget?.querySelector('.ekit-heading--title')
    ?? widget?.querySelector('.elementskit-section-title')
  if (el) el.textContent = text
}

function patchHtml(widgetId, html) {
  if (!html || !widgetId) return
  const widget = document.querySelector(`.elementor-element-${widgetId}`)
  const container = widget?.querySelector('.elementor-widget-container')
  if (container) container.innerHTML = html
}

function patchImageBox(widgetId, item) {
  if (!widgetId || !item) return
  const widget = document.querySelector(`.elementor-element-${widgetId}`)
  if (!widget) return

  const img = widget.querySelector('.elementskit-box-header img, .image-box-img-center img')
  if (img && item.image) {
    img.src = cmsMediaUrl(item.image)
    img.removeAttribute('srcset')
    img.removeAttribute('srcSet')
    if (item.alt) img.alt = item.alt
  }

  const title = widget.querySelector('.elementskit-info-box-title')
  if (title && item.title) title.textContent = item.title

  const desc = widget.querySelector('.elementskit-box-style-content')
  if (desc && item.description) desc.textContent = item.description
}

function patchIconBox(widgetId, item) {
  if (!widgetId || !item) return
  const widget = document.querySelector(`.elementor-element-${widgetId}`)
  if (!widget) return

  const img = widget.querySelector('.elementskit-info-box-icon img, .elementskit-box-header img')
  if (img && item.image) {
    img.src = cmsMediaUrl(item.image)
    img.removeAttribute('srcset')
    img.removeAttribute('srcSet')
    if (item.alt) img.alt = item.alt
  }

  const title = widget.querySelector('.elementskit-info-box-title')
  if (title && item.title) title.textContent = item.title

  const link = widget.querySelector('a.elementskit-btn')
  if (link && item.link) link.setAttribute('href', item.link)
  const btnText = widget.querySelector('.elementskit-btn')
  if (btnText && item.button_text) btnText.textContent = item.button_text
}

function patchCounter(widgetId, about) {
  if (!widgetId || !about) return
  const widget = document.querySelector(`.elementor-element-${widgetId}`)
  if (!widget) return
  const title = widget.querySelector('.elementor-counter-title')
  if (title && about.counter_title) title.textContent = about.counter_title
  const num = widget.querySelector('.elementor-counter-number')
  if (num && about.counter_value) num.textContent = about.counter_value
  const suffix = widget.querySelector('.elementor-counter-number-suffix')
  if (suffix && about.counter_suffix) suffix.textContent = about.counter_suffix
}

function patchAboutImage(widgetId, src, alt) {
  if (!widgetId || !src) return
  const widget = document.querySelector(`.elementor-element-${widgetId}`)
  const img = widget?.querySelector('img')
  if (!img) return
  img.src = cmsMediaUrl(src)
  img.removeAttribute('srcset')
  img.removeAttribute('srcSet')
  if (alt) img.alt = alt
}

/** Patch commercial page structured sections from Filament CMS. */
export default function ServiceCommercialSectionCms({ slug, content }) {
  useLayoutEffect(() => {
    if (!content || !slug) return

    const ids = COMMERCIAL_PAGE_CMS_SECTIONS[slug]
    if (!ids) return

    const about = content.about
    if (about) {
      patchHeading(ids.about?.title, cmsText(about.title))
      patchHeading(ids.about?.subtitle, cmsText(about.subtitle))
      patchHtml(ids.about?.intro, about.intro)
      patchCounter(ids.about?.counter, about)
      if (about.image) patchAboutImage(ids.about?.image, about.image)
    }

    const wc = content.why_choose
    if (wc) {
      patchHeading(ids.whyChoose?.eyebrow, cmsText(wc.eyebrow, 'Why Choose'))
      patchHeading(ids.whyChoose?.title, cmsText(wc.title))
      patchHtml(ids.whyChoose?.intro, wc.intro)
      for (const item of wc.items ?? []) {
        patchImageBox(item.widget_id, item)
      }
    }

    const contact = content.contact
    if (contact) {
      patchHeading(ids.contact?.eyebrow, cmsText(contact.eyebrow, 'Get in Touch'))
      patchHeading(ids.contact?.title, cmsText(contact.title))
      patchHtml(ids.contact?.body, contact.body)
      const btn = ids.contact?.button
        ? document.querySelector(`.elementor-element-${ids.contact.button} .elementor-button-text`)
        : null
      if (btn && contact.button_label) btn.textContent = contact.button_label
      const btnLink = ids.contact?.button
        ? document.querySelector(`.elementor-element-${ids.contact.button} a.elementor-button`)
        : null
      if (btnLink && contact.button_url) btnLink.setAttribute('href', contact.button_url)
    }

    const svc = content.services
    if (svc) {
      patchHeading(ids.services?.eyebrow, cmsText(svc.eyebrow, 'Our Services'))
      patchHeading(ids.services?.title, cmsText(svc.title))
      patchHtml(ids.services?.intro, svc.intro)
      for (const item of svc.items ?? []) {
        patchIconBox(item.widget_id, item)
      }
    }
  }, [slug, content])

  return null
}
