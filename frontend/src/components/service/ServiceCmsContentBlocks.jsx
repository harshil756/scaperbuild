import { useLayoutEffect } from 'react'
import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'

function setWidgetHidden(widget, hidden) {
  if (!widget) return
  widget.style.display = hidden ? 'none' : ''
}

function patchHeading(widgetId, text, hasCmsValue) {
  if (!hasCmsValue) return
  const widget = document.querySelector(`.elementor-element-${widgetId}`)
  if (!widget) return

  const el =
    widget.querySelector('.elementor-heading-title')
    ?? widget.querySelector('.ekit-heading--title')
    ?? widget.querySelector('.elementskit-section-title')

  if (!el) return

  const next = text ?? ''
  el.textContent = next
  setWidgetHidden(widget, next.trim() === '')
}

function patchList(widgetId, items, hasCmsValue) {
  if (!hasCmsValue) return
  const widget = document.querySelector(`.elementor-element-${widgetId}`)
  const listEl = widget?.querySelector('.elementor-icon-list-items')
  if (!listEl) return

  if (!items?.length) {
    listEl.innerHTML = ''
    setWidgetHidden(widget, true)
    return
  }

  setWidgetHidden(widget, false)
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

function patchHtml(widgetId, html, hasCmsValue) {
  if (!hasCmsValue) return
  const widget = document.querySelector(`.elementor-element-${widgetId}`)
  const el = widget?.querySelector('.elementor-widget-container')
  if (!el) return

  const next = html ?? ''
  el.innerHTML = next ? simplifyHtml(next) : ''
  setWidgetHidden(widget, next.trim() === '')
}

function patchImage(widgetId, src, alt, hasCmsValue) {
  if (!hasCmsValue) return
  const widget = document.querySelector(`.elementor-element-${widgetId}`)
  if (!widget) return

  if (!src) {
    setWidgetHidden(widget, true)
    return
  }

  const img = widget.querySelector('img')
  if (!img) return
  setWidgetHidden(widget, false)
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

    if (type === 'heading') {
      const hasCmsValue = block.value != null
      patchHeading(widgetId, cmsText(block.value, ''), hasCmsValue)
    } else if (type === 'text') {
      const hasCmsValue = block.value != null
      patchHtml(widgetId, cmsText(block.value, ''), hasCmsValue)
    } else if (type === 'image') {
      const src = block.image ?? block.image_url ?? block.image_path
      const hasCmsValue = Object.prototype.hasOwnProperty.call(block, 'image')
        || Object.prototype.hasOwnProperty.call(block, 'image_url')
        || Object.prototype.hasOwnProperty.call(block, 'image_path')
        || block.value != null
      patchImage(widgetId, src, block.metadata?.alt, hasCmsValue)
    } else if (type === 'list') {
      const hasCmsValue = block.metadata != null && Object.prototype.hasOwnProperty.call(block.metadata, 'items')
      patchList(widgetId, block.metadata?.items, hasCmsValue)
    }
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
