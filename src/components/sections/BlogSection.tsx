import { Calendar, Clock, ExternalLink, BookOpen } from 'lucide-react'
import { useBlogPosts } from '@/hooks/useBlogPosts'
import { useBasics } from '@/hooks/useResumeData'

export function BlogSection() {
  const { posts, loading, error } = useBlogPosts(9)
  const { blog } = useBasics()

  if (loading) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="p-5 rounded-xl bg-[var(--color-card-inner)] animate-pulse">
              <div className="h-40 bg-[var(--color-border)] rounded-lg mb-4" />
              <div className="h-4 bg-[var(--color-border)] rounded mb-2 w-3/4" />
              <div className="h-3 bg-[var(--color-border)] rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">Blog</h2>
        <div className="p-8 rounded-xl bg-[var(--color-card-inner)] text-center">
          <BookOpen size={32} className="mx-auto mb-3 text-[var(--color-text-secondary)]" />
          <p className="text-[var(--color-text-secondary)] mb-4">Unable to load blog posts right now.</p>
          <a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-brand)] hover:underline font-medium"
          >
            Visit blog directly <ExternalLink size={14} />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Blog</h2>
        <a
          href={blog.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-[var(--color-brand)] hover:underline font-medium"
        >
          View all posts <ExternalLink size={14} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => {
          const postUrl = `${blog.url}/${post.slug}`
          const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })

          return (
            <a
              key={post.slug}
              href={postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl bg-[var(--color-card-inner)]
                overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Cover image or fallback */}
              {post.coverImage?.url ? (
                <img
                  src={post.coverImage.url}
                  alt={post.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-40 bg-gradient-to-br from-[var(--color-brand)]/20 to-[var(--color-brand)]/5
                  flex items-center justify-center">
                  <BookOpen size={32} className="text-[var(--color-brand)]/50" />
                </div>
              )}

              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-sm leading-snug mb-2
                  group-hover:text-[var(--color-brand)] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs text-[var(--color-text-secondary)] mb-3 line-clamp-2 flex-1">
                  {post.brief}
                </p>

                {/* Meta row */}
                <div className="flex items-center gap-3 text-[10px] text-[var(--color-text-secondary)]">
                  <span className="flex items-center gap-1">
                    <Calendar size={10} />
                    {date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} />
                    {post.readTimeInMinutes} min read
                  </span>
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[var(--color-border)]">
                    {post.tags.map((tag) => (
                      <span
                        key={tag.slug}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-full
                          bg-[var(--color-brand)]/10 text-[var(--color-brand)]"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
