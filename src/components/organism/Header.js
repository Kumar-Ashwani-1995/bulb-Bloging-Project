import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavigationLeftSection from '../molecules/NavigationLeftSection'
import NavigationRightSection from '../molecules/NavigationRightSection'
import '../CSS/header.css'
import Modal from '../molecules/Modal';
import { authLogOutUser } from '../../redux/action/post.action';



export default function Header() {
  let navigate = useNavigate();
  let { isLoggedIn } = useSelector(state => state.user)
  function handleChange(value) {
    if(value!="logout"){
      navigate(`${value}`);
    }
    else{
      logout()
    }
  }
  let dispatch = useDispatch();
  function logout(params) {
    dispatch(authLogOutUser());
    // sessionStorage["loggedIn"]=undefined
    sessionStorage.removeItem("loggedIn");
    alert("logged out")
  }
  return (
    <div className='z-50'>
      
      <nav className='fixed px-5 w-full h-20 flex justify-between items-center border border-b-black z-50 header_web' style={{background:"#FFC017"}}>
          <NavigationLeftSection></NavigationLeftSection>
          <NavigationRightSection></NavigationRightSection>
      </nav>
      <nav className='hidden header_mobile  z-50 '>
      <select className='appearance-none mt-10 mx-3 ml-24 h-10 bg-white  border px-4 header_select' onChange={event => handleChange(event.target.value)} value={window.location.pathname}>
          <option value="/" >Home</option>
          <option value="/dashboard/post/all" >All Post</option>
          {isLoggedIn ?
            <option value="logout">Log Out</option>
            : <>
            <option value="/login">Log In</option>
            </>}
          <option value="/dashboard/post/trending">Trending</option>
          <option value="/dashboard/post/category">Category</option>
          <option value="/dashboard/profile" >Profile</option>
          <option value="/dashboard/BlogLab/new" >Create New</option>
        </select>
        <span className='absolute  top-12 right-10'>v</span>
        <span className='absolute  top-10 left-3 text-xl font-extrabold'>💡 Bulb</span>
      </nav>
    </div>
  )
}
