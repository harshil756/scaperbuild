import { useEffect, useMemo, useRef, useState } from 'react'
import './trustIndexReviews.css'

const STATIC_HTML = '/assets/html/trustindex-home-reviews.html'

function parseTrustIndexReviews(rawHtml) {
  if (!rawHtml || typeof rawHtml !== 'string') return []
  if (typeof window === 'undefined' || typeof DOMParser === 'undefined') return []

  const doc = new DOMParser().parseFromString(rawHtml, 'text/html')
  const items = Array.from(doc.querySelectorAll('.ti-review-item'))

  return items
    .map((el) => {
      const name = (el.querySelector('.ti-name')?.textContent || '').trim()
      const date = (el.querySelector('.ti-date')?.textContent || '').trim()
      const text = (el.querySelector('.ti-review-content')?.textContent || '').trim()
      const stars = el.querySelectorAll('.ti-star').length || 5

      const profile =
        el.querySelector('.ti-profile-img trustindex-image')?.getAttribute('data-imgurl') ||
        el.querySelector('.ti-profile-img img')?.getAttribute('src') ||
        ''

      if (!name && !text) return null

      return {
        name,
        date,
        text,
        stars: Math.max(0, Math.min(5, Number.isFinite(stars) ? stars : 5)),
        profile,
      }
    })
    .filter(Boolean)
}

function Stars({ value }) {
  const v = Math.max(0, Math.min(5, value || 0))
  return (
    <div style={{ display: 'flex', gap: 2, lineHeight: 1 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true" style={{ color: i < v ? '#f6bb06' : '#d1d5db' }}>
          ★
        </span>
      ))}
    </div>
  )
}

function GoogleMark() {
  // Small inline SVG that resembles the Google "G" mark.
  return (
    <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden="true" focusable="false">
      <path
        fill="#EA4335"
        d="M9.2 7.3v3.5h5c-.2 1.1-.8 2-1.7 2.6l2.7 2.1c1.6-1.5 2.5-3.7 2.5-6.4 0-.6-.1-1.1-.2-1.8H9.2z"
      />
      <path
        fill="#34A853"
        d="M4.6 10.7l-.6.5-2.1 1.6C3 15 5.8 16.7 9.2 16.7c2.3 0 4.3-.8 5.8-2.2l-2.7-2.1c-.7.5-1.7.9-3.1.9-2.3 0-4.2-1.5-4.9-3.6l-.7 1z"
      />
      <path
        fill="#4A90E2"
        d="M1.9 5.5c-.3.7-.5 1.5-.5 2.4 0 .9.2 1.7.5 2.4l2.7-2.1c-.1-.4-.2-.8-.2-1.3 0-.5.1-.9.2-1.3L1.9 5.5z"
      />
      <path
        fill="#FBBC05"
        d="M9.2 3.4c1.3 0 2.4.4 3.3 1.3l2.4-2.4C13.4 0.9 11.5 0 9.2 0 5.8 0 3 1.7 1.9 4.1l2.7 2.1c.7-2.1 2.6-3.6 4.6-3.6z"
      />
    </svg>
  )
}

/** Google reviews (Trustindex) — render clean cards from scraped HTML. */
export default function TrustIndexReviews({ className = 'elementor-shortcode', variant = 'slider' }) {
  const hostRef = useRef(null)
  const [reviews, setReviews] = useState([])
  const [error, setError] = useState(false)
  const [active, setActive] = useState(0)
  const [perPage, setPerPage] = useState(3)
  const [expanded, setExpanded] = useState(() => new Set())

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch(STATIC_HTML, { cache: 'force-cache' })
        if (!res.ok) throw new Error('reviews_html_fetch_failed')
        const html = await res.text()
        const parsed = parseTrustIndexReviews(html)
        if (!cancelled) setReviews(parsed)
      } catch {
        if (!cancelled) setError(true)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    const compute = () => {
      if (typeof window === 'undefined') return
      const w = window.innerWidth || 1200
      setPerPage(w <= 640 ? 1 : w <= 1024 ? 2 : 3)
    }
    compute()
    window.addEventListener('resize', compute, { passive: true })
    return () => window.removeEventListener('resize', compute)
  }, [])

  const content = useMemo(() => {
    if (!reviews.length) return null
    const list = reviews.slice(0, 12)

    const cards = list.map((r, idx) => (
      // Match old site: white card, Google icon top-right, rating text, read-more.
      <div key={`${r.name}-${r.date}-${idx}`} className="tir-card">
        <div className="tir-google" title="Google">
          <GoogleMark />
        </div>

        <div className="tir-card-header">
          <div className="tir-avatar" aria-hidden={!r.profile}>
            {r.profile ? (
              <img
                alt={`${r.name} profile`}
                src={r.profile}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            ) : null}
          </div>
          <div className="tir-meta">
            <div className="tir-name">{r.name}</div>
            <div className="tir-date">{r.date}</div>
          </div>
        </div>
        <div className="tir-stars-row">
          <Stars value={r.stars} />
          <div className="tir-rating-text">{`${r.stars} out of 5 stars`}</div>
        </div>
        <div className={`tir-text ${expanded.has(idx) ? 'is-expanded' : ''}`}>{r.text}</div>
        {r.text && r.text.length > 140 ? (
          <button
            type="button"
            className="tir-readmore"
            onClick={() =>
              setExpanded((prev) => {
                const next = new Set(prev)
                if (next.has(idx)) next.delete(idx)
                else next.add(idx)
                return next
              })
            }
          >
            {expanded.has(idx) ? 'Hide' : 'Read more'}
          </button>
        ) : null}
      </div>
    ))

    if (variant !== 'slider') {
      return <div className="tir-fallback-grid">{cards}</div>
    }

    const maxIndex = Math.max(0, list.length - perPage)
    const safeActive = Math.max(0, Math.min(active, maxIndex))
    const canPrev = safeActive > 0
    const canNext = safeActive < maxIndex

    const goPrev = () => setActive((v) => Math.max(0, v - perPage))
    const goNext = () => setActive((v) => Math.min(maxIndex, v + perPage))

    return (
      <div className="tir-slider" role="region" aria-label="Google reviews">
        <button className="tir-nav tir-prev" type="button" onClick={goPrev} disabled={!canPrev} aria-label="Previous reviews">
          <span className="tir-nav-icon" aria-hidden="true">
            ‹
          </span>
        </button>
        <div className="tir-viewport">
          <div
            className="tir-track"
            style={{
              transform: `translateX(calc(-1 * ${safeActive} * (100% / ${perPage})))`,
            }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="tir-slide"
                style={{ flex: `0 0 calc(100% / ${perPage})` }}
              >
                {card}
              </div>
            ))}
          </div>
        </div>
        <button className="tir-nav tir-next" type="button" onClick={goNext} disabled={!canNext} aria-label="Next reviews">
          <span className="tir-nav-icon" aria-hidden="true">
            ›
          </span>
        </button>
      </div>
    )
  }, [reviews, variant, active, perPage, expanded])

  return (
    <div className={className} ref={hostRef} style={{ margin: 0, padding: 0 }}>
      {content}
      {!content && !error ? <div style={{ height: 20 }} /> : null}
    </div>
  )
}
