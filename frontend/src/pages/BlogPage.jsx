import { Link } from 'react-router-dom'
import BlogPostsList from '../components/BlogPostsList.jsx'
import usePageCms from '../hooks/usePageCms.js'
import usePageMeta from '../hooks/usePageMeta.js'
import { cmsMediaUrl, cmsText } from '../utils/cmsMedia.js'

export default function BlogPage() {
  const { page, content: c } = usePageCms('blog')
  usePageMeta('blog', page)
  const title = cmsText(c?.hero?.title, 'News & Article')
  const crumb = cmsText(c?.hero?.breadcrumb, 'News & Article')
  const bg = cmsMediaUrl(c?.hero?.background_image_url || c?.hero?.background_image, null)

  return (
    <>
      <div className="elementor elementor-87" data-elementor-id={87} data-elementor-post-type="page" data-elementor-type="wp-page">
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-69eca53 elementor-section-boxed"
          data-element_type="section"
          data-id="69eca53"
          data-settings='{"background_background":"classic"}'
          style={bg ? { backgroundImage: `url("${bg}")`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
        >
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element-d586ee3">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-widget elementor-widget-heading animated fadeInDown">
                  <div className="elementor-widget-container">
                    <h1 className="elementor-heading-title elementor-size-default">{title}</h1>
                  </div>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-icon-list animated fadeInDown">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items elementor-inline-items">
                      <li className="elementor-icon-list-item elementor-inline-item">
                        <Link to="/">
                          <span className="elementor-icon-list-text">Home</span>
                        </Link>
                      </li>
                      <li className="elementor-icon-list-item elementor-inline-item">
                        <span className="elementor-icon-list-text">{crumb}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="elementor-section elementor-top-section elementor-element-b1a52cf elementor-section-boxed">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <BlogPostsList />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
