import { cmsMediaUrl } from '../../utils/cmsMedia.js'

const BACKGROUNDS = [
  { selector: '.elementor-element-a342089', path: (c) => c?.hero?.background_image },
  { selector: '.elementor-element-f5e4d41 > .elementor-widget-wrap', path: (c) => c?.why_inside?.background_image },
  { selector: '.elementor-element-6dc7fcc', path: (c) => c?.species?.background_image },
  { selector: '.elementor-element-f732271', path: (c) => c?.cta?.background_image },
]

export default function AntPestControlCmsStyles({ content }) {
  if (!content) return null

  const rules = []

  for (const bg of BACKGROUNDS) {
    const url = cmsMediaUrl(bg.path(content))
    if (url) {
      rules.push(`${bg.selector}{background-image:url("${url}")!important}`)
    }
  }

  if (!rules.length) return null

  return <style dangerouslySetInnerHTML={{ __html: rules.join('\n') }} />
}
