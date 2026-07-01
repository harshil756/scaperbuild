import { useEffect } from 'react'

const SCRIPT_QUEUE = [
  '/assets/js/jquery.min_00f48017.js',
  '/assets/js/jquery-migrate.min_fc8f27ce.js',
  '/assets/js/hello-frontend.min_58b09da2.js',
  '/assets/js/webpack.runtime.min_27dd5d94.js',
  '/assets/js/frontend-modules.min_2e96bcfa.js',
  '/assets/js/core.min_ec96865e.js',
  '/assets/js/frontend.min_134ba971.js',
  '/assets/js/frontend-script_b235e90a.js',
  '/assets/js/widget-scripts_b0262804.js',
  '/assets/js/webpack-pro.runtime.min_39bc0f6f.js',
  '/assets/js/hooks.min_578c2c51.js',
  '/assets/js/i18n.min_4a63c30f.js',
  '/assets/js/frontend.min_8ec66d9d.js',
  '/assets/js/elements-handlers.min_ba27936e.js',
  '/assets/js/elementor_64cc8f1e.js',
  '/assets/js/dialog.min_2ea13967.js',
]

function injectElementorConfig() {
  if (window.elementorFrontendConfig) return

  window.elementorFrontendConfig = {
    environmentMode: { edit: false, wpPreview: false, isScriptDebug: false },
    is_rtl: false,
    breakpoints: { xs: 0, sm: 480, md: 768, lg: 1025, xl: 1440, xxl: 1600 },
    version: '3.30.2',
    is_static: false,
    urls: {
      assets: '/assets/',
      ajaxurl: 'https://7statespestcontrol.com.au/wp-admin/admin-ajax.php',
    },
    settings: { page: [], editorPreferences: [] },
    kit: {},
    post: { id: 14, title: 'Home', excerpt: '', featuredImage: false },
  }

  window.ElementorProFrontendConfig = {
    ajaxurl: 'https://7statespestcontrol.com.au/wp-admin/admin-ajax.php',
    urls: {
      assets: '/assets/',
      rest: 'https://7statespestcontrol.com.au/wp-json/',
    },
    settings: { lazy_load_background_images: true },
    popup: { hasPopUps: false },
  }
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }
    const el = document.createElement('script')
    el.src = src
    el.async = false
    el.onload = () => resolve()
    el.onerror = reject
    document.body.appendChild(el)
  })
}

function setupLazyBackgrounds() {
  const lazyloadBackgrounds = document.querySelectorAll('.e-con.e-parent:not(.e-lazyloaded)')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('e-lazyloaded')
          observer.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '200px 0px 200px 0px' },
  )

  lazyloadBackgrounds.forEach((node) => observer.observe(node))
}

function initTrustIndexWidgets() {
  const placeholders = document.querySelectorAll('[data-src*="cdn.trustindex.io/loader.js"]')
  if (!placeholders.length) return

  const src = 'https://cdn.trustindex.io/loader.js?wp-widget'
  if (document.querySelector(`script[src="${src}"]`)) return

  const script = document.createElement('script')
  script.src = src
  script.async = true
  script.dataset.wpStrategy = 'async'
  document.body.appendChild(script)
}

export default function SiteScripts() {
  useEffect(() => {
    let cancelled = false

    async function boot() {
      try {
        injectElementorConfig()
        for (const src of SCRIPT_QUEUE) {
          if (cancelled) return
          await loadScript(src)
        }
        setupLazyBackgrounds()
        initTrustIndexWidgets()
      } catch {
        setupLazyBackgrounds()
        initTrustIndexWidgets()
      }
    }

    boot()
    return () => {
      cancelled = true
    }
  }, [])

  return null
}
