// components/ToolGrid.tsx
import React from 'react'
import ToolCard from './ToolCard'
import { Tool } from '@/types/Tool'

interface ToolGridProps {
  tools: Tool[]
}

const ToolGrid: React.FC<ToolGridProps> = ({ tools }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  )
}

export default ToolGrid
