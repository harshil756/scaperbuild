import CmsHtml from '../home/CmsHtml.jsx'
import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'
import { Link } from 'react-router-dom'

const DEFAULT_ITEMS = [
  {
    question: '1. What makes 7 States Pest Control the best pest control service in Melbourne?',
    answer_html:
      '<p>&nbsp;<b>7 States Pest Control</b>&nbsp;provides top-rated&nbsp;<b>pest control service in Melbourne</b>, using advanced techniques and eco-friendly products to eliminate pests quickly and safely. Our experienced team handles all types of infestations, ensuring long-term protection.</p>',
  },
  {
    question: '2. Where can I find reliable pest control in Melbourne CBD?',
    answer_html:
      '<p>For fast and effective&nbsp;<b>pest control Melbourne CBD</b>, trust&nbsp;<b>7 States Pest Control</b>. We serve both residential and commercial properties in the central business district with tailored pest management solutions.</p>',
  },
  {
    question: '3. How do I choose a professional pest exterminator in Melbourne?',
    answer_html:
      '<p>Look for licensed, experienced providers like&nbsp;<b>7 States Pest Control</b>. As a leading&nbsp;<b>pest exterminator Melbourne</b>, we offer prompt inspections, thorough extermination, and guaranteed results at competitive rates.</p>',
  },
  {
    question: '4. Is there a trusted pest removal company in Melbourne?',
    answer_html:
      '<p>&nbsp;Yes,&nbsp;<b>7 States Pest Control</b>&nbsp;is your go-to expert for&nbsp;<b>pest removal Melbourne</b>. We identify the root cause of infestations and apply targeted treatments to remove pests from your home or business permanently.</p>',
  },
  {
    question: '5. Why should I invest in pest control in Melbourne for my home or office?',
    answer_html:
      '<p>Regular&nbsp;<b>pest control in Melbourne</b>&nbsp;helps protect your property from damage and health risks.&nbsp;<b>7 States Pest Control</b>&nbsp;offers comprehensive services that keep your environment pest-free and comfortable year-round.</p>',
  },
]

export default function AntFaqSection({ faq }) {
  const items = faq?.items?.length ? faq.items : DEFAULT_ITEMS
  const sidebarImage = cmsMediaUrl(
    faq?.sidebar_image,
    '/assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1_ecbbd918.jpg',
  )
  const cta = faq?.sidebar_cta ?? {}
  const ctaTitle = cta.title ?? faq?.sidebar_cta_title
  const ctaBody = cta.body ?? faq?.sidebar_cta_body
  const ctaButtonLabel = cta.button_label ?? faq?.sidebar_cta_button_label
  const ctaButtonUrl = cta.button_url ?? faq?.sidebar_cta_button_url

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-f58628f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="f58628f">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-b850c86" data-element_type="column" data-id="b850c86">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-bfd6cde elementor-widget elementor-widget-heading animated fadeInLeft" data-element_type="widget" data-id="bfd6cde" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">{cmsText(faq?.title, 'Frequently Asked Questions')}</h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-fb5a99f elementor-widget elementor-widget-elementskit-accordion" data-element_type="widget" data-id="fb5a99f" data-widget_type="elementskit-accordion.default">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="elementskit-accordion accoedion-primary" id="accordion-6a15ae3c87b79">
                    {items.map((item, index) => {
                      const collapseId = `Collapse-ant-faq-${index}`
                      const headingId = `primaryHeading-${index}-fb5a99f`
                      const isFirst = index === 0

                      return (
                        <div key={item.question ?? index} className={`elementskit-card${isFirst ? ' active' : ''}`}>
                          <div className="elementskit-card-header" id={headingId}>
                            <a
                              aria-controls={collapseId}
                              aria-expanded={isFirst}
                              className="ekit-accordion--toggler elementskit-btn-link collapsed"
                              data-ekit-toggle="collapse"
                              data-target={`#${collapseId}`}
                              href={`#collapse-${collapseId}`}
                            >
                              <span className="ekit-accordion-title">{cmsText(item.question, '')}</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1" />
                                </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1" />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            aria-labelledby={headingId}
                            className={`${isFirst ? 'show ' : ''}collapse`}
                            data-parent="#accordion-6a15ae3c87b79"
                            id={collapseId}
                          >
                            <div className="elementskit-card-body ekit-accordion--content">
                              <CmsHtml html={item.answer_html ?? item.answer} />
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
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
                        <img alt="7 States Pest Control" className="attachment-full size-full wp-image-778" decoding="async" height={1280} loading="lazy" src={sidebarImage} width={1280} />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-8a2dcb0 elementor-widget__width-initial elementor-absolute ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box animated slideInLeft" data-element_type="widget" data-id="8a2dcb0" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;_animation&quot;:&quot;slideInLeft&quot;}" data-widget_type="elementskit-icon-box.default">
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
                            <div className="box-body">
                              <h3 className="elementskit-info-box-title">{cmsText(ctaTitle, 'Any questions you want to ask?')}</h3>
                              <p>{cmsText(ctaBody, 'Find answers to common questions about our pest control services, treatments, safety, and scheduling.')}</p>
                              <div className="box-footer disable_hover_button">
                                <div className="btn-wraper">
                                  <Link className="elementskit-btn whitespace--normal" to={cmsText(ctaButtonUrl, '/contact-us')}>
                                    {cmsText(ctaButtonLabel, 'Contact Us')}
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
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
