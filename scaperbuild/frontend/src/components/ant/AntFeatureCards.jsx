import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'

const CARD_LAYOUT = [
  { containerId: '068ef92', widgetId: 'd1454f0', slug: 'free_quotes' },
  { containerId: '82121dd', widgetId: 'df69cfe', slug: 'five_star_reviews' },
  { containerId: '59019b6', widgetId: '736c883', slug: 'licensed' },
  { containerId: 'ba905cd', widgetId: '0370463', slug: 'satisfaction' },
  { containerId: '2e53013', widgetId: '3e2fb54', slug: 'local_owned' },
]

const DEFAULTS = {
  free_quotes: { title: 'Free Quotes', image: '/assets/images/controll-5-150x150_2e53f6c6.png', alt: '' },
  five_star_reviews: { title: '100+ Five Star Reviews', image: '/assets/images/controll-4_8dd6b2b1.png', alt: '' },
  licensed: { title: 'Licensed Professionals', image: '/assets/images/controll-1_431ab690.png', alt: 'controll-1.png' },
  satisfaction: { title: 'Satisfaction Guaranteed', image: '/assets/images/controll-2_9d975649.png', alt: '' },
  local_owned: { title: 'Local Family Owned', image: '/assets/images/controll-3_80d72978.png', alt: '7 States Pest Control' },
}

function FeatureCard({ card, containerId, widgetId }) {
  const slug = card?.slug
  const defaults = DEFAULTS[slug] ?? {}
  const title = cmsText(card?.title, defaults.title)
  const alt = cmsText(card?.alt, defaults.alt ?? title)
  const src = cmsMediaUrl(card?.image, defaults.image)

  return (
    <div className={`elementor-element elementor-element-${containerId} e-con-full e-flex e-con e-child`} data-element_type="container" data-id={containerId}>
      <div
        className={`elementor-element elementor-element-${widgetId} elementor-position-top elementor-widget elementor-widget-image-box`}
        data-element_type="widget"
        data-id={widgetId}
        data-widget_type="image-box.default"
      >
        <div className="elementor-widget-container">
          <div className="elementor-image-box-wrapper">
            <figure className="elementor-image-box-img">
              <img alt={alt} className="elementor-animation-shrink attachment-full size-full" decoding="async" loading="lazy" src={src} />
            </figure>
            <div className="elementor-image-box-content">
              <h3 className="elementor-image-box-title">{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AntFeatureCards({ items = [] }) {
  const bySlug = Object.fromEntries(items.map((item) => [item.slug, item]))

  return (
    <div className="elementor-element elementor-element-df39b6f e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="df39b6f" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      <div className="e-con-inner">
        {CARD_LAYOUT.map(({ containerId, widgetId, slug }) => (
          <FeatureCard key={slug} card={bySlug[slug] ?? { slug, ...DEFAULTS[slug] }} containerId={containerId} widgetId={widgetId} />
        ))}
      </div>
    </div>
  )
}
