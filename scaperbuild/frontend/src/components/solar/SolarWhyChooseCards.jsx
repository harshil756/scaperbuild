import { cmsText } from '../../utils/cmsMedia.js'

const CARDS = [
  { containerId: 'ab54550', boxId: 'a871b64', slug: 'experts' },
  { containerId: '090471b', boxId: '0d70a0f', slug: 'quick_service' },
  { containerId: 'd84d1db', boxId: '0d6099b', slug: 'technicians' },
  { containerId: '0de551c', boxId: 'd015c87', slug: 'guarantee' },
]

const DEFAULT_ITEMS = {
  experts: {
    title: 'Trusted Local Experts',
    description:
      'With over 7 years of experience, we are your local specialists in bird control and solar panel protection. You can rely on our expertise to protect your property from the damage caused by unwanted bird activity.',
  },
  quick_service: {
    title: 'Quick and Efficient Service',
    description:
      'We understand the urgency when it comes to bird infestations. That’s why we offer same-day or next-day services, ensuring your solar panels and property are protected without delay.',
  },
  technicians: {
    title: 'Skilled and Certified Technicians',
    description:
      'Our team is fully certified and equipped with the latest techniques in eco-friendly bird proofing solutions. We take pride in delivering high-quality service with the utmost care for both your property and the environment.',
  },
  guarantee: {
    title: 'Satisfaction Guaranteed',
    description:
      'We are committed to providing top-notch service, which is why we offer a 100% satisfaction guarantee. If you’re not happy with the results, we’ll ensure the issue is resolved to your satisfaction.',
  },
}

export default function SolarWhyChooseCards({ items = [] }) {
  const bySlug = { ...DEFAULT_ITEMS, ...Object.fromEntries(items.map((item) => [item.slug, item])) }

  return (
    <div className="elementor-element elementor-element-2583f30 e-con-full e-flex e-con e-child" data-element_type="container" data-id="2583f30">
      {CARDS.map(({ containerId, boxId, slug }) => {
        const item = bySlug[slug]
        return (
          <div key={slug} className={`elementor-element elementor-element-${containerId} e-con-full e-flex e-con e-child`} data-element_type="container" data-id={containerId} data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className={`elementor-element elementor-element-${boxId} elementor-widget elementor-widget-icon-box`} data-element_type="widget" data-id={boxId} data-widget_type="icon-box.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-content">
                    <h3 className="elementor-icon-box-title">
                      <span>{cmsText(item?.title, DEFAULT_ITEMS[slug]?.title ?? '')}</span>
                    </h3>
                    <p className="elementor-icon-box-description">{cmsText(item?.description, DEFAULT_ITEMS[slug]?.description ?? '')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
