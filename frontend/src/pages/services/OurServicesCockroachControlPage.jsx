import PhoneNumberInput from '../../components/PhoneNumberInput.jsx'
import SitePhoneLink from '../../components/SitePhoneLink.jsx'
import ServiceCmsContentBlocks from '../../components/service/ServiceCmsContentBlocks.jsx'
import ServiceFaqCms from '../../components/service/ServiceFaqCms.jsx'
import { cmsText } from '../../utils/cmsMedia.js'
import usePageCms from '../../hooks/usePageCms.js'
import ServiceCmsStyles from '../../components/service/ServiceCmsStyles.jsx'
import CmsHtml from '../../components/home/CmsHtml.jsx'
import usePageMeta from '../../hooks/usePageMeta.js'
import { Link } from 'react-router-dom'

export default function OurServicesCockroachControlPage() {
  const { page, content: c } = usePageCms('our-services-cockroach-control')
  usePageMeta('our_services_cockroach_control', page)

  return (
    <>
      <ServiceCmsStyles content={c} heroBgId="13ca266" ctaBgId="057b4d3" />
      <ServiceCmsContentBlocks content={c} />
      <div className="elementor elementor-716" data-elementor-id={716} data-elementor-post-type="page" data-elementor-type="wp-page">
        <div className="elementor-element elementor-element-13ca266 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="13ca266" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-00f4bd4 e-con-full e-flex e-con e-child" data-element_type="container" data-id="00f4bd4">
              <div className="elementor-element elementor-element-2f7dc9b elementor-icon-list--layout-inline elementor-align-left elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="2f7dc9b" data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:720}" data-widget_type="icon-list.default">
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items elementor-inline-items">
                    <li className="elementor-icon-list-item elementor-inline-item">
                      <Link to="/"><span className="elementor-icon-list-text">Home</span>
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
                        <span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb_current, 'cockroach control')}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="elementor-element elementor-element-6066522 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="6066522" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'Cockroaches Pest Control')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-cab075b elementor-widget elementor-widget-heading" data-element_type="widget" data-id="cab075b" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.heading, 'Say Goodbye to Pesky Cockroaches with Effective Pest Control')}</h1> </div>
              </div>
              <div className="elementor-element elementor-element-6ab0f78 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="6ab0f78" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <CmsHtml html={c?.hero?.intro} />
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-2159630 e-con-full e-flex e-con e-child" data-element_type="container" data-id="2159630" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-2824f6c elementor-widget elementor-widget-heading" data-element_type="widget" data-id="2824f6c" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.title, 'Get A Free Quote Now!')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-a82f254 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="a82f254" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.subtitle, 'Have an enquiry? Leave us your details and we\'ll call you back during business hours.')}</h6> </div>
              </div>
              <div className="elementor-element elementor-element-9bf3ee3 elementor-button-align-center elementor-widget elementor-widget-form" data-element_type="widget" data-id="9bf3ee3" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                <div className="elementor-widget-container">
                  <form aria-label="New Form" className="elementor-form" id="home_contact_form" method="post" name="New Form">
                    <input name="post_id" type="hidden" defaultValue={716} />
                    <input name="form_id" type="hidden" defaultValue="9bf3ee3" />
                    <input name="referer_title" type="hidden" defaultValue="Pest Control for German Cockroaches in Melbourne - Starting Price $170." />
                    <input name="queried_id" type="hidden" defaultValue={716} />
                    <div className="elementor-form-fields-wrapper elementor-labels-">
                      <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-first_name elementor-col-100 elementor-field-required">
                        <label className="elementor-field-label elementor-screen-only" htmlFor="form-field-first_name">
                          Name							</label>
                        <input className="elementor-field elementor-size-md elementor-field-textual" id="form-field-first_name" name="form_fields[first_name]" placeholder=" Name" required type="text" />
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
                      <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-suburb elementor-col-100">
                        <label className="elementor-field-label elementor-screen-only" htmlFor="form-field-suburb">
                          Suburb								</label>
                        <input className="elementor-field elementor-size-md elementor-field-textual" id="form-field-suburb" name="form_fields[suburb]" placeholder="Suburb" type="text" />
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
                        <div className="elementor-element elementor-element-8916f32 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="8916f32" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Cockroaches Pest Control</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-dd5b3de elementor-widget elementor-widget-heading" data-element_type="widget" data-id="dd5b3de" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Say Goodbye to Pesky Cockroaches with Effective Pest Control</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-76690a4 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="76690a4" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="de434cf" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>We don’t usually attribute much importance to cockroaches in our property. But cockroaches are a high-risk pest to have at your home or office. They carry a wide range of serious illnesses, including dysentery, food poisoning, typhoid, etc. Moreover, cockroaches are the carriers of some major allergens.</p></div></div><div className="elementor-element elementor-element-08bd23f elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="08bd23f" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>They are often the cause of asthma, eczema and other serious forms of skin allergies. The health risk associated with cockroaches is particularly high in homes with children, the elderly or those recuperating from illnesses.&nbsp;<Link to="/"><strong>7 States Pest Control</strong></Link>&nbsp;offers you with effective&nbsp;<strong>cockroach control</strong>&nbsp;and elimination services. Contact us to know more about our cockroach pest control services.&nbsp;&nbsp;</p></div></div> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c1ca80d" data-element_type="column" data-id="c1ca80d" data-settings="{&quot;animation&quot;:&quot;none&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
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
                    <h2 className="elementor-heading-title elementor-size-default">Cockroach Control Treatment</h2> </div>
                </div>
                <div className="elementor-element elementor-element-4ebd325 elementor-widget elementor-widget-elementskit-heading" data-element_type="widget" data-id="4ebd325" data-widget_type="elementskit-heading.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con"><div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-"><h2 className="ekit-heading--title elementskit-section-title">Cockroach Control Treatment from 7 States Pest Control</h2></div></div> </div>
                </div>
                <div className="elementor-element elementor-element-24a7d2a elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="24a7d2a" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>We use an appropriate cockroach control treatment method based on the infestation’s inspection and severity. Our experienced professionals will conduct a detailed inspection of your premises to determine the best course of action.</p><p>our pest control for cockroach treatment includes:</p> </div>
                </div>
                <div className="elementor-element elementor-element-88628bc e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="88628bc" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-0559075 e-con-full e-flex e-con e-child" data-element_type="container" data-id="0559075">
                      <div className="elementor-element elementor-element-b484fe7 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="b484fe7" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Spraying</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Baiting</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Insect growth regulators</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Making clients educated</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-d0213ac e-con-full e-flex e-con e-child" data-element_type="container" data-id="d0213ac">
                      <div className="elementor-element elementor-element-c10a8b4 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="c10a8b4" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Thorough inspection</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Monitoring</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Vacuuming</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Sanitization</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Trapping</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-ca8f85b elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="ca8f85b" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>More aggressive treatment methods may be needed if the problem is serious. These methods could include baits, traps, or insecticidal sprays. However, if the cockroach problem is not as severe, less aggressive methods such as sealing cracks and crevices or removing food sources may be enough to control the cockroaches. We may use a combination of methods to achieve the best result for cockroach pest control.</p> </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-3b8e1f5 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="3b8e1f5">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5ea9855" data-element_type="column" data-id="5ea9855" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-background-overlay" />
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-1b2a36f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="1b2a36f">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-098d3c9" data-element_type="column" data-id="098d3c9">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-3b861a5 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="3b861a5" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default"> Cockroach Elimination</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-1b1d385 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="1b1d385" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Reasons why Cockroach Elimination is Vital</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-9c7ed97 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="9c7ed97" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="de434cf" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>Apart from the risks of contamination, cockroaches carry various types of pathogens. They are the carriers of different types of microbes that can wreak havoc in your family. Even the droppings of cockroaches carry microbes that can severely impact the health of your family. Here is the list of illnesses transmitted by cockroaches you should know.</p></div></div> </div>
                        </div>
                        <div className="elementor-element elementor-element-1a07306 e-con-full e-flex e-con e-child" data-element_type="container" data-id="1a07306">
                          <div className="elementor-element elementor-element-789d477 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="789d477" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Plague</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Leprosy</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Typhoid</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Asthma</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Dysentery</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Cholera</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-f6e98d0 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="f6e98d0" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="de434cf" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>At 7 States Pest Control, we have effective skills and knowledge to exterminate pesky cockroaches from your property.</p></div></div> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bbb6fa7" data-element_type="column" data-id="bbb6fa7" data-settings="{&quot;animation&quot;:&quot;none&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-4cb36ed elementor-widget elementor-widget-spacer" data-element_type="widget" data-id="4cb36ed" data-widget_type="spacer.default">
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
        <div className="elementor-element elementor-element-d55e4df e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="d55e4df">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-32563b1 e-con-full e-flex e-con e-child" data-element_type="container" data-id="32563b1" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-83c8a2c e-con-full e-flex e-con e-child" data-element_type="container" data-id="83c8a2c" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-7b40cf9 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="7b40cf9" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Thorough Inspections</h2> </div>
                </div>
                <div className="elementor-element elementor-element-dcc9e04 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="dcc9e04" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>We typically carry out a thorough inspection of their client’s properties to find the location of cockroaches. This inspection includes looking for cracks and crevices in walls and floors where cockroaches can hide. Once the inspection is complete, the professionals will use various methods to eliminate the cockroaches from the property.&nbsp;</p> </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-9669f46 e-con-full e-flex e-con e-child" data-element_type="container" data-id="9669f46" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
              <div className="elementor-element elementor-element-fa72616 elementor-widget elementor-widget-image" data-element_type="widget" data-id="fa72616" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img alt="Cokroach control melbourne" className="attachment-large size-large wp-image-1372" decoding="async" fetchpriority="high" height={465} sizes="(max-width: 796px) 100vw, 796px" src="/assets/images/Cockroach-Control2.png_80b6cad5.webp" srcSet="/assets/images/Cockroach-Control2.png_80b6cad5.webp 796w, /assets/images/Cockroach-Control2.png-300x175_9724d0ae.webp 300w, /assets/images/Cockroach-Control2.png-768x449_e27930df.webp 768w" width={796} /> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-69ac46d e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="69ac46d">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-5240a58 e-con-full e-flex e-con e-child" data-element_type="container" data-id="5240a58" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
              <div className="elementor-element elementor-element-fb814b8 e-con-full e-flex e-con e-child" data-element_type="container" data-id="fb814b8" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-9984806 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="9984806" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Follow-up after Treatment</h2> </div>
                </div>
                <div className="elementor-element elementor-element-5cbad47 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="5cbad47" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>Our follow-up while providing commercial or residential&nbsp;<Link to="/">affordable pest control Melbourne</Link>&nbsp;for cockroach control involves inspecting the premises for any signs of cockroach activity and treating any areas where we find evidence of infestation. This helps to ensure that the cockroach problem doesn’t come back and that your home or business stays cockroach-free.</p> </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-76b85d6 e-con-full e-flex e-con e-child" data-element_type="container" data-id="76b85d6" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
              <div className="elementor-element elementor-element-88d7d34 elementor-widget elementor-widget-image" data-element_type="widget" data-id="88d7d34" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img alt="Cokroach control melbourne" className="attachment-large size-large wp-image-1373" decoding="async" height={450} sizes="(max-width: 800px) 100vw, 800px" src="/assets/images/Cockroach-Control1.jpg_90b22569.webp" srcSet="/assets/images/Cockroach-Control1.jpg_90b22569.webp 876w, /assets/images/Cockroach-Control1.jpg-300x169_3358a20e.webp 300w, /assets/images/Cockroach-Control1.jpg-768x432_acd74298.webp 768w" width={800} /> </div>
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
                            <h2 className="elementor-heading-title elementor-size-default">How to recognize</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-bd8e94d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="bd8e94d" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">How to recognize that you have Cockroaches in your Property?</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-4a957b0 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="4a957b0" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>Here are the signs that tell you about cockroach infestation in your property.</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-1d7381d elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="1d7381d" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                <span className="elementor-icon-list-text">Cockroach droppings</span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                <span className="elementor-icon-list-text">Skin sheds</span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                <span className="elementor-icon-list-text">Typical odor</span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                <span className="elementor-icon-list-text">Cockroach egg capsules</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-15a5388 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="15a5388" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>As soon as you observe these signs, you should contact 7 States Pest Control.</p> </div>
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-af2717f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="af2717f">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7f49d22" data-element_type="column" data-id="7f49d22">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-a06610e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="a06610e">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5ce6fd0" data-element_type="column" data-id="5ce6fd0" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-5c5dcd4 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="5c5dcd4" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Clients Reviews</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-0030c40 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="0030c40" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.eyebrow, '7 States Pest Control for Reliable Pest Management Solutions')}</h2> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1f42088" data-element_type="column" data-id="1f42088" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-ca1057a elementor-widget elementor-widget-heading" data-element_type="widget" data-id="ca1057a" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.subtitle, 'Reviews of Our Pest Control Services')}</h3> </div>
                        </div>
                        <div className="elementor-element elementor-element-256329e elementor-widget elementor-widget-heading" data-element_type="widget" data-id="256329e" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.title, 'EXCELLENT')}</h6> </div>
                        </div>
                        <div className="elementor-element elementor-element-a1015a9 elementor-widget elementor-widget-rating" data-element_type="widget" data-id="a1015a9" data-widget_type="rating.default">
                          <div className="elementor-widget-container">
                            <div className="e-rating" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                              <meta content={0} itemProp="worstRating" />
                              <meta content={5} itemProp="bestRating" />
                              <div aria-label="Rated 5 out of 5" className="e-rating-wrapper" content={5} itemProp="ratingValue" role="img">
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <i aria-hidden="true" className="icon icon-star-1" /> </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <i aria-hidden="true" className="icon icon-star-1" /> </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <i aria-hidden="true" className="icon icon-star-1" /> </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <i aria-hidden="true" className="icon icon-star-1" /> </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <i aria-hidden="true" className="icon icon-star-1" /> </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <i aria-hidden="true" className="icon icon-star-1" /> </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <i aria-hidden="true" className="icon icon-star-1" /> </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <i aria-hidden="true" className="icon icon-star-1" /> </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <i aria-hidden="true" className="icon icon-star-1" /> </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <i aria-hidden="true" className="icon icon-star-1" /> </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-a1d13c8 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="a1d13c8" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>Based on&nbsp;45 reviews</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-b06be52 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="b06be52" data-widget_type="divider.default">
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
                <div className="elementor-element elementor-element-0013d42 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="0013d42">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-8f58527 elementor-widget elementor-widget-shortcode" data-element_type="widget" data-id="8f58527" data-widget_type="shortcode.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-shortcode"><div data-css-url="https://7statespestcontrol.com.au/wp-content/uploads/trustindex-google-widget.css?1751194100" data-src="https://cdn.trustindex.io/loader.js?wp-widget" data-ti-widget-inited="true" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-057b4d3 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="057b4d3" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7ff80cc" data-element_type="column" data-id="7ff80cc">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-5d5a504 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="5d5a504">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b0cbf92" data-element_type="column" data-id="b0cbf92" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-4c825b4 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="4c825b4" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Ideas to reality</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-7c67181 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="7c67181" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Talk to Us Today to Learn More</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-dbd1d11 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="dbd1d11" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>Do you have any specific questions about us, our services, or anything related to pest infestation issues? Call us today on&nbsp;<SitePhoneLink />&nbsp;or use our contact form to connect with our&nbsp;<b>7 States Pest Control</b>. You can get answers to your questions, get upfront quotes for the&nbsp;<b>7 States Pest Control</b>&nbsp;issues, and receive high-quality tailored services.</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-e8de5c9 elementor-widget elementor-widget-button" data-element_type="widget" data-id="e8de5c9" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link className="elementor-button elementor-button-link elementor-size-sm" to="/contact-us">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Contact Us</span>
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
            </div>
          </div>
        </section>
      </div>
      
    </>
  )
}
