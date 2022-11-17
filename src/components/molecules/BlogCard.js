import React from 'react'
import PersonImage from '../atoms/PersonImage'

export default function BlogCard(props) {
  let url = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
  let blogURL = 'https://media.istockphoto.com/id/1198931639/photo/writing-a-blog-blogger-influencer-reading-text-on-screen.jpg?s=612x612&w=0&k=20&c=4FJ_fzzZYqBoGG-RY8fcohpaOKKwnnI-ik58cPy6t-g='
  return (
    <div className='flex m-6 w-11/12 justify-between'>
      <div className=''>
        <div className='mb-3'>
          <PersonImage styleToAdd="rounded-full inline" height="25px" width="25px" imageURL={url} altName="person"></PersonImage>
          <span className='font-mono font-bold text-lg ml-3'>Alen Joe.</span>
        </div>
        <div className='text-2xl font-extrabold'>
          How to Pull Off a Personal Annual Review
        </div>
        <div className='text-gray-400'>
          A no-fuss, intuitive way to take stock and map your priorities
        </div>
        <div className='font-mono text-sm text-gray-500 mt-2'>
          <span>Nov 14</span> .
          <span> 7 min Read</span>
          <span className='bg-gray-100 ml-2 py-1 px-1 rounded-xl'>Life Lesson</span>
        </div>
      </div>
      <div className=''>
        <img src={blogURL} alt="blogName" style={{ height: "150px", width: "150px" }}></img>
      </div>
    </div>
  )
}
