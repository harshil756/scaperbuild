import { apiOrigin } from './apiOrigin.js'

/**
 * Build a full API URL.
 *
 * - Dev (no VITE_API_URL): `/api/menus/header` → Vite proxy → http://127.0.0.1:8000/api/menus/header
 * - With VITE_API_URL=http://127.0.0.1:8000: → http://127.0.0.1:8000/api/menus/header
 *
 * `path` must start with `/api/` (e.g. `/api/menus/header`).
 */
export function apiUrl(path) {
  const base = apiOrigin()
  let normalized = path.startsWith('/') ? path : `/${path}`

  if (!normalized.startsWith('/api/')) {
    normalized = `/api${normalized.startsWith('/') ? normalized : `/${normalized}`}`
  }

  if (!base) {
    return normalized
  }

  if (base.endsWith('/api') && normalized.startsWith('/api/')) {
    return `${base}${normalized.slice(4)}`
  }

  return `${base}${normalized}`
}
