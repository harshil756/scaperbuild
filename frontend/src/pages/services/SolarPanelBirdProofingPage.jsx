import PhoneNumberInput from '../../components/PhoneNumberInput.jsx'
import CmsHtml from '../../components/home/CmsHtml.jsx'
import SolarAdvantagesCards from '../../components/solar/SolarAdvantagesCards.jsx'
import SolarBlogPosts from '../../components/solar/SolarBlogPosts.jsx'
import SolarFaqSection from '../../components/solar/SolarFaqSection.jsx'
import SolarPanelCmsBinder from '../../components/solar/SolarPanelCmsBinder.jsx'
import SolarPanelCmsStyles from '../../components/solar/SolarPanelCmsStyles.jsx'
import SolarServiceCards from '../../components/solar/SolarServiceCards.jsx'
import SolarSignsCards from '../../components/solar/SolarSignsCards.jsx'
import SolarWhyChooseCards from '../../components/solar/SolarWhyChooseCards.jsx'
import SolarWhyEssentialCards from '../../components/solar/SolarWhyEssentialCards.jsx'
import usePageCms from '../../hooks/usePageCms.js'
import { cmsText } from '../../utils/cmsMedia.js'
import usePageMeta from '../../hooks/usePageMeta.js'
import { Link } from 'react-router-dom'

