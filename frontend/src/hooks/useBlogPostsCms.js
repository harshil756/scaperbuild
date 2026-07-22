import { useEffect, useState } from 'react'
import { blogPosts as fallbackPosts } from '../data/blogPosts.js'
import { apiUrl } from '../utils/api.js'
import { cmsMediaUrl } from '../utils/cmsMedia.js'

const FALLBACK_IMAGE = '/assets/images/blog-image-1_64df4213.jpeg'

function normalizeApiPost(post) {
  return {
    id: String(post.id ?? post.slug),
    path: post.path || `/${post.slug}/`,
    title: post.title || '',
    excerpt: post.excerpt || '',
    img: {
      alt: post.featured_image_alt || post.title || '',
      className: post.wordpress_id
        ? `attachment-medium size-medium wp-image-${post.wordpress_id}`
        : 'attachment-medium size-medium',
      height: '158',
      sizes: '(max-width: 300px) 100vw, 300px',
      src: cmsMediaUrl(post.featured_image_url, FALLBACK_IMAGE),
      width: '300',
    },
    thumbClass: 'elementor-fit-height',
    category: 'category-blog',
  }
}

export default function useBlogPostsCms() {
  const [posts, setPosts] = useState(fallbackPosts)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    fetch(apiUrl('/api/blog-posts'))
      .then((res) => {
        if (!res.ok) throw new Error(`Blog posts request failed (${res.status})`)
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        if (Array.isArray(data?.items) && data.items.length > 0) {
          setPosts(data.items.map(normalizeApiPost))
        } else {
          setPosts(fallbackPosts)
        }
      })
      .catch((err) => {
        if (cancelled) return
        console.warn('[Blog CMS]', err.message)
        setPosts(fallbackPosts)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { posts, loading }
}
