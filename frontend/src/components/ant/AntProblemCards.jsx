import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'

const CARD_LAYOUT = [
  { containerId: 'f76bb2b', widgetId: '87d1dc1', slug: 'food_contamination', hover: 'hover-border-bottom' },
  { containerId: '987723d', widgetId: 'a38fed7', slug: 'structural_damage', hover: 'hover_from_right hover-border-bottom' },
  { containerId: 'd83ed9c', widgetId: '9e6391c', slug: 'bites_stings', hover: 'hover_from_right hover-border-bottom' },
  { containerId: '6ff100a', widgetId: '986a3d4', slug: 'electrical_damage', hover: 'hover-border-bottom' },
  { containerId: '3ff0379', widgetId: '9c94e27', slug: 'infestation_growth', hover: 'hover_from_right hover-border-bottom' },
  { containerId: 'b6100e2', widgetId: 'afefc50', slug: 'business_disruptions', hover: 'hover_from_right hover-border-bottom' },
]

const DEFAULTS = {
  food_contamination: {
    title: 'Food Contamination',
    description:
      'Ants invade kitchens and pantries, contaminating food by carrying bacteria from unsanitary places. This can pose health risks and lead to food wastage.',
    image: '/assets/images/pathogen-testing-1-r89w6c9nulmfifm63nxly395cvret1xe6eme_d6c72083.png',
    alt: 'pathogen-testing (1)',
  },
  structural_damage: {
    title: 'Structural Damage',
    description:
      'Certain ant species, like carpenter ants, burrow into wood to create nests, weakening furniture, wooden structures, and even building foundations over time.',
    image: '/assets/images/failure-r89w6pfeia4g0z31ytmdwzxlo9yjstdmw7r6ye2tcw_36d6d55d.png',
    alt: 'failure',
  },
  bites_stings: {
    title: 'Painful Bites and Stings',
    description:
      'Some ants, such as fire ants, deliver painful bites and stings that can cause allergic reactions, itching, and discomfort, especially for children and pets.',
    image: '/assets/images/pain-1-r89wostk2gw5iqsvb56uexk1carwz27mdruoj58zkw_4a586854.png',
    alt: 'pain (1)',
  },
  electrical_damage: {
    title: 'Electrical Damage',
    description:
      'Ants are attracted to electrical wiring and appliances, leading to short circuits, equipment failure, and potential fire hazards when they chew on wires.',
    image: '/assets/images/electricity-r89wrvqigx3zkqbrbh4tl5kffrl87cfy50tz5soj6o_7ae18d76.png',
    alt: 'electricity',
  },
  infestation_growth: {
    title: 'Rapid Infestation Growth',
    description:
      'Ant colonies grow quickly, and once they establish a nest, they can spread to different parts of your property, making eradication difficult without professional pest control.',
    image: '/assets/images/mouse-r89wvydc32opvwerj8ime4kc3vihk4m2p6lq0yn480_02e489b2.png',
    alt: 'mouse',
  },
  business_disruptions: {
    title: 'Business Disruptions',
    description:
      'For businesses, especially in the food industry, an ant infestation can damage reputation, lead to health code violations, and even cause financial losses..',
    image: '/assets/images/disruption-r89wzvd4k81q9epynxgns4zh7o7jmq5t8kgk0gu2ao_726e996f.png',
    alt: 'disruption',
  },
}

function ProblemCard({ card, containerId, widgetId, hover }) {
  const slug = card?.slug
  const defaults = DEFAULTS[slug] ?? {}
  const title = cmsText(card?.title, defaults.title)
  const description = cmsText(card?.description, defaults.description)
  const alt = cmsText(card?.alt, defaults.alt ?? title)
  const src = cmsMediaUrl(card?.image, defaults.image)

  return (
    <div className={`elementor-element elementor-element-${containerId} e-con-full e-flex e-con e-child`} data-element_type="container" data-id={containerId}>
      <div
        className={`elementor-element elementor-element-${widgetId} ekit-equal-height-enable elementor-widget elementor-widget-elementskit-image-box`}
        data-element_type="widget"
        data-id={widgetId}
        data-widget_type="elementskit-image-box.default"
      >
        <div className="elementor-widget-container">
          <div className="ekit-wid-con">
            <div className={`elementskit-info-image-box ekit-image-box text-center ${hover}`}>
              <div className="elementskit-box-header image-box-img-center">
                <img alt={alt} decoding="async" loading="lazy" src={src} title={alt} />
              </div>
              <div className="elementskit-box-body ekit-image-box-body">
                <div className="elementskit-box-content ekit-image-box-body-inner">
                  <h3 className="elementskit-info-box-title">{title}</h3>
                  <div className="elementskit-box-style-content">{description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AntProblemCards({ items = [] }) {
  const bySlug = Object.fromEntries(items.map((item) => [item.slug, item]))

  return (
    <>
      <div className="elementor-element elementor-element-782d287 e-con-full e-flex e-con e-child" data-element_type="container" data-id="782d287">
        {CARD_LAYOUT.slice(0, 3).map(({ containerId, widgetId, slug, hover }) => (
          <ProblemCard key={slug} card={bySlug[slug] ?? { slug, ...DEFAULTS[slug] }} containerId={containerId} hover={hover} widgetId={widgetId} />
        ))}
      </div>
      <div className="elementor-element elementor-element-56e8a94 e-con-full e-flex e-con e-child" data-element_type="container" data-id="56e8a94">
        {CARD_LAYOUT.slice(3).map(({ containerId, widgetId, slug, hover }) => (
          <ProblemCard key={slug} card={bySlug[slug] ?? { slug, ...DEFAULTS[slug] }} containerId={containerId} hover={hover} widgetId={widgetId} />
        ))}
      </div>
    </>
  )
}
