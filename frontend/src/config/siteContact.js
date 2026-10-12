/** Defaults used until /api/pages/contact-us loads (and as last-resort fallbacks). */
export const SITE_CONTACT_DEFAULTS = {
  phoneNumber: '+61 434 660 060',
  phoneUrl: 'tel:+61434660060',
  emailAddress: '7statespestcontrol@gmail.com',
  emailUrl: 'mailto:7statespestcontrol@gmail.com',
  address: 'Melbourne, Australia',
  hoursTitle: 'Opening Hours',
  hoursBody: 'Daily: 07:00 AM – 07:00 PM<br />Sunday &amp; Holidays: Closed',
}

/** Known legacy contact strings embedded in scraped / fallback HTML. */
const LEGACY_PHONE_DISPLAYS = [
  '+61 434 660 060',
  '( +61 434 660 060 )',
  '(+61 434 660 060)',
  '(03) 4320 5325',
]

const LEGACY_PHONE_HREFS = ['tel:+61434660060', 'tel:61434660060', 'tel:0343205325', 'tel:+61343205325']

const LEGACY_EMAILS = ['7statespestcontrol@gmail.com']
const LEGACY_EMAIL_HREFS = ['mailto:7statespestcontrol@gmail.com']

export function phoneToTel(number, fallback = SITE_CONTACT_DEFAULTS.phoneUrl) {
  if (!number) return fallback
  const digits = String(number).replace(/\D+/g, '')
  if (!digits) return fallback
  return digits.startsWith('61') ? `tel:+${digits}` : `tel:${digits}`
}

export function emailToMailto(email, fallback = SITE_CONTACT_DEFAULTS.emailUrl) {
  if (!email) return fallback
  return `mailto:${String(email).trim()}`
}

/**
 * Replace hardcoded legacy phone/email strings in CMS/fallback HTML with current contact.
 */
export function rewriteSiteContactHtml(html, contact = SITE_CONTACT_DEFAULTS) {
  if (!html || typeof html !== 'string') return html

  let out = html

  for (const href of LEGACY_PHONE_HREFS) {
    if (href === contact.phoneUrl) continue
    out = out.split(href).join(contact.phoneUrl)
  }
  for (const display of LEGACY_PHONE_DISPLAYS) {
    if (display === contact.phoneNumber) continue
    out = out.split(display).join(contact.phoneNumber)
  }
  for (const href of LEGACY_EMAIL_HREFS) {
    out = out.split(href).join(contact.emailUrl)
  }
  for (const email of LEGACY_EMAILS) {
    out = out.split(email).join(contact.emailAddress)
  }

  return out
}
