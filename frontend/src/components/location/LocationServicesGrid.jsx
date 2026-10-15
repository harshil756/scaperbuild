import { Link } from 'react-router-dom'

// High-quality lightweight SVG icons for each pest service
function ServiceIcon({ type }) {
  switch (type) {
    case 'cockroach':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="14" rx="4" ry="6" />
          <path d="M12 8V4M9 5l3-2 3 2" />
          <path d="M8 12l-5-2M8 15l-6 1M8 17l-5 3M16 12l5-2M16 15l6 1M16 17l5 3" />
        </svg>
      )
    case 'termite':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="3" />
          <path d="M12 10v9M9 13l-4 2M9 17l-4 3M15 13l4 2M15 17l4 3" />
          <path d="M10 4L8 2M14 4l2-2" />
        </svg>
      )
    case 'rodent':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 13c0 3.3-2.7 6-6 6s-6-2.7-6-6a6 6 0 0 1 11.8-1.5" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <path d="M7 6a2 2 0 0 0-2 2M15 7a2 2 0 0 1 2 2" />
          <path d="M19 17c2 1 3 3 3 5" />
        </svg>
      )
    case 'spider':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M9 10L4 6M9 12L3 12M9 14L4 18M15 10l5-4M15 12l6 0M15 14l5 4" />
        </svg>
      )
    case 'bedbug':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="13" rx="5" ry="6" />
          <path d="M12 7V4M8 6l4-2 4 2" />
          <path d="M7 11L3 9M7 14L2 15M7 17L3 20M17 11l4-2M17 14l5 1M17 17l4 3" />
        </svg>
      )
    case 'ant':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="6" r="2" />
          <ellipse cx="12" cy="11" rx="2" ry="2.5" />
          <ellipse cx="12" cy="17" rx="3" ry="4" />
          <path d="M10 5L7 3M14 5l3-2M10 11H5M14 11h5M10 16l-4 3M14 16l4 3" />
        </svg>
      )
    case 'commercial':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M3 10h18M9 22V10M15 22V10" />
        </svg>
      )
    case 'preventative':
    default:
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
  }
}

export default function LocationServicesGrid({
  locationName = 'Melbourne',
  title,
  subtitle,
  services,
}) {
  const sectionTitle = title || `Pest treatments we offer in ${locationName}`
  const sectionSubtitle =
    subtitle || "Not sure what's causing the trouble? Tell us what you're seeing and we'll match it to the right treatment."

  const defaultServices = [
    {
      type: 'cockroach',
      name: 'Cockroach control',
      desc: 'We treat the warm, hidden spots roaches prefer, like behind the dishwasher, under sinks and around plumbing gaps, so the whole colony is dealt with.',
      url: '/our-services/cockroach-control',
    },
    {
      type: 'termite',
      name: 'Termite treatment',
      desc: 'We check timber, subfloors and roof voids for early activity, then protect your home before hidden damage turns into a costly repair.',
      url: '/our-services/termite-pest-control',
    },
    {
      type: 'rodent',
      name: 'Rodent control',
      desc: 'We remove rats and mice from ceilings and walls, then close up the gaps they used to get in, so they don’t return.',
      url: '/rodent-control-in-melbourne',
    },
    {
      type: 'spider',
      name: 'Spider control',
      desc: 'Web clearing and outdoor treatment for garages, patios and letterboxes, so you can use your space without checking every corner first.',
      url: '/our-services/spider-control-treatment',
    },
    {
      type: 'bedbug',
      name: 'Bed bug treatment',
      desc: 'A discreet service for family homes, rentals and holiday stays, with a return check to make sure every last bug is gone.',
      url: '/our-services/bed-bug-treatment',
    },
    {
      type: 'ant',
      name: 'Ant control',
      desc: 'We trace the trail back to the nest and treat it at the source, then add protection around doors, windows and garden edges.',
      url: '/our-services/ant-pest-control',
    },
    {
      type: 'commercial',
      name: 'Commercial pest control',
      desc: 'Regular visits for cafes, shops, offices and warehouses, planned around your trading hours, with records ready for audits.',
      url: '/commercial-pest-control',
    },
    {
      type: 'preventative',
      name: 'Preventative plans',
      desc: 'Scheduled visits through the year that catch small problems early and keep your property protected once the infestation is cleared.',
      url: '/contact-us',
    },
  ]

  const items = services || defaultServices

  return (
    <section className="loc-services-section" aria-label={`Pest Treatment Services in ${locationName}`}>
      <div className="loc-container">
        <div className="loc-section-header">
          <h2 className="loc-section-title">{sectionTitle}</h2>
          <p className="loc-section-subtitle">{sectionSubtitle}</p>
        </div>

        <div className="loc-services-grid">
          {items.map((srv, idx) => (
            <Link
              key={idx}
              to={srv.url}
              className="loc-service-card"
              title={`${srv.name} in ${locationName}`}
            >
              <div className="loc-service-icon-wrap" aria-hidden="true">
                <ServiceIcon type={srv.type} />
              </div>
              <h3 className="loc-service-name">{srv.name}</h3>
              <p className="loc-service-desc">{srv.desc}</p>
              <span className="loc-service-link">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
