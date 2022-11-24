import React from 'react'
import CustomButton from '../atoms/CustomButton'
import ParticlesBackground from '../atoms/ParticlesBackground'

export default function DisplaySubHeader() {
  const onClickScroll=()=>{
    window.scrollTo(0, 672);
  }
  return (
    <span className=''>
      <ParticlesBackground></ParticlesBackground>
      <div className='flex flex-col items-center justify-center h-full'>
        <p className='text-8xl font-serif'>Stay curious.</p>
        <p className='text-2xl font-serif w-96 text-center mt-2'>Discover stories, thinking, and expertise from writers on any topic.</p>
        <CustomButton styleToAdd="text-white bg-black px-6 py-3 mt-2 rounded-3xl bulb__hide" onClickMethod={onClickScroll}>Start Reading</CustomButton>
      </div>

    </span>
  )
}
