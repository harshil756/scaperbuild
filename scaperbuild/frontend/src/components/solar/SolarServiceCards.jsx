import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'

const ROWS = [
  [
    { containerId: '37ce406', imageId: '99035f0', boxId: '46afa1d', slug: 'cleaning' },
    { containerId: '169ab00', imageId: '84b9190', boxId: 'e04afae', slug: 'spikes' },
    { containerId: '75d26f6', imageId: '990fcad', boxId: '0783a5d', slug: 'mesh' },
  ],
  [
    { containerId: '1b17abc', imageId: '5bbe262', boxId: '800d320', slug: 'uv_gel' },
    { containerId: '2e7b512', imageId: '2771349', boxId: '2f7a1a4', slug: 'nest_removal' },
    { containerId: '2c40ae6', imageId: 'bd40e91', boxId: 'ff16ced', slug: 'maintenance' },
  ],
]

const ROW_IDS = ['5602f2b', '9f28e19']

function ServiceCardRow({ row, bySlug, containerId }) {
  return (
    <div className={`elementor-element elementor-element-${containerId} e-con-full e-flex e-con e-child`} data-element_type="container" data-id={containerId}>
      {row.map(({ containerId: cardContainerId, imageId, boxId, slug }) => (
        <div key={slug} className={`elementor-element elementor-element-${cardContainerId} e-con-full e-flex e-con e-child`} data-element_type="container" data-id={cardContainerId} data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className={`elementor-element elementor-element-${imageId} elementor-widget elementor-widget-image`} data-element_type="widget" data-id={imageId} data-widget_type="image.default">
            <div className="elementor-widget-container">
              <img
                alt={cmsText(bySlug[slug]?.alt, bySlug[slug]?.title)}
                className="attachment-large size-large"
                decoding="async"
                height={800}
                loading="lazy"
                src={cmsMediaUrl(bySlug[slug]?.image ?? bySlug[slug]?.image_url, '')}
                width={800}
              />
            </div>
          </div>
          <div className={`elementor-element elementor-element-${boxId} elementor-widget elementor-widget-icon-box`} data-element_type="widget" data-id={boxId} data-widget_type="icon-box.default">
            <div className="elementor-widget-container">
              <div className="elementor-icon-box-wrapper">
                <div className="elementor-icon-box-content">
                  <h3 className="elementor-icon-box-title">
                    <span>{cmsText(bySlug[slug]?.title, '')}</span>
                  </h3>
                  <p className="elementor-icon-box-description">{cmsText(bySlug[slug]?.description, '')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function SolarServiceCards({ items = [] }) {
  const bySlug = Object.fromEntries(items.map((item) => [item.slug, item]))

  return (
    <>
      {ROWS.map((row, index) => (
        <ServiceCardRow key={ROW_IDS[index]} row={row} bySlug={bySlug} containerId={ROW_IDS[index]} />
      ))}
    </>
  )
}
