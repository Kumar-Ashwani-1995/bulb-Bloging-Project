import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BLOG_URL } from '../../redux/action.type'
import PersonImage from '../atoms/PersonImage'
import '../CSS/blogCard.css'


export default function BlogCard(props) {
  // let url = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
  const [imageSrc, setImageSrc] = useState(props.post.featureImg)
  let category = {
    "0": "Others",
    "1": "Science",
    "2": "Nature",
    "3": "Motivational",
    "4": "Travel",
    "5": "Movies",
    "6": "Technology"
  }
  function imageErrorOcurred(){
    setImageSrc(BLOG_URL)
  }
  let navigate = useNavigate();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return (
    // box-shadow: 0 10px 45px rgba(0, 0, 0, .2);
    <div className='flex mx-10 my-4 w-11/12 justify-between cursor-pointer border rounded-md p-5 shadow-lg ' data-testid="blogClick" onClick={()=>{navigate(`/dashboard/postPreview/${props.post.id}`)}}>
      <div className=''>
        <div className='mb-3'>
          <PersonImage styleToAdd="rounded-full inline" height="25px" width="25px"  altName="person"></PersonImage>
          <span className='font-mono font-bold text-lg ml-3'>{props.post.username}</span>
        </div>
        <div className='text-2xl font-extrabold'>
          {props.post.title}
        </div>
        <div className='text-gray-500'>
          {props.post.description}
        </div>
        <div className='flex items-baseline space-x-3 font-mono text-sm text-gray-500 mt-2 '>
          <span>{new Date(props.post.date).toLocaleDateString(undefined, options)}</span>
          <span> {props.post.readingTime} min Read</span>
          <span className='flex flex-wrap'>
          {
            props.post.category.map((cat) => {
              if (cat) {
                return <span key={cat} className='bg-gray-100 w-fit ml-2 py-1 px-2 rounded-xl text-black'>{category[cat]}</span>
              }
              return null

            })
          }
          </span>
        </div>
      </div>
      <div className='bolgCard_image'>
        <img src={imageSrc} onError={()=>{imageErrorOcurred()}} alt="blogName" style={{ height: "150px", width: "150px" }}></img>
      </div>
    </div>
  )
}
