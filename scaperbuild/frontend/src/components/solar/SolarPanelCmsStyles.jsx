import { cmsMediaUrl } from '../../utils/cmsMedia.js'

const NO_BACKGROUND_SELECTORS = [
  '.elementor-element-9646bde',
  '.elementor-element-ab45ce1',
  '.elementor-element-39ae243',
]

const BACKGROUNDS = [
  { selector: '.elementor-element-ba9dae3', path: (c) => c?.hero?.background_image },
  { selector: '.elementor-element-de3415d', path: (c) => c?.intro_video?.background_image },
  { selector: '.elementor-element-9630408', path: (c) => c?.services?.background_image },
  { selector: '.elementor-element-a047a50', path: (c) => c?.signs?.background_image },
  { selector: '.elementor-element-d3bcb94', path: (c) => c?.results?.background_image },
]

export default function SolarPanelCmsStyles({ content }) {
  if (!content) return null

  const rules = NO_BACKGROUND_SELECTORS.map(
    (selector) => `${selector}{background-image:none!important}`,
  )
  for (const bg of BACKGROUNDS) {
    const url = cmsMediaUrl(bg.path(content))
    if (url) rules.push(`${bg.selector}{background-image:url("${url}")!important}`)
  }

  return <style dangerouslySetInnerHTML={{ __html: rules.join('\n') }} />
}
