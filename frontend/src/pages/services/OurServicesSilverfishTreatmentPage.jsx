import PhoneNumberInput from '../../components/PhoneNumberInput.jsx'
import ServiceCmsContentBlocks from '../../components/service/ServiceCmsContentBlocks.jsx'
import ServiceFaqCms from '../../components/service/ServiceFaqCms.jsx'
import ServiceSilverfishSectionCms from '../../components/service/ServiceSilverfishSectionCms.jsx'
import { cmsText } from '../../utils/cmsMedia.js'
import usePageCms from '../../hooks/usePageCms.js'
import ServiceCmsStyles from '../../components/service/ServiceCmsStyles.jsx'
import CmsHtml from '../../components/home/CmsHtml.jsx'
import usePageMeta from '../../hooks/usePageMeta.js'
import { Link } from 'react-router-dom'

export default function OurServicesSilverfishTreatmentPage() {
  const { page, content: c, loading } = usePageCms('our-services-silverfish-treatment')
  usePageMeta('our_services_silverfish_treatment', page)

  return (
    <>
      <ServiceCmsStyles
        content={c}
        pageId={1602}
        heroBgId="d4c4a94"
        ctaBgId="057b4d3"
        sectionBgIds={[
          '4d9dc8f',
          'f8f8fa9',
          '29847cb',
          '894f45a',
          'caf2005',
          'f6e08bf',
          'c1ca80d',
          '2f23798',
        ]}
      />
      <ServiceCmsContentBlocks content={c} />
      <ServiceSilverfishSectionCms content={c} />
      <ServiceFaqCms faq={c?.faq} accordionWidgetId="5146096" sidebarCtaWidgetId="f30d45c" />
      <div className="elementor elementor-1602" data-elementor-id={1602} data-elementor-post-type="page" data-elementor-type="wp-page">
        <div className="elementor-element elementor-element-d4c4a94 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="d4c4a94" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-2a200c7 e-con-full e-flex e-con e-child" data-element_type="container" data-id="2a200c7">
              <div className="elementor-element elementor-element-abe4e80 elementor-icon-list--layout-inline elementor-align-left elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="abe4e80" data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:720}" data-widget_type="icon-list.default">
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
                        <span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb_current, 'silverfish treatment')}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="elementor-element elementor-element-5ab24cd elementor-widget elementor-widget-heading" data-element_type="widget" data-id="5ab24cd" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'Trusted and Reliable')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-0391fa8 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="0391fa8" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.heading, 'Get Trusted and Reliable Silverfish Treatment Services from Us')}</h1> </div>
              </div>
              <div className="elementor-element elementor-element-8bb11ba elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="8bb11ba" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  {c?.hero?.intro ? (
                    <CmsHtml html={c.hero.intro} />
                  ) : !loading ? (
                    <>
                      <p>Besides being a nuisance in your house, silverfish has destructive feeding habits. It is a pest popular for inflicting widespread damage in residential and commercial properties. If not treated on time, silverfish infestations can wreak havoc on the items of your home or office.</p>
                      <p>This small and silver-colored insect also poses significant health hazards that you cannot undermine. At 7 States Pest Control, we offer professional&nbsp;<strong>silverfish treatment</strong>&nbsp;to make your lives simpler.</p>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-d82fbea e-con-full e-flex e-con e-child" data-element_type="container" data-id="d82fbea" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-27351ee elementor-widget elementor-widget-heading" data-element_type="widget" data-id="27351ee" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.title, 'Get A Free Quote Now!')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-9d6e86c elementor-widget elementor-widget-heading" data-element_type="widget" data-id="9d6e86c" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.subtitle, "Have an enquiry? Leave us your details and we'll call you back during business hours.")}</h6> </div>
              </div>
              <div className="elementor-element elementor-element-2b53d72 elementor-button-align-center elementor-widget elementor-widget-form" data-element_type="widget" data-id="2b53d72" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                <div className="elementor-widget-container">
                  <form aria-label="New Form" className="elementor-form" id="home_contact_form" method="post" name="New Form">
                    <input name="post_id" type="hidden" defaultValue={1602} />
                    <input name="form_id" type="hidden" defaultValue="2b53d72" />
                    <input name="referer_title" type="hidden" defaultValue="Silverfish Treatment in Melbourne | Starting Price $170 Only." />
                    <input name="queried_id" type="hidden" defaultValue={1602} />
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
                        <div className="elementor-element elementor-element-8916f32 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="8916f32" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'Trusted and Reliable')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-dd5b3de elementor-widget elementor-widget-heading" data-element_type="widget" data-id="dd5b3de" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Get Trusted and Reliable Silverfish Treatment Services from Us</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-76690a4 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="76690a4" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="de434cf" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>Besides being a nuisance in your house, silverfish has destructive feeding habits. It is a pest popular for inflicting widespread damage in residential and commercial properties. If not treated on time, silverfish infestations can wreak havoc on the items of your home or office.</p><p>This small and silver-colored insect also poses significant health hazards that you cannot undermine. At 7 States Pest Control, we offer professional&nbsp;<strong>silverfish treatment</strong>&nbsp;to make your lives simpler.</p><p>Silverfish is nocturnal and discreet. It can cause an infestation to go unnoticed for longer time durations. Moreover, they can sustain in most environments. They are often found in dark and damp areas.</p><p>Note that in small numbers, silverfish bugs don’t create massive problems. However, a large-scale infestation can have severe repercussions. Contact&nbsp;<Link to="/"><strong>7 States Pest Control</strong></Link>&nbsp;at the earliest to address issues associated with silverfish infestations.&nbsp;</p></div></div> </div>
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
                    <h2 className="elementor-heading-title elementor-size-default">issues</h2> </div>
                </div>
                <div className="elementor-element elementor-element-4ebd325 elementor-widget elementor-widget-elementskit-heading" data-element_type="widget" data-id="4ebd325" data-widget_type="elementskit-heading.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con"><div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-"><h2 className="ekit-heading--title elementskit-section-title">Issues Related to Silverfish Infestations</h2></div></div> </div>
                </div>
                <div className="elementor-element elementor-element-24a7d2a elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="24a7d2a" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>Here are the issues associated with silverfish infestations in your home and property.</p> </div>
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
                              <span className="elementor-icon-list-text">Silverfish can create holes wherever it bites and creates yellow stains</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">These bugs carry allergens and can trigger asthma and other harmful illnesses</span>
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
                              <span className="elementor-icon-list-text">Silverfish live near food products and contaminate food</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Usually, silverfish hide behind clothing, stacks of paper documents and feed on them</span>
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
                            <h2 className="elementor-heading-title elementor-size-default">Symptoms of a Silverfish Infestation</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-adcf837 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="adcf837" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="de434cf" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="de434cf" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>Normally, it is pretty difficult to identify infestations associated with silverfish bugs. Here are some signs that we at 7 States Pest Control recommend to lookout for during silverfish infestations.</p></div></div></div></div> </div>
                        </div>
                        <div className="elementor-element elementor-element-34fc04c e-con-full e-flex e-con e-child" data-element_type="container" data-id="34fc04c">
                          <div className="elementor-element elementor-element-013cf33 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="013cf33" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Droppings and cast skin of silverfish appear like pepper. If you notice these pepper like substances periodically on walls or floors, you can conclude that your property has a silverfish connection.</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">If you have holes in decorative wallpapers, it may be due to a silverfish infestation.</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">You can also conduct a check in the moisture trapped and dark areas of your property. These areas are ideal for silverfish infestation.</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Silverfish prefer eating gum and glue. You can check furniture items that use glue or gum.</span>
                                </li>
                              </ul>
                            </div>
                          </div>
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
                    <h2 className="elementor-heading-title elementor-size-default">Our Approach to Treat Silverfish Infestation</h2> </div>
                </div>
                <div className="elementor-element elementor-element-a2624c7 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="a2624c7" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-element elementor-element-57329fa elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="57329fa" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><div className="elementor-element elementor-element-9407d80 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="9407d80" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>At 7 States Pest Control, we initiate a customized approach to treat silverfish infestation. Our silverfish pest control process depends on the following aspects, ensuring&nbsp;<Link to="/"><strong>affordable pest control in Melbourne</strong></Link>.</p></div></div></div></div> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-f4a91e8 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="f4a91e8">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-14e922c e-con-full e-flex e-con e-child" data-element_type="container" data-id="14e922c" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-5243596 e-con-full e-flex e-con e-child" data-element_type="container" data-id="5243596" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-ce41091 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="ce41091" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Investigate the Primary Cause of Silverfish Infestation</h2> </div>
                </div>
                <div className="elementor-element elementor-element-bc8e2a4 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="bc8e2a4" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-element elementor-element-57329fa elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="57329fa" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>Our professional pest control technicians will inspect your home for the presence of silverfish.</p></div></div> </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-29847cb e-con-full e-flex e-con e-child" data-element_type="container" data-id="29847cb" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-2a73df7 elementor-widget elementor-widget-spacer" data-element_type="widget" data-id="2a73df7" data-widget_type="spacer.default">
                <div className="elementor-widget-container">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-3b551d2 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="3b551d2">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-894f45a e-con-full e-flex e-con e-child" data-element_type="container" data-id="894f45a" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-18343b5 elementor-widget elementor-widget-spacer" data-element_type="widget" data-id="18343b5" data-widget_type="spacer.default">
                <div className="elementor-widget-container">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner" />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-4c7ecfb e-con-full e-flex e-con e-child" data-element_type="container" data-id="4c7ecfb" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-450d722 e-con-full e-flex e-con e-child" data-element_type="container" data-id="450d722" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-35840e7 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="35840e7" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Protection of Your Property from Silverfish</h2> </div>
                </div>
                <div className="elementor-element elementor-element-138f9ac elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="138f9ac" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-element elementor-element-57329fa elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="57329fa" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><div className="elementor-element elementor-element-9407d80 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="9407d80" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><div className="elementor-element elementor-element-9407d80 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="9407d80" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>We will treat your property’s perimeter properly to eliminate silverfish bugs.</p></div></div></div></div></div></div> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-d677e06 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="d677e06">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-7f4c70d e-con-full e-flex e-con e-child" data-element_type="container" data-id="7f4c70d" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-51e16bf e-con-full e-flex e-con e-child" data-element_type="container" data-id="51e16bf" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-fe2bf3a elementor-widget elementor-widget-heading" data-element_type="widget" data-id="fe2bf3a" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Securing Your Property to Fend off Silverfish Infestations</h2> </div>
                </div>
                <div className="elementor-element elementor-element-1b7d436 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="1b7d436" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-element elementor-element-57329fa elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="57329fa" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>Our expert pest control technicians will plug holes and seal cracks to prevent the entry of silverfish bugs.</p></div></div> </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-caf2005 e-con-full e-flex e-con e-child" data-element_type="container" data-id="caf2005" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-38d415d elementor-widget elementor-widget-spacer" data-element_type="widget" data-id="38d415d" data-widget_type="spacer.default">
                <div className="elementor-widget-container">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-6b4b9d5 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="6b4b9d5">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-f6e08bf e-con-full e-flex e-con e-child" data-element_type="container" data-id="f6e08bf" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-3ec5db4 elementor-widget elementor-widget-spacer" data-element_type="widget" data-id="3ec5db4" data-widget_type="spacer.default">
                <div className="elementor-widget-container">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner" />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-704eb37 e-con-full e-flex e-con e-child" data-element_type="container" data-id="704eb37" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-57e2863 e-con-full e-flex e-con e-child" data-element_type="container" data-id="57e2863" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-795098b elementor-widget elementor-widget-heading" data-element_type="widget" data-id="795098b" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Get Extensive Reports with Detailed Analysis</h2> </div>
                </div>
                <div className="elementor-element elementor-element-fea8dfa elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="fea8dfa" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-element elementor-element-57329fa elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="57329fa" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><div className="elementor-element elementor-element-9407d80 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="9407d80" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><div className="elementor-element elementor-element-9407d80 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="9407d80" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>What sets 7 States Pest Control apart is our transparency. We will provide a detailed report with the analysis of the silverfish control services offered to you.</p></div></div></div></div></div></div> </div>
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
                            <h2 className="elementor-heading-title elementor-size-default">Our USPs</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-4a957b0 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="4a957b0" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>As a trustworthy pest control agency, we at 7 States Pest Control have specific USPs as mentioned below.</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-a1a9155 e-con-full e-flex e-con e-child" data-element_type="container" data-id="a1a9155">
                          <div className="elementor-element elementor-element-ea18cb7 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="ea18cb7" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Same or next day silverfish control and treatment services</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Our pest control technicians are licensed and certified</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Upfront quotes</span>
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
                            <img alt="bed bug control melbourne" className="attachment-full size-full wp-image-1263" decoding="async" fetchpriority="high" height={800} sizes="(max-width: 1200px) 100vw, 1200px" src="/assets/images/Why-Pest-Control.jpg_ef5bccf6.webp" srcSet="/assets/images/Why-Pest-Control.jpg_ef5bccf6.webp 1200w, /assets/images/Why-Pest-Control.jpg-300x200_676ac02e.webp 300w, /assets/images/Why-Pest-Control.jpg-1024x683_372d25a3.webp 1024w, /assets/images/Why-Pest-Control.jpg-768x512_05381ce3.webp 768w" width={1200} /> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-dbe84ac elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="dbe84ac">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-d36e2bb" data-element_type="column" data-id="d36e2bb">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-32945a7 elementor-invisible elementor-widget elementor-widget-heading" data-element_type="widget" data-id="32945a7" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Frequently Asked Questions</h2> </div>
                </div>
                <div className="elementor-element elementor-element-5146096 elementor-widget elementor-widget-elementskit-accordion" data-element_type="widget" data-id="5146096" data-widget_type="elementskit-accordion.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con">
                      <div className="elementskit-accordion accoedion-primary" id="accordion-6a15c7e3af9b9">
                        <div className="elementskit-card active">
                          <div className="elementskit-card-header" id="primaryHeading-0-5146096">
                            <a aria-controls="Collapse-6f491396a15c7e3af9b9" aria-expanded="true" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-6f491396a15c7e3af9b9" href="#collapse-6f491396a15c7e3af9b9">
                              <span className="ekit-accordion-title"> 1. What makes 7 States Pest Control the best pest control service in Melbourne?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-0-5146096" className="show collapse" data-parent="#accordion-6a15c7e3af9b9" id="Collapse-6f491396a15c7e3af9b9">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>&nbsp;<b>7 States Pest Control</b>&nbsp;provides top-rated&nbsp;<b>pest control service in Melbourne</b>, using advanced techniques and eco-friendly products to eliminate pests quickly and safely. Our experienced team handles all types of infestations, ensuring long-term protection.</p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-1-5146096">
                            <a aria-controls="Collapse-042b3786a15c7e3af9b9" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-042b3786a15c7e3af9b9" href="#collapse-042b3786a15c7e3af9b9">
                              <span className="ekit-accordion-title"> 2. Where can I find reliable pest control in Melbourne CBD?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-1-5146096" className="collapse" data-parent="#accordion-6a15c7e3af9b9" id="Collapse-042b3786a15c7e3af9b9">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>For fast and effective&nbsp;<b>pest control Melbourne CBD</b>, trust&nbsp;<b>7 States Pest Control</b>. We serve both residential and commercial properties in the central business district with tailored pest management solutions.</p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-2-5146096">
                            <a aria-controls="Collapse-fcc8da46a15c7e3af9b9" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-fcc8da46a15c7e3af9b9" href="#collapse-fcc8da46a15c7e3af9b9">
                              <span className="ekit-accordion-title"> 3. How do I choose a professional pest exterminator in Melbourne?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-2-5146096" className="collapse" data-parent="#accordion-6a15c7e3af9b9" id="Collapse-fcc8da46a15c7e3af9b9">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>Look for licensed, experienced providers like&nbsp;<b>7 States Pest Control</b>. As a leading&nbsp;<b>pest exterminator Melbourne</b>, we offer prompt inspections, thorough extermination, and guaranteed results at competitive rates.</p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-3-5146096">
                            <a aria-controls="Collapse-247bb1b6a15c7e3af9b9" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-247bb1b6a15c7e3af9b9" href="#collapse-247bb1b6a15c7e3af9b9">
                              <span className="ekit-accordion-title"> 4. Is there a trusted pest removal company in Melbourne?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-3-5146096" className="collapse" data-parent="#accordion-6a15c7e3af9b9" id="Collapse-247bb1b6a15c7e3af9b9">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>&nbsp;Yes,&nbsp;<b>7 States Pest Control</b>&nbsp;is your go-to expert for&nbsp;<b>pest removal Melbourne</b>. We identify the root cause of infestations and apply targeted treatments to remove pests from your home or business permanently.</p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-4-5146096">
                            <a aria-controls="Collapse-43386d36a15c7e3af9b9" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-43386d36a15c7e3af9b9" href="#collapse-43386d36a15c7e3af9b9">
                              <span className="ekit-accordion-title"> 5. Why should I invest in pest control in Melbourne for my home or office?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-4-5146096" className="collapse" data-parent="#accordion-6a15c7e3af9b9" id="Collapse-43386d36a15c7e3af9b9">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>Regular&nbsp;<b>pest control in Melbourne</b>&nbsp;helps protect your property from damage and health risks.&nbsp;<b>7 States Pest Control</b>&nbsp;offers comprehensive services that keep your environment pest-free and comfortable year-round.</p> </div>
                          </div>
                        </div>
                      </div>
                    </div> </div>
                </div>
              </div>
            </div>
            <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-179aeee" data-element_type="column" data-id="179aeee">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-b850a5f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="b850a5f">
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-c2cd92d" data-element_type="column" data-id="c2cd92d">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-d26b015 elementor-widget elementor-widget-image" data-element_type="widget" data-id="d26b015" data-widget_type="image.default">
                          <div className="elementor-widget-container">
                            <img alt="7 States Pest Control" className="attachment-full size-full wp-image-778" decoding="async" height={1280} sizes="(max-width: 1280px) 100vw, 1280px" src="/assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1_ecbbd918.jpg" srcSet="/assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1_ecbbd918.jpg 1280w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-300x30_e03d7ebf.jpg 300w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-1024x1_359a34a8.jpg 1024w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-150x15_3201d1bd.jpg 150w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-768x76_a05df40f.jpg 768w" width={1280} /> </div>
                        </div>
                        <div className="elementor-element elementor-element-f30d45c elementor-widget__width-initial elementor-absolute ekit-equal-height-disable elementor-invisible elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="f30d45c" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;_animation&quot;:&quot;slideInLeft&quot;}" data-widget_type="elementskit-icon-box.default">
                          <div className="elementor-widget-container">
                            <div className="ekit-wid-con">
                              <div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
                                <div className="box-body">
                                  <h3 className="elementskit-info-box-title">
                                    Any questions you want to ask?              </h3>
                                  <p>Find answers to common questions about our pest control services, treatments, safety, and scheduling.</p>
                                  <div className="box-footer disable_hover_button">
                                    <div className="btn-wraper">
                                      <a className="elementskit-btn whitespace--normal" href="#">
                                        Contact Us                                  </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-69a2b61 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="69a2b61">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a223e2d" data-element_type="column" data-id="a223e2d">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-b89c3ee elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="b89c3ee">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-9b34410" data-element_type="column" data-id="9b34410">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-02c8fc4 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="02c8fc4" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Clients Reviews</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-6eeb43e elementor-widget elementor-widget-heading" data-element_type="widget" data-id="6eeb43e" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.eyebrow, '7 States Pest Control for Reliable Pest Management Solutions')}</h2> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5193e87" data-element_type="column" data-id="5193e87" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-ce3fd5e elementor-widget elementor-widget-heading" data-element_type="widget" data-id="ce3fd5e" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.subtitle, 'Reviews of Our Pest Control Services')}</h3> </div>
                        </div>
                        <div className="elementor-element elementor-element-75b617d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="75b617d" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.title, 'EXCELLENT')}</h6> </div>
                        </div>
                        <div className="elementor-element elementor-element-e98062a elementor-widget elementor-widget-rating" data-element_type="widget" data-id="e98062a" data-widget_type="rating.default">
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
                        <div className="elementor-element elementor-element-4439bbb elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="4439bbb" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>Based on&nbsp;45 reviews</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-17d2f37 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="17d2f37" data-widget_type="divider.default">
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
                <div className="elementor-element elementor-element-49700e3 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="49700e3">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-306bc0d elementor-widget elementor-widget-shortcode" data-element_type="widget" data-id="306bc0d" data-widget_type="shortcode.default">
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
                        <div className="elementor-element elementor-element-7c67181 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="7c67181" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Talk to Us Today to Learn More</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-dbd1d11 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="dbd1d11" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            Do you have any specific questions about us, our services, or anything related to pest infestation issues? Call us today on&nbsp;<a href="tel:+61434660060"> +61 434 660 060</a>&nbsp;or use our contact form to connect with our&nbsp;<b>7 States Pest Control</b>. You can get answers to your questions, get upfront quotes for the&nbsp;<b>7 States Pest Control</b>&nbsp;issues, and receive high-quality tailored services.								</div>
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
