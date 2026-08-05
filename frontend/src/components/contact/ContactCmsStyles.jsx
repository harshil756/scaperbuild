import { cmsMediaUrl } from '../../utils/cmsMedia.js'

/** Hero background override from Filament CMS (falls back to post-86 CSS). */
export default function ContactCmsStyles({ content }) {
  if (!content) return null

  const url = cmsMediaUrl(content.hero?.background_image)
  if (!url) return null

  const css = `.elementor-86 .elementor-element.elementor-element-51da502:not(.elementor-motion-effects-element-type-background),.elementor-86 .elementor-element.elementor-element-51da502 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url("${url}")!important}`

  return <style dangerouslySetInnerHTML={{ __html: css }} />
}
