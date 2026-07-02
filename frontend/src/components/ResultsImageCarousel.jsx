import { useEffect, useRef } from 'react'
import './ResultsImageCarousel.css'

const SWIPER_SCRIPT = '/assets/js/swiper.min_a5507f8f.js'

const CAROUSEL_SETTINGS =
  '{"lazyload":"yes","navigation":"both","autoplay":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","autoplay_speed":5000,"infinite":"yes","speed":500,"image_spacing_custom":{"unit":"px","size":20,"sizes":[]},"image_spacing_custom_tablet":{"unit":"px","size":"","sizes":[]},"image_spacing_custom_mobile":{"unit":"px","size":"","sizes":[]}}'

const DEFAULT_IMAGES = [
  { src: '/assets/images/before-after-04-1024x1024-1_ca197e11.jpg', alt: 'solar panel bird proofing melbourne' },
  { src: '/assets/images/before-after-03-1024x1024-1_95957117.jpg', alt: 'solar panel bird proofing melbourne' },
  { src: '/assets/images/before-after-02-1024x1024-1_60ed9d75.jpg', alt: 'solar panel bird proofing melbourne' },
  { src: '/assets/images/before-after-01-1024x1024-1_9303bf19.jpg', alt: 'solar panel bird proofing melbourne' },
]

let swiperScriptPromise = null

function loadSwiperScript() {
  if (window.Swiper) return Promise.resolve()
  if (swiperScriptPromise) return swiperScriptPromise

  swiperScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${SWIPER_SCRIPT}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', reject, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = SWIPER_SCRIPT
    script.async = true
    script.onload = () => resolve()
    script.onerror = reject
    document.body.appendChild(script)
  })

  return swiperScriptPromise
}

export default function ResultsImageCarousel({ images = DEFAULT_IMAGES, widgetId = '48d6bba' }) {
  const rootRef = useRef(null)
  const swiperRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    loadSwiperScript()
      .then(() => {
        if (cancelled || !rootRef.current || swiperRef.current) return

        const root = rootRef.current
        swiperRef.current = new window.Swiper(root, {
          loop: images.length > 1,
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
          speed: 500,
          watchOverflow: true,
          observer: true,
          observeParents: true,
          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          navigation: {
            nextEl: root.querySelector('.elementor-swiper-button-next'),
            prevEl: root.querySelector('.elementor-swiper-button-prev'),
          },
          pagination: {
            el: root.querySelector('.swiper-pagination'),
            clickable: true,
          },
        })
      })
      .catch(() => {})

    return () => {
      cancelled = true
      swiperRef.current?.destroy?.(true, true)
      swiperRef.current = null
    }
  }, [images])

  return (
    <div
      className={`results-image-carousel elementor-element elementor-element-${widgetId} elementor-arrows-position-inside elementor-pagination-position-outside elementor-widget elementor-widget-image-carousel e-widget-swiper`}
      data-element_type="widget"
      data-id={widgetId}
      data-settings={CAROUSEL_SETTINGS}
      data-widget_type="image-carousel.default"
    >
      <div className="elementor-widget-container">
        <div
          ref={rootRef}
          aria-label="Image Carousel"
          aria-roledescription="carousel"
          className="elementor-image-carousel-wrapper swiper swiper-image-stretch"
          dir="ltr"
          role="region"
          style={{ '--e-image-carousel-slides-to-show': 3 }}
        >
          <div aria-live="polite" className="elementor-image-carousel swiper-wrapper">
            {images.map((image, index) => (
              <div
                key={image.src}
                aria-label={`${index + 1} / ${images.length}`}
                aria-roledescription="slide"
                className="swiper-slide"
                role="group"
              >
                <figure className="swiper-slide-inner">
                  <img
                    alt={image.alt}
                    className="swiper-slide-image"
                    decoding="async"
                    height={1024}
                    loading="lazy"
                    src={image.src}
                    width={1024}
                  />
                </figure>
              </div>
            ))}
          </div>
          <div aria-label="Previous slide" className="elementor-swiper-button elementor-swiper-button-prev" role="button" tabIndex={0}>
            <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" /></svg>
          </div>
          <div aria-label="Next slide" className="elementor-swiper-button elementor-swiper-button-next" role="button" tabIndex={0}>
            <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-right" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" /></svg>
          </div>
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal" />
          <span aria-atomic="true" aria-live="assertive" className="swiper-notification" />
        </div>
      </div>
    </div>
  )
}
