import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'

const ROWS = [
  [
    { containerId: '47a78bd', imageId: '3f71c8a', boxId: '239054b', slug: 'maintenance' },
    { containerId: '161dace', imageId: 'df19d9e', boxId: '17d5b9b', slug: 'efficiency' },
    { containerId: '8936d07', imageId: '4181880', boxId: '5d86832', slug: 'lifespan' },
  ],
  [
    { containerId: 'e635623', imageId: '9713de7', boxId: '3774c48', slug: 'output' },
    { containerId: '2f733ae', imageId: 'c8e36d1', boxId: '520b6d6', slug: 'eco_friendly' },
  ],
]

const ROW_IDS = ['62fdcad', 'e86bf87']

function AdvantageCard({ item, containerId, imageId, boxId }) {
  return (
    <div className={`elementor-element elementor-element-${containerId} e-con-full e-flex e-con e-child`} data-element_type="container" data-id={containerId} data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      <div className={`elementor-element elementor-element-${imageId} elementor-widget elementor-widget-image`} data-element_type="widget" data-id={imageId} data-widget_type="image.default">
        <div className="elementor-widget-container">
          <img alt={cmsText(item?.alt, item?.title)} className="attachment-large size-large" decoding="async" height={800} loading="lazy" src={cmsMediaUrl(item?.image ?? item?.image_url, '')} width={800} />
        </div>
      </div>
      <div className={`elementor-element elementor-element-${boxId} elementor-widget elementor-widget-icon-box`} data-element_type="widget" data-id={boxId} data-widget_type="icon-box.default">
        <div className="elementor-widget-container">
          <div className="elementor-icon-box-wrapper">
            <div className="elementor-icon-box-content">
              <h3 className="elementor-icon-box-title">
                <span>{cmsText(item?.title, '')}</span>
              </h3>
              <p className="elementor-icon-box-description">{cmsText(item?.description, '')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SolarAdvantagesCards({ items = [] }) {
  const bySlug = Object.fromEntries(items.map((item) => [item.slug, item]))

  return (
    <>
      {ROWS.map((row, index) => (
        <div key={ROW_IDS[index]} className={`elementor-element elementor-element-${ROW_IDS[index]} e-con-full e-flex e-con e-child`} data-element_type="container" data-id={ROW_IDS[index]}>
          {row.map((card) => (
            <AdvantageCard key={card.slug} item={bySlug[card.slug]} {...card} />
          ))}
        </div>
      ))}
    </>
  )
}
