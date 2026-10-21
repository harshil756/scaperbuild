/** Site-wide JSON-LD schemas for 7 States Pest Control. */
export const SITE_ORIGIN = 'https://7statespestcontrol.com.au'
export const SITE_LOGO =
  'https://7statespestcontrol.com.au/wp-content/uploads/2025/06/7-states-logo-1.png-1.webp'
export const SITE_PHONE = '+61 434 660 060'

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '7 States Pest Control',
  url: `${SITE_ORIGIN}/`,
  logo: SITE_LOGO,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE_PHONE,
    contactType: 'customer service',
    areaServed: 'AU',
    availableLanguage: 'en',
  },
  sameAs: [
    'https://www.facebook.com/7statespestcontrol',
    'https://www.instagram.com/7statespestcontrol',
  ],
}

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org/',
  '@type': 'LocalBusiness',
  name: '7 States Pest Control',
  image: SITE_LOGO,
  url: `${SITE_ORIGIN}/`,
  logo: SITE_LOGO,
  description:
    '7 States Pest Control offers professional pest control services in Melbourne including possum removal, rodent control, wasp nest removal, bird proofing, and more.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '22 Navigation Rd, Tarneit VIC 3029',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    postalCode: '3029',
    addressCountry: 'Australia',
  },
  telephone: SITE_PHONE,
  priceRange: '$$',
  pros: [
    'Certified and experienced pest control technicians',
    'Safe and eco-friendly treatment methods',
    'Wide range of services including possum, rodent, bird, and wasp control',
    '24/7 emergency pest removal support',
    'Affordable pricing with guaranteed results',
  ],
  cons: [
    'Availability may be limited during peak seasons',
    'Some specialized treatments may require multiple visits',
    'Emergency services can have additional charges',
  ],
}

export const PEST_CONTROL_SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'PestControlService',
  name: '7 States Pest Control - Pest Control in Melbourne',
  image: [
    'https://7statespestcontrol.com.au/wp-content/uploads/2024/01/logo.png',
    SITE_LOGO,
  ],
  '@id': `${SITE_ORIGIN}/#business`,
  url: `${SITE_ORIGIN}/`,
  logo: SITE_LOGO,
  telephone: SITE_PHONE,
  priceRange: '$$',
  description:
    '7 States Pest Control provides professional pest control in Melbourne including wasp nest removal, rodent control, spider treatment, bed bug removal, bird proofing, and more. Safe, eco-friendly & affordable pest control with 24/7 support.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '22 Navigation Rd, Tarneit VIC 3029',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    postalCode: '3029',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -37.8136,
    longitude: 144.9631,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/7statespestcontrol',
    'https://www.instagram.com/7statespestcontrol',
  ],
  serviceType: [
    'Wasp Nest Removal Melbourne',
    'Rodent Control Melbourne',
    'Spider Control Treatment Melbourne',
    'Bed Bug Treatment Melbourne',
    'Bird Proofing Melbourne',
  ],
}

export const PRODUCT_AGGREGATE_RATING_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: '7 States Pest Control Services',
  image: 'https://7statespestcontrol.com.au/wp-content/uploads/2024/01/logo.png',
  description:
    'Professional pest control services in Melbourne – including wasp, rodent, spider, bed bug and bird removal.',
  brand: {
    '@type': 'Brand',
    name: '7 States Pest Control',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '327',
  },
}

export const HOME_FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you provide same-day pest control in Melbourne?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, 7 States Pest Control provides same-day pest removal services across Melbourne for emergencies such as wasp nests, rodents, and spiders.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your pest treatments safe for kids and pets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all our pest treatments are eco-friendly and safe for children and pets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which areas in Melbourne do you service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide pest control services across all Melbourne suburbs including Tarneit, Werribee, Hoppers Crossing, Point Cook, and CBD.',
      },
    },
  ],
}

export const SITE_WIDE_SCHEMAS = [
  ORGANIZATION_SCHEMA,
  LOCAL_BUSINESS_SCHEMA,
  PEST_CONTROL_SERVICE_SCHEMA,
  PRODUCT_AGGREGATE_RATING_SCHEMA,
]

/**
 * Build location-page JSON-LD (LocalBusiness + FAQPage) for head injection.
 */
export function buildLocationJsonLd({ locationName, pathSlug, description, faqs = [] }) {
  const url = `${SITE_ORIGIN}/location/${pathSlug}/`
  const graph = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: `Pest Control ${locationName} - Expert Pest Removal Services`,
      description:
        description ||
        `Professional pest control in ${locationName}. Safe, fast treatments for homes and businesses.`,
      isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
      about: { '@id': `${SITE_ORIGIN}/#business` },
      breadcrumb: { '@id': `${url}#breadcrumb` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_ORIGIN}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Locations',
          item: `${SITE_ORIGIN}/location/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: locationName,
          item: url,
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${url}#localbusiness`,
      name: `7 States Pest Control - ${locationName}`,
      image: SITE_LOGO,
      url,
      telephone: SITE_PHONE,
      priceRange: '$$',
      description:
        description ||
        `7 States Pest Control provides professional pest control services in ${locationName}.`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: locationName,
        addressRegion: 'VIC',
        addressCountry: 'AU',
      },
      areaServed: {
        '@type': 'City',
        name: locationName,
      },
      parentOrganization: { '@id': `${SITE_ORIGIN}/#organization` },
    },
  ]

  if (faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            typeof faq.answer === 'string'
              ? faq.answer
              : faq.answerText || faq.question,
        },
      })),
    })
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  })
}

export function buildBlogPostingSchema({
  headline,
  description,
  url,
  image = SITE_LOGO,
  datePublished,
  dateModified,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    url,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: '7 States Pest Control',
      url: `${SITE_ORIGIN}/`,
    },
    publisher: {
      '@type': 'Organization',
      name: '7 States Pest Control',
      logo: {
        '@type': 'ImageObject',
        url: SITE_LOGO,
      },
    },
  }
}
