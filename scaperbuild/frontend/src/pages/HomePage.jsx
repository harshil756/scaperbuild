import CmsHtml from '../components/home/CmsHtml.jsx'
import HomeCmsStyles from '../components/home/HomeCmsStyles.jsx'
import HomeServiceCards from '../components/home/HomeServiceCards.jsx'
import PhoneNumberInput from '../components/PhoneNumberInput.jsx'
import usePageCms from '../hooks/usePageCms.js'
import usePageMeta from '../hooks/usePageMeta.js'
import TrustIndexReviews from '../components/TrustIndexReviews.jsx'
import { cmsMediaUrl, cmsText } from '../utils/cmsMedia.js'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const { page, content: c } = usePageCms('home')
  usePageMeta('home', page)
  const processStep = (slug) => c?.process?.steps?.find((step) => step.slug === slug)

  return (
    <>
      <HomeCmsStyles content={c} />
      <div className="elementor elementor-14" data-elementor-id={14} data-elementor-post-type="page" data-elementor-type="wp-page">
        <section className="elementor-section elementor-top-section elementor-element elementor-element-37fdbc3f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="37fdbc3f" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3b61c638" data-element_type="column" data-id="3b61c638">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-0b53c03 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="0b53c03">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-e5afdbe e-con-full e-flex e-con e-child" data-element_type="container" data-id="e5afdbe" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                      <div className="elementor-element elementor-element-d6a136d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d6a136d" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.title, 'Get A Free Quote Now!')}</h2> </div>
                      </div>
                      <div className="elementor-element elementor-element-ab5d866 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="ab5d866" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.subtitle, 'Have an enquiry? Leave us your details and we’ll call you back during business hours.')}</h6> </div>
                      </div>
                      <div className="elementor-element elementor-element-8c7fc6e elementor-button-align-center elementor-widget elementor-widget-form" data-element_type="widget" data-id="8c7fc6e" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                        <div className="elementor-widget-container">
                          <form aria-label="New Form" className="elementor-form" id="home_contact_form" method="post" name="New Form">
                            <input name="post_id" type="hidden" defaultValue={14} />
                            <input name="form_id" type="hidden" defaultValue="8c7fc6e" />
                            <input name="referer_title" type="hidden" defaultValue="Pest Control Melbourne | Pest Exterminator & Removal Services" />
                            <input name="queried_id" type="hidden" defaultValue={14} />
                            <div className="elementor-form-fields-wrapper elementor-labels-">
                              <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-first_name elementor-col-100 elementor-field-required">
                                <label className="elementor-field-label elementor-screen-only" htmlFor="form-field-first_name">
                                  First Name							</label>
                                <input className="elementor-field elementor-size-lg elementor-field-textual" id="form-field-first_name" name="form_fields[first_name]" placeholder="Name" required type="text" />
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
                              <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100 elementor-field-required">
                                <label className="elementor-field-label elementor-screen-only" htmlFor="form-field-message">
                                  Job description							</label>
                                <textarea className="elementor-field-textual elementor-field elementor-size-lg" id="form-field-message" name="form_fields[message]" placeholder="Job description" required rows={4} defaultValue={""} /> </div>
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
                    <div className="elementor-element elementor-element-552235e e-con-full e-flex e-con e-child" data-element_type="container" data-id="552235e">
                      <div className="elementor-element elementor-element-2b2e869 elementor-widget__width-auto elementor-widget elementor-widget-heading" data-element_type="widget" data-id="2b2e869" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.eyebrow, 'What We Do ')}</h2> </div>
                      </div>
                      <div className="elementor-element elementor-element-2c05737 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="2c05737" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'Pest Control in Melbourne by Certified Experts')}</h1> </div>
                      </div>
                      <div className="elementor-element elementor-element-e8742e1 e-con-full e-flex e-con e-child" data-element_type="container" data-id="e8742e1">
                        <div className="elementor-element elementor-element-4446557 e-con-full e-flex e-con e-child" data-element_type="container" data-id={4446557}>
                          <div className="elementor-element elementor-element-45fe351 elementor-widget__width-inherit elementor-mobile-align-justify elementor-widget-mobile__width-inherit elementor-widget-tablet__width-inherit elementor-widget elementor-widget-button animated fadeIn" data-element_type="widget" data-id="45fe351" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:1680}" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <Link className="elementor-button elementor-button-link elementor-size-sm" to={cmsText(c?.hero?.button_contact_url, '/contact-us')}>
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">{cmsText(c?.hero?.button_contact_label, 'Contact Us')}</span>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-1c9f68a e-con-full e-flex e-con e-child" data-element_type="container" data-id="1c9f68a">
                          <div className="elementor-element elementor-element-851fae6 elementor-align-left elementor-widget__width-inherit elementor-mobile-align-justify elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button animated fadeIn" data-element_type="widget" data-id="851fae6" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:1680}" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <Link className="elementor-button elementor-button-link elementor-size-sm" to={cmsText(c?.hero?.button_services_url, '/our-services')}>
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-icon">
                                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </span>
                                    <span className="elementor-button-text">{cmsText(c?.hero?.button_services_label, 'Our Services')}</span>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-7f8f5a70 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="7f8f5a70">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5138b572" data-element_type="column" data-id="5138b572">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-7db2cf1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="7db2cf1">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-072a0f9" data-element_type="column" data-id="072a0f9">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-5a9324c elementor-widget elementor-widget-heading" data-element_type="widget" data-id="5a9324c" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.services?.eyebrow, 'Our Services ')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-6b16c23 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="6b16c23" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.services?.title, 'Expert Pest Control Services We Offer in Melbourne')}</h2> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-61b53cf" data-element_type="column" data-id="61b53cf" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-2e27784 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="2e27784" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <CmsHtml html={c?.services?.intro ?? '<p class="font-claude-response-body break-words whitespace-normal leading-[1.7]">We provide comprehensive <strong>pest control Melbourne</strong> services, ensuring a clean, safe, and healthy environment for your property. At 7 States Pest Control, we offer expert <strong>pest removal Melbourne</strong> services that cover a wide range of pests, delivering effective <strong>pest control Melbourne CBD</strong> control and <strong>pest exterminator Melbourne</strong> solutions tailored to your needs.</p>'} />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-e8ac514 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="e8ac514" data-widget_type="divider.default">
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
                <HomeServiceCards cards={c?.services?.cards} />
              </div>
            </div>
          </div>
        </section>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-68648136 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id={68648136}>
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3bf254e8" data-element_type="column" data-id="3bf254e8" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-background-overlay" />
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-43dc3dec elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="43dc3dec">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-452e04dc" data-element_type="column" data-id="452e04dc">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-22ca238 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="22ca238" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.about?.eyebrow, 'About Us')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-63e59634 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="63e59634" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.about?.title, 'Get a Free Consultation from Melbourne Local Pest Controllers')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-733b5627 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="733b5627" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <CmsHtml html={c?.about?.body ?? '<p class="font-claude-response-body break-words whitespace-normal leading-[1.7]">We are Melbourne locals with over 10 years of experience in <strong>pest control Melbourne</strong>. We understand your pest-related problems and provide tailored <strong>pest removal Melbourne</strong> solutions. You can trust our expertise because we are environmentally friendly, safe for family and pets, and offer a 100% satisfaction guarantee on our <strong>pest control service in Melbourne</strong>.</p><p class="font-claude-response-body break-words whitespace-normal leading-[1.7]">We provide ongoing advice to clients after servicing and offer immediate <strong>same day pest control Melbourne</strong> and free <strong>pest inspection Melbourne</strong>. For eco-friendly, effective, and <strong>affordable pest control Melbourne</strong>, choose 7 States Pest Control — your reliable <strong>pest exterminator Melbourne</strong> and trusted <strong>home pest control Melbourne</strong> provider.</p><p class="font-claude-response-body break-words whitespace-normal leading-[1.7]">We provide ongoing advice to clients after servicing and offer immediate <strong>same day pest control Melbourne</strong> service and free <strong>pest inspection Melbourne</strong>. For eco-friendly, effective, and <strong>affordable pest control Melbourne</strong>, choose 7 States Pest Control — your reliable <strong>pest control near me</strong> provider in Melbourne for all your <strong>pest removal Melbourne</strong> needs.</p>'} />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-6e73320e elementor-align-left elementor-tablet-align-left elementor-widget elementor-widget-button" data-element_type="widget" data-id="6e73320e" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link className="elementor-button elementor-button-link elementor-size-sm" to={cmsText(c?.about?.button_url, '/about-us')}>
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">{cmsText(c?.about?.button_label, 'More About Us')}</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-db0472" data-element_type="column" data-id="db0472" data-settings="{&quot;animation&quot;:&quot;none&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-b32eaf3 elementor-widget elementor-widget-spacer" data-element_type="widget" data-id="b32eaf3" data-widget_type="spacer.default">
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
        <div className="elementor-element elementor-element-25c9f27 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="25c9f27" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-167ff2c e-con-full e-flex e-con e-child" data-element_type="container" data-id="167ff2c" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-5daf9bc elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-element_type="widget" data-id="5daf9bc" data-widget_type="icon-box.default">
                <div className="elementor-widget-container">
                  <div className="elementor-icon-box-wrapper">
                    <div className="elementor-icon-box-icon">
                      <span className="elementor-icon">
                        <svg className style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svgjs="http://svgjs.com/svgjs" xmlnsXlink="http://www.w3.org/1999/xlink"> <g> <g> <path className d="m385.381 102.82c4.143 0 7.5-3.357 7.5-7.5v-10.082c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v10.082c0 4.142 3.358 7.5 7.5 7.5z" /> <path className d="m466.98 169.418c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h10.081c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z" /> <path className d="m293.701 169.418c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h10.082c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z" /> <path className d="m418.275 408.987c-13.32 0-24.157 10.837-24.157 24.156s10.837 24.156 24.157 24.156c13.319 0 24.156-10.837 24.156-24.156s-10.837-24.156-24.156-24.156zm0 33.312c-5.05 0-9.157-4.107-9.157-9.156s4.107-9.156 9.157-9.156c5.049 0 9.156 4.107 9.156 9.156s-4.107 9.156-9.156 9.156z" /> <path className d="m144.424 433.143c0 13.319 10.837 24.156 24.157 24.156s24.156-10.837 24.156-24.156-10.836-24.156-24.156-24.156-24.157 10.836-24.157 24.156zm33.313 0c0 5.049-4.107 9.156-9.156 9.156s-9.157-4.107-9.157-9.156 4.108-9.156 9.157-9.156 9.156 4.107 9.156 9.156z" /> <path className d="m219.501 318.031c8.467-8.241 9.443-22.576-.175-31.936l-31.174-30.345c-11.246-10.942-29.299-10.7-40.244.544l-5.838 5.998c-2.889 2.969-2.825 7.717.143 10.605l30.05 29.25-30.05 29.249c-1.425 1.387-2.241 3.284-2.268 5.272-.027 1.989.738 3.907 2.125 5.333l5.838 5.998c10.981 11.281 28.995 11.495 40.244.543zm-60.844 19.507-.607-.623 30.197-29.393c1.45-1.411 2.269-3.35 2.269-5.374s-.818-3.963-2.269-5.374l-30.197-29.394.607-.623c5.178-5.319 13.715-5.434 19.033-.258l31.174 30.345c3.327 3.238 2.882 7.802.175 10.438l-31.349 30.513c-5.293 5.151-13.813 5.106-19.033-.257z" /> <path className d="m377.881 176.918c0 4.143 3.357 7.5 7.5 7.5h25.506c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-18.006v-46.706c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5z" /> <path className d="m128.121 112.82h129.141c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-129.141c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z" /> <path className d="m96.817 151.567h134.052c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-134.052c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z" /> <path className d="m173.508 171.121c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h66.705c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z" /> <path className d="m110.275 171.121c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h33.292c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z" /> <path className d="m7.5 289.406h27.43c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-27.43c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z" /> <path className d="m27.5 355.47h-20c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h20c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z" /> <path className d="m115.733 291.959h-26.748c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h26.748c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z" /> <path className d="m456.009 282.004c34.75-23.411 55.991-62.863 55.991-105.087 0-20.068-4.565-39.271-13.57-57.072-1.869-3.696-6.382-5.177-10.077-3.308-3.696 1.869-5.178 6.382-3.308 10.077 7.932 15.684 11.955 32.609 11.955 50.303 0 37.974-19.494 73.403-51.238 93.873l-43.665-47.781c-5.072-5.552-12.295-8.735-19.814-8.735h-102.106c-4.256-11.968-6.415-24.511-6.415-37.357 0-61.547 50.072-111.618 111.619-111.618 31.926 0 62.391 13.724 83.583 37.653 2.744 3.1 7.484 3.39 10.587.642 3.101-2.746 3.389-7.486.642-10.587-11.018-12.442-24.252-22.442-38.838-29.635v-25.401c0-9.23-7.509-16.739-16.739-16.739h-78.469c-9.23 0-16.739 7.509-16.739 16.739v25.394c-41.819 20.698-70.646 63.818-70.646 113.552 0 12.784 1.892 25.304 5.617 37.357h-191.251c-9.567 0-17.426 7.396-18.193 16.77h-27.435c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h27.359v72.492h-47.359c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h47.359v21.937c-4.109.038-7.43 3.378-7.43 7.496s3.32 7.458 7.43 7.496v53.052c0 7.874 6.406 14.279 14.279 14.279h20.179v5.221h-23.4c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h30.9c4.142 0 7.5-3.357 7.5-7.5v-12.721h6.843c2.38 29.604 27.215 52.97 57.421 52.97 9.968 0 19.808-2.601 28.455-7.521 3.6-2.049 4.857-6.628 2.809-10.228-2.048-3.601-6.626-4.856-10.228-2.81-6.39 3.637-13.665 5.559-21.036 5.559-23.503 0-42.625-19.121-42.625-42.625s19.122-42.625 42.625-42.625 42.625 19.121 42.625 42.625c0 6.408-1.389 12.571-4.129 18.318-1.783 3.739-.196 8.215 3.542 9.997 3.74 1.782 8.215.196 9.998-3.542 3.039-6.374 4.828-13.125 5.383-20.118h134.854c2.38 29.604 27.215 52.97 57.421 52.97s55.04-23.366 57.421-52.97h15.439c11.505 0 20.865-9.36 20.865-20.865v-63.27c0-6.701-2.489-13.116-7.01-18.062zm-111.601-244.033c0-.959.78-1.739 1.739-1.739h78.469c.959 0 1.739.78 1.739 1.739v19.166c-13.061-4.473-26.89-6.837-40.974-6.837-14.333 0-28.116 2.398-40.974 6.807v-19.136zm46.617 195.158 78.05 85.407h-55.947c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h69.655l11.135 12.185c4.54 4.968 2.632 10.359 3.082 16.08h-5.782c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h5.782v11.098h-43.101c-9.812-7.743-22.183-12.381-35.623-12.381s-25.811 4.638-35.623 12.381h-81.717v-158.624h32.347v89.167c0 8.323 6.771 15.095 15.094 15.095h34.767c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-34.767c-.052 0-.094-.043-.094-.095v-89.167h34.002c3.315 0 6.502 1.405 8.74 3.854zm-29.427 189.669h-60.664v-19.899h68.318c-3.712 5.994-6.346 12.717-7.654 19.899zm-143.995-19.899h68.331v19.899h-60.677c-1.308-7.182-3.942-13.905-7.654-19.899zm-147.744 0h49.698c-3.712 5.994-6.346 12.717-7.654 19.899h-42.044zm63.098-15h-63.098v-17.429h32.5c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-32.5v-21.934h32.5c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-32.5v-85.992c0-1.803 1.466-3.27 3.269-3.27h212.806v158.624h-81.73c-9.812-7.743-22.183-12.381-35.623-12.381s-25.811 4.639-35.624 12.382zm285.318 87.869c-23.504 0-42.625-19.121-42.625-42.625s19.121-42.625 42.625-42.625 42.625 19.121 42.625 42.625-19.121 42.625-42.625 42.625zm72.859-52.97h-16.183c-1.308-7.182-3.942-13.905-7.654-19.899h29.703v14.034c0 3.234-2.631 5.865-5.866 5.865z" /> </g> </g></svg> </span>
                    </div>
                    <div className="elementor-icon-box-content">
                      <h3 className="elementor-icon-box-title">
                        <span>
                          {cmsText(c?.features?.items?.[0]?.text, 'A prompt pest control service is available for today or tomorrow.')}
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-3ed8238 e-con-full e-flex e-con e-child" data-element_type="container" data-id="3ed8238" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-9537524 elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-element_type="widget" data-id={9537524} data-widget_type="icon-box.default">
                <div className="elementor-widget-container">
                  <div className="elementor-icon-box-wrapper">
                    <div className="elementor-icon-box-icon">
                      <span className="elementor-icon">
                        <svg className style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svgjs="http://svgjs.com/svgjs" xmlnsXlink="http://www.w3.org/1999/xlink"> <g> <path className d="M253.26,234.48a7.48,7.48,0,0,0,5.48,0,143.67,143.67,0,0,0,91.19-133.73V41.41a7.51,7.51,0,0,0-4.76-7L258.74.52a7.51,7.51,0,0,0-5.48,0l-86.43,33.9a7.51,7.51,0,0,0-4.76,7v59.34a143.67,143.67,0,0,0,91.19,133.73Zm-76.19-188,78.93-31,78.93,31v54.23A127.88,127.88,0,0,1,256,219.41a127.88,127.88,0,0,1-78.93-118.66Z" /> <path className d="M246.27,160a20.07,20.07,0,0,0,14.29-5.92l48.32-48.32a7.5,7.5,0,0,0,0-10.61l-18-18a7.49,7.49,0,0,0-10.6,0l-34,34L231.68,96.65a7.49,7.49,0,0,0-10.6,0l-18,17.95a7.5,7.5,0,0,0,0,10.61L232,154.08A20.06,20.06,0,0,0,246.27,160Zm-19.89-47.44L241,127.15a7.5,7.5,0,0,0,10.61,0l34-34,7.35,7.35-43,43a5.2,5.2,0,0,1-7.35,0L219,119.91Z" /> <path className d="M504.5,417H472V404.5a87.67,87.67,0,0,0-57.27-82.12,52.5,52.5,0,1,0-60.47,0,87.2,87.2,0,0,0-41.45,32,77.71,77.71,0,0,0-29.46-19.86,42.5,42.5,0,1,0-54.7,0,77.71,77.71,0,0,0-29.46,19.86,87.2,87.2,0,0,0-41.45-32,52.51,52.51,0,1,0-60.47,0A87.67,87.67,0,0,0,40,404.5V417H7.5A7.5,7.5,0,0,0,0,424.5v30A7.5,7.5,0,0,0,7.5,462h11v42.5A7.5,7.5,0,0,0,26,512H486a7.5,7.5,0,0,0,7.5-7.5V462h11a7.5,7.5,0,0,0,7.5-7.5v-30A7.5,7.5,0,0,0,504.5,417ZM347,279.5A37.5,37.5,0,1,1,384.5,317,37.54,37.54,0,0,1,347,279.5ZM384.5,332A72.58,72.58,0,0,1,457,404.5V417H333.5V407a77,77,0,0,0-11.09-39.9A72.33,72.33,0,0,1,384.5,332Zm-156-30A27.5,27.5,0,1,1,256,329.5,27.54,27.54,0,0,1,228.5,302ZM256,344.5A62.57,62.57,0,0,1,318.5,407v10h-125V407A62.57,62.57,0,0,1,256,344.5Zm-166-65A37.5,37.5,0,1,1,127.5,317,37.54,37.54,0,0,1,90,279.5Zm-35,125a72.49,72.49,0,0,1,134.59-37.4A77,77,0,0,0,178.5,407v10H55ZM478.5,497H33.5V462h445ZM497,447H15V432H497Z" /> </g></svg> </span>
                    </div>
                    <div className="elementor-icon-box-content">
                      <h3 className="elementor-icon-box-title">
                        <span>
                          {cmsText(c?.features?.items?.[1]?.text, 'We Offer Safe and Family-Friendly Pest Control Techniques')}
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-cef2660 e-con-full e-flex e-con e-child" data-element_type="container" data-id="cef2660" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-76fd698 elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-element_type="widget" data-id="76fd698" data-widget_type="icon-box.default">
                <div className="elementor-widget-container">
                  <div className="elementor-icon-box-wrapper">
                    <div className="elementor-icon-box-icon">
                      <span className="elementor-icon">
                        <svg style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 64 64" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svgjs="http://svgjs.com/svgjs" xmlnsXlink="http://www.w3.org/1999/xlink"> <g> <g id="Medal"> <path d="M57.0244,57.6646,49.7959,38.6592a6.1888,6.1888,0,0,0,1.8252-1.666,6.0858,6.0858,0,0,0,.9756-5.086,4.1352,4.1352,0,0,1,1.3926-4.1884,6.1012,6.1012,0,0,0-.0118-9.4468A4.1349,4.1349,0,0,1,52.6,14.0811a6.0808,6.0808,0,0,0-.9785-5.0748,6.237,6.237,0,0,0-4.6484-2.5571,4.2529,4.2529,0,0,1-3.6358-2.5971A6.189,6.189,0,0,0,39.5107.312a6.2889,6.2889,0,0,0-5.2578.626,4.3222,4.3222,0,0,1-4.5068,0A6.2886,6.2886,0,0,0,24.4883.312a6.19,6.19,0,0,0-3.8252,3.54A4.2561,4.2561,0,0,1,17.0176,6.45a6.23,6.23,0,0,0-4.6387,2.5571,6.0858,6.0858,0,0,0-.9756,5.086,4.1355,4.1355,0,0,1-1.3926,4.1885,6.1011,6.1011,0,0,0,.0118,9.4467A4.1349,4.1349,0,0,1,11.4,31.9189a6.0808,6.0808,0,0,0,.9785,5.0748,6.1887,6.1887,0,0,0,1.8254,1.6649L6.9756,57.6646A.9994.9994,0,0,0,8.248,58.9609l7.8731-2.83,4.001,7.3471A.9994.9994,0,0,0,21,64c.0225,0,.0449-.001.0674-.0024a1,1,0,0,0,.8672-.6421l6.7675-17.784a6.2959,6.2959,0,0,0,1.045-.51,4.3226,4.3226,0,0,1,4.5058,0l.001.0005a6.2859,6.2859,0,0,0,1.0415.5026l6.77,17.79a1,1,0,0,0,.8672.6421c.0225.0014.0449.0024.0674.0024a.9994.9994,0,0,0,.8779-.522l4.001-7.3471,7.8731,2.83a.9994.9994,0,0,0,1.2724-1.2963ZM20.8389,60.6123l-3.3711-6.19a1.0005,1.0005,0,0,0-1.2158-.4629L9.6172,56.3438l6.4441-16.9422a6.38,6.38,0,0,0,.966.1492,4.2529,4.2529,0,0,1,3.6358,2.5971,6.189,6.189,0,0,0,3.8262,3.54,6.3213,6.3213,0,0,0,1.9124.3058ZM28.6953,43.36a4.286,4.286,0,0,1-3.5869.4262,4.193,4.193,0,0,1-2.5938-2.3955,6.2686,6.2686,0,0,0-5.3613-3.8359,4.2372,4.2372,0,0,1-3.1553-1.7359,4.0894,4.0894,0,0,1-.6552-3.42,6.1465,6.1465,0,0,0-2.0586-6.2221,4.1017,4.1017,0,0,1,.0117-6.3628A6.1458,6.1458,0,0,0,13.34,13.59a4.084,4.084,0,0,1,.6582-3.4091,4.2439,4.2439,0,0,1,3.1661-1.7364,6.2651,6.2651,0,0,0,5.3505-3.8354,4.1886,4.1886,0,0,1,2.5938-2.395,4.291,4.291,0,0,1,3.5879.4262,6.34,6.34,0,0,0,6.6084,0,4.29,4.29,0,0,1,3.5869-.4262,4.193,4.193,0,0,1,2.5938,2.3955,6.2686,6.2686,0,0,0,5.3613,3.8359,4.2376,4.2376,0,0,1,3.1553,1.7359,4.0891,4.0891,0,0,1,.6552,3.42,6.1465,6.1465,0,0,0,2.0586,6.2221,4.1017,4.1017,0,0,1-.0117,6.3628A6.1458,6.1458,0,0,0,50.66,32.41a4.0837,4.0837,0,0,1-.6582,3.4091,4.2435,4.2435,0,0,1-3.1661,1.7364,6.2651,6.2651,0,0,0-5.3505,3.8354,4.1886,4.1886,0,0,1-2.5938,2.395,4.2823,4.2823,0,0,1-3.5879-.4262A6.34,6.34,0,0,0,28.6953,43.36ZM47.748,53.959a1,1,0,0,0-1.2158.4629l-3.3711,6.19L37.5991,45.996a6.325,6.325,0,0,0,1.9116-.3075,6.1926,6.1926,0,0,0,3.8272-3.5406A4.2526,4.2526,0,0,1,46.9824,39.55a6.3229,6.3229,0,0,0,.9567-.1478l6.4437,16.9413Z"> </path> <path d="M47,23A15,15,0,1,0,32,38,15.0167,15.0167,0,0,0,47,23ZM32,36A13,13,0,1,1,45,23,13.0147,13.0147,0,0,1,32,36Z" /> <path d="M39.9531,19.6841l-4.876-.7085-2.1806-4.418a1.0409,1.0409,0,0,0-1.793,0l-2.1806,4.418-4.876.7085a1,1,0,0,0-.5547,1.706l3.5293,3.439-.833,4.856a1,1,0,0,0,1.45,1.0542L32,28.4468l4.3613,2.2925a1,1,0,0,0,1.45-1.0542l-.833-4.856,3.5293-3.439a1,1,0,0,0-.5547-1.706Zm-4.747,4.08a1.0012,1.0012,0,0,0-.2872.8852l.5791,3.377-3.0332-1.5943a.9991.9991,0,0,0-.93,0L28.502,28.0259l.5791-3.377a1.0012,1.0012,0,0,0-.2872-.8852L26.34,21.3721l3.3907-.4927a.999.999,0,0,0,.7529-.5474L32,17.26l1.5166,3.0722a.999.999,0,0,0,.7529.5474l3.3907.4927Z" /> </g> </g></svg> </span>
                    </div>
                    <div className="elementor-icon-box-content">
                      <h3 className="elementor-icon-box-title">
                        <span>
                          {cmsText(c?.features?.items?.[2]?.text, 'Trained and qualified technicians in Melbourne')}
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-1ecd94b e-con-full e-flex e-con e-child" data-element_type="container" data-id="1ecd94b" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-f8992a6 elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-element_type="widget" data-id="f8992a6" data-widget_type="icon-box.default">
                <div className="elementor-widget-container">
                  <div className="elementor-icon-box-wrapper">
                    <div className="elementor-icon-box-icon">
                      <span className="elementor-icon">
                        <svg className style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 64 64" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svgjs="http://svgjs.com/svgjs" xmlnsXlink="http://www.w3.org/1999/xlink"> <g> <path className d="M34,57h-.208L29.974,40.771a1,1,0,0,0-.527-.666L20,35.382V27h9a3,3,0,0,0,2.738-1.785L50,29.781v1.4A3,3,0,0,0,48,34v2a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V34a3,3,0,0,0-2-2.816V29a1,1,0,0,0-.758-.97L31.874,23.188A2.994,2.994,0,0,0,29,21H22.373L20,19.8V17a4,4,0,0,0-4-4H11a3.947,3.947,0,0,0-2.019.567L7.707,12.293A1,1,0,0,0,7,12H2a1,1,0,0,0-1,1V33a1,1,0,0,0,1,1H7.066A11.439,11.439,0,0,0,11,41.533V62a1,1,0,0,0,1,1h6a2.994,2.994,0,0,0,.151-5.985L19.868,45l3.342.836L27,58.151V62a1,1,0,0,0,1,1h6a3,3,0,0,0,0-6ZM52,35H50V34a1,1,0,0,1,2,0ZM22.134,23H29a1,1,0,0,1,0,2H19.447l-4.8-2.787a1.313,1.313,0,0,1-.506-1.715,1.264,1.264,0,0,1,.737-.649,1.226,1.226,0,0,1,.951.07l5.857,2.973A1,1,0,0,0,22.134,23ZM16,15a2,2,0,0,1,2,2v1.781l-1.271-.645a3.209,3.209,0,0,0-2.488-.185,3.25,3.25,0,0,0-1.9,1.663,3.318,3.318,0,0,0,1.3,4.329L18,26.473V30H9V17a2,2,0,0,1,2-2ZM3,14H6.586l.981.981A3.947,3.947,0,0,0,7,17V32H3ZM19,60a1,1,0,0,1-1,1H13V59h5A1,1,0,0,1,19,60Zm-2.867-3H13V42.9a11.457,11.457,0,0,0,2.681,1.051l2.236.559Zm8.109-12.97-8.077-2.019A9.463,9.463,0,0,1,9,32.833V32h9v2.382l-.553-.277-.894,1.79,11.581,5.79L31.737,57h-3L24.956,44.706A1,1,0,0,0,24.242,44.03ZM34,61H29V59h5a1,1,0,0,1,0,2Z" /> <path className d="M19,7a6,6,0,1,0-6,6A6.006,6.006,0,0,0,19,7Zm-6,4a4,4,0,1,1,4-4A4,4,0,0,1,13,11Z" /> <rect className height={2} width={2} x={50} y={39} /> <rect className height={2} width={2} x={50} y={43} /> <rect className height={2} width={2} x={50} y={47} /> <rect className height={2} transform="translate(-14.811 44.243) rotate(-45)" width="2.828" x="44.586" y={39} /> <rect className height={2} transform="translate(-17.811 43) rotate(-45)" width="2.828" x="41.586" y={42} /> <rect className height={2} transform="translate(-20.811 41.757) rotate(-45)" width="2.828" x="38.586" y={45} /> <rect className height="2.828" transform="translate(-12.175 50.607) rotate(-45)" width={2} x={54} y="38.586" /> <rect className height="2.828" transform="translate(-13.418 53.607) rotate(-45)" width={2} x={57} y="41.586" /> <rect className height="2.828" transform="translate(-14.66 56.607) rotate(-45)" width={2} x={60} y="44.586" /> <path className d="M47.734,54.251l.713-.356a1,1,0,0,0,.448-.448l1-2-1.79-.894-.85,1.7-.427.213a4.346,4.346,0,0,0-.537-.555A2.969,2.969,0,0,0,47,50a3,3,0,0,0-6,0,2.969,2.969,0,0,0,.709,1.913,4.346,4.346,0,0,0-.537.555l-.427-.213-.85-1.7-1.79.894,1,2a1,1,0,0,0,.448.448l.713.356A6.072,6.072,0,0,0,40,56H38v2h2.339a5.489,5.489,0,0,0,.254.585l-1.04.52a1,1,0,0,0-.448.448l-1,2,1.79.894.85-1.7,1.1-.548a3.3,3.3,0,0,0,4.316,0l1.1.548.85,1.7,1.79-.894-1-2a1,1,0,0,0-.448-.448l-1.04-.52A5.489,5.489,0,0,0,47.661,58H50V56H48A6.072,6.072,0,0,0,47.734,54.251ZM44,49a1,1,0,1,1-1,1A1,1,0,0,1,44,49Zm0,10c-1.084,0-2-1.374-2-3s.916-3,2-3,2,1.374,2,3S45.084,59,44,59Z" /> <path className d="M63,58V56H61a6.072,6.072,0,0,0-.266-1.749l.713-.356a1,1,0,0,0,.448-.448l1-2-1.79-.894-.85,1.7-.427.213a4.346,4.346,0,0,0-.537-.555A2.969,2.969,0,0,0,60,50a3,3,0,0,0-6,0,2.969,2.969,0,0,0,.709,1.913,4.346,4.346,0,0,0-.537.555l-.427-.213-.85-1.7-1.79.894,1,2a1,1,0,0,0,.448.448l.713.356A6.072,6.072,0,0,0,53,56H51v2h2.339a5.489,5.489,0,0,0,.254.585l-1.04.52a1,1,0,0,0-.448.448l-1,2,1.79.894.85-1.7,1.1-.548a3.3,3.3,0,0,0,4.316,0l1.1.548.85,1.7,1.79-.894-1-2a1,1,0,0,0-.448-.448l-1.04-.52A5.489,5.489,0,0,0,60.661,58Zm-6-9a1,1,0,1,1-1,1A1,1,0,0,1,57,49Zm0,10c-1.084,0-2-1.374-2-3s.916-3,2-3,2,1.374,2,3S58.084,59,57,59Z" /> </g></svg> </span>
                    </div>
                    <div className="elementor-icon-box-content">
                      <h3 className="elementor-icon-box-title">
                        <span>
                          {cmsText(c?.features?.items?.[3]?.text, 'Professional Methods to Manage Your Pest Problem!')}
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-7a1baa44 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="7a1baa44" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-255f0b1d" data-element_type="column" data-id="255f0b1d" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-ccd7152 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="ccd7152" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.why_choose?.eyebrow, 'Why Choose')}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-63a0589a elementor-widget elementor-widget-elementskit-heading" data-element_type="widget" data-id="63a0589a" data-widget_type="elementskit-heading.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con"><div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-"><h2 className="ekit-heading--title elementskit-section-title">{cmsText(c?.why_choose?.title, 'Professional Pest Control in Melbourne CBD?')}</h2></div></div> </div>
                </div>
                <div className="elementor-element elementor-element-362ceb03 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="362ceb03" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <CmsHtml html={c?.why_choose?.intro ?? '<p><span style="font-weight:400">Maintaining a pest-free environment in </span><b>Melbourne CBD</b><span style="font-weight:400"> is crucial for both residential and commercial spaces. At 7 States Pest Control, we specialize in providing reliable and effective </span><b>pest control Melbourne CBD</b><span style="font-weight:400"> solutions tailored to meet your specific needs.</span></p>'} />
                  </div>
                </div>
                <div className="elementor-element elementor-element-45d765f elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="45d765f" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <CmsHtml html={c?.why_choose?.benefits} />
                  </div>
                </div>
                <div className="elementor-element elementor-element-56659ba elementor-widget elementor-widget-elementskit-heading" data-element_type="widget" data-id="56659ba" data-widget_type="elementskit-heading.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con"><div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-"><h3 className="ekit-heading--title elementskit-section-title">Benefits of Same-Day Pest Control in Melbourne</h3></div></div> </div>
                </div>
                <div className="elementor-element elementor-element-a1d5239 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="a1d5239" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p><span style={{fontWeight: 400}}>When pests invade, quick action is crucial. Our </span><b>same day pest control Melbourne</b><span style={{fontWeight: 400}}> services ensure immediate response and resolution. Whether it’s ants, rodents, or termites, our prompt </span><b>emergency pest control Melbourne</b><span style={{fontWeight: 400}}> intervention prevents further damage and health risks, restoring comfort to your space swiftly.</span></p> </div>
                </div>
                <div className="elementor-element elementor-element-59f38b5 elementor-widget elementor-widget-elementskit-heading" data-element_type="widget" data-id="59f38b5" data-widget_type="elementskit-heading.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con"><div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-"><h3 className="ekit-heading--title elementskit-section-title">Comprehensive Pest Control Services in Melbourne</h3></div></div> </div>
                </div>
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-563b78d2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="563b78d2">
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-10288d99" data-element_type="column" data-id="10288d99">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-7cdb408d elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="7cdb408d" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items elementor-inline-items">
                              <li className="elementor-icon-list-item elementor-inline-item">
                                <span className="elementor-icon-list-icon">
                                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-double-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg> </span>
                                <span className="elementor-icon-list-text">Residential Pest Control</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-5076de83 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="5076de83" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <ul><li aria-level={1} style={{fontWeight: 400}}><b>Residential Pest Control</b><span style={{fontWeight: 400}}> Protect your home with our </span><b>home pest control Melbourne</b><span style={{fontWeight: 400}}> services. We tailor our approach to address your specific pest issues, offering peace of mind knowing your home is safe and pest-free.</span></li></ul> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-71124cf7" data-element_type="column" data-id="71124cf7">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-69ec3662 elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="69ec3662" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items elementor-inline-items">
                              <li className="elementor-icon-list-item elementor-inline-item">
                                <span className="elementor-icon-list-icon">
                                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-double-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg> </span>
                                <span className="elementor-icon-list-text">Commercial Pest Control</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-2cd384c4 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="2cd384c4" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <ul><li aria-level={1} style={{fontWeight: 400}}><b>Commercial Pest Control</b><span style={{fontWeight: 400}}> Businesses in </span><b>Melbourne CBD</b><span style={{fontWeight: 400}}> rely on us for comprehensive commercial </span><b>pest control Melbourne</b><span style={{fontWeight: 400}}> solutions. From restaurants to office buildings, we customize plans to meet the unique needs of your business, ensuring a clean and hygienic environment for your staff and customers.</span></li></ul> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-123459a3 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="123459a3">
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-537958ff" data-element_type="column" data-id="537958ff">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-1a51d584 elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="1a51d584" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items elementor-inline-items">
                              <li className="elementor-icon-list-item elementor-inline-item">
                                <span className="elementor-icon-list-icon">
                                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-double-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg> </span>
                                <span className="elementor-icon-list-text">Eco-Friendly Pest Control</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-134d29e7 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="134d29e7" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <ul><li aria-level={1} style={{fontWeight: 400}}><b>Eco-Friendly Pest Control</b><span style={{fontWeight: 400}}> For environmentally conscious clients, we offer </span><b>affordable pest control Melbourne</b><span style={{fontWeight: 400}}> eco-friendly options. Our natural and non-toxic </span><b>pest removal Melbourne</b><span style={{fontWeight: 400}}> methods effectively manage pests while safeguarding the environment and minimizing impact on surrounding ecosystems.</span></li></ul> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2a095509" data-element_type="column" data-id="2a095509">
                      <div className="elementor-widget-wrap">
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-1c311cfe elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="1c311cfe">
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6934d412" data-element_type="column" data-id="6934d412">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-49af4f48 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="49af4f48" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p><span style={{fontWeight: 400}}>At 7 States Pest Control, we are committed to delivering exceptional pest control service in Melbourne, including reliable </span><Link to="/wasp-removal-melbourne"><b>wasp control Melbourne</b></Link><span style={{fontWeight: 400}}> solutions. Trust 7 States Pest Control to keep your pest control Melbourne CBD property pest-free and comfortable year-round. </span></p> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-9286835 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id={9286835} data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6c60acad" data-element_type="column" data-id="6c60acad">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-1f63bd68 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="1f63bd68">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-549e5dbb" data-element_type="column" data-id="549e5dbb" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-62e9fce4 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="62e9fce4" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.cta?.eyebrow, 'Ideas to reality')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-71cbec9d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="71cbec9d" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.cta?.title, 'Talk to Us Today to Learn More')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-6eee8f25 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="6eee8f25" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <CmsHtml html={c?.cta?.body ?? '<p>Do you have any specific questions about us, our services, or anything related to pest infestation issues? Call us today on <a href="tel:+61434660060">&nbsp;+61 434 660 060 </a>or use our contact form to connect with our&nbsp;<b>7 States Pest Control</b>. You can get answers to your questions, get upfront quotes for the&nbsp;<b>7 States Pest Control</b>&nbsp;issues, and receive high-quality tailored services.</p>'} />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-2c3c324e elementor-widget elementor-widget-button" data-element_type="widget" data-id="2c3c324e" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link className="elementor-button elementor-button-link elementor-size-sm" to={cmsText(c?.cta?.button_url, '/contact-us')}>
                                <span className="elementor-button-content-wrapper">
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-576dd2a2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="576dd2a2">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-391b9959" data-element_type="column" data-id="391b9959">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-7698d59c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="7698d59c">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1487d862" data-element_type="column" data-id="1487d862">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-7c5f161 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="7c5f161" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.process?.eyebrow, 'Our Process')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-55c70f33 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="55c70f33" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.process?.title, 'Our Proven Process for a Pest-Free Environment')}</h2> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-357dee39" data-element_type="column" data-id="357dee39" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-5c022552 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="5c022552" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <CmsHtml html={c?.process?.intro ?? '<p class="font-claude-response-body break-words whitespace-normal leading-[1.7]">At 7 States Pest Control, we take pride in making our customers happy. We get the job done right, leaving your <strong>pest control Melbourne</strong> property free of pests and creating a healthy living or working space with our trusted <strong>pest removal Melbourne</strong> services.</p>'} />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-728a2f19 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="728a2f19" data-widget_type="divider.default">
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
        <div className="elementor-element elementor-element-80ef3b8 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="80ef3b8">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-f4a463e e-con-full e-flex e-con e-child" data-element_type="container" data-id="f4a463e" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-3356a0b e-con-full e-flex e-con e-child" data-element_type="container" data-id="3356a0b" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-955adb1 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="955adb1" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(processStep('inspection')?.title, 'Inspection')}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-91217db elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="91217db" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <CmsHtml html={processStep('inspection')?.description} />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-ad9a9e6 e-con-full e-flex e-con e-child" data-element_type="container" data-id="ad9a9e6">
              <div className="elementor-element elementor-element-1605948 elementor-widget elementor-widget-image" data-element_type="widget" data-id={1605948} data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img alt={cmsText(processStep('inspection')?.alt, 'Pest Control Melbourne')} className="attachment-large size-large wp-image-556" decoding="async" height={505} loading="lazy" sizes="(max-width: 769px) 100vw, 769px" src={cmsMediaUrl(processStep('inspection')?.image, '/assets/images/About-Pest-Control-6.jpg-2_ce342d76.webp')} width={769} /> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-7c13151 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="7c13151">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-c0e398f e-con-full e-flex e-con e-child" data-element_type="container" data-id="c0e398f" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-e06ce8b e-con-full e-flex e-con e-child" data-element_type="container" data-id="e06ce8b" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-d81403f elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d81403f" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(processStep('treatment_plan')?.title, 'Treatment Plan')}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-86afff7 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="86afff7" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <CmsHtml html={processStep('treatment_plan')?.description} />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-b6adbbd e-con-full e-flex e-con e-child" data-element_type="container" data-id="b6adbbd">
              <div className="elementor-element elementor-element-e2eaaba elementor-widget elementor-widget-image" data-element_type="widget" data-id="e2eaaba" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img alt={cmsText(processStep('treatment_plan')?.alt, 'pest control')} className="attachment-large size-large wp-image-663" decoding="async" height={534} loading="lazy" sizes="(max-width: 800px) 100vw, 800px" src={cmsMediaUrl(processStep('treatment_plan')?.image, '/assets/images/pest-01-2048x1365-1-1-1024x683_9521438d.jpg')} width={800} /> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-346762a e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="346762a">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-4a29f5f e-con-full e-flex e-con e-child" data-element_type="container" data-id="4a29f5f" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-01debaf e-con-full e-flex e-con e-child" data-element_type="container" data-id="01debaf" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-element elementor-element-b9adb7e elementor-widget elementor-widget-heading" data-element_type="widget" data-id="b9adb7e" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(processStep('extermination')?.title, 'The Extermination Procedure')}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-0937eb6 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="0937eb6" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <CmsHtml html={processStep('extermination')?.description} />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-f558ec8 e-con-full e-flex e-con e-child" data-element_type="container" data-id="f558ec8">
              <div className="elementor-element elementor-element-affd0ea elementor-widget elementor-widget-image" data-element_type="widget" data-id="affd0ea" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img alt={cmsText(processStep('extermination')?.alt, '')} className="attachment-large size-large wp-image-664" decoding="async" height={534} loading="lazy" sizes="(max-width: 800px) 100vw, 800px" src={cmsMediaUrl(processStep('extermination')?.image, '/assets/images/JGHJJ-01-2048x1365-2-1024x683_666c5558.jpg')} width={800} /> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-3ce7e97 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="3ce7e97">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-80f26f2 e-con-full e-flex e-con e-child" data-element_type="container" data-id="80f26f2" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-e8b520a e-con-full e-flex e-con e-child" data-element_type="container" data-id="e8b520a" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-bcea69a elementor-widget elementor-widget-heading" data-element_type="widget" data-id="bcea69a" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(processStep('monitoring')?.title, 'Monitoring')}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-2ca744f elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="2ca744f" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <CmsHtml html={processStep('monitoring')?.description} />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-25a1256 e-con-full e-flex e-con e-child" data-element_type="container" data-id="25a1256">
              <div className="elementor-element elementor-element-2e07a24 elementor-widget elementor-widget-image" data-element_type="widget" data-id="2e07a24" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img alt={cmsText(processStep('monitoring')?.alt, 'Monitoring')} className="attachment-large size-large wp-image-666" decoding="async" height={534} loading="lazy" sizes="(max-width: 800px) 100vw, 800px" src={cmsMediaUrl(processStep('monitoring')?.image, '/assets/images/111-01-2048x1365-2-1024x683_715af706.jpg')} width={800} /> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-698ef42 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="698ef42">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-71c71c9 e-con-full e-flex e-con e-child" data-element_type="container" data-id="71c71c9" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-fa46bbc e-con-full e-flex e-con e-child" data-element_type="container" data-id="fa46bbc" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
                <div className="elementor-element elementor-element-f460faf elementor-widget elementor-widget-heading" data-element_type="widget" data-id="f460faf" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(processStep('prevention')?.title, 'Prevention Measures and Tips')}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-9e335b2 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="9e335b2" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <CmsHtml html={processStep('prevention')?.description} />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-37d58eb e-con-full e-flex e-con e-child" data-element_type="container" data-id="37d58eb">
              <div className="elementor-element elementor-element-ed53ee8 elementor-widget elementor-widget-image" data-element_type="widget" data-id="ed53ee8" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img alt={cmsText(processStep('prevention')?.alt, '')} className="attachment-large size-large wp-image-667" decoding="async" height={534} loading="lazy" sizes="(max-width: 800px) 100vw, 800px" src={cmsMediaUrl(processStep('prevention')?.image, '/assets/images/URUU-01-2048x1365-2-1024x683_ca0bd96a.jpg')} width={800} /> </div>
              </div>
            </div>
          </div>
        </div>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-709a4c8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="709a4c8">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0d15711" data-element_type="column" data-id="0d15711">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-808b0bf elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="808b0bf">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4183239" data-element_type="column" data-id={4183239}>
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-d13b462 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d13b462" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.eyebrow, 'Clients Reviews')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-bef6205 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="bef6205" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.title, '7 States Pest Control for Reliable Pest Management Solutions')}</h2> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a05dfb9" data-element_type="column" data-id="a05dfb9" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-e35f23f elementor-widget elementor-widget-heading" data-element_type="widget" data-id="e35f23f" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.subtitle, 'Reviews of Our Pest Control Services')}</h3> </div>
                        </div>
                        <div className="elementor-element elementor-element-89cdf79 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="89cdf79" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h6 className="elementor-heading-title elementor-size-default">EXCELLENT</h6> </div>
                        </div>
                        <div className="elementor-element elementor-element-b95aa7a elementor-widget elementor-widget-rating" data-element_type="widget" data-id="b95aa7a" data-widget_type="rating.default">
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
                        <div className="elementor-element elementor-element-eb9e81b elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="eb9e81b" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>{cmsText(c?.reviews?.rating_label, 'Based on\u00a045 reviews')}</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-dd6050e elementor-widget elementor-widget-rating" data-element_type="widget" data-id="dd6050e" data-widget_type="rating.default">
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
                        <div className="elementor-element elementor-element-60f2426 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="60f2426" data-widget_type="divider.default">
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
                <div className="elementor-element elementor-element-754ed5f e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="754ed5f">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-d7e30f8 elementor-widget elementor-widget-shortcode" data-element_type="widget" data-id="d7e30f8" data-widget_type="shortcode.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-shortcode"><TrustIndexReviews /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-30c8eeb7 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="30c8eeb7" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-655c29b5" data-element_type="column" data-id="655c29b5">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-e14eb60 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="e14eb60" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.faq?.eyebrow, "FAQ'S")}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-5a80fdcb elementor-widget elementor-widget-heading" data-element_type="widget" data-id="5a80fdcb" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.faq?.title, 'Frequently Asked Questions')}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-4874caf3 elementor-widget elementor-widget-elementskit-accordion" data-element_type="widget" data-id="4874caf3" data-widget_type="elementskit-accordion.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con">
                      <div className="elementskit-accordion accoedion-primary" id="accordion-6a15902bebc0a">
                        {(c?.faq?.items ?? []).map((item, index) => (
                          <div key={index} className={`elementskit-card${index === 0 ? ' active' : ''}`}>
                            <div className="elementskit-card-header" id={`primaryHeading-${index}-4874caf3`}>
                              <a
                                aria-controls={`Collapse-faq-${index}`}
                                aria-expanded={index === 0 ? 'true' : 'false'}
                                className="ekit-accordion--toggler elementskit-btn-link collapsed"
                                data-ekit-toggle="collapse"
                                data-target={`#Collapse-faq-${index}`}
                                href={`#collapse-faq-${index}`}
                              >
                                <span className="ekit-accordion-title"> {cmsText(item?.question, '')}</span>
                                <div className="ekit_accordion_icon_group">
                                  <div className="ekit_accordion_normal_icon">
                                    <i className="icon icon-down-arrow1" /> </div>
                                  <div className="ekit_accordion_active_icon">
                                    <i className="icon icon-up-arrow1" /> </div>
                                </div>
                              </a>
                            </div>
                            <div
                              aria-labelledby={`primaryHeading-${index}-4874caf3`}
                              className={index === 0 ? 'show collapse' : 'collapse'}
                              data-parent="#accordion-6a15902bebc0a"
                              id={`Collapse-faq-${index}`}
                            >
                              <div className="elementskit-card-body ekit-accordion--content">
                                <CmsHtml html={item?.answer_html} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div> </div>
                </div>
              </div>
            </div>
            <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-7b2639" data-element_type="column" data-id="7b2639">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-21d44866 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="21d44866">
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4f5faaf9" data-element_type="column" data-id="4f5faaf9">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-76075da8 elementor-widget elementor-widget-image" data-element_type="widget" data-id="76075da8" data-widget_type="image.default">
                          <div className="elementor-widget-container">
                            <img alt="7 States Pest Control" className="attachment-full size-full wp-image-778" decoding="async" height={1280} loading="lazy" sizes="(max-width: 1280px) 100vw, 1280px" src={cmsMediaUrl(c?.faq?.image, '/assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1_ecbbd918.jpg')} width={1280} /> </div>
                        </div>
                        <div className="elementor-element elementor-element-6af4e30d elementor-widget__width-initial elementor-absolute ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="6af4e30d" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
                          <div className="elementor-widget-container">
                            <div className="ekit-wid-con">
                              <div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
                                <div className="box-body">
                                  <h3 className="elementskit-info-box-title">
                                    {cmsText(c?.faq?.sidebar_title, 'Any questions you want to ask?')}
                                  </h3>
                                  <p>{cmsText(c?.faq?.sidebar_text, 'Find answers to common questions about our pest control services, treatments, safety, and scheduling.')}</p>
                                  <div className="box-footer disable_hover_button">
                                    <div className="btn-wraper">
                                      <Link className="elementskit-btn whitespace--normal" to={cmsText(c?.faq?.sidebar_link, '/contact-us')}>
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
        <div className="elementor-element elementor-element-9c3e145 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="9c3e145">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-4744bf9 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="4744bf9" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.blog?.eyebrow, 'Our Latest Article')}</h2> </div>
            </div>
            <div className="elementor-element elementor-element-affbaf9 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="affbaf9" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.blog?.title, "Pest Problems? Here's Why Read Might Be Your Secret Weapon.")}</h2> </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-c3653b8 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="c3653b8">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-e163878 elementor-widget elementor-widget-elementskit-blog-posts" data-element_type="widget" data-id="e163878" data-widget_type="elementskit-blog-posts.default">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con"> <div className="row post-items" id="post-items--e163878">
                    <div className="col-lg-4 col-md-6">
                      <div className="elementskit-post-image-card">
                        <div className="elementskit-entry-header">
                          <Link className="elementskit-entry-thumb" to="/why-melbourne-homes-need-professional-termite-pest-control/">
                            <img alt="Why Melbourne Homes Need Professional Termite Pest Control" decoding="async" src="/assets/images/WhatsApp-Image-2026-05-25-at-11.50.58-AM_83fa8176.jpeg" />
                          </Link>
                        </div>
                        <div className="elementskit-post-body">
                          <h2 className="entry-title">
                            <Link to="/why-melbourne-homes-need-professional-termite-pest-control/">
                              Why Melbourne Homes Need Professional Termite Pest Control					</Link>
                          </h2>
                          <p>Termites are quiet workers. You will not hear them. You will not see them moving around your home in broad daylight. Yet they can quietly chew…</p>
                          <div className="btn-wraper">
                            <Link className="elementskit-btn whitespace--normal" to="/why-melbourne-homes-need-professional-termite-pest-control/" id>
                              Learn more                                       </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="elementskit-post-image-card">
                        <div className="elementskit-entry-header">
                          <Link className="elementskit-entry-thumb" to="/5-myths-about-wasp-removal-melbourne-you-should-stop-believing/">
                            <img alt="5 Myths About Wasp Removal Melbourne You Should Stop Believing" decoding="async" src="/assets/images/WhatsApp-Image-2026-05-25-at-11.52.11-AM_ddd44793.jpeg" />
                          </Link>
                        </div>
                        <div className="elementskit-post-body">
                          <h2 className="entry-title">
                            <Link to="/5-myths-about-wasp-removal-melbourne-you-should-stop-believing/">
                              5 Myths About Wasp Removal Melbourne You Should Stop Believing					</Link>
                          </h2>
                          <p>There is a lot of bad advice out there when it comes to dealing with wasps. People share tips at backyard barbecues, on Facebook groups, and…</p>
                          <div className="btn-wraper">
                            <Link className="elementskit-btn whitespace--normal" to="/5-myths-about-wasp-removal-melbourne-you-should-stop-believing/" id>
                              Learn more                                       </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="elementskit-post-image-card">
                        <div className="elementskit-entry-header">
                          <Link className="elementskit-entry-thumb" to="/the-smart-homeowners-guide-to-termite-barrier-protection-in-melbourne/">
                            <img alt="The Smart Homeowner’s Guide to Termite Barrier Protection in Melbourne" decoding="async" src="/assets/images/WhatsApp-Image-2026-05-25-at-11.53.29-AM_6379c2f3.jpeg" />
                          </Link>
                        </div>
                        <div className="elementskit-post-body">
                          <h2 className="entry-title">
                            <Link to="/the-smart-homeowners-guide-to-termite-barrier-protection-in-melbourne/">
                              The Smart Homeowner’s Guide to Termite Barrier Protection in Melbourne					</Link>
                          </h2>
                          <p>If you own a home in Melbourne, you have probably heard about termite damage at least once. Maybe a neighbour found a hollow door frame. Maybe…</p>
                          <div className="btn-wraper">
                            <Link className="elementskit-btn whitespace--normal" to="/the-smart-homeowners-guide-to-termite-barrier-protection-in-melbourne/" id>
                              Learn more                                       </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
