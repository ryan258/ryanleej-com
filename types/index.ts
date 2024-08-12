// File: types/index.ts

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

export interface Tool {
  id: string
  toolName: string
  slug: string
  shortDescription: string
  longDescription: string
  iconUrl: string
  features: string[]
  msHelp: string
  githubUrl: string
  demoUrl?: string
  relatedTools?: string[] // Array of tool IDs
  createdAt: Date
  updatedAt: Date
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface NewsletterSignupData {
  email: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

export type SortOrder = 'asc' | 'desc'

export interface PaginationParams {
  page: number
  pageSize: number
}

export interface FilterParams {
  [key: string]: string | number | boolean | string[]
}
