import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'

const CARDS = [
  { containerId: '9a7aca7', widgetId: 'f2e83fc', slug: 'energy' },
  { containerId: '1b3b234', widgetId: 'c79814c', slug: 'damage' },
  { containerId: '834b71c', widgetId: '436e30c', slug: 'health' },
  { containerId: '8c74e1d', widgetId: '6e2f711', slug: 'noise' },
  { containerId: '0a4c21d', widgetId: 'a9ff859', slug: 'water_leaks' },
  { containerId: '94b6cc6', widgetId: '89768d6', slug: 'gutters' },
  { containerId: 'efa6f05', widgetId: '429d17c', slug: 'mites' },
]

function HazardCard({ item, containerId, widgetId }) {
  return (
    <div className={`elementor-element elementor-element-${containerId} e-con-full e-flex e-con e-child`} data-element_type="container" data-id={containerId}>
      <div className={`elementor-element elementor-element-${widgetId} ekit-equal-height-enable elementor-widget elementor-widget-elementskit-icon-box`} data-element_type="widget" data-id={widgetId} data-widget_type="elementskit-icon-box.default">
        <div className="elementor-widget-container">
          <div className="ekit-wid-con">
            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
              <div className="elementskit-box-header">
                <div className="elementskit-info-box-icon">
                  <img
                    alt={cmsText(item?.alt, item?.title)}
                    className="attachment- size-"
                    decoding="async"
                    height={100}
                    loading="lazy"
                    src={cmsMediaUrl(item?.image ?? item?.image_url, '')}
                    width={100}
                  />
                </div>
              </div>
              <div className="box-body">
                <h3 className="elementskit-info-box-title">{cmsText(item?.title, '')}</h3>
                <p>{cmsText(item?.description, '')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SolarWhyEssentialCards({ items = [] }) {
  const bySlug = Object.fromEntries(items.map((item) => [item.slug, item]))

  return (
    <>
      <div className="elementor-element elementor-element-8f02689 e-con-full e-flex e-con e-child" data-element_type="container" data-id="8f02689">
        {CARDS.slice(0, 3).map(({ containerId, widgetId, slug }) => (
          <HazardCard key={slug} item={bySlug[slug]} containerId={containerId} widgetId={widgetId} />
        ))}
      </div>
      <div className="elementor-element elementor-element-6b3e7c4 e-con-full e-flex e-con e-child" data-element_type="container" data-id="6b3e7c4">
        {CARDS.slice(3).map(({ containerId, widgetId, slug }) => (
          <HazardCard key={slug} item={bySlug[slug]} containerId={containerId} widgetId={widgetId} />
        ))}
      </div>
    </>
  )
}
