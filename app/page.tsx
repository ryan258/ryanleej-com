// app/page.tsx
import React from 'react'
import Link from 'next/link'
import ToolGrid from '@/components/ToolGrid'
import { Tool } from '@/types/Tool'

const featuredTools: Tool[] = [
  // Add featured tools here
]

export default function Home() {
  return (
    <>
      <section className='bg-blue-50 py-20'>
        <div className='container mx-auto px-6'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>
            AI Tools for MS Management
          </h1>
          <p className='text-xl text-gray-600 mb-8'>
            Empowering individuals with MS through innovative AI solutions
          </p>
          <Link
            href='/ms-ai-tools'
            className='bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600'
          >
            Explore Tools
          </Link>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-gray-800 mb-8'>
            Featured MS AI Tools
          </h2>
          <ToolGrid tools={featuredTools} />
        </div>
      </section>
    </>
  )
}
