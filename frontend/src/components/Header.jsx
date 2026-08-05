import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { mainNav } from '../config/navigation.js'
import useMenu from '../hooks/useMenu.js'
import useSiteContact from '../hooks/useSiteContact.js'
import NavMenu from './NavMenu.jsx'
import { QUOTE_POPUP_HREF } from './QuotePopupProvider.jsx'

const LOGO = '/assets/images/7-states-logo-1.png-1_b6fda841.webp'
const LOGO_SRCSET = `${LOGO} 344w, /assets/images/7-states-logo-1.png-1-300x92_6c062508.webp 300w`
const MOBILE_QUERY = '(max-width: 767px)'

export default function Header() {
  const { phoneNumber, phoneUrl } = useSiteContact()
  const navItems = useMenu('header', mainNav)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches)
  const [barHeight, setBarHeight] = useState(0)
  const stickyBarRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY)
    const onChange = () => setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener('change', onChange)
    return () => mediaQuery.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const bar = stickyBarRef.current
    if (!bar) return undefined

    const updateHeight = () => setBarHeight(bar.offsetHeight)
    updateHeight()

    const resizeObserver = new ResizeObserver(updateHeight)
    resizeObserver.observe(bar)
    window.addEventListener('resize', updateHeight)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateHeight)
    }
  }, [isMobile])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const stickyActive = sticky || isMobile

  return (
    <div className="ekit-template-content-markup ekit-template-content-header ekit-template-content-theme-support">
      <div
        className="elementor elementor-380"
        data-elementor-id="380"
        data-elementor-post-type="elementskit_template"
        data-elementor-type="wp-post"
      >
        <section
          ref={stickyBarRef}
          className={`elementor-section elementor-top-section elementor-element elementor-element-1673af9 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-sticky${stickyActive ? ' elementor-sticky--active elementor-sticky--effects' : ''}`}
          data-element_type="section"
          data-id="1673af9"
        >
          <div className="header-sticky-bar">
            <a className="header-sticky-bar__call" href={phoneUrl}>
              <span className="header-sticky-bar__call-title">Same-Day Pest Control Available</span>
              <span className="header-sticky-bar__call-number">
                <i aria-hidden="true" className="icon icon-phone1" />
                Call {phoneNumber}
              </span>
            </a>
            <a className="header-sticky-bar__quote" href={QUOTE_POPUP_HREF}>
              <i aria-hidden="true" className="icon icon-phone1" />
              <span>Request A Quote</span>
            </a>
          </div>
        </section>
        <div
          aria-hidden="true"
          className="header-sticky-bar-spacer"
          style={isMobile || sticky ? { height: barHeight } : undefined}
        />

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
                      onClose={() => setMobileOpen(false)}
                      onToggle={() => setMobileOpen((open) => !open)}
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
                        href={QUOTE_POPUP_HREF}
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
