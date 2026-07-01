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

function isCorruptCmsLiteral(value) {
  if (typeof value !== 'string') return false
  const trimmed = value.trim()
  return trimmed.startsWith('{cmsText(') || trimmed.startsWith('<CmsHtml')
}

export function cmsText(value, fallback = '') {
  if (isCorruptCmsLiteral(value)) return fallback
  return value ?? fallback
}
