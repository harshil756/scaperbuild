import { useEffect, useRef } from 'react'

const LOADER_SRC = 'https://cdn.trustindex.io/loader.js?wp-widget'
const STATIC_HTML = '/assets/html/trustindex-home-reviews.html'

function loadTrustIndexLoader() {
  if (document.querySelector(`script[src="${LOADER_SRC}"]`)) return Promise.resolve()

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = LOADER_SRC
    script.async = true
    script.dataset.wpStrategy = 'async'
    script.onload = () => resolve()
    script.onerror = reject
    document.body.appendChild(script)
  })
}

/** Google reviews widget (Trustindex) — live loader with scraped HTML fallback. */
export default function TrustIndexReviews({ className = 'elementor-shortcode' }) {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    let cancelled = false

    async function mount() {
      const mountPoint = document.createElement('div')
      mountPoint.dataset.src = LOADER_SRC
      mountPoint.dataset.cssUrl = '/assets/css/trustindex-google-widget_75b8e05a.css'
      host.appendChild(mountPoint)

      try {
        await loadTrustIndexLoader()
        await new Promise((r) => setTimeout(r, 2500))
        if (cancelled) return
        if (host.querySelector('.ti-review-item')) return

        const res = await fetch(STATIC_HTML)
        if (!res.ok || cancelled) return
        const html = await res.text()
        if (!html.includes('ti-review-item') || cancelled) return
        mountPoint.innerHTML = html
      } catch {
        try {
          const res = await fetch(STATIC_HTML)
          if (!res.ok || cancelled) return
          const html = await res.text()
          if (html.includes('ti-review-item') && !cancelled) {
            mountPoint.innerHTML = html
          }
        } catch {
          /* keep empty placeholder */
        }
      }
    }

    mount()
    return () => {
      cancelled = true
    }
  }, [])

  return <div className={className} ref={hostRef} />
}
