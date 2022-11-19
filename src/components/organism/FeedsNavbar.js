import React from 'react'
import CustomButton from '../atoms/CustomButton'
import LinkToWebSite from '../atoms/LinkToWebSite';



export default function FeedsNavbar() {
  return (
    <div className='sticky -top-1 m-9 mt-5 border-b-2 bg-white align-bottom'>
      <LinkToWebSite to="/dashboard/create" linkName={<CustomButton styleToAdd="text-2xl font-extrabold px-8 mb-4 mt-3 align-middle" param="toLoginForm">+</CustomButton>}></LinkToWebSite>
      <LinkToWebSite to="/dashboard/post/all" linkName={<CustomButton styleToAdd=" px-8 mb-4 mt-2 align-middle" param="toLoginForm">Add</CustomButton>}></LinkToWebSite>
      <LinkToWebSite to="/dashboard/post/mypost" linkName={<CustomButton styleToAdd=" px-8 mb-4 mt-2 align-middle" param="toLoginForm">My Posts</CustomButton>}></LinkToWebSite>
      <LinkToWebSite to="/dashboard/post/trending" linkName={<CustomButton styleToAdd=" px-8 mb-4 mt-2 align-middle" param="toLoginForm">Trending</CustomButton>}></LinkToWebSite>
      <LinkToWebSite to="/dashboard/post/category" linkName={<CustomButton styleToAdd=" px-8 mb-4 mt-2 align-middle" param="toLoginForm">Category</CustomButton>}></LinkToWebSite>
      {/* <CustomButton styleToAdd="px-8 mb-4 mt-3" param="toLoginForm">All</CustomButton>
      <CustomButton styleToAdd="px-8 mb-4 mt-3" param="toLoginForm">My Posts</CustomButton>
      <CustomButton styleToAdd="px-8 mb-4 mt-3" param="toLoginForm">Trending</CustomButton>
      <CustomButton styleToAdd="px-8 mb-4 mt-3" param="toLoginForm">Category</CustomButton> */}
    </div>
  )
}
