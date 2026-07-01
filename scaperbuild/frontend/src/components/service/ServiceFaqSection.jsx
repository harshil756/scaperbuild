import CmsHtml from '../home/CmsHtml.jsx'
import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'
import { Link } from 'react-router-dom'

const DEFAULT_ITEMS = []

export default function ServiceFaqSection({
  faq,
  titleWidgetId = '251b4bd',
  accordionWidgetId = '57e8489',
  accordionParentId = 'accordion-service-faq',
  sidebarImageWidgetId = '6867be7',
  sidebarCtaWidgetId = 'df9a122',
  sectionId = 'f10d1df',
  faqColId = '3903393',
  sidebarColId = '6939443',
  sidebarSectionId = 'f149059',
  sidebarInnerColId = 'a42eae7',
}) {
  const items = faq?.items?.length ? faq.items : DEFAULT_ITEMS
  const sidebarImage = cmsMediaUrl(
    faq?.sidebar_image,
    '/assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1_ecbbd918.jpg',
  )
  const ctaTitle = faq?.sidebar_cta_title
  const ctaBody = faq?.sidebar_cta_body
  const ctaButtonLabel = faq?.sidebar_cta_button_label
  const ctaButtonUrl = faq?.sidebar_cta_button_url

  return (
    <section
      className={`elementor-section elementor-top-section elementor-element elementor-element-${sectionId} elementor-section-boxed elementor-section-height-default elementor-section-height-default`}
      data-element_type="section"
      data-id={sectionId}
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className={`elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-${faqColId}`}
          data-element_type="column"
          data-id={faqColId}
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className={`elementor-element elementor-element-${titleWidgetId} elementor-widget elementor-widget-heading`}
              data-element_type="widget"
              data-id={titleWidgetId}
              data-settings="{&quot;_animation&quot;:&quot;none&quot;}"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">{cmsText(faq?.title, 'Frequently Asked Questions')}</h2>
              </div>
            </div>
            <div
              className={`elementor-element elementor-element-${accordionWidgetId} elementor-widget elementor-widget-elementskit-accordion`}
              data-element_type="widget"
              data-id={accordionWidgetId}
              data-widget_type="elementskit-accordion.default"
            >
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="elementskit-accordion accoedion-primary" id={accordionParentId}>
                    {items.map((item, index) => {
                      const collapseId = `Collapse-service-faq-${index}`
                      const headingId = `primaryHeading-${index}-${accordionWidgetId}`
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
                            data-parent={`#${accordionParentId}`}
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
        <div
          className={`elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-${sidebarColId}`}
          data-element_type="column"
          data-id={sidebarColId}
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <section
              className={`elementor-section elementor-inner-section elementor-element elementor-element-${sidebarSectionId} elementor-section-boxed elementor-section-height-default elementor-section-height-default`}
              data-element_type="section"
              data-id={sidebarSectionId}
            >
              <div className="elementor-container elementor-column-gap-no">
                <div
                  className={`elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-${sidebarInnerColId}`}
                  data-element_type="column"
                  data-id={sidebarInnerColId}
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className={`elementor-element elementor-element-${sidebarImageWidgetId} elementor-widget elementor-widget-image`}
                      data-element_type="widget"
                      data-id={sidebarImageWidgetId}
                      data-widget_type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <img alt="7 States Pest Control" className="attachment-full size-full wp-image-778" decoding="async" height={1280} loading="lazy" src={sidebarImage} width={1280} />
                      </div>
                    </div>
                    <div
                      className={`elementor-element elementor-element-${sidebarCtaWidgetId} elementor-widget__width-initial elementor-absolute ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box`}
                      data-element_type="widget"
                      data-id={sidebarCtaWidgetId}
                      data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;_animation&quot;:&quot;none&quot;}"
                      data-widget_type="elementskit-icon-box.default"
                    >
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
