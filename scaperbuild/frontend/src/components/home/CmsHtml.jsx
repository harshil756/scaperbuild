export default function CmsHtml({ html, className, as: Tag = 'div' }) {
  if (!html) return null

  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
