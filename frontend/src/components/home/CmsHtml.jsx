import useSiteContact from '../../hooks/useSiteContact.jsx'
import { rewriteSiteContactHtml } from '../../config/siteContact.js'
import { rewriteCmsHtmlMedia } from '../../utils/cmsMedia.js'

function isCorruptCmsLiteral(value) {
  if (typeof value !== 'string') return false
  const trimmed = value.trim()
  return trimmed.startsWith('{cmsText(') || trimmed.startsWith('<CmsHtml')
}

/**
 * Render CMS HTML safely. Corrupt wire-script literals and empty values fall back
 * so service pages never blank out while the API loads or if a block is bad.
 */
export default function CmsHtml({
  html,
  fallback = '',
  className,
  as: Tag = 'div',
  rewriteMedia = false,
}) {
  const contact = useSiteContact()

  const resolved = isCorruptCmsLiteral(html) || html == null || html === ''
    ? fallback
    : html

  if (!resolved) return null

  let safeHtml = rewriteSiteContactHtml(resolved, contact)
  if (rewriteMedia) {
    safeHtml = rewriteCmsHtmlMedia(safeHtml)
  }

  return <Tag className={className} dangerouslySetInnerHTML={{ __html: safeHtml }} />
}
