import useSiteContact from '../../hooks/useSiteContact.jsx'
import { rewriteSiteContactHtml } from '../../config/siteContact.js'
import { rewriteCmsHtmlMedia } from '../../utils/cmsMedia.js'

function isCorruptCmsLiteral(value) {
  if (typeof value !== 'string') return false
  const trimmed = value.trim()
  return trimmed.startsWith('{cmsText(') || trimmed.startsWith('<CmsHtml')
}

/**
 * Render CMS HTML safely.
 * - null/undefined / corrupt literals → fallback (loading or missing field)
 * - empty string → intentional CMS clear (render nothing)
 */
export default function CmsHtml({
  html,
  fallback = '',
  className,
  as: Tag = 'div',
  rewriteMedia = false,
}) {
  const contact = useSiteContact()

  let resolved
  if (isCorruptCmsLiteral(html) || html == null) {
    resolved = fallback
  } else if (html === '') {
    resolved = ''
  } else {
    resolved = html
  }

  if (!resolved) return null

  let safeHtml = rewriteSiteContactHtml(resolved, contact)
  if (rewriteMedia) {
    safeHtml = rewriteCmsHtmlMedia(safeHtml)
  }

  return <Tag className={className} dangerouslySetInnerHTML={{ __html: safeHtml }} />
}
