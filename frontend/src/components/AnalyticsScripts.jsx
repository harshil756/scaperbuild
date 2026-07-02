import { useEffect } from 'react'

const GTM_ID = 'GTM-NM85M4RX'
const FB_PIXEL_ID = '11349564632'

function injectGtm() {
  if (document.querySelector(`script[data-analytics="gtm-${GTM_ID}"]`)) return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
  script.dataset.analytics = `gtm-${GTM_ID}`
  document.head.appendChild(script)
}

function injectFacebookPixel() {
  if (window.fbq) return

  const n = (window.fbq = function fbq(...args) {
    if (n.callMethod) n.callMethod(...args)
    else n.queue.push(args)
  })
  if (!window._fbq) window._fbq = n
  n.push = n
  n.loaded = true
  n.version = '2.0'
  n.queue = []

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  script.dataset.analytics = `fb-pixel-${FB_PIXEL_ID}`
  document.head.appendChild(script)

  n('init', FB_PIXEL_ID)
  n('track', 'PageView')
}

/** Google Tag Manager + Facebook Pixel only (matches live site). */
export default function AnalyticsScripts() {
  useEffect(() => {
    injectGtm()
    injectFacebookPixel()
  }, [])

  return (
    <noscript>
      <iframe
        height="0"
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
        width="0"
      />
    </noscript>
  )
}
