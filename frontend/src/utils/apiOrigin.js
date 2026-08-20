/**
 * Resolve the Laravel API origin from VITE_API_URL.
 * Production builds must use https:// — http:// is upgraded automatically
 * (except localhost) to avoid Mixed Content blocks on https://7statespestcontrol.com.au
 */
export function apiOrigin() {
  let base = String(import.meta.env.VITE_API_URL ?? '')
    .trim()
    .replace(/\/$/, '')

  if (!base) return ''

  if (
    base.startsWith('http://') &&
    !base.includes('localhost') &&
    !base.includes('127.0.0.1')
  ) {
    base = `https://${base.slice('http://'.length)}`
  }

  return base
}
