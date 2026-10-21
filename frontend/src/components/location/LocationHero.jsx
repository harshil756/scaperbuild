import PhoneNumberInput from '../PhoneNumberInput.jsx'

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
  trustBadge,
  ctaPrimary = 'Get a free quote',
  ctaSecondary = 'Call now',
  phone = 'tel:+61434660060',
}) {
  const titleText = headline || `Pest control in ${locationName}, done right the first time.`
  const descText =
    subhead ||
    'Cockroaches, termites, rodents, spiders and bed bugs — gone, with an eco-friendly treatment plan built around your property, not a one-size-fits-all spray.'
  const badgeText = trustBadge || `4.9 rated 45+ ${locationName} reviews`

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
              <span>{badgeText}</span>
            </div>

            <h1 className="loc-hero-title">{titleText}</h1>

            <p className="loc-hero-subhead">{descText}</p>

            <div className="loc-hero-actions">
              <button
                type="button"
                className="loc-btn-primary"
                onClick={scrollToForm}
                id="hero-quote-cta"
              >
                {ctaPrimary}
              </button>
              <a href={phone} className="loc-btn-secondary" id="hero-call-cta">
                {ctaSecondary}
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

          {/* Exact same hero quote form as school-and-hospitality (elementor-702) */}
          <div className="loc-hero-quote elementor elementor-702">
            <div
              className="elementor-element elementor-element-2e06d80 e-con-full e-flex e-con e-child"
              data-element_type="container"
              data-id="2e06d80"
              data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"
            >
              <div
                className="elementor-element elementor-element-5a55322 elementor-widget elementor-widget-heading"
                data-element_type="widget"
                data-id="5a55322"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    Pest Control {locationName}
                  </h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-25b984a elementor-widget elementor-widget-heading"
                data-element_type="widget"
                data-id="25b984a"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">
                    Have an enquiry? Leave us your details and we&apos;ll call you back during business hours.
                  </h6>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-a9f17ba elementor-button-align-center elementor-widget elementor-widget-form"
                data-element_type="widget"
                data-id="a9f17ba"
                data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}"
                data-widget_type="form.default"
              >
                <div className="elementor-widget-container">
                  <form
                    aria-label="New Form"
                    className="elementor-form"
                    id="hero-quote-form"
                    method="post"
                    name="New Form"
                  >
                    <input name="post_id" type="hidden" defaultValue={9421} />
                    <input name="form_id" type="hidden" defaultValue="a9f17ba" />
                    <input
                      name="referer_title"
                      type="hidden"
                      defaultValue={`Pest Control ${locationName}`}
                    />
                    <input name="queried_id" type="hidden" defaultValue={9421} />
                    <div className="elementor-form-fields-wrapper elementor-labels-">
                      <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-first_name elementor-col-100 elementor-field-required">
                        <label className="elementor-field-label elementor-screen-only" htmlFor="loc-form-field-first_name">
                          Name
                        </label>
                        <input
                          className="elementor-field elementor-size-md elementor-field-textual"
                          id="loc-form-field-first_name"
                          name="form_fields[first_name]"
                          placeholder="Name"
                          required
                          type="text"
                        />
                      </div>
                      <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-user_email elementor-col-100 elementor-field-required">
                        <label className="elementor-field-label elementor-screen-only" htmlFor="loc-form-field-user_email">
                          Email
                        </label>
                        <input
                          className="elementor-field elementor-size-md elementor-field-textual"
                          id="loc-form-field-user_email"
                          name="form_fields[user_email]"
                          placeholder="Email"
                          required
                          type="email"
                        />
                      </div>
                      <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-mobile_number elementor-col-100 elementor-field-required">
                        <label className="elementor-field-label elementor-screen-only" htmlFor="loc-form-field-mobile_number">
                          Mobile Number
                        </label>
                        <PhoneNumberInput
                          id="loc-form-field-mobile_number"
                          name="form_fields[mobile_number]"
                          size="md"
                        />
                      </div>
                      <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-suburb elementor-col-100">
                        <label className="elementor-field-label elementor-screen-only" htmlFor="loc-form-field-suburb">
                          Suburb
                        </label>
                        <input
                          className="elementor-field elementor-size-md elementor-field-textual"
                          id="loc-form-field-suburb"
                          name="form_fields[suburb]"
                          placeholder="Suburb"
                          defaultValue={locationName}
                          type="text"
                        />
                      </div>
                      <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100 elementor-field-required">
                        <label className="elementor-field-label elementor-screen-only" htmlFor="loc-form-field-message">
                          Job description
                        </label>
                        <textarea
                          className="elementor-field-textual elementor-field elementor-size-md"
                          id="loc-form-field-message"
                          name="form_fields[message]"
                          placeholder="Job description"
                          required
                          rows={4}
                          defaultValue=""
                        />
                      </div>
                      <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                        <button className="elementor-button elementor-size-md" type="submit" id="hero-quote-submit">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Submit Quote</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
