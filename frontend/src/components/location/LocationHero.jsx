import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneNumberInput from '../PhoneNumberInput.jsx'
import { submitLead } from '../../utils/submitLead.js'
import {
  PHONE_DIGITS_LENGTH,
  isValidPhoneNumber,
  normalizePhoneDigits,
} from '../../utils/phoneNumber.js'

// Form field key -> element id, in on-screen order (used to focus the first invalid field).
const FIELD_IDS = {
  name: 'hero-name',
  email: 'hero-email',
  phone: 'hero-phone',
  issue: 'hero-issue',
}

const INPUT_NAME_TO_FIELD = {
  'form_fields[name]': 'name',
  'form_fields[email]': 'email',
  'form_fields[mobile_number]': 'phone',
  'form_fields[message]': 'issue',
}

// /api/leads payload key -> form field key.
const API_FIELD_TO_FIELD = {
  name: 'name',
  email: 'email',
  phone: 'phone',
  message: 'issue',
}

function validateHeroForm(form) {
  const errors = {}
  const name = form.elements.namedItem('form_fields[name]')
  const email = form.elements.namedItem('form_fields[email]')
  const phone = form.elements.namedItem('form_fields[mobile_number]')

  if (!name.value.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!email.value.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (email.validity.typeMismatch) {
    errors.email = 'Please enter a valid email address.'
  }

  const phoneDigits = normalizePhoneDigits(phone.value)
  if (!phoneDigits) {
    errors.phone = 'Please enter your mobile number.'
  } else if (!isValidPhoneNumber(phoneDigits)) {
    errors.phone = `Please enter a valid ${PHONE_DIGITS_LENGTH}-digit mobile number.`
  }

  return errors
}

function focusFirstInvalid(errors) {
  const first = Object.keys(FIELD_IDS).find((field) => errors[field])
  if (first) {
    document.getElementById(FIELD_IDS[first])?.focus()
  }
}

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
  const [fieldErrors, setFieldErrors] = useState({})

  const titleText = headline || `Pest control in ${locationName}, done right the first time.`
  const descText =
    subhead ||
    'Cockroaches, termites, rodents, spiders and bed bugs — gone, with an eco-friendly treatment plan built around your property, not a one-size-fits-all spray.'

  async function handleFormSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setError('')

    const clientErrors = validateHeroForm(form)
    setFieldErrors(clientErrors)
    if (Object.keys(clientErrors).length > 0) {
      focusFirstInvalid(clientErrors)
      return
    }

    setSubmitting(true)

    try {
      const result = await submitLead(form)
      form.reset()
      const redirect = result?.data?.redirect_url || '/thank-you'
      navigate(redirect)
    } catch (err) {
      const serverFieldErrors = {}
      const otherMessages = []
      Object.entries(err?.fieldErrors || {}).forEach(([key, messages]) => {
        const message = [].concat(messages).join(' ')
        const field = API_FIELD_TO_FIELD[key]
        if (field) {
          serverFieldErrors[field] = message
        } else {
          otherMessages.push(message)
        }
      })

      if (Object.keys(serverFieldErrors).length > 0) {
        setFieldErrors(serverFieldErrors)
        setError(otherMessages.join(' '))
        focusFirstInvalid(serverFieldErrors)
      } else {
        setError(err?.message || 'Something went wrong. Please check your details and try again.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  function handleFieldInput(e) {
    const field = INPUT_NAME_TO_FIELD[e.target.name]
    if (field && fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  function fieldA11yProps(field) {
    return fieldErrors[field]
      ? { 'aria-invalid': 'true', 'aria-describedby': `${FIELD_IDS[field]}-error` }
      : {}
  }

  function renderFieldError(field) {
    return fieldErrors[field] ? (
      <p id={`${FIELD_IDS[field]}-error`} className="loc-form-field-error">
        {fieldErrors[field]}
      </p>
    ) : null
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
              onInput={handleFieldInput}
              noValidate
              data-react-submit
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
                  autoComplete="name"
                  required
                  {...fieldA11yProps('name')}
                />
                {renderFieldError('name')}
              </div>

              <div className="loc-form-group">
                <label className="loc-form-label" htmlFor="hero-email">
                  Email
                </label>
                <input
                  id="hero-email"
                  name="form_fields[email]"
                  type="email"
                  className="loc-form-input"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  {...fieldA11yProps('email')}
                />
                {renderFieldError('email')}
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
                  {...fieldA11yProps('phone')}
                />
                {renderFieldError('phone')}
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
                  {...fieldA11yProps('issue')}
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
                {renderFieldError('issue')}
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
