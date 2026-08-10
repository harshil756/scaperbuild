import { BLOG_PAGE_META } from '../config/blogPageMeta.js'
import { BLOG_POST_PAGE_META } from '../config/blogPostPageMeta.js'
import { CONTACT_PAGE_META } from '../config/contactPageMeta.js'
import { COMMERCIAL_OFFICE_PAGE_META } from '../config/commercialOfficePageMeta.js'
import { SERVICE_PAGE_META } from '../config/servicePageMeta.js'
import { TERMS_PAGE_META } from '../config/termsPageMeta.js'
import { THANK_YOU_PAGE_META } from '../config/thankYouPageMeta.js'

/** Central page meta registry (no location suburbs — Melbourne office only). */
export const PAGE_META = {
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
  ...THANK_YOU_PAGE_META,
  ...TERMS_PAGE_META,
}
