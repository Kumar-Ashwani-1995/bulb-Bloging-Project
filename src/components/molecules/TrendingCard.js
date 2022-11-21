import React from 'react'
import { useNavigate } from 'react-router-dom';
import PersonImage from '../atoms/PersonImage'


export default function TrendingCard(props) {
  let navigate = useNavigate();
  let url='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
  return (
    <div className='flex w-80 h-24 m-3 cursor-pointer' onClick={()=>{navigate(`/dashboard/postPreview/${props.post.id}`)}}>
      <div className='basis-16 text-5xl text-gray-300'>{props.id}</div>
      <div className='flex flex-col justify-evenly'>
        <div > 
          <PersonImage styleToAdd="rounded-full inline" height="25px" width="25px" imageURL={url} altName="person"></PersonImage>
          <span className='font-mono text-sm ml-3'>{props.post.username}</span>
        </div>
        <div className='font-extrabold'>{props.post.description.length>28? props.post.description?.substring(0, 28)+"..":props.post.description}</div>
        
        <div className='font-mono text-sm text-gray-500'>
          <span>{props.post.date}</span> .
          <span>{props.post.readingTime} min Read</span>
        </div>
      </div>
    </div>
  )
}
