import { useEffect } from 'react'
import { applyPageSeo, restorePageSeo } from '../utils/applyPageSeo.js'
import { resolvePageSeo } from '../utils/resolvePageSeo.js'

export default function usePageMeta(pageKey, cmsPage = null) {
  useEffect(() => {
    const seo = resolvePageSeo(pageKey, cmsPage)
    if (!seo?.title) return undefined

    const state = applyPageSeo(
      { title: seo.title, description: seo.description, bodyClass: seo.bodyClass },
      {
        canonical: seo.canonical,
        robots: seo.robots,
        og: seo.og,
        twitter: seo.twitter,
        jsonLd: seo.jsonLd,
      },
    )

    return () => restorePageSeo(state)
  }, [pageKey, cmsPage])
}
