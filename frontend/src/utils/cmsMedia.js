/** Laravel API / media origin (no trailing slash). Empty in local Vite → use proxy. */
function mediaOrigin() {
  return String(import.meta.env.VITE_API_URL ?? '')
    .trim()
    .replace(/\/$/, '')
}

/**
 * Normalize any CMS path/URL to a browser-loadable URL.
 * Cross-origin deploys (site ≠ API) must use VITE_API_URL so /storage hits Laravel.
 */
export function cmsMediaUrl(pathOrUrl, fallback = '') {
  if (!pathOrUrl) return fallback

  let pathname = String(pathOrUrl).trim()

  if (pathname.startsWith('http://') || pathname.startsWith('https://')) {
    try {
      const url = new URL(pathname)
      pathname = `${url.pathname}${url.search}`
    } catch {
      return pathOrUrl
    }
  }

  if (pathname.startsWith('storage/')) {
    pathname = `/${pathname}`
  } else if (pathname.startsWith('cms/')) {
    pathname = `/storage/${pathname}`
  } else if (pathname.startsWith('/cms/')) {
    pathname = `/storage${pathname}`
  } else if (!pathname.startsWith('/')) {
    pathname = `/storage/${pathname}`
  }

  if (!pathname.startsWith('/storage/')) {
    return pathname || fallback
  }

  const origin = mediaOrigin()
  return origin ? `${origin}${pathname}` : pathname
}

/** Rewrite CMS storage paths inside HTML content for frontend display. */
export function rewriteCmsHtmlMedia(html) {
  if (!html) return html

  return html.replace(/<img\b([^>]*?)>/gi, (full, attrs) => {
    const dataIdMatch = attrs.match(/\bdata-id=["']([^"']+)["']/i)
    const srcMatch = attrs.match(/\bsrc=["']([^"']*)["']/i)
    const dataId = dataIdMatch?.[1]?.trim() || ''
    const src = srcMatch?.[1]?.trim() || ''

    const rawPath =
      (dataId && (dataId.includes('cms/') || dataId.includes('storage/'))) ? dataId
        : (src && (src.includes('cms/') || src.includes('storage/') || src.startsWith('http'))) ? src
          : ''

    if (!rawPath) return full

    const resolved = cmsMediaUrl(rawPath)
    if (!resolved) return full

    if (srcMatch) {
      return `<img${attrs.replace(/\bsrc=["'][^"']*["']/i, `src="${resolved}"`)}>`
    }

    return `<img src="${resolved}"${attrs}>`
  })
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
