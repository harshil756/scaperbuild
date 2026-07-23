/** Known public site hosts that load media from the Laravel CMS server. */
const PRODUCTION_MEDIA_ORIGIN = 'https://7sbd.durjainfotech.com'
const PRODUCTION_SITE_HOSTS = new Set([
  '7statespestcontrol.com.au',
  'www.7statespestcontrol.com.au',
  '7s.durjainfotech.com',
])

/** Laravel API / media origin (no trailing slash). Empty in local Vite → use proxy. */
function mediaOrigin() {
  const fromEnv = String(import.meta.env.VITE_API_URL ?? '')
    .trim()
    .replace(/\/$/, '')

  if (fromEnv) return fromEnv

  if (typeof window !== 'undefined' && PRODUCTION_SITE_HOSTS.has(window.location.hostname)) {
    return PRODUCTION_MEDIA_ORIGIN
  }

  return ''
}

/**
 * Normalize any CMS path/URL to a browser-loadable URL.
 * Absolute http(s) URLs from the API are kept as-is (cross-origin storage).
 * Relative cms/storage paths are resolved against the media origin when set.
 */
export function cmsMediaUrl(pathOrUrl, fallback = '') {
  if (!pathOrUrl) return fallback

  const raw = String(pathOrUrl).trim()

  // API already returns full backend URLs — never strip the host.
  if (raw.startsWith('http://') || raw.startsWith('https://')) {
    return raw
  }

  let pathname = raw

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

    // Prefer existing absolute src; otherwise build from data-id / relative src.
    const rawPath = src.startsWith('http://') || src.startsWith('https://')
      ? src
      : (dataId && (dataId.includes('cms/') || dataId.includes('storage/')))
        ? dataId
        : (src && (src.includes('cms/') || src.includes('storage/')))
          ? src
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
