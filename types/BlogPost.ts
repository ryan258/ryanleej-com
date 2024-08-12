// types/BlogPost.ts

export interface BlogPost {
  id: string
  title: string
  slug: string
  author: string
  date: Date | string
  excerpt: string
  content: string
  coverImageUrl: string
  tags: string[]
  relatedPosts?: string[] // Array of blog post IDs
  createdAt: Date | string
  updatedAt: Date | string
}
