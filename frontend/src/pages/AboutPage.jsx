import AboutCmsStyles from '../components/about/AboutCmsStyles.jsx'
import AboutServiceCards from '../components/about/AboutServiceCards.jsx'
import CmsHtml from '../components/home/CmsHtml.jsx'
import PhoneNumberInput from '../components/PhoneNumberInput.jsx'
import usePageCms from '../hooks/usePageCms.js'
import usePageMeta from '../hooks/usePageMeta.js'
import { cmsMediaUrl, cmsText } from '../utils/cmsMedia.js'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  const { page, content: c } = usePageCms('about-us')
  usePageMeta('about', page)
  const processStep = (slug) => c?.process?.steps?.find((step) => step.slug === slug)

  return (
    <>
      <AboutCmsStyles content={c} />
      <div className="elementor elementor-16" data-elementor-id={16} data-elementor-post-type="page" data-elementor-type="wp-page">
        <section className="elementor-section elementor-top-section elementor-element elementor-element-f945d28 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="f945d28" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-97f258e" data-element_type="column" data-id="97f258e">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-30fd4ba7 elementor-invisible elementor-widget elementor-widget-heading" data-element_type="widget" data-id="30fd4ba7" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">About </h2> </div>
                </div>
                <div className="elementor-element elementor-element-1424470c elementor-icon-list--layout-inline elementor-align-center elementor-widget__width-auto elementor-list-item-link-full_width elementor-invisible elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="1424470c" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;,&quot;_animation_delay&quot;:720}" data-widget_type="icon-list.default">
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
                          <span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb, 'About Us')}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="elementor-element elementor-element-ec28cb9 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="ec28cb9" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-a5ccd35 e-con-full e-flex e-con e-child" data-element_type="container" data-id="a5ccd35">
              <div className="elementor-element elementor-element-360efcf elementor-icon-list--layout-inline elementor-align-left elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="360efcf" data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:720}" data-widget_type="icon-list.default">
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
                        <span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb, 'About Us')}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="elementor-element elementor-element-ed0320f elementor-widget elementor-widget-heading" data-element_type="widget" data-id="ed0320f" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'About Us')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-de36bc0 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="de36bc0" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.heading, 'Expert Pest Control Services in Melbourne')}</h1> </div>
              </div>
              <div className="elementor-element elementor-element-8813cf7 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="8813cf7" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <CmsHtml html={c?.hero?.body ?? '<p><Link to="/"><strong>7 States Pest Control</strong></Link>&nbsp;is a pioneer in the pest control industry, with a proven track record of providing exceptional service to residential and commercial clients across Melbourne since last 7 year. Our team of highly trained and experienced technicians is equipped with the latest knowledge and techniques to tackle any pest problem effectively and safely.</p><p>We are committed to providing you with permanent solutions. With our focus on quality services and professional minds, we strive to deliver the best pest-controlling solutions.&nbsp;</p>'} />
                </div>
              </div>
              <div className="elementor-element elementor-element-d399c22 elementor-align-left elementor-tablet-align-left elementor-widget elementor-widget-button" data-element_type="widget" data-id="d399c22" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link className="elementor-button elementor-button-link elementor-size-sm" to={cmsText(c?.hero?.button_url, '/pest-control-services')}>
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">{cmsText(c?.hero?.button_label, 'Find Services')}</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-d9e4f51 e-con-full e-flex e-con e-child" data-element_type="container" data-id="d9e4f51" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-6a17c27 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="6a17c27" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.title, 'Get A Free Quote Now!')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-7f49099 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="7f49099" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.subtitle, 'Have an enquiry? Leave us your details and we’ll call you back during business hours.')}</h6> </div>
              </div>
              <div className="elementor-element elementor-element-03c7402 elementor-button-align-center elementor-widget elementor-widget-form" data-element_type="widget" data-id="03c7402" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                <div className="elementor-widget-container">
                  <form aria-label="New Form" className="elementor-form" id="home_contact_form" method="post" name="New Form">
                    <input name="post_id" type="hidden" defaultValue={16} />
                    <input name="form_id" type="hidden" defaultValue="03c7402" />
                    <input name="referer_title" type="hidden" defaultValue="Australia's No.1 Pest Control Company | 7 States Pest Control" />
                    <input name="queried_id" type="hidden" defaultValue={16} />
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-a80a010 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="a80a010">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-7979b95" data-element_type="column" data-id="7979b95">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-e55ebe6 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-counter" data-element_type="widget" data-id="e55ebe6" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="counter.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-counter">
                      <div className="elementor-counter-title">{cmsText(c?.stand_for?.counter_title, 'Projects Done')}</div> <div className="elementor-counter-number-wrapper">
                        <span className="elementor-counter-number-prefix" />
                        <span className="elementor-counter-number" data-delimiter="," data-duration={2000} data-from-value={c?.stand_for?.counter_from ?? 0} data-to-value={c?.stand_for?.counter_to ?? 10000}>{cmsText(c?.stand_for?.counter_display, '10,000')}</span>
                        <span className="elementor-counter-number-suffix">{cmsText(c?.stand_for?.counter_suffix, '+')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-882c162 elementor-widget elementor-widget-image" data-element_type="widget" data-id="882c162" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img alt={cmsText(c?.stand_for?.image_alt, '7 States Pest Control')} className="attachment-full size-full wp-image-545" decoding="async" fetchpriority="high" height={1536} sizes="(max-width: 2048px) 100vw, 2048px" src={cmsMediaUrl(c?.stand_for?.image, '/assets/images/wan_f3b9d52e.jpg')} srcSet={`${cmsMediaUrl(c?.stand_for?.image, '/assets/images/wan_f3b9d52e.jpg')} 2048w`} width={2048} /> </div>
                </div>
              </div>
            </div>
            <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-d6de5b7" data-element_type="column" data-id="d6de5b7">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-b2e6687 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="b2e6687" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.stand_for?.eyebrow, 'What We Stand For')}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-97ab232 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="97ab232" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.stand_for?.title, 'Our Purpose and Principles')}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-c3520f0 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="c3520f0" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <CmsHtml html={c?.stand_for?.purpose ?? '<p>Our purpose is to protect people, property, and the environment from the threats posed by pests, ensuring peace of mind through safe and effective pest management.</p>'} />
                  </div>
                </div>
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-116f2a8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="116f2a8" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-279c1be" data-element_type="column" data-id="279c1be">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-49e456f elementor-view-stacked elementor-position-left elementor-tablet-position-left elementor-shape-square elementor-mobile-position-left elementor-widget-mobile__width-inherit elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-element_type="widget" data-id="49e456f" data-widget_type="icon-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-icon-box-wrapper">
                              <div className="elementor-icon-box-icon">
                                <span className="elementor-icon">
                                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-double-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg> </span>
                              </div>
                              <div className="elementor-icon-box-content">
                                <div className="elementor-icon-box-title">
                                  <span>
                                    {cmsText(c?.stand_for?.mission_title, 'Our Mission')}						</span>
                                </div>
                                <p className="elementor-icon-box-description">
                                  {cmsText(c?.stand_for?.mission_text, 'Our mission is to safeguard our clients’ homes and businesses from the threats posed by pests. We achieve this by providing comprehensive pest control solutions that are tailored to their specific needs. We are committed to using eco-friendly methods whenever possible and ensuring the safety of our clients, their families, and pets.')}					</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b21fd5b" data-element_type="column" data-id="b21fd5b">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-ae7232a elementor-view-stacked elementor-position-left elementor-tablet-position-left elementor-shape-square elementor-mobile-position-left elementor-widget-mobile__width-inherit elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-element_type="widget" data-id="ae7232a" data-widget_type="icon-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-icon-box-wrapper">
                              <div className="elementor-icon-box-icon">
                                <span className="elementor-icon">
                                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-double-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg> </span>
                              </div>
                              <div className="elementor-icon-box-content">
                                <div className="elementor-icon-box-title">
                                  <span>
                                    {cmsText(c?.stand_for?.vision_title, 'Our Vision')}						</span>
                                </div>
                                <p className="elementor-icon-box-description">
                                  {cmsText(c?.stand_for?.vision_text, 'We envision a Melbourne free from the worries and dangers associated with pests. Through our dedication to exceptional service, innovative solutions, and community education, we strive to be the leading pest control company in Melbourne, recognized for our reliability, expertise, and commitment to environmental responsibility.')}					</p>
                              </div>
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-3786818 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id={3786818} data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5529364" data-element_type="column" data-id={5529364} data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-background-overlay" />
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-a92bfd9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="a92bfd9">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7403e71" data-element_type="column" data-id="7403e71">
                      <div className="elementor-widget-wrap">
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-9322e29" data-element_type="column" data-id="9322e29" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-e74e200 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="e74e200" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.cta?.title, 'Talk to us today')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-041498e elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="041498e" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <CmsHtml html={c?.cta?.body ?? '<p>Do you have any specific questions about us, our services, or anything related to pest infestation issues? Call us today on&nbsp;<a href="tel:+61434660060">( +61 434 660 060 )</a>&nbsp;or use our contact form to connect with our&nbsp;<b>7 States Pest Control</b>. You can get answers to your questions, get upfront quotes for the&nbsp;<b>7 States Pest Control</b>&nbsp;issues, and receive high-quality tailored services.</p>'} />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-6718bf0 elementor-widget elementor-widget-button" data-element_type="widget" data-id="6718bf0" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link className="elementor-button elementor-button-link elementor-size-sm" to={cmsText(c?.cta?.button_url, '/contact-us')}>
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </span>
                                  <span className="elementor-button-text">{cmsText(c?.cta?.button_label, 'Contact Us')}</span>
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-070fde0 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="070fde0" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-aa147e6" data-element_type="column" data-id="aa147e6">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-41390bd elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="41390bd">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-15a9b7f" data-element_type="column" data-id="15a9b7f">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-7c39b05 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="7c39b05" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.services?.eyebrow, 'Our Services ')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-40b14a5 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="40b14a5" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.services?.title, 'Expert Pest Control Services We Offer in Melbourne')}</h2> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d3cb87d" data-element_type="column" data-id="d3cb87d" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-12d16f0 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="12d16f0" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <CmsHtml html={c?.services?.intro ?? '<p>We offer control and extermination services for a wide range of pests and help our customers to ensure a clean, safe, and healthy environment at their property. Our 7 States Pest Control services include the following:</p>'} />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-d8e6f83 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="d8e6f83" data-widget_type="divider.default">
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
                <AboutServiceCards cards={c?.services?.cards} />
                <div className="elementor-element elementor-element-783e64d elementor-align-center elementor-tablet-align-left elementor-widget elementor-widget-button" data-element_type="widget" data-id="783e64d" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <Link className="elementor-button elementor-button-link elementor-size-sm" to={cmsText(c?.services?.more_button_url, '/our-services')}>
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">{cmsText(c?.services?.more_button_label, 'More Services')}</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-59f28062 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="59f28062" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-19489952" data-element_type="column" data-id={19489952} data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-2b5dd12 elementor-widget elementor-widget-heading animated fadeInDown" data-element_type="widget" data-id="2b5dd12" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.why_choose?.eyebrow, 'Why Choose ')}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-7337c3ad elementor-widget elementor-widget-elementskit-heading" data-element_type="widget" data-id="7337c3ad" data-widget_type="elementskit-heading.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con"><div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-"><h2 className="ekit-heading--title elementskit-section-title">{cmsText(c?.why_choose?.title, '7 State Pest Control ?')}</h2></div></div> </div>
                </div>
                <div className="elementor-element elementor-element-2cfe4ab9 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="2cfe4ab9" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <CmsHtml html={c?.why_choose?.intro ?? '<p>There are many reasons to choose 7 States Pest Control for your pest control needs. Here are just a few:</p>'} />
                  </div>
                </div>
                <div className="elementor-element elementor-element-63e84b8 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="63e84b8">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-e3d5e09 e-con-full e-flex e-con e-child" data-element_type="container" data-id="e3d5e09">
                      <div className="elementor-element elementor-element-7e9eb5e elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="7e9eb5e" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            {(c?.why_choose?.list_left ?? ['Excellent Customer Service', 'Quick and Efficient Service', 'Affordable Pricing', 'Ongoing Support and Maintenance']).map((item) => (
                              <li key={item} className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                <span className="elementor-icon-list-text">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-8db820c e-con-full e-flex e-con e-child" data-element_type="container" data-id="8db820c">
                      <div className="elementor-element elementor-element-82c9baf elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="82c9baf" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            {(c?.why_choose?.list_right ?? ['Experienced and Qualified Technicians', 'Safe and Eco-Friendly Solutions', 'Customized Treatment Plans', 'Guaranteed Results']).map((item) => (
                              <li key={item} className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                <span className="elementor-icon-list-text">{item}</span>
                              </li>
                            ))}
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-46a09d5 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="46a09d5">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-297e387" data-element_type="column" data-id="297e387">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-c3f5195 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="c3f5195">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4d8eaf4" data-element_type="column" data-id="4d8eaf4">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-be335a6 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="be335a6" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.process?.eyebrow, 'Our Process')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-e156402 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="e156402" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.process?.title, 'Treatment Procedure at 7 State Pest Control')}</h2> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-9ae3298" data-element_type="column" data-id="9ae3298" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-cc08756 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="cc08756" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <CmsHtml html={c?.process?.intro ?? '<p>At 7 State Pest Control, we follow a comprehensive and systematic approach to ensure effective pest management for your home or business. Our treatment procedure is designed to tackle the root of the problem, providing long-term solutions rather than temporary fixes.</p>'} />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-3416acc elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="3416acc" data-widget_type="divider.default">
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
        <div className="elementor-element elementor-element-e5684fc e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="e5684fc">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-5c64740 e-con-full e-flex e-con e-child" data-element_type="container" data-id="5c64740" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-a91ff22 e-con-full e-flex e-con e-child" data-element_type="container" data-id="a91ff22" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-20115fa elementor-widget elementor-widget-heading" data-element_type="widget" data-id="20115fa" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(processStep('inspection')?.title, 'How We Inspect')}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-74f3b5f elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="74f3b5f" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <CmsHtml html={processStep('inspection')?.body_html} />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-6c023f8 e-con-full e-flex e-con e-child" data-element_type="container" data-id="6c023f8">
              <div className="elementor-element elementor-element-1c47590 elementor-widget elementor-widget-image" data-element_type="widget" data-id="1c47590" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img alt={cmsText(processStep('inspection')?.alt, '7 States Pest Control')} className="attachment-full size-full wp-image-1031" decoding="async" height={690} loading="lazy" sizes="(max-width: 1200px) 100vw, 1200px" src={cmsMediaUrl(processStep('inspection')?.image, '/assets/images/Inspect.jpg-1_c97bf8a3.webp')} width={1200} /> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-860e369 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="860e369">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-bf8407b e-con-full e-flex e-con e-child" data-element_type="container" data-id="bf8407b" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-4f93dce e-con-full e-flex e-con e-child" data-element_type="container" data-id="4f93dce" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-c87a3a7 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="c87a3a7" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(processStep('treatment_plan')?.title, 'Treatment Planning')}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-c4d85c8 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="c4d85c8" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <CmsHtml html={processStep('treatment_plan')?.body_html} />
                  </div>
                </div>
                <div className="elementor-element elementor-element-99e437c elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="99e437c" data-widget_type="icon-list.default">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      {(processStep('treatment_plan')?.list_items ?? ['Reduce clutter', 'Clean your personal belongings', 'Eradicate bed bug habitats, etc.']).map((item) => (
                        <li key={item} className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-28d1ae4 e-con-full e-flex e-con e-child" data-element_type="container" data-id="28d1ae4">
              <div className="elementor-element elementor-element-e7fd761 elementor-widget elementor-widget-image" data-element_type="widget" data-id="e7fd761" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img alt={cmsText(processStep('treatment_plan')?.alt, '7 States Pest Control')} className="attachment-full size-full wp-image-915" decoding="async" height={400} loading="lazy" sizes="(max-width: 600px) 100vw, 600px" src={cmsMediaUrl(processStep('treatment_plan')?.image, '/assets/images/End-of-Lease-2.png_0c28dc03.webp')} width={600} /> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-43352d4 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="43352d4">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-44f9ddf e-con-full e-flex e-con e-child" data-element_type="container" data-id="44f9ddf" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-0b35f21 e-con-full e-flex e-con e-child" data-element_type="container" data-id="0b35f21" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-8163599 elementor-widget elementor-widget-heading" data-element_type="widget" data-id={8163599} data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(processStep('eco_friendly')?.title, 'Committed to Eco-Friendly Pest Control Solutions')}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-c30d369 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="c30d369" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <CmsHtml html={processStep('eco_friendly')?.body_html} />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-e8bf635 e-con-full e-flex e-con e-child" data-element_type="container" data-id="e8bf635" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-776ef7b elementor-widget elementor-widget-image" data-element_type="widget" data-id="776ef7b" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img alt={cmsText(processStep('eco_friendly')?.alt, '7 States Pest Control')} className="attachment-large size-large wp-image-778" decoding="async" height={800} loading="lazy" sizes="(max-width: 800px) 100vw, 800px" src={cmsMediaUrl(processStep('eco_friendly')?.image, '/assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-1024x1_359a34a8.jpg')} width={800} /> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-fa9844b e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="fa9844b">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-fda64c8 e-con-full e-flex e-con e-child" data-element_type="container" data-id="fda64c8" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-9b1bd33 e-con-full e-flex e-con e-child" data-element_type="container" data-id="9b1bd33" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-8cb139d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="8cb139d" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(processStep('preventive')?.title, 'What Are Some Preventive Steps 7 States Pest Control Professionals Recommend?')}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-9a4f4d1 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="9a4f4d1" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <CmsHtml html={processStep('preventive')?.body_html} />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-4972cab e-con-full e-flex e-con e-child" data-element_type="container" data-id="4972cab" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-a064d9b elementor-widget elementor-widget-spacer" data-element_type="widget" data-id="a064d9b" data-widget_type="spacer.default">
                <div className="elementor-widget-container">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-b637679 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="b637679">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b22720f" data-element_type="column" data-id="b22720f">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-2b9ca25 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="2b9ca25">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-798c5fc" data-element_type="column" data-id="798c5fc" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-94160b8 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="94160b8" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.eyebrow, 'Clients Reviews')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-d1a9847 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d1a9847" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.title, '7 States Pest Control for Reliable Pest Management Solutions')}</h2> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-9ba0e3b" data-element_type="column" data-id="9ba0e3b" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-ff2d4f6 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="ff2d4f6" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.subtitle, 'Reviews of Our Pest Control Services')}</h3> </div>
                        </div>
                        <div className="elementor-element elementor-element-bc181fb elementor-widget elementor-widget-heading" data-element_type="widget" data-id="bc181fb" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.rating_label, 'EXCELLENT')}</h6> </div>
                        </div>
                        <div className="elementor-element elementor-element-9dfca5b elementor-widget elementor-widget-rating" data-element_type="widget" data-id="9dfca5b" data-widget_type="rating.default">
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
                        <div className="elementor-element elementor-element-c222ddc elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="c222ddc" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <CmsHtml html={c?.reviews?.count_text ?? '<p>Based on&nbsp;45 reviews</p>'} />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-0054c6b elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="0054c6b" data-widget_type="divider.default">
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
                <div className="elementor-element elementor-element-fc3fd47 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="fc3fd47">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-6a059b2 elementor-widget elementor-widget-shortcode" data-element_type="widget" data-id="6a059b2" data-widget_type="shortcode.default">
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
      </div>
      
    </>
  )
}
