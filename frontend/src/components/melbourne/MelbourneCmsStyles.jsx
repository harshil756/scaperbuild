import { cmsMediaUrl } from '../../utils/cmsMedia.js'

function backgroundImageRules(elementorId, url, pageId) {
  const scoped = pageId ? `.elementor-${pageId} ` : ''
  const el = `${scoped}.elementor-element.elementor-element-${elementorId}`
  return [
    `${el}:not(.elementor-motion-effects-element-type-background), ${el} > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url("${url}")!important}`,
    `${el} > .elementor-widget-wrap > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url("${url}")!important}`,
  ].join('\n')
}

/** Hero + contact section backgrounds from Filament CMS. */
export default function MelbourneCmsStyles({ content, pageId = 710 }) {
  if (!content) return null

  const rules = []
  const heroUrl = cmsMediaUrl(content.hero?.background_image)
  const contactUrl = cmsMediaUrl(content.contact?.background_image)
  const sideUrl = cmsMediaUrl(content.contact?.side_background_image)

  if (heroUrl) rules.push(backgroundImageRules('e7c65bf', heroUrl, pageId))
  if (contactUrl) rules.push(backgroundImageRules('fd1c4b6', contactUrl, pageId))
  if (sideUrl) rules.push(backgroundImageRules('8bb4a2d', sideUrl, pageId))

  if (!rules.length) return null

  return <style dangerouslySetInnerHTML={{ __html: rules.join('\n') }} />
}
