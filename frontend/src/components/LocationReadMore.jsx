import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function LocationReadMore() {
  const location = useLocation()

  useEffect(() => {
    if (!location.pathname.startsWith('/location/')) return undefined

    function handleClick(event) {
      const button = event.target.closest('.readmore-btn')
      if (!button) return

      const container = button.closest('.elementor-widget-container') ?? button.parentElement
      const content = container?.querySelector('.readmore-content')
      if (!content) return

      event.preventDefault()

      const isHidden =
        content.style.display === 'none' ||
        (!content.style.display && window.getComputedStyle(content).display === 'none')

      content.style.display = isHidden ? 'block' : 'none'
      button.textContent = isHidden ? 'Read Less' : 'Read More'
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [location.pathname])

  return null
}
