export function pageKeyToSlug(pageKey) {
  if (pageKey === 'home') return 'home'
  if (pageKey === 'about') return 'about-us'
  if (pageKey === 'blog') return 'blog'
  if (pageKey === 'contact_us') return 'contact-us'
  if (pageKey === 'thank_you') return 'thank-you'
  if (pageKey === 'terms_and_conditions') return 'terms-and-conditions'
  if (pageKey.startsWith('post_')) return pageKey.slice(5).replace(/_/g, '-')
  return pageKey.replace(/_/g, '-')
}
