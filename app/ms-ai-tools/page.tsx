// app/ms-ai-tools/page.tsx
import React from 'react'
import ToolGrid from '@/components/ToolGrid'
import { getTools } from '@/lib/mdx' // Corrected import

export const metadata = {
  title: 'MS AI Tools - RyanLeeJ.com',
  description: 'Explore our collection of AI-powered tools for MS management',
}

export default async function MSAIToolsPage() {
  const tools = await getTools() // Note the await here

  return (
    <div className='container mx-auto px-6 py-16'>
      <h1 className='text-4xl font-bold text-gray-800 mb-8'>MS AI Tools</h1>

      <section className='mb-12'>
        <p className='text-xl text-gray-600 mb-8'>
          Discover our suite of AI-powered tools designed to help you manage
          Multiple Sclerosis more effectively. From symptom tracking to
          treatment optimization, our tools are here to support you on your MS
          journey.
        </p>
      </section>

      <ToolGrid tools={tools} />
    </div>
  )
}
