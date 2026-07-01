/**
 * Registry of pest-control service pages for CMS extract/seed.
 * Ant pest control uses its own dedicated mapper (already done).
 */
export const SERVICE_PAGES = [
  {
    slug: 'our-services',
    title: 'Pest Control Services',
    seoKey: 'our_services',
    jsxPath: 'frontend/src/pages/services/OurServicesPage.jsx',
    elementorId: 7780,
    template: 'generic',
  },
  {
    slug: 'our-services-bed-bug-treatment',
    title: 'Bed Bug Treatment',
    seoKey: 'our-services-bed-bug-treatment',
    jsxPath: 'frontend/src/pages/services/OurServicesBedBugTreatmentPage.jsx',
    elementorId: 714,
    template: 'generic',
  },
  {
    slug: 'our-services-cockroach-control',
    title: 'Cockroach Control',
    seoKey: 'our-services-cockroach-control',
    jsxPath: 'frontend/src/pages/services/OurServicesCockroachControlPage.jsx',
    elementorId: 716,
    template: 'generic',
  },
  {
    slug: 'our-services-mosquito-pest-control',
    title: 'Mosquito Pest Control',
    seoKey: 'our-services-mosquito-pest-control',
    jsxPath: 'frontend/src/pages/services/OurServicesMosquitoPestControlPage.jsx',
    elementorId: 1463,
    template: 'generic',
  },
  {
    slug: 'our-services-fly-control',
    title: 'Fly Control',
    seoKey: 'our-services-fly-control',
    jsxPath: 'frontend/src/pages/services/OurServicesFlyControlPage.jsx',
    elementorId: 1544,
    template: 'generic',
  },
  {
    slug: 'our-services-fox-pest-control-in-melbourne',
    title: 'Fox Pest Control',
    seoKey: 'our-services-fox-pest-control-in-melbourne',
    jsxPath: 'frontend/src/pages/services/OurServicesFoxPestControlInMelbournePage.jsx',
    elementorId: 9877,
    template: 'generic',
  },
  {
    slug: 'our-services-mites-control',
    title: 'Mites Control',
    seoKey: 'our-services-mites-control',
    jsxPath: 'frontend/src/pages/services/OurServicesMitesControlPage.jsx',
    elementorId: 1569,
    template: 'generic',
  },
  {
    slug: 'our-services-moth-control',
    title: 'Moth Control',
    seoKey: 'our-services-moth-control',
    jsxPath: 'frontend/src/pages/services/OurServicesMothControlPage.jsx',
    elementorId: 1587,
    template: 'generic',
  },
  {
    slug: 'our-services-possum-pest-control',
    title: 'Possum Pest Control',
    seoKey: 'our-services-possum-pest-control',
    jsxPath: 'frontend/src/pages/services/OurServicesPossumPestControlPage.jsx',
    elementorId: 10278,
    template: 'generic',
  },
  {
    slug: 'our-services-silverfish-treatment',
    title: 'Silverfish Treatment',
    seoKey: 'our-services-silverfish-treatment',
    jsxPath: 'frontend/src/pages/services/OurServicesSilverfishTreatmentPage.jsx',
    elementorId: 1602,
    template: 'generic',
  },
  {
    slug: 'our-services-spider-control-treatment',
    title: 'Spider Control Treatment',
    seoKey: 'our-services-spider-control-treatment',
    jsxPath: 'frontend/src/pages/services/OurServicesSpiderControlTreatmentPage.jsx',
    elementorId: 1626,
    template: 'generic',
  },
  {
    slug: 'our-services-termite-pest-control',
    title: 'Termite Pest Control',
    seoKey: 'our-services-termite-pest-control',
    jsxPath: 'frontend/src/pages/services/OurServicesTermitePestControlPage.jsx',
    elementorId: 10357,
    template: 'generic',
  },
  {
    slug: 'our-services-end-of-lease-pest-control',
    title: 'End of Lease Pest Control',
    seoKey: 'our-services-end-of-lease-pest-control',
    jsxPath: 'frontend/src/pages/services/OurServicesEndOfLeasePestControlPage.jsx',
    elementorId: 1666,
    template: 'generic',
  },
  {
    slug: 'rodent-control-in-melbourne',
    title: 'Rodent Control Melbourne',
    seoKey: 'rodent-control-in-melbourne',
    jsxPath: 'frontend/src/pages/services/RodentControlInMelbournePage.jsx',
    elementorId: 1680,
    template: 'generic',
  },
  {
    slug: 'wasp-removal-melbourne',
    title: 'Wasp Removal Melbourne',
    seoKey: 'wasp-removal-melbourne',
    jsxPath: 'frontend/src/pages/services/WaspRemovalMelbournePage.jsx',
    elementorId: 1638,
    template: 'generic',
  },
]

export const COMMERCIAL_PAGES = [
  {
    slug: 'commercial-pest-control',
    title: 'Commercial Pest Control',
    seoKey: 'commercial-pest-control',
    jsxPath: 'frontend/src/pages/commercial/CommercialPestControlPage.jsx',
    elementorId: 694,
    template: 'commercial',
  },
  {
    slug: 'office-pest-control',
    title: 'Office Pest Control',
    seoKey: 'office-pest-control',
    jsxPath: 'frontend/src/pages/commercial/OfficePestControlPage.jsx',
    elementorId: 697,
    template: 'commercial',
  },
  {
    slug: 'restaurant-cafe-pest-control',
    title: 'Restaurant & Cafe Pest Control',
    seoKey: 'restaurant-cafe-pest-control',
    jsxPath: 'frontend/src/pages/commercial/RestaurantCafePestControlPage.jsx',
    elementorId: 700,
    template: 'commercial',
  },
  {
    slug: 'school-and-hospitality-facility-pest-control',
    title: 'School & Hospitality Facility Pest Control',
    seoKey: 'school-and-hospitality-facility-pest-control',
    jsxPath: 'frontend/src/pages/commercial/SchoolAndHospitalityFacilityPestControlPage.jsx',
    elementorId: 702,
    template: 'commercial',
  },
  {
    slug: 'warehouse-and-factory-pest-control-services-melbourne',
    title: 'Warehouse & Factory Pest Control Melbourne',
    seoKey: 'warehouse-and-factory-pest-control-services-melbourne',
    jsxPath: 'frontend/src/pages/commercial/WarehouseAndFactoryPestControlServicesMelbournePage.jsx',
    elementorId: 704,
    template: 'commercial',
  },
]

export const ALL_CMS_PAGES = [...SERVICE_PAGES, ...COMMERCIAL_PAGES]

export function findServicePage(slug) {
  return ALL_CMS_PAGES.find((p) => p.slug === slug)
}

export function cssPathForElementorId(id) {
  const glob = `post-${id}_`
  return `frontend/public/assets/css/${glob}`
}
