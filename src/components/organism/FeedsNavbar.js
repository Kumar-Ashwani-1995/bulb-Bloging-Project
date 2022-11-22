import React from 'react'
import CustomButton from '../atoms/CustomButton'
import LinkToWebSite from '../atoms/LinkToWebSite';



export default function FeedsNavbar() {
  return (
    <div className='sticky -top-1 m-6 mt-5 border-b-2 bg-white flex'>
      <LinkToWebSite to="/dashboard/create" linkName={<CustomButton styleToAdd="text-2xl font-extrabold px-8 mb-4 mt-3 align-middle" onClickMethod={console.log} param="create">+</CustomButton>}></LinkToWebSite>
      <div  className='flex items-end flex-wrap'>
        <LinkToWebSite to="/dashboard/post/all" linkName={<CustomButton styleToAdd=" px-8 mb-4 mt-2 align-middle" onClickMethod={console.log} param="all">All</CustomButton>}></LinkToWebSite>
        <LinkToWebSite to="/dashboard/post/mypost" linkName={<CustomButton styleToAdd=" px-8 mb-4 mt-2 align-middle" onClickMethod={console.log} param="myPost">My Posts</CustomButton>}></LinkToWebSite>
        <LinkToWebSite to="/dashboard/post/trending" linkName={<CustomButton styleToAdd=" px-8 mb-4 mt-2 align-middle" onClickMethod={console.log} param="trending">Trending</CustomButton>}></LinkToWebSite>
        <LinkToWebSite to="/dashboard/post/category" linkName={<CustomButton styleToAdd=" px-8 mb-4 mt-2 align-middle" onClickMethod={console.log} param="category">Category</CustomButton>}></LinkToWebSite>
      </div>
    </div>
  )
}
