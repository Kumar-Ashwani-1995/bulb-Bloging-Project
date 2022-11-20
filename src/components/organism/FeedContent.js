import React from 'react'
import BlogCard from '../molecules/BlogCard'

export default function FeedContent({post}) {
  return (
    <div className='mx-5'>
      <BlogCard post={post}></BlogCard>
    </div>
  )
}
