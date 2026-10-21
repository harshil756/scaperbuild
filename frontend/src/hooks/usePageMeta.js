import { useEffect } from 'react'
import { applyPageSeo, restorePageSeo } from '../utils/applyPageSeo.js'
import { resolvePageSeo } from '../utils/resolvePageSeo.js'

/**
 * @param {string} pageKey
 * @param {object|null} cmsPage
 * @param {object|null} overrides - optional SEO fields (canonical, jsonLd, title, …) that win last
 */
export default function usePageMeta(pageKey, cmsPage = null, overrides = null) {
  const overridesKey = overrides ? JSON.stringify(overrides) : ''

  useEffect(() => {
    const seo = resolvePageSeo(pageKey, cmsPage)
    if (!seo?.title && !overrides?.title) return undefined

    const merged = {
      ...seo,
      ...overrides,
      og: { ...(seo?.og ?? {}), ...(overrides?.og ?? {}) },
      twitter: { ...(seo?.twitter ?? {}), ...(overrides?.twitter ?? {}) },
    }

    const state = applyPageSeo(
      { title: merged.title, description: merged.description, bodyClass: merged.bodyClass },
      {
        canonical: merged.canonical,
        robots: merged.robots,
        og: merged.og,
        twitter: merged.twitter,
        jsonLd: merged.jsonLd,
      },
    )

    return () => restorePageSeo(state)
    // overridesKey stabilizes object identity from parents that rebuild props each render
  }, [pageKey, cmsPage, overrides, overridesKey])
}
