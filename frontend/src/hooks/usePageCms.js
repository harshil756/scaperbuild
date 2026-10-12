import { useEffect, useState } from 'react'
import { apiUrl } from '../utils/api.js'

export default function usePageCms(slug) {
  const [page, setPage] = useState(null)
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) return undefined

    let cancelled = false
    setLoading(true)
    setError(null)

    fetch(apiUrl(`/api/pages/${slug}`))
      .then((res) => {
        if (!res.ok) throw new Error(`CMS request failed (${res.status})`)
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        setPage(data)
        setContent(data.content ?? null)
      })
      .catch((err) => {
        if (cancelled) return
        setError(err)
        console.warn('[CMS]', err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [slug])

  return { page, content, loading, error }
}
