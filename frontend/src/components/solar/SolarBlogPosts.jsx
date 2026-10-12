import { cmsMediaUrl, cmsText } from '../../utils/cmsMedia.js'
import { Link } from 'react-router-dom'

function BlogCard({ post }) {
  const title = cmsText(post?.title, '')
  const excerpt = cmsText(post?.excerpt, '')
  const link = cmsText(post?.link ?? post?.url, '#')
  const alt = cmsText(post?.alt, title)
  const image = cmsMediaUrl(post?.image ?? post?.image_path ?? post?.image_url, '')

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

export default function SolarBlogPosts({ blog }) {
  const posts = blog?.posts ?? []
  if (!posts.length) return null

  return (
    <div className="elementor-element elementor-element-c190105 elementor-widget elementor-widget-elementskit-blog-posts" data-element_type="widget" data-id="c190105" data-widget_type="elementskit-blog-posts.default">
      <div className="elementor-widget-container">
        <div className="ekit-wid-con">
          <div className="row post-items" id="post-items--c190105">
            {posts.map((post) => (
              <BlogCard key={post.link ?? post.title} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
