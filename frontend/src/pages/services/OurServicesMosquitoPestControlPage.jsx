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

export default function OurServicesMosquitoPestControlPage() {
  const { page, content: c } = usePageCms('our-services-mosquito-pest-control')
  usePageMeta('our_services_mosquito_pest_control', page)

  return (
    <>
      <ServiceCmsStyles content={c} heroBgId="1357195" ctaBgId="057b4d3" />
      <ServiceCmsContentBlocks content={c} />
      <div className="elementor elementor-1463" data-elementor-id={1463} data-elementor-post-type="page" data-elementor-type="wp-page">
        <div className="elementor-element elementor-element-1357195 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="1357195" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-ffa67ba e-con-full e-flex e-con e-child" data-element_type="container" data-id="ffa67ba">
              <div className="elementor-element elementor-element-4ce661b elementor-icon-list--layout-inline elementor-align-left elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="4ce661b" data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:720}" data-widget_type="icon-list.default">
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
                        <span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb_current, 'mosquito pest control')}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="elementor-element elementor-element-a6cda9a elementor-widget elementor-widget-heading" data-element_type="widget" data-id="a6cda9a" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'Pest Control Solution')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-3a0a362 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="3a0a362" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.heading, 'Eliminate Mosquitoes from Your Office and Home with Pest Control Solutions')}</h1> </div>
              </div>
              <div className="elementor-element elementor-element-56430f9 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="56430f9" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <CmsHtml html={c?.hero?.intro} />
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-de92336 e-con-full e-flex e-con e-child" data-element_type="container" data-id="de92336" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-553f37b elementor-widget elementor-widget-heading" data-element_type="widget" data-id="553f37b" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.title, 'Get A Free Quote Now!')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-3543d37 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="3543d37" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.subtitle, 'Have an enquiry? Leave us your details and we\'ll call you back during business hours.')}</h6> </div>
              </div>
              <div className="elementor-element elementor-element-304b8ea elementor-button-align-center elementor-widget elementor-widget-form" data-element_type="widget" data-id="304b8ea" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                <div className="elementor-widget-container">
                  <form aria-label="New Form" className="elementor-form" id="home_contact_form" method="post" name="New Form">
                    <input name="post_id" type="hidden" defaultValue={1463} />
                    <input name="form_id" type="hidden" defaultValue="304b8ea" />
                    <input name="referer_title" type="hidden" defaultValue="Mosquito pest control services in Melbourne - 7 States Pest Control" />
                    <input name="queried_id" type="hidden" defaultValue={1463} />
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
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a01a7d5" data-element_type="column" data-id="a01a7d5" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-8916f32 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="8916f32" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Pest Control Solution</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-dd5b3de elementor-widget elementor-widget-heading" data-element_type="widget" data-id="dd5b3de" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Eliminate Mosquitoes from Your Office and Home with Pest Control Solutions</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-76690a4 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="76690a4" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="de434cf" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>Imagine preparing a barbeque party and ending up staying indoors. We understand how frustrating your experience might become. But if your house is full of mosquitoes, blame them for ruining your evening.</p><p>No matter how tiny they are, mosquitoes can put you in a predicament. They are annoying, loud, and can carry deadly diseases. So, walking outside your yard and immediately feeling their stings can be a dangerous incident. Consult&nbsp;<Link to="/"><strong>7 States Pest Control</strong>&nbsp;</Link>for mosquito pest control services.</p></div></div> </div>
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
                <div className="elementor-element elementor-element-3c55949 elementor-widget elementor-widget-heading animated fadeInDown" data-element_type="widget" data-id="3c55949" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Eradicate Mosquitoes</h2> </div>
                </div>
                <div className="elementor-element elementor-element-4ebd325 elementor-widget elementor-widget-elementskit-heading" data-element_type="widget" data-id="4ebd325" data-widget_type="elementskit-heading.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con"><div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-"><h2 className="ekit-heading--title elementskit-section-title">Common Reasons to Eradicate Mosquitoes from Your House</h2></div></div> </div>
                </div>
                <div className="elementor-element elementor-element-24a7d2a elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="24a7d2a" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>Remember, they are significant public health pests as they transmit disease-causing pathogens to domesticated animals and humans. They can carry life-threatening ailments like:</p> </div>
                </div>
                <div className="elementor-element elementor-element-88628bc e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="88628bc">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-0559075 e-con-full e-flex e-con e-child" data-element_type="container" data-id="0559075">
                      <div className="elementor-element elementor-element-b484fe7 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="b484fe7" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Dengue</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Malaria</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-d0213ac e-con-full e-flex e-con e-child" data-element_type="container" data-id="d0213ac">
                      <div className="elementor-element elementor-element-c10a8b4 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="c10a8b4" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Zika virus</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">West Nile virus</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Chikungunya virus</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-ca8f85b elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="ca8f85b" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>At 7 States Pest Control, our pest control associates offer effective mosquito pest control and</p> </div>
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
                            <h2 className="elementor-heading-title elementor-size-default">Who Should Consult Our Mosquito Pest Control Team?</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-9c7ed97 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="9c7ed97" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="de434cf" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>Mosquitoes get attracted to certain areas of your house. If you have such areas at home, you must consult a team. 7 States Pest Control professionals implement their astute acumen to exterminate annoying mosquitoes from your office or home. Here are the signs indicating that your house has a mosquito infestation:</p></div></div> </div>
                        </div>
                        <div className="elementor-element elementor-element-1a07306 e-con-full e-flex e-con e-child" data-element_type="container" data-id="1a07306">
                          <div className="elementor-element elementor-element-789d477 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="789d477" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Standing water on your house or office</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Continuous high blazing sound</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Your property has multiple shaded areas</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Are you getting bit constantly?</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Have you been scratching at night for the past few days?</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">These pesky pests are hovering over the food inside the kitchen</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Humid weather conditions can also be another sign of mosquito infestation</span>
                                </li>
                              </ul>
                            </div>
                          </div>
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-206e4d6 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="206e4d6">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c73add7" data-element_type="column" data-id="c73add7">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-68dcbd1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="68dcbd1">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6a641d8" data-element_type="column" data-id="6a641d8" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-2772224 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="2772224" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Stages of Treatment</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-4a41640 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="4a41640" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Different Stages of Treatments Offered from 7 States Pest Control</h2> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e27bd11" data-element_type="column" data-id="e27bd11" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-d7374af elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="d7374af" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            After our initial consultation with our clients, we visit
                            your location on the given date to perform the following tasks.								</div>
                        </div>
                        <div className="elementor-element elementor-element-227182d elementor-widget elementor-widget-spacer" data-element_type="widget" data-id="227182d" data-widget_type="spacer.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-spacer">
                              <div className="elementor-spacer-inner" />
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-2d01e47 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="2d01e47" data-widget_type="divider.default">
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
              </div>
            </div>
          </div>
        </section>
        <div className="elementor-element elementor-element-d55e4df e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="d55e4df">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-32563b1 e-con-full e-flex e-con e-child" data-element_type="container" data-id="32563b1" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
              <div className="elementor-element elementor-element-83c8a2c e-con-full e-flex e-con e-child" data-element_type="container" data-id="83c8a2c" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-7b40cf9 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="7b40cf9" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Investigate</h2> </div>
                </div>
                <div className="elementor-element elementor-element-dcc9e04 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="dcc9e04" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>Firstly, we will investigate your house from your yard to all corners.</p> </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-9669f46 e-con-full e-flex e-con e-child" data-element_type="container" data-id="9669f46" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
              <div className="elementor-element elementor-element-fa72616 elementor-widget elementor-widget-image" data-element_type="widget" data-id="fa72616" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img alt="Mosquito Pest Control" className="attachment-large size-large wp-image-1496" decoding="async" fetchpriority="high" height={460} sizes="(max-width: 800px) 100vw, 800px" src="/assets/images/Inspect.jpg-2-1024x589_4c31f610.webp" srcSet="/assets/images/Inspect.jpg-2-1024x589_4c31f610.webp 1024w, /assets/images/Inspect.jpg-2-300x173_5384baab.webp 300w, /assets/images/Inspect.jpg-2-768x442_db888596.webp 768w, /assets/images/Inspect.jpg-2_42955641.webp 1200w" width={800} /> </div>
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
                    <h2 className="elementor-heading-title elementor-size-default">Protect</h2> </div>
                </div>
                <div className="elementor-element elementor-element-5cbad47 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="5cbad47" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>After that, we will perform our mandatory steps to treat the structure’s perimeters with the right materials. Besides, our team uses the simplest methods to eliminate mosquitoes from your house.</p> </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-76b85d6 e-con-full e-flex e-con e-child" data-element_type="container" data-id="76b85d6">
              <div className="elementor-element elementor-element-88d7d34 elementor-widget elementor-widget-image" data-element_type="widget" data-id="88d7d34" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img alt="Mosquito Pest Control" className="attachment-large size-large wp-image-1497" decoding="async" height={400} sizes="(max-width: 600px) 100vw, 600px" src="/assets/images/Pest-Control-Professionals.jpg-2_fb3c30ca.webp" srcSet="/assets/images/Pest-Control-Professionals.jpg-2_fb3c30ca.webp 600w, /assets/images/Pest-Control-Professionals.jpg-2-300x200_2f6fc80e.webp 300w" width={600} /> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-6db632a e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="6db632a">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-1ce88d3 e-con-full e-flex e-con e-child" data-element_type="container" data-id="1ce88d3" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-b8bbfd9 e-con-full e-flex e-con e-child" data-element_type="container" data-id="b8bbfd9" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-e81dbe9 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="e81dbe9" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Remove Mosquito Habitats:</h2> </div>
                </div>
                <div className="elementor-element elementor-element-ab67da0 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="ab67da0" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>We will monitor standing water source to:</p> </div>
                </div>
                <div className="elementor-element elementor-element-1403332 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="1403332" data-widget_type="icon-list.default">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                        <span className="elementor-icon-list-text">Eliminate standing water</span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                        <span className="elementor-icon-list-text">Treat swimming pool water</span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                        <span className="elementor-icon-list-text">Drain temporary pools</span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                        <span className="elementor-icon-list-text">Empty &amp; change the water in the fountains, rain barrels, bird births, wading pools, and potted plants</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-a690ba8 e-con-full e-flex e-con e-child" data-element_type="container" data-id="a690ba8" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-94e7b80 elementor-widget elementor-widget-spacer" data-element_type="widget" data-id="94e7b80" data-widget_type="spacer.default">
                <div className="elementor-widget-container">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-6d2f68f e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="6d2f68f">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-bd22dbf e-con-full e-flex e-con e-child" data-element_type="container" data-id="bd22dbf" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-a9c3b2f e-con-full e-flex e-con e-child" data-element_type="container" data-id="a9c3b2f" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-59bd549 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="59bd549" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Use Structural Barriers</h2> </div>
                </div>
                <div className="elementor-element elementor-element-97793ac elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="97793ac" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>We use the structural barriers to reduce the bites incidence:</p> </div>
                </div>
                <div className="elementor-element elementor-element-b8346b6 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="b8346b6" data-widget_type="icon-list.default">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                        <span className="elementor-icon-list-text">Cover gaps in doors, walls, and windows</span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                        <span className="elementor-icon-list-text">Install a new door and window</span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                        <span className="elementor-icon-list-text">Cover baby carriers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-239f79d e-con-full e-flex e-con e-child" data-element_type="container" data-id="239f79d">
              <div className="elementor-element elementor-element-575479c elementor-widget elementor-widget-image" data-element_type="widget" data-id="575479c" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img alt="Mosquito Pest Control" className="attachment-large size-large wp-image-1509" decoding="async" height={505} loading="lazy" sizes="(max-width: 769px) 100vw, 769px" src="/assets/images/About-Pest-Control-6.jpg-3_47cafc0b.webp" srcSet="/assets/images/About-Pest-Control-6.jpg-3_47cafc0b.webp 769w, /assets/images/About-Pest-Control-6.jpg-3-300x197_ae251ea1.webp 300w" width={769} /> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-6e4b3a7 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="6e4b3a7">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-cac10eb e-con-full e-flex e-con e-child" data-element_type="container" data-id="cac10eb" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-31b59f2 e-con-full e-flex e-con e-child" data-element_type="container" data-id="31b59f2" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-d1c7125 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d1c7125" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Controlling Mosquitoes at their Larval Stage</h2> </div>
                </div>
                <div className="elementor-element elementor-element-c94d445 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="c94d445" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>The most significant impact on mosquito populations occurs when they are immobile, concentrated, and accessible. So, we focus on habitat management, thereby controlling immature stages before they emerge as adults.</p> </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-8e004d0 e-con-full e-flex e-con e-child" data-element_type="container" data-id="8e004d0" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-394e043 elementor-widget elementor-widget-spacer" data-element_type="widget" data-id="394e043" data-widget_type="spacer.default">
                <div className="elementor-widget-container">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-ec23c9e e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="ec23c9e">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-7a5e1c0 e-con-full e-flex e-con e-child" data-element_type="container" data-id="7a5e1c0" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-3d55a95 e-con-full e-flex e-con e-child" data-element_type="container" data-id="3d55a95" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-72d2226 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="72d2226" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Controlling Adult Mosquitoes</h2> </div>
                </div>
                <div className="elementor-element elementor-element-1b35c3f elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="1b35c3f" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>Using the EPA-registered pesticide is a speedy approach to combat mosquito-borne disease outbreaks. So, we also focus on controlling adult mosquitoes and eliminating them from your house.</p> </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-db52063 e-con-full e-flex e-con e-child" data-element_type="container" data-id="db52063">
              <div className="elementor-element elementor-element-996d4d3 elementor-widget elementor-widget-image" data-element_type="widget" data-id="996d4d3" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img alt="Mosquito Pest Control" className="attachment-large size-large wp-image-1512" decoding="async" height={461} loading="lazy" sizes="(max-width: 696px) 100vw, 696px" src="/assets/images/Controlling-Adult-Mosquitoes.jpg_ab0b800e.webp" srcSet="/assets/images/Controlling-Adult-Mosquitoes.jpg_ab0b800e.webp 696w, /assets/images/Controlling-Adult-Mosquitoes.jpg-300x199_77cbbca5.webp 300w" width={696} /> </div>
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
                            <h2 className="elementor-heading-title elementor-size-default">Why Choose</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-bd8e94d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="bd8e94d" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Why Choose Us for Mosquito Control Solutions?</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-4a957b0 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="4a957b0" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>Exterminating mosquitoes from your house requires a comprehensive approach. Thus, at 7 States Pest Control, our&nbsp;<Link to="/" rel="noopener">affordable pest control Melbourne</Link>&nbsp;consultants implement scientifically-proven methodologies to eliminate the pest from commercial and residential properties. Our effective pest control methods target the mosquito life cycle’s larval stage. With our practices, we try to eradicate different species of mosquitoes, including Aedes.</p> </div>
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-2d74212 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="2d74212">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8d5d93d" data-element_type="column" data-id="8d5d93d">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-dd8dacf elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="dd8dacf">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a8ca3bf" data-element_type="column" data-id="a8ca3bf" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-0569e8e elementor-widget elementor-widget-heading" data-element_type="widget" data-id="0569e8e" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Clients Reviews</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-2bf5210 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="2bf5210" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.eyebrow, '7 States Pest Control for Reliable Pest Management Solutions')}</h2> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b150b13" data-element_type="column" data-id="b150b13" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-33ab535 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="33ab535" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.subtitle, 'Reviews of Our Pest Control Services')}</h3> </div>
                        </div>
                        <div className="elementor-element elementor-element-6a62afd elementor-widget elementor-widget-heading" data-element_type="widget" data-id="6a62afd" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.title, 'EXCELLENT')}</h6> </div>
                        </div>
                        <div className="elementor-element elementor-element-5888580 elementor-widget elementor-widget-rating" data-element_type="widget" data-id="5888580" data-widget_type="rating.default">
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
                        <div className="elementor-element elementor-element-af100d3 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="af100d3" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>Based on&nbsp;45 reviews</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-0a6945b elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="0a6945b" data-widget_type="divider.default">
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
                <div className="elementor-element elementor-element-8199e69 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="8199e69">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-cd83928 elementor-widget elementor-widget-shortcode" data-element_type="widget" data-id="cd83928" data-widget_type="shortcode.default">
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
                        <div className="elementor-element elementor-element-4c825b4 elementor-widget elementor-widget-heading animated fadeInDown" data-element_type="widget" data-id="4c825b4" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Ideas to reality</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-7c67181 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="7c67181" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Talk to Us Today to Learn More</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-dbd1d11 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="dbd1d11" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            Do you have any specific questions about us, our services, or anything related to pest infestation issues? Call us today on&nbsp;<SitePhoneLink />&nbsp;or use our contact form to connect with our&nbsp;<b>7 States Pest Control</b>. You can get answers to your questions, get upfront quotes for the&nbsp;<b>7 States Pest Control</b>&nbsp;issues, and receive high-quality tailored services.								</div>
                        </div>
                        <div className="elementor-element elementor-element-e8de5c9 elementor-widget elementor-widget-button" data-element_type="widget" data-id="e8de5c9" data-widget_type="button.default">
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
