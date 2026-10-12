import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { useLocation } from 'react-router-dom'
import TrustIndexReviews from './TrustIndexReviews.jsx'

const REVIEWS_DIVIDER_SELECTOR = '.elementor-element-291826e'
const MOUNT_CLASS = 'location-trustindex-mount'

export default function LocationPageReviews() {
  const location = useLocation()

  useEffect(() => {
    if (!location.pathname.startsWith('/location/')) return undefined

    let root = null
    let host = null
    let cancelled = false

    const cleanup = () => {
      root?.unmount()
      root = null
      host?.remove()
      host = null
    }

    const tryMount = () => {
      if (cancelled || host) return false

      const divider = document.querySelector(REVIEWS_DIVIDER_SELECTOR)
      const reviewsContainer = divider?.closest('.e-con-inner')
      if (!divider || !reviewsContainer || reviewsContainer.querySelector(`.${MOUNT_CLASS}`)) {
        return false
      }

      host = document.createElement('div')
      host.className = `elementor-element elementor-element-b5884fe elementor-widget elementor-widget-shortcode ${MOUNT_CLASS}`
      host.dataset.element_type = 'widget'
      host.dataset.widget_type = 'shortcode.default'
      host.innerHTML = '<div class="elementor-widget-container"><div class="elementor-shortcode"></div></div>'
      divider.insertAdjacentElement('afterend', host)

      const mountPoint = host.querySelector('.elementor-shortcode')
      root = createRoot(mountPoint)
      root.render(<TrustIndexReviews variant="slider" />)
      return true
    }

    if (tryMount()) {
      return () => {
        cancelled = true
        cleanup()
      }
    }

    const scope = document.getElementById('content') || document.body
    const obs = new MutationObserver(() => {
      if (tryMount()) obs.disconnect()
    })
    obs.observe(scope, { childList: true, subtree: true })

    const timeout = window.setTimeout(() => obs.disconnect(), 10000)

    return () => {
      cancelled = true
      obs.disconnect()
      window.clearTimeout(timeout)
      cleanup()
    }
  }, [location.pathname])

  return null
}
