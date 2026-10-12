import { Link } from 'react-router-dom'
import {
  footerServicesCol1,
  footerServicesCol2,
  footerServicesCol3,
  socialLinks,
} from '../config/navigation.js'
import useMenu from '../hooks/useMenu.js'
import useSiteContact from '../hooks/useSiteContact.jsx'

const LOGO = '/assets/images/7-states-logo-1.png-1_b6fda841.webp'
const LOGO_SRCSET = `${LOGO} 344w, /assets/images/7-states-logo-1.png-1-300x92_6c062508.webp 300w`

function FooterLinkList({ items }) {
  return (
    <ul className="elementor-icon-list-items">
      {items.map((item) => (
        <li key={item.label} className="elementor-icon-list-item">
          {item.path === '#' ? (
            <span className="elementor-icon-list-text">{item.label}</span>
          ) : (
            <Link to={item.path}>
              <span className="elementor-icon-list-text">{item.label}</span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

function SocialIcon({ link }) {
  if (link.iconClass) {
    return <i className={link.iconClass} />
  }

  if (link.icon === 'instagram') {
    return (
      <svg className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    )
  }

  if (link.icon === 'twitter') {
    return (
      <svg className="e-font-icon-svg e-fab-twitter" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
      </svg>
    )
  }

  return (
    <svg className="e-font-icon-svg e-fab-youtube" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
    </svg>
  )
}

export default function Footer() {
  const { phoneNumber, phoneUrl, emailAddress, emailUrl, address } = useSiteContact()
  const col1 = useMenu('footer_col_1', footerServicesCol1)
  const col2 = useMenu('footer_col_2', footerServicesCol2)
  const col3 = useMenu('footer_col_3', footerServicesCol3)
  const social = useMenu('footer_social', socialLinks)

  return (
    <div className="ekit-template-content-markup ekit-template-content-footer ekit-template-content-theme-support">
      <div
        className="elementor elementor-386"
        data-elementor-id="386"
        data-elementor-post-type="elementskit_template"
        data-elementor-type="wp-post"
      >
        <section className="elementor-section elementor-top-section elementor-element elementor-element-9cf3c49 elementor-section-boxed elementor-section-height-default">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-97bca4e">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-3790ca7 elementor-widget__width-auto elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <Link to="/">
                      <img
                        alt="7 states Pest Control"
                        className="attachment-full size-full wp-image-391"
                        height="105"
                        sizes="(max-width: 344px) 100vw, 344px"
                        src={LOGO}
                        srcSet={LOGO_SRCSET}
                        width="344"
                      />
                    </Link>
                  </div>
                </div>

                <div className="elementor-element elementor-element-0fb955a elementor-shape-square e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons">
                  <div className="elementor-widget-container">
                    <div className="elementor-social-icons-wrapper elementor-grid" role="list">
                      {social.map((link) => (
                        <span key={link.href} className="elementor-grid-item" role="listitem">
                          <a
                            className={`elementor-icon elementor-social-icon elementor-social-icon-${link.icon || 'facebook'} elementor-repeater-item-06c7598`}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="elementor-screen-only">{link.label}</span>
                            <SocialIcon link={link} />
                          </a>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="elementor-element elementor-element-1f53fc1 elementor-widget__width-inherit elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Newsletter Subscribe</h2>
                  </div>
                </div>

                <div className="elementor-element elementor-element-442b390 elementor-widget elementor-widget-form">
                  <div className="elementor-widget-container">
                    <form aria-label="Newsletter Subscribe" className="elementor-form" method="post" name="Newsletter Subscribe">
                      <div className="elementor-form-fields-wrapper elementor-labels-">
                        <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-66 elementor-field-required">
                          <label className="elementor-field-label elementor-screen-only" htmlFor="footer-email">
                            Email
                          </label>
                          <input
                            className="elementor-field elementor-size-sm elementor-field-textual"
                            id="footer-email"
                            name="form_fields[email]"
                            placeholder="Your Email"
                            required
                            type="email"
                          />
                        </div>
                        <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-33 e-form__buttons">
                          <button className="elementor-button elementor-size-sm" type="submit">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Sign Up</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-8b4dd2d">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-58e173b elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Our Services</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-dcef3e1 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                  <div className="elementor-widget-container">
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator" />
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-696d8dd elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
                  <div className="elementor-widget-container">
                    <FooterLinkList items={col1} />
                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-75112b8">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-acdbe19 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
                  <div className="elementor-widget-container">
                    <FooterLinkList items={col2} />
                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-649c042">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-cf377de elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
                  <div className="elementor-widget-container">
                    <FooterLinkList items={col3} />
                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-f2892aa">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-345cbda elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Contact Us</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-3a3dabf elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                  <div className="elementor-widget-container">
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator" />
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-e76dd9d elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-map-marker-alt" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                          </svg>
                        </span>
                        <span className="elementor-icon-list-text">{address}</span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <a href={phoneUrl}>
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                            </svg>
                          </span>
                          <span className="elementor-icon-list-text">{phoneNumber}</span>
                        </a>
                      </li>
                      <li className="elementor-icon-list-item">
                        <a href={emailUrl}>
                          <span className="elementor-icon-list-icon">
                            <i aria-hidden="true" className="icon icon-email1" />
                          </span>
                          <span className="elementor-icon-list-text">{emailAddress}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="elementor-section elementor-top-section elementor-element elementor-element-cc971de elementor-section-content-middle elementor-section-boxed elementor-section-height-default">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d76058d">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-c27169b elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Copyright ©️ 2025 7 States Pest Control. All Rights Reserved.
                    </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-terms-link elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default" style={{ fontSize: '14px', margin: 0 }}>
                      <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
