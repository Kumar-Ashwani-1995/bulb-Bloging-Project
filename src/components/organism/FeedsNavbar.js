import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import CustomButton from '../atoms/CustomButton'
import LinkToWebSite from '../atoms/LinkToWebSite';
import { useSelector } from 'react-redux'
import SearchPost from '../molecules/SearchPost';
import '../CSS/feedsNavbar.css'
import { TfiWrite } from 'react-icons/tfi';





export default function FeedsNavbar() {
  let { pageType } = useParams();
  let { isLoggedIn } = useSelector(state => state.user)
  let navigate = useNavigate();
  function handleChange(value) {
    navigate(`${value}`);
  }
  return (
    <div className='sticky -top-1 m-6 mt-5 border-b-2 bg-white flex mr-0 feedback_navbar'>
      <div className='hidden feedback_search'>
        <LinkToWebSite to="/dashboard/BlogLab/new" linkName={<TfiWrite className='text-4xl mr-5 active:scale-95'></TfiWrite>}></LinkToWebSite>
        <SearchPost></SearchPost>

      </div>
      <LinkToWebSite to="/dashboard/BlogLab/new" linkName={<CustomButton styleToAdd="text-2xl font-extrabold px-8 mb-4 mt-3 align-middle feedback_createNew" onClickMethod={console.log} param="create">+</CustomButton>}></LinkToWebSite>
      <div className='flex items-end flex-wrap feedback_links'>
        <LinkToWebSite to="/dashboard/post/all" linkName={<CustomButton styleToAdd={`px-8 mb-4 mt-2 align-middle ${pageType === "all" ? "shadow-inner rounded-full border" : ""}`} onClickMethod={console.log} param="all">All</CustomButton>}></LinkToWebSite>
        {isLoggedIn ?
          <LinkToWebSite to="/dashboard/post/mypost" linkName={<CustomButton styleToAdd={`px-8 mb-4 mt-2 align-middle ${pageType === "mypost" ? "shadow-inner rounded-full border" : ""}`} onClickMethod={console.log} param="myPost">My Posts</CustomButton>}></LinkToWebSite>
          : <></>}
        <LinkToWebSite to="/dashboard/post/trending" linkName={<CustomButton styleToAdd={`px-8 mb-4 mt-2 align-middle ${pageType === "trending" ? "shadow-inner rounded-full border" : ""}`} onClickMethod={console.log} param="trending">Trending</CustomButton>}></LinkToWebSite>
        <LinkToWebSite to="/dashboard/post/category" linkName={<CustomButton styleToAdd={`px-8 mb-4 mt-2 align-middle ${pageType === "category" ? "shadow-inner rounded-full border" : ""}`} onClickMethod={console.log} param="category">Category</CustomButton>}></LinkToWebSite>
        <div>

        </div>
      </div>

      <div className='hidden feedback_links_small' >
        <select className='w-full p-4' onChange={event => handleChange(event.target.value)} value={window.location.pathname}>
          <option value={window.location.pathname.includes('postPreview')?window.location.pathname:""} disabled>--Select--</option>
          <option value="/" >Home</option>
          <option value="/dashboard/post/all" >All</option>
          {isLoggedIn ?
            <option value="/dashboard/post/mypost">Mypost</option>
            : <></>}
          <option value="/dashboard/post/trending">Trending</option>
          <option value="/dashboard/post/category">Category</option>
          <option value="/dashboard/profile" >Profile</option>
          <option value="/dashboard/BlogLab/new" >Create New</option>
        </select>

      </div>

    </div>
  )
}
