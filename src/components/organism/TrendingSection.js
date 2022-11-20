import React, { useEffect } from 'react'
import TrendingCard from "../molecules/TrendingCard"
import TrendingIcon from '../atoms/TrendingIcon'
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingData } from '../../redux/action/post.action';
import {PostLoader} from '../atoms/Loader';

export default function TrendingSection() {
  let dispatch = useDispatch();
  let { postList, postLoadingList } = useSelector(state => state.posts)
  useEffect(() => {
    dispatch(getTrendingData())
  }, [])
  
  return (
    <div className='m-5'>
      <div className='flex ml-10'>
        <TrendingIcon></TrendingIcon><span className='font-bold text-xl ml-1'>Trending On Bulb</span>
      </div>
      <div className='flex flex-wrap justify-evenly items-center'>

      {
        postLoadingList ?
          <div className='mx-5'>
            <PostLoader></PostLoader>
          </div> :
          postList.map((post,index) => {
            return <TrendingCard key={post.id} id={`0`+(index+1)} post={post}></TrendingCard>
          })

      }
        {/* <TrendingCard id="01"></TrendingCard>
        <TrendingCard id="02"></TrendingCard>
        <TrendingCard id="03"></TrendingCard>
        <TrendingCard id="04"></TrendingCard>
        <TrendingCard id="05"></TrendingCard>
        <TrendingCard id="06"></TrendingCard> */}
      </div>
    </div>
  )
}
