// components/Footer.tsx
import React from 'react'
import Link from 'next/link'
import NewsletterSignup from './NewsletterSignup'

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-100 mt-16'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>About Us</h3>
            <p className='text-gray-600'>
              RyanLeeJ.com is dedicated to empowering individuals with MS
              through innovative AI solutions.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/' className='text-gray-600 hover:text-blue-600'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-600 hover:text-blue-600'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/ms-ai-tools'
                  className='text-gray-600 hover:text-blue-600'
                >
                  MS AI Tools
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-gray-600 hover:text-blue-600'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-600 hover:text-blue-600'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact</h3>
            <p className='text-gray-600'>Email: contact@ryanleej.com</p>
            <p className='text-gray-600'>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Newsletter</h3>
            <NewsletterSignup />
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-200 text-center'>
          <p className='text-gray-600'>
            © {new Date().getFullYear()} RyanLeeJ.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
