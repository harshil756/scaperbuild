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

function patchCardSteps(items) {
  const ids = {
    investigate: { h: 'ce41091', b: 'bc8e2a4' },
    protection: { h: '35840e7', b: '138f9ac' },
    securing: { h: 'fe2bf3a', b: '1b7d436' },
    reports: { h: '795098b', b: 'fea8dfa' },
  }
  for (const item of items ?? []) {
    const map = ids[item.slug]
    if (!map) continue
    patchHeading(map.h, cmsText(item.title, ''))
    patchHtml(map.b, item.description ?? '')
  }
}

/** Patch structured Filament sections (problems, steps, CTA, etc.). */
export default function ServiceSilverfishSectionCms({ content }) {
  useLayoutEffect(() => {
    if (!content) return

    const p = content.problems
    patchHeading('3c55949', cmsText(p?.eyebrow, 'issues'))
    patchHeading('4ebd325', cmsText(p?.title, 'Issues Related to Silverfish Infestations'))
    patchHtml('24a7d2a', p?.intro)

    const prev = content.prevention
    patchHeading('ef9055f', cmsText(prev?.eyebrow, 'symptoms'))
    patchHeading('fb916a7', cmsText(prev?.title, 'Symptoms of a Silverfish Infestation'))
    patchHtml('adcf837', prev?.intro)

    const svc = content.services
    patchHeading('113a5e2', cmsText(svc?.title, 'Our Approach to Treat Silverfish Infestation'))
    patchHtml('a2624c7', svc?.intro)

    patchCardSteps(content.cards?.items)

    const wc = content.why_choose
    patchHeading('73358e8', cmsText(wc?.eyebrow, 'Our USPs'))
    patchHeading('bd8e94d', cmsText(wc?.title, 'Our USPs'))
    patchHtml('4a957b0', wc?.intro)

    const img = document.querySelector('.elementor-element-0bb7e99 img')
    if (img && wc?.image) {
      img.src = cmsMediaUrl(wc.image)
      img.removeAttribute('srcset')
      img.removeAttribute('srcSet')
    }

    const cta = content.cta
    patchHeading('4c825b4', cmsText(cta?.eyebrow, 'Ideas to reality'))
    patchHeading('7c67181', cmsText(cta?.title, 'Talk to Us Today to Learn More'))
    patchHtml('dbd1d11', cta?.body)
    const btn = document.querySelector('.elementor-element-e8de5c9 .elementor-button-text')
    if (btn && cta?.button_label) btn.textContent = cta.button_label

    patchHtml('4439bbb', content.reviews?.count_text)
  }, [content])

  return null
}
