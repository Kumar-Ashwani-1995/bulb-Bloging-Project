import React from 'react'
import CategoryListing from '../molecules/CategoryListing'

export default function CategorySection() {
  return (
    <div className='relative basis-4/12'>
      <div className='sticky top-24'>
        <p className='font-bold text-sm mt-10'>DISCOVER MORE OF WHAT MATTERS TO YOU</p>
        <CategoryListing></CategoryListing>
        <hr className='mt-10'></hr>
        <div className='flex flex-wrap'>
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
    </div>
  )
}
