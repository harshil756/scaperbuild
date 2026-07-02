import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import TrustIndexReviews from './TrustIndexReviews.jsx'

function isTrustIndexPlaceholder(el) {
  if (!el || el.nodeType !== 1) return false
  const src = el.getAttribute('data-src') || ''
  if (src.includes('trustindex.io/loader.js')) return true
  if (el.getAttribute('data-ti-widget-inited') === 'true') return true
  return false
}

export default function TrustIndexAutoMount() {
  useEffect(() => {
    const mounted = new WeakSet()

    const mountInto = (placeholder) => {
      if (!placeholder || mounted.has(placeholder)) return
      if (!isTrustIndexPlaceholder(placeholder)) return

      // Prefer replacing the immediate wrapper so layout stays identical.
      const wrapper =
        placeholder.closest('.elementor-shortcode') ||
        placeholder.parentElement ||
        placeholder

      if (!wrapper || mounted.has(wrapper)) return
      mounted.add(wrapper)

      wrapper.innerHTML = ''
      const host = document.createElement('div')
      wrapper.appendChild(host)

      try {
        createRoot(host).render(<TrustIndexReviews variant="slider" className="elementor-shortcode" />)
      } catch {
        // no-op
      }
    }

    const scan = (root) => {
      const scope = root && root.querySelectorAll ? root : document
      scope
        .querySelectorAll('div[data-src], div[data-ti-widget-inited]')
        .forEach((el) => mountInto(el))
    }

    scan(document)

    const obs = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((n) => {
          if (n && n.nodeType === 1) {
            if (isTrustIndexPlaceholder(n)) mountInto(n)
            scan(n)
          }
        })
      }
    })

    obs.observe(document.documentElement, { childList: true, subtree: true })
    return () => obs.disconnect()
  }, [])

  return null
}

