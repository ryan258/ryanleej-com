// components/ContactForm.tsx
'use client'

import React, { useState } from 'react'

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Replace this with your actual form submission logic
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage(
          "Thank you for your message. We'll get back to you soon!"
        )
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitMessage(
          'There was an error submitting your message. Please try again.'
        )
      }
    } catch (error) {
      setSubmitMessage(
        'There was an error submitting your message. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-700'
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
        />
      </div>
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
        />
      </div>
      <div>
        <label
          htmlFor='message'
          className='block text-sm font-medium text-gray-700'
        >
          Message
        </label>
        <textarea
          id='message'
          name='message'
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
        ></textarea>
      </div>
      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50'
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {submitMessage && (
        <p
          className={`mt-4 text-center ${
            submitMessage.includes('error') ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {submitMessage}
        </p>
      )}
    </form>
  )
}

export default ContactForm
