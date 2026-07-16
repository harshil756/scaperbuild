import { useEffect, useState } from 'react'
import { apiUrl } from '../utils/api.js'

export default function useBlogPostCms(slug) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) {
      setLoading(false)
      return undefined
    }

    let cancelled = false
    setLoading(true)
    setError(null)

    fetch(apiUrl(`/api/blog-posts/${slug}`))
      .then((res) => {
        if (!res.ok) throw new Error(`Blog post request failed (${res.status})`)
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        setPost(data)
      })
      .catch((err) => {
        if (cancelled) return
        setError(err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [slug])

  return { post, loading, error }
}
