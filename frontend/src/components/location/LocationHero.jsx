import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneNumberInput from '../PhoneNumberInput.jsx'
import { submitLead } from '../../utils/submitLead.js'

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
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const titleText = headline || `Pest control in ${locationName}, done right the first time.`
  const descText =
    subhead ||
    'Cockroaches, termites, rodents, spiders and bed bugs — gone, with an eco-friendly treatment plan built around your property, not a one-size-fits-all spray.'

  async function handleFormSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      const result = await submitLead(e.target)
      e.target.reset()
      const redirect = result?.data?.redirect_url || '/thank-you'
      navigate(redirect)
    } catch (err) {
      setError(err?.message || 'Something went wrong. Please check your details and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  function scrollToForm() {
    const el = document.getElementById('hero-quote-form')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      const firstInput = el.querySelector('input')
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
            <h2 className="loc-card-title">Get your free quote</h2>
            <p className="loc-card-subtitle">{locationName} technicians available this week.</p>

            {error && <div className="loc-form-error" role="alert">{error}</div>}

            <form
              id="hero-quote-form"
              className="elementor-form"
              method="post"
              onSubmit={handleFormSubmit}
              noValidate
            >
              <input type="hidden" name="form_fields[suburb]" value={locationName} />
              <input type="hidden" name="referer_title" value={`Pest Control ${locationName}`} />

              <div className="loc-form-group">
                <label className="loc-form-label" htmlFor="hero-name">
                  Name
                </label>
                <input
                  id="hero-name"
                  name="form_fields[name]"
                  type="text"
                  className="loc-form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="loc-form-group">
                <label className="loc-form-label" htmlFor="hero-phone">
                  Phone
                </label>
                <PhoneNumberInput
                  id="hero-phone"
                  name="form_fields[mobile_number]"
                  placeholder="04xx xxx xxx"
                  required
                  className="loc-form-input"
                />
              </div>

              <div className="loc-form-group">
                <label className="loc-form-label" htmlFor="hero-issue">
                  What&apos;s the issue?
                </label>
                <select
                  id="hero-issue"
                  name="form_fields[message]"
                  className="loc-form-select"
                  defaultValue="Cockroaches"
                  required
                >
                  <option value="Cockroaches">Cockroaches</option>
                  <option value="Termites">Termites</option>
                  <option value="Rodents">Rodents (Rats / Mice)</option>
                  <option value="Spiders">Spiders</option>
                  <option value="Bed bugs">Bed bugs</option>
                  <option value="Ants">Ants</option>
                  <option value="Wasps">Wasps</option>
                  <option value="Commercial pest control">Commercial pest control</option>
                  <option value="General pest control">General pest control</option>
                </select>
              </div>

              <button
                type="submit"
                className="loc-form-btn"
                id="hero-quote-submit"
                disabled={submitting}
              >
                {submitting ? 'Submitting…' : 'Request free quote'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
