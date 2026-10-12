import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { BLOG_POSTS_PER_PAGE } from '../data/blogPosts.js'
import useBlogPostsCms from '../hooks/useBlogPostsCms.js'

function categoryLabelFromSlug(slug) {
  if (!slug) return 'Blog'
  return slug
    .replace(/^category-/, '')
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function BlogPostCard({ post, eagerImage }) {
  const thumbClasses = ['elementor-post__thumbnail', post.thumbClass].filter(Boolean).join(' ')
  const imgProps = {
    alt: post.img.alt || post.title,
    className: post.img.className,
    decoding: 'async',
    height: Number(post.img.height) || undefined,
    sizes: post.img.sizes,
    src: post.img.src,
    srcSet: post.img.srcSet,
    width: Number(post.img.width) || undefined,
    ...(eagerImage ? {} : { loading: 'lazy' }),
  }

  return (
    <article
      className={`elementor-post elementor-grid-item post-${post.id} post type-post status-publish format-standard has-post-thumbnail hentry ${post.category}`}
      role="listitem"
    >
      <div className="elementor-post__card">
        <Link className="elementor-post__thumbnail__link" to={post.path} tabIndex={-1}>
          <div className={thumbClasses}>
            <img {...imgProps} />
          </div>
        </Link>
        <div className="elementor-post__text">
          <h3 className="elementor-post__title">
            <Link to={post.path}>{post.title}</Link>
          </h3>
          <div className="elementor-post__excerpt">
            <p>{post.excerpt}</p>
          </div>
          <Link
            aria-label={`Read more about ${post.title}`}
            className="elementor-post__read-more"
            to={post.path}
            tabIndex={-1}
          >
            Read More »
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function BlogPostsList() {
  const { posts } = useBlogPostsCms()
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [visibleCount, setVisibleCount] = useState(BLOG_POSTS_PER_PAGE)
  const [loading, setLoading] = useState(false)

  const categories = useMemo(() => {
    const map = new Map()

    posts.forEach((post) => {
      const slug = post.category || 'category-blog'
      if (!map.has(slug)) {
        map.set(slug, post.categoryLabel || categoryLabelFromSlug(slug))
      }
    })

    return Array.from(map.entries())
      .map(([slug, label]) => ({ slug, label }))
      .sort((a, b) => a.label.localeCompare(b.label))
  }, [posts])

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return posts.filter((post) => {
      const matchesCategory =
        categoryFilter === 'all' || post.category === categoryFilter

      if (!matchesCategory) return false
      if (!query) return true

      const haystack = `${post.title || ''} ${post.excerpt || ''}`.toLowerCase()
      return haystack.includes(query)
    })
  }, [posts, searchQuery, categoryFilter])

  useEffect(() => {
    setVisibleCount(BLOG_POSTS_PER_PAGE)
  }, [posts.length, searchQuery, categoryFilter])

  const visiblePosts = filteredPosts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredPosts.length
  const currentPage = Math.ceil(visibleCount / BLOG_POSTS_PER_PAGE) || 1
  const maxPage = Math.ceil(filteredPosts.length / BLOG_POSTS_PER_PAGE) || 1
  const hasActiveFilters = searchQuery.trim() !== '' || categoryFilter !== 'all'

  const handleLoadMore = () => {
    if (!hasMore || loading) return

    setLoading(true)
    window.setTimeout(() => {
      setVisibleCount((count) => Math.min(count + BLOG_POSTS_PER_PAGE, filteredPosts.length))
      setLoading(false)
    }, 300)
  }

  const clearFilters = () => {
    setSearchQuery('')
    setCategoryFilter('all')
  }

  const widgetClassName = [
    'elementor-element',
    'elementor-element-42fd12d',
    'elementor-grid-3',
    'elementor-grid-tablet-2',
    'elementor-grid-mobile-1',
    'elementor-posts--thumbnail-top',
    'elementor-card-shadow-yes',
    'elementor-posts__hover-gradient',
    'load-more-align-center',
    'elementor-widget',
    'elementor-widget-posts',
    !hasMore ? 'e-load-more-pagination-end' : '',
    loading ? 'e-load-more-pagination-loading' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={widgetClassName}
      data-element_type="widget"
      data-id="42fd12d"
      data-settings='{"pagination_type":"load_more_on_click"}'
      data-widget_type="posts.cards"
    >
      <div className="elementor-widget-container">
        <div className="blog-posts-filters" role="search">
          <div className="blog-posts-filters__row">
            <div className="blog-posts-filters__field blog-posts-filters__field--search">
              <label className="elementor-field-label elementor-screen-only" htmlFor="blog-search">
                Search articles
              </label>
              <input
                className="elementor-field elementor-size-md elementor-field-textual"
                id="blog-search"
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search articles…"
                type="search"
                value={searchQuery}
              />
            </div>
            <div className="blog-posts-filters__field blog-posts-filters__field--category">
              <label className="elementor-field-label elementor-screen-only" htmlFor="blog-category">
                Filter by category
              </label>
              <select
                className="elementor-field elementor-size-md elementor-field-textual"
                id="blog-category"
                onChange={(event) => setCategoryFilter(event.target.value)}
                value={categoryFilter}
              >
                <option value="all">All categories</option>
                {categories.map((category) => (
                  <option key={category.slug} value={category.slug}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            {hasActiveFilters && (
              <button
                className="blog-posts-filters__clear"
                onClick={clearFilters}
                type="button"
              >
                Clear
              </button>
            )}
          </div>
          <p className="blog-posts-filters__meta" aria-live="polite">
            {filteredPosts.length === 0
              ? 'No articles match your search.'
              : `Showing ${visiblePosts.length} of ${filteredPosts.length} article${filteredPosts.length === 1 ? '' : 's'}`}
          </p>
        </div>

        <div
          className="elementor-posts-container elementor-posts elementor-posts--skin-cards elementor-grid elementor-has-item-ratio"
          role="list"
        >
          {visiblePosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} eagerImage={index < 3} />
          ))}
        </div>

        <div
          className="e-load-more-anchor"
          data-max-page={maxPage}
          data-page={currentPage}
        />

        {hasMore && (
          <div className="elementor-button-wrapper">
            <button
              className="elementor-button-link elementor-button"
              disabled={loading}
              onClick={handleLoadMore}
              type="button"
            >
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-text">Load More</span>
              </span>
              <span className="e-load-more-spinner">
                <svg
                  aria-hidden="true"
                  className="e-font-icon-svg e-fas-spinner"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" />
                </svg>
              </span>
            </button>
          </div>
        )}

        <div className="e-load-more-message" />
      </div>
    </div>
  )
}
