import React, { useEffect, useState } from 'react'
import LinkToWebSite from '../atoms/LinkToWebSite'
import BulbLogo from '../atoms/BulbLogo'
import { TfiHome } from 'react-icons/tfi';
import { AiOutlineBell } from 'react-icons/ai';
import { TfiWrite } from 'react-icons/tfi';
import { BiLogInCircle } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import { authLogOutUser } from '../../redux/action/post.action';


export default function SideNavbar() {
  let { isLoggedIn,loggedInData } = useSelector(state => state.user)
  return (
    <div className='flex flex-col justify-center items-center my-10' style={{background:"#FFC017"}}>

      <LinkToWebSite to="/" linkName={<><BulbLogo></BulbLogo><span class="tooltiptext text-xs">Home Page</span></>} styleToAdd="text-6xl text-black font-bold mt-3 mb-6 tooltip"></LinkToWebSite>
      <p className='text-xs'>Bulb</p>
      <LinkToWebSite to="post/all" linkName={<><TfiHome></TfiHome><span class="tooltiptext text-xs">Dashboard Page</span></>} styleToAdd="text-4xl text-black font-bold my-6 mt-10 tooltip"></LinkToWebSite>
      <LinkToWebSite to="profile" linkName={<><AiOutlineBell></AiOutlineBell><span class="tooltiptext text-xs">Updates</span></>} styleToAdd="text-4xl text-black font-bold my-6 tooltip"></LinkToWebSite>
      <LinkToWebSite to="BlogLab/new" linkName={<><TfiWrite></TfiWrite><span class="tooltiptext text-xs">Create Blog</span></>} styleToAdd="text-4xl text-black font-bold my-6 tooltip"></LinkToWebSite>
      {isLoggedIn ?
      <>
      <LinkToWebSite to="profile" linkName={<><CgProfile></CgProfile><span class="tooltiptext text-xs">Profile Page</span></>} styleToAdd="text-4xl text-black font-bold mt-28 tooltip"></LinkToWebSite>
      <p className='text-xs text-center'>{loggedInData.fullName?loggedInData.fullName:<></>}</p>
        </>
        :
        <LinkToWebSite to="/login" linkName={
          <span className='flex flex-col mt-20 justify-center items-center text-xs text-black font-mono '>
            <BiLogInCircle className='text-2xl '></BiLogInCircle>
            <p>Log In</p>
          </span>
        } styleToAdd="text-lg text-black  mt-10"></LinkToWebSite>
      }
    </div>
  )
}
