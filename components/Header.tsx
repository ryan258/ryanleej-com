// components/Header.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/ms-ai-tools', label: 'MS AI Tools' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto px-6 py-3'>
        <div className='flex justify-between items-center'>
          <Link href='/' className='text-2xl font-bold text-blue-600'>
            RyanLeeJ.com
          </Link>
          <nav className='hidden md:flex space-x-4'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-600 hover:text-blue-600 ${
                  pathname === item.href ? 'font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <nav className='mt-4 md:hidden'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 text-gray-600 hover:text-blue-600 ${
                  pathname === item.href ? 'font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
