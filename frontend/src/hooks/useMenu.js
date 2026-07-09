import { useEffect, useRef, useState } from 'react'
import { apiUrl } from '../utils/api.js'

function itemKey(item) {
  return item.path || item.href || item.label
}

function reorderFromFallback(apiItems, fallbackItems) {
  if (!Array.isArray(apiItems) || !Array.isArray(fallbackItems) || fallbackItems.length === 0) {
    return apiItems
  }

  const order = new Map(fallbackItems.map((item, index) => [itemKey(item), index]))

  const sorted = [...apiItems].sort((a, b) => {
    const aIndex = order.get(itemKey(a))
    const bIndex = order.get(itemKey(b))
    if (aIndex == null && bIndex == null) return 0
    if (aIndex == null) return 1
    if (bIndex == null) return -1
    return aIndex - bIndex
  })

  return sorted.map((item) => {
    const fallback = fallbackItems.find((fb) => itemKey(fb) === itemKey(item))
    if (!item.children?.length || !fallback?.children?.length) {
      return item
    }
    return {
      ...item,
      children: reorderFromFallback(item.children, fallback.children),
    }
  })
}

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
          setItems(reorderFromFallback(data.items, fallbackRef.current))
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
