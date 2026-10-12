import { cmsMediaUrl } from '../../utils/cmsMedia.js'

const BACKGROUNDS = [
  { selector: '.elementor-element-ec28cb9', path: (c) => c?.hero?.background_image },
  { selector: '.elementor-element-5529364', path: (c) => c?.cta?.background_image },
  { selector: '.elementor-element-59f28062', path: (c) => c?.why_choose?.background_image },
  { selector: '.elementor-element-4972cab', path: (c) => c?.process?.steps?.find((s) => s.slug === 'preventive')?.background },
]

const SERVICE_CARD_BG = [
  { selector: '.elementor-element-20c12d2 .elementskit-infobox', slug: 'rodent' },
  { selector: '.elementor-element-e22eba8 .elementskit-infobox', slug: 'cockroach' },
  { selector: '.elementor-element-f136ba6 .elementskit-infobox', slug: 'bed_bug' },
  { selector: '.elementor-element-14a5f46 .elementskit-infobox', slug: 'ant' },
]

export default function AboutCmsStyles({ content }) {
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
