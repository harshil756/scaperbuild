import { apiOrigin } from './apiOrigin.js'

/** CMS storage host — blog images must use this full origin in <img src>. */
export const CMS_MEDIA_ORIGIN = 'https://7sbd.7statespestcontrol.com.au'

function mediaOrigin() {
  const fromEnv = apiOrigin()

  if (fromEnv) return fromEnv

  // Local Vite uses /storage proxy → keep paths root-relative.
  if (typeof window !== 'undefined') {
    const { hostname } = window.location
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return ''
    }
  }

  // Any deployed site → always load media from the Laravel backend.
  return CMS_MEDIA_ORIGIN
}

function toStoragePath(pathOrUrl) {
  let pathname = String(pathOrUrl).trim()

  if (pathname.startsWith('http://') || pathname.startsWith('https://')) {
    try {
      const url = new URL(pathname)
      pathname = `${url.pathname}${url.search}`
    } catch {
      return null
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

  return pathname.startsWith('/storage/') ? pathname : null
}

/**
 * Always return a full URL for CMS images on deployed sites, e.g.
 * https://7sbd.7statespestcontrol.com.au/storage/cms/blog/file.webp
 */
export function cmsMediaUrl(pathOrUrl, fallback = '') {
  if (!pathOrUrl) return fallback

  const pathname = toStoragePath(pathOrUrl)
  if (!pathname) {
    const raw = String(pathOrUrl).trim()
    return raw || fallback
  }

  const origin = mediaOrigin()
  return origin ? `${origin}${pathname}` : pathname
}

/** Force every CMS <img> to use a full backend storage URL. */
export function rewriteCmsHtmlMedia(html) {
  if (!html) return html

  return html.replace(/<img\b([^>]*?)>/gi, (full, attrs) => {
    const dataIdMatch = attrs.match(/\bdata-id=["']([^"']+)["']/i)
    const srcMatch = attrs.match(/\bsrc=["']([^"']*)["']/i)
    const dataId = dataIdMatch?.[1]?.trim() || ''
    const src = srcMatch?.[1]?.trim() || ''

    const candidates = [src, dataId].filter(Boolean)
    let resolved = ''

    for (const candidate of candidates) {
      const url = cmsMediaUrl(candidate)
      if (url && (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/storage/'))) {
        resolved = url
        break
      }
    }

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
  if (value == null) return fallback
  if (typeof value === 'string' && value.trim() === '') return fallback
  return value
}
