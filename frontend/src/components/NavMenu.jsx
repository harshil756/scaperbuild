import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'

const OFFCANVAS_NAV_QUERY = '(max-width: 1024px)'

function isOffcanvasNav() {
  return window.matchMedia(OFFCANVAS_NAV_QUERY).matches
}

function getMegaMenuClass(item) {
  if (item.megaMenuClass) return item.megaMenuClass
  if (item.label === 'Pest Control Services') return 'services-mega-menu'
  if (item.label === 'Commercial Pest Control') return 'commercial-mega-menu'
  return ''
}

function NavItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false)

  if (!item.children?.length) {
    if (item.external) {
      return (
        <li className="menu-item nav-item elementskit-mobile-builder-content">
          <a
            className="ekit-menu-nav-link"
            href="https://7statespestcontrol.com.au/contact-us/"
            target="_blank"
            rel="noreferrer"
            onClick={onNavigate}
          >
            {item.label}
          </a>
        </li>
      )
    }

    return (
      <li className="menu-item nav-item elementskit-mobile-builder-content">
        <Link className="ekit-menu-nav-link" to={item.path} onClick={onNavigate}>
          {item.label}
        </Link>
      </li>
    )
  }

  const megaMenuClass = getMegaMenuClass(item)

  return (
    <li
      className={`menu-item menu-item-has-children nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content${open ? ' elementskit-dropdown-open' : ''}`}
      onMouseEnter={() => {
        if (!isOffcanvasNav()) setOpen(true)
      }}
      onMouseLeave={() => {
        if (!isOffcanvasNav()) setOpen(false)
      }}
    >
      <Link
        className="ekit-menu-nav-link ekit-menu-dropdown-toggle"
        to={item.path === '#' ? '#' : item.path}
        onClick={(event) => {
          if (isOffcanvasNav() || item.path === '#') {
            event.preventDefault()
            setOpen((prev) => !prev)
          }
        }}
      >
        {item.label}
        <i aria-hidden="true" className="icon icon-down-arrow1 elementskit-submenu-indicator" />
      </Link>
      <ul className={`elementskit-dropdown elementskit-submenu-panel${open ? ' elementskit-dropdown-open' : ''}${megaMenuClass ? ` ${megaMenuClass}` : ''}`}>
        {item.children.map((child) => (
          <li key={child.path} className="menu-item nav-item elementskit-mobile-builder-content">
            <Link className="dropdown-item" to={child.path} onClick={onNavigate}>
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

function MenuPanel({ items, mobileOpen, onClose, onNavigate, portaled }) {
  const panel = (
    <>
      <div
        className={`elementskit-menu-container elementskit-menu-offcanvas-elements elementskit-navbar-nav-default ekit-nav-menu-one-page-no ekit-nav-dropdown-hover site-mobile-nav-panel${mobileOpen ? ' active' : ''}`}
        id="ekit-megamenu-main-menu"
      >
        <ul className="elementskit-navbar-nav elementskit-menu-po-left submenu-click-on-icon" id="menu-main-menu">
          {items.map((item) => (
            <NavItem key={item.label} item={item} onNavigate={onNavigate} />
          ))}
        </ul>
        <div className="elementskit-nav-identity-panel">
          <button
            aria-label="Close menu"
            className="elementskit-menu-close elementskit-menu-toggler"
            type="button"
            onClick={onClose}
          >
            X
          </button>
        </div>
      </div>

      <div
        className={`elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler ekit-nav-menu--overlay site-mobile-nav-overlay${mobileOpen ? ' active' : ''}`}
        onClick={onClose}
        onKeyDown={() => {}}
        role="presentation"
      />
    </>
  )

  if (!portaled) return panel

  return (
    <div className="elementor elementor-380 site-mobile-nav-portal-root">
      <div className="elementor-element elementor-element-ae3e5cf elementor-widget elementor-widget-ekit-nav-menu">
        <div className="elementor-widget-container">
          <div className="ekit-wid-con ekit_menu_responsive_tablet site-mobile-nav-portal">{panel}</div>
        </div>
      </div>
    </div>
  )
}

export default function NavMenu({ items, mobileOpen, onToggle, onClose }) {
  const [offcanvasNav, setOffcanvasNav] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(OFFCANVAS_NAV_QUERY)
    const update = () => setOffcanvasNav(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen, onClose])

  const handleNavigate = () => {
    if (offcanvasNav) onClose()
  }

  const menuPanel = (
    <MenuPanel
      items={items}
      mobileOpen={mobileOpen}
      onClose={onClose}
      onNavigate={handleNavigate}
      portaled={offcanvasNav}
    />
  )

  return (
    <nav
      className="ekit-wid-con ekit_menu_responsive_tablet site-mobile-nav"
      data-hamburger-icon=""
      data-hamburger-icon-type="icon"
      data-responsive-breakpoint="1024"
    >
      <button
        aria-expanded={mobileOpen}
        aria-label="Open menu"
        className="elementskit-menu-hamburger elementskit-menu-toggler"
        type="button"
        onClick={onToggle}
      >
        <span className="elementskit-menu-hamburger-icon" />
        <span className="elementskit-menu-hamburger-icon" />
        <span className="elementskit-menu-hamburger-icon" />
      </button>

      {offcanvasNav ? createPortal(menuPanel, document.body) : menuPanel}
    </nav>
  )
}
