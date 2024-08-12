// app/contact/page.tsx
import React from 'react'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact - RyanLeeJ.com',
  description:
    'Get in touch with us for questions, feedback, or collaboration opportunities',
}

export default function ContactPage() {
  return (
    <div className='container mx-auto px-6 py-16'>
      <h1 className='text-4xl font-bold text-gray-800 mb-8'>Contact Us</h1>

      <div className='grid md:grid-cols-2 gap-12'>
        <div>
          <p className='text-gray-600 mb-4'>
            We'd love to hear from you! Whether you have questions about our AI
            tools, feedback on your experience, or ideas for collaboration,
            please don't hesitate to reach out.
          </p>
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
              Contact Information
            </h2>
            <p className='text-gray-600'>Email: contact@ryanleej.com</p>
            <p className='text-gray-600'>Phone: (123) 456-7890</p>
            {/* Add social media links if applicable */}
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
