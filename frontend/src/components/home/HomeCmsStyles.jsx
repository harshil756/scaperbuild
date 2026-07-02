import { cmsMediaUrl } from '../../utils/cmsMedia.js'

const BACKGROUNDS = [
  { selector: '.elementor-element-37fdbc3f', path: (c) => c?.hero?.background_image },
  { selector: '.elementor-element-3bf254e8', path: (c) => c?.about?.background_image },
  { selector: '.elementor-element-db0472', path: (c) => c?.about?.column_image },
  { selector: '.elementor-element-7a1baa44', path: (c) => c?.why_choose?.background_image },
  { selector: '.elementor-element-9286835', path: (c) => c?.reviews?.background_image },
]

const SERVICE_CARD_BG = [
  { selector: '.elementor-element-9dd63a9 .elementskit-infobox', slug: 'cockroach' },
  { selector: '.elementor-element-26bc2d0 .elementskit-infobox', slug: 'wasp' },
  { selector: '.elementor-element-60b19b0 .elementskit-infobox', slug: 'spider' },
  { selector: '.elementor-element-8bbce6f .elementskit-infobox', slug: 'moth' },
  { selector: '.elementor-element-5e1d8c8 .elementskit-infobox', slug: 'rodent' },
  { selector: '.elementor-element-bc1e76c .elementskit-infobox', slug: 'ant' },
]

export default function HomeCmsStyles({ content }) {
  if (!content) return null

  const rules = []

  for (const bg of BACKGROUNDS) {
    const url = cmsMediaUrl(bg.path(content))
    if (url) {
      rules.push(`${bg.selector}{background-image:url("${url}")!important}`)
    }
  }

  const cards = content.services?.cards ?? []
  for (const card of SERVICE_CARD_BG) {
    const data = cards.find((c) => c.slug === card.slug)
    const url = cmsMediaUrl(data?.background)
    if (url) {
      rules.push(`${card.selector}{background-image:url("${url}")!important}`)
    }
  }

  if (!rules.length) return null

  return <style dangerouslySetInnerHTML={{ __html: rules.join('\n') }} />
}
