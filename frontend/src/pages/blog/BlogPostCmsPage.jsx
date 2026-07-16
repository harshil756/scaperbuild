import { Link, Navigate, useParams } from 'react-router-dom'
import CmsHtml from '../../components/home/CmsHtml.jsx'
import useBlogPostCms from '../../hooks/useBlogPostCms.js'
import usePageMeta from '../../hooks/usePageMeta.js'
import { cmsMediaUrl } from '../../utils/cmsMedia.js'

export default function BlogPostCmsPage() {
  const { slug } = useParams()
  const { post, loading, error } = useBlogPostCms(slug)
  usePageMeta('blog', post)

  if (loading) {
    return <div className="elementor elementor-87" />
  }

  if (error || !post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <div className={`elementor ${post.body_class || ''}`.trim()}>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-69eca53 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-element_type="section"
        data-id="69eca53"
        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"
      >
        <div className="elementor-background-overlay" />
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d586ee3"
            data-element_type="column"
            data-id="d586ee3"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-139d195 elementor-widget elementor-widget-heading animated fadeInDown"
                data-element_type="widget"
                data-id="139d195"
                data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">{post.title}</h1>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-d89ddc3 elementor-icon-list--layout-inline elementor-align-center elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list animated fadeInDown"
                data-element_type="widget"
                data-id="d89ddc3"
                data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;,&quot;_animation_delay&quot;:720}"
                data-widget_type="icon-list.default"
              >
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items elementor-inline-items">
                    <li className="elementor-icon-list-item elementor-inline-item">
                      <Link to="/">
                        <span className="elementor-icon-list-text">Home</span>
                      </Link>
                    </li>
                    <li className="elementor-icon-list-item elementor-inline-item">
                      <Link to="/blog">
                        <span className="elementor-icon-list-text">News &amp; Article</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-b1a52cf elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-element_type="section"
        data-id="b1a52cf"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0751171"
            data-element_type="column"
            data-id="0751171"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              {!!post.featured_image_url && (
                <div
                  className="elementor-element elementor-element-blog-image elementor-widget elementor-widget-image"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      alt={post.featured_image_alt || post.title}
                      className="attachment-large size-large"
                      decoding="async"
                      src={cmsMediaUrl(post.featured_image_url)}
                    />
                  </div>
                </div>
              )}

              <div
                className="elementor-element elementor-element-blog-content elementor-widget elementor-widget-text-editor"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <CmsHtml html={post.content_html} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
