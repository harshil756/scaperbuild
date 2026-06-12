import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'

const ROWS = [
  [
    { containerId: 'a5afa63', widgetId: '9dd63a9', slug: 'cockroach' },
    { containerId: '0b99eff', widgetId: '26bc2d0', slug: 'wasp' },
    { containerId: 'fff4513', widgetId: '60b19b0', slug: 'spider' },
  ],
  [
    { containerId: '15f6620', widgetId: '8bbce6f', slug: 'moth' },
    { containerId: '961ac61', widgetId: '5e1d8c8', slug: 'rodent' },
    { containerId: '84aa109', widgetId: 'bc1e76c', slug: 'ant', tall: true },
  ],
]

const ROW_CONTAINER_IDS = ['78384bb', 'e1054f1']

function ServiceCard({ card, widgetId }) {
  const title = cmsText(card?.title, 'Service')
  const price = cmsText(card?.price_text, '')
  const badge = cmsText(card?.badge, '')
  const alt = cmsText(card?.alt, title)
  const src = cmsMediaUrl(card?.image, '/assets/images/placeholder.webp')

  return (
    <div className={`elementor-element elementor-element-${widgetId} ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box`} data-element_type="widget" data-id={widgetId} data-widget_type="elementskit-icon-box.default">
      <div className="elementor-widget-container">
        <div className="ekit-wid-con">
          <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
            <div className="elementskit-box-header">
              <div className="elementskit-info-box-icon">
                <img alt={alt} className="attachment- size-" decoding="async" height={card?.slug === 'ant' ? 360 : 150} loading="lazy" src={src} width={card?.slug === 'ant' ? 360 : 150} />
              </div>
            </div>
            <div className="box-body">
              <h3 className="elementskit-info-box-title">{title}</h3>
              <p>{price}</p>
              <div className="box-footer disable_hover_button">
                <div className="btn-wraper">
                  <a className="elementskit-btn whitespace--normal elementor-animation-bounce-in" href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6Ijc4NDEiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D">
                    Enquiry Now
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

export default function HomeServiceCards({ cards = [] }) {
  const bySlug = Object.fromEntries(cards.map((c) => [c.slug, c]))

  return (
    <>
      {ROWS.map((row, rowIndex) => (
        <div key={ROW_CONTAINER_IDS[rowIndex]} className={`elementor-element elementor-element-${ROW_CONTAINER_IDS[rowIndex]} e-flex e-con-boxed e-con e-parent e-lazyloaded`} data-element_type="container" data-id={ROW_CONTAINER_IDS[rowIndex]}>
          <div className="e-con-inner">
            {row.map(({ containerId, widgetId, slug }) => (
              <div key={slug} className={`elementor-element elementor-element-${containerId} e-con-full e-flex e-con e-child`} data-element_type="container" data-id={containerId}>
                <ServiceCard card={bySlug[slug]} widgetId={widgetId} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
