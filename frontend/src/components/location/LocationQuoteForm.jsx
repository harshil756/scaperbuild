import PhoneNumberInput from '../PhoneNumberInput.jsx'

/**
 * Same "Get A Free Quote Now!" form used on the Home / About / service pages.
 * Wrapped in `.elementor-16` so the About page's Elementor form styles apply;
 * submission is handled globally by FormSubmissionHandler.
 */
export default function LocationQuoteForm({ locationName, formId = 'hero-quote-form' }) {
  return (
    <div className="elementor-16 loc-quote-form">
      <div className="elementor-element elementor-element-6a17c27 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
        <div className="elementor-widget-container">
          <h2 className="elementor-heading-title elementor-size-default">Get A Free Quote Now!</h2>
        </div>
      </div>
      <div className="elementor-element elementor-element-7f49099 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
        <div className="elementor-widget-container">
          <h6 className="elementor-heading-title elementor-size-default">
            Have an enquiry? Leave us your details and we’ll call you back during business hours.
          </h6>
        </div>
      </div>
      <div className="elementor-element elementor-element-03c7402 elementor-button-align-center elementor-widget elementor-widget-form" data-widget_type="form.default">
        <div className="elementor-widget-container">
          <form aria-label="New Form" className="elementor-form" id={formId} method="post" name="New Form">
            <input name="form_id" type="hidden" defaultValue="03c7402" />
            <input name="referer_title" type="hidden" defaultValue={`Pest Control ${locationName}`} />
            <div className="elementor-form-fields-wrapper elementor-labels-">
              <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-first_name elementor-col-100 elementor-field-required">
                <label className="elementor-field-label elementor-screen-only" htmlFor={`${formId}-name`}>
                  Name
                </label>
                <input className="elementor-field elementor-size-md elementor-field-textual" id={`${formId}-name`} name="form_fields[first_name]" placeholder="Name" required type="text" />
              </div>
              <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-user_email elementor-col-100 elementor-field-required">
                <label className="elementor-field-label elementor-screen-only" htmlFor={`${formId}-email`}>
                  Email
                </label>
                <input className="elementor-field elementor-size-md elementor-field-textual" id={`${formId}-email`} name="form_fields[user_email]" placeholder="Email" required type="email" />
              </div>
              <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-mobile_number elementor-col-100 elementor-field-required">
                <label className="elementor-field-label elementor-screen-only" htmlFor={`${formId}-mobile`}>
                  Mobile Number
                </label>
                <PhoneNumberInput id={`${formId}-mobile`} name="form_fields[mobile_number]" size="md" />
              </div>
              <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-suburb elementor-col-100">
                <label className="elementor-field-label elementor-screen-only" htmlFor={`${formId}-suburb`}>
                  Suburb
                </label>
                <input className="elementor-field elementor-size-md elementor-field-textual" id={`${formId}-suburb`} name="form_fields[suburb]" placeholder="Suburb" type="text" defaultValue={locationName} />
              </div>
              <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100 elementor-field-required">
                <label className="elementor-field-label elementor-screen-only" htmlFor={`${formId}-message`}>
                  Job description
                </label>
                <textarea className="elementor-field-textual elementor-field elementor-size-md" id={`${formId}-message`} name="form_fields[message]" placeholder="Job description" required rows={4} defaultValue="" />
              </div>
              <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                <button className="elementor-button elementor-size-md" type="submit">
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
  )
}
