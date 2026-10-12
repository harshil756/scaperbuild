import usePageMeta from '../../hooks/usePageMeta.js'
import LocationHero from './LocationHero.jsx'
import LocationLocalInfo from './LocationLocalInfo.jsx'
import LocationWhyChooseUs from './LocationWhyChooseUs.jsx'
import LocationServicesGrid from './LocationServicesGrid.jsx'
import LocationProcessSteps from './LocationProcessSteps.jsx'
import LocationDetailedContent from './LocationDetailedContent.jsx'
import LocationReviewsSection from './LocationReviewsSection.jsx'
import LocationFaqSection from './LocationFaqSection.jsx'
import './locationPages.css'

export default function LocationPageLayout({
  metaKey,
  locationName,
  // Hero props
  heroHeadline,
  heroSubhead,
  heroStats,
  // Local Info props
  localHeading,
  localLeadParagraphs,
  signsTitle,
  signsSubtitle,
  signsList,
  infographicPoints,
  // Why Choose Us props
  whyHeading,
  whyParagraphs,
  whyTrustSubtext,
  whyBenefits,
  // Services Grid props
  servicesTitle,
  servicesSubtitle,
  services,
  // Detailed Content props
  detailedTitle,
  previewContent,
  expandedContent,
  // FAQs
  faqs,
}) {
  if (metaKey) {
    usePageMeta(metaKey)
  }

  return (
    <div className="loc-page-wrapper">
      <LocationHero
        locationName={locationName}
        headline={heroHeadline}
        subhead={heroSubhead}
        stats={heroStats}
      />

      <LocationLocalInfo
        heading={localHeading}
        leadParagraphs={localLeadParagraphs}
        signsTitle={signsTitle}
        signsSubtitle={signsSubtitle}
        signsList={signsList}
        infographicPoints={infographicPoints}
      />

      <LocationWhyChooseUs
        locationName={locationName}
        heading={whyHeading}
        paragraphs={whyParagraphs}
        trustSubtext={whyTrustSubtext}
        benefits={whyBenefits}
      />

      <LocationServicesGrid
        locationName={locationName}
        title={servicesTitle}
        subtitle={servicesSubtitle}
        services={services}
      />

      <LocationProcessSteps />

      <LocationDetailedContent
        title={detailedTitle}
        previewContent={previewContent}
        expandedContent={expandedContent}
      />

      <LocationReviewsSection />

      <LocationFaqSection faqs={faqs} />
    </div>
  )
}
