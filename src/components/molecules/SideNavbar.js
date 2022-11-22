import React, { useEffect, useState } from 'react'
import LinkToWebSite from '../atoms/LinkToWebSite'
import BulbLogo from '../atoms/BulbLogo'
import { TfiHome } from 'react-icons/tfi';
import { AiOutlineBell } from 'react-icons/ai';
import { TfiWrite } from 'react-icons/tfi';
import { BiLogOutCircle } from 'react-icons/bi';
import { BiLogInCircle } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../atoms/CustomButton';
import Modal from './Modal';
import { authLogOutUser } from '../../redux/action/post.action';


export default function SideNavbar() {
  const [closeDialog, setcloseDialog] = useState(false)
  let { isLoggedIn,loggedInData } = useSelector(state => state.user)
  let dispatch = useDispatch();
  function logout(params) {
    dispatch(authLogOutUser());
    setcloseDialog(false);
    sessionStorage["loggedIn"]=null
  }
  useEffect(() => {
    // console.log("Login Status: " + isLoggedIn);
  }, [isLoggedIn])
  return (
    <div className='flex flex-col justify-center items-center my-10' style={{background:"#FFC017"}}>
      {closeDialog && (
        <Modal ModalText="Log Out" setcloseDialog={setcloseDialog} confirmMethod={logout}></Modal>
      )}
      <LinkToWebSite to="/" linkName={<BulbLogo></BulbLogo>} styleToAdd="text-6xl text-black font-bold mt-3 mb-6"></LinkToWebSite>
      <p className='text-xs'>Bulb</p>
      <LinkToWebSite to="post/all" linkName={<TfiHome></TfiHome>} styleToAdd="text-4xl text-black font-bold my-6 mt-10"></LinkToWebSite>
      <LinkToWebSite to="profile" linkName={<AiOutlineBell></AiOutlineBell>} styleToAdd="text-4xl text-black font-bold my-6"></LinkToWebSite>
      <LinkToWebSite to="BlogLab/new" linkName={<TfiWrite></TfiWrite>} styleToAdd="text-4xl text-black font-bold my-6"></LinkToWebSite>
      {isLoggedIn ?
      <>
      <LinkToWebSite to="profile" linkName={<CgProfile></CgProfile>} styleToAdd="text-4xl text-black font-bold  mt-6"></LinkToWebSite>
      <p className='text-xs text-center'>{loggedInData.fullName?loggedInData.fullName:<></>}</p>
        <CustomButton styleToAdd={`text-xs text-black font-mono mt-8`} onClickMethod={setcloseDialog} param={true}>
          <span className='flex flex-col justify-center items-center'>
            <BiLogOutCircle className='text-2xl '></BiLogOutCircle>
            <p>Log Out</p>
          </span>
        </CustomButton>
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
