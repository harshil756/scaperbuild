function upsertNamedMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  const created = !el
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  const previous = el.getAttribute('content')
  el.setAttribute('content', content)
  return { el, previous, created }
}

function upsertPropertyMeta(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`)
  const created = !el
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  const previous = el.getAttribute('content')
  el.setAttribute('content', content)
  return { el, previous, created }
}

function upsertCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  const created = !el
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  const previous = el.getAttribute('href')
  el.setAttribute('href', href)
  return { el, previous, created }
}

function upsertJsonLd(jsonLd) {
  let el = document.querySelector('script.yoast-schema-graph')
  const created = !el
  if (!el) {
    el = document.createElement('script')
    el.setAttribute('type', 'application/ld+json')
    el.className = 'yoast-schema-graph'
    document.head.appendChild(el)
  }
  const previous = el.textContent
  el.textContent = jsonLd
  return { el, previous, created }
}

export function applyPageSeo(meta, seoExtra) {
  const merged = { ...meta, ...seoExtra }
  const state = {
    title: document.title,
    bodyClass: document.body.className,
    description: null,
    canonical: null,
    robots: null,
    og: [],
    twitter: [],
    jsonLd: null,
    created: [],
  }

  const descriptionTag = document.querySelector('meta[name="description"]')
  state.description = { el: descriptionTag, previous: descriptionTag?.getAttribute('content') ?? '' }

  document.title = merged.title
  document.body.className = merged.bodyClass

  const description = merged.description || merged.og?.['og:description'] || ''
  if (descriptionTag && description) {
    descriptionTag.setAttribute('content', description)
  }

  if (merged.robots) {
    const { el, previous, created } = upsertNamedMeta('robots', merged.robots)
    state.robots = { el, previous, created }
    if (created) state.created.push(el)
  }

  if (merged.canonical) {
    const { el, previous, created } = upsertCanonical(merged.canonical)
    state.canonical = { el, previous, created }
    if (created) state.created.push(el)
  }

  if (merged.og) {
    for (const [property, content] of Object.entries(merged.og)) {
      if (!content) continue
      const { el, previous, created } = upsertPropertyMeta(property, content)
      state.og.push({ el, previous, created })
      if (created) state.created.push(el)
    }
  }

  if (merged.twitter) {
    for (const [name, content] of Object.entries(merged.twitter)) {
      if (!content) continue
      const { el, previous, created } = upsertNamedMeta(name, content)
      state.twitter.push({ el, previous, created })
      if (created) state.created.push(el)
    }
  }

  if (merged.jsonLd) {
    const { el, previous, created } = upsertJsonLd(merged.jsonLd)
    state.jsonLd = { el, previous, created }
    if (created) state.created.push(el)
  }

  return state
}

export function restorePageSeo(state) {
  if (!state) return

  document.title = state.title
  document.body.className = state.bodyClass

  if (state.description?.el) {
    state.description.el.setAttribute('content', state.description.previous)
  }

  if (state.robots?.el) {
    if (state.robots.created) state.robots.el.remove()
    else state.robots.el.setAttribute('content', state.robots.previous ?? '')
  }

  if (state.canonical?.el) {
    if (state.canonical.created) state.canonical.el.remove()
    else state.canonical.el.setAttribute('href', state.canonical.previous ?? '')
  }

  for (const item of state.og) {
    if (item.created) item.el.remove()
    else if (item.previous != null) item.el.setAttribute('content', item.previous)
  }

  for (const item of state.twitter) {
    if (item.created) item.el.remove()
    else if (item.previous != null) item.el.setAttribute('content', item.previous)
  }

  if (state.jsonLd?.el) {
    if (state.jsonLd.created) state.jsonLd.el.remove()
    else state.jsonLd.el.textContent = state.jsonLd.previous ?? ''
  }

  for (const el of state.created) {
    if (el.isConnected) el.remove()
  }
}
