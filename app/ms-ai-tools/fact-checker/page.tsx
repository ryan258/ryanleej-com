// app/ms-ai-tools/[toolName]/page.tsx
import React from 'react'
import { notFound } from 'next/navigation'
import { getAllTools, getToolByName } from '@/lib/tools'
import { Tool } from '@/types/Tool'

export async function generateStaticParams() {
  const tools = getAllTools()
  return tools.map((tool) => ({
    toolName: tool.name.toLowerCase().replace(/ /g, '-'),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { toolName: string }
}) {
  const tool = getToolByName(params.toolName)
  if (!tool) {
    return {
      title: 'Tool Not Found',
    }
  }
  return {
    title: `${tool.name} - RyanLeeJ.com`,
    description: tool.tagline,
  }
}

export default function ToolPage({ params }: { params: { toolName: string } }) {
  const tool = getToolByName(params.toolName)

  if (!tool) {
    notFound()
  }

  return (
    <div className='container mx-auto px-6 py-16'>
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>{tool.name}</h1>
      <p className='text-xl text-gray-600 mb-8'>{tool.tagline}</p>

      <section className='mb-12'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Overview</h2>
        <p className='text-gray-600'>{tool.overview}</p>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Key Features</h2>
        <ul className='list-disc list-inside text-gray-600'>
          {tool.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>
          How It Helps MS Patients
        </h2>
        <p className='text-gray-600'>{tool.msHelp}</p>
      </section>

      <a
        href={tool.githubUrl}
        className='bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600'
        target='_blank'
        rel='noopener noreferrer'
      >
        View on GitHub
      </a>
    </div>
  )
}
