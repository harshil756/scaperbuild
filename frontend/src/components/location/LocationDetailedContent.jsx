import { useState } from 'react'

export default function LocationDetailedContent({
  title,
  previewContent,
  expandedContent,
  id = 'location-detailed-seo-content',
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="loc-detail-section" aria-label="Detailed Location Information">
      <div className="loc-container">
        <div className="loc-detail-content">
          {title && <h2 className="loc-detail-title">{title}</h2>}

          <div className="loc-detail-body">
            {previewContent}

            {expandedContent && (
              <div
                id={id}
                className={`loc-expandable-content ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}
                role="region"
                aria-live="polite"
              >
                {expandedContent}
              </div>
            )}

            {expandedContent && (
              <button
                type="button"
                className="loc-readmore-btn"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                aria-controls={id}
              >
                <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                <span aria-hidden="true">{isExpanded ? '▲' : '▼'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
