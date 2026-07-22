import AntBlogPosts from '../../components/ant/AntBlogPosts.jsx'
import ServiceCmsContentBlocks from '../../components/service/ServiceCmsContentBlocks.jsx'
import AntFaqSection from '../../components/ant/AntFaqSection.jsx'
import AntFeatureCards from '../../components/ant/AntFeatureCards.jsx'
import AntPestControlCmsStyles from '../../components/ant/AntPestControlCmsStyles.jsx'
import AntPreventionTips from '../../components/ant/AntPreventionTips.jsx'
import AntProblemCards from '../../components/ant/AntProblemCards.jsx'
import AntSpeciesCards from '../../components/ant/AntSpeciesCards.jsx'
import CmsHtml from '../../components/home/CmsHtml.jsx'
import PhoneNumberInput from '../../components/PhoneNumberInput.jsx'
import usePageCms from '../../hooks/usePageCms.js'
import usePageMeta from '../../hooks/usePageMeta.js'
import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'
import { Link } from 'react-router-dom'

export default function OurServicesAntPestControlPage() {
  const { page, content: c } = usePageCms('our-services-ant-pest-control')
  usePageMeta('our_services_ant_pest_control', page)

  return (
    <>
      <AntPestControlCmsStyles content={c} />
      <ServiceCmsContentBlocks content={c} />
      <div className="elementor elementor-766" data-elementor-id={766} data-elementor-post-type="page" data-elementor-type="wp-page">
        <div className="elementor-element elementor-element-a342089 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="a342089" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-65fcf03 e-con-full e-flex e-con e-child" data-element_type="container" data-id="65fcf03">
              <div className="elementor-element elementor-element-fd02c33 elementor-icon-list--layout-inline elementor-align-left elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list animated fadeInDown" data-element_type="widget" data-id="fd02c33" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;,&quot;_animation_delay&quot;:720}" data-widget_type="icon-list.default">
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
                        <span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb_current, 'ant pest contral')}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="elementor-element elementor-element-5b29971 elementor-widget elementor-widget-heading animated fadeInDown" data-element_type="widget" data-id="5b29971" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'ant Control ')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-f59a88c elementor-widget elementor-widget-heading animated fadeInLeft" data-element_type="widget" data-id="f59a88c" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.heading, 'Get Professional Ant Control from us')}</h1> </div>
              </div>
              <div className="elementor-element elementor-element-424a488 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="424a488" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <CmsHtml html={c?.hero?.intro ?? '<p>Ants may be tiny, but they can cause bigger problems. They are incredibly capable and smart creatures. Though harmless, they can be a nuisance when they get into your home or commercial premises. The complex and cooperative societies of ants allow them to survive in conditions that are challenging. If your installation has severe ant infestation and you want professional and expert</p><p>At <Link to="/"><strong>7 States Pest Control</strong>,</Link> we can control ants and eliminate them from your property. With advanced pest control techniques, we have carved a niche for our company. Through our dedicated, customer-centric and customized services, we have assisted an array of homeowners and business owners in safeguarding their health and wellbeing.</p>'} /> </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-672f357 e-con-full e-flex e-con e-child" data-element_type="container" data-id="672f357" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-ed9cb71 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="ed9cb71" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.title, 'Get A Free Quote Now!')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-fb9a1f0 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="fb9a1f0" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.subtitle, 'Have an enquiry? Leave us your details and we’ll call you back during business hours.')}</h6> </div>
              </div>
              <div className="elementor-element elementor-element-cad66c8 elementor-button-align-center elementor-widget elementor-widget-form" data-element_type="widget" data-id="cad66c8" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                <div className="elementor-widget-container">
                  <form aria-label="New Form" className="elementor-form" id="home_contact_form" method="post" name="New Form">
                    <input name="post_id" type="hidden" defaultValue={766} />
                    <input name="form_id" type="hidden" defaultValue="cad66c8" />
                    <input name="referer_title" type="hidden" defaultValue="Ant Pest Control Treatment in Melbourne - 7 States Pest Control" />
                    <input name="queried_id" type="hidden" defaultValue={766} />
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
        <div className="elementor-element elementor-element-6dc7fcc e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="6dc7fcc" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-548af80 e-con-full e-flex e-con e-child" data-element_type="container" data-id="548af80">
              <div className="elementor-element elementor-element-f3d971c e-con-full e-flex e-con e-child" data-element_type="container" data-id="f3d971c">
                <div className="elementor-element elementor-element-78bc2db e-con-full e-flex e-con e-child" data-element_type="container" data-id="78bc2db">
                  <div className="elementor-element elementor-element-6501e7d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="6501e7d" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.species?.eyebrow, 'ant special')}</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-578d989 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="578d989" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.species?.title, 'Types of Ant Species We Control')}</h2> </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-c0c2f1e e-con-full e-flex e-con e-child" data-element_type="container" data-id="c0c2f1e">
                  <div className="elementor-element elementor-element-f6bb8ec elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="f6bb8ec" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <CmsHtml html={c?.species?.intro ?? '<p>Ant infestations can be a serious nuisance, causing damage to property and contaminating food sources. Our professional ant control services effectively target various species, ensuring a pest-free environment. Here are the common types of ants we control:</p>'} /> </div>
                  </div>
                  <div className="elementor-element elementor-element-e9cbe7b elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="e9cbe7b" data-widget_type="divider.default">
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
            <AntSpeciesCards items={c?.species?.items} />
          </div>
        </div>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-2956c52 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="2956c52">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f5e4d41" data-element_type="column" data-id="f5e4d41" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-background-overlay" />
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-1cc40f8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="1cc40f8">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-231dc39" data-element_type="column" data-id="231dc39">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-cee4cbe elementor-widget elementor-widget-heading" data-element_type="widget" data-id="cee4cbe" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.why_inside?.eyebrow, 'why ants coming')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-6d22bd0 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="6d22bd0" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.why_inside?.title, 'Why Are Ants Coming Inside?')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-59fd6df custom-list elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="59fd6df" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <CmsHtml html={c?.why_inside?.list ?? c?.why_inside?.list_html ?? '<ol><li aria-level="1"><b>Food Sources</b>&nbsp;– Crumbs, spills, and uncovered food attract ants. They are particularly drawn to sugary and greasy substances.</li><li aria-level="1"><b>Water Availability</b>&nbsp;– Leaky pipes, pet water bowls, and damp areas provide the moisture ants need to survive.</li><li aria-level="1"><b>Weather Changes</b>&nbsp;– Heavy rain, drought, or extreme temperatures can drive ants indoors for a more stable environment.</li><li aria-level="1"><b>Scent Trails</b>&nbsp;– Ants leave pheromone trails to guide others to food sources, leading to an increasing infestation.</li><li aria-level="1"><b>Cracks and Gaps</b>&nbsp;– Small openings in doors, windows, and walls allow ants easy access to your home.</li></ol>'} /> </div>
                        </div>
                        <div className="elementor-element elementor-element-2e1c8d0 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="2e1c8d0" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <CmsHtml html={c?.why_inside?.footer ?? 'To prevent ants, keep your home clean, store food properly, fix leaks, and seal entry points. If the infestation persists, professional pest control services can help eliminate the problem effectively.'} /> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-60d1b76" data-element_type="column" data-id="60d1b76" data-settings="{&quot;animation&quot;:&quot;none&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-406e473 elementor-widget elementor-widget-image" data-element_type="widget" data-id="406e473" data-widget_type="image.default">
                          <div className="elementor-widget-container">
                            <img alt={cmsText(c?.why_inside?.image_alt, 'Ant control')} className="attachment-large size-large wp-image-9903" decoding="async" height={421} loading="lazy" sizes="(max-width: 800px) 100vw, 800px" src={cmsMediaUrl(c?.why_inside?.image, '/assets/images/Kiwicare_ProblemPageHero_DarwinAnts-1024x539_8cb1b8b5.jpg')} width={800} /> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <div className="elementor-element elementor-element-235b366 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="235b366" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-e9ef9af e-flex e-con-boxed e-con e-child" data-element_type="container" data-id="e9ef9af">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-101ca7a e-con-full e-flex e-con e-child" data-element_type="container" data-id="101ca7a">
                  <div className="elementor-element elementor-element-a4b15cb e-con-full e-flex e-con e-child" data-element_type="container" data-id="a4b15cb">
                    <div className="elementor-element elementor-element-c204f1d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="c204f1d" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.problems?.eyebrow, 'problems')}</h2> </div>
                    </div>
                    <div className="elementor-element elementor-element-5de8f7d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="5de8f7d" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.problems?.title, 'What Problems Can Ants Cause?')}</h2> </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-e8edb2b e-con-full e-flex e-con e-child" data-element_type="container" data-id="e8edb2b">
                    <div className="elementor-element elementor-element-ea758e9 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="ea758e9" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <CmsHtml html={c?.problems?.intro ?? '<p>Ants may seem harmless, but an infestation can lead to several problems in homes and businesses. Here are some common issues caused by ants:</p>'} /> </div>
                    </div>
                    <div className="elementor-element elementor-element-1601a40 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="1601a40" data-widget_type="divider.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-divider">
                          <span className="elementor-divider-separator">
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-2f4d739 e-con-full elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-element_type="container" data-id="2f4d739">
                  <div className="elementor-element elementor-element-f28a7c6 e-con-full e-flex e-con e-child" data-element_type="container" data-id="f28a7c6">
                    <div className="elementor-element elementor-element-038b414 ekit-equal-height-enable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="038b414" data-widget_type="elementskit-icon-box.default">
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
                            <div className="box-body">
                              <p><br /><br /><br />Ants invade kitchens and pantries, contaminating food by carrying bacteria from unsanitary places. This can pose health risks and lead to food wastage.</p>
                              <div className="box-footer disable_hover_button">
                                <div className="btn-wraper">
                                  <a className="elementskit-btn whitespace--normal elementor-animation-bounce-in" href="#">
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="ekit-icon-box-badge ekit_position_custom">
                              <span className="ekit-badge"> 1. Food Contamination</span>
                            </div>
                          </div>
                        </div> </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-8d7d400 e-con-full e-flex e-con e-child" data-element_type="container" data-id="8d7d400">
                    <div className="elementor-element elementor-element-183a18e ekit-equal-height-enable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="183a18e" data-widget_type="elementskit-icon-box.default">
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
                            <div className="box-body">
                              <p><br /><br /><br />Certain ant species, like carpenter ants, burrow into wood to create nests, weakening furniture, wooden structures, and even building foundations over time.</p>
                              <div className="box-footer disable_hover_button">
                                <div className="btn-wraper">
                                  <a className="elementskit-btn whitespace--normal elementor-animation-bounce-in" href="#">
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="ekit-icon-box-badge ekit_position_custom">
                              <span className="ekit-badge">2. Structural Damage</span>
                            </div>
                          </div>
                        </div> </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-93d7870 e-con-full e-flex e-con e-child" data-element_type="container" data-id="93d7870">
                    <div className="elementor-element elementor-element-9f176a0 ekit-equal-height-enable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="9f176a0" data-widget_type="elementskit-icon-box.default">
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
                            <div className="box-body">
                              <p><br /><br /><br />Some ants, such as fire ants, deliver painful bites and stings that can cause allergic reactions, itching, and discomfort, especially for children and pets.</p>
                              <div className="box-footer disable_hover_button">
                                <div className="btn-wraper">
                                  <a className="elementskit-btn whitespace--normal elementor-animation-bounce-in" href="#">
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="ekit-icon-box-badge ekit_position_custom">
                              <span className="ekit-badge"> 3. Painful Bites and Stings</span>
                            </div>
                          </div>
                        </div> </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-b6fe9d0 e-con-full elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-element_type="container" data-id="b6fe9d0">
                  <div className="elementor-element elementor-element-b46a195 e-con-full e-flex e-con e-child" data-element_type="container" data-id="b46a195">
                    <div className="elementor-element elementor-element-ee2eedd ekit-equal-height-enable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="ee2eedd" data-widget_type="elementskit-icon-box.default">
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
                            <div className="box-body">
                              <p><br /><br /><br />Ants are attracted to electrical wiring and appliances, leading to short circuits, equipment failure, and potential fire hazards when they chew on wires.</p>
                              <div className="box-footer disable_hover_button">
                                <div className="btn-wraper">
                                  <a className="elementskit-btn whitespace--normal elementor-animation-bounce-in" href="#">
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="ekit-icon-box-badge ekit_position_custom">
                              <span className="ekit-badge">4. Electrical Damage</span>
                            </div>
                          </div>
                        </div> </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-a8f5a1e e-con-full e-flex e-con e-child" data-element_type="container" data-id="a8f5a1e">
                    <div className="elementor-element elementor-element-d90b953 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="d90b953" data-widget_type="elementskit-icon-box.default">
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
                            <div className="box-body">
                              <p><br /><br /><br />Ant colonies grow quickly, and once they establish a nest, they can spread to different parts of your property, making eradication difficult without professional pest control.</p>
                              <div className="box-footer disable_hover_button">
                                <div className="btn-wraper">
                                  <a className="elementskit-btn whitespace--normal elementor-animation-bounce-in" href="#">
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="ekit-icon-box-badge ekit_position_custom">
                              <span className="ekit-badge"> 5. Rapid Infestation Growth</span>
                            </div>
                          </div>
                        </div> </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-4299786 e-con-full e-flex e-con e-child" data-element_type="container" data-id="4299786">
                    <div className="elementor-element elementor-element-5628a19 ekit-equal-height-enable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="5628a19" data-widget_type="elementskit-icon-box.default">
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
                            <div className="box-body">
                              <p><br /><br /><br />For businesses, especially in the food industry, an ant infestation can damage reputation, lead to health code violations, and even cause financial losses..</p>
                              <div className="box-footer disable_hover_button">
                                <div className="btn-wraper">
                                  <a className="elementskit-btn whitespace--normal elementor-animation-bounce-in" href="#">
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="ekit-icon-box-badge ekit_position_custom">
                              <span className="ekit-badge">6. Business Disruptions</span>
                            </div>
                          </div>
                        </div> </div>
                    </div>
                  </div>
                </div>
                <AntProblemCards items={c?.problems?.items} />
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-12c387c e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="12c387c" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <AntPreventionTips tips={c?.prevention?.tips} />
            <div className="elementor-element elementor-element-815a5c7 e-con-full e-flex e-con e-child" data-element_type="container" data-id="815a5c7">
              <div className="elementor-element elementor-element-532a940 e-con-full e-flex e-con e-child" data-element_type="container" data-id="532a940">
                <div className="elementor-element elementor-element-c783a42 e-con-full e-flex e-con e-child" data-element_type="container" data-id="c783a42">
                  <div className="elementor-element elementor-element-326f094 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="326f094" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.prevention?.eyebrow, 'protects')}</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-010327e elementor-widget elementor-widget-heading" data-element_type="widget" data-id="010327e" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.prevention?.title, 'How to Prevent Ants?')}</h2> </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-3b60541 e-con-full e-flex e-con e-child" data-element_type="container" data-id="3b60541">
                  <div className="elementor-element elementor-element-7696069 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="7696069" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <CmsHtml html={c?.prevention?.intro ?? '<p>Ants can be a persistent nuisance in homes and businesses, especially when they find food sources and establish trails. Preventing an ant infestation requires proactive measures. Here are some effective ways to keep ants away:</p>'} /> </div>
                  </div>
                  <div className="elementor-element elementor-element-50c3243 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="50c3243" data-widget_type="divider.default">
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
          </div>
        </div>
        <AntFeatureCards items={c?.features?.items} />
        <AntFaqSection faq={c?.faq} />
        <section className="elementor-section elementor-top-section elementor-element elementor-element-c698fd4 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="c698fd4">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a008e9d" data-element_type="column" data-id="a008e9d">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-5e72faa elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="5e72faa">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-cbdd235" data-element_type="column" data-id="cbdd235">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-110e690 elementor-widget elementor-widget-heading animated fadeInDown" data-element_type="widget" data-id="110e690" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.eyebrow, 'Clients Reviews')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-e19f5a7 elementor-widget elementor-widget-heading animated fadeInLeft" data-element_type="widget" data-id="e19f5a7" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.title, '7 States Pest Control for Reliable Pest Management Solutions')}</h2> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-9d6fe4d animated fadeInUp" data-element_type="column" data-id="9d6fe4d" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-b16caa1 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="b16caa1" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.subtitle, 'Reviews of Our Pest Control Services')}</h3> </div>
                        </div>
                        <div className="elementor-element elementor-element-bc4ba90 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="bc4ba90" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <h6>{cmsText(c?.reviews?.rating_label, 'EXCELLENT')}</h6> </div>
                        </div>
                        <div className="elementor-element elementor-element-61676c9 elementor-widget elementor-widget-rating" data-element_type="widget" data-id="61676c9" data-widget_type="rating.default">
                          <div className="elementor-widget-container">
                            <div className="e-rating" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                              <meta content={0} itemProp="worstRating" />
                              <meta content={5} itemProp="bestRating" />
                              <div aria-label="Rated 5 out of 5" className="e-rating-wrapper" content={5} itemProp="ratingValue" role="img">
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" /></svg> </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" /></svg> </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" /></svg> </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" /></svg> </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" /></svg> </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" /></svg> </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" /></svg> </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" /></svg> </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" /></svg> </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" /></svg> </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-5c76140 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="5c76140" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <CmsHtml html={c?.reviews?.count_text ?? '<p class="elementor-heading-title elementor-size-default">Based on&nbsp;<strong>45 reviews</strong></p>'} /> </div>
                        </div>
                        <div className="elementor-element elementor-element-e8350a7 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="e8350a7" data-widget_type="divider.default">
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
        <div className="elementor-element elementor-element-ec3919d e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="ec3919d">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-9f88f9a elementor-widget elementor-widget-shortcode" data-element_type="widget" data-id="9f88f9a" data-widget_type="shortcode.default">
              <div className="elementor-widget-container">
                <div className="elementor-shortcode"><div data-css-url="https://7statespestcontrol.com.au/wp-content/uploads/trustindex-google-widget.css?1751194100" data-src="https://cdn.trustindex.io/loader.js?wp-widget" data-ti-widget-inited="true" /></div>
              </div>
            </div>
          </div>
        </div>
        <AntBlogPosts eyebrow={c?.blog?.eyebrow} posts={c?.blog?.posts} title={c?.blog?.title} />
        <section className="elementor-section elementor-top-section elementor-element elementor-element-f732271 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="f732271" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3cf4ce9" data-element_type="column" data-id="3cf4ce9">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-69ec7d4 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="69ec7d4">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-399fb6d animated fadeInLeft" data-element_type="column" data-id="399fb6d" data-settings="{&quot;animation&quot;:&quot;fadeInLeft&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-eb45e17 elementor-widget elementor-widget-heading animated fadeInDown" data-element_type="widget" data-id="eb45e17" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.cta?.eyebrow, 'Ideas to reality')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-0d6851b elementor-widget elementor-widget-heading" data-element_type="widget" data-id="0d6851b" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.cta?.title, 'Talk to Us Today to Learn More')}</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-4852935 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="4852935" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <CmsHtml html={c?.cta?.body ?? '<p>Do you have any specific questions about us, our services, or anything related to pest infestation issues? Call us today on&nbsp;<a href="tel:+61434660060">( +61 434 660 060 )</a>&nbsp;or use our contact form to connect with our&nbsp;<b>7 States Pest Control</b>. You can get answers to your questions, get upfront quotes for the&nbsp;<b>7 States Pest Control</b>&nbsp;issues, and receive high-quality tailored services.</p>'} /> </div>
                        </div>
                        <div className="elementor-element elementor-element-3a9556f elementor-widget elementor-widget-button" data-element_type="widget" data-id="3a9556f" data-widget_type="button.default">
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
      </div>
      
    </>
  )
}
