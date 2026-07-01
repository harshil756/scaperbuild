import { cmsMediaUrl } from '../../utils/cmsMedia.js'

/** Decorative dot/pattern tiles — keep static CSS, do not CMS-override. */
const DECORATIVE_BG_IDS = new Set(['b38cb7f', 'e82bfa2', 'f8f859d'])

/**
 * Match Elementor post CSS: background lives on motion-effects-layer,
 * not on .elementor-widget-wrap directly (that breaks column layout).
 */
function backgroundImageRules(elementorId, url, pageId) {
  const scoped = pageId ? `.elementor-${pageId} ` : ''
  const el = `${scoped}.elementor-element.elementor-element-${elementorId}`
  return [
    `${el}:not(.elementor-motion-effects-element-type-background), ${el} > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url("${url}")!important}`,
    `${el} > .elementor-widget-wrap > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url("${url}")!important}`,
  ].join('\n')
}

export default function ServiceCmsStyles({ content, heroBgId, ctaBgId, pageId, sectionBgIds }) {
  if (!content) return null

  const rules = []
  const seen = new Set()

  function addBg(elementorId, path) {
    if (!elementorId || seen.has(elementorId) || DECORATIVE_BG_IDS.has(elementorId)) return
    const url = cmsMediaUrl(path)
    if (!url) return
    seen.add(elementorId)
    rules.push(backgroundImageRules(elementorId, url, pageId))
  }

  addBg(heroBgId, content.hero?.background_image)
  addBg(ctaBgId, content.cta?.background_image)

  // Optional allow-list: only override section backgrounds that are real photos
  const allowed = sectionBgIds ? new Set(sectionBgIds) : null
  for (const bg of content.backgrounds ?? []) {
    const id = bg.elementor_id ?? bg.key
    if (allowed && !allowed.has(id)) continue
    addBg(id, bg.image)
  }

  if (!rules.length) return null

  return <style dangerouslySetInnerHTML={{ __html: rules.join('\n') }} />
}
