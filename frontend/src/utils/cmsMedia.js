/** Resolve CMS image path from API (absolute URL or /storage/...). */
export function cmsMediaUrl(pathOrUrl, fallback = '') {
  if (!pathOrUrl) return fallback
  if (pathOrUrl.startsWith('http://127.0.0.1:8000/') || pathOrUrl.startsWith('http://localhost:8000/')) {
    return pathOrUrl.replace(/^https?:\/\/[^/]+/, '')
  }
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) return pathOrUrl
  if (pathOrUrl.startsWith('/')) return pathOrUrl
  return `/storage/${pathOrUrl}`
}

/** Rewrite CMS storage paths inside HTML content for frontend display. */
export function rewriteCmsHtmlMedia(html) {
  if (!html) return html

  return html
    .replace(
      /(\s(?:src|href)=["'])(?:https?:\/\/[^"']+)?(\/?storage\/[^"']+)(["'])/gi,
      '$1$2$3',
    )
    .replace(
      /(\s(?:src|href)=["'])(?!https?:\/\/|\/|#|mailto:|tel:)(cms\/[^"']+)(["'])/gi,
      '$1/storage/$2$3',
    )
}

function isCorruptCmsLiteral(value) {
  if (typeof value !== 'string') return false
  const trimmed = value.trim()
  return trimmed.startsWith('{cmsText(') || trimmed.startsWith('<CmsHtml')
}

export function cmsText(value, fallback = '') {
  if (isCorruptCmsLiteral(value)) return fallback
  return value ?? fallback
}
