import { useEffect } from 'react'
import { BLOG_PAGE_META } from '../config/blogPageMeta.js'
import { BLOG_POST_PAGE_META } from '../config/blogPostPageMeta.js'
import { CONTACT_PAGE_META } from '../config/contactPageMeta.js'
import { COMMERCIAL_OFFICE_PAGE_META } from '../config/commercialOfficePageMeta.js'
import { SERVICE_PAGE_META } from '../config/servicePageMeta.js'

const PAGE_META = {
  home: {
    title: 'Pest Control Melbourne | Pest Exterminator & Removal Services',
    description:
      'Pest control Melbourne & pest removal Melbourne experts. Pest exterminator Melbourne, pest control Melbourne CBD & pest control service in Melbourne.',
    bodyClass:
      'home wp-singular page-template page-template-elementor_header_footer page page-id-14 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor elementor-default elementor-template-full-width elementor-kit-9 elementor-page elementor-page-14',
  },
  about: {
    title: "Australia's No.1 Pest Control Company | 7 States Pest Control",
    description:
      'Melbourne #1 Pest Control Company: Say goodbye to unwanted guests! We offer fast, effective solutions for all pests. Free Quotes. Call Now!',
    bodyClass:
      'wp-singular page-template page-template-elementor_header_footer page page-id-16 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor elementor-default elementor-template-full-width elementor-kit-9 elementor-page elementor-page-16',
  },
  ...SERVICE_PAGE_META,
  ...COMMERCIAL_OFFICE_PAGE_META,
  ...BLOG_PAGE_META,
  ...BLOG_POST_PAGE_META,
  ...CONTACT_PAGE_META,
}

export default function usePageMeta(pageKey) {
  useEffect(() => {
    const meta = PAGE_META[pageKey]
    if (!meta) return undefined

    const previousTitle = document.title
    const previousBodyClass = document.body.className
    const descriptionTag = document.querySelector('meta[name="description"]')
    const previousDescription = descriptionTag?.getAttribute('content') ?? ''

    document.title = meta.title
    document.body.className = meta.bodyClass
    if (descriptionTag) {
      descriptionTag.setAttribute('content', meta.description)
    }

    return () => {
      document.title = previousTitle
      document.body.className = previousBodyClass
      if (descriptionTag) {
        descriptionTag.setAttribute('content', previousDescription)
      }
    }
  }, [pageKey])
}
