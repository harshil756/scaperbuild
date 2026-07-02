import { cmsMediaUrl, cmsText } from './cmsMedia.js'

/** Find a content_blocks entry by Elementor widget data-id. */
export function cmsWidgetBlock(blocks, widgetId) {
  if (!blocks?.length || !widgetId) return null

  return blocks.find((block) => {
    const key = block.block_key ?? ''
    return (
      key === `content.heading_${widgetId}`
      || key === `content.text_${widgetId}`
      || key === `content.image_${widgetId}`
      || key === `content.list_${widgetId}`
      || key.startsWith(`content.text_${widgetId}_`)
    )
  })
}

export function cmsWidgetList(blocks, widgetId, fallback = []) {
  const block = blocks?.find((b) => b.block_key === `content.list_${widgetId}`)
  const items = block?.metadata?.items
  return items?.length ? items : fallback
}

export function cmsWidgetText(blocks, widgetId, fallback = '') {
  const block = cmsWidgetBlock(blocks, widgetId)
  if (!block?.value) return fallback
  return block.value
}

export function cmsWidgetHtml(blocks, widgetId, fallback = '') {
  const block = cmsWidgetBlock(blocks, widgetId)
  if (!block?.value) return fallback
  return block.value
}

export function cmsWidgetImage(blocks, widgetId, fallback = '') {
  const block = cmsWidgetBlock(blocks, widgetId)
  const path = block?.image ?? block?.image_url
  return cmsMediaUrl(path, fallback)
}

export { cmsText, cmsMediaUrl }
