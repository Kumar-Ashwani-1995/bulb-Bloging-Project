import React from 'react'
import BlogCard from '../molecules/BlogCard'

export default function FeedContent({post}) {
  return (
    <div className='m-10'>
      <BlogCard post={post}></BlogCard>
    </div>
  )
}
