import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPostData, getPostDataByLimit } from '../../redux/action/post.action';
import CustomButton from '../atoms/CustomButton';
import {PostLoader} from '../atoms/Loader';
import BlogCard from '../molecules/BlogCard'

export default function ExploreSection() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { postList, postLoadingList } = useSelector(state => state.posts)
  useEffect(() => {
    dispatch(getPostDataByLimit(1));
  }, [])
  return (
    <div className='basis-7/12  m-10' >

      {
        postLoadingList ? <>
          <div className='mx-5'>
            <PostLoader></PostLoader>
          </div></> :
          postList.length > 0 ? 
          <>
          {
          postList.map((post) => {
            return <BlogCard key={post.id} post={post}></BlogCard>
          })
        }
        <div className='flex justify-center'>
          <CustomButton styleToAdd='border px-4  rounded-3xl h-12 bg-black text-white' onClickMethod={()=>{navigate("/dashboard/post/all")}}>Explore More in Dashboard</CustomButton>
          </div>
          </>
          :
          <div className='mx-6 ' >
            <p className='ml-5 text-red-400 text-xl font-bold'>Sorry. No Post available!</p>
            <PostLoader ></PostLoader>

          </div>
      }

    </div>
  )
}
