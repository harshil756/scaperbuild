import { useLayoutEffect } from 'react'
import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'

function patchImage(widgetId, src, alt) {
  if (!src || !widgetId) return
  const img = document.querySelector(`.elementor-element-${widgetId} img`)
  if (!img) return
  img.src = cmsMediaUrl(src)
  img.removeAttribute('srcset')
  img.removeAttribute('srcSet')
  if (alt) img.alt = alt
}

function patchSidebarCta(faq, widgetId) {
  if (!widgetId) return
  const widget = document.querySelector(`.elementor-element-${widgetId}`)
  if (!widget) return
  const title = widget.querySelector('.elementskit-info-box-title')
  const body = widget.querySelector('.box-body p')
  const btn = widget.querySelector('.elementskit-btn')
  if (title && faq?.sidebar_cta_title) title.textContent = cmsText(faq.sidebar_cta_title, title.textContent)
  if (body && faq?.sidebar_cta_body) body.textContent = cmsText(faq.sidebar_cta_body, body.textContent)
  if (btn && faq?.sidebar_cta_button_label) btn.textContent = cmsText(faq.sidebar_cta_button_label, btn.textContent)
  if (btn && faq?.sidebar_cta_button_url) btn.setAttribute('href', faq.sidebar_cta_button_url)
}

/** Patch FAQ accordion + sidebar from structured CMS faq data (design unchanged). */
export default function ServiceFaqCms({ faq, accordionWidgetId, sidebarCtaWidgetId }) {
  useLayoutEffect(() => {
    if (!faq) return

    patchImage(faq.sidebar_image_elementor_id, faq.sidebar_image, 'FAQ sidebar')
    patchSidebarCta(faq, sidebarCtaWidgetId)

    const items = faq.items
    if (!items?.length || !accordionWidgetId) return

    const widget = document.querySelector(`.elementor-element-${accordionWidgetId}`)
    const cards = widget?.querySelectorAll('.elementskit-card')
    if (!cards?.length) return

    items.forEach((item, index) => {
      const card = cards[index]
      if (!card) return
      const title = card.querySelector('.ekit-accordion-title')
      const body = card.querySelector('.ekit-accordion--content')
      if (title && item.question) title.textContent = item.question
      if (body && (item.answer_html || item.answer)) {
        body.innerHTML = item.answer_html ?? item.answer
      }
    })
  }, [faq, accordionWidgetId, sidebarCtaWidgetId])

  return null
}
