import LocationQuoteForm from './LocationQuoteForm.jsx'

export default function LocationHero({
  locationName = 'Melbourne',
  headline,
  subhead,
  stats = [
    { value: '15+ yrs', label: 'Local experience' },
    { value: '100%', label: 'Licensed & insured' },
    { value: '24-48h', label: 'Response time' },
    { value: '45+', label: '5-star reviews' },
  ],
  phone = 'tel:+61434660060',
}) {
  const titleText = headline || `Pest control in ${locationName}, done right the first time.`
  const descText =
    subhead ||
    'Cockroaches, termites, rodents, spiders and bed bugs — gone, with an eco-friendly treatment plan built around your property, not a one-size-fits-all spray.'

  function scrollToForm() {
    const el = document.getElementById('hero-quote-form')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      const firstInput = el.querySelector('input:not([type="hidden"])')
      firstInput?.focus()
    }
  }

  return (
    <section className="loc-hero" aria-label={`Pest Control ${locationName} Hero`}>
      <div className="loc-container">
        <div className="loc-hero-grid">
          <div className="loc-hero-content">
            <div className="loc-trust-badge">
              <span className="loc-stars" aria-hidden="true">★★★★★</span>
              <span>4.9 rated 45+ {locationName} reviews</span>
            </div>

            <h1 className="loc-hero-title">
              {titleText}
            </h1>

            <p className="loc-hero-subhead">
              {descText}
            </p>

            <div className="loc-hero-actions">
              <button
                type="button"
                className="loc-btn-primary"
                onClick={scrollToForm}
                id="hero-quote-cta"
              >
                Get a free quote
              </button>
              <a
                href={phone}
                className="loc-btn-secondary"
                id="hero-call-cta"
              >
                Call now
              </a>
            </div>

            <div className="loc-hero-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="loc-stat-item">
                  <span className="loc-stat-val">{stat.value}</span>
                  <span className="loc-stat-lbl">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="loc-hero-card">
            <LocationQuoteForm locationName={locationName} />
          </div>
        </div>
      </div>
    </section>
  )
}
