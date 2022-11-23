import React from 'react'
import { useNavigate } from 'react-router-dom';
import PersonImage from '../atoms/PersonImage'


export default function TrendingCard(props) {
  let navigate = useNavigate();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div className='flex w-80 h-24 m-3 cursor-pointer' onClick={()=>{navigate(`/dashboard/postPreview/${props.post.id}`)}}>
      <div className='basis-16 text-5xl text-gray-300'>{props.id}</div>
      <div className='flex flex-col justify-evenly'>
        <div > 
          <PersonImage styleToAdd="rounded-full inline" height="25px" width="25px"  altName="person"></PersonImage>
          <span className='font-mono text-sm ml-3'>{props.post.username}</span>
        </div>
        <div className='font-extrabold'>{props.post.description.length>28? props.post.description?.substring(0, 28)+"..":props.post.description}</div>
        
        <div className='font-mono text-sm text-gray-500'>
          <span>{new Date(props.post.date).toLocaleDateString(undefined, options)}</span> .
          <span> {props.post.readingTime} min Read</span>
        </div>
      </div>
    </div>
  )
}
