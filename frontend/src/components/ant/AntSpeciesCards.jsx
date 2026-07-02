import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'

const CARD_LAYOUT = [
  { containerId: 'eaf7d4f', widgetId: 'be021bf', slug: 'argentine' },
  { containerId: '9cd4270', widgetId: '939910b', slug: 'carpenter' },
  { containerId: '9fb9211', widgetId: '61c1aef', slug: 'white_footed' },
  { containerId: 'b744193', widgetId: '6ebb5d2', slug: 'coastal_brown' },
]

const DEFAULTS = {
  argentine: {
    title: '1. Argentine Ants',
    description:
      'Argentine ants are small, light to dark brown ants that form massive colonies. They are known for invading homes in search of food and water, often creating extensive trails. Their rapid reproduction makes them difficult to control without professional treatment.',
    image: '/assets/images/argentine-ant-identif-85_c58dbdc7.jpg',
    alt: 'argentine-ant-identif-85',
  },
  carpenter: {
    title: '2. Carpenter Ants',
    description:
      'Carpenter ants are larger ants that can cause structural damage by hollowing out wood to create nests. They don’t consume wood like termites but can weaken wooden structures over time. Effective control requires identifying and eliminating their nests.',
    image: '/assets/images/Carpenter-Ants_c953d8de.jpg',
    alt: 'Black carpenter ant on a wooden surface',
  },
  white_footed: {
    title: '3. White-Footed House Ants',
    description:
      'These ants are tiny, dark brown to black, with distinct pale-colored feet. They are common household pests that invade kitchens and pantries, attracted to sugary foods. Their ability to establish large colonies makes professional extermination essential.',
    image: '/assets/images/white-footed-black-ant_207681cb.jpg',
    alt: 'White-footed house ant feeding on a leaf',
  },
  coastal_brown: {
    title: '4. Coastal Brown Ants',
    description:
      'Coastal brown ants, also known as big-headed ants, are commonly found in outdoor areas but can invade homes. They build nests in soil, walls, and pavements, often forming extensive colonies that are difficult to manage without expert intervention.',
    image: '/assets/images/Pharaohant_9502816f.jpeg',
    alt: 'Coastal Brown Ants',
  },
}

function SpeciesCard({ card, containerId, widgetId }) {
  const slug = card?.slug
  const defaults = DEFAULTS[slug] ?? {}
  const title = cmsText(card?.title, defaults.title)
  const description = cmsText(card?.description, defaults.description)
  const alt = cmsText(card?.alt, defaults.alt ?? title)
  const src = cmsMediaUrl(card?.image, defaults.image)

  return (
    <div
      className={`elementor-element elementor-element-${containerId} e-con-full e-transform e-transform e-flex e-con e-child`}
      data-element_type="container"
      data-id={containerId}
      data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;_transform_translateY_effect_hover&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_hover_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_hover_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_hover_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}"
    >
      <div
        className={`elementor-element elementor-element-${widgetId} elementor-position-top elementor-widget elementor-widget-image-box`}
        data-element_type="widget"
        data-id={widgetId}
        data-widget_type="image-box.default"
      >
        <div className="elementor-widget-container">
          <div className="elementor-image-box-wrapper">
            <figure className="elementor-image-box-img">
              <img alt={alt} className="attachment-full size-full" decoding="async" loading="lazy" src={src} />
            </figure>
            <div className="elementor-image-box-content">
              <h3 className="elementor-image-box-title">{title}</h3>
              <p className="elementor-image-box-description">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AntSpeciesCards({ items = [] }) {
  const bySlug = Object.fromEntries(items.map((item) => [item.slug, item]))

  return (
    <div className="elementor-element elementor-element-741e3ac e-con-full e-flex e-con e-child" data-element_type="container" data-id="741e3ac">
      {CARD_LAYOUT.map(({ containerId, widgetId, slug }) => (
        <SpeciesCard key={slug} card={bySlug[slug] ?? { slug, ...DEFAULTS[slug] }} containerId={containerId} widgetId={widgetId} />
      ))}
    </div>
  )
}
