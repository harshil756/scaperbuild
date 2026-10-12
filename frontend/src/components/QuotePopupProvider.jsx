import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ElementorPopupModal from './ElementorPopupModal.jsx'

const QuotePopupContext = createContext(null)

export const QUOTE_POPUP_HREF =
  '#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6Ijc4NDEiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D'
const MANUAL_POPUP_HREF = QUOTE_POPUP_HREF
const AUTO_OPEN_DELAY_MS = 5000

export function useQuotePopup() {
  return useContext(QuotePopupContext)
}

export default function QuotePopupProvider({ children }) {
  const location = useLocation()
  const [openPopupId, setOpenPopupId] = useState(null)

  const closePopup = useCallback(() => {
    setOpenPopupId(null)
  }, [])

  const openPopup = useCallback((popupId) => {
    setOpenPopupId(String(popupId))
  }, [])

  useEffect(() => {
    document.querySelectorAll('.elementor-popup-modal:not(.react-quote-popup)').forEach((node) => {
      node.remove()
    })
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') return undefined

    const timer = window.setTimeout(() => {
      setOpenPopupId('9458')
    }, AUTO_OPEN_DELAY_MS)

    return () => window.clearTimeout(timer)
  }, [location.pathname])

  useEffect(() => {
    function handlePopupLinkClick(event) {
      const link = event.target.closest(`a[href="${MANUAL_POPUP_HREF}"]`)
      if (!link) return

      event.preventDefault()
      setOpenPopupId('7841')
    }

    document.addEventListener('click', handlePopupLinkClick)
    return () => document.removeEventListener('click', handlePopupLinkClick)
  }, [])

  return (
    <QuotePopupContext.Provider value={{ openPopup, closePopup, openPopupId }}>
      {children}
      {openPopupId ? <ElementorPopupModal onClose={closePopup} popupId={openPopupId} /> : null}
      <svg className="e-font-icon-svg-symbols" style={{ display: 'none' }}>
        <symbol id="eicon-close" viewBox="0 0 1000 1000">
          <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z" />
        </symbol>
      </svg>
    </QuotePopupContext.Provider>
  )
}
