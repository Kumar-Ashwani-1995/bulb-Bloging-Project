import React, { useEffect ,useState} from 'react'
import TrendingCard from "../molecules/TrendingCard"
import TrendingIcon from '../atoms/TrendingIcon'
import { useDispatch, useSelector } from 'react-redux';
import {DotLoader} from '../atoms/Loader';
import { BASE_URL } from '../../redux/action.type'


export default function TrendingSection() {

  const [trending, setTrending] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getTrending()
  }, [])
  async function getTrending() {
    setLoading(true)
    try {
      const trendingURL = `${BASE_URL}/posts?_sort=clap&_order=desc&_limit=6`;
      let response = await fetch(trendingURL);
      let data = await response.json();
      console.log(data);
      setTrending(data)
      setLoading(false)
  } catch (error) {
      console.log(error);
      setLoading(false)
  }
  }

  return (
    <div className='m-5'>
      <div className='flex ml-10'>
        <TrendingIcon></TrendingIcon><span className='font-bold text-xl ml-1'>Trending On Bulb</span>
      </div>
      <div className='flex flex-wrap justify-evenly items-center'>

      {
        loading ?
          <div className='mx-5'>
            <DotLoader></DotLoader>
          </div> :
          trending.map((post,index) => {
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
