// components/BlogPostCard.tsx
import React from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import { BlogPost } from '@/types/BlogPost'

interface BlogPostCardProps {
  post: BlogPost
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
      {/* <Image
        src={post.coverImageUrl}
        alt={post.title}
        width={400}
        height={200}
        className='w-full h-48 object-cover'
      /> */}
      <div className='p-6'>
        <h3 className='text-xl font-semibold text-gray-800 mb-2'>
          {post.title}
        </h3>
        <p className='text-gray-600 mb-4'>{post.excerpt}</p>
        <div className='flex justify-between items-center'>
          <span className='text-sm text-gray-500'>
            {post.date instanceof Date
              ? post.date.toLocaleDateString()
              : new Date(post.date).toLocaleDateString()}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className='text-blue-500 hover:text-blue-600 transition-colors'
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPostCard
