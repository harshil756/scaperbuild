import { useEffect, useState } from 'react'
import { QUOTE_POPUP_HREF, useQuotePopup } from './QuotePopupProvider.jsx'

const MOBILE_QUERY = '(max-width: 767px)'
const HEADER_CTA_SELECTOR = '.ekit-template-content-header .elementor-element-2db3a27'
const HEADER_SECTION_SELECTORS = [
  '.ekit-template-content-header .elementor-element-1673af9',
  '.ekit-template-content-header .elementor-element-31eb5e5',
]

function measureHeaderBottom() {
  let headerBottom = 0

  for (const selector of HEADER_SECTION_SELECTORS) {
    const section = document.querySelector(selector)
    if (!section) continue

    const rect = section.getBoundingClientRect()
    if (rect.bottom > 0 && rect.top < 200) {
      headerBottom = Math.max(headerBottom, rect.bottom)
    }
  }

  return Math.round(headerBottom)
}

export default function MobileStickyQuoteCta() {
  const { openPopupId } = useQuotePopup() ?? {}
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches)
  const [showSticky, setShowSticky] = useState(false)
  const [topOffset, setTopOffset] = useState(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY)
    const onChange = () => setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener('change', onChange)
    return () => mediaQuery.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setShowSticky(false)
      return undefined
    }

    const headerCta = document.querySelector(HEADER_CTA_SELECTOR)
    if (!headerCta) return undefined

    const headerSections = HEADER_SECTION_SELECTORS
      .map((selector) => document.querySelector(selector))
      .filter(Boolean)

    const updateTopOffset = () => {
      setTopOffset(measureHeaderBottom())
    }

    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(headerCta)

    updateTopOffset()
    window.addEventListener('scroll', updateTopOffset, { passive: true })
    window.addEventListener('resize', updateTopOffset)

    const resizeObserver = new ResizeObserver(updateTopOffset)
    headerSections.forEach((section) => resizeObserver.observe(section))

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateTopOffset)
      window.removeEventListener('resize', updateTopOffset)
      resizeObserver.disconnect()
    }
  }, [isMobile])

  if (!isMobile || openPopupId) return null

  return (
    <div
      aria-label="Request a quote"
      className={`mobile-sticky-quote-cta${showSticky ? ' mobile-sticky-quote-cta--visible' : ''}`}
      role="region"
      style={{ '--mobile-sticky-cta-top': `${topOffset}px` }}
    >
      <a
        className="elementor-button elementor-button-link elementor-size-sm mobile-sticky-quote-cta__button"
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
  )
}
