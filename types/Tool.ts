// types/Tool.ts

export interface Tool {
  id: string
  toolName: string // Changed from 'name' to 'toolName'
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

export interface ToolCardData {
  id: string
  toolName: string // Changed from 'name' to 'toolName'
  slug: string
  shortDescription: string
  iconUrl: string
}
