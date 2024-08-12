// app/blog/page.tsx
import React from 'react'
import { getBlogPosts } from '@/lib/mdx'
import BlogPostCard from '@/components/BlogPostCard'

export const metadata = {
  title: 'Blog - RyanLeeJ.com',
  description: 'Read the latest articles on MS management and AI technology',
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <div className='container mx-auto px-6 py-16'>
      <h1 className='text-4xl font-bold text-gray-800 mb-8'>Blog</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.slug}
            post={{
              ...post,
              date:
                post.date instanceof Date
                  ? post.date.toISOString()
                  : new Date(post.date).toISOString(),
            }}
          />
        ))}
      </div>
    </div>
  )
}
