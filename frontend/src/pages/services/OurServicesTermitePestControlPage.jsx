import PhoneNumberInput from '../../components/PhoneNumberInput.jsx'
import ServiceCmsContentBlocks from '../../components/service/ServiceCmsContentBlocks.jsx'
import ServiceFaqCms from '../../components/service/ServiceFaqCms.jsx'
import { cmsText } from '../../utils/cmsMedia.js'
import usePageCms from '../../hooks/usePageCms.js'
import ServiceCmsStyles from '../../components/service/ServiceCmsStyles.jsx'
import CmsHtml from '../../components/home/CmsHtml.jsx'
import usePageMeta from '../../hooks/usePageMeta.js'
import { Link } from 'react-router-dom'

export default function OurServicesTermitePestControlPage() {
  const { page, content: c } = usePageCms('our-services-termite-pest-control')
  usePageMeta('our_services_termite_pest_control', page)

  return (
    <>
      <ServiceCmsStyles content={c} heroBgId="a342089" ctaBgId="057b4d3" />
      <ServiceFaqCms faq={c?.faq} accordionWidgetId="fb5a99f" />
      <ServiceCmsContentBlocks content={c} />
      <div className="elementor elementor-10357" data-elementor-id={10357} data-elementor-post-type="page" data-elementor-type="wp-page">
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
                        <span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb_current, 'termite pest control')}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="elementor-element elementor-element-5b29971 elementor-widget elementor-widget-heading animated fadeInDown" data-element_type="widget" data-id="5b29971" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'termite pest control')}</h2> </div>
              </div>
              <div className="elementor-element elementor-element-f59a88c elementor-widget elementor-widget-heading animated fadeInLeft" data-element_type="widget" data-id="f59a88c" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.heading, 'Get Professional Termite Control in Melbourne')}</h1> </div>
              </div>
              <div className="elementor-element elementor-element-424a488 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="424a488" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <CmsHtml html={c?.hero?.intro} />
                </div>
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
                    <input name="post_id" type="hidden" defaultValue={10357} />
                    <input name="form_id" type="hidden" defaultValue="cad66c8" />
                    <input name="referer_title" type="hidden" defaultValue="Termite Control Melbourne | Termite Treatment & Pest Control" />
                    <input name="queried_id" type="hidden" defaultValue={10357} />
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
        <div className="elementor-element elementor-element-6dc7fcc e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="6dc7fcc" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-548af80 e-con-full e-flex e-con e-child" data-element_type="container" data-id="548af80">
              <div className="elementor-element elementor-element-f3d971c e-con-full e-flex e-con e-child" data-element_type="container" data-id="f3d971c">
                <div className="elementor-element elementor-element-78bc2db e-con-full e-flex e-con e-child" data-element_type="container" data-id="78bc2db">
                  <div className="elementor-element elementor-element-6501e7d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="6501e7d" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Termite special</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-578d989 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="578d989" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Types of Termite Problems We Control</h2> </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-c0c2f1e e-con-full e-flex e-con e-child" data-element_type="container" data-id="c0c2f1e">
                  <div className="elementor-element elementor-element-f6bb8ec elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="f6bb8ec" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p><span style={{fontWeight: 400}}>Termites can cause severe damage if not treated early. Our </span><b>termite control Melbourne</b><span style={{fontWeight: 400}}> services are designed to handle all types of termite infestations, including:</span></p> </div>
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
                    <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt className="attachment-full size-full wp-image-10366" decoding="async" fetchpriority="high" height={1442} sizes="(max-width: 2560px) 100vw, 2560px" src="/assets/images/coptotermes-subterranean-termites-scaled_145f2b04.webp" srcSet="/assets/images/coptotermes-subterranean-termites-scaled_145f2b04.webp 2560w, /assets/images/coptotermes-subterranean-termites-300x169_c7de29f6.webp 300w, /assets/images/coptotermes-subterranean-termites-1024x577_cd752353.webp 1024w, /assets/images/coptotermes-subterranean-termites-768x433_c5faf18b.webp 768w, /assets/images/coptotermes-subterranean-termites-1536x865_054df65a.webp 1536w, /assets/images/coptotermes-subterranean-termites-2048x1154_c04be06b.webp 2048w" width={2560} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">1. Subterranean Termites</h3><p className="elementor-image-box-description">Subterranean termites are the most destructive species in Australia. They build mud tunnels and attack wooden structures from below ground. Our professional termite treatment Melbourne solutions target the colony at its source, making us the most trusted name in termite pest control Melbourne across the city.
                        </p></div></div> </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-9cd4270 e-con-full e-transform e-transform e-flex e-con e-child" data-element_type="container" data-id="9cd4270" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;_transform_translateY_effect_hover&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_hover_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_hover_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}">
                <div className="elementor-element elementor-element-939910b elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="939910b" data-widget_type="image-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="Timber & Structural Damage" className="attachment-full size-full wp-image-10367" decoding="async" height={1365} sizes="(max-width: 2048px) 100vw, 2048px" src="/assets/images/termite-structural-damage-scaled-1_937b4dbe.jpg" srcSet="/assets/images/termite-structural-damage-scaled-1_937b4dbe.jpg 2048w, /assets/images/termite-structural-damage-scaled-1-300x200_0b4e1f12.jpg 300w, /assets/images/termite-structural-damage-scaled-1-1024x683_c6350a25.jpg 1024w, /assets/images/termite-structural-damage-scaled-1-768x512_c749727b.jpg 768w, /assets/images/termite-structural-damage-scaled-1-1536x1024_03627f59.jpg 1536w" width={2048} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">2. Timber &amp; Structural Damage</h3><p className="elementor-image-box-description">Termites feed on timber inside walls, flooring, roofing, and support beams. Our advanced termite pest control services protect your property from further structural weakening — delivering reliable termite control Melbourne homeowners trust, with transparent termite protection cost Melbourne for every service.
                        </p></div></div> </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-9fb9211 e-con-full e-transform e-transform e-flex e-con e-child" data-element_type="container" data-id="9fb9211" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;_transform_translateY_effect_hover&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_hover_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_hover_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}">
                <div className="elementor-element elementor-element-61c1aef elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="61c1aef" data-widget_type="image-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt className="attachment-full size-full wp-image-10368" decoding="async" height={1667} loading="lazy" sizes="(max-width: 2500px) 100vw, 2500px" src="/assets/images/5CommonCausesOfATermiteInfestation_280ed3f8.webp" srcSet="/assets/images/5CommonCausesOfATermiteInfestation_280ed3f8.webp 2500w, /assets/images/5CommonCausesOfATermiteInfestation-300x200_58dc690a.webp 300w, /assets/images/5CommonCausesOfATermiteInfestation-1024x683_55772f17.webp 1024w, /assets/images/5CommonCausesOfATermiteInfestation-768x512_dc0789f3.webp 768w, /assets/images/5CommonCausesOfATermiteInfestation-1536x1024_e5050c86.webp 1536w, /assets/images/5CommonCausesOfATermiteInfestation-2048x1366_a5fde439.webp 2048w" width={2500} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">3. Active Termite Infestations</h3><p className="elementor-image-box-description">If you see hollow wood, mud tubes, or termite swarmers, immediate termite removal Melbourne is required. Quick termite control can prevent thousands of dollars in repairs — contact our termite specialist Melbourne before the damage spreads.
                        </p></div></div> </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-b744193 e-con-full e-transform e-transform e-flex e-con e-child" data-element_type="container" data-id="b744193" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;_transform_translateY_effect_hover&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_hover_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_hover_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}">
                <div className="elementor-element elementor-element-6ebb5d2 elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="6ebb5d2" data-widget_type="image-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="Recurrent Termite Attacks" className="attachment-full size-full wp-image-10369" decoding="async" height={1131} loading="lazy" sizes="(max-width: 1698px) 100vw, 1698px" src="/assets/images/termites_2_b4d09264.jpg" srcSet="/assets/images/termites_2_b4d09264.jpg 1698w, /assets/images/termites_2-300x200_0b51a6a2.jpg 300w, /assets/images/termites_2-1024x682_f40c50c0.jpg 1024w, /assets/images/termites_2-768x512_d9cc54a4.jpg 768w, /assets/images/termites_2-1536x1023_8e87f225.jpg 1536w" width={1698} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">4. Recurrent Termite Attacks</h3><p className="elementor-image-box-description">Properties without a proper termite barrier are highly vulnerable to repeat infestations. We install long-lasting termite barrier systems to prevent termites from returning — our termite management Melbourne solutions ensure your property stays protected all year round.
                        </p></div></div> </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="elementor-element elementor-element-167fefb e-grid e-con-boxed e-con e-parent" data-id="167fefb" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-432d6d4 elementor-widget elementor-widget-text-editor" data-id="432d6d4" data-element_type="widget" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                <h3><b>Why Choose Our Termite Reticulation Refill Service</b></h3><p><span style={{fontWeight: 400}}>A termite barrier does not last forever, and skipping maintenance can leave your home exposed without you even realising it. Our </span><b>termite reticulation refill Melbourne</b><span style={{fontWeight: 400}}> service ensures your existing protection stays fully active, giving you continuous peace of mind year after year.</span></p><p><span style={{fontWeight: 400}}>We start every job with a proper </span><b>termite inspection treatment</b><span style={{fontWeight: 400}}>, checking the condition of your reticulation system before any chemical is applied. This is followed by a complete </span><b>termite inspection and treatment</b><span style={{fontWeight: 400}}>, so any early signs of activity are addressed alongside the refill itself. You will also receive a detailed </span><b>termite inspection &amp; report</b><span style={{fontWeight: 400}}>, outlining exactly what was found and what action was taken, starting from just </span><b>$299</b><span style={{fontWeight: 400}}> for a full termite inspection.</span></p><p><span style={{fontWeight: 400}}>Our refill process is suited to both common house types in Melbourne. For </span><b>stump houses with subfloor access</b><span style={{fontWeight: 400}}>, the focus is on maintaining a strong </span><b>termite chemical barrier</b><span style={{fontWeight: 400}}> around the perimeter and subfloor area, ensuring full protection without the need for a reticulation system. For </span><b>concrete slab houses</b><span style={{fontWeight: 400}}>, our technicians top up the </span><b>termite chemical barrier</b><span style={{fontWeight: 400}}> through the existing </span><b>termite reticulation system installation</b><span style={{fontWeight: 400}}> embedded in the slab, ensuring full coverage without any need to break or disturb the concrete. A complete </span><b>termite reticulation system installation</b><span style={{fontWeight: 400}}> starts from </span><b>$1999.</b></p><p><span style={{fontWeight: 400}}>Whether your home has an older </span><b>termite reticulation system installation</b><span style={{fontWeight: 400}}> or a more recent setup, our technicians know how to safely top up the </span><b>termite chemical barrier</b><span style={{fontWeight: 400}}> through the existing piping network, without disturbing your landscaping or flooring.</span></p><p><span style={{fontWeight: 400}}>Many homeowners delay their </span><b>termite reticulation refill</b><span style={{fontWeight: 400}}> simply because they are unsure of the price. We keep our </span><b>termite reticulation system refill cost</b><span style={{fontWeight: 400}}> transparent and affordable, with refills starting from just </span><b>$300,</b><span style={{fontWeight: 400}}> especially when compared to the expense of repairing termite damage. With our team, you get reliable protection, clear reporting, and fair pricing, all in one visit.</span></p>								</div>
            </div>
              <div className="elementor-element elementor-element-4070229 elementor-widget elementor-widget-image" data-id="4070229" data-element_type="widget" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <img loading="lazy" decoding="async" width={800} height={800} src="/assets/images/Untitled-design-1_df95d78a.png" className="attachment-large size-large wp-image-10692" alt="Termite reticulation refill melbounre" srcSet="/assets/images/Untitled-design-1_df95d78a.png 1024w, /assets/images/Untitled-design-1-300x300_55688bd7.png 300w, /assets/images/Untitled-design-1-150x150_441fc4fa.png 150w, /assets/images/Untitled-design-1-768x768_7294251c.png 768w" sizes="(max-width: 800px) 100vw, 800px" />															</div>
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
                            <h2 className="elementor-heading-title elementor-size-default">why Termite coming</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-6d22bd0 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="6d22bd0" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Why Are Termites Coming Into Your Property?</h2> </div>
                        </div>
                        <div className="elementor-element elementor-element-59fd6df custom-list elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="59fd6df" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <ol><li aria-level={1} style={{fontWeight: 400}}><b>Moisture Around Foundations</b><span style={{fontWeight: 400}}> – Damp areas attract termites and accelerate </span><b>termite pest control</b><span style={{fontWeight: 400}}> needs</span></li><li aria-level={1} style={{fontWeight: 400}}><b>Wood-to-Soil Contact</b><span style={{fontWeight: 400}}> – Direct timber contact allows easy colony access</span></li><li aria-level={1} style={{fontWeight: 400}}><b>Cracks in Walls &amp; Slabs</b><span style={{fontWeight: 400}}> – Common entry points that require </span><b>termite inspection Melbourne</b></li><li aria-level={1} style={{fontWeight: 400}}><b>Poor Ventilation</b><span style={{fontWeight: 400}}> – Creates ideal breeding conditions for hidden infestations</span></li><li aria-level={1} style={{fontWeight: 400}}><b>No Termite Barrier Installed</b><span style={{fontWeight: 400}}> – Properties without a </span><b>termite barrier</b><span style={{fontWeight: 400}}> face significantly higher infestation risk</span></li></ol> </div>
                        </div>
                        <div className="elementor-element elementor-element-2e1c8d0 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="2e1c8d0" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p className="font-claude-response-body break-words whitespace-normal leading-[1.7]">If termite activity continues, professional <strong>termite treatment Melbourne</strong> is the safest and most effective solution for long-term <strong>termite control Melbourne</strong> protection — get a free quote today and know your exact <strong>termite treatment cost Melbourne</strong> upfront.</p> </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-60d1b76" data-element_type="column" data-id="60d1b76" data-settings="{&quot;animation&quot;:&quot;none&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-dc6bb88 elementor-widget elementor-widget-image" data-element_type="widget" data-id="dc6bb88" data-widget_type="image.default">
                          <div className="elementor-widget-container">
                            <img alt="Recurrent Termite Attacks" className="attachment-large size-large wp-image-10370" decoding="async" height={408} loading="lazy" sizes="(max-width: 612px) 100vw, 612px" src="/assets/images/istockphoto-1284882498-612x612-1_8bf7b4c6.jpg" srcSet="/assets/images/istockphoto-1284882498-612x612-1_8bf7b4c6.jpg 612w, /assets/images/istockphoto-1284882498-612x612-1-300x200_bd283e57.jpg 300w" width={612} /> </div>
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
                        <h2 className="elementor-heading-title elementor-size-default">What Problems Can Termites Cause?</h2> </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-e8edb2b e-con-full e-flex e-con e-child" data-element_type="container" data-id="e8edb2b">
                    <div className="elementor-element elementor-element-ea758e9 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="ea758e9" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Termites may remain hidden, but the damage they cause can be devastating. Here are the major risks:</p> </div>
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
                              <img alt="termite control melbourne" decoding="async" loading="lazy" src="/assets/images/broken-rjdsn0kngludq7mzovohksard3pp3aitdz91uuk3z4_7524415e.png" title="broken" />
                            </div>
                            <div className="elementskit-box-body ekit-image-box-body">
                              <div className="elementskit-box-content ekit-image-box-body-inner">
                                <h3 className="elementskit-info-box-title">
                                  Threat to Property Structure
                                </h3>
                                <div className="elementskit-box-style-content">
                                  Termites silently damage timber structures, walls, flooring, and foundations. Without professional termite control Melbourne, structural safety can be seriously compromised.                  </div>
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
                                  Termites feed on wooden beams, roof frames, doors, and flooring. Our expert termite treatment Melbourne protects homes and commercial buildings from long-term structural damage.                  </div>
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
                              <img alt="termite control" decoding="async" loading="lazy" src="/assets/images/property-1-rjdsqvork34tgi0x4jt9tt6za4o0qhv393swvstue8_63ed7d11.png" title="property (1)" />
                            </div>
                            <div className="elementskit-box-body ekit-image-box-body">
                              <div className="elementskit-box-content ekit-image-box-body-inner">
                                <h3 className="elementskit-info-box-title">
                                  Hidden &amp; Expensive Damage
                                </h3>
                                <div className="elementskit-box-style-content">
                                  Unlike visible pests, termites destroy timber from the inside. Professional termite pest control is essential to detect hidden infestations before repair costs increase.                  </div>
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
                              <img alt="termite treatment melbourne" decoding="async" loading="lazy" src="/assets/images/flood-rjdsw9binyhvw67npvif3gbxni5ms57snq6xqsuqsg_b7d38bf4.png" title="flood" />
                            </div>
                            <div className="elementskit-box-body ekit-image-box-body">
                              <div className="elementskit-box-content ekit-image-box-body-inner">
                                <h3 className="elementskit-info-box-title">
                                  Environmental &amp; Moisture Risks
                                </h3>
                                <div className="elementskit-box-style-content">
                                  Moisture around foundations and poor drainage attract termites. Installing a proper termite barrier helps prevent future termite infestations in Melbourne properties.                  </div>
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
                              <img alt="diagram" decoding="async" loading="lazy" src="/assets/images/diagram-rjdsz4prjqffda1gy47dpq8mzw00aum9pxycj8lfs0_10e82d62.png" title="diagram" />
                            </div>
                            <div className="elementskit-box-body ekit-image-box-body">
                              <div className="elementskit-box-content ekit-image-box-body-inner">
                                <h3 className="elementskit-info-box-title">
                                  Rapid Colony Growth
                                </h3>
                                <div className="elementskit-box-style-content">
                                  Termite colonies grow quickly and spread silently. Early termite removal Melbourne prevents population growth and widespread property damage.                  </div>
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
                              <img alt="termite pest control" decoding="async" loading="lazy" src="/assets/images/house-with-money-symbol-rjdt1ffk95knqypbj3yjt5d79sob47q_0b42aaeb.png" title="house-with-money-symbol" />
                            </div>
                            <div className="elementskit-box-body ekit-image-box-body">
                              <div className="elementskit-box-content ekit-image-box-body-inner">
                                <h3 className="elementskit-info-box-title">
                                  Business &amp; Investment Risks
                                </h3>
                                <div className="elementskit-box-style-content">
                                  For businesses and property investors, termite damage can reduce property value and cause financial loss. Professional termite control ensures long-term protection and peace of mind.                  </div>
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
                      <h2 className="elementor-heading-title elementor-size-default">7. Monitor Signs of Termite Activity</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-acb9541 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="acb9541" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Watch for mud tubes along walls — call our termite specialist Melbourne immediately</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Check for hollow-sounding wood with professional termite inspection Melbourne</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Look for discarded wings near windows and doors</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Act quickly with termite removal Melbourne before damage spreads</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-6ffb5b4 e-con-full e-flex e-con e-child" data-element_type="container" data-id="6ffb5b4" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-element elementor-element-d5d1b1b elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d5d1b1b" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">8. Hire Professional Termite Control Melbourne</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-b50781c elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="b50781c" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p><span style={{fontWeight: 400}}>If termites persist, professional </span><b>termite control Melbourne</b><span style={{fontWeight: 400}}> is the safest solution. Experts provide effective </span><b>termite treatment Melbourne</b><span style={{fontWeight: 400}}>, complete </span><b>termite removal Melbourne</b><span style={{fontWeight: 400}}>, and long-lasting </span><b>termite barrier</b><span style={{fontWeight: 400}}> protection to prevent re-infestation — backed by experienced </span><b>termite pest control Melbourne</b><span style={{fontWeight: 400}}> specialists you can trust. We also offer </span><Link to="/wasp-removal-melbourne"><b>wasp nest control Melbourne</b></Link><span style={{fontWeight: 400}}> and other pest management services for complete property protection.</span></p> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-f5c5111 e-flex e-con-boxed e-con e-child" data-element_type="container" data-id="f5c5111">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-d1d5604 e-con-full e-flex e-con e-child" data-element_type="container" data-id="d1d5604" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-element elementor-element-e0495b8 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="e0495b8" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">4. Seal Entry Points</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-cb3d33f elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="cb3d33f" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Repair cracks in slabs and walls</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Close gaps around plumbing lines</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Seal foundation openings to strengthen your termite barrier</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Fix damaged expansion joints</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-594c8ee e-con-full e-flex e-con e-child" data-element_type="container" data-id="594c8ee" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-element elementor-element-79db49d elementor-widget elementor-widget-heading" data-element_type="widget" data-id="79db49d" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">5. Schedule Regular Termite Inspections</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-a55e290 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="a55e290" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Annual termite inspection Melbourne for early detection</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Early detection of hidden activity</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Identify structural vulnerabilities</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Prevent costly termite treatment Melbourne repairs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-378f25d e-con-full e-flex e-con e-child" data-element_type="container" data-id="378f25d" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-element elementor-element-8d109a3 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="8d109a3" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">6. Remove Termite Food Sources</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-8c84a46 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="8c84a46" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Clear wooden debris from yard</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Remove old tree stumps</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Avoid mulch buildup near walls — reduces need for termite pest control</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Dispose of untreated timber scraps identified during termite inspection Melbourne</span>
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
                      <h2 className="elementor-heading-title elementor-size-default">1. Reduce Moisture Around Property</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-446fbbb elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="446fbbb" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Fix leaking pipes and taps immediately</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Improve drainage around foundations</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Ensure proper ventilation in crawl spaces</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Avoid water accumulation near walls — a key trigger for termite pest control needs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-b06aef9 e-con-full e-flex e-con e-child" data-element_type="container" data-id="b06aef9" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-element elementor-element-d668ba4 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="d668ba4" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">2. Install a Termite Barrier</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-a4646d8 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="a4646d8" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Apply chemical termite barrier systems for long-term termite control</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Use physical termite barrier protection</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Ensure full perimeter coverage with professional termite pest control Melbourne</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Maintain barrier effectiveness annually</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-a61947a e-con-full e-flex e-con e-child" data-element_type="container" data-id="a61947a" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-element elementor-element-8da92f1 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="8da92f1" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">3. Eliminate Wood-to-Soil Contact</h2> </div>
                  </div>
                  <div className="elementor-element elementor-element-5750a6f elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="5750a6f" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Keep timber structures elevated</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Store firewood away from foundations</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Avoid direct soil contact with decks — a common trigger for termite removal Melbourne</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" /></svg> </span>
                          <span className="elementor-icon-list-text">Replace damaged wooden posts</span>
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
                      <h2 className="elementor-heading-title elementor-size-default">How to Prevent Termite Infestations?</h2> </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-3b60541 e-con-full e-flex e-con e-child" data-element_type="container" data-id="3b60541">
                  <div className="elementor-element elementor-element-7696069 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="7696069" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p className="font-claude-response-body break-words whitespace-normal leading-[1.7]">Termites are silent destroyers that often remain hidden until significant damage has already occurred. Preventing termite infestations requires proactive steps to reduce moisture, eliminate wood-to-soil contact, and install a proper <strong>termite barrier</strong>. Here are some effective ways to protect your property with professional <strong>termite control Melbourne</strong> solutions — because early <strong>termite management Melbourne</strong> is always better than costly repairs.</p> </div>
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

        <div className="elementor-element elementor-element-6a9db2f e-grid e-con-boxed e-con e-parent" data-id="6a9db2f" data-element_type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-2eaba90 elementor-widget elementor-widget-text-editor" data-id="2eaba90" data-element_type="widget" data-widget_type="text-editor.default">
          <div className="elementor-widget-container">
            <h3><b>Termite Treatment Cost: What You Are Paying For</b></h3><p><span style={{fontWeight: 400}}>Understanding what you are paying for helps you make an informed decision about protecting your home. Termite treatment costs vary based on property size, accessibility, existing infrastructure, and the type of service required.</span></p><p><span style={{fontWeight: 400}}>A </span><b>termite inspection treatment</b><span style={{fontWeight: 400}}> starting from </span><b>$299</b><span style={{fontWeight: 400}}> covers a full property assessment, checking subfloors, roof voids, and perimeter areas for signs of activity, along with a detailed </span><b>termite inspection &amp; report</b><span style={{fontWeight: 400}}> you can refer back to.</span></p><p><span style={{fontWeight: 400}}>A </span><b>termite reticulation refill</b><span style={{fontWeight: 400}}> starting from </span><b>$300 </b><span style={{fontWeight: 400}}>involves topping up the chemical in your existing </span><b>termite reticulation system installation</b><span style={{fontWeight: 400}}>, using the embedded piping network. The cost reflects the chemical used, system size, and accessibility of the property.</span></p><p><span style={{fontWeight: 400}}>A complete </span><b>termite reticulation system installation</b><span style={{fontWeight: 400}}> starting from</span><b> $1999</b><span style={{fontWeight: 400}}> is a larger investment, as it involves installing a network of pipes around the perimeter, designed to last for years and make future refills quick and easy.</span></p><p><span style={{fontWeight: 400}}>For stump houses, a </span><b>termite chemical barrier</b><span style={{fontWeight: 400}}> is applied around the internal and external walls, covering each and every stump to create complete protection from all access points, also starting from </span><b>$1999.</b></p><p><span style={{fontWeight: 400}}>If active termites are found during the inspection, we also provide a targeted spot treatment alongside the </span><b>termite chemical barrier</b><span style={{fontWeight: 400}}>, ensuring any existing infestation is treated effectively before it spreads further.&nbsp;</span></p><p><span style={{fontWeight: 400}}>While these costs may seem significant upfront, they are minor compared to the cost of repairing structural termite damage, which can run into thousands of dollars and affect the safety and value of your property.</span></p><p><span style={{fontWeight: 400}}>Prices are indicative and may vary based on property assessment.</span></p>								</div>
              </div>
          <div className="elementor-element elementor-element-eba1023 elementor-widget elementor-widget-image" data-id="eba1023" data-element_type="widget" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <img loading="lazy" decoding="async" width={800} height={704} src="/assets/images/7states_pest_collage-1024x901_64c6b4cd.jpg" className="attachment-large size-large wp-image-10714" alt="7 states pest control" srcSet="/assets/images/7states_pest_collage-1024x901_64c6b4cd.jpg 1024w, /assets/images/7states_pest_collage-300x264_441c54a4.jpg 300w, /assets/images/7states_pest_collage-768x675_3361052c.jpg 768w, /assets/images/7states_pest_collage-1536x1351_e3474a32.jpg 1536w, /assets/images/7states_pest_collage_049be0e1.jpg 1592w" sizes="(max-width: 800px) 100vw, 800px" />															</div>
          </div>
                    </div>
                      </div>


        <div className="elementor-element elementor-element-542df0a e-grid e-con-boxed e-con e-parent" data-id="542df0a" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-1a5e132 elementor-widget elementor-widget-text-editor" data-id="1a5e132" data-element_type="widget" data-widget_type="text-editor.default">
          <div className="elementor-widget-container">
            <h2>Comprehensive Termite Protection Services in Melbourne</h2><p className="isSelectedEnd">Protecting your property from termites starts with professional <strong>termite inspection and treatment</strong> services. A thorough <strong>termite inspection &amp; report</strong> helps identify existing infestations, potential risks, and areas vulnerable to termite activity. Whether you’re buying a new property or maintaining your current home, regular <strong>termite inspection treatment</strong> is essential for long-term protection.</p><p>For effective termite prevention, many Melbourne homeowners choose a <strong>termite chemical barrier</strong> or a <strong>termite reticulation system installation</strong>. A reticulation system allows termiticides to be distributed evenly around the property’s perimeter, creating a protective zone against termites. To maintain its effectiveness, regular <strong>termite reticulation refill</strong> services are required. If you’re searching for reliable <strong>termite reticulation refill Melbourne</strong> solutions, professional pest control specialists can ensure your system remains fully operational and compliant with industry standards.</p>								</div>
              </div>
          <div className="elementor-element elementor-element-239807c elementor-widget elementor-widget-image" data-id="239807c" data-element_type="widget" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <img loading="lazy" decoding="async" width={800} height={800} src="/assets/images/Untitled-design-2_b65e092b.png" className="attachment-large size-large wp-image-10706" alt="termite control melbourne" srcSet="/assets/images/Untitled-design-2_b65e092b.png 1024w, /assets/images/Untitled-design-2-300x300_578a3776.png 300w, /assets/images/Untitled-design-2-150x150_92ddee90.png 150w, /assets/images/Untitled-design-2-768x768_c45fe18c.png 768w" sizes="(max-width: 800px) 100vw, 800px" />															</div>
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
                      <div className="elementskit-accordion accoedion-primary" id="accordion-6a16e15156c69">
                        <div className="elementskit-card active">
                          <div className="elementskit-card-header" id="primaryHeading-0-fb5a99f">
                            <a aria-controls="Collapse-6f491396a16e15156c69" aria-expanded="true" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-6f491396a16e15156c69" href="#collapse-6f491396a16e15156c69">
                              <span className="ekit-accordion-title">1. What is the cost of termite control in Melbourne?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-0-fb5a99f" className="show collapse" data-parent="#accordion-6a16e15156c69" id="Collapse-6f491396a16e15156c69">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p><span style={{fontWeight: 400}}>Termite control in Melbourne typically costs between $300 to $2500 depending on infestation level and treatment type. </span><b>7 States Pest Control</b><span style={{fontWeight: 400}}> offers affordable and long-term termite solutions.</span></p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-1-fb5a99f">
                            <a aria-controls="Collapse-042b3786a16e15156c69" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-042b3786a16e15156c69" href="#collapse-042b3786a16e15156c69">
                              <span className="ekit-accordion-title">2. How do I choose the best termite control service in Melbourne?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-1-fb5a99f" className="collapse" data-parent="#accordion-6a16e15156c69" id="Collapse-042b3786a16e15156c69">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p><span style={{fontWeight: 400}}>Look for licensed experts with proven experience and advanced treatment methods. </span><b>7 States Pest Control</b><span style={{fontWeight: 400}}> is a trusted provider for effective termite control in Melbourne.</span></p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-2-fb5a99f">
                            <a aria-controls="Collapse-fcc8da46a16e15156c69" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-fcc8da46a16e15156c69" href="#collapse-fcc8da46a16e15156c69">
                              <span className="ekit-accordion-title">3. What is the most effective termite treatment?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-2-fb5a99f" className="collapse" data-parent="#accordion-6a16e15156c69" id="Collapse-fcc8da46a16e15156c69">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p><span style={{fontWeight: 400}}>The most effective treatments include chemical barriers, baiting systems, and advanced inspection methods. </span><b>7 States Pest Control</b><span style={{fontWeight: 400}}> uses modern techniques for complete termite protection.</span></p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-3-fb5a99f">
                            <a aria-controls="Collapse-247bb1b6a16e15156c69" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-247bb1b6a16e15156c69" href="#collapse-247bb1b6a16e15156c69">
                              <span className="ekit-accordion-title">4. How quickly can termite treatment be done?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-3-fb5a99f" className="collapse" data-parent="#accordion-6a16e15156c69" id="Collapse-247bb1b6a16e15156c69">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p><span style={{fontWeight: 400}}>Termite treatment can be completed within a few hours, but long-term protection may require ongoing monitoring. </span><b>7 States Pest Control</b><span style={{fontWeight: 400}}> ensures fast and reliable service.</span></p> </div>
                          </div>
                        </div>
                        <div className="elementskit-card">
                          <div className="elementskit-card-header" id="primaryHeading-4-fb5a99f">
                            <a aria-controls="Collapse-43386d36a16e15156c69" aria-expanded="false" className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target="#Collapse-43386d36a16e15156c69" href="#collapse-43386d36a16e15156c69">
                              <span className="ekit-accordion-title">5. How can I prevent termites in my home?</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" /> </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" /> </div>
                              </div>
                            </a>
                          </div>
                          <div aria-labelledby="primaryHeading-4-fb5a99f" className="collapse" data-parent="#accordion-6a16e15156c69" id="Collapse-43386d36a16e15156c69">
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p><span style={{fontWeight: 400}}>To prevent termites, keep wood away from the house, fix moisture issues, and schedule regular inspections. </span><b>7 States Pest Control</b><span style={{fontWeight: 400}}> also provides prevention plans for long-term safety.</span></p> </div>
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
                            <p>Do you have any specific questions about us, our services, or anything related to pest infestation issues? Call us today on&nbsp;<a href="tel:+61434660060">( +61 434 660 060 )</a>&nbsp;or use our contact form to connect with our&nbsp;<b>7 States Pest Control</b>.</p><p className="font-claude-response-body break-words whitespace-normal leading-[1.7]">You can get answers to your questions, get upfront quotes for all your pest control issues, and receive high-quality tailored services. Need help beyond termites? We also provide expert <Link className="underline underline underline-offset-2 decoration-1 decoration-current/40 hover:decoration-current focus:decoration-current" to="/rodent-control-in-melbourne">rodent pest control Melbourne</Link> to keep your property fully protected.</p> </div>
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
