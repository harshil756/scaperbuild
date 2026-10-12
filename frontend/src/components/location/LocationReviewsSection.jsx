import TrustIndexReviews from '../TrustIndexReviews.jsx'

export default function LocationReviewsSection({
  ratingText = 'EXCELLENT',
  reviewCountText = 'Based on 45 reviews',
}) {
  return (
    <section className="loc-reviews-section" aria-label="Customer Reviews">
      <div className="loc-container">
        <div className="loc-reviews-header">
          <div className="loc-reviews-badge">{ratingText}</div>
          <div className="loc-reviews-stars" aria-label="5 out of 5 stars">
            ★★★★★
          </div>
          <div className="loc-reviews-count">{reviewCountText}</div>
        </div>

        <div className="loc-reviews-slider-wrap">
          <TrustIndexReviews variant="slider" />
        </div>
      </div>
    </section>
  )
}
