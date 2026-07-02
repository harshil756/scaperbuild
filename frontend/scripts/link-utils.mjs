import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const blogSlugsPath = path.join(__dirname, '../src/config/blogSlugs.js')

function loadBlogSlugs() {
  if (!fs.existsSync(blogSlugsPath)) return new Set()
  const source = fs.readFileSync(blogSlugsPath, 'utf8')
  const match = source.match(/new Set\(\[([\s\S]*?)\]\)/)
  if (!match) return new Set()
  return new Set([...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1]))
}

const SITE_HOST = '7statespestcontrol.com.au'

const PATH_ALIASES = {
  '/about': '/about-us',
  '/about/': '/about-us',
  '/about-us/': '/about-us',
  '/home': '/',
  '/home/': '/',
}

const SERVICE_PATH_ALIASES = {
  '/our-services/spider-control-treatment-melbourne': '/our-services-spider-control-treatment',
  '/our-services/spider-control-treatment-melbourne/': '/our-services-spider-control-treatment',
}

function mapWordPressServicePath(href) {
  const alias = SERVICE_PATH_ALIASES[href] ?? SERVICE_PATH_ALIASES[`${href}/`]
  if (alias) return alias

  const match = href.match(/^\/our-services\/([^/]+)\/?$/)
  if (!match) return href
  return `/our-services-${match[1]}`
}

export function normalizeInternalPath(href) {
  if (!href) return null

  const siteMatch = href.match(new RegExp(`^https?:\\/\\/${SITE_HOST}(\\/[^"]*)?$`, 'i'))
  if (siteMatch) {
    href = siteMatch[1] || '/'
  }

  if (href.startsWith('tel:') || href.startsWith('mailto:')) return null
  if (href.startsWith('#')) return null
  if (/^https?:\/\//i.test(href)) return null

  if (!href.startsWith('/')) {
    href = `/${href.replace(/^(\.\.\/)+/, '').replace(/^\/+/, '')}`
  }

  if (href !== '/') {
    href = href.replace(/\/+$/, '')
    href = `/${href.replace(/^\/+/, '').replace(/^(\.\.\/)+/, '')}`
  }

  href = PATH_ALIASES[href] ?? PATH_ALIASES[`${href}/`] ?? href
  href = mapWordPressServicePath(href)

  const slug = href.slice(1)
  if (slug && loadBlogSlugs().has(slug)) {
    return `/${slug}/`
  }

  return href
}

function internalPathFromAttrs(attrs) {
  const hrefMatch = attrs.match(/\bhref="([^"]*)"/)
  if (!hrefMatch) return null
  return normalizeInternalPath(hrefMatch[1])
}

export function convertInternalAnchorsToLinks(jsx) {
  const parts = jsx.split(/(<\/?a\b[^>]*>)/gi)
  const out = []
  const stack = []

  for (const part of parts) {
    if (/^<a\s/i.test(part)) {
      const attrs = part.match(/^<a\s(.*)>$/is)?.[1] ?? ''
      const internalPath = internalPathFromAttrs(attrs)
      if (internalPath !== null) {
        stack.push('link')
        const linkAttrs = attrs.replace(/\bhref="[^"]*"/, `to="${internalPath}"`)
        out.push(`<Link ${linkAttrs}>`)
        continue
      }
      stack.push('anchor')
      out.push(part)
      continue
    }

    if (/^<\/a>$/i.test(part)) {
      out.push(stack.pop() === 'link' ? '</Link>' : '</a>')
      continue
    }

    out.push(part)
  }

  return out.join('')
}

export function ensureLinkImport(source) {
  if (source.includes("from 'react-router-dom'") && source.includes('Link')) {
    return source
  }

  if (source.includes("from 'react-router-dom'")) {
    return source.replace(
      /import\s+\{([^}]+)\}\s+from\s+'react-router-dom'/,
      (match, imports) => {
        const names = imports.split(',').map((s) => s.trim()).filter(Boolean)
        if (!names.includes('Link')) names.push('Link')
        return `import { ${names.join(', ')} } from 'react-router-dom'`
      },
    )
  }

  const importMatch = source.match(/^import .+$/m)
  if (importMatch) {
    return source.replace(
      importMatch[0],
      `${importMatch[0]}\nimport { Link } from 'react-router-dom'`,
    )
  }

  return `import { Link } from 'react-router-dom'\n${source}`
}

export function applyLinkConversion(source) {
  if (!source.includes('<a ')) return source
  const converted = convertInternalAnchorsToLinks(source)
  if (!converted.includes('<Link')) return source
  return ensureLinkImport(converted)
}
