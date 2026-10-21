import { useMemo } from 'react'
import usePageMeta from '../../hooks/usePageMeta.js'
import usePageCms from '../../hooks/usePageCms.js'
import { LOCATION_PAGE_META } from '../../config/locationPageMeta.js'
import { buildLocationJsonLd } from '../../config/siteSchemas.js'
import { pageKeyToSlug } from '../../utils/pageKeyToSlug.js'
import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'
import CmsHtml from '../home/CmsHtml.jsx'
import LocationHero from './LocationHero.jsx'
import LocationLocalInfo from './LocationLocalInfo.jsx'
import LocationWhyChooseUs from './LocationWhyChooseUs.jsx'
import LocationServicesGrid from './LocationServicesGrid.jsx'
import LocationProcessSteps from './LocationProcessSteps.jsx'
import LocationDetailedContent from './LocationDetailedContent.jsx'
import LocationReviewsSection from './LocationReviewsSection.jsx'
import LocationFaqSection from './LocationFaqSection.jsx'
import './locationPages.css'

function locationPathSlug(metaKey, locationName) {
  if (metaKey?.startsWith('location_') && metaKey !== 'location_archive') {
    return metaKey.slice('location_'.length).replace(/_/g, '-')
  }
  return String(locationName || '')
    .toLowerCase()
    .replace(/\s+/g, '-')
}

function cmsSlugForLocation(pathSlug) {
  return pathSlug ? `location-${pathSlug}` : null
}

function textRows(rows, fallback = []) {
  if (!Array.isArray(rows) || rows.length === 0) return fallback
  const out = rows
    .map((row) => (typeof row === 'string' ? row : row?.text))
    .filter((t) => typeof t === 'string' && t.trim() !== '')
  return out.length ? out : fallback
}

