import ContactCmsStyles from '../components/contact/ContactCmsStyles.jsx'
import CmsHtml from '../components/home/CmsHtml.jsx'
import PhoneNumberInput from '../components/PhoneNumberInput.jsx'
import usePageCms from '../hooks/usePageCms.js'
import usePageMeta from '../hooks/usePageMeta.js'
import useSiteContact from '../hooks/useSiteContact.jsx'
import { cmsText } from '../utils/cmsMedia.js'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const { page, content: c } = usePageCms('contact-us')
  const siteContact = useSiteContact()
  usePageMeta('contact_us', page)

  // Prefer page CMS; fall back to shared site contact (same Filament source).
  const phoneNumber = cmsText(c?.phone?.number, siteContact.phoneNumber)
  const phoneUrl = cmsText(c?.phone?.url, siteContact.phoneUrl)
  const emailAddress = cmsText(c?.email?.address, siteContact.emailAddress)
  const emailUrl = cmsText(c?.email?.url, siteContact.emailUrl)
  const hoursTitle = cmsText(c?.hours?.title, siteContact.hoursTitle)
  const hoursBody = cmsText(c?.hours?.body, siteContact.hoursBody)
  const addressText = cmsText(c?.address?.text, siteContact.address)
  const mapEmbedUrl = cmsText(
    c?.map?.embed_url,
    'https://www.google.com/maps/d/embed?mid=1BO16EFVGlD-7b3DEl0Ib_lKR61UoHTI&ehbc=2E312F&noprof=1',
  )

  return (
    <>
      <ContactCmsStyles content={c} />
      <div className="elementor elementor-86" data-elementor-id={86} data-elementor-post-type="page" data-elementor-type="wp-page">
        <section className="elementor-section elementor-top-section elementor-element elementor-element-51da502 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="51da502" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-228572f" data-element_type="column" data-id="228572f">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-dffeb15 elementor-widget elementor-widget-heading animated fadeInDown" data-element_type="widget" data-id="dffeb15" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'Contact')}</h2> </div>
                </div>
                <div className="elementor-element elementor-element-0aab09e elementor-icon-list--layout-inline elementor-align-center elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list animated fadeInDown" data-element_type="widget" data-id="0aab09e" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;,&quot;_animation_delay&quot;:720}" data-widget_type="icon-list.default">
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
                          <span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb, 'Contact Us')}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-bb78c80 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="bb78c80">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3d3aeb8" data-element_type="column" data-id="3d3aeb8">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-891bfaf elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="891bfaf">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c0b63b3" data-element_type="column" data-id="c0b63b3">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-ede26d4 elementor-widget elementor-widget-heading animated fadeInDown" data-element_type="widget" data-id="ede26d4" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.intro?.eyebrow, 'Contact Us')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-96c8c97 elementor-widget elementor-widget-heading animated fadeInLeft" data-element_type="widget" data-id="96c8c97" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.intro?.heading, 'Our Contacts & Location')}</h1> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3d40e28 animated fadeInUp" data-element_type="column" data-id="3d40e28" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-c4b41cd elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="c4b41cd" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            {c?.intro?.body_1 ? (
                              <CmsHtml html={c.intro.body_1} />
                            ) : (
                              <p>Do you want to relocate to a new neighborhood? Are you looking for a reliable pest control company? At 7 States Pest Control, we provide&nbsp;<strong>end of lease pest control Melbourne&nbsp;</strong>to make it easier for you to terminate pests from your property. 7 States Pest Control is your one-stop option for pest control when you’re nearing a lease.</p>
                            )}
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-16ec06c elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="16ec06c" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            {c?.intro?.body_2 ? (
                              <CmsHtml html={c.intro.body_2} />
                            ) : (
                              <p>With our effective end of lease mosquito and cockroach control, we ensure that your rental property is free from unwanted guests. The highly advanced pest control services are provided by registered pest control technicians of our company. What sets us apart is our specialized end-of-lease checklist to ensure that all requirements are met properly.</p>
                            )}
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-b6473e9 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="b6473e9" data-widget_type="divider.default">
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-95d2bd6 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="95d2bd6" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4d83bfe" data-element_type="column" data-id="4d83bfe">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-e36dca7 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="e36dca7">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-aade3a0 contact-info animated fadeInLeft" data-element_type="column" data-id="aade3a0" data-settings="{&quot;animation&quot;:&quot;fadeInLeft&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-0c014c8 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="0c014c8" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
                          <div className="elementor-widget-container">
                            <div className="ekit-wid-con">
                              <div className="elementskit-infobox text-left text-left icon-lef-right-aligin elementor-animation- media">
                                <div className="elementskit-box-header elementor-animation-">
                                  <div className="elementskit-info-box-icon text-center">
                                    <svg aria-hidden="true" className="elementkit-infobox-icon e-font-icon-svg e-far-clock" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" /></svg>
                                  </div>
                                </div>
                                <div className="box-body">
                                  <h3 className="elementskit-info-box-title">
                                    {hoursTitle}              </h3>
                                  <CmsHtml html={hoursBody} as="p" />
                                </div>
                              </div>
                            </div> </div>
                        </div>
                        <div className="elementor-element elementor-element-06a0774 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="06a0774" data-widget_type="divider.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-divider">
                              <span className="elementor-divider-separator">
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-32c45c7 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="32c45c7" data-widget_type="elementskit-icon-box.default">
                          <div className="elementor-widget-container">
                            <div className="ekit-wid-con">
                              <div className="elementskit-infobox text-left text-left icon-lef-right-aligin elementor-animation- media">
                                <div className="elementskit-box-header elementor-animation-">
                                  <div className="elementskit-info-box-icon text-center">
                                    <svg aria-hidden="true" className="elementkit-infobox-icon e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" /></svg>
                                  </div>
                                </div>
                                <div className="box-body">
                                  <h3 className="elementskit-info-box-title">
                                    {cmsText(c?.phone?.title, siteContact.phoneTitle)}              </h3>
                                  <p><a href={phoneUrl}>{phoneNumber}</a></p>
                                </div>
                              </div>
                            </div> </div>
                        </div>
                        <div className="elementor-element elementor-element-851fc96 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="851fc96" data-widget_type="divider.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-divider">
                              <span className="elementor-divider-separator">
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-de095ad ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="de095ad" data-widget_type="elementskit-icon-box.default">
                          <div className="elementor-widget-container">
                            <div className="ekit-wid-con">
                              <div className="elementskit-infobox text-left text-left icon-lef-right-aligin elementor-animation- media">
                                <div className="elementskit-box-header elementor-animation-">
                                  <div className="elementskit-info-box-icon text-center">
                                    <svg aria-hidden="true" className="elementkit-infobox-icon e-font-icon-svg e-far-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" /></svg>
                                  </div>
                                </div>
                                <div className="box-body">
                                  <h3 className="elementskit-info-box-title">
                                    {cmsText(c?.email?.title, siteContact.emailTitle)}              </h3>
                                  <p><a href={emailUrl}>{emailAddress}</a></p>
                                </div>
                              </div>
                            </div> </div>
                        </div>
                        <div className="elementor-element elementor-element-71b37a5 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="71b37a5" data-widget_type="divider.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-divider">
                              <span className="elementor-divider-separator">
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-74f7d9b ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="74f7d9b" data-widget_type="elementskit-icon-box.default">
                          <div className="elementor-widget-container">
                            <div className="ekit-wid-con">
                              <div className="elementskit-infobox text-left text-left icon-lef-right-aligin elementor-animation- media">
                                <div className="elementskit-box-header elementor-animation-">
                                  <div className="elementskit-info-box-icon text-center">
                                    <svg aria-hidden="true" className="elementkit-infobox-icon e-font-icon-svg e-fas-map-marker-alt" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" /></svg>
                                  </div>
                                </div>
                                <div className="box-body">
                                  <h3 className="elementskit-info-box-title">
                                    {cmsText(c?.address?.title, siteContact.addressTitle)}              </h3>
                                  <p>{addressText}</p>
                                </div>
                              </div>
                            </div> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f33127e animated fadeInRight" data-element_type="column" data-id="f33127e" data-settings="{&quot;animation&quot;:&quot;fadeInRight&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-521edfa e-con-full e-flex e-con e-child" data-element_type="container" data-id="521edfa" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                          <div className="elementor-element elementor-element-cbd0177 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="cbd0177" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.title, 'Get A Free Quote Now!')}</h2> </div>
                          </div>
                          <div className="elementor-element elementor-element-9b90def elementor-widget elementor-widget-heading" data-element_type="widget" data-id="9b90def" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.subtitle, 'Have an enquiry? Leave us your details and we’ll call you back during business hours.')}</h6> </div>
                          </div>
                          <div className="elementor-element elementor-element-bb2fb84 elementor-button-align-center elementor-widget elementor-widget-form" data-element_type="widget" data-id="bb2fb84" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                            <div className="elementor-widget-container">
                              <form aria-label="New Form" className="elementor-form" id="home_contact_form" method="post" name="New Form">
                                <input name="post_id" type="hidden" defaultValue={86} />
                                <input name="form_id" type="hidden" defaultValue="bb2fb84" />
                                <input name="referer_title" type="hidden" defaultValue="Contact Us | 7 States Pest Control." />
                                <input name="queried_id" type="hidden" defaultValue={86} />
                                <div className="elementor-form-fields-wrapper elementor-labels-">
                                  <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-first_name elementor-col-100 elementor-field-required">
                                    <label className="elementor-field-label elementor-screen-only" htmlFor="form-field-first_name">
                                      Name							</label>
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
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <div className="elementor-element elementor-element-264f6ab e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="264f6ab">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-ac143e2 elementor-widget elementor-widget-html" data-element_type="widget" data-id="ac143e2" data-widget_type="html.default">
              <div className="elementor-widget-container">
                <iframe height={480} src={mapEmbedUrl} title="Contact map" width={640} /> </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
