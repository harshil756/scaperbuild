import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  SITE_CONTACT_DEFAULTS,
  emailToMailto,
  phoneToTel,
} from '../config/siteContact.js'
import { apiUrl } from '../utils/api.js'
import { cmsText } from '../utils/cmsMedia.js'

const SiteContactContext = createContext(SITE_CONTACT_DEFAULTS)

function normalizeContact(content) {
  const phoneNumber = cmsText(content?.phone?.number, SITE_CONTACT_DEFAULTS.phoneNumber)
  const emailAddress = cmsText(content?.email?.address, SITE_CONTACT_DEFAULTS.emailAddress)

  return {
    phoneNumber,
    phoneUrl: cmsText(content?.phone?.url, phoneToTel(phoneNumber)),
    emailAddress,
    emailUrl: cmsText(content?.email?.url, emailToMailto(emailAddress)),
    address: cmsText(content?.address?.text, SITE_CONTACT_DEFAULTS.address),
    hoursTitle: cmsText(content?.hours?.title, SITE_CONTACT_DEFAULTS.hoursTitle),
    hoursBody: cmsText(content?.hours?.body, SITE_CONTACT_DEFAULTS.hoursBody),
    phoneTitle: cmsText(content?.phone?.title, 'Contact Us'),
    emailTitle: cmsText(content?.email?.title, 'Email'),
    addressTitle: cmsText(content?.address?.title, 'Our Address'),
    raw: content ?? null,
  }
}

export function SiteContactProvider({ children }) {
  const [contact, setContact] = useState(SITE_CONTACT_DEFAULTS)

  useEffect(() => {
    let cancelled = false

    fetch(apiUrl('/api/pages/contact-us'))
      .then((res) => {
        if (!res.ok) throw new Error(`Contact CMS failed (${res.status})`)
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        setContact(normalizeContact(data.content ?? null))
      })
      .catch((err) => {
        console.warn('[SiteContact]', err.message)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const value = useMemo(() => contact, [contact])

  return (
    <SiteContactContext.Provider value={value}>
      {children}
    </SiteContactContext.Provider>
  )
}

export default function useSiteContact() {
  return useContext(SiteContactContext)
}
