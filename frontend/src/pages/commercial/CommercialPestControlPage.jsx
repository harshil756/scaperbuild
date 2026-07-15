import PhoneNumberInput from '../../components/PhoneNumberInput.jsx'
import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'
import usePageCms from '../../hooks/usePageCms.js'
import ServiceCmsContentBlocks from '../../components/service/ServiceCmsContentBlocks.jsx'
import ServiceCommercialSectionCms from '../../components/service/ServiceCommercialSectionCms.jsx'
import ServiceCmsStyles from '../../components/service/ServiceCmsStyles.jsx'
import CmsHtml from '../../components/home/CmsHtml.jsx'
import usePageMeta from '../../hooks/usePageMeta.js'
import { Link } from 'react-router-dom'

const DEFAULT_SERVICES = [
  {
    widget_id: 'c1a1001',
    title: 'Office Pest Control',
    link: '/office-pest-control',
    image: '/assets/images/people-disinfecting-biohazard-area-2048x1365-1_b73d3038.jpg',
    alt: 'Office Pest Control',
  },
  {
    widget_id: 'c1a1002',
    title: 'Restaurant & Cafe Pest Control',
    link: '/restaurant-cafe-pest-control',
    image: '/assets/images/403668_lrg_4575d8f9.jpg',
    alt: 'Restaurant Pest Control',
  },
  {
    widget_id: 'c1a1003',
    title: 'School & Hospitality Facility Pest Control',
    link: '/school-and-hospitality-facility-pest-control',
    image: '/assets/images/full-shot-man-disinfecting-2048x1463-1_e0f8ca72.jpg',
    alt: 'School Pest Control',
  },
  {
    widget_id: 'c1a1004',
    title: 'Warehouse & Factory Pest Control',
    link: '/warehouse-and-factory-pest-control-services-melbourne',
    image: '/assets/images/Warehouse-and-Factory-Pest-Control-1-scaled-e1713605409_8c99f44b.jpg',
    alt: 'Warehouse Pest Control',
  },
]

const DEFAULT_INTRO = `<p>Protect your business reputation with professional commercial pest control in Melbourne. 7 States Pest Control delivers tailored pest management for offices, restaurants, schools, hospitals, warehouses and factories — keeping your workplace safe, compliant and pest-free.</p><p>From proactive prevention to full-scale treatment, our licensed technicians work around your schedule with discreet, effective solutions designed for commercial environments.</p>`

