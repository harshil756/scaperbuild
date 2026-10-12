import PhoneNumberInput from './PhoneNumberInput.jsx'

export default function QuotePopupForm({ postId, formId, idPrefix }) {
  return (
    <form aria-label="New Form" className="elementor-form" id={`${idPrefix}_contact_form`} method="post" name="New Form">
      <input name="post_id" type="hidden" defaultValue={postId} />
      <input name="form_id" type="hidden" defaultValue={formId} />
      <input name="referer_title" type="hidden" defaultValue="Pest Control Melbourne | Pest Exterminator & Removal Services" />
      <input name="queried_id" type="hidden" defaultValue={14} />
      <div className="elementor-form-fields-wrapper elementor-labels-">
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100 elementor-field-required">
          <label className="elementor-field-label elementor-screen-only" htmlFor={`${idPrefix}-name`}>
            Name
          </label>
          <input
            className="elementor-field elementor-size-lg elementor-field-textual"
            id={`${idPrefix}-name`}
            name="form_fields[name]"
            placeholder="Name"
            required
            size={1}
            type="text"
          />
        </div>
        <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-user_email elementor-col-100 elementor-field-required">
          <label className="elementor-field-label elementor-screen-only" htmlFor={`${idPrefix}-email`}>
            Email
          </label>
          <input
            className="elementor-field elementor-size-lg elementor-field-textual"
            id={`${idPrefix}-email`}
            name="form_fields[user_email]"
            placeholder="Email"
            required
            size={1}
            type="email"
          />
        </div>
        <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-mobile_number elementor-col-100 elementor-field-required">
          <label className="elementor-field-label elementor-screen-only" htmlFor={`${idPrefix}-mobile`}>
            Mobile Number
          </label>
          <PhoneNumberInput
            id={`${idPrefix}-mobile`}
            name="form_fields[mobile_number]"
            size="lg"
          />
        </div>
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-suburb elementor-col-100">
          <label className="elementor-field-label elementor-screen-only" htmlFor={`${idPrefix}-suburb`}>
            Suburb
          </label>
          <input
            className="elementor-field elementor-size-lg elementor-field-textual"
            id={`${idPrefix}-suburb`}
            name="form_fields[suburb]"
            placeholder="Suburb"
            size={1}
            type="text"
          />
        </div>
        <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100 elementor-field-required">
          <label className="elementor-field-label elementor-screen-only" htmlFor={`${idPrefix}-message`}>
            Job description
          </label>
          <textarea
            className="elementor-field-textual elementor-field elementor-size-lg"
            id={`${idPrefix}-message`}
            name="form_fields[message]"
            placeholder="Job description"
            required
            rows={4}
          />
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
  )
}
