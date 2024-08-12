// components/ToolCard.tsx
import React from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import { Tool } from '@/types/Tool'

interface ToolCardProps {
  tool: Tool
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
      {/* <Image
        src={tool.iconUrl}
        alt={`${tool.toolName} icon`}
        width={64}
        height={64}
        className='mx-auto mt-6'
      /> */}
      <div className='p-6'>
        <h3 className='text-xl font-semibold text-gray-800 mb-2'>
          {tool.toolName}
        </h3>
        <p className='text-gray-600 mb-4'>{tool.shortDescription}</p>
        <Link
          href={`/ms-ai-tools/${tool.slug}`}
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default ToolCard