export default function SolarPanelBirdProofingPage() {
  const { page, content: c } = usePageCms('solar-panel-bird-proofing')
  usePageMeta('solar_panel_bird_proofing', page)

  return (
    <>
      <SolarPanelCmsStyles content={c} />
      <SolarPanelCmsBinder content={c} />
      <div className="elementor elementor-1353" data-elementor-id={1353} data-elementor-post-type="page" data-elementor-type="wp-page">
        <div className="elementor-element elementor-element-ba9dae3 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="ba9dae3" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-54abbef e-con-full e-flex e-con e-child" data-element_type="container" data-id="54abbef">
              <div className="elementor-element elementor-element-3b60242 elementor-icon-list--layout-inline elementor-align-left elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="3b60242" data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:720}" data-widget_type="icon-list.default">
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
                        <span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb, 'Get Affordable Bird Removal Service')}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="elementor-element elementor-element-d943147 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d943147" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'Solar Panel Bird Protection Services')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-8153e7d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="8153e7d" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.heading, 'Get Affordable Bird Removal Services in Melbourne')}</h1> </div>
              </div>
              <div className="elementor-element elementor-element-7a605c4 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="7a605c4" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <CmsHtml html={c?.hero?.intro} />
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-6269433 e-con-full e-flex e-con e-child" data-element_type="container" data-id="6269433" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-a1efe77 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="a1efe77" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Get A Free Quote Now!</h2> </div>
              </div>
              <div className="elementor-element elementor-element-b5f062e elementor-widget elementor-widget-heading" data-element_type="widget" data-id="b5f062e" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">Have an enquiry? Leave us your details and we’ll call you back during business hours.</h6> </div>
              </div>
              <div className="elementor-element elementor-element-f8f3bfd elementor-button-align-center elementor-widget elementor-widget-form" data-element_type="widget" data-id="f8f3bfd" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                <div className="elementor-widget-container">
                  <form aria-label="New Form" className="elementor-form" id="home_contact_form" method="post" name="New Form">
                    <input name="post_id" type="hidden" defaultValue={1353} />
                    <input name="form_id" type="hidden" defaultValue="f8f3bfd" />
                    <input name="referer_title" type="hidden" defaultValue="Solar Panel Bird Proofing Services in Melbourne" />
                    <input name="queried_id" type="hidden" defaultValue={1353} />
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-76a7787 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="76a7787">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-de3415d" data-element_type="column" data-id="de3415d" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-background-overlay" />
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-54dbedf elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="54dbedf">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a4d02a5" data-element_type="column" data-id="a4d02a5">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-69e92b8 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="69e92b8" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">About Us</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-30889d3 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="30889d3" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Protect Your Property with Bird Nest Removal &amp; Solar Panel Bird Proofing Services in Melbourne</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-751c049 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="751c049" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>Our bird nest removal service is designed to safely and effectively address nests that may be causing damage around your property. Whether it’s in your roof, gutters, or other hard-to-reach spots, our team uses humane methods to carefully remove the nests, ensuring no harm comes to the birds. We understand the importance of handling these situations with care, prioritising both your property’s safety and the well-being of the birds.</p><p>In addition to bird nest removal, we specialise in solar panel bird proofing across Melbourne. Birds, particularly pigeons and seagulls, can cause significant damage to solar panels by nesting underneath them. This can block your panels’ efficiency and result in costly repairs. Our solar panel bird proofing services are tailored to prevent birds from nesting under your panels, ensuring your solar system continues to operate at its best. We use high-quality materials and professional techniques to provide long-lasting protection, keeping your panels clean and functioning optimally.</p> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-af4a171" data-element_type="column" data-id="af4a171" data-settings="{&quot;animation&quot;:&quot;none&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-ef5144d elementor-widget elementor-widget-video" data-element_type="widget" data-id="ef5144d" data-settings="{&quot;youtube_url&quot;:&quot;https:\/\/youtu.be\/XR48IX97aMI?si=KFNO-nAi1GCjrSvj&quot;,&quot;video_type&quot;:&quot;youtube&quot;,&quot;controls&quot;:&quot;yes&quot;}" data-widget_type="video.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-wrapper elementor-open-inline">
                              <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="elementor-video" data-gtm-yt-inspected-16="true" frameBorder={0} height={360} id="widget2" referrerPolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/XR48IX97aMI?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2F7statespestcontrol.com.au&widgetid=1&forigin=https%3A%2F%2F7statespestcontrol.com.au%2Fsolar-panel-bird-proofing%2F&aoriginsup=1&vf=1" title="Complete Solar Panel Bird Proofing & Cleaning Services in Melbourne – Netting, Spikes & More!" width={640} /> </div>
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
        <div className="elementor-element elementor-element-9630408 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="9630408" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-0772a08 e-con-full e-flex e-con e-child" data-element_type="container" data-id="0772a08">
              <div className="elementor-element elementor-element-75692a3 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="75692a3" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.services?.title, 'Complete Solar Panel Bird Protection Services')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-3440d1b elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="3440d1b" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <CmsHtml html={c?.services?.intro} />
                </div>
              </div>
            </div>
            <SolarServiceCards items={c?.services?.items ?? []} />
            
            <div className="elementor-element elementor-element-972e1d3 e-con-full e-flex e-con e-child" data-element_type="container" data-id="972e1d3">
              <div className="elementor-element elementor-element-6be9f35 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="6be9f35" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <CmsHtml html={c?.services?.footer} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-1f6db9f e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="1f6db9f">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-f5a23e4 e-con-full e-flex e-con e-child" data-element_type="container" data-id="f5a23e4">
              <div className="elementor-element elementor-element-e5287db elementor-widget elementor-widget-heading" data-element_type="widget" data-id="e5287db" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.why_essential?.title, 'Why Bird Pest Control in Melbourne is Essential for Protecting Your Property?')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-879c572 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="879c572" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <CmsHtml html={c?.why_essential?.intro} />
                </div>
              </div>
            </div>
            <SolarWhyEssentialCards items={c?.why_essential?.items ?? []} />
            
          </div>
        </div>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-a047a50 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="a047a50" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a9f9b92" data-element_type="column" data-id="a9f9b92" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-a95347b elementor-widget elementor-widget-elementskit-heading" data-element_type="widget" data-id="a95347b" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="elementskit-heading.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con"><div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-"><h2 className="ekit-heading--title elementskit-section-title">Signs of Bird Infestation</h2></div></div> </div>
                </div>
                <div className="elementor-element elementor-element-cc342b7 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="cc342b7" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>How can you tell if birds are making a home on your property? Keep an eye out for these common signs of bird infestation:</p> </div>
                </div>
                <div className="elementor-element elementor-element-9d3fdbf e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="9d3fdbf">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-c9a4af3 e-con-full e-flex e-con e-child" data-element_type="container" data-id="c9a4af3">
                      <div className="elementor-element elementor-element-6e22567 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="6e22567" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Feathers and Debris</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Foul Odour</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Damage to Property</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-fb6e78b e-con-full e-flex e-con e-child" data-element_type="container" data-id="fb6e78b">
                      <div className="elementor-element elementor-element-ca89e4b elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="ca89e4b" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Visible Bird Nests</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Droppings Accumulation</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Bird Noises</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Blocked Gutters or Drains</span>
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
        <div className="elementor-element elementor-element-9646bde e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="9646bde" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-18f2cd8 e-con-full e-flex e-con e-child" data-element_type="container" data-id="18f2cd8">
              <div className="elementor-element elementor-element-794947e e-con-full e-flex e-con e-child" data-element_type="container" data-id="794947e">
                <div className="elementor-element elementor-element-63390a6 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="63390a6" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Signs of Bird Infestation</h2> </div>
                </div>
                <div className="elementor-element elementor-element-26fb24f elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="26fb24f" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>How can you tell if birds are making a home on your property? Keep an eye out for these common signs of bird infestation:</p> </div>
                </div>
              </div>
            </div>
            <SolarSignsCards items={c?.signs?.items ?? []} />
            
          </div>
        </div>
        <div className="elementor-element elementor-element-6e63bc1 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="6e63bc1" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-1822e51 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="1822e51" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Sustainable Bird Proofing for Your Property</h2> </div>
            </div>
            <div className="elementor-element elementor-element-d1f7418 e-con-full e-flex e-con e-child" data-element_type="container" data-id="d1f7418">
              <div className="elementor-element elementor-element-1ccf6e3 e-con-full e-flex e-con e-child" data-element_type="container" data-id="1ccf6e3">
                <div className="elementor-element elementor-element-d6889d0 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="d6889d0" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>Birds are an integral part of nature, but when they begin nesting on your property, they can cause significant issues. At&nbsp;<span style={{color: '#ffffff'}}><Link to="/" style={{color: '#ffffff'}}><strong>7 States Pest Control</strong></Link>,</span> we offer bird proofing solutions that protect your solar panels, roofs, gutters, and other property areas from damage, all while remaining eco-friendly and humane. Our methods are designed to keep birds away without harming them, ensuring long-lasting protection for your home.</p> </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-45473b1 e-con-full e-flex e-con e-child" data-element_type="container" data-id="45473b1">
                <div className="elementor-element elementor-element-aab713d elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="aab713d" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>Here’s how our methods ensure everything is safe and secure:</p> </div>
                </div>
                <div className="elementor-element elementor-element-fd8c2a0 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="fd8c2a0" data-widget_type="icon-list.default">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                        <span className="elementor-icon-list-text">Environmentally Safe Materials: We use bird-proofing products made from sustainable and eco-conscious materials, ensuring that no harm comes to the environment while safeguarding your property.</span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                        <span className="elementor-icon-list-text">Safe Deterrents for Birds: Our bird-proofing techniques focus on gently deterring birds from nesting under your solar panels or other hard-to-reach places without causing harm. These safe deterrents help to keep the birds at bay while respecting their natural habits.</span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                        <span className="elementor-icon-list-text">Professional, Secure Installation: Our experienced team takes care of every detail during installation to ensure that the bird-proofing systems are secure and effectively keep birds from entering your property. We focus on providing long-term protection that doesn’t compromise the structure of your home.</span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                        <span className="elementor-icon-list-text">Ongoing Monitoring and Maintenance: We offer continued monitoring to ensure that our bird-proofing methods remain effective year-round, addressing any changes in bird behaviour or potential weaknesses in the protection system.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-d3bcb94 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="d3bcb94" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-1718067 e-con-full e-flex e-con e-child" data-element_type="container" data-id="1718067" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
              <div className="elementor-element elementor-element-78b0737 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="78b0737" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">The Advantages of Bird Proofing for Solar Panels in Melbourne</h2> </div>
              </div>
              <div className="elementor-element elementor-element-751b963 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="751b963" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>Investing in bird proofing for your solar panels not only protects your system but also ensures optimal performance and longevity. While the costs of bird-proofing can vary depending on your specific needs, the benefits far outweigh the expense. Here’s why bird proofing is a must for solar panel owners in Melbourne:</p> </div>
              </div>
            </div>
            <SolarAdvantagesCards items={c?.advantages?.items ?? []} />
            
          </div>
        </div>
        <div className="elementor-element elementor-element-b4ac228 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="b4ac228" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-146cab3 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="146cab3" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Solar Panel Bird Proofing and Cleaning Process</h2> </div>
            </div>
            <div className="elementor-element elementor-element-1a621e7 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="1a621e7" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                <p>Our process is designed to be seamless and stress-free:</p> </div>
            </div>
            <div className="elementor-element elementor-element-ea5638f e-con-full e-flex e-con e-child" data-element_type="container" data-id="ea5638f">
              <div className="elementor-element elementor-element-02b3a90 e-con-full e-flex e-con e-child" data-element_type="container" data-id="02b3a90" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-element elementor-element-d572708 elementor-widget elementor-widget-icon-box" data-element_type="widget" data-id="d572708" data-widget_type="icon-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-content">
                        <h3 className="elementor-icon-box-title">
                          <span>
                            Request a Quote						</span>
                        </h3>
                        <p className="elementor-icon-box-description">
                          Contact us to receive a detailed quote tailored to your specific needs. We’ll assess the requirements of your property and provide a transparent pricing breakdown.					</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-903b6e0 elementor-align-center elementor-widget elementor-widget-button" data-element_type="widget" data-id="903b6e0" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a className="elementor-button elementor-button-link elementor-size-sm" href="tel:+61434660060">
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">Call us Now : +61 434 660 060</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-1d63b03 e-con-full e-flex e-con e-child" data-element_type="container" data-id="1d63b03" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-element elementor-element-c251c13 elementor-widget elementor-widget-icon-box" data-element_type="widget" data-id="c251c13" data-widget_type="icon-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-content">
                        <h3 className="elementor-icon-box-title">
                          <span>
                            Inspection &amp; Custom Solution						</span>
                        </h3>
                        <p className="elementor-icon-box-description">
                          Our team will inspect your solar panels, identify any bird-related issues, and create a customised bird proofing plan. This includes cleaning your panels and installing effective bird deterrents like bird mesh to ensure long-term protection.					</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-f943b69 e-con-full e-flex e-con e-child" data-element_type="container" data-id="f943b69" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-element elementor-element-a6aec25 elementor-widget elementor-widget-icon-box" data-element_type="widget" data-id="a6aec25" data-widget_type="icon-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-content">
                        <h3 className="elementor-icon-box-title">
                          <span>
                            Installation &amp; Ongoing Maintenance						</span>
                        </h3>
                        <p className="elementor-icon-box-description">
                          Once you approve the plan, we’ll carry out the bird-proofing installation quickly and professionally. We also offer regular maintenance services to ensure your panels remain clean and fully protected from bird-related damage.					</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-2f6446f e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="2f6446f">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-2c61aef elementor-widget elementor-widget-heading" data-element_type="widget" data-id="2c61aef" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Understanding the Cost of Solar Panel Bird Proofing in Melbourne</h2> </div>
            </div>
            <div className="elementor-element elementor-element-fa0244c elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="fa0244c" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                <p>The cost of bird proofing your solar panels can vary based on a few key factors:</p> </div>
            </div>
            <div className="elementor-element elementor-element-37691df elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="37691df" data-widget_type="icon-list.default">
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                    <span className="elementor-icon-list-text">Number of solar panels to be protected</span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                    <span className="elementor-icon-list-text">Roof height and slope</span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                    <span className="elementor-icon-list-text">Need for nest removal before installation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="elementor-element elementor-element-687d362 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="687d362" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                <p>At 7 States Pest Control, we offer&nbsp;<Link to="/"><strong>affordable pest control Melbourne</strong></Link>&nbsp;&amp; bird proofing solutions in Melbourne. Our pricing is competitive, ensuring high-quality service that fits within your budget.</p> </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-644c689 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="644c689" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-dfdc56d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="dfdc56d" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Why You Should Choose Us for Your Bird Proofing Services</h2> </div>
            </div>
            <SolarWhyChooseCards items={c?.why_choose?.items ?? []} />
            
          </div>
        </div>
        <div className="elementor-element elementor-element-ab45ce1 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="ab45ce1">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-4ea020a elementor-widget elementor-widget-heading" data-element_type="widget" data-id="4ea020a" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Our Results Speak For Themselves</h2> </div>
            </div>
            <div className="elementor-element elementor-element-48d6bba elementor-arrows-position-inside elementor-pagination-position-outside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-element_type="widget" data-id="48d6bba" data-settings="{&quot;lazyload&quot;:&quot;yes&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;image_spacing_custom&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:20,&quot;sizes&quot;:[]},&quot;image_spacing_custom_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_spacing_custom_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="image-carousel.default">
              <div className="elementor-widget-container">
                <div aria-label="Image Carousel" aria-roledescription="carousel" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" dir="ltr" role="region">
                  <div aria-live="off" className="elementor-image-carousel swiper-wrapper" id="swiper-wrapper-af41083e93759f279" style={{transitionDuration: '0ms', transform: 'translate3d(-1626.67px, 0px, 0px)'}}><div aria-hidden="true" aria-label="2 / 4" aria-roledescription="slide" className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index={1} inert role="group" style={{width: '386.667px', marginRight: 20}}><figure className="swiper-slide-inner"><img alt="solar panel bird proofing melbourne" className="swiper-slide-image swiper-lazy swiper-lazy-loaded" src="/assets/images/before-after-03-1024x1024-1_95957117.jpg" /></figure></div><div aria-hidden="true" aria-label="3 / 4" aria-roledescription="slide" className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index={2} inert role="group" style={{width: '386.667px', marginRight: 20}}><figure className="swiper-slide-inner"><img alt="solar panel bird proofing melbourne" className="swiper-slide-image swiper-lazy swiper-lazy-loaded" src="/assets/images/before-after-02-1024x1024-1_60ed9d75.jpg" /></figure></div><div aria-hidden="true" aria-label="4 / 4" aria-roledescription="slide" className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={3} inert role="group" style={{width: '386.667px', marginRight: 20}}><figure className="swiper-slide-inner"><img alt="solar panel bird proofing melbourne" className="swiper-slide-image swiper-lazy swiper-lazy-loaded" src="/assets/images/before-after-01-1024x1024-1_9303bf19.jpg" /></figure></div>
                    <div aria-hidden="true" aria-label="1 / 4" aria-roledescription="slide" className="swiper-slide swiper-slide-prev" data-swiper-slide-index={0} inert role="group" style={{width: '386.667px', marginRight: 20}}><figure className="swiper-slide-inner"><img alt="solar panel bird proofing melbourne" className="swiper-slide-image swiper-lazy swiper-lazy-loaded" src="/assets/images/before-after-04-1024x1024-1_ca197e11.jpg" /></figure></div><div aria-label="2 / 4" aria-roledescription="slide" className="swiper-slide swiper-slide-active" data-swiper-slide-index={1} role="group" style={{width: '386.667px', marginRight: 20}}><figure className="swiper-slide-inner"><img alt="solar panel bird proofing melbourne" className="swiper-slide-image swiper-lazy swiper-lazy-loaded" src="/assets/images/before-after-03-1024x1024-1_95957117.jpg" /></figure></div><div aria-label="3 / 4" aria-roledescription="slide" className="swiper-slide swiper-slide-next" data-swiper-slide-index={2} role="group" style={{width: '386.667px', marginRight: 20}}><figure className="swiper-slide-inner"><img alt="solar panel bird proofing melbourne" className="swiper-slide-image swiper-lazy swiper-lazy-loaded" src="/assets/images/before-after-02-1024x1024-1_60ed9d75.jpg" /></figure></div><div aria-label="4 / 4" aria-roledescription="slide" className="swiper-slide" data-swiper-slide-index={3} role="group" style={{width: '386.667px', marginRight: 20}}><figure className="swiper-slide-inner"><img alt="solar panel bird proofing melbourne" className="swiper-slide-image swiper-lazy swiper-lazy-loaded" src="/assets/images/before-after-01-1024x1024-1_9303bf19.jpg" /></figure></div> <div aria-hidden="true" aria-label="1 / 4" aria-roledescription="slide" className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index={0} inert role="group" style={{width: '386.667px', marginRight: 20}}><figure className="swiper-slide-inner"><img alt="solar panel bird proofing melbourne" className="swiper-slide-image swiper-lazy swiper-lazy-loaded" src="/assets/images/before-after-04-1024x1024-1_ca197e11.jpg" /></figure></div><div aria-hidden="true" aria-label="2 / 4" aria-roledescription="slide" className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index={1} inert role="group" style={{width: '386.667px', marginRight: 20}}><figure className="swiper-slide-inner"><img alt="solar panel bird proofing melbourne" className="swiper-slide-image swiper-lazy swiper-lazy-loaded" src="/assets/images/before-after-03-1024x1024-1_95957117.jpg" /></figure></div><div aria-hidden="true" aria-label="3 / 4" aria-roledescription="slide" className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index={2} inert role="group" style={{width: '386.667px', marginRight: 20}}><figure className="swiper-slide-inner"><img alt="solar panel bird proofing melbourne" className="swiper-slide-image swiper-lazy swiper-lazy-loaded" src="/assets/images/before-after-02-1024x1024-1_60ed9d75.jpg" /></figure></div></div>
                  <div aria-controls="swiper-wrapper-af41083e93759f279" aria-label="Previous slide" className="elementor-swiper-button elementor-swiper-button-prev" role="button" tabIndex={0}>
                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" /></svg> </div>
                  <div aria-controls="swiper-wrapper-af41083e93759f279" aria-label="Next slide" className="elementor-swiper-button elementor-swiper-button-next" role="button" tabIndex={0}>
                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-right" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" /></svg> </div>
                  <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span aria-label="Go to slide 1" className="swiper-pagination-bullet" data-bullet-index={0} role="button" /><span aria-current="true" aria-label="Go to slide 2" className="swiper-pagination-bullet swiper-pagination-bullet-active" data-bullet-index={1} role="button" tabIndex={0} /><span aria-label="Go to slide 3" className="swiper-pagination-bullet" data-bullet-index={2} role="button" /><span aria-label="Go to slide 4" className="swiper-pagination-bullet" data-bullet-index={3} role="button" /></div>
                  <span aria-atomic="true" aria-live="assertive" className="swiper-notification" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-39ae243 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="39ae243">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-fec452f elementor-widget elementor-widget-heading" data-element_type="widget" data-id="fec452f" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Our Results Speak For Themselves</h2> </div>
            </div>
            <div className="elementor-element elementor-element-da63439 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="da63439" data-widget_type="icon-list.default">
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                    <span className="elementor-icon-list-text">Looking for Expert Solar Panel Bird Proofing?</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="elementor-element elementor-element-071f58a elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="071f58a" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                <p>If you’re in Melbourne and need reliable solar panel bird mesh installation, look no further! 7 States Pest Control is here to help protect your investment with top-quality bird proofing solutions. Reach out now for a free, no-obligation quote and let us keep your solar panels safe.</p> </div>
            </div>
            <div className="elementor-element elementor-element-4c08d72 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="4c08d72" data-widget_type="icon-list.default">
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                    <span className="elementor-icon-list-text">Don’t Wait Until It’s Too Late</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="elementor-element elementor-element-879c38b elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="879c38b" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                <p className data-end={668} data-start={220}>If you haven’t noticed bird activity around your solar panels yet, don’t wait for the damage to start.&nbsp;<a data-end={362} data-start={325} rel="noopener">Contact us today</a>&nbsp;for a quick, same-day inspection and ensure your panels are protected from potential nesting and damage. We specialize in&nbsp;<strong data-end={530} data-start={487}>Bird Blocking</strong>&nbsp;to prevent costly damage to your solar system, and our team is ready to help you maintain the safety and efficiency of your solar panels.</p><p className data-end={918} data-start={670}><strong data-end={699} data-start={670}>Birds around solar panels</strong>&nbsp;can create significant issues, from nesting to debris buildup, which can lead to costly repairs. With our&nbsp;<strong data-end={823} data-start={806}>Bird Blocking</strong>&nbsp;services, we’ll help protect your solar investment and keep your panels functioning optimally.</p><p className data-end={1350} data-start={1127}>We also offer a range of other pest control services such as&nbsp;<strong data-end={1238} data-start={1188}><Link data-end={1236} data-start={1190} to="/rodent-control-in-melbourne" rel="noopener">Rodent Extermination</Link></strong>&nbsp;and&nbsp;<a data-end={1286} data-start={1245} rel="noopener">Bed Bug Removal</a>&nbsp;to ensure your home remains safe from pests all year round.</p><p className data-end={1520} data-start={1352}>For more pest prevention tips and expert advice, check out our&nbsp;<a data-end={1450} data-start={1417} rel="noopener">latest&nbsp;</a><strong data-end={1452} data-start={1415}><Link data-end={1450} data-start={1417} to="/blog" rel="noopener">blog&nbsp;</Link></strong><a data-end={1450} data-start={1417} rel="noopener">post</a>&nbsp;to learn how to protect your home from unwanted pests and damage.</p><p className data-end={1659} data-start={1522}>Don’t wait until it’s too late! Get in touch with&nbsp;<strong>7 State<a data-end={1616} data-start={1574} rel="noopener">&nbsp;Pest Control</a></strong>&nbsp;today and ensure your home is protected.</p> </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-f9064c7 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="f9064c7">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-3da5fce elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="3da5fce" data-widget_type="divider.default">
              <div className="elementor-widget-container">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator">
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-a4e7f07 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="a4e7f07">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-e073564 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="e073564" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Our Latest Article</h2> </div>
            </div>
            <div className="elementor-element elementor-element-4da7361 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="4da7361" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Pest Problems? Here's Why Read Might Be Your Secret Weapon.</h2> </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-c980034 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="c980034">
          <div className="e-con-inner">
            <SolarBlogPosts blog={c?.blog} />
                
          </div>
        </div>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-e1fe674 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="e1fe674">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b848faf" data-element_type="column" data-id="b848faf">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-194d1c8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="194d1c8">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f619c6a" data-element_type="column" data-id="f619c6a">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-92c6e6f elementor-widget elementor-widget-heading" data-element_type="widget" data-id="92c6e6f" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Clients Reviews</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-4be1725 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="4be1725" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">7 States Pest Control for Reliable Pest Management Solutions</h2> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e4dcf47" data-element_type="column" data-id="e4dcf47" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-6cf5838 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="6cf5838" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default">Reviews of Our Pest Control Services</h3> </div>
                        </div>
                        <div className="elementor-element elementor-element-1cc2612 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="1cc2612" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h6 className="elementor-heading-title elementor-size-default">EXCELLENT</h6> </div>
                        </div>
                        <div className="elementor-element elementor-element-0777fae elementor-widget elementor-widget-rating" data-element_type="widget" data-id="0777fae" data-widget_type="rating.default">
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
                        <div className="elementor-element elementor-element-70789cd elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="70789cd" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>Based on&nbsp;45 reviews</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-75970c0 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="75970c0" data-widget_type="divider.default">
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
                <div className="elementor-element elementor-element-6f52a6d e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="6f52a6d">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-2ff13c6 elementor-widget elementor-widget-shortcode" data-element_type="widget" data-id="2ff13c6" data-widget_type="shortcode.default">
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-d85354a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="d85354a">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-511a355" data-element_type="column" data-id="511a355">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-fcf506e elementor-widget elementor-widget-heading" data-element_type="widget" data-id="fcf506e" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.faq?.title, 'Frequently Asked Questions')}</h2> </div>
                </div>
                <SolarFaqSection faq={c?.faq} />
                
              </div>
            </div>
            <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-57b167e" data-element_type="column" data-id="57b167e">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-cc1c2d8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="cc1c2d8">
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6fea1de" data-element_type="column" data-id="6fea1de">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-4ce857d elementor-widget elementor-widget-image" data-element_type="widget" data-id="4ce857d" data-widget_type="image.default">
                          <div className="elementor-widget-container">
                            <img alt="7 States Pest Control" className="attachment-full size-full wp-image-778" decoding="async" height={1280} loading="lazy" sizes="(max-width: 1280px) 100vw, 1280px" src="/assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1_ecbbd918.jpg" srcSet="/assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1_ecbbd918.jpg 1280w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-300x30_e03d7ebf.jpg 300w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-1024x1_359a34a8.jpg 1024w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-150x15_3201d1bd.jpg 150w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-768x76_a05df40f.jpg 768w" width={1280} /> </div>
                        </div>
                        <div className="elementor-element elementor-element-04c8944 elementor-widget__width-initial elementor-absolute ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="04c8944" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
                          <div className="elementor-widget-container">
                            <div className="ekit-wid-con">
                              <div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
                                <div className="box-body">
                                  <h3 className="elementskit-info-box-title">
                                    Any questions you want to ask?              </h3>
                                  <p>Find answers to common questions about our pest control services, treatments, safety, and scheduling.</p>
                                  <div className="box-footer disable_hover_button">
                                    <div className="btn-wraper">
                                      <Link className="elementskit-btn whitespace--normal" to="/contact-us">
                                        Contact Us                                  </Link>
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
      </div>
      
    </>
  )
}
