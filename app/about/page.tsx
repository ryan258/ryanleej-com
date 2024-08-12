// app/about/page.tsx
import React from 'react'
// import Image from 'next/image'

export const metadata = {
  title: 'About - RyanLeeJ.com',
  description:
    'Learn about Ryan Lee J and the mission behind AI tools for MS management',
}

export default function AboutPage() {
  return (
    <div className='container mx-auto px-6 py-16'>
      <h1 className='text-4xl font-bold text-gray-800 mb-8'>
        About RyanLeeJ.com
      </h1>

      <div className='grid md:grid-cols-2 gap-12'>
        <div>
          {/* <Image
            src='/images/ryan-lee-j.jpg'
            alt='Ryan Lee J'
            width={400}
            height={400}
            className='rounded-lg'
          /> */}
        </div>
        <div>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>
            Ryan's Story
          </h2>
          <p className='text-gray-600 mb-4'>
            Ryan Lee J is a software developer and MS advocate who has been
            living with Multiple Sclerosis since [year]. Driven by his personal
            experience and technical expertise, Ryan set out to create
            innovative AI tools to help others manage their MS more effectively.
          </p>
          <p className='text-gray-600 mb-4'>
            Through RyanLeeJ.com, he aims to empower individuals with MS by
            providing them with cutting-edge AI solutions that address the
            unique challenges of living with this condition.
          </p>
        </div>
      </div>

      <section className='mt-16'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Our Mission</h2>
        <p className='text-gray-600 mb-4'>
          At RyanLeeJ.com, our mission is to leverage the power of artificial
          intelligence to improve the quality of life for individuals living
          with Multiple Sclerosis. We believe that by creating smart, accessible
          tools, we can help people better manage their symptoms, track their
          progress, and make informed decisions about their health.
        </p>
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>
          The Power of AI in MS Management
        </h2>
        <p className='text-gray-600 mb-4'>
          Artificial Intelligence has the potential to revolutionize how we
          approach MS management. From predictive analytics that can forecast
          symptom flare-ups to personalized treatment recommendations based on
          individual data, AI opens up new possibilities for more effective and
          personalized care.
        </p>
        <p className='text-gray-600 mb-4'>
          Through our tools, we aim to make these advanced capabilities
          accessible to everyone in the MS community, empowering individuals to
          take control of their health and improve their day-to-day lives.
        </p>
      </section>
    </div>
  )
}
