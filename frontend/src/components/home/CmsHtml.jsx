import { rewriteCmsHtmlMedia } from '../../utils/cmsMedia.js'

export default function CmsHtml({ html, className, as: Tag = 'div', rewriteMedia = false }) {
  if (!html) return null

  const safeHtml = rewriteMedia ? rewriteCmsHtmlMedia(html) : html

  return <Tag className={className} dangerouslySetInnerHTML={{ __html: safeHtml }} />
}
