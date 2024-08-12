// app/blog/[slug]/page.tsx
import React from 'react'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getBlogPostBySlug } from '@/lib/mdx'
import { Alert } from '@/components/ui/alert'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getBlogPostBySlug(params.slug)
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  return {
    title: `${post.title} - RyanLeeJ.com Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className='max-w-3xl mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-4'>{post.title}</h1>
      <p className='text-gray-600 mb-4'>
        By {post.author} on {post.date.toDateString()}
      </p>
      <div className='prose max-w-none'>
        <MDXRemote source={post.content} components={{ Alert }} />
      </div>
    </article>
  )
}
