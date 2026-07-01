import { useLayoutEffect } from 'react'
import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'

function patchHeading(widgetId, text) {
  if (!text || !widgetId) return
  const widget = document.querySelector(`.elementor-element-${widgetId}`)
  const el =
    widget?.querySelector('.elementor-heading-title')
    ?? widget?.querySelector('.ekit-heading--title')
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

  const img = widget.querySelector('.elementskit-info-box-icon img')
  if (img && item.image) {
    img.src = cmsMediaUrl(item.image)
    img.removeAttribute('srcset')
    img.removeAttribute('srcSet')
    if (item.alt) img.alt = item.alt
  }

  const title = widget.querySelector('.elementskit-info-box-title')
  if (title && item.title) title.textContent = item.title
}

/** Patch Melbourne page sections from Filament CMS (cards, contact, services). */
export default function MelbourneSectionCms({ content }) {
  useLayoutEffect(() => {
    if (!content) return

    const wc = content.why_choose
    patchHeading('67dcc8a', cmsText(wc?.eyebrow, 'Why Choose'))
    patchHeading('775c5c0', cmsText(wc?.title, '7 States Pest Control for Pest Control in Melbourne?'))
    patchHtml('d51c078', wc?.intro)

    for (const item of wc?.items ?? []) {
      patchImageBox(item.widget_id, item)
    }

    const contact = content.contact
    patchHeading('252ec92', cmsText(contact?.eyebrow, 'Get in Touch'))
    patchHeading('464d28a', cmsText(contact?.title, 'Contact 7 States Pest Control for Melbourne Pest Control'))
    patchHtml('47e9844', contact?.body)
    const btn = document.querySelector('.elementor-element-a701e34 .elementor-button-text')
    if (btn && contact?.button_label) btn.textContent = contact.button_label
    const btnLink = document.querySelector('.elementor-element-a701e34 a.elementor-button')
    if (btnLink && contact?.button_url) btnLink.setAttribute('href', contact.button_url)

    const svc = content.services
    patchHeading('7b2b0f7', cmsText(svc?.eyebrow, 'Our Services'))
    patchHeading('5a6b098', cmsText(svc?.title, 'Explore Our Diverse Pest Control Services at 7 States Pest Control'))
    patchHtml('25aac3f', svc?.intro)

    for (const item of svc?.items ?? []) {
      patchIconBox(item.widget_id, item)
    }
  }, [content])

  return null
}
