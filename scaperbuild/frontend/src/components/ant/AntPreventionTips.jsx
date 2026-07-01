import { cmsText } from '../../utils/cmsMedia.js'

const CHECK_ICON = (
  <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-double" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" />
  </svg>
)

const TIP_LAYOUT = [
  {
    rowId: '3cbc09e',
    tips: [
      { slug: 'control_moisture', containerId: '452e0a4', headingId: 'e47cc08', introId: '23a7e29', listId: 'acb9541' },
      { slug: 'professional', containerId: '6ffb5b4', headingId: 'd5d1b1b', introId: 'b50781c' },
    ],
  },
  {
    rowId: 'f5c5111',
    tips: [
      { slug: 'natural_deterrents', containerId: 'd1d5604', headingId: 'e0495b8', listId: 'cb3d33f' },
      { slug: 'outdoor_clean', containerId: '594c8ee', headingId: '79db49d', listId: 'a55e290' },
      { slug: 'baits_traps', containerId: '378f25d', headingId: '8d109a3', listId: '8c84a46' },
    ],
  },
  {
    rowId: 'a75e30c',
    tips: [
      { slug: 'clean_home', containerId: 'a41a979', headingId: '3bce987', listId: '446fbbb' },
      { slug: 'seal_entries', containerId: 'b06aef9', headingId: 'd668ba4', listId: 'a4646d8' },
      { slug: 'eliminate_moisture', containerId: 'a61947a', headingId: '8da92f1', listId: '5750a6f' },
    ],
  },
]

const DEFAULTS = {
  control_moisture: {
    title: '7. Control Moisture and Leaks',
    intro: 'Ants are attracted to water sources, so eliminating moisture can help deter them.',
    list: [
      'Fix leaky faucets, pipes, and drains to prevent excess moisture.',
      'Use a dehumidifier in damp areas like basements and bathrooms.',
      'Ensure proper ventilation to reduce humidity levels.',
    ],
  },
  professional: {
    title: '8. Hire Professional Pest Control Services',
    intro:
      'If ant infestations persist despite your efforts, professional pest control can provide long-term solutions. Experts can identify the source of the problem and apply treatments that prevent future infestations.',
    list: [],
  },
  natural_deterrents: {
    title: '4. Use Natural Ant Deterrents',
    list: [
      'Sprinkle cinnamon, vinegar, or coffee grounds near ant entry points.',
      'Place lemon or orange peels around the kitchen and pantry.',
      'Use essential oils like peppermint and tea tree oil to repel ants.',
    ],
  },
  outdoor_clean: {
    title: '5. Keep Your Outdoor Area Clean',
    list: [
      'Trim trees and bushes away from your home.',
      'Remove standing water and debris from the yard.',
      'Store firewood away from the house to prevent nesting areas.',
    ],
  },
  baits_traps: {
    title: '6. Set Up Ant Baits and Traps',
    list: [
      'Use bait stations to eliminate ant colonies at the source.',
      'Place traps near entry points and food sources.',
      'Replace baits regularly for effective results.',
    ],
  },
  clean_home: {
    title: '1. Keep Your Home Clean',
    list: [
      'Wipe down surfaces to remove food crumbs and spills.',
      'Sweep and mop floors regularly.',
      'Store food in airtight containers to avoid attracting ants.',
    ],
  },
  seal_entries: {
    title: '2. Seal Entry Points',
    list: [
      'Inspect doors, windows, and walls for cracks or gaps.',
      'Use silicone caulk to seal any openings where ants may enter.',
      'Install weather stripping on doors and windows.',
    ],
  },
  eliminate_moisture: {
    title: '3. Eliminate Moisture Sources',
    list: [
      'Fix leaking pipes and faucets, as ants are attracted to moisture.',
      'Ensure proper drainage around your home.',
      'Use a dehumidifier in damp areas like basements.',
    ],
  },
}

function TipCard({ tip, layout }) {
  const defaults = DEFAULTS[layout.slug] ?? {}
  const title = cmsText(tip?.title, defaults.title)
  const intro = cmsText(tip?.intro, defaults.intro)
  const list = tip?.list?.length ? tip.list : defaults.list ?? []

  return (
    <div
      className={`elementor-element elementor-element-${layout.containerId} e-con-full e-flex e-con e-child`}
      data-element_type="container"
      data-id={layout.containerId}
      data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"
    >
      <div
        className={`elementor-element elementor-element-${layout.headingId} elementor-widget elementor-widget-heading`}
        data-element_type="widget"
        data-id={layout.headingId}
        data-widget_type="heading.default"
      >
        <div className="elementor-widget-container">
          <h2 className="elementor-heading-title elementor-size-default">{title}</h2>
        </div>
      </div>
      {layout.introId ? (
        <div
          className={`elementor-element elementor-element-${layout.introId} elementor-widget elementor-widget-text-editor`}
          data-element_type="widget"
          data-id={layout.introId}
          data-widget_type="text-editor.default"
        >
          <div className="elementor-widget-container">
            {intro ? <p>{intro}</p> : null}
          </div>
        </div>
      ) : null}
      {layout.listId && list.length ? (
        <div
          className={`elementor-element elementor-element-${layout.listId} elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list`}
          data-element_type="widget"
          data-id={layout.listId}
          data-widget_type="icon-list.default"
        >
          <div className="elementor-widget-container">
            <ul className="elementor-icon-list-items">
              {list.map((item) => (
                <li key={item} className="elementor-icon-list-item">
                  <span className="elementor-icon-list-icon">{CHECK_ICON}</span>
                  <span className="elementor-icon-list-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default function AntPreventionTips({ tips = [] }) {
  const bySlug = Object.fromEntries(tips.map((tip) => [tip.slug, tip]))

  return (
    <>
      {TIP_LAYOUT.map((row) => (
        <div key={row.rowId} className={`elementor-element elementor-element-${row.rowId} e-flex e-con-boxed e-con e-child`} data-element_type="container" data-id={row.rowId}>
          <div className="e-con-inner">
            {row.tips.map((layout) => (
              <TipCard key={layout.slug} layout={layout} tip={bySlug[layout.slug] ?? { slug: layout.slug, ...DEFAULTS[layout.slug] }} />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
