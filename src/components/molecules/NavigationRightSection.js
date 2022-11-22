import React, { useState, useEffect } from 'react'
import LinkToWebSite from '../atoms/LinkToWebSite'
import CustomButton from '../atoms/CustomButton'
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import { authLogOutUser } from '../../redux/action/post.action';



export default function NavigationRightSection() {
  const [closeDialog, setcloseDialog] = useState(false)
  let { isLoggedIn } = useSelector(state => state.user)
  useEffect(() => {
    console.log("Login Status: " + isLoggedIn);
  }, [isLoggedIn])
  let dispatch = useDispatch();
  function logout(params) {
    dispatch(authLogOutUser());
    setcloseDialog(false);
    sessionStorage["loggedIn"]=null
  }
  return (
    <div className='flex items-center'>
      {closeDialog && (
        <Modal ModalText="LogOut" setcloseDialog={setcloseDialog} confirmMethod={logout}></Modal>
      )}
      <LinkToWebSite to="docs" linkName="Docs" styleToAdd="text-lg text-black mr-6"></LinkToWebSite>
      <LinkToWebSite to="aboutUs" linkName="About Us" styleToAdd="text-lg text-black  mr-6"></LinkToWebSite>
      <LinkToWebSite to="dashboard/BlogLab/new" linkName="Write" styleToAdd="text-lg text-black  mr-6"></LinkToWebSite>
      {isLoggedIn ?
        <CustomButton styleToAdd={`text-lg text-black font-mono mr-6`} onClickMethod={setcloseDialog} param={true}>Log Out</CustomButton>
        :
        <LinkToWebSite to="login" linkName="Sign In" styleToAdd="text-lg text-black  mr-6"></LinkToWebSite>
      }
      <LinkToWebSite to="dashboard/post/all" linkName="Explore more" styleToAdd="text-sm text-white px-4 py-2 rounded-3xl bg-black mr-6"></LinkToWebSite>
    </div>
  )
}
