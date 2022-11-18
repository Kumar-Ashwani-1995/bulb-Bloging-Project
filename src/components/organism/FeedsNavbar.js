import React from 'react'
import CustomButton from '../atoms/CustomButton'
import LinkToWebSite from '../atoms/LinkToWebSite';



export default function FeedsNavbar() {
  return (
    <div className='sticky -top-1 m-10 border-b-2 bg-white align-bottom'>
      <LinkToWebSite to="create" linkName={<CustomButton styleToAdd="text-2xl font-extrabold px-8 mb-4 mt-3 align-middle" param="toLoginForm">+</CustomButton>}></LinkToWebSite>
      <CustomButton styleToAdd="px-8 mb-4 mt-3" param="toLoginForm">All</CustomButton>
      <CustomButton styleToAdd="px-8 mb-4 mt-3" param="toLoginForm">My Posts</CustomButton>
      <CustomButton styleToAdd="px-8 mb-4 mt-3" param="toLoginForm">Trending</CustomButton>
      <CustomButton styleToAdd="px-8 mb-4 mt-3" param="toLoginForm">Category</CustomButton>
    </div>
  )
}
