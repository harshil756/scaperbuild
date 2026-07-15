import usePageMeta from '../hooks/usePageMeta.js'
import { Link } from 'react-router-dom'
import BlogPostsList from '../components/BlogPostsList.jsx'

export default function BlogPage() {
  usePageMeta('blog')

  return (
    <>
      <div className="elementor elementor-87" data-elementor-id={87} data-elementor-post-type="page" data-elementor-type="wp-page">
        <section className="elementor-section elementor-top-section elementor-element elementor-element-69eca53 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="69eca53" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d586ee3" data-element_type="column" data-id="d586ee3">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-139d195 elementor-widget elementor-widget-heading animated fadeInDown" data-element_type="widget" data-id="139d195" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h1 className="elementor-heading-title elementor-size-default">News &amp; Article</h1> </div>
                </div>
                <div className="elementor-element elementor-element-d89ddc3 elementor-icon-list--layout-inline elementor-align-center elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list animated fadeInDown" data-element_type="widget" data-id="d89ddc3" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;,&quot;_animation_delay&quot;:720}" data-widget_type="icon-list.default">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items elementor-inline-items">
                      <li className="elementor-icon-list-item elementor-inline-item">
                        <Link to="/"><span className="elementor-icon-list-text">Home</span>
                        </Link>
                      </li>
                      <li className="elementor-icon-list-item elementor-inline-item">
                        <a href="#">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg> </span>
                          <span className="elementor-icon-list-text">News &amp; Article</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-b1a52cf elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="b1a52cf" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0751171" data-element_type="column" data-id="0751171" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
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
