import useSiteContact from '../../hooks/useSiteContact.jsx'
import { rewriteSiteContactHtml } from '../../config/siteContact.js'
import { rewriteCmsHtmlMedia } from '../../utils/cmsMedia.js'

export default function CmsHtml({ html, className, as: Tag = 'div', rewriteMedia = false }) {
  const contact = useSiteContact()

  if (!html) return null

  let safeHtml = rewriteSiteContactHtml(html, contact)
  if (rewriteMedia) {
    safeHtml = rewriteCmsHtmlMedia(safeHtml)
  }

  return <Tag className={className} dangerouslySetInnerHTML={{ __html: safeHtml }} />
}
