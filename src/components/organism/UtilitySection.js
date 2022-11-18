import React from 'react'
import SearchPost from '../molecules/SearchPost'

export default function UtilitySection() {
  return (
    <div className='relative h-full'>
      <div className='text-center mt-10'>
        <SearchPost></SearchPost>
        
      </div>
      <p className='text-5xl ml-5 mt-16 font-serif font-extrabold'>A living network of curious minds.</p>
      <p className='text-sm mt-7 ml-5'>Anyone can write on Bulb. Thought-leaders, journalists, experts, and individuals with unique perspectives share their thinking here. You’ll find pieces by independent writers from around the globe, stories we feature and leading authors, and smart takes on our own suite of blogs and publications.</p>

      <div className='flex flex-wrap mt-5'>
          <span className='text-sm text-gray-500 mx-3 my-1'>Help</span>
          <span className='text-sm text-gray-500 mx-3 my-1'>Status</span>
          <span className='text-sm text-gray-500 mx-3 my-1'>Writers</span>
          <span className='text-sm text-gray-500 mx-3 my-1'>Blog</span>
          <span className='text-sm text-gray-500 mx-3 my-1'>Careers</span>
          <span className='text-sm text-gray-500 mx-3 my-1'>Privacy</span>
          <span className='text-sm text-gray-500 mx-3 my-1'>Terms</span>
          <span className='text-sm text-gray-500 mx-3 my-1'>About</span>
          <span className='text-sm text-gray-500 mx-3 my-1'>Text to speech</span>
        </div>
    </div>
  )
}
