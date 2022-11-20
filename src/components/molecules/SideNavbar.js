import React, { useEffect, useState } from 'react'
import LinkToWebSite from '../atoms/LinkToWebSite'
import BulbLogo from '../atoms/BulbLogo'
import { TfiHome } from 'react-icons/tfi';
import { AiOutlineBell } from 'react-icons/ai';
import { TfiWrite } from 'react-icons/tfi';
import { BiLogOutCircle } from 'react-icons/bi';
import { BiLogInCircle } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import CustomButton from '../atoms/CustomButton';
import LogOut from './LogOut';


export default function SideNavbar() {
  const [closeDialog, setcloseDialog] = useState(false)
  let { isLoggedIn,loggedInData } = useSelector(state => state.user)
  useEffect(() => {
    console.log("Login Status: " + isLoggedIn);
  }, [isLoggedIn])
  return (
    <div className='flex flex-col justify-center items-center my-20' >
      {closeDialog && (
        <LogOut setcloseDialog={setcloseDialog}></LogOut>
      )}
      <LinkToWebSite to="/" linkName={<BulbLogo></BulbLogo>} styleToAdd="text-6xl text-black font-bold mb-6"></LinkToWebSite>
      <p className='text-xs'>Bulb</p>
      <LinkToWebSite to="post/all" linkName={<TfiHome></TfiHome>} styleToAdd="text-4xl text-black font-bold my-6 mt-10"></LinkToWebSite>
      <LinkToWebSite to="profile" linkName={<AiOutlineBell></AiOutlineBell>} styleToAdd="text-4xl text-black font-bold my-6"></LinkToWebSite>
      <LinkToWebSite to="create" linkName={<TfiWrite></TfiWrite>} styleToAdd="text-4xl text-black font-bold my-6"></LinkToWebSite>
      {isLoggedIn ?
      <>
      <LinkToWebSite to="profile" linkName={<CgProfile></CgProfile>} styleToAdd="text-4xl text-black font-bold  mt-6"></LinkToWebSite>
      <p className='text-xs'>{loggedInData.fullName?loggedInData.fullName:<></>}</p>
        <CustomButton styleToAdd={`text-xs text-black font-mono mt-8`} onClickMethod={setcloseDialog} param={true}>
          <span className='flex flex-col justify-center items-center'>
            <BiLogOutCircle className='text-2xl '></BiLogOutCircle>
            <p>Log Out</p>
          </span>
        </CustomButton>
        </>
        :
        <LinkToWebSite to="/login" linkName={
          <span className='flex flex-col justify-center items-center text-xs text-black font-mono '>
            <BiLogInCircle className='text-2xl '></BiLogInCircle>
            <p>Log In</p>
          </span>
        } styleToAdd="text-lg text-black  mt-10"></LinkToWebSite>
      }
    </div>
  )
}
