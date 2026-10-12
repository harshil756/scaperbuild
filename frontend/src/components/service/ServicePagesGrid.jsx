import { Link } from 'react-router-dom'
import { ourServicesGridPages, ourServicesGridRowIds } from '../../config/servicePagesGrid.js'

const AngleRight = () => (
  <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
  </svg>
)

function ServiceCard({ service }) {
  const imageWidth = service.imageWidth ?? 150
  const imageHeight = service.imageHeight ?? 150

  return (
    <div
      className={`elementor-element elementor-element-${service.containerId} e-con-full e-flex e-con e-child service-pages-grid-cell`}
      data-element_type="container"
      data-id={service.containerId}
    >
      <div
        className={`elementor-element elementor-element-${service.widgetId} ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box${service.imageClassName ? ` ${service.imageClassName}` : ''}`}
        data-element_type="widget"
        data-id={service.widgetId}
        data-widget_type="elementskit-icon-box.default"
      >
        <div className="elementor-widget-container">
          <div className="ekit-wid-con">
            <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-">
              <div className="elementskit-box-header">
                <div className="elementskit-info-box-icon">
                  <img
                    alt={service.alt}
                    className="attachment- size-"
                    decoding="async"
                    height={imageHeight}
                    loading="lazy"
                    src={service.image}
                    width={imageWidth}
                  />
                </div>
              </div>
              <div className="box-body">
                <h3 className="elementskit-info-box-title">{service.title}</h3>
                <div className="box-footer disable_hover_button">
                  <div className="btn-wraper">
                    <Link className="elementskit-btn whitespace--normal elementor-animation-bounce-in" to={service.path}>
                      Learn More
                      <AngleRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicePagesGrid() {
  const rows = []
  for (let index = 0; index < ourServicesGridPages.length; index += 3) {
    rows.push(ourServicesGridPages.slice(index, index + 3))
  }

  return rows.map((row, rowIndex) => (
    <div
      key={ourServicesGridRowIds[rowIndex]}
      className={`elementor-element elementor-element-${ourServicesGridRowIds[rowIndex]} e-flex e-con-boxed e-con e-parent e-lazyloaded service-pages-grid-row`}
      data-element_type="container"
      data-id={ourServicesGridRowIds[rowIndex]}
    >
      <div className="e-con-inner service-pages-grid-inner">
        {row.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  ))
}
