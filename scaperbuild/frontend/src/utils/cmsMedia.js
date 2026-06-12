/** Resolve CMS image path from API (absolute URL or /storage/...). */
export function cmsMediaUrl(pathOrUrl, fallback = '') {
  if (!pathOrUrl) return fallback
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) return pathOrUrl
  if (pathOrUrl.startsWith('/')) return pathOrUrl
  return `/storage/${pathOrUrl}`
}

export function cmsText(value, fallback = '') {
  return value ?? fallback
}
