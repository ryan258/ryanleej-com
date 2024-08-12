// File: lib/mdx.ts

import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost, Tool } from '@/types'

const blogDirectory = path.join(process.cwd(), 'content/blog')
const toolsDirectory = path.join(process.cwd(), 'content/ms-ai-tools')

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const fileNames = await fs.readdir(blogDirectory)
    const posts = await Promise.all(
      fileNames.map(async (fileName) => {
        const fullPath = path.join(blogDirectory, fileName)
        const fileContents = await fs.readFile(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          id: fileName.replace(/\.mdx$/, ''),
          title: data.title as string,
          date: new Date(data.date as string),
          author: data.author as string,
          excerpt: data.excerpt as string,
          content,
          coverImageUrl: data.coverImage as string,
          tags: data.tags as string[],
          slug: fileName.replace(/\.mdx$/, ''),
          createdAt: new Date(data.date as string),
          updatedAt: new Date(data.date as string),
        } as BlogPost
      })
    )

    return posts.sort((a, b) => b.date.getTime() - a.date.getTime())
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export async function getTools(): Promise<Tool[]> {
  try {
    const fileNames = await fs.readdir(toolsDirectory)
    return await Promise.all(
      fileNames.map(async (fileName) => {
        const fullPath = path.join(toolsDirectory, fileName)
        const fileContents = await fs.readFile(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          id: fileName.replace(/\.mdx$/, ''),
          toolName: data.toolName as string,
          slug: fileName.replace(/\.mdx$/, ''),
          shortDescription: data.shortDescription as string,
          longDescription: content,
          iconUrl: data.iconUrl as string,
          features: data.features as string[],
          msHelp: data.msHelp as string,
          githubUrl: data.githubUrl as string,
          demoUrl: data.demoUrl as string | undefined,
          createdAt: new Date(),
          updatedAt: new Date(),
        } as Tool
      })
    )
  } catch (error) {
    console.error('Error reading tools:', error)
    return []
  }
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  try {
    const posts = await getBlogPosts()
    return posts.find((post) => post.slug === slug) || null
  } catch (error) {
    console.error(`Error getting blog post with slug ${slug}:`, error)
    return null
  }
}

export async function getToolBySlug(slug: string): Promise<Tool | null> {
  try {
    const tools = await getTools()
    return tools.find((tool) => tool.slug === slug) || null
  } catch (error) {
    console.error(`Error getting tool with slug ${slug}:`, error)
    return null
  }
}
