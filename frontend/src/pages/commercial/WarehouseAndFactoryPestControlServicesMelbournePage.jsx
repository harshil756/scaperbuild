import PhoneNumberInput from '../../components/PhoneNumberInput.jsx'
import { cmsText } from '../../utils/cmsMedia.js'
import usePageCms from '../../hooks/usePageCms.js'
import ServiceCmsContentBlocks from '../../components/service/ServiceCmsContentBlocks.jsx'
import ServiceCommercialSectionCms from '../../components/service/ServiceCommercialSectionCms.jsx'
import ServiceCmsStyles from '../../components/service/ServiceCmsStyles.jsx'
import CmsHtml from '../../components/home/CmsHtml.jsx'
import usePageMeta from '../../hooks/usePageMeta.js'
import { Link } from 'react-router-dom'

export default function WarehouseAndFactoryPestControlServicesMelbournePage() {
  const { page, content: c } = usePageCms('warehouse-and-factory-pest-control-services-melbourne')
  usePageMeta('warehouse_and_factory_pest_control_services_melbourne', page)

  return (
    <>
      <ServiceCmsStyles content={c} heroBgId="48cd1cc" ctaBgId="1178258" />
      <ServiceCmsContentBlocks content={c} />
      <ServiceCommercialSectionCms slug="warehouse-and-factory-pest-control-services-melbourne" content={c} />
      <div className="elementor elementor-704" data-elementor-id={704} data-elementor-post-type="page" data-elementor-type="wp-page">
        <div className="elementor-element elementor-element-48cd1cc e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="48cd1cc" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-c3ff114 e-con-full e-flex e-con e-child" data-element_type="container" data-id="c3ff114">
              <div className="elementor-element elementor-element-97da543 elementor-icon-list--layout-inline elementor-align-left elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="97da543" data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:720}" data-widget_type="icon-list.default">
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
                        <span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb_current, 'Warehouse and Factory Pest Control Services')}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="elementor-element elementor-element-c285cf2 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="c285cf2" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'Pest Control Services')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-2331d6e elementor-widget elementor-widget-heading" data-element_type="widget" data-id="2331d6e" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.heading, 'Warehouse and Factory Pest Control Services Melbourne')}</h1> </div>
              </div>
              <div className="elementor-element elementor-element-ebee901 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="ebee901" data-widget_type="text-editor.default">
                <div className="elementor-widget-container"><CmsHtml html={c?.hero?.intro ?? '<div class="elementor-element elementor-element-de434cf elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="de434cf" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><div class="elementor-widget-container"><p>Pest infestations can be a real headache for industrial facilities and warehouses. These unwanted intruders not only cause annoyance and disruption, but they also create unsanitary and potentially dangerous conditions within your premises. If left unchecked, these infestations can lead to the spread of diseases, damage to your company’s reputation, operational disruptions, and negative impacts on your financial performance.</p></div></div>'} /></div>
              </div>
            </div>
            <div className="elementor-element elementor-element-0f1e058 e-con-full e-flex e-con e-child" data-element_type="container" data-id="0f1e058" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-4e98015 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="4e98015" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.title, 'Warehouse and Factory Pest Control Services Melbourne')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-e6a1e74 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="e6a1e74" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.subtitle, 'Have an enquiry? Leave us your details and we’ll call you back during business hours.')}</h6> </div>
              </div>
              <div className="elementor-element elementor-element-c63264d elementor-button-align-center elementor-widget elementor-widget-form" data-element_type="widget" data-id="c63264d" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                <div className="elementor-widget-container">
                  <form aria-label="New Form" className="elementor-form" id="home_contact_form" method="post" name="New Form">
                    <input name="post_id" type="hidden" defaultValue={704} />
                    <input name="form_id" type="hidden" defaultValue="c63264d" />
                    <input name="referer_title" type="hidden" defaultValue="Effective Pest Control for Warehouse & Factories in Melbourne" />
                    <input name="queried_id" type="hidden" defaultValue={704} />
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-43e5294 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="43e5294">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d82959f" data-element_type="column" data-id="d82959f" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-background-overlay" />
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-720c2dd elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="720c2dd">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ccbdd4c" data-element_type="column" data-id="ccbdd4c">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-ccab24e elementor-widget elementor-widget-heading" data-element_type="widget" data-id="ccab24e" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Pest Control SERVICE</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-d48427a elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d48427a" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Warehouse and Factory Pest Control Services Melbourne</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-b721455 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="b721455" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            To effectively deal with pest issues in factory and warehouse environments, it’s crucial to take a proactive approach to prevention. That’s where Assured Environments comes in. We are most experienced and largest commercial pest control specialist, serving businesses for many years. Our team of experts works closely with you to develop a comprehensive pest management plan that is tailored to the unique operations of your factory and warehouse, addressing the specific challenges posed by pests.
                            We have the necessary tools and expertise to tackle existing pest problems, and we can also create customized prevention programs for your industrial facilities. Our commitment goes beyond just resolving your immediate pest concerns; we strive to ensure that you never have to deal with such issues again. When you choose Assured Environments, you’re choosing a pest control service that understands the distinct needs of your factory and warehouse. We take pride in delivering customized pest control solutions that are designed to tackle the specific challenges you face in your industrial business. Here’s a brief overview of the wide range of services we offer to address pest control in factory and warehouse settings in Melbourne.								</div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7d99a43" data-element_type="column" data-id="7d99a43" data-settings="{&quot;animation&quot;:&quot;none&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-333a05f elementor-widget elementor-widget-spacer" data-element_type="widget" data-id="333a05f" data-widget_type="spacer.default">
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
        <div className="elementor-element elementor-element-1a443c9 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="1a443c9">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-cd86096 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="cd86096" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Why Choose</h2> </div>
            </div>
            <div className="elementor-element elementor-element-ab4bccf elementor-widget elementor-widget-elementskit-heading" data-element_type="widget" data-id="ab4bccf" data-widget_type="elementskit-heading.default">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con"><div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-"><h2 className="ekit-heading--title elementskit-section-title">7 States Pest Control for Pest Control in Melbourne?</h2></div></div> </div>
            </div>
            <div className="elementor-element elementor-element-ba93f7b elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="ba93f7b" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                <p>We believe in offering the best solutions to our valued customers. Allow us to attend to your pest control requirements &amp; keep your family and little ones safe.</p> </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-ea4b120 e-flex e-con-boxed e-con e-child" data-element_type="container" data-id="ea4b120">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-6d4778a e-con-full e-flex e-con e-child" data-element_type="container" data-id="6d4778a">
              <div className="elementor-element elementor-element-28039b5 ekit-equal-height-enable elementor-widget elementor-widget-elementskit-image-box" data-element_type="widget" data-id="28039b5" data-widget_type="elementskit-image-box.default">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    <div className="elementskit-info-image-box ekit-image-box text-center hover-border-bottom">
                      <div className="elementskit-box-header image-box-img-center">
                        <img alt="professional-success" decoding="async" loading="lazy" src="/assets/images/professional-success-r8bomvbu3c93uax0u85h20goco60kp9o7y_4cc9959a.png" title="professional-success" />
                      </div>
                      <div className="elementskit-box-body ekit-image-box-body">
                        <div className="elementskit-box-content ekit-image-box-body-inner">
                          <h3 className="elementskit-info-box-title">
                            Local Expertise​
                          </h3>
                          <div className="elementskit-box-style-content">
                            Melbourne’s diverse climate and urban environment create specific challenges when it comes to pest control. Our team is well-acquainted with the local pest population and has developed targeted strategies to address Melbourne’s unique pest issues.                  </div>
                        </div>
                      </div>
                    </div>
                  </div> </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-49c9121 e-con-full e-flex e-con e-child" data-element_type="container" data-id="49c9121">
              <div className="elementor-element elementor-element-0c1516d ekit-equal-height-enable elementor-widget elementor-widget-elementskit-image-box" data-element_type="widget" data-id="0c1516d" data-widget_type="elementskit-image-box.default">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    <div className="elementskit-info-image-box ekit-image-box text-center hover_from_right hover-border-bottom">
                      <div className="elementskit-box-header image-box-img-center">
                        <img alt="execution" decoding="async" loading="lazy" src="/assets/images/execution-r8boo1mkmvv0cr7kz8foo7sf30dj72xldrxrow7ew0_abca882a.png" title="execution" />
                      </div>
                      <div className="elementskit-box-body ekit-image-box-body">
                        <div className="elementskit-box-content ekit-image-box-body-inner">
                          <h3 className="elementskit-info-box-title">
                            Comprehensive Services
                          </h3>
                          <div className="elementskit-box-style-content">
                            From common household pests like ants and spiders to more challenging infestations of termites and rodents, we offer a comprehensive range of pest control services. Our integrated approach ensures that we not only eliminate existing pests but also implement preventive measures to keep them from returning.                  </div>
                        </div>
                      </div>
                    </div>
                  </div> </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-d95ff33 e-con-full e-flex e-con e-child" data-element_type="container" data-id="d95ff33">
              <div className="elementor-element elementor-element-5588970 ekit-equal-height-enable elementor-widget elementor-widget-elementskit-image-box" data-element_type="widget" data-id="5588970" data-widget_type="elementskit-image-box.default">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    <div className="elementskit-info-image-box ekit-image-box text-center hover_from_right hover-border-bottom">
                      <div className="elementskit-box-header image-box-img-center">
                        <img alt="eco" decoding="async" loading="lazy" src="/assets/images/eco-r8bop2aaa70h95d2wygdaob2gi769mm9p6aqmysi5k_6ad5c5e4.png" title="eco" />
                      </div>
                      <div className="elementskit-box-body ekit-image-box-body">
                        <div className="elementskit-box-content ekit-image-box-body-inner">
                          <h3 className="elementskit-info-box-title">
                            Environmentally Friendly Solutions
                          </h3>
                          <div className="elementskit-box-style-content">
                            We prioritize the safety of your family, pets, and the environment. Our Melbourne pest control services incorporate the latest in eco-friendly technologies and methods. Rest assured that our treatments are effective and environmentally responsible.                  </div>
                        </div>
                      </div>
                    </div>
                  </div> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-19dc996 e-flex e-con-boxed e-con e-child" data-element_type="container" data-id="19dc996">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-b5c5d8c e-con-full e-flex e-con e-child" data-element_type="container" data-id="b5c5d8c">
              <div className="elementor-element elementor-element-37deb53 ekit-equal-height-enable elementor-widget elementor-widget-elementskit-image-box" data-element_type="widget" data-id="37deb53" data-widget_type="elementskit-image-box.default">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    <div className="elementskit-info-image-box ekit-image-box text-center hover-border-bottom">
                      <div className="elementskit-box-header image-box-img-center">
                        <img alt="clipboard" decoding="async" loading="lazy" src="/assets/images/clipboard-r8botv8kyxty9sr3z91hm8w7jxodvl1qilf1plkmcg_c7b8178b.png" title="clipboard" />
                      </div>
                      <div className="elementskit-box-body ekit-image-box-body">
                        <div className="elementskit-box-content ekit-image-box-body-inner">
                          <h3 className="elementskit-info-box-title">
                            Licensed and Insured
                          </h3>
                          <div className="elementskit-box-style-content">
                            7 States Pest Control is a licensed and insured pest control company in Melbourne. Our team of certified technicians undergoes regular training to stay updated on the latest industry standards and best practices. Our Melbourne Pest Control Services                  </div>
                        </div>
                      </div>
                    </div>
                  </div> </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-d10edea e-con-full e-flex e-con e-child" data-element_type="container" data-id="d10edea">
              <div className="elementor-element elementor-element-a738e08 ekit-equal-height-enable elementor-widget elementor-widget-elementskit-image-box" data-element_type="widget" data-id="a738e08" data-widget_type="elementskit-image-box.default">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    <div className="elementskit-info-image-box ekit-image-box text-center hover_from_right hover-border-bottom">
                      <div className="elementskit-box-header image-box-img-center">
                        <img alt="insecticide" decoding="async" loading="lazy" src="/assets/images/insecticide-r8bov92115q5d4qqwckpsebn1cuu7jjidfzs59ir6o_c4acec4d.png" title="insecticide" />
                      </div>
                      <div className="elementskit-box-body ekit-image-box-body">
                        <div className="elementskit-box-content ekit-image-box-body-inner">
                          <h3 className="elementskit-info-box-title">
                            Residential Pest Control
                          </h3>
                          <div className="elementskit-box-style-content">
                            Protect your home from unwanted pests
                            with our residential pest control services. We tailor our treatments to your specific needs, ensuring a safe and pest-free living environment for you and your family.                  </div>
                        </div>
                      </div>
                    </div>
                  </div> </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-1f0496d e-con-full e-flex e-con e-child" data-element_type="container" data-id="1f0496d">
              <div className="elementor-element elementor-element-3884410 ekit-equal-height-enable elementor-widget elementor-widget-elementskit-image-box" data-element_type="widget" data-id="3884410" data-widget_type="elementskit-image-box.default">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    <div className="elementskit-info-image-box ekit-image-box text-center hover_from_right hover-border-bottom">
                      <div className="elementskit-box-header image-box-img-center">
                        <img alt="sanitizer" decoding="async" loading="lazy" src="/assets/images/sanitizer-r8bow196q6sr1flsboriv77guwzumgnghbkcjkcy00_3f2a2dd6.png" title="sanitizer" />
                      </div>
                      <div className="elementskit-box-body ekit-image-box-body">
                        <div className="elementskit-box-content ekit-image-box-body-inner">
                          <h3 className="elementskit-info-box-title">
                            Commercial Pest Management
                          </h3>
                          <div className="elementskit-box-style-content">
                            For businesses in Melbourne, we offer customized pest management solutions to safeguard your reputation and maintain a pest-free workplace. Our services are designed to comply with industry regulations and keep your commercial space pest-free.                  </div>
                        </div>
                      </div>
                    </div>
                  </div> </div>
              </div>
            </div>
          </div>
        </div>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-9d68721 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="9d68721">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-26e3111" data-element_type="column" data-id="26e3111" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-background-overlay" />
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-1d07bf4 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="1d07bf4">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-333e8c8" data-element_type="column" data-id="333e8c8">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-0b49aea elementor-widget elementor-widget-heading" data-element_type="widget" data-id="0b49aea" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Get in Touch</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-a5f3bb3 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="a5f3bb3" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Contact 7 States Pest Control for Melbourne Pest Control</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-7b9aa5a elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="7b9aa5a" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>Don’t let pests take over your home or business. Contact&nbsp;<Link to="/"><strong>7 States Pest Control</strong></Link>&nbsp;today for reliable and effective pest control services in Melbourne. Our team is ready to assess your situation and provide tailored solutions to ensure a pest-free environment.</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-0e96e9a elementor-align-left elementor-tablet-align-left elementor-widget elementor-widget-button" data-element_type="widget" data-id="0e96e9a" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link className="elementor-button elementor-button-link elementor-size-sm" to="/melbourne">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Our Locations</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c5d3376" data-element_type="column" data-id="c5d3376" data-settings="{&quot;animation&quot;:&quot;none&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-930b50b elementor-widget elementor-widget-spacer" data-element_type="widget" data-id="930b50b" data-widget_type="spacer.default">
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
        <section className="elementor-section elementor-top-section elementor-element elementor-element-bba3a80 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="bba3a80">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-dc26e09" data-element_type="column" data-id="dc26e09">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-8e5059d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="8e5059d">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f8a6c75" data-element_type="column" data-id="f8a6c75">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-5751f84 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="5751f84" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Our Services </h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-0109a35 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="0109a35" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Explore Our Diverse Pest Control Services at 7 States Pest Control</h2> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-316edec" data-element_type="column" data-id="316edec" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-2963f03 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="2963f03" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>7 States Pest Control is your one-stop destination<br />to avail of pest control services, including:</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-c7af5bb elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-id="c7af5bb" data-widget_type="divider.default">
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
                <div className="elementor-element elementor-element-099c2dc e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="099c2dc">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-cb49c60 e-con-full e-flex e-con e-child" data-element_type="container" data-id="cb49c60">
                      <div className="elementor-element elementor-element-5e7e733 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="5e7e733" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="cockroach pest control" className="attachment- size-" decoding="async" height={150} src="/assets/images/Cockroaches.png-1_56844a04.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Cockroach Control               </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-cockroach-control">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-e3f5b0e e-con-full e-flex e-con e-child" data-element_type="container" data-id="e3f5b0e">
                      <div className="elementor-element elementor-element-601817b ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="601817b" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="Bed Bug Pest Control" className="attachment- size-" decoding="async" height={150} src="/assets/images/Bed-Bug.png_1da7e9d8.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Bed Bug Treatment              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-bed-bug-treatment">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-4eee0f9 e-con-full e-flex e-con e-child" data-element_type="container" data-id="4eee0f9">
                      <div className="elementor-element elementor-element-984f7f6 Ant-new ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="984f7f6" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="Ant Pest Control" className="attachment- size-" decoding="async" height={360} loading="lazy" sizes="(max-width: 360px) 100vw, 360px" src="/assets/images/ant-colony-insect-animals-pest-png_73d1a8ca.png" srcSet="/assets/images/ant-colony-insect-animals-pest-png_73d1a8ca.png 360w, /assets/images/ant-colony-insect-animals-pest-png-300x300_41e7bf02.png 300w, /assets/images/ant-colony-insect-animals-pest-png-150x150_d0bc64f1.png 150w" width={360} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Ant Pest Control              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-ant-pest-control">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-5eb98d1 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="5eb98d1">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-f119c26 e-con-full e-flex e-con e-child" data-element_type="container" data-id="f119c26">
                      <div className="elementor-element elementor-element-43e981d ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="43e981d" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="mites control" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Mite-Control.png_4c3b4b78.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Mites Control              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-mites-control">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-2d51973 e-con-full e-flex e-con e-child" data-element_type="container" data-id="2d51973">
                      <div className="elementor-element elementor-element-82736bd ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="82736bd" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="Fly-Control" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Fly-Control.png_4cfa4c12.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Fly Control              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-fly-control">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-9e57946 e-con-full e-flex e-con e-child" data-element_type="container" data-id="9e57946">
                      <div className="elementor-element elementor-element-e101d5f ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="e101d5f" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="Flea Control" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Flea-Control.png_a5558f62.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Flea Treatment              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/flea-treatment">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-fe631d0 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="fe631d0">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-11e0fe1 e-con-full e-flex e-con e-child" data-element_type="container" data-id="11e0fe1">
                      <div className="elementor-element elementor-element-099467c ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="099467c" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="Mosquito pest Control" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Mosquito-Control.png_90777f1c.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Mosquito Pest Control              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-mosquito-pest-control">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-8e2d292 e-con-full e-flex e-con e-child" data-element_type="container" data-id="8e2d292">
                      <div className="elementor-element elementor-element-8133e00 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id={8133e00} data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="Rodent Pest Control" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Rodent-Control.png-1_0842a15c.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Rodent Control              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/rodent-control-in-melbourne">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-72b340f e-con-full e-flex e-con e-child" data-element_type="container" data-id="72b340f">
                      <div className="elementor-element elementor-element-8b0b18f ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="8b0b18f" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="Moth Control" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Moth-Control.png-1_737c5080.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Moth Control              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-moth-control">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-4844b56 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="4844b56">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-43b1430 e-con-full e-flex e-con e-child" data-element_type="container" data-id="43b1430">
                      <div className="elementor-element elementor-element-a517275 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="a517275" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="Wasp Removal melbourne" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Wasp-Removal.png-1_2802cb47.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Wasp Control Services              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/wasp-removal-melbourne">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-3704e1a e-con-full e-flex e-con e-child" data-element_type="container" data-id="3704e1a">
                      <div className="elementor-element elementor-element-0dc70f3 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="0dc70f3" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="spider control" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Spider-Control.png-2_18a07ad3.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Spider Control Treatment              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-spider-control-treatment">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-da9f5bc e-con-full e-flex e-con e-child" data-element_type="container" data-id="da9f5bc">
                      <div className="elementor-element elementor-element-1178258 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="1178258" data-widget_type="elementskit-icon-box.default">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
                              <div className="elementskit-box-header">
                                <div className="elementskit-info-box-icon">
                                  <img alt="silver fish control" className="attachment- size-" decoding="async" height={150} loading="lazy" src="/assets/images/Silver-Fish.png_cbd8da70.webp" width={150} /> </div>
                              </div>
                              <div className="box-body">
                                <h3 className="elementskit-info-box-title">
                                  Silverfish Treatment              </h3>
                                <div className="box-footer disable_hover_button">
                                  <div className="btn-wraper">
                                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to="/our-services-silverfish-treatment">
                                      Learn More                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="elementor-element elementor-element-03c89ea e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="03c89ea" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-f5f93d6 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="f5f93d6" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Our Expertise</h2> </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-71708b4 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="71708b4" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-691661f e-con-full e-flex e-con e-child" data-element_type="container" data-id="691661f" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-646966f elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-element_type="widget" data-id="646966f" data-widget_type="icon-box.default">
                <div className="elementor-widget-container">
                  <div className="elementor-icon-box-wrapper">
                    <div className="elementor-icon-box-icon">
                      <span className="elementor-icon">
                        <svg id="Layer_1" viewBox="0 0 198 193" xmlns="http://www.w3.org/2000/svg"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1{fill:#ff9210;stroke-width:0px;}" }} /></defs><path className="cls-1" d="M72.2279362,85.2110093c0-.0774925-.0001746-.7063889.0000349-1.3352911.0014782-4.5067405.1881097-9.0240493-.0685072-13.5160432-.1420076-2.4858536-.5486397-5.1983595-1.734457-7.3023082-.8665942-1.5375712-1.5070307-3.0495716-2.0359423-4.6811627-.2335484-.7204721-.5118604-1.4468626-.8984036-2.0937413-1.6013184-2.679777-3.9138501-4.5790537-6.7044716-5.9245231,2.3361298,4.0873754,4.6722655,8.1747566,7.035939,12.3103233-3.5594189,6.5399007-2.376523,18.3070548,2.4422136,23.7080553-1.2898584,3.3785249-.6509117,5.4272348,2.380166,7.4784937.8393589.5680185,1.7091654,1.1062878,2.6147386,1.5586146,4.6261575,2.3107389,9.2685748,4.5888654,13.6965316,6.7752997.3530461,2.1951403-.4246726,3.0911461-2.2420226,3.1949195-2.4601959.1404712-4.9153404.4286996-7.3763277.4812846-3.1043569.0663656-6.2217379-.2037641-9.3162947-.0272004-3.0599424.1745735-4.2713307,1.5055407-4.5339417,4.2819447-.7836313.407342-1.6682543.6921253-2.3349135,1.2414399-5.2499619,4.3258238-10.4935341,8.6923841-14.1342457,14.5511817-.9022561,1.4519547-1.1495676,3.3008694-1.7929605,4.9297719-.1941212.4914804-.6414375,1.1248636-1.0870021,1.2362489-3.1314642.782735-6.2998414,1.4162462-9.4414839,2.1604793-1.4685696.34789-2.9039273.8359718-4.3543401,1.2605279,7.2817025,1.6720134,13.9283981.3738799,19.2288792-4.6370276,6.0904556-5.757771,11.5309191-12.1513694,15.3186488-19.2043293,2.5335682-.4696456,4.9219979-.5847554,7.0600492-1.376208,4.5956982-1.701239,9.2154194-3.0598604,14.7796695-3.1475837-.7717828,1.683827-1.0652139,3.4885368-2.1260515,4.4041892-2.4603239,2.123607-5.321472,3.7763345-7.9631783,5.6982491-2.3027666,1.6753189-4.677439,3.3013-6.7225761,5.2599939-.9975098.9553647-1.8917466,2.6668111-1.7861458,3.9498838.1136666,1.3811313-.2037758,2.1921142-.9434698,3.1712108-.7604813,1.006588-1.4919,2.0902496-1.9627096,3.2510428-2.095662,5.1669866-4.3239157,10.2988815-6.0425669,15.5933152-1.081107,3.3304325-1.5828705,6.906611-1.8696732,10.4114075-.1313288,1.6049727-.5093173,2.6827566-1.6069982,3.7641019-2.6600551,2.6204064-5.2229187,5.3394534-7.8249475,8.0187648,2.7241628-1.132138,5.1958522-2.5459866,7.6204268-4.036478,1.9467409-1.1967578,3.6026404-2.6397272,3.6399318-5.2094922.0040271-.277311.2538352-.5545056.4007661-.8257295,1.0228595-1.8879985,2.2072569-3.7067449,3.0459291-5.6730623,3.5703363-8.3709147,6.3364636-16.9863416,7.3979763-25.9734254,6.9775054-1.9769322,9.4279361-8.5556723,13.8686842-13.0813146-.1918575.7344564-.3952375,1.4685635-.7767061,2.0940788-1.6836411,2.7607379-3.3106118,5.5656692-5.1608886,8.2128453-2.6031695,3.7243082-3.968891,7.7452481-3.817805,12.3119994.2824206,8.5356532,1.1874817,16.975238,3.8180261,25.1431101,2.0612455,6.4002094,4.7503807,12.4785885,9.8101612,17.1664669,5.9278528,5.4920874,13.297395,5.3137545,19.0368937-.3701088,3.3180259-3.2858784,5.5172169-7.2735424,7.248962-11.532372,3.5591862-8.7529535,4.7789777-17.9630756,5.4388165-27.3208385.4466354-6.3343558-.9378482-11.894834-5.0034011-16.8613037-1.5467896-1.8895465-2.6244456-4.1826523-3.7825388-6.3626736-.5887244-1.1082431-.8815852-2.3736594-1.3082015-3.5680196,2.8834601,3.0175177,5.323148,6.247878,7.8722194,9.3894909,1.8587151,2.2907431,4.1012382,4.1075924,7.0332329,4.6787651.4418983,2.4772.8121003,4.8594025,1.2971444,7.2179894,2.0155275,9.8006272,6.1064535,18.8388295,10.3024681,27.8350615.1311833.281245.3136131.5903654.5596385.7583978,3.0987469,2.1164839,6.2136138,4.2093755,9.3243605,6.3082845.1467679-.1995275.2935358-.3990667.4403038-.5985942-2.147863-2.2162884-4.2214459-4.5115474-6.467321-6.6236201-1.7663013-1.6610728-3.3630921-3.2569438-2.560594-5.9691121.0672618-.2273331-.0335553-.5026306-.0479062-.7561282-.3031497-5.3546889-2.3410357-10.246925-4.1678482-15.1729026-1.739229-4.6897988-3.3856369-9.4575325-6.6802218-13.3910984-.1944646-.2321633-.2923254-.728276-.1837451-1.0017811.7587238-1.9112067-.0985475-3.4207628-1.3301992-4.6519372-1.5184719-1.5178897-3.1524726-2.9674234-4.9208806-4.1769958-2.6689881-1.8255436-5.5066021-3.4032112-8.2557248-5.1132609-3.0252-1.8817716-3.8860678-3.6015632-3.3967987-6.4635838,5.6715036.1345237,10.9720022,1.7868555,16.2213589,3.760005,1.3056642.4907821,2.8696912.272539,4.3067598.4475781.4843109.0589865,1.2174172.1945809,1.3730541.5182152,2.7988911,5.8194577,7.4326721,10.2577609,11.3094985,15.2687498,2.6680337,3.4485684,6.3636872,5.460406,9.8383392,7.8097399.5580556.3773134,1.2755192.6442773,1.9442734.7106546,2.8359613.2814661,5.6796859.4945764,8.5242833.6736309.8896394.0559836,1.7908946-.0733956,2.6868423-.1179264.0330082-.2486907.0660165-.4973698.0990247-.7460605-4.9449966-1.129205-9.8900048-2.2583983-14.8507839-3.3911997.1700227-3.3495903-1.1943487-5.9361504-3.1374815-8.0194399-3.9318906-4.215486-8.0876924-8.2282786-12.2661903-12.2037566-1.2303249-1.1705467-2.9742677-1.5107782-3.4994664-3.722155-.2451641-1.0323219-2.7235285-2.0956384-4.2360994-2.167486-6.2291286-.2958636-12.4760766-.2167649-18.7244212-.2756234-.18726-1.3892786-.3024746-2.2441638-.4074818-3.0231859.8337489-.2863313,1.5761315-.4484859,2.2299297-.7834915,1.8473438-.9464958,3.645955-1.9876284,5.486455-2.9480096,3.0909022-1.6128058,6.2824586-3.0513989,9.2783632-4.8226116,3.3814701-1.9991627,3.9741285-4.0425419,2.6985162-7.6704326,4.7710865-5.2219634,5.946289-16.9933716,2.4634897-23.6286074,1.2217819-2.1898736,2.3788625-4.2958941,3.5670541-6.3842232,1.1531466-2.0267529,2.3381725-4.0353665,3.5092082-6.0519411-4.117428,2.3003569-7.3863838,5.2261826-8.2339831,10.0823552-.0925883.5305293-.2559884,1.0740885-.5086015,1.5463121-.6339071,1.1850082-1.7158811,2.2647008-1.9392221,3.5085326-.5584048,3.1099489-.889104,6.2807349-1.0336838,9.4398121-.1676716,3.663279-.0390605,7.3401117-.0390605,10.5743419-1.8466803,1.169022-3.7932001,2.1012717-5.3643269,3.4657592-2.3910834,2.0766436-4.6592356,4.3352048-6.71955,6.7393584-1.6108041,1.8796068-3.2945732,3.3404653-6.1653236,3.5584523-.0644801-1.2600158-.6286113-2.8137885-.0985126-3.7440246,1.4488822-2.5426113,1.971532-5.0700918,1.176832-7.9799953.8187695,0,1.5164583.0291092,2.2111094-.0044228,8.5035775-.4104264,13.9361672-6.661703,12.610158-15.0627103-1.7492851-11.0826815-3.8726829-22.106324-5.8473225-33.2233755.576294-.7750707,2.7062795-.5690137,1.8226225-2.2616165.992924-.9101588,1.7951195-1.7929165,2.7414525-2.4759925,1.2111205-.874203,2.5620954-1.5519163,3.8075044-2.382249.8803049-.5869232,2.4140937-1.3099879,2.394191-1.9318717-.0743849-2.3235127,2.7452119-2.05061,3.1357008-4.1113518.2807329-1.4815061,1.9279672-2.7034274,2.9615462-4.0442849.0745246-.0966852.1912871-.2483503.1614796-.3251619-.8107851-2.0883029,1.881062-3.2066313,1.4127315-5.3558702-.2138552-.981375.7983081-2.1786944,1.0358603-3.3234258.2600504-1.2531502.4889199-2.5862328.3332016-3.8348278-.2282177-1.8300682-.8104592-3.6159897-1.2966905-5.6502076h-1.0349525c0,2.285926-.4008941,4.4716373.1219419,6.4079275.4496266,1.6651697-.9031756,2.6755506-.6585934,4.2399934.1611887,1.0310532-1.2239584,2.2147782-1.5308092,3.4277608-.537699,2.125606-1.4939368,3.8881214-2.7845634,5.6905994-1.4009877,1.9565843-2.8868354,3.790991-4.5630043,5.478912-.9499295.9565781-2.0547393,1.7723271-3.151041,2.5669979-1.15104.8343482-2.5084745,1.42586-3.5300421,2.3851151-1.0222077.9598516-1.7407304,2.2431192-2.6415782,3.4505761-.6432066-.7499013-1.0663196-1.414448-1.6464894-1.8855747-1.4073077-1.1428226-3.4247439-1.9128158-4.1887635-3.3636415-.7763453-1.4742463-.1565912-3.618271-.4804002-5.4089179-.8563751-4.7358951-5.2865783-8.3989967-9.657213-8.1823016,3.1469324,2.4278972,4.0592213,7.8847271,2.185585,13.0230875h-7.6058606c.1132941-4.7189255-1.5645391-9.6700957,3.2471676-13.1244895-5.3378248.1589627-9.5353874,3.9835496-9.8511654,9.6540281-.1613167,2.8969231-.690752,4.983323-3.5872944,6.1013109-.8257296.318711-1.3664431,1.3146871-2.1430561,1.8464356-.4171538.28563-1.3644994.5132861-1.5452765.3063736-.8809683-1.0083135-1.7503559-1.7999814-3.114541-2.2642556-1.5048659-.5121513-2.7546628-1.7337933-4.234144-2.3711716-1.6346758-.7042357-3.284587-1.2649187-4.2815381-2.8864945-.1465468-.2383582-.4674227-.3689478-.7062086-.5512875-1.0484537-.8006445-2.3094241-1.4367425-3.0911233-2.4445002-.997987-1.2866167-1.6090117-2.8734297-2.3863463-4.3311079-.0874322-.1639471-.1571965-.3393004-.2599457-.4927694-.7126915-1.0644863-1.4659217-2.1036373-2.13719-3.1933948-.4505228-.7313895-1.014945-1.4992847-1.1332788-2.3086177-.3543439-2.4234453-.5144326-4.8752955-.7760834-7.5822816-.4873312.1273017-1.1132481.2908035-1.2146122.3172823-.1880166,1.4065465-.4027912,2.3555811-.4191324,3.3080216-.0188901,1.1007651-.1443179,2.3254477.2681162,3.2850345,1.4141572,3.2902168,1.9330593,7.042316,4.7522371,9.6438788.1228614.1133756.2636934.3933578.2094091.4845581-.7598994,1.2765461.5100331,1.422313,1.0718481,1.9485941.3180243.2979121.8931544.5035646.9744994.8416982.4527226,1.8819724,2.2905456,2.482714,3.5187522,3.4032548,1.2933269.9693403,2.1696862,2.688096,4.1164038,2.8487521.8912805.0735556,1.8226807.4741703,2.5998989.9490244,1.6654609,1.0175287,3.2425003,2.1797739,5.1364932,3.4747009,0,.6177695.1609326,1.7321987-.0249075,2.7854417-1.8416988,10.4376127-3.8212967,20.8514294-5.5952448,31.3002679-1.1737593,6.9136875,2.6843516,12.9462031,9.1737285,14.6672982,1.4566455.3863336,2.988025.4908752,4.5028073.7279385-.9260812,2.351813-.6291584,4.7573051.6604673,6.7178146,1.124212,1.709072.7260182,2.9942397.1313812,4.4859765-2.0488267-.0016527-3.3237406-1.0048305-4.5722107-2.4073893-2.3615669-2.6530538-4.839035-5.2259498-7.4752709-7.6026004-1.5003849-1.352639-3.4101719-2.2511472-5.5698951-3.6318013Z" /><path className="cls-1" d="M72.2279362,85.2110093c2.1597232,1.3806541,4.0695102,2.2791623,5.5698951,3.6318013,2.6362359,2.3766506,5.113704,4.9495466,7.4752709,7.6026004,1.2484701,1.4025587,2.523384,2.4057365,4.5722107,2.4073893.5946371-1.4917368.9928309-2.7769045-.1313812-4.4859765-1.2896256-1.9605095-1.5865484-4.3660016-.6604673-6.7178146-1.5147823-.2370633-3.0461618-.3416049-4.5028073-.7279385-6.4893769-1.7210951-10.3474878-7.7536107-9.1737285-14.6672982,1.7739482-10.4488385,3.753546-20.8626552,5.5952448-31.3002679.1858401-1.053243.0249075-2.1676722.0249075-2.7854417-1.8939929-1.294927-3.4710323-2.4571722-5.1364932-3.4747009-.7772182-.4748541-1.7086184-.8754688-2.5998989-.9490244-1.9467176-.1606561-2.8230769-1.8794118-4.1164038-2.8487521-1.2282066-.9205408-3.0660296-1.5212824-3.5187522-3.4032548-.081345-.3381336-.6564751-.5437861-.9744994-.8416982-.561815-.5262811-1.8317475-.672048-1.0718481-1.9485941.0542843-.0912004-.0865477-.3711825-.2094091-.4845581-2.8191779-2.6015628-3.3380799-6.3536621-4.7522371-9.6438788-.4124342-.9595868-.2870064-2.1842695-.2681162-3.2850345.0163412-.9524404.2311158-1.901475.4191324-3.3080216.1013641-.0264787.727281-.1899806,1.2146122-.3172823.2616508,2.7069861.4217395,5.1588363.7760834,7.5822816.1183338.809333.682756,1.5772282,1.1332788,2.3086177.6712683,1.0897575,1.4244985,2.1289085,2.13719,3.1933948.1027492.1534691.1725134.3288224.2599457.4927694.7773346,1.4576782,1.3883594,3.0444911,2.3863463,4.3311079.7816992,1.0077577,2.0426696,1.6438557,3.0911233,2.4445002.2387859.1823396.5596618.3129293.7062086.5512875.9969511,1.6215758,2.6468623,2.1822588,4.2815381,2.8864945,1.4794812.6373783,2.7292781,1.8590203,4.234144,2.3711716,1.3641852.4642742,2.2335727,1.2559421,3.114541,2.2642556.1807771.2069125,1.1281227-.0207436,1.5452765-.3063736.776613-.5317485,1.3173265-1.5277246,2.1430561-1.8464356,2.8965424-1.1179879,3.4259777-3.2043878,3.5872944-6.1013109.315778-5.6704784,4.5133406-9.4950654,9.8511654-9.6540281-4.8117066,3.4543937-3.1338734,8.405564-3.2471676,13.1244895h7.6058606c1.8736363-5.1383604.9613474-10.5951903-2.185585-13.0230875,4.3706347-.2166951,8.8008378,3.4464065,9.657213,8.1823016.3238089,1.7906469-.2959451,3.9346716.4804002,5.4089179.7640196,1.4508257,2.7814558,2.2208189,4.1887635,3.3636415.5801698.4711267,1.0032827,1.1356734,1.6464894,1.8855747.9008478-1.2074569,1.6193705-2.4907246,2.6415782-3.4505761,1.0215676-.9592551,2.3790021-1.550767,3.5300421-2.3851151,1.0963017-.7946708,2.2011115-1.6104198,3.151041-2.5669979,1.6761688-1.687921,3.1620166-3.5223277,4.5630043-5.478912,1.2906266-1.802478,2.2468644-3.5649934,2.7845634-5.6905994.3068509-1.2129826,1.6919979-2.3967076,1.5308092-3.4277608-.2445822-1.5644428,1.10822-2.5748237.6585934-4.2399934-.522836-1.9362902-.1219419-4.1220015-.1219419-6.4079275h1.0349525c.4862313,2.0342179,1.0684728,3.8201394,1.2966905,5.6502076.1557183,1.248595-.0731512,2.5816776-.3332016,3.8348278-.2375522,1.1447314-1.2497155,2.3420508-1.0358603,3.3234258.4683305,2.149239-2.2235166,3.2675673-1.4127315,5.3558702.0298075.0768116-.086955.2284766-.1614796.3251619-1.0335791,1.3408574-2.6808133,2.5627788-2.9615462,4.0442849-.3904888,2.0607418-3.2100857,1.787839-3.1357008,4.1113518.0199027.6218839-1.5138861,1.3449485-2.394191,1.9318717-1.245409.8303327-2.5963839,1.508046-3.8075044,2.382249-.946333.683076-1.7485286,1.5658337-2.7414525,2.4759925.883657,1.6926028-1.2463285,1.4865458-1.8226225,2.2616165,1.9746396,11.1170514,4.0980374,22.140694,5.8473225,33.2233755,1.3260092,8.4010073-4.1065805,14.6522839-12.610158,15.0627103-.6946511.033532-1.3923399.0044228-2.2111094.0044228.7947,2.9099035.2720502,5.437384-1.176832,7.9799953-.5300987.9302361.0340325,2.4840089.0985126,3.7440246,2.8707503-.217987,4.5545194-1.6788455,6.1653236-3.5584523,2.0603144-2.4041536,4.3284666-4.6627149,6.71955-6.7393584,1.5711268-1.3644875,3.5176465-2.2967372,5.3643269-3.4657592,0-3.2342303-.1286111-6.9110629.0390605-10.5743419.1445798-3.1590772.475279-6.3298632,1.0336838-9.4398121.223341-1.2438318,1.305315-2.3235244,1.9392221-3.5085326.2526131-.4722237.4160132-1.0157828.5086015-1.5463121.8475993-4.8561727,4.1165551-7.7819983,8.2339831-10.0823552-1.1710358,2.0165746-2.3560616,4.0251882-3.5092082,6.0519411-1.1881917,2.0883291-2.3452723,4.1943495-3.5670541,6.3842232,3.4827993,6.6352359,2.3075968,18.406644-2.4634897,23.6286074,1.2756123,3.6278906.6829539,5.6712699-2.6985162,7.6704326-2.9959046,1.7712127-6.187461,3.2098058-9.2783632,4.8226116-1.8405.9603812-3.6391112,2.0015138-5.486455,2.9480096-.6537981.3350056-1.3961808.4971603-2.2299297.7834915.1050072.7790221.2202217,1.6339073.4074818,3.0231859,6.2483446.0588585,12.4952926-.0202402,18.7244212.2756234,1.5125709.0718476,3.9909353,1.1351641,4.2360994,2.167486.5251987,2.2113767,2.2691415,2.5516082,3.4994664,3.722155,4.1784979,3.975478,8.3342997,7.9882706,12.2661903,12.2037566,1.9431328,2.0832894,3.3075042,4.6698496,3.1374815,8.0194399,4.9607791,1.1328014,9.9057873,2.2619948,14.8507839,3.3911997-.0330082.2486907-.0660165.4973698-.0990247.7460605-.8959478.0445308-1.7972029.1739101-2.6868423.1179264-2.8445975-.1790545-5.688322-.3921648-8.5242833-.6736309-.6687543-.0663773-1.3862178-.3333412-1.9442734-.7106546-3.474652-2.3493339-7.1703056-4.3611714-9.8383392-7.8097399-3.8768264-5.0109889-8.5106075-9.4492921-11.3094985-15.2687498-.1556368-.3236343-.8887432-.4592287-1.3730541-.5182152-1.4370686-.1750391-3.0010956.043204-4.3067598-.4475781-5.2493567-1.9731495-10.5498552-3.6254813-16.2213589-3.760005-.4892691,2.8620206.3715987,4.5818121,3.3967987,6.4635838,2.7491227,1.7100497,5.5867367,3.2877173,8.2557248,5.1132609,1.768408,1.2095723,3.4024087,2.6591061,4.9208806,4.1769958,1.2316517,1.2311743,2.0889231,2.7407305,1.3301992,4.6519372-.1085803.2735051-.0107195.7696178.1837451,1.0017811,3.2945849,3.9335659,4.9409928,8.7012996,6.6802218,13.3910984,1.8268125,4.9259776,3.8646985,9.8182137,4.1678482,15.1729026.0143509.2534976.115168.5287951.0479062.7561282-.8024981,2.7121683.7942926,4.3080394,2.560594,5.9691121,2.2458751,2.1120727,4.319458,4.4073317,6.467321,6.6236201-.1467679.1995275-.2935358.3990667-.4403038.5985942-3.1107467-2.098909-6.2256136-4.1918006-9.3243605-6.3082845-.2460254-.1680324-.4284553-.4771528-.5596385-.7583978-4.1960146-8.996232-8.2869406-18.0344343-10.3024681-27.8350615-.4850441-2.3585869-.8552461-4.7407893-1.2971444-7.2179894-2.9319948-.5711727-5.1745179-2.388022-7.0332329-4.6787651-2.5490713-3.1416128-4.9887593-6.3719731-7.8722194-9.3894909.4266163,1.1943601.7194771,2.4597764,1.3082015,3.5680196,1.1580932,2.1800212,2.2357492,4.4731271,3.7825388,6.3626736,4.0655529,4.9664697,5.4500365,10.5269479,5.0034011,16.8613037-.6598388,9.3577629-1.8796304,18.567885-5.4388165,27.3208385-1.7317451,4.2588296-3.9309362,8.2464937-7.248962,11.532372-5.7394987,5.6838633-13.1090409,5.8621962-19.0368937.3701088-5.0597805-4.6878784-7.7489157-10.7662575-9.8101612-17.1664669-2.6305444-8.1678722-3.5356055-16.607457-3.8180261-25.1431101-.151086-4.5667513,1.2146355-8.5876912,3.817805-12.3119994,1.8502768-2.6471761,3.4772475-5.4521074,5.1608886-8.2128453.3814686-.6255152.5848486-1.3596224.7767061-2.0940788-4.4407481,4.5256423-6.8911788,11.1043824-13.8686842,13.0813146-1.0615127,8.9870838-3.8276399,17.6025107-7.3979763,25.9734254-.8386722,1.9663174-2.0230695,3.7850638-3.0459291,5.6730623-.1469309.2712238-.396739.5484184-.4007661.8257295-.0372914,2.5697651-1.6931909,4.0127344-3.6399318,5.2094922-2.4245747,1.4904914-4.896264,2.90434-7.6204268,4.036478,2.6020288-2.6793114,5.1648924-5.3983584,7.8249475-8.0187648,1.0976809-1.0813454,1.4756694-2.1591292,1.6069982-3.7641019.2868027-3.5047965.7885662-7.080975,1.8696732-10.4114075,1.7186512-5.2944337,3.9469049-10.4263287,6.0425669-15.5933152.4708096-1.1607932,1.2022283-2.2444548,1.9627096-3.2510428.739694-.9790967,1.0571364-1.7900795.9434698-3.1712108-.1056007-1.2830727.7886361-2.9945191,1.7861458-3.9498838,2.0451371-1.9586938,4.4198095-3.584675,6.7225761-5.2599939,2.6417062-1.9219146,5.5028544-3.5746422,7.9631783-5.6982491,1.0608376-.9156524,1.3542687-2.7203622,2.1260515-4.4041892-5.5642501.0877232-10.1839713,1.4463447-14.7796695,3.1475837-2.1380513.7914526-4.526481.9065624-7.0600492,1.376208-3.7877298,7.0529599-9.2281932,13.4465583-15.3186488,19.2043293-5.3004811,5.0109075-11.9471767,6.309041-19.2288792,4.6370276,1.4504128-.4245561,2.8857705-.9126379,4.3543401-1.2605279,3.1416425-.7442331,6.3100197-1.3777444,9.4414839-2.1604793.4455646-.1113853.8928809-.7447685,1.0870021-1.2362489.6433929-1.6289025.8907044-3.4778172,1.7929605-4.9297719,3.6407116-5.8587976,8.8842837-10.2253579,14.1342457-14.5511817.6666592-.5493147,1.5512822-.8340979,2.3350765-1.2411257.262448-2.7767183,1.4738363-4.1076855,4.5337787-4.282259,3.0945569-.1765638,6.2119378.093566,9.3162947.0272004,2.4609873-.052585,4.9161318-.3408135,7.3763277-.4812846,1.81735-.1037734,2.5950687-.9997792,2.2420226-3.1949195-4.4279568-2.1864343-9.070374-4.4645608-13.6965316-6.7752997-.9055732-.4523268-1.7753798-.990596-2.6147386-1.5586146-3.0310777-2.0512589-3.6700245-4.0999688-2.380166-7.4784937-4.8187366-5.4010005-6.0016325-17.1681546-2.4422136-23.7080553-2.3636735-4.1355667-4.6998092-8.2229479-7.035939-12.3103233,2.7906215,1.3454694,5.1031533,3.2447461,6.7044716,5.9245231.3865432.6468786.6648552,1.3732692.8984036,2.0937413.5289116,1.6315911,1.1693481,3.1435915,2.0359423,4.6811627,1.1858173,2.1039487,1.5924494,4.8164545,1.734457,7.3023082.2566169,4.4919939.0699854,9.0093026.0685072,13.5160432-.0002095.6289022-.0000349,1.2577986-.0000349,1.3352911Z" /></svg> </span>
                    </div>
                    <div className="elementor-icon-box-content">
                      <h3 className="elementor-icon-box-title">
                        <span>
                          Termites						</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-bfe8f96 e-con-full e-flex e-con e-child" data-element_type="container" data-id="bfe8f96" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-6273097 elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-element_type="widget" data-id="6273097" data-widget_type="icon-box.default">
                <div className="elementor-widget-container">
                  <div className="elementor-icon-box-wrapper">
                    <div className="elementor-icon-box-icon">
                      <span className="elementor-icon">
                        <svg id="Layer_1" viewBox="0 0 198 193" xmlns="http://www.w3.org/2000/svg"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1{fill:#ff9210;stroke-width:0px;}" }} /></defs><path className="cls-1" d="M85.0363611,34.0246651c26.7631572.0235868,48.570474,21.8818627,48.4916274,48.6049532-.0789259,26.7496936-21.8447703,48.4700747-48.546122,48.4447144-26.7566726-.0254132-48.5660179-21.8871797-48.4901583-48.6067002.0759414-26.7479251,21.8401151-48.4665072,48.5446529-48.4429674ZM51.9119634,112.9620445c2.1222726-2.1183095,4.2165395-4.1559303,6.2334552-6.2674502.3914997-.4098698.6648848-1.1031981.6793479-1.6737313.0695295-2.7421681.0420641-5.4871261.0262558-8.2309602-.0057707-1.0017636.3646358-1.7132725,1.2895464-2.1757866,1.192363-.5962638,2.3352024-1.2913704,3.5256948-1.8916868.5662141-.2855146.678981-.6178293.6674198-1.2635641-.0522041-2.9159415-.0947673-5.8394395.0638712-8.7490409.09679-1.775222.5650111-3.5301875.8663508-5.2939557q-1.6401619-.2762425-2.1098339,1.1388651c-.8057252,2.428153-1.5650203,4.8733429-2.4457912,7.2739473-.2568199.6999857-.750758,1.4037794-1.3231923,1.8814528-2.5488246,2.1268511-5.1619599,4.176828-7.7593514,6.2451641-1.1028426.8782017-2.0356822.8614822-2.748091-.0163493-.7274091-.8963228-.5472098-1.7804613.5689805-2.6763147,2.3923559-1.9201147,4.8094555-3.8100892,7.1719416-5.7661486.4655753-.3854813.8636951-.9657198,1.0661328-1.5365902.9755052-2.7509113,1.8720348-5.5298108,2.7993086-8.2978648.5537935-1.6531443.8024829-1.828263,2.5767858-1.831605.9746789-.0018379,1.9538825.0525882,2.9216273-.0294526.3448877-.0292377.8175112-.3079329.9672986-.6058135,1.2464081-2.4787446,2.8212082-4.6919039,4.9121633-6.5351246.203687-.1795581.3506023-.6489115.2664014-.8959724-1.2678616-3.7202209-2.4836611-7.4942068-6.6202121-9.1429415-.1639101-.0653311-.3043572-.192192-.4516129-.2962213-1.0625484-.75065-1.2859273-1.6530484-.6390785-2.5743167.5973879-.8508168,1.5254384-.9731077,2.5682817-.2946049,1.4816755.9640108,2.9862255,1.9008085,4.3996638,2.9580064.5988752.4479333,1.1441515,1.1035484,1.4486409,1.7835355.8941797,1.9968632,1.6553918,4.053286,2.598649,6.4113049.6078155-.696419,1.0765389-1.1813977,1.4823332-1.7143038.3476079-.456498.5207755-1.1017304.9497386-1.4299264,1.2906668-.9874737,1.2650258-2.1753668.7652773-3.5095112-.0502475-.1341397-.0932866-.2778919-.1021674-.4195352-.0787144-1.2556605-.683823-2.1038113-1.8089536-2.7077539-1.0442481-.560524-2.0014462-1.2866716-2.9818463-1.9618689-1.079887-.7437166-1.301848-1.6428574-.6661903-2.5667717.593587-.8627647,1.5218821-.9975259,2.56224-.3213832,1.5123931.9829252,3.0572093,1.9284447,4.482341,3.0272513.6008186.4632414,1.0886852,1.2199472,1.3493688,1.9436205.406756,1.1291632.5763245,2.3437918.818278,3.3995187h5.1729593c.2621213-1.1487123.4943975-2.3878648.8433902-3.5932113.151387-.5228539.4297893-1.1328671.8455385-1.4334997,1.6940582-1.225013,3.4459492-2.3734774,5.2127329-3.492995.8881678-.5627867,1.8136832-.2969964,2.3466645.544497.496949.7845998.341781,1.6990751-.4418662,2.2960909-.5729863.4365242-1.149747.9037669-1.7965892,1.2012146-2.3031825,1.0591234-3.4795621,2.8135633-3.6704187,5.3402848-.0471903.6246883-.0395489,1.0254777.4113865,1.5125819.6286112.679035,1.0738354,1.5240621,1.6502986,2.2565183.4006052.5090201.8899525.9481904,1.474077,1.5591672.955929-2.3887904,1.7435885-4.4391078,2.6060954-6.4574373.2289909-.5358745.5968492-1.0992942,1.057951-1.4331923,1.5474504-1.1205556,3.1582926-2.1546971,4.7597484-3.1990975,1.0357539-.6754766,1.9610182-.5439599,2.5666127.315496.6183456.8775588.3773108,1.8558463-.6719874,2.5750902-1.2794129.876982-2.5886775,1.7107966-3.8581355,2.6016256-.334589.2347973-.6780886.5650229-.8329725.9298015-.8167576,1.9235657-1.5981176,3.863398-2.3273561,5.8215828-.1104434.2965717.1168223.7189398.185119,1.0689524,5.923443-5.9160359,11.6867007-11.6720893,17.4487422-17.4269279-15.1794766-14.6819096-42.9557246-17.271988-61.7161739,1.0343168-18.4013409,17.9558871-17.2928197,46.0542696-1.6368898,62.5930246ZM54.4737737,115.5113993c16.0135662,15.4976023,44.2451156,17.2483268,62.5546196-1.342481,18.6951701-18.9823912,15.7684266-47.0742287.9756341-62.093384-5.807956,5.8085292-11.6164408,11.6175938-17.4518622,17.4535922.2445844.3595261.5638113.7956189.8480702,1.2534358.6204939.9993538,1.0009908,2.4265663,1.8934883,2.9024945.9594324.5116282,2.3926121.1338852,3.619064.1455901,1.4294647.0136387,1.8310548.2926447,2.2877477,1.6518386.9642381,2.8697231,1.894222,5.7512702,2.893752,8.6085413.1771537.506412.5426719,1.0164733.958117,1.3584932,2.4238652,1.9954749,4.8826917,3.9487377,7.3429725,5.8995214.7333831.5815011,1.0753821,1.2734411.7129245,2.1737768-.450671,1.1194879-1.7459153,1.4146745-2.7838903.5969976-2.8063981-2.2107462-5.6010365-4.4371939-8.3607467-6.7056023-.4135348-.3399043-.7141936-.9039124-.8961727-1.4240623-.8565048-2.4481517-1.6519842-4.9176341-2.4721594-7.378532q-.4990907-1.4974557-2.1459521-1.1905277c-.0062004.069311-.0319075.1435506-.0158182.2072289,1.1700668,4.6313923,1.4899217,9.3184139.984895,14.0702377-.0303937.2860104.2454966.7396524.5093696.8986169,1.1725192.7063654,2.3776928,1.3633259,3.6003174,1.9801503.9531593.48086,1.3541347,1.1898765,1.3234567,2.2564159-.0487701,1.6954026.1470706,3.4119277-.0484925,5.0858706-.3313368,2.8360923.3109906,5.1654553,2.7661948,6.8173964.0293295.0197276.051758.050152.0761893.0767022.8014682.8708171.8664202,1.8902059.1658436,2.6001149-.7303754.7400954-1.7183574.7044482-2.5901252-.1382452-.9861443-.9532644-1.917014-1.9648786-2.9220239-2.8970866-.6934442-.6431961-.9483802-1.3826502-.9371098-2.3102436.0320265-2.6350812.0214567-5.2708961-.0025714-7.9061492-.0029349-.3213138-.091796-.7881384-.3102767-.9344491-.7308315-.489428-1.5385993-.8639415-2.3755379-1.3140003-.1579906.5157205-.2706551.8907761-.3876889,1.2644632-1.9267971,6.1522447-5.5500652,10.9671056-11.2466457,14.0932742-2.8490934,1.5635173-5.8714206,2.6696507-9.1936332,2.3170729-4.9839866-.5289427-9.1136332-2.8683348-12.5597476-6.4006577-1.4137423-1.4491052-2.5710944-3.1484216-3.7973215-4.6744803-4.2845007,4.2789633-8.6224714,8.6113378-13.0148804,12.9980756ZM97.919576,71.845687c-3.5952672,3.6060138-7.0989698,7.1410439-10.6345072,10.6439407-.5336952.5287642-.7226811,1.0660369-.7205526,1.8050944.0234993,8.1547869.0147738,16.3096663.0147738,24.4645193v1.2514591c.592731-.1380865,1.013894-.2086008,1.4178241-.3344435,6.0268068-1.877777,10.0562393-5.9171003,12.3577891-11.690812,2.2325789-5.6006722,2.2244417-11.4108971,1.2032831-17.2556188-.5511528-3.1545964-1.6526188-6.1066611-3.6386104-8.8841392ZM83.1155363,68.6991528c-1.6239668-.4736836-3.0946892-.8266019-4.5038936-1.3463585-.6866786-.2532622-1.2182949-.2132913-1.8280141.1010907-3.0119558,1.5529957-5.0698169,4.0018448-6.5144454,6.9956653-2.2964864,4.7592051-3.0410242,9.8234607-2.6730337,15.0473716.1525438,2.16546.5921096,4.3107033.9011469,6.465136.2064071.102565.4128143.2051233.6192214.3076817.184415-.3509118.2970893-.7730254.5640262-1.042032,3.9629734-3.9937132,7.9086215-8.0061424,11.9498069-11.9197023,1.0971033-1.0624603,1.5740366-2.1098506,1.5237197-3.6531742-.1196547-3.6702904-.0385342-7.3471292-.0385342-10.9556783ZM83.0540514,86.7471643c-4.2645379,4.2644386-8.3330697,8.3518446-12.4328051,12.4076957-.4942422.4889586-.3359408.8443263-.0730263,1.3119046,2.0733951,3.6874265,4.9397015,6.545871,8.8070252,8.3146108,1.1524341.5270718,2.3893466.8693891,3.6988063,1.3359955v-23.3702066ZM86.633897,77.7412615c2.8463303-2.8269525,5.764203-5.7249646,8.765556-8.7058868-.8861649-.5441384-1.8463443-1.1718347-2.8481415-1.7240354-.2755731-.1518939-.7042585-.1793168-1.0134445-.0911442-1.6150001.4605473-3.2141357.9767438-4.90397,1.4999514v9.021115ZM80.1421379,64.2415108c3.2000857,1.196124,6.2728356,1.169101,9.4580252.0111629-1.2013133-1.9020795-2.8726588-2.6165766-4.9113999-2.5646595-1.9073862.0485719-3.4576757.7804265-4.5466253,2.5534966ZM62.3210194,102.219889c.1059154.0645246.2118275.1290425.3177429.1935671,1.0091049-1.0636371,2.0265485-2.1196053,3.0181826-3.1992942.1461584-.1591429.2826262-.462177.2314136-.6447101-.2461411-.8773026-.5582422-1.7361007-.8636207-2.6514966-.8016599.4300601-1.5200114.7646292-2.17664,1.1936779-.2489009.162627-.4935117.5380396-.5037807.8249293-.051044,1.4262307-.0232977,2.8552778-.0232977,4.2833266Z" /><path className="cls-1" d="M88.643705,22.8396598c2.3567522.361865,4.744539.5855725,7.0654793,1.1068796,24.304051,5.4589521,40.108643,20.1386747,46.363361,44.2421068,4.57881,17.6451533.8862272,34.0917391-9.6916378,48.9579315-.3021447.4246412-.5943309.8563605-1.0881634,1.5691483.4662316.3450347.9810876.6350957,1.383915,1.0373435,12.4856198,12.4671781,24.9568375,24.9487671,37.4400336,37.4183778,2.0879035,2.0856466,3.0401255,4.5005998,2.2954863,7.436486-1.2988462,5.120907-7.3724758,7.2410746-11.567146,4.0330246-.6058262-.4633248-1.1404675-1.0244343-1.6823011-1.5660659-12.3771038-12.3722563-24.7503787-24.7483326-37.1260599-37.1220027-.3327842-.3327315-.6842471-.6467754-1.077801-1.0173826-4.1077133,3.1178176-8.4574691,5.6978412-13.1448302,7.7110823-34.4472109,14.7951306-74.4112949-6.3873135-81.3341471-43.1350734-.4596811-2.4400778-.7658548-4.9090738-1.1434281-7.3646162.0000001-2.6857602.0000001-5.3715248,0-8.057285.3729885-2.4469626.6861616-4.9047839,1.1282789-7.339193,4.1269427-22.7240111,22.7355653-41.8064708,45.3564634-46.4697839,2.9896217-.616312,6.0339712-.9671761,9.0529723-1.4409776,2.5898416.0000002,5.1796832.0000002,7.7695248,0ZM129.1859685,82.1678561c.0413181-24.5434216-19.9638717-44.5813531-44.5266197-44.5994885-24.5326244-.0181134-44.5853312,19.9782036-44.6359733,44.5104504-.0505302,24.478013,19.9816866,44.5354893,44.5478573,44.6040133,24.5196911.0683922,44.573365-19.9404421,44.6147358-44.5149752Z" /></svg> </span>
                    </div>
                    <div className="elementor-icon-box-content">
                      <h3 className="elementor-icon-box-title">
                        <span>
                          All Pest Control						</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-bcea8cc e-con-full e-flex e-con e-child" data-element_type="container" data-id="bcea8cc" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-a28626f elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-element_type="widget" data-id="a28626f" data-widget_type="icon-box.default">
                <div className="elementor-widget-container">
                  <div className="elementor-icon-box-wrapper">
                    <div className="elementor-icon-box-icon">
                      <span className="elementor-icon">
                        <svg id="Layer_1" viewBox="0 0 198 193" xmlns="http://www.w3.org/2000/svg"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1{fill:#000;stroke-width:0px;}" }} /></defs><path className="cls-1" d="M96.8066326,177.9587404c-.2106986-.4706125-.3782269-.9666672-.6383155-1.4081891-12.0347361-20.4306871-24.2115972-40.7792063-36.0681603-61.3126907-6.8963728-11.9432921-12.4612129-24.5208534-15.5127154-38.0662561-1.6108314-7.1503752-.8337847-14.2473625,1.0918016-21.2004297,4.3959794-15.8733919,14.0097052-27.6442166,28.7330942-34.9570774,14.9510345-7.4259224,30.4304941-7.8964599,45.8221917-1.5848417,14.3876725,5.8999055,24.5288094,16.3356073,30.2996929,30.8464328,2.9767746,7.4850413,4.323522,15.2781131,3.5196091,23.3262666-.6534916,6.542237-2.7202277,12.7616533-5.5919149,18.6102608-3.5624106,7.2553606-7.2652093,14.480961-11.4778608,21.3705828-12.9231555,21.1352572-26.1193924,42.1035391-39.2050741,63.1394727-.245718.3949943-.437461.8235719-.6543891,1.2364689h-.3179594ZM130.4654218,68.6863053c.0086748-17.4173867-14.2249958-31.6193399-31.6890769-31.6184642-17.4914688.0008782-31.6353204,14.1553044-31.6114259,31.6350666.0239139,17.4962967,14.1844019,31.6696518,31.627873,31.6566105,17.4228224-.0130219,31.6639647-14.2544362,31.6726297-31.6732129Z" /></svg> </span>
                    </div>
                    <div className="elementor-icon-box-content">
                      <h3 className="elementor-icon-box-title">
                        <span>
                          All Sub Location						</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-73eaf6d e-con-full e-flex e-con e-child" data-element_type="container" data-id="73eaf6d" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-20449be elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-element_type="widget" data-id="20449be" data-widget_type="icon-box.default">
                <div className="elementor-widget-container">
                  <div className="elementor-icon-box-wrapper">
                    <div className="elementor-icon-box-icon">
                      <span className="elementor-icon">
                        <svg id="Layer_1" viewBox="0 0 198 193" xmlns="http://www.w3.org/2000/svg"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1{fill:#ff9210;stroke-width:0px;}" }} /></defs><path className="cls-1" d="M181.5200566,107.2248283c-.5679297,1.7263542-1.2629466,3.422256-1.6849124,5.1835833-7.385129,30.8254886-36.6013353,52.77081-66.5824289,49.9773037-32.8605243-3.0618005-58.6311718-28.1792702-60.2732852-58.7456193-1.8365081-34.1848204,19.687415-62.4495964,52.4019659-68.8132024,33.4509577-6.5068486,66.688171,15.4358012,74.4686718,49.1407867.4593977,1.9900994,1.108925,3.9363027,1.6699887,5.9029291v17.354219ZM110.6902224,82.4696205c0,3.2953296.299768,6.6241947-.064338,9.8787917-.691792,6.1836643,1.5516117,10.5282528,6.6227288,14.1648395,6.3470108,4.5515331,12.2278523,9.7542013,18.2972914,14.6913084,3.3566223,2.7303978,7.0525347,4.2385911,10.3395608.4538652,3.3134781-3.8151878,1.3538218-7.2804272-2.0296214-10.0532978-5.5714461-4.5660501-11.394617-8.8498754-16.6977595-13.7047987-1.8482021-1.6919959-3.3232097-4.6648126-3.4911713-7.1524511-.4706708-6.9710601-.1499455-13.9942535-.1820908-20.9966929-.0213073-4.641316-.8512893-9.3113963-6.6173571-9.1946885-5.2718388.1067162-6.280299,4.3931659-6.1907573,8.9381309.0851819,4.323442.0183472,8.6498772.0135145,12.9749931Z" /><path className="cls-1" d="M31.7859072,74.767951c-3.4893437,0-7.1268029.597096-10.4138798-.2182934-2.0547282-.5096964-3.5814105-3.1481078-5.3450419-4.8313037,1.6992354-1.7780337,3.2860165-4.9419777,5.1174638-5.0905802,7.3409078-.5956538,14.7851686-.6001886,22.1265008-.0135287,1.7687986.1413488,4.5848654,3.4120326,4.5499443,5.1972728-.0330769,1.6911731-2.9555288,4.3027825-4.999043,4.7604969-3.5183989.7880531-7.3409539.2181279-11.0358568.2181279-.0000284-.0073956-.0000591-.0147959-.0000875-.0221916Z" /><path className="cls-1" d="M20.9732072,103.2840476c-3.4920544.0025062-7.1144067.5661707-10.4292006-.2002867-2.1267237-.4917512-3.8002737-2.9433762-5.6769665-4.5164655,1.7904487-1.8928973,3.4457674-5.2372062,5.3955509-5.418739,7.126859-.6635335,14.3804594-.6249194,21.5208028-.0446574,1.9074379.1550051,3.5816446,3.1799884,5.3629244,4.8873713-1.8990398,1.7634269-3.5450023,4.4768299-5.7568517,5.0660764-3.2605693.868634-6.924237.2242042-10.4162595.2267009Z" /><path className="cls-1" d="M32.2037827,131.7654406c-3.7002864,0-7.5016595.5068166-11.060376-.2029631-1.9259943-.384146-4.9528063-3.0353957-4.7901703-4.3240756.2595851-2.0568774,2.6416139-5.3272681,4.3400998-5.4659972,7.5509592-.6166915,15.2029259-.635644,22.7584517-.0701448,1.7085603.1278721,4.4980852,3.5478584,4.3809991,5.2905832-.1145704,1.7052739-3.0955867,4.0996066-5.1918395,4.5877167-3.3152301.7719236-6.9420711.2055828-10.4370395.2055828-.0000426-.0069038-.0000828-.0137982-.0001253-.020702Z" /></svg> </span>
                    </div>
                    <div className="elementor-icon-box-content">
                      <h3 className="elementor-icon-box-title">
                        <span>
                          Same Day Services						</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-c49bb55 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="c49bb55">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-7fbc8d7" data-element_type="column" data-id="7fbc8d7">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-fc7b308 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="fc7b308" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Frequently Asked Questions</h2> </div>
                </div>
                <div className="elementor-element elementor-element-0f5b531 elementor-widget elementor-widget-elementskit-accordion" data-element_type="widget" data-id="0f5b531" data-widget_type="elementskit-accordion.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con">
                      <div className="elementskit-accordion accoedion-primary" id="accordion-6a1c10e9abd5b">
                        <div className="elementskit-card active">
                          <div className="elementskit-card-header" id="primaryHeading-0-0f5b531">
                            <a aria-controls="Collapse-6f491396a1c10e9abd5b" aria-expanded="true" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-6f491396a1c10e9abd5b" href="#collapse-6f491396a1c10e9abd5b">
                              <span className="ekit-accordion-title">1. Why is pest control important for schools and educational facilities?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-0-0f5b531" className="show collapse" data-parent="#accordion-6a1c10e9abd5b" id="Collapse-6f491396a1c10e9abd5b">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>Pest control for schools is essential to maintain a hygienic learning environment, prevent health risks, and comply with safety regulations. Regular inspections help keep pests away from classrooms, cafeterias, and playgrounds.</p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-1-0f5b531">
                            <a aria-controls="Collapse-042b3786a1c10e9abd5b" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-042b3786a1c10e9abd5b" href="#collapse-042b3786a1c10e9abd5b">
                              <span className="ekit-accordion-title">2. How does pest control in hospitals ensure patient safety?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-1-0f5b531" className="collapse" data-parent="#accordion-6a1c10e9abd5b" id="Collapse-042b3786a1c10e9abd5b">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>Pest control in hospitals is crucial for infection prevention. Bed bugs hospital infection control measures prevent infestations that could compromise patient health and hygiene standards in medical facilities.</p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-2-0f5b531">
                            <a aria-controls="Collapse-fcc8da46a1c10e9abd5b" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-fcc8da46a1c10e9abd5b" href="#collapse-fcc8da46a1c10e9abd5b">
                              <span className="ekit-accordion-title">3. What are the common pests found in schools and hospitals?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-2-0f5b531" className="collapse" data-parent="#accordion-6a1c10e9abd5b" id="Collapse-fcc8da46a1c10e9abd5b">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>Common pests include rodents, cockroaches, ants, flies, and bed bugs. Education facility pest control Melbourne services focus on eliminating these pests to ensure a safe environment for students, staff, and patients.</p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-3-0f5b531">
                            <a aria-controls="Collapse-247bb1b6a1c10e9abd5b" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-247bb1b6a1c10e9abd5b" href="#collapse-247bb1b6a1c10e9abd5b">
                              <span className="ekit-accordion-title">4. How often should a school or hospital schedule pest control services?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-3-0f5b531" className="collapse" data-parent="#accordion-6a1c10e9abd5b" id="Collapse-247bb1b6a1c10e9abd5b">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>School pest control Melbourne services recommend quarterly or bi-monthly treatments. However, hospitals may require more frequent inspections due to strict hygiene requirements.</p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-4-0f5b531">
                            <a aria-controls="Collapse-43386d36a1c10e9abd5b" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-43386d36a1c10e9abd5b" href="#collapse-43386d36a1c10e9abd5b">
                              <span className="ekit-accordion-title">5. What are the benefits of hiring professional pest control for office buildings and educational institutions?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-4-0f5b531" className="collapse" data-parent="#accordion-6a1c10e9abd5b" id="Collapse-43386d36a1c10e9abd5b">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>Professional pest management ensures compliance with health codes, reduces the risk of diseases, and provides long-term prevention strategies for school pest control Melbourne and other commercial spaces.</p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-5-0f5b531">
                            <a aria-controls="Collapse-19231186a1c10e9abd5b" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-19231186a1c10e9abd5b" href="#collapse-19231186a1c10e9abd5b">
                              <span className="ekit-accordion-title">6. Are the pest control treatments safe for children and patients?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-5-0f5b531" className="collapse" data-parent="#accordion-6a1c10e9abd5b" id="Collapse-19231186a1c10e9abd5b">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>Yes, reputable pest control providers use eco-friendly and hospital-grade treatments that are safe for children, patients, and staff while effectively eliminating pests.</p> </div>
                          </div>
                        </div>
                      </div>
                    </div> </div>
                </div>
              </div>
            </div>
            <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-47480b6" data-element_type="column" data-id="47480b6">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-7370492 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="7370492">
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-f8cc484" data-element_type="column" data-id="f8cc484">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-4b47a58 elementor-widget elementor-widget-image" data-element_type="widget" data-id="4b47a58" data-widget_type="image.default">
                          <div className="elementor-widget-container">
                            <img alt="7 States Pest Control" className="attachment-full size-full wp-image-778" decoding="async" height={1280} loading="lazy" sizes="(max-width: 1280px) 100vw, 1280px" src="/assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1_ecbbd918.jpg" srcSet="/assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1_ecbbd918.jpg 1280w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-300x30_e03d7ebf.jpg 300w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-1024x1_359a34a8.jpg 1024w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-150x15_3201d1bd.jpg 150w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-768x76_a05df40f.jpg 768w" width={1280} /> </div>
                        </div>
                        <div className="elementor-element elementor-element-17b5ab4 elementor-widget__width-initial elementor-absolute ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="17b5ab4" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
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
        <div className="elementor-element elementor-element-b1a52d2 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="b1a52d2">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-ae17725 elementor-widget elementor-widget-google_maps" data-element_type="widget" data-id="ae17725" data-widget_type="google_maps.default">
              <div className="elementor-widget-container">
                <div className="elementor-custom-embed">
                  <iframe aria-label="7 States Pest Control 22 Navigation Rd, Tarneit VIC 3029, Australia" loading="lazy" src="https://maps.google.com/maps?q=7%20States%20Pest%20Control%2022%20Navigation%20Rd%2C%20Tarneit%20VIC%203029%2C%20Australia&t=m&z=10&output=embed&iwloc=near" title="7 States Pest Control 22 Navigation Rd, Tarneit VIC 3029, Australia" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