export default function LocationPageLayout({
  metaKey,
  locationName,
  heroHeadline,
  heroSubhead,
  heroStats,
  localHeading,
  localLeadParagraphs,
  signsTitle,
  signsSubtitle,
  signsList,
  infographicPoints,
  whyHeading,
  whyParagraphs,
  whyTrustSubtext,
  whyBenefits,
  servicesTitle,
  servicesSubtitle,
  services,
  detailedTitle,
  previewContent,
  expandedContent,
  faqs,
}) {
  const pathSlug = locationPathSlug(metaKey, locationName)
  const { page, content: c } = usePageCms(cmsSlugForLocation(pathSlug))
  const meta = metaKey ? LOCATION_PAGE_META[metaKey] : null

  const resolvedName = cmsText(c?.location_name, locationName)
  const resolvedHeadline = cmsText(c?.hero?.headline, heroHeadline)
  const resolvedSubhead = cmsText(c?.hero?.subhead, heroSubhead)
  const resolvedStats =
    Array.isArray(c?.hero?.stats) && c.hero.stats.length > 0 ? c.hero.stats : heroStats
  const resolvedLocalHeading = cmsText(c?.local?.heading, localHeading)
  const resolvedLocalParas = textRows(c?.local?.paragraphs, localLeadParagraphs)
  const resolvedSignsTitle = cmsText(c?.local?.signs_title, signsTitle)
  const resolvedSignsSubtitle = cmsText(c?.local?.signs_subtitle, signsSubtitle)
  const resolvedSignsList = textRows(c?.local?.signs_list, signsList)
  const resolvedLocalImage = cmsMediaUrl(
    c?.local?.image_url || c?.local?.image,
    '/assets/images/termites_2-768x512_d9cc54a4.jpg',
  )
  const resolvedLocalImageAlt = cmsText(
    c?.local?.image_alt,
    'Termite inspection and treatment in Australia',
  )
  const resolvedInfographicPoints =
    Array.isArray(c?.local?.infographic_points) && c.local.infographic_points.length > 0
      ? c.local.infographic_points
      : infographicPoints
  const resolvedWhyHeading = cmsText(c?.why?.heading, whyHeading)
  const resolvedWhyParas = textRows(c?.why?.paragraphs, whyParagraphs)
  const resolvedTrust = cmsText(c?.why?.trust_subtext, whyTrustSubtext)
  const resolvedBenefits =
    Array.isArray(c?.why?.benefits) && c.why.benefits.length > 0
      ? c.why.benefits
      : whyBenefits
  const resolvedServicesTitle = cmsText(c?.services?.title, servicesTitle)
  const resolvedServicesSubtitle = cmsText(c?.services?.subtitle, servicesSubtitle)
  const resolvedServices =
    Array.isArray(c?.services?.items) && c.services.items.length > 0
      ? c.services.items
      : services
  const resolvedProcessTitle = cmsText(c?.process?.title, 'How a treatment works')
  const resolvedProcessSubtitle = cmsText(
    c?.process?.subtitle,
    'Four steps from first call to a pest-free property.',
  )
  const resolvedProcessSteps =
    Array.isArray(c?.process?.steps) && c.process.steps.length > 0 ? c.process.steps : undefined
  const resolvedDetailedTitle = cmsText(c?.detailed?.title, detailedTitle)
  const hasCmsDetailed = Boolean(c?.detailed?.preview_html || c?.detailed?.expanded_html)
  const resolvedFaqs =
    Array.isArray(c?.faqs) && c.faqs.length > 0 ? c.faqs : faqs

  const seoOverride = useMemo(() => {
    if (!metaKey) return null
    return {
      title: page?.seo_title || meta?.title || undefined,
      description: page?.seo_description || meta?.description || undefined,
      canonical: `https://7statespestcontrol.com.au/${pageKeyToSlug(metaKey)}/`,
      jsonLd: buildLocationJsonLd({
        locationName: resolvedName,
        pathSlug,
        description: page?.seo_description || meta?.description || '',
        faqs: resolvedFaqs || [],
      }),
    }
  }, [
    metaKey,
    resolvedName,
    pathSlug,
    meta?.title,
    meta?.description,
    page?.seo_title,
    page?.seo_description,
    resolvedFaqs,
  ])

  usePageMeta(metaKey || 'location_archive', null, seoOverride)

  return (
    <div className="loc-page-wrapper">
      <LocationHero
        locationName={resolvedName}
        headline={resolvedHeadline}
        subhead={resolvedSubhead}
        stats={resolvedStats}
        trustBadge={cmsText(c?.hero?.trust_badge, undefined)}
        ctaPrimary={cmsText(c?.hero?.cta_primary, 'Get a free quote')}
        ctaSecondary={cmsText(c?.hero?.cta_secondary, 'Call now')}
      />

      <LocationLocalInfo
        heading={resolvedLocalHeading}
        leadParagraphs={resolvedLocalParas}
        signsTitle={resolvedSignsTitle}
        signsSubtitle={resolvedSignsSubtitle}
        signsList={resolvedSignsList}
        imageSrc={resolvedLocalImage}
        imageAlt={resolvedLocalImageAlt}
        infographicTag={cmsText(c?.local?.infographic_tag, undefined)}
        infographicTitle={cmsText(c?.local?.infographic_title, undefined)}
        infographicNote={cmsText(c?.local?.infographic_note, undefined)}
        infographicPoints={resolvedInfographicPoints}
      />

      <LocationWhyChooseUs
        locationName={resolvedName}
        heading={resolvedWhyHeading}
        paragraphs={resolvedWhyParas}
        trustSubtext={resolvedTrust}
        benefits={resolvedBenefits}
      />

      <LocationServicesGrid
        locationName={resolvedName}
        title={resolvedServicesTitle}
        subtitle={resolvedServicesSubtitle}
        services={resolvedServices}
      />

      <LocationProcessSteps
        title={resolvedProcessTitle}
        subtitle={resolvedProcessSubtitle}
        steps={resolvedProcessSteps}
      />

      <LocationDetailedContent
        title={resolvedDetailedTitle}
        previewContent={
          hasCmsDetailed ? (
            <CmsHtml html={c?.detailed?.preview_html} rewriteMedia />
          ) : (
            previewContent
          )
        }
        expandedContent={
          hasCmsDetailed ? (
            c?.detailed?.expanded_html ? (
              <CmsHtml html={c.detailed.expanded_html} rewriteMedia />
            ) : null
          ) : (
            expandedContent
          )
        }
      />

      <LocationReviewsSection
        ratingText={cmsText(c?.reviews?.rating_text, 'EXCELLENT')}
        reviewCountText={cmsText(c?.reviews?.count_text, 'Based on 45 reviews')}
      />

      <LocationFaqSection faqs={resolvedFaqs} injectJsonLd={false} />
    </div>
  )
}
