import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillEdit } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BASE_URL } from '../../redux/action.type'
import { BiLogOutCircle } from 'react-icons/bi';

import CustomButton from '../atoms/CustomButton';
import { authLogOutUser, updateLoginData } from '../../redux/action/post.action';
import Modal from '../molecules/Modal';
import '../CSS/profilePage.css'



export default function ProfilePage() {
  let { isLoggedIn, loggedInData } = useSelector(state => state.user)
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [cnfPasswordShown, setCnfPasswordShown] = useState(false);
  const [editProfile, setEditProfile] = useState(false)

  const togglePassword = (type) => {
    if (type === "password") {
      setPasswordShown(!passwordShown);
    }
    else {
      setCnfPasswordShown(!cnfPasswordShown);
    }
  };
  let formik = useFormik({
    initialValues: { email: loggedInData?.email, fullName: loggedInData?.fullName, password: "", cnfpassword: "" },
    enableReinitialize: false,
    onSubmit: async function (value) {
      let status = await updateUserDetails({ email: value.email, fullName: value.fullName, password: value.password })
      console.log(status);
      if (status === "success") {
        formik.resetForm();
        setErrorMessage("");
      } else {
        setErrorMessage("Sorry. Something went wrong!")
      }
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Not a proper email").required("Email is required"),
      fullName: Yup.string().required("Name is required").test('is-full-name', "Please enter First and last name both", (value) => {
        if (!value) {
          return false
        }
        let lenghtOfName = value.split(" ");
        return lenghtOfName.length >= 2;
      }),
      cnfpassword: Yup.string().required("Confirm Password is required")
        .oneOf([Yup.ref('password'), null], 'Confirm Password didnt not match'),
      password: Yup.string().required("password is required")
      // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'must contain 8 char, one uppercase, one lowercase,one number, one special character'),


    })

  })

  async function updateUserDetails(val) {
    console.log("updated", val);
    setEditProfile(false)
    
    return await dispatch(updateLoginData(val,loggedInData?.id))
    
  }

  const [closeDialog, setcloseDialog] = useState(false)

  let dispatch = useDispatch();
  function logout(params) {
    dispatch(authLogOutUser());
    setcloseDialog(false);
    sessionStorage["loggedIn"] = null
  }

  return (
    <div className=' h-screen'>
      {closeDialog && (
        <Modal ModalText="Log Out" setcloseDialog={setcloseDialog} confirmMethod={logout}></Modal>
      )}
      <div className='flex justify-between items-end border h-36 profilePage_nameBox' >

        <span className='font-extrabold ml-10 mb-10 text-5xl profilePage_name'>{
          loggedInData?.fullName.split(" ").length > 1 ?
            loggedInData?.fullName.split(" ")[0] :
            loggedInData?.fullName
        }</span>
        <span className='profilePage_image'><BsPersonCircle className='inline  mr-24 mb-5 text-8xl ' ></BsPersonCircle></span>
      </div>
      <div className='flex  pb-10 profilePage_deatils'>

        <div className='flex flex-col items-start pt-10 pl-10 w-1/2 mt-10 h-2/6 profilePage_subDeatils'>
          <div className='italic font-serif font-extrabold'>User ID :       <span className='not-italic font-medium text-xl'>BulbBloging#{loggedInData?.id}</span></div>
          <div className='italic font-serif font-extrabold'>Full Name : <span className='not-italic font-medium text-xl'>{loggedInData?.fullName}</span></div>
          <div className='italic font-serif font-extrabold'>Email Address : <span className='not-italic font-medium text-xl'>{loggedInData?.email}</span></div>
        </div>

        <div className='flex flex-col justify-center items-center border-l-2 mt-10 w-1/2 profilePage_actions'>
          <CustomButton styleToAdd={`text-xs text-black font-mono mt-8`} onClickMethod={setcloseDialog} param={true}>
            <span className='flex flex-col justify-center items-center'>
              <BiLogOutCircle className='text-3xl '></BiLogOutCircle>
              <p>Log Out</p>
            </span>
          </CustomButton>
          <CustomButton styleToAdd={`text-xs text-black font-mono mt-8`} onClickMethod={setEditProfile} param={true}>
            <span className='flex flex-col justify-center items-center'>
              <AiFillEdit className='text-3xl' ></AiFillEdit>
              <p>Edit Details</p>
            </span>
          </CustomButton>
        </div>
      </div>

      {editProfile ?
        <form className='flex m-10 ml-16 h-32 pt-10 border-t-2 profilePage_form' onSubmit={formik.handleSubmit}>
          <div className='flex flex-col '>
            <div className='flex  profilePage_splitForm'>

              <div className='flex flex-col'>
                <label className='text-xs  mt-3'>New User Email</label>
                <span className='relative items-end'>
                  <FiMail className='absolute text-xl top-2 right-0 font-light text-gray-400'></FiMail>
                </span>
                <input className={`border-b-2 bg-white outline-none placeholder:text-xs py-1  pr-7 ${formik.touched.email && formik.errors.email ? "border-red-300" : 'border-gray-300'}`}
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder={" Type your User Email"}></input>
                {formik.touched.email && formik.errors.email && (<span className='text-red-500 text-xs'>{formik.errors.email}</span>)}

              </div>

              <div className='flex flex-col ml-10 profilePage_splitFormNoMargin'>
                <label className='text-xs  mt-3'>New Full Name</label>
                <span className='relative items-end'>
                  <BsPersonCircle className='absolute text-xl top-2 right-0 font-light text-gray-400'></BsPersonCircle>
                </span>
                <input className={`border-b-2 bg-white outline-none placeholder:text-xs py-1  pr-7 ${formik.touched.fullName && formik.errors.fullName ? "border-red-300" : 'border-gray-300'}`}
                  name="fullName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                  placeholder={" Type your User Full Name"}></input>
                {formik.touched.fullName && formik.errors.fullName && (<span className='text-red-500 text-xs'>{formik.errors.fullName}</span>)}

              </div>
            </div>
            <div className='flex profilePage_splitForm'>
              <div className='flex flex-col mt-4'>
                <label className='text-xs mt-3'>New Password</label>
                <span className='relative items-end' onClick={() => { togglePassword("password") }}>
                  {passwordShown ?
                    <AiFillEyeInvisible className='absolute text-xl top-2  right-0 font-light text-gray-400'></AiFillEyeInvisible> :
                    <AiFillEye className='absolute text-xl top-2  right-0 font-light text-gray-400'></AiFillEye>}

                </span>
                <input className={`border-b-2 outline-none placeholder:text-xs py-1 pr-7  ${formik.touched.password && formik.errors.password ? "border-red-300" : 'border-gray-300'}`}
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  type={passwordShown ? "text" : "password"} placeholder={" Type your password"}></input>
                {formik.touched.password && formik.errors.password && (<span className='text-red-500 text-xs'>{formik.errors.password}</span>)}

              </div>
              <div className='flex flex-col mt-4 ml-10 profilePage_splitFormNoMargin'>
                <label className='text-xs  mt-3'>Confirm New Password</label>
                <span className='relative items-end' onClick={() => { togglePassword("cnfPassword") }}>
                  {cnfPasswordShown ?
                    <AiFillEyeInvisible className='absolute text-xl top-2  right-0 font-light text-gray-400'></AiFillEyeInvisible> :
                    <AiFillEye className='absolute text-xl top-2  right-0 font-light text-gray-400'></AiFillEye>}

                </span>
                <input className={`border-b-2 outline-none placeholder:text-xs py-1 pr-7  ${formik.touched.cnfpassword && formik.errors.cnfpassword ? "border-red-300" : 'border-gray-300'}`}
                  name="cnfpassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cnfpassword}
                  type={cnfPasswordShown ? "text" : "password"} placeholder={" Retype your password"}></input>
                {formik.touched.cnfpassword && formik.errors.cnfpassword && (<span className='text-red-500 text-xs'>{formik.errors.cnfpassword}</span>)}

              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center w-full space-y-8 pt-10'>
            <button className='border rounded-3xl w-30 mt-8 font-bold p-1 px-2 active:scale-95 ' type='submit' style={{ background: "#FFC017" }}>Update Data</button>
            <button className='border rounded-3xl w-30 font-bold p-1 px-6 bg-black text-white active:scale-95' type='button' onClick={() => { setEditProfile(false) }} >Cancel</button>
          </div>
          <div>
            <p className='text-red-600 text-sm text-center mt-5'>{errorMessage}</p>
          </div>
        </form>
        : <></>}
    </div>
  )
}
