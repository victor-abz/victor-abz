import { useState, useEffect } from 'react'
import { useBasics } from './useResumeData'
import type { BlogPost } from '@/data/resume.schema'

const HASHNODE_API = 'https://gql.hashnode.com'

export function useBlogPosts(count = 6) {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { blog } = useBasics()

  useEffect(() => {
    const query = `query {
      publication(host: "${blog.host}") {
        posts(first: ${count}) {
          edges {
            node {
              title
              brief
              coverImage { url }
              publishedAt
              slug
              url
              readTimeInMinutes
              tags { name slug }
            }
          }
        }
      }
    }`

    fetch(HASHNODE_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((data) => {
        const edges = data?.data?.publication?.posts?.edges
        if (edges) {
          setPosts(edges.map((e: { node: BlogPost }) => e.node))
        } else {
          setError('No posts found')
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [blog.host, count])

  return { posts, loading, error }
}
