import { useState } from 'react'
import { Link } from 'react-router-dom'

function NavItem({ item }) {
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
          >
            {item.label}
          </a>
        </li>
      )
    }

    return (
      <li className="menu-item nav-item elementskit-mobile-builder-content">
        <Link className="ekit-menu-nav-link" to={item.path}>
          {item.label}
        </Link>
      </li>
    )
  }

  return (
    <li
      className={`menu-item menu-item-has-children nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content${open ? ' elementskit-dropdown-open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        className="ekit-menu-nav-link ekit-menu-dropdown-toggle"
        to={item.path === '#' ? '#' : item.path}
        onClick={(event) => {
          if (item.path === '#') event.preventDefault()
        }}
      >
        {item.label}
        <i aria-hidden="true" className="icon icon-down-arrow1 elementskit-submenu-indicator" />
      </Link>
      <ul className={`elementskit-dropdown elementskit-submenu-panel${open ? ' elementskit-dropdown-open' : ''}`}>
        {item.children.map((child) => (
          <li key={child.path} className="menu-item nav-item elementskit-mobile-builder-content">
            <Link className="dropdown-item" to={child.path}>
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default function NavMenu({ items, mobileOpen, onClose }) {
  return (
    <nav
      className="ekit-wid-con ekit_menu_responsive_tablet"
      data-hamburger-icon=""
      data-hamburger-icon-type="icon"
      data-responsive-breakpoint="1024"
    >
      <button
        aria-label="hamburger-icon"
        className="elementskit-menu-hamburger elementskit-menu-toggler"
        type="button"
        onClick={() => onClose(!mobileOpen)}
      >
        <span className="elementskit-menu-hamburger-icon" />
        <span className="elementskit-menu-hamburger-icon" />
        <span className="elementskit-menu-hamburger-icon" />
      </button>

      <div
        className={`elementskit-menu-container elementskit-menu-offcanvas-elements elementskit-navbar-nav-default ekit-nav-menu-one-page-no ekit-nav-dropdown-hover${mobileOpen ? ' active' : ''}`}
        id="ekit-megamenu-main-menu"
      >
        <ul className="elementskit-navbar-nav elementskit-menu-po-left submenu-click-on-icon" id="menu-main-menu">
          {items.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </ul>
        <div className="elementskit-nav-identity-panel">
          <button
            className="elementskit-menu-close elementskit-menu-toggler"
            type="button"
            onClick={() => onClose(false)}
          >
            X
          </button>
        </div>
      </div>

      <div
        className={`elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler ekit-nav-menu--overlay${mobileOpen ? ' active' : ''}`}
        onClick={() => onClose(false)}
        onKeyDown={() => {}}
        role="presentation"
      />
    </nav>
  )
}
