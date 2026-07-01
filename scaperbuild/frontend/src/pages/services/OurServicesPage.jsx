import PhoneNumberInput from '../../components/PhoneNumberInput.jsx'
import ServiceCmsContentBlocks from '../../components/service/ServiceCmsContentBlocks.jsx'
import ServiceFaqCms from '../../components/service/ServiceFaqCms.jsx'
import { cmsText } from '../../utils/cmsMedia.js'
import usePageCms from '../../hooks/usePageCms.js'
import ServiceCmsStyles from '../../components/service/ServiceCmsStyles.jsx'
import CmsHtml from '../../components/home/CmsHtml.jsx'
import usePageMeta from '../../hooks/usePageMeta.js'
import { Link } from 'react-router-dom'

export default function OurServicesPage() {
  const { page, content: c } = usePageCms('our-services')
  usePageMeta('our_services', page)

  return (
    <>
      <ServiceCmsStyles content={c} heroBgId="d60c811" ctaBgId="057b4d3" />
      <ServiceCmsContentBlocks content={c} />
      <div className="elementor elementor-7780" data-elementor-id={7780} data-elementor-post-type="page" data-elementor-type="wp-page">
        <div className="elementor-element elementor-element-d60c811 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="d60c811" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-7576f41 e-con-full e-flex e-con e-child" data-element_type="container" data-id="7576f41">
              <div className="elementor-element elementor-element-955f486 elementor-icon-list--layout-inline elementor-align-left elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="955f486" data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:720}" data-widget_type="icon-list.default">
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
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </span>
                        <span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb_parent, 'Services')}</span>
                      </a>
                    </li>
                    <li className="elementor-icon-list-item elementor-inline-item">
                      <a href="#">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </span>
                        <span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb_current, 'pest control services')}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="elementor-element elementor-element-69b35b1 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="69b35b1" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'why hire us')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-6951f92 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="6951f92" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.heading, 'Why Hire Us for Pest Control and Extermination Services?')}</h1> </div>
              </div>
              <div className="elementor-element elementor-element-664dcac elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="664dcac" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <CmsHtml html={c?.hero?.intro} />
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-fdac6de e-con-full e-flex e-con e-child" data-element_type="container" data-id="fdac6de" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-470a6fb elementor-widget elementor-widget-heading" data-element_type="widget" data-id="470a6fb" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.title, 'Get A Free Quote Now!')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-601e49b elementor-widget elementor-widget-heading" data-element_type="widget" data-id="601e49b" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.subtitle, 'Have an enquiry? Leave us your details and we\'ll call you back during business hours.')}</h6> </div>
              </div>
              <div className="elementor-element elementor-element-5eff88f elementor-button-align-center elementor-widget elementor-widget-form" data-element_type="widget" data-id="5eff88f" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                <div className="elementor-widget-container">
                  <form aria-label="New Form" className="elementor-form" id="home_contact_form" method="post" name="New Form">
                    <input name="post_id" type="hidden" defaultValue={7780} />
                    <input name="form_id" type="hidden" defaultValue="5eff88f" />
                    <input name="referer_title" type="hidden" defaultValue="Pest Control Services in Melbourne | 7 States Pest Control" />
                    <input name="queried_id" type="hidden" defaultValue={7780} />
                    <div className="elementor-form-fields-wrapper elementor-labels-">
                      <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-first_name elementor-col-100 elementor-field-required">
                        <label className="elementor-field-label elementor-screen-only" htmlFor="form-field-first_name">
                          Name							</label>
                        <input className="elementor-field elementor-size-md elementor-field-textual" id="form-field-first_name" name="form_fields[first_name]" placeholder="Name" required type="text" />
                      </div>
                      <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-user_email elementor-col-100 elementor-field-required">
                        <label className="elementor-field-label elementor-screen-only" htmlFor="form-field-user_email">
                          Email							</label>
                        <input className="elementor-field elementor-size-md elementor-field-textual" id="form-field-user_email" name="form_fields[user_email]" placeholder="Email" required type="email" />
                      </div>
                      <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-mobile_number elementor-col-100 elementor-field-required">
                        <label className="elementor-field-label elementor-screen-only" htmlFor="form-field-mobile_number">
                          Mobile Number							</label>
                        <PhoneNumberInput id="form-field-mobile_number" name="form_fields[mobile_number]" size="md" />
                      </div>
                      <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100 elementor-field-required">
                        <label className="elementor-field-label elementor-screen-only" htmlFor="form-field-message">
                          Job description							</label>
                        <textarea className="elementor-field-textual elementor-field elementor-size-md" id="form-field-message" name="form_fields[message]" placeholder="Job description" required rows={4} defaultValue={""} /> </div>
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
          </div>
        </div>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-4c3a67a elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="4c3a67a">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b38cb7f" data-element_type="column" data-id="b38cb7f" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-background-overlay" />
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-b8461a8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="b8461a8">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a01a7d5" data-element_type="column" data-id="a01a7d5">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-8916f32 elementor-invisible elementor-widget elementor-widget-heading" data-element_type="widget" data-id="8916f32" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">why hire us</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-dd5b3de elementor-invisible elementor-widget elementor-widget-heading" data-element_type="widget" data-id="dd5b3de" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Why Hire Us for Pest Control and Extermination Services?</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-76690a4 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="76690a4" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="de434cf" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><div className="elementor-element elementor-element-0e20da6 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="0e20da6" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>We believe in the effectiveness and quality of our pest control services. Our professionals are astute at backing them up with 100% satisfaction guaranteed. Our pest controllers work their level best to exterminate ants, rats, wasps, cockroaches, and more. Need bed bug elimination services? Or are you suspecting possums in your space? Allow us to take the lead with our pest control and elimination solutions crafted individually for our unique clients.</p></div></div><div className="elementor-element elementor-element-f5ce1ac elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="f5ce1ac" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container">We understand that not all customers require the kind of services from us. Thus, we design customized solutions for one and all. We send our professionals to your space so that they can inspect, control, and eliminate pests and insects that bother you. Bid farewell to these pesky insects and pests from your residential or commercial spaces by calling us today.</div></div></div></div> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c1ca80d elementor-invisible" data-element_type="column" data-id="c1ca80d" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-3798510 elementor-widget elementor-widget-spacer" data-element_type="widget" data-id="3798510" data-widget_type="spacer.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-spacer">
                              <div className="elementor-spacer-inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-2f23798 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="2f23798" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5f56c2c" data-element_type="column" data-id="5f56c2c" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-3c55949 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="3c55949" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">our customers</h2> </div>
                </div>
                <div className="elementor-element elementor-element-4ebd325 elementor-widget elementor-widget-elementskit-heading" data-element_type="widget" data-id="4ebd325" data-widget_type="elementskit-heading.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con"><div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-"><h2 className="ekit-heading--title elementskit-section-title">Our customers call us the best because we consider offering services that are:</h2></div></div> </div>
                </div>
                <div className="elementor-element elementor-element-24a7d2a elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="24a7d2a" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>We believe in offering the best solutions to our valued customers. Allow us to attend to your pest control requirements &amp; keep your family and little ones safe.</p> </div>
                </div>
                <div className="elementor-element elementor-element-88628bc e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="88628bc">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-d0213ac e-con-full e-flex e-con e-child" data-element_type="container" data-id="d0213ac">
                      <div className="elementor-element elementor-element-c10a8b4 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="c10a8b4" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Environment friendly</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Safe and natural – without any harsh pesticides or poisons</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-1a4cb09 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="1a4cb09" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Child and pest reliable</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-f8691ae elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="f8691ae">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e82bfa2" data-element_type="column" data-id="e82bfa2" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-background-overlay" />
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-3cde345 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="3cde345">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-29cedff" data-element_type="column" data-id="29cedff">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-ef9055f elementor-widget elementor-widget-heading" data-element_type="widget" data-id="ef9055f" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">symptoms</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-fb916a7 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="fb916a7" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              Choose Our Reliable Pest Control Services &amp; Eliminate These Pesky Creatures from Your Space</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-adcf837 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="adcf837" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="de434cf" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="de434cf" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>Whether deciding on the success of a commercial property or demonstrating a residential space’s hygiene, a clean and healthy environment is a significant element. That’s where our pest control services at 7 States Pest Control come into being.</p><p>Our professionals offer speedy and prompt pest inspection, control, and elimination solutions at our company. Our pest controllers ensure state-of-the-art equipment for exterminating pests from your residential or commercial space. Book an appointment with us today and learn more about our services.</p></div></div></div></div> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4d9dc8f" data-element_type="column" data-id="4d9dc8f" data-settings="{&quot;animation&quot;:&quot;none&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-905f59b elementor-widget elementor-widget-spacer" data-element_type="widget" data-id="905f59b" data-widget_type="spacer.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-spacer">
                              <div className="elementor-spacer-inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-10d30a9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="10d30a9">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6b92223" data-element_type="column" data-id="6b92223">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-c2ce177 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="c2ce177">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0e669d4" data-element_type="column" data-id="0e669d4">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-046d1b9 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="046d1b9" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Our Services </h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-8a481d0 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="8a481d0" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Explore Our Diverse Pest Control Services at 7 States Pest Control</h2> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3924836" data-element_type="column" data-id="3924836" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-b15abe0 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="b15abe0" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>7 States Pest Control is your one-stop destination<br />to avail of pest control services, including:</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-7ae90be elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="7ae90be" data-widget_type="divider.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-divider">
                              <span className="elementor-divider-separator">
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="elementor-element elementor-element-0395739 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="0395739">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-c402c97 e-con-full e-flex e-con e-child" data-element_type="container" data-id="c402c97">
                      <div className="elementor-element elementor-element-d018aa2 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="d018aa2" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="cockroach pest control" className="attachment- size-" decoding="async" height={150} src="/assets/images/Cockroaches.png-1_56844a04.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Cockroach Control               </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-cockroach-control">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-dda2999 e-con-full e-flex e-con e-child" data-element_type="container" data-id="dda2999">
                      <div className="elementor-element elementor-element-1c53f02 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="1c53f02" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="Bed Bug Pest Control" className="attachment- size-" decoding="async" height={150} src="/assets/images/Bed-Bug.png_1da7e9d8.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Bed Bug Treatment              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-bed-bug-treatment">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-4724110 e-con-full e-flex e-con e-child" data-element_type="container" data-id="4724110">
                      <div className="elementor-element elementor-element-18f2f28 Ant-new ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="18f2f28" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="Ant Pest Control" className="attachment- size-" decoding="async" height={360} loading="lazy" sizes="(max-width: 360px) 100vw, 360px" src="/assets/images/ant-colony-insect-animals-pest-png_73d1a8ca.png" srcSet="/assets/images/ant-colony-insect-animals-pest-png_73d1a8ca.png 360w, /assets/images/ant-colony-insect-animals-pest-png-300x300_41e7bf02.png 300w, /assets/images/ant-colony-insect-animals-pest-png-150x150_d0bc64f1.png 150w" width={360} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Ant Pest Control              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-ant-pest-control">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-9be12d8 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="9be12d8">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-f78c4ce e-con-full e-flex e-con e-child" data-element_type="container" data-id="f78c4ce">
                      <div className="elementor-element elementor-element-f81459b ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="f81459b" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="mites control" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Mite-Control.png_4c3b4b78.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Mites Control              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-mites-control">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-787ee7e e-con-full e-flex e-con e-child" data-element_type="container" data-id="787ee7e">
                      <div className="elementor-element elementor-element-fe0b0cf ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="fe0b0cf" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="Fly-Control" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Fly-Control.png_4cfa4c12.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Fly Control              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-fly-control">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-94f2d22 e-con-full e-flex e-con e-child" data-element_type="container" data-id="94f2d22">
                      <div className="elementor-element elementor-element-d7a2d97 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="d7a2d97" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="Flea Control" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Flea-Control.png_a5558f62.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Flea Treatment              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/flea-treatment">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-9d03c9b e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="9d03c9b">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-f2d7f17 e-con-full e-flex e-con e-child" data-element_type="container" data-id="f2d7f17">
                      <div className="elementor-element elementor-element-7543503 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="7543503" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="Mosquito pest Control" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Mosquito-Control.png_90777f1c.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Mosquito Pest Control              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-mosquito-pest-control">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-669a77c e-con-full e-flex e-con e-child" data-element_type="container" data-id="669a77c">
                      <div className="elementor-element elementor-element-112c6a0 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="112c6a0" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="Rodent Pest Control" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Rodent-Control.png-1_0842a15c.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Rodent Control              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/rodent-control-in-melbourne">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-65c27c2 e-con-full e-flex e-con e-child" data-element_type="container" data-id="65c27c2">
                      <div className="elementor-element elementor-element-6055ae2 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="6055ae2" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="Moth Control" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Moth-Control.png-1_737c5080.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Moth Control              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-moth-control">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-694d0ad e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="694d0ad">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-7f3940e e-con-full e-flex e-con e-child" data-element_type="container" data-id="7f3940e">
                      <div className="elementor-element elementor-element-d503178 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="d503178" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="Wasp Removal melbourne" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Wasp-Removal.png-1_2802cb47.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Wasp Control Services              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/wasp-removal-melbourne">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-a089861 e-con-full e-flex e-con e-child" data-element_type="container" data-id="a089861">
                      <div className="elementor-element elementor-element-14d256c ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="14d256c" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="spider control" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Spider-Control.png-2_18a07ad3.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Spider Control Treatment              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-spider-control-treatment">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-b6e2060 e-con-full e-flex e-con e-child" data-element_type="container" data-id="b6e2060">
                      <div className="elementor-element elementor-element-d704cce ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="d704cce" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="silver fish control" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Silver-Fish.png_cbd8da70.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Silverfish Treatment              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-silverfish-treatment">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="elementor-element elementor-element-668717e e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="668717e">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-f8f8fa9 e-con-full e-flex e-con e-child" data-element_type="container" data-id="f8f8fa9" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-cb76cb2 elementor-widget elementor-widget-spacer" data-element_type="widget" data-id="cb76cb2" data-widget_type="spacer.default">
                <div className="elementor-widget-container">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner" />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-8a468c1 e-con-full e-flex e-con e-child" data-element_type="container" data-id="8a468c1" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-8b9644c e-con-full e-flex e-con e-child" data-element_type="container" data-id="8b9644c" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-113a5e2 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="113a5e2" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Our Commercial &amp; Residential Pest Control Solutions</h2> </div>
                </div>
                <div className="elementor-element elementor-element-a2624c7 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="a2624c7" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-element elementor-element-57329fa elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="57329fa" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><div className="elementor-element elementor-element-9407d80 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="9407d80" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>Our pest control and elimination solutions are tailored on the basis of the level of infestation, damage, and pest species within the property, irrespective of business size.</p><p>So, besides providing you with pest solutions, we are here to offer general pest treatments for both residential and commercial spaces. Our mission is to serve our customers with high-quality pest control solutions. And our vision is to earn a recognizable name in the pest control industry and gain a competitive edge.</p></div></div></div></div> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-3fe4b1e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="3fe4b1e">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f8f859d" data-element_type="column" data-id="f8f859d" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-background-overlay" />
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-91dafbb elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="91dafbb">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a206dd9" data-element_type="column" data-id="a206dd9">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-73358e8 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="73358e8" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Our USPs</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-bd8e94d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="bd8e94d" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Why Hire 7 States Pest Control for Different Pest Solutions?</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-4a957b0 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="4a957b0" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>With our innovations and technologically driven tools and approaches, we aim to stay ahead of the curve. We are your trusted partner to offer best-in-class pest control solutions. We promise to make a difference with our control and elimination services for these reasons:</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-a1a9155 e-con-full e-flex e-con e-child" data-element_type="container" data-id="a1a9155">
                          <div className="elementor-element elementor-element-ea18cb7 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="ea18cb7" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Absolute satisfaction guaranteed</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Best for residential and commercial spaces like hospitals, airports, and warehouses</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Comprehensive inspection &amp; upfront quotations offered</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Prompt pest control and elimination services</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Modern tools &amp; techniques</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">We provide insured services</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Family-friendly solutions</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Seamless experience with our cordial associates</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c8f8298" data-element_type="column" data-id="c8f8298" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-0b13e1a elementor-widget elementor-widget-spacer" data-element_type="widget" data-id="0b13e1a" data-widget_type="spacer.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-spacer">
                              <div className="elementor-spacer-inner" />
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-0bb7e99 elementor-widget elementor-widget-image" data-element_type="widget" data-id="0bb7e99" data-widget_type="image.default">
                          <div className="elementor-widget-container">
                            <img alt="bed bug control melbourne" className="attachment-full size-full wp-image-1263" decoding="async" height={800} loading="lazy" sizes="(max-width: 1200px) 100vw, 1200px" src="/assets/images/Why-Pest-Control.jpg_ef5bccf6.webp" srcSet="/assets/images/Why-Pest-Control.jpg_ef5bccf6.webp 1200w, /assets/images/Why-Pest-Control.jpg-300x200_676ac02e.webp 300w, /assets/images/Why-Pest-Control.jpg-1024x683_372d25a3.webp 1024w, /assets/images/Why-Pest-Control.jpg-768x512_05381ce3.webp 768w" width={1200} /> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    </>
  )
}
