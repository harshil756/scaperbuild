import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'
import { Link } from 'react-router-dom'

const DEFAULT_POSTS = [
  {
    title: 'Why Melbourne Homes Need Professional Termite Pest Control',
    excerpt:
      'Termites are quiet workers. You will not hear them. You will not see them moving around your home in broad daylight. Yet they can quietly chew…',
    link: '/why-melbourne-homes-need-professional-termite-pest-control/',
    image: '/assets/images/WhatsApp-Image-2026-05-25-at-11.50.58-AM_83fa8176.jpeg',
    alt: 'Why Melbourne Homes Need Professional Termite Pest Control',
  },
  {
    title: '5 Myths About Wasp Removal Melbourne You Should Stop Believing',
    excerpt:
      'There is a lot of bad advice out there when it comes to dealing with wasps. People share tips at backyard barbecues, on Facebook groups, and…',
    link: '/5-myths-about-wasp-removal-melbourne-you-should-stop-believing/',
    image: '/assets/images/WhatsApp-Image-2026-05-25-at-11.52.11-AM_ddd44793.jpeg',
    alt: '5 Myths About Wasp Removal Melbourne You Should Stop Believing',
  },
  {
    title: 'The Smart Homeowner’s Guide to Termite Barrier Protection in Melbourne',
    excerpt:
      'If you own a home in Melbourne, you have probably heard about termite damage at least once. Maybe a neighbour found a hollow door frame. Maybe…',
    link: '/the-smart-homeowners-guide-to-termite-barrier-protection-in-melbourne/',
    image: '/assets/images/WhatsApp-Image-2026-05-25-at-11.53.29-AM_6379c2f3.jpeg',
    alt: 'The Smart Homeowner’s Guide to Termite Barrier Protection in Melbourne',
  },
]

function BlogCard({ post }) {
  const title = cmsText(post?.title, '')
  const excerpt = cmsText(post?.excerpt, '')
  const link = cmsText(post?.link ?? post?.url, '#')
  const alt = cmsText(post?.alt, title)
  const image = cmsMediaUrl(post?.image ?? post?.image_path, '')

  return (
    <div className="col-lg-4 col-md-6">
      <div className="elementskit-post-image-card">
        <div className="elementskit-entry-header">
          <Link className="elementskit-entry-thumb" to={link}>
            <img alt={alt} decoding="async" src={image} />
          </Link>
        </div>
        <div className="elementskit-post-body">
          <h2 className="entry-title">
            <Link to={link}>{title}</Link>
          </h2>
          <p>{excerpt}</p>
          <div className="btn-wraper">
            <Link className="elementskit-btn whitespace--normal" to={link}>
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AntBlogPosts({ eyebrow, title, posts = [] }) {
  const items = posts.length ? posts : DEFAULT_POSTS

  return (
    <>
      <div className="elementor-element elementor-element-fdb40e7 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="fdb40e7">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-575a21f elementor-widget elementor-widget-heading animated fadeInDown" data-element_type="widget" data-id="575a21f" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">{cmsText(eyebrow, 'Our Latest Article')}</h2>
            </div>
          </div>
          <div className="elementor-element elementor-element-2fd4f30 elementor-widget elementor-widget-heading animated fadeInRight" data-element_type="widget" data-id="2fd4f30" data-settings="{&quot;_animation&quot;:&quot;fadeInRight&quot;}" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">{cmsText(title, 'Pest Problems? Here\'s Why Read Might Be Your Secret Weapon.')}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-5752800 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type="container" data-id="5752800">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-87a3755 elementor-widget elementor-widget-elementskit-blog-posts" data-element_type="widget" data-id="87a3755" data-widget_type="elementskit-blog-posts.default">
            <div className="elementor-widget-container">
              <div className="ekit-wid-con">
                <div className="row post-items" id="post-items--87a3755">
                  {items.map((post) => (
                    <BlogCard key={post.link ?? post.title} post={post} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
