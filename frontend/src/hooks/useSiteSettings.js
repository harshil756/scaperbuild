import usePageCms from './usePageCms.js'

/** Site-wide CMS settings (logo, header sticky bar, footer copy). */
export default function useSiteSettings() {
  const { content, loading, error } = usePageCms('site-settings')
  return { settings: content, loading, error }
}