function ServiceCard({ widgetId, title, path, image, alt }) {
  return (
    <div
      className={`elementor-element elementor-element-${widgetId}-wrap e-con-full e-flex e-con e-child commercial-service-grid-cell`}
      data-element_type="container"
      data-id={`${widgetId}-wrap`}
    >
      <div
        className={`elementor-element elementor-element-${widgetId} ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box`}
        data-element_type="widget"
        data-id={widgetId}
        data-widget_type="elementskit-icon-box.default"
      >
        <div className="elementor-widget-container">
          <div className="ekit-wid-con">
            <div className="elementskit-infobox text-left icon-top-align elementor-animation-">
              <div className="elementskit-box-header">
                <div className="elementskit-info-box-icon">
                  <img alt={alt} decoding="async" height={150} loading="lazy" src={image} width={150} />
                </div>
              </div>
              <div className="box-body">
                <h3 className="elementskit-info-box-title">{title}</h3>
                <div className="box-footer disable_hover_button">
                  <div className="btn-wraper">
                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to={path}>
                      Learn More
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CommercialPestControlPage() {
  const { page, content: c } = usePageCms('commercial-pest-control')
  usePageMeta('commercial_pest_control', page)

  const serviceItems = (c?.services?.items?.length ? c.services.items : DEFAULT_SERVICES).map((item, index) => {
    const fallback = DEFAULT_SERVICES[index] ?? DEFAULT_SERVICES[0]
    return {
      widgetId: item.widget_id || fallback.widget_id,
      title: cmsText(item.title, fallback.title),
      path: item.link || fallback.link,
      image: cmsMediaUrl(item.image || item.image_url, fallback.image),
      alt: item.alt || item.title || fallback.alt,
    }
  })

  return (
    <>
      <ServiceCmsStyles content={c} heroBgId="d694001" pageId="694" />
      <ServiceCmsContentBlocks content={c} />
      <ServiceCommercialSectionCms slug="commercial-pest-control" content={c} />
      <div className="elementor elementor-694" data-elementor-id={694} data-elementor-post-type="page" data-elementor-type="wp-page">
        <div
          className="elementor-element elementor-element-d694001 e-flex e-con-boxed e-con e-parent e-lazyloaded"
          data-element_type="container"
          data-id="d694001"
          data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"
        >
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-d694010 e-con-full e-flex e-con e-child" data-element_type="container" data-id="d694010">
              <div
                className="elementor-element elementor-element-d694011 elementor-icon-list--layout-inline elementor-align-left elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-element_type="widget"
                data-id="d694011"
                data-widget_type="icon-list.default"
              >
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items elementor-inline-items">
                    <li className="elementor-icon-list-item elementor-inline-item">
                      <Link to="/">
                        <span className="elementor-icon-list-text">Home</span>
                      </Link>
                    </li>
                    <li className="elementor-icon-list-item elementor-inline-item">
                      <a href="#">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                          </svg>
                        </span>
                        <span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb_current, 'Commercial Pest Control')}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="elementor-element elementor-element-d694012 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d694012" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'Commercial Pest Control')}</h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-d694013 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d694013" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.heading, 'Commercial Pest Control Services in Melbourne')}</h1>
                </div>
              </div>
              <div className="elementor-element elementor-element-d694014 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="d694014" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <CmsHtml html={c?.hero?.intro ?? DEFAULT_INTRO} />
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-d694015 e-con-full e-flex e-con e-child"
              data-element_type="container"
              data-id="d694015"
              data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"
            >
              <div className="elementor-element elementor-element-d694016 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d694016" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.title, 'Get A Free Quote Now!')}</h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-d694017 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d694017" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">
                    {cmsText(c?.quote_form?.subtitle, 'Have an enquiry? Leave us your details and we’ll call you back during business hours.')}
                  </h6>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-d694018 elementor-button-align-center elementor-widget elementor-widget-form"
                data-element_type="widget"
                data-id="d694018"
                data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}"
                data-widget_type="form.default"
              >
                <div className="elementor-widget-container">
                  <form aria-label="Quote Form" className="elementor-form" id="commercial_contact_form" method="post" name="Quote Form">
                    <input name="post_id" type="hidden" defaultValue={694} />
                    <input name="form_id" type="hidden" defaultValue="d694018" />
                    <input name="referer_title" type="hidden" defaultValue="Commercial Pest Control" />
                    <input name="queried_id" type="hidden" defaultValue={694} />
                    <div className="elementor-form-fields-wrapper elementor-labels-">
                      <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-first_name elementor-col-100 elementor-field-required">
                        <label className="elementor-field-label elementor-screen-only" htmlFor="commercial-form-field-first_name">
                          Name
                        </label>
                        <input
                          className="elementor-field elementor-size-md elementor-field-textual"
                          id="commercial-form-field-first_name"
                          name="form_fields[first_name]"
                          placeholder="Name"
                          required
                          type="text"
                        />
                      </div>
                      <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-user_email elementor-col-100 elementor-field-required">
                        <label className="elementor-field-label elementor-screen-only" htmlFor="commercial-form-field-user_email">
                          Email
                        </label>
                        <input
                          className="elementor-field elementor-size-md elementor-field-textual"
                          id="commercial-form-field-user_email"
                          name="form_fields[user_email]"
                          placeholder="Email"
                          required
                          type="email"
                        />
                      </div>
                      <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-mobile_number elementor-col-100 elementor-field-required">
                        <label className="elementor-field-label elementor-screen-only" htmlFor="commercial-form-field-mobile_number">
                          Mobile Number
                        </label>
                        <PhoneNumberInput id="commercial-form-field-mobile_number" name="form_fields[mobile_number]" size="md" />
                      </div>
                      <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100 elementor-field-required">
                        <label className="elementor-field-label elementor-screen-only" htmlFor="commercial-form-field-message">
                          Job description
                        </label>
                        <textarea
                          className="elementor-field-textual elementor-field elementor-size-md"
                          id="commercial-form-field-message"
                          name="form_fields[message]"
                          placeholder="Job description"
                          required
                          rows={4}
                          defaultValue=""
                        />
                      </div>
                      <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                        <button className="elementor-button elementor-size-md" type="submit">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">{cmsText(c?.quote_form?.submit_text, 'Submit Quote')}</span>
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

        <section className="elementor-section elementor-top-section elementor-section-boxed elementor-section-height-default">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-d694020 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d694020" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.services?.eyebrow, 'Our Commercial Services')}</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-d694021 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d694021" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.services?.title, 'Specialised Pest Control for Every Business Type')}</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-d694022 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="d694022" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <CmsHtml html={c?.services?.intro ?? '<p>Choose the commercial pest control service that matches your industry.</p>'} />
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-d694023 e-flex e-con-boxed e-con e-parent commercial-service-grid-row"
                  data-element_type="container"
                  data-id="d694023"
                >
                  <div className="e-con-inner commercial-service-grid-inner">
                    {serviceItems.map((item) => (
                      <ServiceCard key={item.widgetId} alt={item.alt} image={item.image} path={item.path} title={item.title} widgetId={item.widgetId} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="elementor-section elementor-top-section elementor-element elementor-element-d694002 elementor-section-boxed elementor-section-height-default" data-element_type="section" data-id="d694002" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-d694030 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d694030" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.contact?.eyebrow, 'Get in Touch')}</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-d694031 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d694031" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.contact?.title, 'Contact 7 States Pest Control for Commercial Pest Control')}</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-d694032 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="d694032" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <CmsHtml
                      html={
                        c?.contact?.body
                        ?? '<p>Don’t let pests disrupt your business. Contact <a href="/"><strong>7 States Pest Control</strong></a> today.</p>'
                      }
                    />
                  </div>
                </div>
                <div className="elementor-element elementor-element-d694033 elementor-widget elementor-widget-button" data-element_type="widget" data-id="d694033" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <Link className="elementor-button elementor-button-link elementor-size-sm" to={c?.contact?.button_url || '/contact-us'}>
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">{cmsText(c?.contact?.button_label, 'Contact Us')}</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
