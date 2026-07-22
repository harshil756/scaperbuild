const ELEMENTOR_BODY_CLASSES = [
  'elementor-kit-9',
  'elementor-default',
  'elementor-template-full-width',
  'wp-theme-hello-elementor',
  'wp-custom-logo',
  'wp-embed-responsive',
]

export function mergeBodyClass(metaClass, cmsClass) {
  const meta = metaClass.split(/\s+/).filter(Boolean)
  const cms = (cmsClass || '').split(/\s+/).filter(Boolean)
  if (!cms.length) return metaClass

  const merged = new Set([...cms, ...meta])
  for (const cls of ELEMENTOR_BODY_CLASSES) {
    if (meta.includes(cls)) merged.add(cls)
  }
  return [...merged].join(' ')
}
