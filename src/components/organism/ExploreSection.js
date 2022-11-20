import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPostData } from '../../redux/action/post.action';
import BlogCard from '../molecules/BlogCard'

export default function ExploreSection() {
  let dispatch = useDispatch();
  let { postList, postLoadingList } = useSelector(state => state.posts)
  useEffect(() => {
    dispatch(getPostData());
  }, [])
  return (
    <div className='basis-7/12  m-10' >

      {
        postLoadingList ? <>loading...</> :
          postList.map((post) => {
            return <BlogCard key={post.id} post={post}></BlogCard>
          })

      }

    </div>
  )
}
