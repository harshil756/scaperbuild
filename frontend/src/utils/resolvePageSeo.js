import { PAGE_SEO_EXTRA } from '../config/pageSeoExtra.js'
import { PAGE_META } from '../config/pageMetaIndex.js'
import { mergeBodyClass } from './mergeBodyClass.js'
import { pageKeyToSlug } from './pageKeyToSlug.js'

const STATIC_SEO_KEY_TO_PAGE_KEY = {
  home: 'home',
  'about-us': 'about',
  blog: 'blog',
  'contact-us': 'contact_us',
  'thank-you': 'thank_you',
  'terms-and-conditions': 'terms_and_conditions',
}

/** Map a PAGE_SEO_EXTRA slug key to a PAGE_META page key. */
export function seoExtraKeyToPageKey(seoKey) {
  if (STATIC_SEO_KEY_TO_PAGE_KEY[seoKey]) return STATIC_SEO_KEY_TO_PAGE_KEY[seoKey]

  const underscored = seoKey.replace(/-/g, '_')
  if (PAGE_META[underscored]) return underscored

  const postKey = `post_${underscored}`
  if (PAGE_META[postKey]) return postKey

  return underscored
}

/**
 * Resolve merged SEO fields for a page (pure — safe at build time and in the browser).
 */
export function resolvePageSeo(pageKey, cmsPage = null) {
  const meta = PAGE_META[pageKey]
  const slug = cmsPage?.slug ?? pageKeyToSlug(pageKey)
  const seoExtra = PAGE_SEO_EXTRA[slug] ?? {}

  if (!meta && !seoExtra.title && !seoExtra.canonical) return null

  const merged = {
    title: meta?.title ?? seoExtra.title ?? '',
    description: meta?.description ?? seoExtra.description ?? '',
    bodyClass: mergeBodyClass(meta?.bodyClass ?? '', cmsPage?.body_class),
    ...(cmsPage?.seo_title ? { title: cmsPage.seo_title } : {}),
    ...(cmsPage?.seo_description ? { description: cmsPage.seo_description } : {}),
    ...seoExtra,
  }

  const description =
    merged.description || merged.og?.['og:description'] || meta?.description || ''

  return {
    title: merged.title,
    description,
    bodyClass: merged.bodyClass,
    canonical: merged.canonical,
    robots: merged.robots,
    og: merged.og ?? {},
    twitter: merged.twitter ?? {},
    jsonLd: merged.jsonLd,
  }
}
