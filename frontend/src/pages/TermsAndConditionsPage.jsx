import { Link } from 'react-router-dom'
import CmsHtml from '../components/home/CmsHtml.jsx'
import usePageCms from '../hooks/usePageCms.js'
import usePageMeta from '../hooks/usePageMeta.js'
import { cmsText } from '../utils/cmsMedia.js'

const FALLBACK_BODY = `<p>These Terms &amp; Conditions apply to all pest control services provided by 7 States Pest Control.</p>`

export default function TermsAndConditionsPage() {
  const { page, content: c } = usePageCms('terms-and-conditions')
  usePageMeta('terms_and_conditions', page)
  const title = cmsText(c?.hero?.title, 'Terms & Conditions')
  const crumb = cmsText(c?.hero?.breadcrumb, 'Terms & Conditions')

  return (
    <>
      <div className="elementor elementor-terms" data-elementor-post-type="page" data-elementor-type="wp-page">
        <section
          className="elementor-section elementor-top-section elementor-section-boxed elementor-section-height-default"
          data-element_type="section"
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-widget elementor-widget-heading animated fadeInDown">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{title}</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-icon-list animated fadeInDown">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items elementor-inline-items">
                      <li className="elementor-icon-list-item elementor-inline-item">
                        <Link to="/">
                          <span className="elementor-icon-list-text">Home</span>
                        </Link>
                      </li>
                      <li className="elementor-icon-list-item elementor-inline-item">
                        <span className="elementor-icon-list-text">{crumb}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="elementor-section elementor-top-section elementor-section-boxed">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <CmsHtml html={c?.body_html} fallback={FALLBACK_BODY} rewriteMedia />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
