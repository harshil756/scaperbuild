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

export default function OurServicesFoxPestControlInMelbournePage() {
  const { page, content: c } = usePageCms('our-services-fox-pest-control-in-melbourne')
  usePageMeta('our_services_fox_pest_control_in_melbourne', page)

  return (
    <>
      <ServiceCmsStyles content={c} heroBgId="a342089" ctaBgId="057b4d3" />
      <ServiceFaqCms faq={c?.faq} accordionWidgetId="fb5a99f" />
      <ServiceCmsContentBlocks content={c} />
      <div className="elementor elementor-9877" data-elementor-id={9877} data-elementor-post-type="page" data-elementor-type="wp-page">
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
                        <span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb_current, 'Fox Pest Control')}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="elementor-element elementor-element-5b29971 elementor-widget elementor-widget-heading animated fadeInDown" data-element_type="widget" data-id="5b29971" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'Fox  Pest Control')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-f59a88c elementor-widget elementor-widget-heading animated fadeInLeft" data-element_type="widget" data-id="f59a88c" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.heading, 'Get Professional Fox Pest Control in Melbourne')}</h1> </div>
              </div>
              <div className="elementor-element elementor-element-424a488 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="424a488" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p data-end={650} data-start={334}>Foxes may look harmless from a distance, but they can cause serious problems for homes, farms, and commercial properties. Foxes are intelligent, adaptable animals that thrive in urban and semi-urban environments. Once they enter your property, they can attack pets, livestock, damage gardens, and disturb daily life.</p><p data-end={842} data-start={652}>If you are dealing with fox activity or an increasing fox population on your property and are looking for <strong data-end={813} data-start={758}>professional fox pest control services in Melbourne</strong>, you are in the right place.</p><p data-end={1139} data-start={844}>At <Link to="/"><strong data-end={872} data-start={847}>7 States Pest Control</strong></Link>, we provide <strong data-end={909} data-start={885}>fox removal services</strong>, <strong data-end={940} data-start={911}>fox trapping in Melbourne</strong>, and <strong data-end={968} data-start={946}>humane fox control</strong> solutions tailored to your specific situation. Our licensed and experienced team ensures safe, legal, and effective fox control for residential and commercial properties.</p> </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-672f357 e-con-full e-flex e-con e-child" data-element_type="container" data-id="672f357" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
              <div className="elementor-element elementor-element-ed9cb71 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="ed9cb71" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.title, 'Get A Free Quote Now!')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-fb9a1f0 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="fb9a1f0" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">{cmsText(c?.quote_form?.subtitle, 'Have an enquiry? Leave us your details and we\'ll call you back during business hours.')}</h6> </div>
              </div>
              <div className="elementor-element elementor-element-cad66c8 elementor-button-align-center elementor-widget elementor-widget-form" data-element_type="widget" data-id="cad66c8" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                <div className="elementor-widget-container">
                  <form aria-label="New Form" className="elementor-form" id="home_contact_form" method="post" name="New Form">
                    <input name="post_id" type="hidden" defaultValue={9877} />
                    <input name="form_id" type="hidden" defaultValue="cad66c8" />
                    <input name="referer_title" type="hidden" defaultValue="Fox Removal & Trapping Services in Melbourne | Starting $299" />
                    <input name="queried_id" type="hidden" defaultValue={9877} />
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
        <div className="elementor-element elementor-element-6dc7fcc e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="6dc7fcc" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-548af80 e-con-full e-flex e-con e-child" data-element_type="container" data-id="548af80">
              <div className="elementor-element elementor-element-f3d971c e-con-full e-flex e-con e-child" data-element_type="container" data-id="f3d971c">
                <div className="elementor-element elementor-element-78bc2db e-con-full e-flex e-con e-child" data-element_type="container" data-id="78bc2db">
                  <div className="elementor-element elementor-element-6501e7d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="6501e7d" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">FOx special</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-578d989 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="578d989" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Types of Fox Issues We Control</h2> </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-c0c2f1e e-con-full e-flex e-con e-child" data-element_type="container" data-id="c0c2f1e">
                  <div className="elementor-element elementor-element-f6bb8ec elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="f6bb8ec" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Fox infestations can create serious risks to safety, property, and local wildlife. Our <strong data-end={1436} data-start={1399}>fox control services in Melbourne</strong> are designed to handle all types of fox-related problems, including:</p> </div>
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
            <div className="elementor-element elementor-element-741e3ac e-con-full e-flex e-con e-child" data-element_type="container" data-id="741e3ac">
              <div className="elementor-element elementor-element-eaf7d4f e-con-full e-transform e-transform e-flex e-con e-child" data-element_type="container" data-id="eaf7d4f" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;_transform_translateY_effect_hover&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_hover_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_hover_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}">
                <div className="elementor-element elementor-element-be021bf elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="be021bf" data-widget_type="image-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt className="attachment-full size-full wp-image-9892" decoding="async" fetchpriority="high" height={408} sizes="(max-width: 612px) 100vw, 612px" src="/assets/images/istockphoto-1406487768-612x612-1_598a70c0.jpg" srcSet="/assets/images/istockphoto-1406487768-612x612-1_598a70c0.jpg 612w, /assets/images/istockphoto-1406487768-612x612-1-300x200_adb6b975.jpg 300w" width={612} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">1. Urban Fox Activity</h3><p className="elementor-image-box-description">Urban foxes frequently enter backyards, raid bins, and attack pets. Their presence in residential areas requires professional fox control services to prevent escalation.</p></div></div> </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-9cd4270 e-con-full e-transform e-transform e-flex e-con e-child" data-element_type="container" data-id="9cd4270" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;_transform_translateY_effect_hover&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_hover_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_hover_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}">
                <div className="elementor-element elementor-element-939910b elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="939910b" data-widget_type="image-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="fox attacking chickens" className="attachment-full size-full wp-image-9893" decoding="async" height={533} sizes="(max-width: 800px) 100vw, 800px" src="/assets/images/fox-vince-millet-flickr_0b2f7bca.jpg" srcSet="/assets/images/fox-vince-millet-flickr_0b2f7bca.jpg 800w, /assets/images/fox-vince-millet-flickr-300x200_0d71fe04.jpg 300w, /assets/images/fox-vince-millet-flickr-768x512_0d4542a7.jpg 768w" width={800} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title"> 2. Fox Attacks on Pets &amp; Livestock</h3><p className="elementor-image-box-description">Foxes pose a major threat to small pets, poultry, and livestock. Our fox removal experts in Melbourne focus on protecting animals and preventing future attacks.</p></div></div> </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-9fb9211 e-con-full e-transform e-transform e-flex e-con e-child" data-element_type="container" data-id="9fb9211" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;_transform_translateY_effect_hover&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_hover_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_hover_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}">
                <div className="elementor-element elementor-element-61c1aef elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="61c1aef" data-widget_type="image-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="fox den burrow" className="attachment-full size-full wp-image-9894" decoding="async" height={451} loading="lazy" sizes="(max-width: 612px) 100vw, 612px" src="/assets/images/istockphoto-501596959-612x612-1_74b59c81.jpg" srcSet="/assets/images/istockphoto-501596959-612x612-1_74b59c81.jpg 612w, /assets/images/istockphoto-501596959-612x612-1-300x221_6595e5e9.jpg 300w" width={612} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">3. Fox Dens &amp; Burrowing</h3><p className="elementor-image-box-description">Foxes often dig dens under houses, sheds, and structures, causing structural risks. Fox trapping services in Melbourne are essential to remove them safely.</p></div></div> </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-b744193 e-con-full e-transform e-transform e-flex e-con e-child" data-element_type="container" data-id="b744193" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;_transform_translateY_effect_hover&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_hover_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_hover_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}">
                <div className="elementor-element elementor-element-6ebb5d2 elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="6ebb5d2" data-widget_type="image-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="group of foxes" className="attachment-full size-full wp-image-9895" decoding="async" height={400} loading="lazy" sizes="(max-width: 600px) 100vw, 600px" src="/assets/images/vixen-fox-cubs_600x600_636b4939.jpg" srcSet="/assets/images/vixen-fox-cubs_600x600_636b4939.jpg 600w, /assets/images/vixen-fox-cubs_600x600-300x200_7c704599.jpg 300w" width={600} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">4.High Fox Population Growth</h3><p className="elementor-image-box-description">Rapid fox population growth can disrupt local ecosystems. Our fox population control strategies help restore ecological balance.</p></div></div> </div>
                </div>
              </div>
            </div>
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
                            <h2 className="elementor-heading-title elementor-size-default">why fox coming</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-6d22bd0 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="6d22bd0" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Why Are Foxes Coming Onto Your Property?</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-59fd6df custom-list elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="59fd6df" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <ol><li data-end={2413} data-start={2326}><p data-end={2413} data-start={2328}><strong data-end={2349} data-start={2328}>Food Availability</strong> – Pet food, rubbish, fallen fruit, or livestock attract foxes</p></li><li data-end={2495} data-start={2414}><p data-end={2495} data-start={2416}><strong data-end={2434} data-start={2416}>Shelter &amp; Dens</strong> – Foxes seek safe places under buildings, bushes, or sheds</p></li><li data-end={2579} data-start={2496}><p data-end={2579} data-start={2498}><strong data-end={2517} data-start={2498}>Urban Expansion</strong> – Increased development pushes foxes into residential areas</p></li><li data-end={2666} data-start={2580}><p data-end={2666} data-start={2582}><strong data-end={2601} data-start={2582}>Breeding Season</strong> – Fox activity increases significantly during breeding periods</p></li><li data-end={2747} data-start={2667}><p data-end={2747} data-start={2669}><strong data-end={2691} data-start={2669}>Easy Access Points</strong> – Gaps, open fencing, and unsecured yards allow entry</p></li></ol> </div>
                        </div>
                        <div className="elementor-element elementor-element-2e1c8d0 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="2e1c8d0" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>If fox activity continues, <strong data-end={2822} data-start={2776}>professional fox pest control in Melbourne</strong> is the safest solution.</p> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-60d1b76" data-element_type="column" data-id="60d1b76" data-settings="{&quot;animation&quot;:&quot;none&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-dc6bb88 elementor-widget elementor-widget-image" data-element_type="widget" data-id="dc6bb88" data-widget_type="image.default">
                          <div className="elementor-widget-container">
                            <img alt="fox-adrian-simpson" className="attachment-large size-large wp-image-9899" decoding="async" height={534} loading="lazy" sizes="(max-width: 800px) 100vw, 800px" src="/assets/images/fox-adrian-simpson-1024x683_2dc3242e.jpg" srcSet="/assets/images/fox-adrian-simpson-1024x683_2dc3242e.jpg 1024w, /assets/images/fox-adrian-simpson-300x200_ca64cb1e.jpg 300w, /assets/images/fox-adrian-simpson-768x512_e62a19e2.jpg 768w, /assets/images/fox-adrian-simpson-1536x1024_00b211f7.jpg 1536w, /assets/images/fox-adrian-simpson_9bf95308.jpg 2048w" width={800} /> </div>
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
                        <h2 className="elementor-heading-title elementor-size-default">problems</h2> </div>
                    </div>
                    <div className="elementor-element elementor-element-5de8f7d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="5de8f7d" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">What Problems Can Foxes Cause?</h2> </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-e8edb2b e-con-full e-flex e-con e-child" data-element_type="container" data-id="e8edb2b">
                    <div className="elementor-element elementor-element-ea758e9 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="ea758e9" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Foxes may appear harmless, but their presence can cause serious problems for residential and commercial properties. Below are some of the common issues caused by fox infestations:</p> </div>
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
                <div className="elementor-element elementor-element-782d287 e-con-full e-flex e-con e-child" data-element_type="container" data-id="782d287">
                  <div className="elementor-element elementor-element-f76bb2b e-con-full e-flex e-con e-child" data-element_type="container" data-id="f76bb2b">
                    <div className="elementor-element elementor-element-87d1dc1 ekit-equal-height-enable elementor-widget elementor-widget-elementskit-image-box" data-element_type="widget" data-id="87d1dc1" data-widget_type="elementskit-image-box.default">
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="elementskit-info-image-box ekit-image-box text-center hover-border-bottom">
                            <div className="elementskit-box-header image-box-img-center">
                              <img alt="paw warning icon" decoding="async" loading="lazy" src="/assets/images/paws-rg6x0he9jevp85to433n79vwjcrm3a6rluz01u69eo_72102c24.png" title="paws" />
                            </div>
                            <div className="elementskit-box-body ekit-image-box-body">
                              <div className="elementskit-box-content ekit-image-box-body-inner">
                                <h3 className="elementskit-info-box-title">
                                  Threat to Pets &amp; Livestock
                                </h3>
                                <div className="elementskit-box-style-content">
                                  Foxes are natural predators and can attack small pets, poultry, and livestock. This poses serious risks to households, farms, and rural properties.                  </div>
                              </div>
                            </div>
                          </div>
                        </div> </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-987723d e-con-full e-flex e-con e-child" data-element_type="container" data-id="987723d">
                    <div className="elementor-element elementor-element-a38fed7 ekit-equal-height-enable elementor-widget elementor-widget-elementskit-image-box" data-element_type="widget" data-id="a38fed7" data-widget_type="elementskit-image-box.default">
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="elementskit-info-image-box ekit-image-box text-center hover_from_right hover-border-bottom">
                            <div className="elementskit-box-header image-box-img-center">
                              <img alt="property" decoding="async" loading="lazy" src="/assets/images/property-rg6x1x3dzaugypqkq7g4ieu97josumw04yupg21lwg_e318c0e5.png" title="property" />
                            </div>
                            <div className="elementskit-box-body ekit-image-box-body">
                              <div className="elementskit-box-content ekit-image-box-body-inner">
                                <h3 className="elementskit-info-box-title">
                                  Property &amp; Structural Damage
                                </h3>
                                <div className="elementskit-box-style-content">
                                  Foxes dig dens under houses, sheds, and fences. Their burrowing can weaken foundations, damage gardens, and create safety hazards over time.                  </div>
                              </div>
                            </div>
                          </div>
                        </div> </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-d83ed9c e-con-full e-flex e-con e-child" data-element_type="container" data-id="d83ed9c">
                    <div className="elementor-element elementor-element-9e6391c ekit-equal-height-enable elementor-widget elementor-widget-elementskit-image-box" data-element_type="widget" data-id="9e6391c" data-widget_type="elementskit-image-box.default">
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="elementskit-info-image-box ekit-image-box text-center hover_from_right hover-border-bottom">
                            <div className="elementskit-box-header image-box-img-center">
                              <img alt="health warning icon" decoding="async" loading="lazy" src="/assets/images/risks-rg6x3m6wbj63xd9ttfuvihf7tlbnqymk1d99n1j0o0_c94bbe95.png" title="risks" />
                            </div>
                            <div className="elementskit-box-body ekit-image-box-body">
                              <div className="elementskit-box-content ekit-image-box-body-inner">
                                <h3 className="elementskit-info-box-title">
                                  Health &amp; Disease Risks
                                </h3>
                                <div className="elementskit-box-style-content">
                                  Foxes may carry parasites and diseases that can affect pets and humans. Their presence increases health risks, especially in residential areas.                  </div>
                              </div>
                            </div>
                          </div>
                        </div> </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-56e8a94 e-con-full e-flex e-con e-child" data-element_type="container" data-id="56e8a94">
                  <div className="elementor-element elementor-element-6ff100a e-con-full e-flex e-con e-child" data-element_type="container" data-id="6ff100a">
                    <div className="elementor-element elementor-element-986a3d4 ekit-equal-height-enable elementor-widget elementor-widget-elementskit-image-box" data-element_type="widget" data-id="986a3d4" data-widget_type="elementskit-image-box.default">
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="elementskit-info-image-box ekit-image-box text-center hover-border-bottom">
                            <div className="elementskit-box-header image-box-img-center">
                              <img alt="burrow icon" decoding="async" loading="lazy" src="/assets/images/landscape-rg6x694lhss2hzfxf2w70bgrtibqce3g2f5b3zm97k_12334cb0.png" title="landscape" />
                            </div>
                            <div className="elementskit-box-body ekit-image-box-body">
                              <div className="elementskit-box-content ekit-image-box-body-inner">
                                <h3 className="elementskit-info-box-title">
                                  Environmental &amp; Wildlife Impact
                                </h3>
                                <div className="elementskit-box-style-content">
                                  Uncontrolled fox populations harm native wildlife and disrupt local ecosystems, leading to biodiversity loss.                  </div>
                              </div>
                            </div>
                          </div>
                        </div> </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-3ff0379 e-con-full e-flex e-con e-child" data-element_type="container" data-id="3ff0379">
                    <div className="elementor-element elementor-element-9c94e27 ekit-equal-height-enable elementor-widget elementor-widget-elementskit-image-box" data-element_type="widget" data-id="9c94e27" data-widget_type="elementskit-image-box.default">
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="elementskit-info-image-box ekit-image-box text-center hover_from_right hover-border-bottom">
                            <div className="elementskit-box-header image-box-img-center">
                              <img alt="population" decoding="async" loading="lazy" src="/assets/images/population-rg6x7j6osoj4avl0y4swwhucxe0ptk6akr43mjpyqo_93cd7d41.png" title="population" />
                            </div>
                            <div className="elementskit-box-body ekit-image-box-body">
                              <div className="elementskit-box-content ekit-image-box-body-inner">
                                <h3 className="elementskit-info-box-title">
                                  Rapid Population Growth
                                </h3>
                                <div className="elementskit-box-style-content">
                                  Foxes reproduce quickly, and once they settle in an area, their population can increase rapidly, making control difficult without professional fox pest control.                  </div>
                              </div>
                            </div>
                          </div>
                        </div> </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-b6100e2 e-con-full e-flex e-con e-child" data-element_type="container" data-id="b6100e2">
                    <div className="elementor-element elementor-element-afefc50 ekit-equal-height-enable elementor-widget elementor-widget-elementskit-image-box" data-element_type="widget" data-id="afefc50" data-widget_type="elementskit-image-box.default">
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="elementskit-info-image-box ekit-image-box text-center hover_from_right hover-border-bottom">
                            <div className="elementskit-box-header image-box-img-center">
                              <img alt="field" decoding="async" loading="lazy" src="/assets/images/field-rg6xan1hdys8oh2jsz5in7m7m8pe9jico4qvqh4468_aabd1e9e.png" title="field" />
                            </div>
                            <div className="elementskit-box-body ekit-image-box-body">
                              <div className="elementskit-box-content ekit-image-box-body-inner">
                                <h3 className="elementskit-info-box-title">
                                  Business &amp; Farm Disruptions
                                </h3>
                                <div className="elementskit-box-style-content">
                                  For farms and businesses, fox activity can cause livestock losses, property damage, and financial impact, especially in agricultural and semi-urban areas.                  </div>
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
        <div className="elementor-element elementor-element-12c387c e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="12c387c" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-3cbc09e e-flex e-con-boxed e-con e-child" data-element_type="container" data-id="3cbc09e">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-452e0a4 e-con-full e-flex e-con e-child" data-element_type="container" data-id="452e0a4" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-element elementor-element-e47cc08 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="e47cc08" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">7.Monitor Fox Activity</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-acb9541 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="acb9541" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Watch for signs like tracks, droppings, or digging</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Act quickly if fox activity increases</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Early action helps prevent population growth</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-6ffb5b4 e-con-full e-flex e-con e-child" data-element_type="container" data-id="6ffb5b4" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-element elementor-element-d5d1b1b elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d5d1b1b" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">8.Hire Professional Fox Control Services</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-b50781c elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="b50781c" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>If fox infestations persist, <strong data-end={2167} data-start={2121}>professional fox pest control in Melbourne</strong> is the safest and most effective solution. Licensed experts can provide <strong data-end={2262} data-start={2240}>humane fox control</strong>, <strong data-end={2289} data-start={2264}>fox trapping services</strong>, and long-term <strong data-end={2331} data-start={2305}>fox population control</strong> strategies to prevent re-infestation.</p> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-f5c5111 e-flex e-con-boxed e-con e-child" data-element_type="container" data-id="f5c5111">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-d1d5604 e-con-full e-flex e-con e-child" data-element_type="container" data-id="d1d5604" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-element elementor-element-e0495b8 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="e0495b8" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">4. Protect Pets &amp; Livestock</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-cb3d33f elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="cb3d33f" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Secure poultry coops with strong fencing</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Keep small pets indoors at night</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Use motion-sensor lights around animal enclosures</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Avoid leaving animal carcasses exposed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-594c8ee e-con-full e-flex e-con e-child" data-element_type="container" data-id="594c8ee" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-element elementor-element-79db49d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="79db49d" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">5. Maintain Clean Outdoor Areas</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-a55e290 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="a55e290" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Keep gardens tidy and free of food scraps</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Remove standing water sources</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Store compost securely to avoid attracting foxes</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Maintain regular yard inspections</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-378f25d e-con-full e-flex e-con e-child" data-element_type="container" data-id="378f25d" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-element elementor-element-8d109a3 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="8d109a3" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">6. Use Deterrents Where Needed</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-8c84a46 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="8c84a46" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Install motion-activated lights or sprinklers</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Use fox deterrent sprays in high-risk areas</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Fence off vulnerable zones such as chicken runs</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Rotate deterrents to maintain effectiveness</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-a75e30c e-flex e-con-boxed e-con e-child" data-element_type="container" data-id="a75e30c">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-a41a979 e-con-full e-flex e-con e-child" data-element_type="container" data-id="a41a979" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-element elementor-element-3bce987 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="3bce987" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">1. Secure Food Sources</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-446fbbb elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="446fbbb" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Do not leave pet food outdoors overnight</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Secure rubbish bins with tight-fitting lids</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Clean up fallen fruits and food waste regularly</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Avoid feeding wildlife near your property</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-b06aef9 e-con-full e-flex e-con e-child" data-element_type="container" data-id="b06aef9" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-element elementor-element-d668ba4 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d668ba4" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">2. Seal Entry Points</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-a4646d8 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="a4646d8" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Repair gaps under fences and gates</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Block access under decks, sheds, and houses</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Use wire mesh to seal potential denning areas</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Close off crawl spaces and openings</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-a61947a e-con-full e-flex e-con e-child" data-element_type="container" data-id="a61947a" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-element elementor-element-8da92f1 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="8da92f1" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">3. Eliminate Shelter &amp; Hiding Spots</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-5750a6f elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="5750a6f" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Clear dense bushes and overgrown vegetation</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Remove debris, wood piles, and unused materials</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Trim hedges close to the ground</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Keep yards open and well-maintained</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-815a5c7 e-con-full e-flex e-con e-child" data-element_type="container" data-id="815a5c7">
              <div className="elementor-element elementor-element-532a940 e-con-full e-flex e-con e-child" data-element_type="container" data-id="532a940">
                <div className="elementor-element elementor-element-c783a42 e-con-full e-flex e-con e-child" data-element_type="container" data-id="c783a42">
                  <div className="elementor-element elementor-element-326f094 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="326f094" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">protects</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-010327e elementor-widget elementor-widget-heading" data-element_type="widget" data-id="010327e" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">How to Prevent Fox Infestations ?</h2> </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-3b60541 e-con-full e-flex e-con e-child" data-element_type="container" data-id="3b60541">
                  <div className="elementor-element elementor-element-7696069 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="7696069" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Foxes are intelligent and adaptable animals. Preventing fox infestations requires proactive measures to remove food sources, block access points, and reduce shelter opportunities. Here are some effective ways to keep foxes away from your property:</p> </div>
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
        <div className="elementor-element elementor-element-df39b6f e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="df39b6f" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-068ef92 e-con-full e-flex e-con e-child" data-element_type="container" data-id="068ef92">
              <div className="elementor-element elementor-element-d1454f0 elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="d1454f0" data-widget_type="image-box.default">
                <div className="elementor-widget-container">
                  <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt className="elementor-animation-shrink attachment-thumbnail size-thumbnail wp-image-1196" decoding="async" height={150} loading="lazy" sizes="(max-width: 150px) 100vw, 150px" src="/assets/images/controll-5-150x150_2e53f6c6.png" srcSet="/assets/images/controll-5-150x150_2e53f6c6.png 150w, /assets/images/controll-5_d5d0c92d.png 154w" width={150} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Free Quotes</h3></div></div> </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-82121dd e-con-full e-flex e-con e-child" data-element_type="container" data-id="82121dd">
              <div className="elementor-element elementor-element-df69cfe elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="df69cfe" data-widget_type="image-box.default">
                <div className="elementor-widget-container">
                  <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt className="elementor-animation-shrink attachment-full size-full wp-image-1197" decoding="async" height={154} loading="lazy" sizes="(max-width: 154px) 100vw, 154px" src="/assets/images/controll-4_8dd6b2b1.png" srcSet="/assets/images/controll-4_8dd6b2b1.png 154w, /assets/images/controll-4-150x150_6f9c8c9f.png 150w" width={154} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">100+ Five Star Reviews</h3></div></div> </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-59019b6 e-con-full e-flex e-con e-child" data-element_type="container" data-id="59019b6">
              <div className="elementor-element elementor-element-736c883 elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="736c883" data-widget_type="image-box.default">
                <div className="elementor-widget-container">
                  <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="controll-1.png" className="elementor-animation-shrink attachment-full size-full wp-image-1198" decoding="async" height={155} loading="lazy" sizes="(max-width: 155px) 100vw, 155px" src="/assets/images/controll-1_431ab690.png" srcSet="/assets/images/controll-1_431ab690.png 155w, /assets/images/controll-1-150x150_446838e2.png 150w" width={155} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Licensed Professionals</h3></div></div> </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-ba905cd e-con-full e-flex e-con e-child" data-element_type="container" data-id="ba905cd">
              <div className="elementor-element elementor-element-0370463 elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="0370463" data-widget_type="image-box.default">
                <div className="elementor-widget-container">
                  <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt className="elementor-animation-shrink attachment-full size-full wp-image-1199" decoding="async" height={154} loading="lazy" sizes="(max-width: 154px) 100vw, 154px" src="/assets/images/controll-2_9d975649.png" srcSet="/assets/images/controll-2_9d975649.png 154w, /assets/images/controll-2-150x150_09eb3e9c.png 150w" width={154} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Satisfaction Guaranteed</h3></div></div> </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-2e53013 e-con-full e-flex e-con e-child" data-element_type="container" data-id="2e53013">
              <div className="elementor-element elementor-element-3e2fb54 elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="3e2fb54" data-widget_type="image-box.default">
                <div className="elementor-widget-container">
                  <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="7 States Pest Control" className="elementor-animation-shrink attachment-full size-full wp-image-1200" decoding="async" height={155} loading="lazy" sizes="(max-width: 155px) 100vw, 155px" src="/assets/images/controll-3_80d72978.png" srcSet="/assets/images/controll-3_80d72978.png 155w, /assets/images/controll-3-150x150_280be07d.png 150w" width={155} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Local Family Owned</h3></div></div> </div>
              </div>
            </div>
          </div>
        </div>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-f58628f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="f58628f">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-b850c86" data-element_type="column" data-id="b850c86">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-bfd6cde elementor-widget elementor-widget-heading animated fadeInLeft" data-element_type="widget" data-id="bfd6cde" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Frequently Asked Questions</h2> </div>
                </div>
                <div className="elementor-element elementor-element-fb5a99f elementor-widget elementor-widget-elementskit-accordion" data-element_type="widget" data-id="fb5a99f" data-widget_type="elementskit-accordion.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con">
                      <div className="elementskit-accordion accoedion-primary" id="accordion-6a16dbbd22b97">
                        <div className="elementskit-card active">
                          <div className="elementskit-card-header" id="primaryHeading-0-fb5a99f">
                            <a aria-controls="Collapse-6f491396a16dbbd22b97" aria-expanded="true" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-6f491396a16dbbd22b97" href="#collapse-6f491396a16dbbd22b97">
                              <span className="ekit-accordion-title">1. What is the cost of fox trapping services in Melbourne?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-0-fb5a99f" className="show collapse" data-parent="#accordion-6a16dbbd22b97" id="Collapse-6f491396a16dbbd22b97">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p><span style={{fontWeight: 400}}>Fox trapping services in Melbourne typically cost between $200 to $600 depending on property size and infestation level. </span><b>7 States Pest Control</b><span style={{fontWeight: 400}}> offers reliable and cost-effective fox control solutions.</span></p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-1-fb5a99f">
                            <a aria-controls="Collapse-042b3786a16dbbd22b97" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-042b3786a16dbbd22b97" href="#collapse-042b3786a16dbbd22b97">
                              <span className="ekit-accordion-title">2. Is fox trapping legal in Melbourne?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-1-fb5a99f" className="collapse" data-parent="#accordion-6a16dbbd22b97" id="Collapse-042b3786a16dbbd22b97">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p><span style={{fontWeight: 400}}>Yes, fox trapping is legal in Melbourne when carried out by licensed professionals following local wildlife regulations. </span><b>7 States Pest Control</b><span style={{fontWeight: 400}}> ensures all services comply with Australian laws.</span></p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-2-fb5a99f">
                            <a aria-controls="Collapse-fcc8da46a16dbbd22b97" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-fcc8da46a16dbbd22b97" href="#collapse-fcc8da46a16dbbd22b97">
                              <span className="ekit-accordion-title">3. How do professionals trap and remove foxes?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-2-fb5a99f" className="collapse" data-parent="#accordion-6a16dbbd22b97" id="Collapse-fcc8da46a16dbbd22b97">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p><span style={{fontWeight: 400}}>Professionals use safe and humane trapping methods along with proper relocation or control techniques. </span><b>7 States Pest Control</b><span style={{fontWeight: 400}}> uses effective and ethical fox control strategies.</span></p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-3-fb5a99f">
                            <a aria-controls="Collapse-247bb1b6a16dbbd22b97" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-247bb1b6a16dbbd22b97" href="#collapse-247bb1b6a16dbbd22b97">
                              <span className="ekit-accordion-title">4. How quickly can fox removal be done in Melbourne?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-3-fb5a99f" className="collapse" data-parent="#accordion-6a16dbbd22b97" id="Collapse-247bb1b6a16dbbd22b97">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p><span style={{fontWeight: 400}}>Fox trapping and removal time depends on activity level, but </span><b>7 States Pest Control</b><span style={{fontWeight: 400}}> offers prompt and efficient service to handle urgent situations.</span></p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-4-fb5a99f">
                            <a aria-controls="Collapse-43386d36a16dbbd22b97" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-43386d36a16dbbd22b97" href="#collapse-43386d36a16dbbd22b97">
                              <span className="ekit-accordion-title">5. How can I prevent foxes from entering my property?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-4-fb5a99f" className="collapse" data-parent="#accordion-6a16dbbd22b97" id="Collapse-43386d36a16dbbd22b97">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p><span style={{fontWeight: 400}}>To prevent foxes, secure food sources, close entry points, and maintain clean surroundings. </span><b>7 States Pest Control</b><span style={{fontWeight: 400}}> also provides expert advice and prevention solutions.</span></p> </div>
                          </div>
                        </div>
                      </div>
                    </div> </div>
                </div>
              </div>
            </div>
            <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-531ae82" data-element_type="column" data-id="531ae82">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-79b481a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="79b481a">
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-e555e79" data-element_type="column" data-id="e555e79">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-e9f2f6e elementor-widget elementor-widget-image" data-element_type="widget" data-id="e9f2f6e" data-widget_type="image.default">
                          <div className="elementor-widget-container">
                            <img alt="7 States Pest Control" className="attachment-full size-full wp-image-778" decoding="async" height={1280} loading="lazy" sizes="(max-width: 1280px) 100vw, 1280px" src="/assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1_ecbbd918.jpg" srcSet="/assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1_ecbbd918.jpg 1280w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-300x30_e03d7ebf.jpg 300w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-1024x1_359a34a8.jpg 1024w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-150x15_3201d1bd.jpg 150w, /assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-768x76_a05df40f.jpg 768w" width={1280} /> </div>
                        </div>
                        <div className="elementor-element elementor-element-8a2dcb0 elementor-widget__width-initial elementor-absolute ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box animated slideInLeft" data-element_type="widget" data-id="8a2dcb0" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;_animation&quot;:&quot;slideInLeft&quot;}" data-widget_type="elementskit-icon-box.default">
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
                            <h2 className="elementor-heading-title elementor-size-default">Clients Reviews</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-e19f5a7 elementor-widget elementor-widget-heading animated fadeInLeft" data-element_type="widget" data-id="e19f5a7" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.reviews?.eyebrow, '7 States Pest Control for Reliable Pest Management Solutions')}</h2> </div>
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
                            <h6>EXCELLENT</h6> </div>
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
                            <p className="elementor-heading-title elementor-size-default">Based on&nbsp;<strong>45 reviews</strong></p> </div>
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
        <div className="elementor-element elementor-element-fdb40e7 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="fdb40e7">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-575a21f elementor-widget elementor-widget-heading animated fadeInDown" data-element_type="widget" data-id="575a21f" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Our Latest Article</h2> </div>
            </div>
            <div className="elementor-element elementor-element-2fd4f30 elementor-widget elementor-widget-heading animated fadeInRight" data-element_type="widget" data-id="2fd4f30" data-settings="{&quot;_animation&quot;:&quot;fadeInRight&quot;}" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Pest Problems? Here's Why Read Might Be Your Secret Weapon.</h2> </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-5752800 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="5752800">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-87a3755 elementor-widget elementor-widget-elementskit-blog-posts" data-element_type="widget" data-id="87a3755" data-widget_type="elementskit-blog-posts.default">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con"> <div className="row post-items" id="post-items--87a3755">
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
                            <h2 className="elementor-heading-title elementor-size-default">Ideas to reality</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-0d6851b elementor-widget elementor-widget-heading" data-element_type="widget" data-id="0d6851b" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Talk to Us Today to Learn More</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-4852935 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="4852935" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>Do you have any specific questions about us, our services, or anything related to pest infestation issues? Call us today on&nbsp;<SitePhoneLink />&nbsp;or use our contact form to connect with our&nbsp;<b>7 States Pest Control</b>. You can get answers to your questions, get upfront quotes for the&nbsp;<b>7 States Pest Control</b>&nbsp;issues, and receive high-quality tailored services.</p> </div>
                        </div>
                        <div className="elementor-element elementor-element-3a9556f elementor-widget elementor-widget-button" data-element_type="widget" data-id="3a9556f" data-widget_type="button.default">
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
