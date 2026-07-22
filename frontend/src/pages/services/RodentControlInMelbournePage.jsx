import PhoneNumberInput from '../../components/PhoneNumberInput.jsx'
import ServiceCmsContentBlocks from '../../components/service/ServiceCmsContentBlocks.jsx'
import ServiceFaqCms from '../../components/service/ServiceFaqCms.jsx'
import { cmsText } from '../../utils/cmsMedia.js'
import usePageCms from '../../hooks/usePageCms.js'
import ServiceCmsStyles from '../../components/service/ServiceCmsStyles.jsx'
import CmsHtml from '../../components/home/CmsHtml.jsx'
import usePageMeta from '../../hooks/usePageMeta.js'
import { Link } from 'react-router-dom'

export default function RodentControlInMelbournePage() {
  const { page, content: c } = usePageCms('rodent-control-in-melbourne')
  usePageMeta('rodent_control_in_melbourne', page)

  return (
    <>
      <ServiceCmsStyles content={c} heroBgId="42170a4" ctaBgId="057b4d3" />
      <ServiceFaqCms faq={c?.faq} accordionWidgetId="5146096" />
      <ServiceCmsContentBlocks content={c} />
      <div className="elementor elementor-1680" data-elementor-id={1680} data-elementor-post-type="page" data-elementor-type="wp-page">
        <div className="elementor-element elementor-element-42170a4 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="42170a4" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-c06934f e-con-full e-flex e-con e-child" data-element_type="container" data-id="c06934f">
              <div className="elementor-element elementor-element-5f391fa elementor-icon-list--layout-inline elementor-align-left elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="5f391fa" data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:720}" data-widget_type="icon-list.default">
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
                        <span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb_current, 'Rodent Control In Melbourne')}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="elementor-element elementor-element-192e3a7 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="192e3a7" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'Rodent Control')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-46b76d7 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="46b76d7" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.heading, 'Rodent Control in Melbourne | Effective Rat &amp; Pest Control Services')}</h1> </div>
              </div>
              <div className="elementor-element elementor-element-7b59144 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="7b59144" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <CmsHtml html={c?.hero?.intro} />
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-9cbb334 e-con-full e-flex e-con e-child" data-element_type="container" data-id="9cbb334" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-1cfafdf elementor-widget elementor-widget-heading" data-element_type="widget" data-id="1cfafdf" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.title, 'Get A Free Quote Now!')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-a7b4484 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="a7b4484" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.subtitle, 'Have an enquiry? Leave us your details and we\'ll call you back during business hours.')}</h6> </div>
              </div>
              <div className="elementor-element elementor-element-37a0431 elementor-button-align-center elementor-widget elementor-widget-form" data-element_type="widget" data-id="37a0431" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                <div className="elementor-widget-container">
                  <form aria-label="New Form" className="elementor-form" id="home_contact_form" method="post" name="New Form">
                    <input name="post_id" type="hidden" defaultValue={1680} />
                    <input name="form_id" type="hidden" defaultValue="37a0431" />
                    <input name="referer_title" type="hidden" defaultValue="Rodent Control Melbourne | Affordable Mice & Rat Pest Control" />
                    <input name="queried_id" type="hidden" defaultValue={1680} />
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
        <div className="elementor-element elementor-element-b53988d elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="b53988d" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-df7ce2d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="df7ce2d" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Rodent Control In Melbourne</h2> </div>
            </div>
            <div className="elementor-element elementor-element-50209db elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="50209db" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                <p>Spotting rodents in your property can be worrisome and distressing. We all know that rodents can inflict severe damages on our property. Rodents are known to spread various types of illnesses when searching for food. Furthermore, rodents also have a natural and constant gnawing habit. At&nbsp;<Link to="/"><strong>7 States Pest Control</strong></Link>, we offer highly customized rodent elimination services.</p><p>Being an experienced pest control agency, we know that infestation of rodents in every property is not same. That’s why we adopt a highly tailored approach to deal with rodents in your home or office. With our&nbsp;<Link to="/our-services-rodent-control">Rodent Control</Link>, you can now effectively remove pesky rats from your home. To know more about our services, contact us today.</p> </div>
            </div>
          </div>
        </div>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-4c3a67a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="4c3a67a">
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
                            <h2 className="elementor-heading-title elementor-size-default">Rodent removal</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-dd5b3de elementor-widget elementor-widget-heading" data-element_type="widget" data-id="dd5b3de" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Affordable Rodent Control in Melbourne Using Eco-Friendly Methods</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-76690a4 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="76690a4" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="de434cf" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><div className="elementor-element elementor-element-a1039c3 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="a1039c3" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p><span style={{fontWeight: 400}}>Did you know rats and mice can transmit over 35 harmful diseases such as Hantavirus, Salmonella, and Leptospirosis? Ignoring even a minor rodent sighting can quickly spiral into a full-blown infestation — putting your family, staff, and property at serious risk.</span></p><p><span style={{fontWeight: 400}}>With our </span><b>cheap rodent control</b><span style={{fontWeight: 400}}> options, we ensure your safety without hurting your pocket. Our services for </span><b>pest control Melbourne rats</b><span style={{fontWeight: 400}}> are tailored to fit both residential and commercial properties across the city.</span></p><p><span style={{fontWeight: 400}}>From sealing entry points to eliminating rodents with safe, targeted methods, our </span><b>mice pest control Melbourne</b><span style={{fontWeight: 400}}> team works tirelessly to protect your property around the clock. We use eco-friendly treatments that are tough on pests but completely safe for your children, pets, and the environment.</span></p><p><span style={{fontWeight: 400}}>We understand the urgency — rodents reproduce fast and can infest your entire building within weeks. A single pair of rats can produce up to 2,000 descendants in just one year. That’s why our </span><b>rodent control in Melbourne</b><span style={{fontWeight: 400}}> experts act quickly with tried-and-tested solutions designed to stop infestations before they grow out of control.</span></p><p className="font-claude-response-body break-words whitespace-normal leading-[1.7]">At 7 States Pest Control, our experienced team uses state-of-the-art techniques to ensure effective <strong>mouse control Melbourne</strong> and long-term prevention. We don’t just remove the pests — we identify the root cause and seal every possible entry point, keeping your environment permanently safe. We also provide trusted <Link className="underline underline underline-offset-2 decoration-1 decoration-current/40 hover:decoration-current focus:decoration-current" to="/our-services-termite-pest-control"><strong>termite control Melbourne</strong></Link> services to protect your property from all angles.</p></div></div></div></div> </div>
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
        <div className="elementor-element elementor-element-7c86302 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="7c86302" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-004944e elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="004944e" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                <h3 className="elementor-heading-title elementor-size-default"><span style={{color: '#ffffff'}}>Effective Mice Pest Control Solutions in Melbourne for Every Species</span></h3> </div>
            </div>
            <div className="elementor-element elementor-element-1d09ab6 e-con-full e-flex e-con e-child" data-element_type="container" data-id="1d09ab6">
              <div className="elementor-element elementor-element-2e071b3 e-con-full e-flex e-con e-child" data-element_type="container" data-id="2e071b3" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-element elementor-element-cc84eff elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="cc84eff" data-widget_type="image-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="melbourne-rodent-control.jpg" className="attachment-full size-full wp-image-1707" decoding="async" fetchpriority="high" height={1080} sizes="(max-width: 1080px) 100vw, 1080px" src="/assets/images/Roof-Rat_944db16c.png" srcSet="/assets/images/Roof-Rat_944db16c.png 1080w, /assets/images/Roof-Rat-300x300_dae95298.png 300w, /assets/images/Roof-Rat-1024x1024_25427b57.png 1024w, /assets/images/Roof-Rat-150x150_48d7d1b9.png 150w, /assets/images/Roof-Rat-768x768_d7b39632.png 768w" width={1080} /></figure><div className="elementor-image-box-content"><p className="elementor-image-box-description">Roof Rat</p></div></div> </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-62655d0 e-con-full e-flex e-con e-child" data-element_type="container" data-id="62655d0" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-element elementor-element-2a2af50 elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="2a2af50" data-widget_type="image-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="mice-pest-control-melbourne.jpg" className="attachment-full size-full wp-image-1709" decoding="async" height={1080} sizes="(max-width: 1080px) 100vw, 1080px" src="/assets/images/Norway-Rat_a3c62413.png" srcSet="/assets/images/Norway-Rat_a3c62413.png 1080w, /assets/images/Norway-Rat-300x300_7322d9f2.png 300w, /assets/images/Norway-Rat-1024x1024_5ff657d8.png 1024w, /assets/images/Norway-Rat-150x150_f80453f6.png 150w, /assets/images/Norway-Rat-768x768_279ae6ce.png 768w" width={1080} /></figure><div className="elementor-image-box-content"><p className="elementor-image-box-description">Norway Rat</p></div></div> </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-b95cd3e e-con-full e-flex e-con e-child" data-element_type="container" data-id="b95cd3e" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-element elementor-element-643425e elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="643425e" data-widget_type="image-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="rodent-removal-services-melbourne.jpg" className="attachment-full size-full wp-image-1713" decoding="async" height={1080} loading="lazy" sizes="(max-width: 1080px) 100vw, 1080px" src="/assets/images/House-Mouse_f456551e.png" srcSet="/assets/images/House-Mouse_f456551e.png 1080w, /assets/images/House-Mouse-300x300_f1793a6e.png 300w, /assets/images/House-Mouse-1024x1024_4c32d8a2.png 1024w, /assets/images/House-Mouse-150x150_05fd2565.png 150w, /assets/images/House-Mouse-768x768_a05eb019.png 768w" width={1080} /></figure><div className="elementor-image-box-content"><p className="elementor-image-box-description">House Mouse</p></div></div> </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-44ada13 e-con-full e-flex e-con e-child" data-element_type="container" data-id="44ada13" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-element elementor-element-ef31f39 elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="ef31f39" data-widget_type="image-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="pest-control-melbourne-rats.jpg" className="attachment-full size-full wp-image-1714" decoding="async" height={1080} loading="lazy" sizes="(max-width: 1080px) 100vw, 1080px" src="/assets/images/Field-Mouse_a31e8933.png" srcSet="/assets/images/Field-Mouse_a31e8933.png 1080w, /assets/images/Field-Mouse-300x300_aa4da31b.png 300w, /assets/images/Field-Mouse-1024x1024_08a502fe.png 1024w, /assets/images/Field-Mouse-150x150_d771a703.png 150w, /assets/images/Field-Mouse-768x768_f4e5bdde.png 768w" width={1080} /></figure><div className="elementor-image-box-content"><p className="elementor-image-box-description">Field Mouse</p></div></div> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-2f23798 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="2f23798" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5f56c2c" data-element_type="column" data-id="5f56c2c" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-3c55949 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="3c55949" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">sign indication</h2> </div>
                </div>
                <div className="elementor-element elementor-element-4ebd325 elementor-widget elementor-widget-elementskit-heading" data-element_type="widget" data-id="4ebd325" data-widget_type="elementskit-heading.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con"><div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-"><h2 className="ekit-heading--title elementskit-section-title">Signs You Need Rodent Pest Control in Melbourne</h2></div></div> </div>
                </div>
                <div className="elementor-element elementor-element-24a7d2a elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="24a7d2a" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p><span style={{fontWeight: 400}}>Rodents don’t stay hidden for long. The sooner you spot the warning signs, the faster our </span><b>rodent control in Melbourne</b><span style={{fontWeight: 400}}> team can step in before the situation worsens. Watch out for these clear indicators of a rodent infestation:</span></p> </div>
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
                              <span className="elementor-icon-list-text">Droppings: Look for small, dark, and elongated droppings along walls, in basements, and near food sources. Fresh droppings are a strong sign of active mouse pest control Melbourne needs.</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Noises: Rats are nocturnal creatures. Scratching, squeaking, or scurrying sounds at night are a telltale sign it's time to call our rat control Melbourne specialists immediately.</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Gnaw Marks: Rodents have powerful teeth and leave behind gnaw marks on wood, plastic, and electrical wires — a serious fire hazard that demands urgent rodent pest control Melbourne attention.</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Unpleasant Odor: A musty or ammonia-like smell, especially from hidden corners or wall cavities, often signals an active nest. Don't ignore it — our mice control Melbourne experts can locate and eliminate the source fast.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-8134f3a elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="8134f3a" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p><span style={{fontWeight: 400}}>If you notice any of these signs, don’t wait. Call our </span><b>rodent pest control Melbourne</b><span style={{fontWeight: 400}}> experts at 7 States Pest Control right away. We also provide trusted</span><Link to="/wasp-removal-melbourne"> <b>wasp removal Melbourne</b></Link><span style={{fontWeight: 400}}> services for complete pest protection across your property. Our </span><b>affordable rodent control</b><span style={{fontWeight: 400}}> solutions stop infestations before they escalate — protecting your home, health, and peace of mind.</span></p> </div>
                </div>
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
                    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6a641d8" data-element_type="column" data-id="6a641d8">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-2772224 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="2772224" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Our Methodology</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-4a41640 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="4a41640" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Our Advanced Rodent Control Methodology in Melbourne
                            </h2> </div>
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
                    <h2 className="elementor-heading-title elementor-size-default"> Contact Melbourne’s Trusted Rodent Removal Experts Today
                    </h2> </div>
                </div>
                <div className="elementor-element elementor-element-a2624c7 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="a2624c7" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-element elementor-element-57329fa elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="57329fa" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><div className="elementor-element elementor-element-9407d80 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="9407d80" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p><span style={{fontWeight: 400}}>Don’t let a rodent problem escalate. Our </span><b>rodent removal services in Melbourne</b><span style={{fontWeight: 400}}> are available for urgent response. Our </span><b>pest control Melbourne rats</b><span style={{fontWeight: 400}}> team will be at your property fast — equipped, experienced, and ready. Whether you need a </span><b>rat exterminator Melbourne</b><span style={{fontWeight: 400}}> or a </span><b>mouse exterminator Melbourne</b><span style={{fontWeight: 400}}>, we handle it all. Contact 7 States Pest Control today for </span><b>cheap rodent control</b><span style={{fontWeight: 400}}> solutions that don’t compromise on quality.</span></p></div></div></div></div> </div>
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
                    <h2 className="elementor-heading-title elementor-size-default"> Comprehensive Survey &amp; Affordable Rodent Control Plans
                    </h2> </div>
                </div>
                <div className="elementor-element elementor-element-bc8e2a4 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="bc8e2a4" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-element elementor-element-57329fa elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="57329fa" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p><span style={{fontWeight: 400}}>We begin every service with a complete property survey. Whether it’s a commercial space or residential unit, we assess your rodent situation thoroughly and suggest a </span><b>cheap rodent control</b><span style={{fontWeight: 400}}> package that suits your needs. Our </span><b>rodent pest control Melbourne</b><span style={{fontWeight: 400}}> experts identify all active infestation zones and design a plan that delivers results. From </span><b>mice pest control Melbourne</b><span style={{fontWeight: 400}}> to full-scale </span><b>rat control Melbourne</b><span style={{fontWeight: 400}}>, our </span><b>affordable rodent control</b><span style={{fontWeight: 400}}> plans are built to fit every budget.</span></p></div></div> </div>
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
                    <h2 className="elementor-heading-title elementor-size-default">Treatment Solutions That Deliver Guaranteed Results
                    </h2> </div>
                </div>
                <div className="elementor-element elementor-element-138f9ac elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="138f9ac" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-element elementor-element-57329fa elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="57329fa" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><div className="elementor-element elementor-element-9407d80 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="9407d80" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><div className="elementor-element elementor-element-9407d80 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="9407d80" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><div><div className="standard-markdown grid-cols-1 grid [&_>_*]:min-w-0 gap-3"><p className="font-claude-response-body break-words whitespace-normal leading-[1.7]">Our treatment plans for <strong>rodent control in Melbourne</strong> include a mix of mechanical traps, advanced baits, and exclusion techniques. Everything is handled with minimal disruption and total safety for your family and pets. We also offer tailored plans for <strong>mice pest control Melbourne</strong> and <strong>mouse pest control Melbourne</strong>. Our <strong>mouse control Melbourne</strong> and <strong>mice control Melbourne</strong> solutions are designed to eliminate every trace of infestation — quickly, safely, and affordably.</p></div></div><div><div className="standard-markdown grid-cols-1 grid [&_>_*]:min-w-0 gap-3">&nbsp;</div></div></div></div></div></div></div></div> </div>
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
                    <h2 className="elementor-heading-title elementor-size-default">Ongoing Aftercare for Long-Term Rodent Pest Control in Melbourne
                    </h2> </div>
                </div>
                <div className="elementor-element elementor-element-1b7d436 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="1b7d436" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-element elementor-element-57329fa elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="57329fa" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p className="font-claude-response-body break-words whitespace-normal leading-[1.7]">Our services don’t end with extermination. With routine check-ups and expert advice, our <strong>rodent pest control Melbourne</strong> team ensures you remain rodent-free. From mice to rats, we cover every angle of prevention.</p><p className="font-claude-response-body break-words whitespace-normal leading-[1.7]">At 7 States Pest Control, our goal is to offer personalized, long-term <strong>rodent pest control Melbourne</strong> solutions that give you peace of mind. Contact us today to learn more about our <strong>rodent removal services in Melbourne</strong> and our trusted <strong>local rodent experts Melbourne</strong> who are always ready to help.</p></div></div> </div>
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
                            <h2 className="elementor-heading-title elementor-size-default">Why Rodent</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-bd8e94d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="bd8e94d" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Why Rodent Control in Melbourne is Crucial for Your Health and Safety</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-4a957b0 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="4a957b0" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p><span style={{fontWeight: 400}}>Rodents are not just annoying — they’re dangerous. Failing to act fast can lead to severe health consequences and property damage. Here’s why hiring professionals for </span><b>rodent control in Melbourne</b><span style={{fontWeight: 400}}> is essential:</span></p> </div>
                        </div>
                        <div className="elementor-element elementor-element-887b818 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="887b818">
                          <div className="e-con-inner">
                            <div className="elementor-element elementor-element-a58bd45 e-con-full e-flex e-con e-child" data-element_type="container" data-id="a58bd45">
                              <div className="elementor-element elementor-element-ef49918 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="ef49918" data-widget_type="icon-list.default">
                                <div className="elementor-widget-container">
                                  <ul className="elementor-icon-list-items">
                                    <li className="elementor-icon-list-item">
                                      <span className="elementor-icon-list-icon">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                      <span className="elementor-icon-list-text">Contamination: Rodent droppings in your kitchen or pantry can contaminate food, leading to illnesses like typhoid and salmonella.</span>
                                    </li>
                                    <li className="elementor-icon-list-item">
                                      <span className="elementor-icon-list-icon">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                      <span className="elementor-icon-list-text">Health Risks: Contact with rodent waste may cause diseases like leptospirosis and Hantavirus.</span>
                                    </li>
                                    <li className="elementor-icon-list-item">
                                      <span className="elementor-icon-list-icon">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                      <span className="elementor-icon-list-text">Bites &amp; Infections: Rodents, especially rats, can bite and cause infections or fever. Timely rat control Melbourne can prevent these risks entirely.</span>
                                    </li>
                                    <li className="elementor-icon-list-item">
                                      <span className="elementor-icon-list-icon">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                                      <span className="elementor-icon-list-text">Allergies: Rodents carry allergens that can cause breathing issues, particularly in children and elderly individuals with preexisting conditions.</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-5491949 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="5491949" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p className="font-claude-response-body break-words whitespace-normal leading-[1.7]">Don’t wait for the problem to worsen. Trust <Link className="underline underline underline-offset-2 decoration-1 decoration-current/40 hover:decoration-current focus:decoration-current" to="/">7 States Pest Control</Link> for reliable <strong>rodent pest control Melbourne</strong> solutions. We specialize in <strong>pest control Melbourne rats</strong>, <strong>mice pest control Melbourne</strong>, and <strong>mouse pest control Melbourne</strong>, using safe and effective methods. Our <strong>rodent removal Melbourne</strong> services eliminate threats from your home or business completely. Choose us for <strong>affordable rodent control</strong> and peace of mind.</p> </div>
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-aa369dc elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="aa369dc" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ede1a6f" data-element_type="column" data-id="ede1a6f" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-bfc1b9f elementor-widget elementor-widget-heading" data-element_type="widget" data-id="bfc1b9f" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">importance of hiring professional</h2> </div>
                </div>
                <div className="elementor-element elementor-element-4209442 elementor-widget elementor-widget-elementskit-heading" data-element_type="widget" data-id="4209442" data-widget_type="elementskit-heading.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con"><div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-"><h2 className="ekit-heading--title elementskit-section-title">Importance of Hiring Professional Rodent Pest Control in Melbourne</h2></div></div> </div>
                </div>
                <div className="elementor-element elementor-element-3e01318 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="3e01318" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>Rodent infestations can spiral out of control quickly. While DIY methods might offer short-term results, only trained experts in <strong>rodent control in Melbourne</strong> can provide a complete solution.</p> </div>
                </div>
                <div className="elementor-element elementor-element-441029b e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="441029b">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-d6fb2cd e-con-full e-flex e-con e-child" data-element_type="container" data-id="d6fb2cd">
                      <div className="elementor-element elementor-element-dece049 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="dece049" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Effective Detection &amp; Elimination: Rodents often hide in walls, ceilings, and hard-to-reach spots. Our rodent pest control Melbourne team uses advanced tools to detect and remove them efficiently — including our skilled rat exterminator Melbourne and mouse exterminator Melbourne specialists.</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Long-Term Prevention: Unlike DIY treatments, our rodent removal services in Melbourne include sealing entry points, regular follow-ups, and proactive strategies to stop reinfestation.</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Expertise Matters: Whether it's pest control Melbourne rats or mice pest control Melbourne, our team has the experience to choose the right methods — traps, baits, exclusion, or eco-friendly treatments.</span>
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-651603c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="651603c" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fb8c2b7" data-element_type="column" data-id="fb8c2b7" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-4b9ae7a elementor-widget elementor-widget-heading" data-element_type="widget" data-id="4b9ae7a" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Why Choose</h2> </div>
                </div>
                <div className="elementor-element elementor-element-d1e912c elementor-widget elementor-widget-elementskit-heading" data-element_type="widget" data-id="d1e912c" data-widget_type="elementskit-heading.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con"><div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-"><h2 className="ekit-heading--title elementskit-section-title">Why Choose 7 States Pest Control for Rodent Pest Control in Melbourne ?</h2></div></div> </div>
                </div>
                <div className="elementor-element elementor-element-3dd5454 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="3dd5454" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p><span style={{fontWeight: 400}}>If you’re searching for top-rated </span><b>rodent pest control Melbourne</b><span style={{fontWeight: 400}}> services, look no further than 7 States Pest Control. Here’s why homeowners and businesses across Melbourne trust our </span><b>local rodent experts Melbourne</b><span style={{fontWeight: 400}}>:</span></p> </div>
                </div>
                <div className="elementor-element elementor-element-d6a050c e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="d6a050c">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-5f7046f e-con-full e-flex e-con e-child" data-element_type="container" data-id="5f7046f">
                      <div className="elementor-element elementor-element-30fe7d7 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="30fe7d7" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Experienced Technicians: Our team is highly trained in pest control Melbourne rats, mouse pest control Melbourne, and mice pest control Melbourne, tackling all rodent species with precision. From rat control Melbourne to mice control Melbourne, we handle it all.</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Eco-Friendly Treatments: We care about your safety. Our mouse control Melbourne solutions are non-toxic and ideal for homes with kids and pets.</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Custom Rodent Removal Plans: Every infestation is different. We offer tailored rodent control in Melbourne ensuring long-lasting protection. Our cheap rodent control packages are designed to suit every budget without cutting corners.</span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                              <span className="elementor-icon-list-text">Fast Response, Guaranteed Results: We understand urgency. Our affordable rodent control team acts fast and guarantees complete rodent removal Melbourne extermination with zero compromise on quality. Wondering about rat removal Melbourne cost? We offer transparent, budget-friendly pricing with no hidden charges.</span>
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
        <div className="elementor-element elementor-element-69cc798 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="69cc798">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-eb65afa e-con-full e-flex e-con e-child" data-element_type="container" data-id="eb65afa">
              <div className="elementor-element elementor-element-f7a1b85 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="f7a1b85" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <h3 className="elementor-heading-title elementor-size-default">Our blog covers a wide range of topics, including:</h3> </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-d7c9de4 e-con-full e-flex e-con e-child" data-element_type="container" data-id="d7c9de4">
              <div className="elementor-element elementor-element-d388ce9 e-con-full e-flex e-con e-child" data-element_type="container" data-id="d388ce9">
                <div className="elementor-element elementor-element-6137e1e elementor-widget elementor-widget-image" data-element_type="widget" data-id="6137e1e" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img alt="rodent control in melbourne" className="attachment-large size-large wp-image-1689" decoding="async" height={315} loading="lazy" sizes="(max-width: 600px) 100vw, 600px" src="/assets/images/How-to-get-rid-of-rats-in-roof-Australia-03-600x315-1_aba74dae.jpg" srcSet="/assets/images/How-to-get-rid-of-rats-in-roof-Australia-03-600x315-1_aba74dae.jpg 600w, /assets/images/How-to-get-rid-of-rats-in-roof-Australia-03-600x315-1-3_6764b63f.jpg 300w" width={600} /> </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-6371a8c e-con-full e-flex e-con e-child" data-element_type="container" data-id="6371a8c">
                <div className="elementor-element elementor-element-3c83a92 elementor-widget elementor-widget-image" data-element_type="widget" data-id="3c83a92" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img alt="mice pest control melbourne" className="attachment-large size-large wp-image-1690" decoding="async" height={350} loading="lazy" sizes="(max-width: 600px) 100vw, 600px" src="/assets/images/WhatsApp-Image-2024-06-08-at-10.27.48_233bbd88-600x350-_ea63c2be.jpg" srcSet="/assets/images/WhatsApp-Image-2024-06-08-at-10.27.48_233bbd88-600x350-_ea63c2be.jpg 600w, /assets/images/WhatsApp-Image-2024-06-08-at-10.27.48_233bbd88-600x350-_500bff1a.jpg 300w" width={600} /> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-48349cb e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="48349cb">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-37ff614 elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-card-shadow-yes elementor-posts__hover-gradient elementor-widget elementor-widget-posts" data-element_type="widget" data-id="37ff614" data-settings="{&quot;cards_columns&quot;:&quot;3&quot;,&quot;cards_columns_tablet&quot;:&quot;2&quot;,&quot;cards_columns_mobile&quot;:&quot;1&quot;,&quot;cards_row_gap&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:35,&quot;sizes&quot;:[]},&quot;cards_row_gap_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;cards_row_gap_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="posts.cards">
              <div className="elementor-widget-container">
                <div className="elementor-posts-container elementor-posts elementor-posts--skin-cards elementor-grid elementor-has-item-ratio" role="list">
                  <article className="elementor-post elementor-grid-item post-10595 post type-post status-publish format-standard has-post-thumbnail hentry category-rodent-pest-control" role="listitem">
                    <div className="elementor-post__card">
                      <Link className="elementor-post__thumbnail__link" to="/can-one-rat-inside-the-house-become-a-bigger-infestation-heres-the-truth/" tabIndex={-1}><div className="elementor-post__thumbnail elementor-fit-height"><img alt className="attachment-medium size-medium wp-image-10597" decoding="async" height={158} loading="lazy" sizes="(max-width: 300px) 100vw, 300px" src="/assets/images/7-states-8-300x158_5dc0e9a7.png" srcSet="/assets/images/7-states-8-300x158_5dc0e9a7.png 300w, /assets/images/7-states-8-1024x538_9ad1a668.png 1024w, /assets/images/7-states-8-768x403_a8fe4c94.png 768w, /assets/images/7-states-8_8212e762.png 1200w" width={300} /></div></Link>
                      <div className="elementor-post__badge">Rodent Pest Control</div>
                      <div className="elementor-post__text">
                        <h3 className="elementor-post__title">
                          <Link to="/can-one-rat-inside-the-house-become-a-bigger-infestation-heres-the-truth/">
                            Can One Rat Inside the House Become a Bigger Infestation? Here’s the Truth			</Link>
                        </h3>
                        <div className="elementor-post__excerpt">
                          <p>Finding a rat in your home is enough to make anyone’s heart skip a beat. You might see a dark shape scurrying across the</p>
                        </div>
                        <Link aria-label="Read more about Can One Rat Inside the House Become a Bigger Infestation? Here’s the Truth" className="elementor-post__read-more" to="/can-one-rat-inside-the-house-become-a-bigger-infestation-heres-the-truth/" tabIndex={-1}>
                          Read More »		</Link>
                      </div>
                    </div>
                  </article>
                  <article className="elementor-post elementor-grid-item post-10459 post type-post status-publish format-standard has-post-thumbnail hentry category-rodent-pest-control" role="listitem">
                    <div className="elementor-post__card">
                      <Link className="elementor-post__thumbnail__link" to="/what-attracts-rats-to-melbourne-suburbs-and-how-7-states-pest-control-keeps-them-out/" tabIndex={-1}><div className="elementor-post__thumbnail elementor-fit-height"><img alt="rodent pest control melbourne" className="attachment-medium size-medium wp-image-10465" decoding="async" height={158} loading="lazy" sizes="(max-width: 300px) 100vw, 300px" src="/assets/images/7-states-3-300x158_587d3739.png" srcSet="/assets/images/7-states-3-300x158_587d3739.png 300w, /assets/images/7-states-3-1024x538_aabf1c20.png 1024w, /assets/images/7-states-3-768x403_b7570abb.png 768w, /assets/images/7-states-3_853a476e.png 1200w" width={300} /></div></Link>
                      <div className="elementor-post__badge">Rodent Pest Control</div>
                      <div className="elementor-post__text">
                        <h3 className="elementor-post__title">
                          <Link to="/what-attracts-rats-to-melbourne-suburbs-and-how-7-states-pest-control-keeps-them-out/">
                            What Attracts Rats to Melbourne Suburbs? And How 7 States Pest Control Keeps Them Out			</Link>
                        </h3>
                        <div className="elementor-post__excerpt">
                          <p>Have you ever been lying in bed, just about to fall asleep, and suddenly you hear it? A soft, fast scratching sound coming from</p>
                        </div>
                        <Link aria-label="Read more about What Attracts Rats to Melbourne Suburbs? And How 7 States Pest Control Keeps Them Out" className="elementor-post__read-more" to="/what-attracts-rats-to-melbourne-suburbs-and-how-7-states-pest-control-keeps-them-out/" tabIndex={-1}>
                          Read More »		</Link>
                      </div>
                    </div>
                  </article>
                  <article className="elementor-post elementor-grid-item post-10451 post type-post status-publish format-standard has-post-thumbnail hentry category-blog category-rodent-pest-control" role="listitem">
                    <div className="elementor-post__card">
                      <Link className="elementor-post__thumbnail__link" to="/why-your-diy-traps-arent-working-the-reality-of-rodent-control-in-melbourne/" tabIndex={-1}><div className="elementor-post__thumbnail elementor-fit-height"><img alt="mice pest control melbourne" className="attachment-medium size-medium wp-image-10454" decoding="async" height={158} loading="lazy" sizes="(max-width: 300px) 100vw, 300px" src="/assets/images/WhatsApp-Image-2026-04-20-at-4.55.14-PM-300x158_93b6df22.jpeg" srcSet="/assets/images/WhatsApp-Image-2026-04-20-at-4.55.14-PM-300x158_93b6df22.jpeg 300w, /assets/images/WhatsApp-Image-2026-04-20-at-4.55.14-PM-1024x538_47f53739.jpeg 1024w, /assets/images/WhatsApp-Image-2026-04-20-at-4.55.14-PM-768x403_c37dc2a4.jpeg 768w, /assets/images/WhatsApp-Image-2026-04-20-at-4.55.14-PM_3acb9f95.jpeg 1200w" width={300} /></div></Link>
                      <div className="elementor-post__badge">Blog</div>
                      <div className="elementor-post__text">
                        <h3 className="elementor-post__title">
                          <Link to="/why-your-diy-traps-arent-working-the-reality-of-rodent-control-in-melbourne/">
                            Why Your DIY Traps Aren’t Working: The Reality of Rodent Control in Melbourne			</Link>
                        </h3>
                        <div className="elementor-post__excerpt">
                          <p>Living in Melbourne is great—until you hear that tell-tale scratching in the walls at 2:00 AM. Whether you’re in a leafy suburb like Camberwell</p>
                        </div>
                        <Link aria-label="Read more about Why Your DIY Traps Aren’t Working: The Reality of Rodent Control in Melbourne" className="elementor-post__read-more" to="/why-your-diy-traps-arent-working-the-reality-of-rodent-control-in-melbourne/" tabIndex={-1}>
                          Read More »		</Link>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-44ccb55 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="44ccb55">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-47b1463" data-element_type="column" data-id="47b1463">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-e2b497c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="e2b497c">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1aa2f77" data-element_type="column" data-id="1aa2f77">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-62e33f3 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="62e33f3" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Clients Reviews</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-3020d89 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="3020d89" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.eyebrow, '7 States Pest Control for Reliable Pest Management Solutions')}</h2> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-141fa88" data-element_type="column" data-id="141fa88" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-05209c4 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="05209c4" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.subtitle, 'Reviews of Our Pest Control Services')}</h3> </div>
                        </div>
                        <div className="elementor-element elementor-element-f0749cb elementor-widget elementor-widget-heading" data-element_type="widget" data-id="f0749cb" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.title, 'EXCELLENT')}</h6> </div>
                        </div>
                        <div className="elementor-element elementor-element-74e9e46 elementor-widget elementor-widget-rating" data-element_type="widget" data-id="74e9e46" data-widget_type="rating.default">
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
                        <div className="elementor-element elementor-element-b726e66 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="b726e66" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>Based on&nbsp;45 reviews</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-131347a elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="131347a" data-widget_type="divider.default">
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
                <div className="elementor-element elementor-element-6a21959 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="6a21959">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-a4b131b elementor-widget elementor-widget-shortcode" data-element_type="widget" data-id="a4b131b" data-widget_type="shortcode.default">
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-dbe84ac elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="dbe84ac">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-d36e2bb" data-element_type="column" data-id="d36e2bb">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-32945a7 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="32945a7" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Frequently Asked Questions</h2> </div>
                </div>
                <div className="elementor-element elementor-element-5146096 elementor-widget elementor-widget-elementskit-accordion" data-element_type="widget" data-id="5146096" data-widget_type="elementskit-accordion.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con">
                      <div className="elementskit-accordion accoedion-primary" id="accordion-6a1692ff084bb">
                        <div className="elementskit-card active">
                          <div className="elementskit-card-header" id="primaryHeading-0-5146096">
                            <a aria-controls="Collapse-6f491396a1692ff084bb" aria-expanded="true" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-6f491396a1692ff084bb" href="#collapse-6f491396a1692ff084bb">
                              <span className="ekit-accordion-title">1. What is the cost of rodent control in Melbourne?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-0-5146096" className="show collapse" data-parent="#accordion-6a1692ff084bb" id="Collapse-6f491396a1692ff084bb">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p><span style={{fontWeight: 400}}>Rodent control in Melbourne usually costs between $150 to $400 depending on the infestation level and property size. At </span><b>7 States Pest Control</b><span style={{fontWeight: 400}}>, we offer affordable and effective rodent removal solutions.</span></p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-1-5146096">
                            <a aria-controls="Collapse-042b3786a1692ff084bb" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-042b3786a1692ff084bb" href="#collapse-042b3786a1692ff084bb">
                              <span className="ekit-accordion-title">2. Why choose 7 States Pest Control for rodent control in Melbourne?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-1-5146096" className="collapse" data-parent="#accordion-6a1692ff084bb" id="Collapse-042b3786a1692ff084bb">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p><b>7 States Pest Control</b><span style={{fontWeight: 400}}> provides experienced technicians, safe treatments, and reliable rodent removal services with long-term results across Melbourne.</span></p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-2-5146096">
                            <a aria-controls="Collapse-fcc8da46a1692ff084bb" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-fcc8da46a1692ff084bb" href="#collapse-fcc8da46a1692ff084bb">
                              <span className="ekit-accordion-title">3. How long does rodent removal take with 7 States Pest Control?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-2-5146096" className="collapse" data-parent="#accordion-6a1692ff084bb" id="Collapse-fcc8da46a1692ff084bb">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p><span style={{fontWeight: 400}}>Most treatments are completed within a few hours, but complete rodent elimination may take a few days depending on the severity of the infestation.</span></p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-3-5146096">
                            <a aria-controls="Collapse-247bb1b6a1692ff084bb" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-247bb1b6a1692ff084bb" href="#collapse-247bb1b6a1692ff084bb">
                              <span className="ekit-accordion-title">4. What are the signs you need rodent control services?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-3-5146096" className="collapse" data-parent="#accordion-6a1692ff084bb" id="Collapse-247bb1b6a1692ff084bb">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p><span style={{fontWeight: 400}}>Signs include droppings, scratching noises, chewed wires, food damage, and foul smells. If you notice these, contact </span><b>7 States Pest Control</b><span style={{fontWeight: 400}}> immediately.</span></p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-4-5146096">
                            <a aria-controls="Collapse-43386d36a1692ff084bb" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-43386d36a1692ff084bb" href="#collapse-43386d36a1692ff084bb">
                              <span className="ekit-accordion-title">5. Is rodent control by 7 States Pest Control safe for families and pets?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-4-5146096" className="collapse" data-parent="#accordion-6a1692ff084bb" id="Collapse-43386d36a1692ff084bb">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p><span style={{fontWeight: 400}}>Yes, </span><b>7 States Pest Control</b><span style={{fontWeight: 400}}> uses safe and approved pest control methods to ensure the safety of your family and pets.</span></p> </div>
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
                            <img alt="7 States Pest Control" className="attachment-full size-full wp-image-778" decoding="async" height={1280} loading="lazy" sizes="(max-width: 1280px) 100vw, 1280px" src="/assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1_ecbbd918.jpg" srcSet="/assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1_ecbbd918.jpg 1280w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-300x30_e03d7ebf.jpg 300w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-1024x1_359a34a8.jpg 1024w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-150x15_3201d1bd.jpg 150w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-768x76_a05df40f.jpg 768w" width={1280} /> </div>
                        </div>
                        <div className="elementor-element elementor-element-f30d45c elementor-widget__width-initial elementor-absolute ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="f30d45c" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
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
