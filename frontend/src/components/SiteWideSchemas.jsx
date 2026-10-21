import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { HOME_FAQ_SCHEMA, SITE_WIDE_SCHEMAS } from '../config/siteSchemas.js'

const SCRIPT_ATTR = 'data-site-wide-schema'

function upsertSchemaScripts(schemas) {
  const existing = document.querySelectorAll(`script[${SCRIPT_ATTR}]`)
  existing.forEach((el) => el.remove())

  for (const schema of schemas) {
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.setAttribute(SCRIPT_ATTR, 'true')
    el.textContent = JSON.stringify(schema)
    document.head.appendChild(el)
  }
}

/** Inject Organization / LocalBusiness / PestControlService / Product schemas on every page. */
export default function SiteWideSchemas() {
  const { pathname } = useLocation()

  useEffect(() => {
    const schemas = [...SITE_WIDE_SCHEMAS]
    if (pathname === '/' || pathname === '') {
      schemas.push(HOME_FAQ_SCHEMA)
    }
    upsertSchemaScripts(schemas)

    return () => {
      document.querySelectorAll(`script[${SCRIPT_ATTR}]`).forEach((el) => el.remove())
    }
  }, [pathname])

  return null
}
