import { useLayoutEffect } from 'react'
import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'

function patchHeading(widgetId, text) {
  if (!text) return
  const widget = document.querySelector(`.elementor-element-${widgetId}`)
  if (!widget) return

  const el =
    widget.querySelector('.elementor-heading-title')
    ?? widget.querySelector('.ekit-heading--title')
    ?? widget.querySelector('.elementskit-section-title')

  if (el) el.textContent = text
}

function patchList(widgetId, items) {
  if (!items?.length) return
  const widget = document.querySelector(`.elementor-element-${widgetId}`)
  const listEl = widget?.querySelector('.elementor-icon-list-items')
  if (!listEl) return

  const existingItems = listEl.querySelectorAll('.elementor-icon-list-item')
  if (existingItems.length === items.length) {
    items.forEach((text, index) => {
      const textEl = existingItems[index]?.querySelector('.elementor-icon-list-text')
      if (textEl) textEl.textContent = text
    })
    return
  }

  const iconHtml = existingItems[0]?.querySelector('.elementor-icon-list-icon')?.outerHTML ?? ''
  listEl.innerHTML = items
    .map((text) => `<li class="elementor-icon-list-item">${iconHtml}<span class="elementor-icon-list-text">${text}</span></li>`)
    .join('')
}

function simplifyHtml(html) {
  if (!html || !html.includes('elementor-element-')) return html
  const tmp = document.createElement('div')
  tmp.innerHTML = html
  const inner = tmp.querySelector('.elementor-widget-container')
  return (inner?.innerHTML ?? tmp.innerHTML).trim()
}

function patchHtml(widgetId, html) {
  if (!html) return
  const widget = document.querySelector(`.elementor-element-${widgetId}`)
  const el = widget?.querySelector('.elementor-widget-container')
  if (el) el.innerHTML = simplifyHtml(html)
}

function patchImage(widgetId, src, alt) {
  if (!src) return
  const widget = document.querySelector(`.elementor-element-${widgetId}`)
  const img = widget?.querySelector('img')
  if (!img) return
  img.src = cmsMediaUrl(src)
  img.removeAttribute('srcset')
  img.removeAttribute('srcSet')
  if (alt) img.alt = alt
}

function applyContentBlocks(blocks) {
  for (const block of blocks ?? []) {
    const key = block.block_key ?? ''
    const match = key.match(/^content\.(heading|text|image|list)_([a-f0-9]+)/)
    if (!match) continue

    const [, type, widgetId] = match
    // Skip duplicate extract blocks and parent wrappers that embed child widgets.
    if (/^content\.(heading|text|image|list)_[a-f0-9]+_\d+$/.test(key)) continue

    if (type === 'heading') patchHeading(widgetId, cmsText(block.value, ''))
    else if (type === 'text') patchHtml(widgetId, cmsText(block.value, ''))
    else if (type === 'image') patchImage(widgetId, block.image ?? block.image_url, block.metadata?.alt)
    else if (type === 'list') patchList(widgetId, block.metadata?.items)
  }
}

/** Apply CMS content_blocks to existing Elementor markup (design unchanged). */
export default function ServiceCmsContentBlocks({ content }) {
  useLayoutEffect(() => {
    if (!content?.content_blocks?.length) return
    applyContentBlocks(content.content_blocks)
  }, [content])

  return null
}
