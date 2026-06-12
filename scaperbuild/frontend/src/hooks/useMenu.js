import { useEffect, useRef, useState } from 'react'
import { apiUrl } from '../utils/api.js'

export default function useMenu(key, fallback = []) {
  const fallbackRef = useRef(fallback)
  fallbackRef.current = fallback

  const [items, setItems] = useState(fallback)

  useEffect(() => {
    if (!key) {
      setItems(fallbackRef.current)
      return undefined
    }

    let cancelled = false

    fetch(apiUrl(`/api/menus/${key}`))
      .then((res) => {
        if (!res.ok) throw new Error(`Menu request failed (${res.status})`)
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        if (Array.isArray(data?.items) && data.items.length > 0) {
          setItems(data.items)
        } else {
          setItems(fallbackRef.current)
        }
      })
      .catch(() => {
        if (!cancelled) setItems(fallbackRef.current)
      })

    return () => {
      cancelled = true
    }
  }, [key])

  return items
}
