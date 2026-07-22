import usePageMeta from '../hooks/usePageMeta.js'
import { Link } from 'react-router-dom'

export default function ThankYouPage() {
  usePageMeta('thank_you')

  return (
    <>
      <div className="elementor elementor-8994" data-elementor-id={8994} data-elementor-post-type="page" data-elementor-type="wp-page">
        <section className="elementor-section elementor-top-section elementor-element elementor-element-42b1fd3 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="42b1fd3" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9066e14" data-element_type="column" data-id="9066e14">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-09cb33b elementor-invisible elementor-widget elementor-widget-heading" data-element_type="widget" data-id="09cb33b" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Thank You</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-5733c79 elementor-icon-list--layout-inline elementor-align-center elementor-widget__width-auto elementor-list-item-link-full_width elementor-invisible elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="5733c79" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;,&quot;_animation_delay&quot;:720}" data-widget_type="icon-list.default">
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
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg>
                          </span>
                          <span className="elementor-icon-list-text">Thank You</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="elementor-element elementor-element-ee949c0 e-flex e-con-boxed e-con e-parent" data-element_type="container" data-id="ee949c0">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-8d9ddf2 e-con-full e-flex e-con e-child" data-element_type="container" data-id="8d9ddf2">
              <div className="elementor-element elementor-element-c3273bc e-con-full e-flex e-con e-child" data-element_type="container" data-id="c3273bc" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-element elementor-element-284b05a elementor-view-default elementor-invisible elementor-widget elementor-widget-icon" data-element_type="widget" data-id="284b05a" data-settings="{&quot;_animation&quot;:&quot;bounceIn&quot;}" data-widget_type="icon.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-wrapper">
                      <div className="elementor-icon">
                        <i aria-hidden="true" className="icon icon-checked1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-cc9c1e1 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="cc9c1e1" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">Thank You for Your Request!</h3>
                  </div>
                </div>
                <div className="elementor-element elementor-element-25af329 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="25af329" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h6 className="elementor-heading-title elementor-size-default">We&apos;ve received your request and will contact you soon.</h6>
                  </div>
                </div>
                <div className="elementor-element elementor-element-f0c2819 e-con-full e-flex e-con e-child" data-element_type="container" data-id="f0c2819" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-element elementor-element-bf2a904 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="bf2a904" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <p className="elementor-heading-title elementor-size-default">What happens next?</p>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-655bd69 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="655bd69" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-12 h-12 text-green-600"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                          </span>
                          <span className="elementor-icon-list-text">Our team will review your request within 2 hours</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-12 h-12 text-green-600"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                          </span>
                          <span className="elementor-icon-list-text">We&apos;ll call you to schedule your free quotation</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-12 h-12 text-green-600"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                          </span>
                          <span className="elementor-icon-list-text">A licensed technician will visit your property</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-1474280 elementor-align-center elementor-widget elementor-widget-button" data-element_type="widget" data-id="1474280" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <Link className="elementor-button elementor-button-link elementor-size-sm" to="/">
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-home" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" /></svg>
                          </span>
                          <span className="elementor-button-text">Return to Home</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-326252b elementor-widget elementor-widget-heading" data-element_type="widget" data-id="326252b" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">Need immediate assistance?</p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-726be6c elementor-align-center elementor-widget elementor-widget-button" data-element_type="widget" data-id="726be6c" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a className="elementor-button elementor-button-link elementor-size-sm" href="tel:+61434660060">
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-icon">
                            <i aria-hidden="true" className="icon icon-phone-call1" />
                          </span>
                          <span className="elementor-button-text">+61 434 660 060</span>
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
