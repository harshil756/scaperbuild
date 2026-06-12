export function decodeHtmlEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

export function extractSeoFromHtml(html) {
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]
  const description =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1] ??
    html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i)?.[1] ??
    ''

  const canonical =
    html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i)?.[1] ??
    html.match(/<link[^>]+href=["']([^"']*)["'][^>]+rel=["']canonical["']/i)?.[1] ??
    ''

  const robots =
    html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)["']/i)?.[1] ??
    html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']robots["']/i)?.[1] ??
    ''

  const og = {}
  for (const match of html.matchAll(/<meta[^>]+property=["']((?:og|article):[^"']+)["'][^>]+content=["']([^"']*)["']/gi)) {
    og[match[1]] = decodeHtmlEntities(match[2])
  }
  for (const match of html.matchAll(/<meta[^>]+content=["']([^"']*)["'][^>]+property=["']((?:og|article):[^"']+)["']/gi)) {
    og[match[2]] = decodeHtmlEntities(match[1])
  }

  const twitter = {}
  for (const match of html.matchAll(/<meta[^>]+name=["'](twitter:[^"']+)["'][^>]+content=["']([^"']*)["']/gi)) {
    twitter[match[1]] = decodeHtmlEntities(match[2])
  }
  for (const match of html.matchAll(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["'](twitter:[^"']+)["']/gi)) {
    twitter[match[2]] = decodeHtmlEntities(match[1])
  }

  const jsonLdMatch = html.match(
    /<script[^>]*class=["']yoast-schema-graph["'][^>]*>([\s\S]*?)<\/script>/i,
  )
  const jsonLd = jsonLdMatch?.[1]?.trim() ?? ''

  return {
    title: decodeHtmlEntities(title ?? ''),
    description: decodeHtmlEntities(description),
    canonical,
    robots,
    og,
    twitter,
    jsonLd,
  }
}

export function pageKeyToSlug(pageKey) {
  if (pageKey === 'home') return 'home'
  if (pageKey === 'about') return 'about-us'
  if (pageKey === 'blog') return 'blog'
  if (pageKey === 'contact_us') return 'contact-us'
  if (pageKey === 'thank_you') return 'thank-you'
  if (pageKey.startsWith('post_')) return pageKey.slice(5).replace(/_/g, '-')
  return pageKey.replace(/_/g, '-')
}
