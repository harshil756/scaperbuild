import CmsHtml from '../home/CmsHtml.jsx'
import { cmsText } from '../../utils/cmsMedia.js'
import { Link } from 'react-router-dom'

export default function SolarFaqSection({ faq }) {
  const items = faq?.items ?? []
  if (!items.length) return null

  return (
    <div className="elementor-element elementor-element-5a3541e elementor-widget elementor-widget-elementskit-accordion" data-element_type="widget" data-id="5a3541e" data-widget_type="elementskit-accordion.default">
      <div className="elementor-widget-container">
        <div className="ekit-wid-con">
          <div className="elementskit-accordion accoedion-primary" id="accordion-solar-faq">
            {items.map((item, index) => {
              const collapseId = `Collapse-solar-faq-${index}`
              const headingId = `primaryHeading-${index}-5a3541e`
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
                    data-parent="#accordion-solar-faq"
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
  )
}

export function SolarFaqSidebar() {
  return (
    <div className="elementor-element elementor-element-04c8944 elementor-widget__width-initial elementor-absolute ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget" data-id="04c8944" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
      <div className="elementor-widget-container">
        <div className="ekit-wid-con">
          <div className="elementskit-infobox text-left text- icon-lef-right-aligin elementor-animation-">
            <div className="box-body">
              <h3 className="elementskit-info-box-title">Any questions you want to ask?</h3>
              <p>Find answers to common questions about our pest control services, treatments, safety, and scheduling.</p>
              <div className="box-footer disable_hover_button">
                <div className="btn-wraper">
                  <Link className="elementskit-btn whitespace--normal" to="/contact-us">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
