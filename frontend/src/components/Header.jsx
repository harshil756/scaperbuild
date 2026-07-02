import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { mainNav } from '../config/navigation.js'
import useMenu from '../hooks/useMenu.js'
import NavMenu from './NavMenu.jsx'

const LOGO = '/assets/images/7-states-logo-1.png-1_b6fda841.webp'
const LOGO_SRCSET = `${LOGO} 344w, /assets/images/7-states-logo-1.png-1-300x92_6c062508.webp 300w`

export default function Header() {
  const navItems = useMenu('header', mainNav)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <div className="ekit-template-content-markup ekit-template-content-header ekit-template-content-theme-support">
      <div
        className="elementor elementor-380"
        data-elementor-id="380"
        data-elementor-post-type="elementskit_template"
        data-elementor-type="wp-post"
      >
        <section
          className={`elementor-section elementor-top-section elementor-element elementor-element-1673af9 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-sticky${sticky ? ' elementor-sticky--active elementor-sticky--effects' : ''}`}
          data-element_type="section"
          data-id="1673af9"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-064086c">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-38e4785 elementor-icon-list--layout-inline elementor-mobile-align-center elementor-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items elementor-inline-items">
                      <li className="elementor-icon-list-item elementor-inline-item">
                        <a href="tel:+61434660060">
                          <span className="elementor-icon-list-text">
                            Same-Day Pest Control Available – Call +61 434 660 060
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-31eb5e5 elementor-section-content-middle elementor-section-boxed elementor-section-height-default site-main-nav"
          data-element_type="section"
          data-id="31eb5e5"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-d24fac3">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-6eeba11 elementor-widget__width-auto elementor-widget elementor-widget-image">
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
              </div>
            </div>

            <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-beb71e0">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-ae3e5cf elementor-widget elementor-widget-ekit-nav-menu">
                  <div className="elementor-widget-container">
                    <NavMenu
                      items={navItems}
                      mobileOpen={mobileOpen}
                      onClose={setMobileOpen}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2db3a27">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-208e809 elementor-align-center elementor-tablet-align-center elementor-widget elementor-widget-button">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a
                        className="elementor-button elementor-button-link elementor-size-sm"
                        href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6Ijc4NDEiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-icon">
                            <i aria-hidden="true" className="icon icon-phone1" />
                          </span>
                          <span className="elementor-button-text">Request A Quote</span>
                        </span>
                      </a>
                    </div>
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
