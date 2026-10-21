import { Link } from 'react-router-dom'
import usePageCms from '../hooks/usePageCms.js'
import usePageMeta from '../hooks/usePageMeta.js'
import useSiteContact from '../hooks/useSiteContact.jsx'
import { cmsText } from '../utils/cmsMedia.js'

export default function ThankYouPage() {
  const { page, content: c } = usePageCms('thank-you')
  usePageMeta('thank_you', page)
  const { phoneNumber, phoneUrl } = useSiteContact()
  const title = cmsText(c?.hero?.title, 'Thank You')
  const crumb = cmsText(c?.hero?.breadcrumb, 'Thank You')
  const heading = cmsText(c?.thank_you?.heading, 'Thank You for Your Request!')
  const subheading = cmsText(
    c?.thank_you?.subheading,
    "We've received your request and will contact you soon.",
  )
  const nextTitle = cmsText(c?.thank_you?.next_title, 'What happens next?')
  const steps =
    Array.isArray(c?.thank_you?.steps) && c.thank_you.steps.length
      ? c.thank_you.steps.map((s) => (typeof s === 'string' ? s : s?.text)).filter(Boolean)
      : [
          'Our team will review your request within 2 hours',
          "We'll call you to schedule your free quotation",
          'A licensed technician will visit your property',
        ]
  const homeButton = cmsText(c?.thank_you?.home_button, 'Return to Home')
  const helpTitle = cmsText(c?.thank_you?.help_title, 'Need immediate assistance?')

  return (
    <>
      <div className="elementor elementor-8994" data-elementor-id={8994} data-elementor-post-type="page" data-elementor-type="wp-page">
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-42b1fd3 elementor-section-boxed"
          data-element_type="section"
          data-id="42b1fd3"
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element-9066e14">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{title}</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-icon-list">
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
        <div className="elementor-element e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element e-con-full e-flex e-con e-child">
              <div className="elementor-element e-con-full e-flex e-con e-child" data-settings='{"background_background":"classic"}'>
                <div className="elementor-element elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">{heading}</h3>
                  </div>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h6 className="elementor-heading-title elementor-size-default">{subheading}</h6>
                  </div>
                </div>
                <div className="elementor-element e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-widget elementor-widget-heading">
                    <div className="elementor-widget-container">
                      <p className="elementor-heading-title elementor-size-default">{nextTitle}</p>
                    </div>
                  </div>
                  <div className="elementor-element elementor-widget elementor-widget-icon-list">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        {steps.map((step) => (
                          <li className="elementor-icon-list-item" key={step}>
                            <span className="elementor-icon-list-text">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-align-center elementor-widget elementor-widget-button">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <Link className="elementor-button elementor-button-link elementor-size-sm" to="/">
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">{homeButton}</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">{helpTitle}</p>
                  </div>
                </div>
                <div className="elementor-element elementor-align-center elementor-widget elementor-widget-button">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a className="elementor-button elementor-button-link elementor-size-sm" href={phoneUrl}>
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">Call {phoneNumber}</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
