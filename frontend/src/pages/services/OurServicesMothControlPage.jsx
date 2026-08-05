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

export default function OurServicesMothControlPage() {
  const { page, content: c } = usePageCms('our-services-moth-control')
  usePageMeta('our_services_moth_control', page)

  return (
    <>
      <ServiceCmsStyles content={c} heroBgId="f469a6a" ctaBgId="057b4d3" />
      <ServiceFaqCms faq={c?.faq} accordionWidgetId="5146096" />
      <ServiceCmsContentBlocks content={c} />
      <div className="elementor elementor-1587" data-elementor-id={1587} data-elementor-post-type="page" data-elementor-type="wp-page">
        <div className="elementor-element elementor-element-f469a6a e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="f469a6a" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-76b5ed3 e-con-full e-flex e-con e-child" data-element_type="container" data-id="76b5ed3">
              <div className="elementor-element elementor-element-a34a8b1 elementor-icon-list--layout-inline elementor-align-left elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="a34a8b1" data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:720}" data-widget_type="icon-list.default">
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
                        <span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb_current, 'moth control')}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="elementor-element elementor-element-fa48924 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="fa48924" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'eliminatee moths')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-aeb925f elementor-widget elementor-widget-heading" data-element_type="widget" data-id="aeb925f" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.heading, 'Eliminate Moths from your Property with our Expert Pest Control Services')}</h1> </div>
              </div>
              <div className="elementor-element elementor-element-c716cf2 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="c716cf2" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <CmsHtml html={c?.hero?.intro} />
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-9adabde e-con-full e-flex e-con e-child" data-element_type="container" data-id="9adabde" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-38b7fac elementor-widget elementor-widget-heading" data-element_type="widget" data-id="38b7fac" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.title, 'Get A Free Quote Now!')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-185ca97 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="185ca97" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.subtitle, 'Have an enquiry? Leave us your details and we\'ll call you back during business hours.')}</h6> </div>
              </div>
              <div className="elementor-element elementor-element-20aa3c0 elementor-button-align-center elementor-widget elementor-widget-form" data-element_type="widget" data-id="20aa3c0" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                <div className="elementor-widget-container">
                  <form aria-label="New Form" className="elementor-form" id="home_contact_form" method="post" name="New Form">
                    <input name="post_id" type="hidden" defaultValue={1587} />
                    <input name="form_id" type="hidden" defaultValue="20aa3c0" />
                    <input name="referer_title" type="hidden" defaultValue="Carpet Moth Treatment in Melbourne | Starting Price $170" />
                    <input name="queried_id" type="hidden" defaultValue={1587} />
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
                            <h2 className="elementor-heading-title elementor-size-default">eliminatee moths</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-dd5b3de elementor-widget elementor-widget-heading" data-element_type="widget" data-id="dd5b3de" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Eliminate Moths from your Property with our Expert Pest Control Services</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-76690a4 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="76690a4" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="de434cf" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>Don’t let your pantry and closets get taken over by moths. Our highly trained moth extermination specialists are well-equipped to address moth infestations in your property. Are you witnessing irregular holes in your outfits and are searching for the reason behind the damage?</p><p>Are you searching for carpet treatment because of moth infestations? At&nbsp;<Link to="/"><strong>7 States Pest Control</strong></Link>, we offer you with top-quality&nbsp;<strong>Moth Control&nbsp;</strong>services. An established infestation of moths may often need professional treatment. A moth infestation is like a wolf dressed in sheep’s clothing. When compared to other pests, moth may appear to be harmless.</p><p>However, if you leave the infestation untreated, it can cause grave monetary damage. Moth infestations in your property are a potential health hazard too. To get the best moth elimination services, contact 7 States Pest Control today.</p></div></div> </div>
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
                    <h2 className="elementor-heading-title elementor-size-default">how to approach</h2> </div>
                </div>
                <div className="elementor-element elementor-element-4ebd325 elementor-widget elementor-widget-elementskit-heading" data-element_type="widget" data-id="4ebd325" data-widget_type="elementskit-heading.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con"><div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-"><h2 className="ekit-heading--title elementskit-section-title">Our Approach to Moth Extermination</h2></div></div> </div>
                </div>
                <div className="elementor-element elementor-element-24a7d2a elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="24a7d2a" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>Being a professional pest control agency, we follow a structured approach to deal with moths in your property.</p> </div>
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
                              <span className="elementor-icon-list-text">Investigate: Our trained pest control experts will inspect your home minutely to analyze the damage caused by moths. Upon inspection, we can also determine the entryway of moths.</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Treatment: We will treat the affected areas by relying on the safest methods. Unlike other agencies, we don’t use harsh chemicals.</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Fortify: Our experts will do everything they can to keep moths out. We even educate property owners about the signs of moth infestations.</span>
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-3b8e1f5 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="3b8e1f5">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5ea9855" data-element_type="column" data-id="5ea9855" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-background-overlay" />
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-1b2a36f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="1b2a36f">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-098d3c9" data-element_type="column" data-id="098d3c9">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-3b861a5 elementor-invisible elementor-widget elementor-widget-heading" data-element_type="widget" data-id="3b861a5" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default"> Cockroach Elimination</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-1b1d385 elementor-invisible elementor-widget elementor-widget-heading" data-element_type="widget" data-id="1b1d385" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Reasons to Opt for Fly Elimination Services from Us</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-9c7ed97 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="9c7ed97" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="de434cf" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>If you’re having problems with flies, don’t hesitate to contact 7 States Pest Control. We’re here to help you get rid of flies and other pests so you can enjoy your home or business pest-free.</p></div></div> </div>
                        </div>
                        <div className="elementor-element elementor-element-1a07306 e-con-full e-flex e-con e-child" data-element_type="container" data-id="1a07306">
                          <div className="elementor-element elementor-element-789d477 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="789d477" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">We are experienced and professional. Our technicians have years of experience in eliminating flies and other pests from homes and businesses. We know what works and what doesn't, and we'll use our expertise to develop a customized treatment plan for your property.</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">We use safe and effective methods. We use a variety of methods to control flies, including baits, traps, and insecticides. All of our methods are safe for people and pets, and we'll take steps to protect your property during treatment.</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">We offer free estimates and same-day service. We understand that fly infestations can be a pressing problem, so we offer free estimates and same-day service. We want to get rid of your flies as quickly as possible so you can enjoy your home or business pest-free.</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">We offer free estimates and same-day service. We understand that fly infestations can be a pressing problem, so we offer free estimates and same-day service. We want to get rid of your flies as quickly as possible so you can enjoy your home or business pest-free.</span>
                                </li>
                              </ul>
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
                            <h2 className="elementor-heading-title elementor-size-default">elimination service</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-fb916a7 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="fb916a7" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Components of our Moth Elimination Services</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-8ae0075 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="8ae0075" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>Here are the components of our moth elimination services.</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-34fc04c e-con-full e-flex e-con e-child" data-element_type="container" data-id="34fc04c">
                          <div className="elementor-element elementor-element-013cf33 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="013cf33" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">Technician from 7 states pest control will contact you to schedule a convenient time for inspection.</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">On arrival, we’ll explain the treatment process before commencing with moth elimination.</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">At 7 states pest control, we use highly sophisticated instruments and eco-friendly pesticides to treat moths.</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">We will highlight the areas infested by moths.</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                  <span className="elementor-icon-list-text">After treatment, we will arrange follow-up visits.</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-75ad2e3 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="75ad2e3" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <p>You can now terminate pesky moths from your property. Contact 7 States Pest Control to eliminate moths.</p> </div>
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-3fe4b1e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="3fe4b1e">
          <div className="elementor-background-overlay" />
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
                            <h2 className="elementor-heading-title elementor-size-default">how to do</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-bd8e94d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="bd8e94d" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Why is it Necessary to eliminate Moths from your Property?</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-4a957b0 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="4a957b0" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>To be precise, moths don’t bite or cause any direct harm to human settlements. But like other pests, they can inflict widespread damage on your personal items. Moreover, infestation of moths can adversely affect your family’s health. Here are some of the common dangers associated with specific types of moths.</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-824e7d2 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="824e7d2" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                <span className="elementor-icon-list-text">There are particular species of moths that can attack carpets and cloths. People wearing and using such things may experience severe allergies.</span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                <span className="elementor-icon-list-text">The hairs of the moths when they are caterpillars can trigger asthma.</span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                <span className="elementor-icon-list-text">Brown colored house moths typically feast on cereals and food products and can harm your health.</span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                <span className="elementor-icon-list-text">Moth droppings can contaminate your food.</span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                <span className="elementor-icon-list-text">Moths can make your life more stressful.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-dd5eb08 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="dd5eb08" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>So as you can see, moths are a menace to have in your property. If you are noticing the signs of moth infestations, contact us at the earliest. At 7 States Pest Control, we follow advanced moth control procedures and offer&nbsp;<Link to="/"><strong>affordable pest control in Melbourne</strong></Link>.</p> </div>
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
                      <div className="elementskit-accordion accoedion-primary" id="accordion-6a15903b169f6">
                        <div className="elementskit-card active">
                          <div className="elementskit-card-header" id="primaryHeading-0-5146096">
                            <a aria-controls="Collapse-6f491396a15903b169f6" aria-expanded="true" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-6f491396a15903b169f6" href="#collapse-6f491396a15903b169f6">
                              <span className="ekit-accordion-title"> 1. What makes 7 States Pest Control the best pest control service in Melbourne?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-0-5146096" className="show collapse" data-parent="#accordion-6a15903b169f6" id="Collapse-6f491396a15903b169f6">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>&nbsp;<b>7 States Pest Control</b>&nbsp;provides top-rated&nbsp;<b>pest control service in Melbourne</b>, using advanced techniques and eco-friendly products to eliminate pests quickly and safely. Our experienced team handles all types of infestations, ensuring long-term protection.</p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-1-5146096">
                            <a aria-controls="Collapse-042b3786a15903b169f6" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-042b3786a15903b169f6" href="#collapse-042b3786a15903b169f6">
                              <span className="ekit-accordion-title"> 2. Where can I find reliable pest control in Melbourne CBD?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-1-5146096" className="collapse" data-parent="#accordion-6a15903b169f6" id="Collapse-042b3786a15903b169f6">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>For fast and effective&nbsp;<b>pest control Melbourne CBD</b>, trust&nbsp;<b>7 States Pest Control</b>. We serve both residential and commercial properties in the central business district with tailored pest management solutions.</p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-2-5146096">
                            <a aria-controls="Collapse-fcc8da46a15903b169f6" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-fcc8da46a15903b169f6" href="#collapse-fcc8da46a15903b169f6">
                              <span className="ekit-accordion-title"> 3. How do I choose a professional pest exterminator in Melbourne?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-2-5146096" className="collapse" data-parent="#accordion-6a15903b169f6" id="Collapse-fcc8da46a15903b169f6">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>Look for licensed, experienced providers like&nbsp;<b>7 States Pest Control</b>. As a leading&nbsp;<b>pest exterminator Melbourne</b>, we offer prompt inspections, thorough extermination, and guaranteed results at competitive rates.</p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-3-5146096">
                            <a aria-controls="Collapse-247bb1b6a15903b169f6" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-247bb1b6a15903b169f6" href="#collapse-247bb1b6a15903b169f6">
                              <span className="ekit-accordion-title"> 4. Is there a trusted pest removal company in Melbourne?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-3-5146096" className="collapse" data-parent="#accordion-6a15903b169f6" id="Collapse-247bb1b6a15903b169f6">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>&nbsp;Yes,&nbsp;<b>7 States Pest Control</b>&nbsp;is your go-to expert for&nbsp;<b>pest removal Melbourne</b>. We identify the root cause of infestations and apply targeted treatments to remove pests from your home or business permanently.</p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-4-5146096">
                            <a aria-controls="Collapse-43386d36a15903b169f6" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-43386d36a15903b169f6" href="#collapse-43386d36a15903b169f6">
                              <span className="ekit-accordion-title"> 5. Why should I invest in pest control in Melbourne for my home or office?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-4-5146096" className="collapse" data-parent="#accordion-6a15903b169f6" id="Collapse-43386d36a15903b169f6">
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-3384b7a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="3384b7a">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d9f5a98" data-element_type="column" data-id="d9f5a98">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-4172835 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="4172835">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d13ece9" data-element_type="column" data-id="d13ece9">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-4483e9a elementor-widget elementor-widget-heading" data-element_type="widget" data-id="4483e9a" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Clients Reviews</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-6d8069f elementor-widget elementor-widget-heading" data-element_type="widget" data-id="6d8069f" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.eyebrow, '7 States Pest Control for Reliable Pest Management Solutions')}</h2> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8385c15" data-element_type="column" data-id="8385c15" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-1e4ad7e elementor-widget elementor-widget-heading" data-element_type="widget" data-id="1e4ad7e" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.subtitle, 'Reviews of Our Pest Control Services')}</h3> </div>
                        </div>
                        <div className="elementor-element elementor-element-84468a3 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="84468a3" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.title, 'EXCELLENT')}</h6> </div>
                        </div>
                        <div className="elementor-element elementor-element-d156669 elementor-widget elementor-widget-rating" data-element_type="widget" data-id="d156669" data-widget_type="rating.default">
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
                        <div className="elementor-element elementor-element-00c768a elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="00c768a" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>Based on&nbsp;45 reviews</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-faca2e5 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="faca2e5" data-widget_type="divider.default">
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
                <div className="elementor-element elementor-element-53a1295 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="53a1295">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-c9296c3 elementor-widget elementor-widget-shortcode" data-element_type="widget" data-id="c9296c3" data-widget_type="shortcode.default">
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
        <div className="elementor-element elementor-element-30a27c1 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="30a27c1">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-478e5b2 e-con-full e-flex e-con e-child" data-element_type="container" data-id="478e5b2">
              <div className="elementor-element elementor-element-c567bd6 e-con-full e-flex e-con e-child" data-element_type="container" data-id="c567bd6">
                <div className="elementor-element elementor-element-e7936ec elementor-widget elementor-widget-google_maps" data-element_type="widget" data-id="e7936ec" data-widget_type="google_maps.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-custom-embed">
                      <iframe aria-label="7 States Pest Control 22 Navigation Rd, Tarneit VIC 3029, Australia" loading="lazy" src="https://maps.google.com/maps?q=7%20States%20Pest%20Control%2022%20Navigation%20Rd%2C%20Tarneit%20VIC%203029%2C%20Australia&t=m&z=13&output=embed&iwloc=near" title="7 States Pest Control 22 Navigation Rd, Tarneit VIC 3029, Australia" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-0a5a3c5 e-con-full e-flex e-con e-child" data-element_type="container" data-id="0a5a3c5" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-element elementor-element-1d9f0be elementor-widget elementor-widget-heading" data-element_type="widget" data-id="1d9f0be" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.title, 'Get A Free Quote Now!')}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-921f990 elementor-button-align-center elementor-widget elementor-widget-form" data-element_type="widget" data-id="921f990" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                  <div className="elementor-widget-container">
                    <form aria-label="New Form" className="elementor-form" id="home_contact_form" method="post" name="New Form">
                      <input name="post_id" type="hidden" defaultValue={1587} />
                      <input name="form_id" type="hidden" defaultValue="921f990" />
                      <input name="referer_title" type="hidden" defaultValue="Carpet Moth Treatment in Melbourne | Starting Price $170" />
                      <input name="queried_id" type="hidden" defaultValue={1587} />
                      <div className="elementor-form-fields-wrapper elementor-labels-">
                        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-first_name elementor-col-100 elementor-field-required">
                          <label className="elementor-field-label elementor-screen-only" htmlFor="form-field-first_name">
                            First Name							</label>
                          <input className="elementor-field elementor-size-lg elementor-field-textual" id="form-field-first_name" name="form_fields[first_name]" placeholder="First Name" required type="text" />
                        </div>
                        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-last_name elementor-col-100">
                          <label className="elementor-field-label elementor-screen-only" htmlFor="form-field-last_name">
                            Last Name							</label>
                          <input className="elementor-field elementor-size-lg elementor-field-textual" id="form-field-last_name" name="form_fields[last_name]" placeholder="Last Name" type="text" />
                        </div>
                        <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-user_email elementor-col-100 elementor-field-required">
                          <label className="elementor-field-label elementor-screen-only" htmlFor="form-field-user_email">
                            Email							</label>
                          <input className="elementor-field elementor-size-lg elementor-field-textual" id="form-field-user_email" name="form_fields[user_email]" placeholder="Email" required type="email" />
                        </div>
                        <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-mobile_number elementor-col-100 elementor-field-required">
                          <label className="elementor-field-label elementor-screen-only" htmlFor="form-field-mobile_number">
                            Mobile Number							</label>
                          <PhoneNumberInput id="form-field-mobile_number" name="form_fields[mobile_number]" size="lg" />
                        </div>
                        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-suburb elementor-col-100">
                          <label className="elementor-field-label elementor-screen-only" htmlFor="form-field-suburb">
                            Suburb							</label>
                          <input className="elementor-field elementor-size-lg elementor-field-textual" id="form-field-suburb" name="form_fields[suburb]" placeholder="Suburb" type="text" />
                        </div>
                        <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100 elementor-field-required">
                          <label className="elementor-field-label elementor-screen-only" htmlFor="form-field-message">
                            Job description							</label>
                          <textarea className="elementor-field-textual elementor-field elementor-size-lg" id="form-field-message" name="form_fields[message]" placeholder="Job description" required rows={4} defaultValue={""} /> </div>
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
        </div>
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
