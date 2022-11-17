import React from 'react'
import TrendingCard from "../molecules/TrendingCard"
import TrendingIcon from '../atoms/TrendingIcon'

export default function TrendingSection() {
  return (
    <div className='m-5'>
      <div className='flex ml-10'>
        <TrendingIcon></TrendingIcon><span className='font-bold text-xl ml-1'>Trending On Bulb</span>
      </div>
      <div className='flex flex-wrap justify-evenly items-center'>
        <TrendingCard id="01"></TrendingCard>
        <TrendingCard id="02"></TrendingCard>
        <TrendingCard id="03"></TrendingCard>
        <TrendingCard id="04"></TrendingCard>
        <TrendingCard id="05"></TrendingCard>
        <TrendingCard id="06"></TrendingCard>
      </div>
    </div>
  )
}
