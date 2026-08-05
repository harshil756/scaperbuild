import useSiteContact from '../../hooks/useSiteContact.js'
import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'

const CARD_LAYOUT = [
  { containerId: 'e9e8b6d', widgetId: '20c12d2', slug: 'rodent' },
  { containerId: '753b061', widgetId: 'e22eba8', slug: 'cockroach' },
  { containerId: 'e28f0c5', widgetId: 'f136ba6', slug: 'bed_bug' },
  { containerId: 'e1e9d5e', widgetId: '14a5f46', slug: 'ant', tall: true },
]

function ServiceCard({ card, widgetId, tall }) {
  const { phoneUrl } = useSiteContact()
  const title = cmsText(card?.title, 'Service')
  const price = cmsText(card?.price_text, '')
  const badge = cmsText(card?.badge, '')
  const alt = cmsText(card?.alt, title)
  const callLabel = cmsText(card?.call_label, 'Call Now')
  const callUrl = cmsText(card?.call_url, phoneUrl)
  const src = cmsMediaUrl(card?.image, '/assets/images/placeholder.webp')
  const height = tall ? 360 : 150
  const width = tall ? 360 : 150

  return (
    <div className={`elementor-element elementor-element-${widgetId} ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box`} data-element_type="widget" data-id={widgetId} data-widget_type="elementskit-icon-box.default">
      <div className="elementor-widget-container">
        <div className="ekit-wid-con">
          <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
            <div className="elementskit-box-header">
              <div className="elementskit-info-box-icon">
                <img alt={alt} className="attachment- size-" decoding="async" height={height} loading="lazy" src={src} width={width} />
              </div>
            </div>
            <div className="box-body">
              <h3 className="elementskit-info-box-title">{title}</h3>
              <p>{price}</p>
              <div className="box-footer disable_hover_button">
                <div className="btn-wraper">
                  <a className="elementskit-btn whitespace--normal elementor-animation-bounce-in" href={callUrl}>
                    {callLabel}
                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="ekit-icon-box-badge ekit_position_top_left">
              <span className="ekit-badge">{badge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutServiceCards({ cards = [] }) {
  const bySlug = Object.fromEntries(cards.map((c) => [c.slug, c]))

  return (
    <div className="elementor-element elementor-element-5ab2312 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="5ab2312">
      <div className="e-con-inner">
        {CARD_LAYOUT.map(({ containerId, widgetId, slug, tall }) => (
          <div key={slug} className={`elementor-element elementor-element-${containerId} e-con-full e-flex e-con e-child`} data-element_type="container" data-id={containerId}>
            <ServiceCard card={bySlug[slug]} widgetId={widgetId} tall={tall} />
          </div>
        ))}
      </div>
    </div>
  )
}
