import React from 'react'
import { useNavigate } from 'react-router-dom'
import PersonImage from '../atoms/PersonImage'

export default function BlogCard(props) {
  let url = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
  let blogURL = 'https://media.istockphoto.com/id/1198931639/photo/writing-a-blog-blogger-influencer-reading-text-on-screen.jpg?s=612x612&w=0&k=20&c=4FJ_fzzZYqBoGG-RY8fcohpaOKKwnnI-ik58cPy6t-g='
  let category = {
    "0": "others",
    "1": "programming",
    "2": "science",
    "3": "Motivational",
    "4": "politics"
  }
  let navigate = useNavigate();
  return (
    // box-shadow: 0 10px 45px rgba(0, 0, 0, .2);
    <div className='flex mx-10 my-4 w-11/12 justify-between cursor-pointer border rounded-md p-5 shadow-lg ' onClick={()=>{navigate(`/dashboard/postPreview/${props.post.id}`)}}>
      <div className=''>
        <div className='mb-3'>
          <PersonImage styleToAdd="rounded-full inline" height="25px" width="25px" imageURL={url} altName="person"></PersonImage>
          <span className='font-mono font-bold text-lg ml-3'>{props.post.username}</span>
        </div>
        <div className='text-2xl font-extrabold'>
          {props.post.title}
        </div>
        <div className='text-gray-400'>
          {props.post.description}
        </div>
        <div className='font-mono text-sm text-gray-500 mt-2'>
          <span>{props.post.date}</span> .
          <span> {props.post.readingTime} min Read</span>
          {
            props.post.category.map((cat) => {
              if (cat) {
                return <span key={cat} className='bg-gray-100 ml-2 py-1 px-1 rounded-xl'>{category[cat]}</span>
              }
              return null

            })
          }
        </div>
      </div>
      <div className=''>
        <img src={blogURL} alt="blogName" style={{ height: "150px", width: "150px" }}></img>
      </div>
    </div>
  )
}
