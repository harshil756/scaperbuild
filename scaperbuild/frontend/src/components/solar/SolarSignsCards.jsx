import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'

const ROWS = [
  [
    { containerId: 'a2f0ee1', imageId: '9776c09', boxId: '252edb7', slug: 'pigeons' },
    { containerId: '5c21a2e', imageId: '0ae7e6e', boxId: '329aa2c', slug: 'sparrows' },
    { containerId: '4627a5a', imageId: '39e4d1b', boxId: '3297e69', slug: 'seagulls' },
  ],
  [
    { containerId: '75ca266', imageId: 'd22a94d', boxId: 'cd1d42d', slug: 'starlings' },
    { containerId: '3469fc5', imageId: '8979b6e', boxId: 'd026b4d', slug: 'indian_mynas' },
  ],
]

const ROW_IDS = ['3d668ca', 'cb13aae']

function SignCard({ item, containerId, imageId, boxId }) {
  return (
    <div className={`elementor-element elementor-element-${containerId} e-con-full e-transform e-transform e-flex e-con e-child`} data-element_type="container" data-id={containerId} data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      <div className={`elementor-element elementor-element-${imageId} elementor-widget elementor-widget-image`} data-element_type="widget" data-id={imageId} data-widget_type="image.default">
        <div className="elementor-widget-container">
          <img alt={cmsText(item?.alt, item?.title)} className="attachment-thumbnail size-thumbnail" decoding="async" height={150} loading="lazy" src={cmsMediaUrl(item?.image ?? item?.image_url, '')} width={150} />
        </div>
      </div>
      <div className={`elementor-element elementor-element-${boxId} elementor-widget elementor-widget-image-box`} data-element_type="widget" data-id={boxId} data-widget_type="image-box.default">
        <div className="elementor-widget-container">
          <div className="elementor-image-box-wrapper">
            <div className="elementor-image-box-content">
              <h3 className="elementor-image-box-title">{cmsText(item?.title, '')}</h3>
              <p className="elementor-image-box-description">{cmsText(item?.description, '')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SolarSignsCards({ items = [] }) {
  const bySlug = Object.fromEntries(items.map((item) => [item.slug, item]))

  return (
    <>
      {ROWS.map((row, index) => (
        <div key={ROW_IDS[index]} className={`elementor-element elementor-element-${ROW_IDS[index]} e-con-full e-flex e-con e-child`} data-element_type="container" data-id={ROW_IDS[index]}>
          {row.map((card) => (
            <SignCard key={card.slug} item={bySlug[card.slug]} {...card} />
          ))}
        </div>
      ))}
    </>
  )
}
