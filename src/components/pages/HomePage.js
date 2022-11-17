import React from 'react'
import CategorySection from '../organism/CategorySection'
import DisplaySubHeader from '../organism/DisplaySubHeader'
import ExploreSection from '../organism/ExploreSection'
import TrendingSection from '../organism/TrendingSection'

export default function HomePage() {
  return (
    <div className='h-80 relative'>
      <DisplaySubHeader></DisplaySubHeader>
      <TrendingSection></TrendingSection>
      <hr className='mt-16'></hr>
      <div className='flex'>
        <ExploreSection></ExploreSection>
        <CategorySection></CategorySection>
      </div>
    </div>
  )
}
