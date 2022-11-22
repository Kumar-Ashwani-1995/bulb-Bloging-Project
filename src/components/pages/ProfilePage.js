import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsPencilFill } from 'react-icons/bs';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BASE_URL } from '../../redux/action.type'
import CustomButton from '../atoms/CustomButton';


export default function ProfilePage() {
  let { loggedInData } = useSelector(state => state.user)
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
    initialValues: {
        email: "",
        fullName:"",
        password: "",
        cnfpassword: "",
    },
    onSubmit: async function (value) {
        let status = await updateUserDetails({email:value.email,fullName:value.fullName,password:value.password})
        if(status==="success"){
        formik.resetForm();
        }else{
            setErrorMessage("Sorry. Something went wrong!")
        }
    },
    validationSchema: Yup.object({
        email: Yup.string().email("Not a proper email").required("Email is required"),
        fullName:Yup.string().required("Name is required").test('is-full-name',"Please enter First and last name both",(value)=>{
            if(!value){
                return false
            }
            let lenghtOfName = value.split(" ");
            return lenghtOfName.length>=2;
        }),
        cnfpassword:Yup.string().required("Confirm Password is required")
        .oneOf([Yup.ref('password'),null],'Confirm Password didnt not match'),
        password: Yup.string().required("password is required")
        // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'must contain 8 char, one uppercase, one lowercase,one number, one special character'),
        

    })
    
})

function updateUserDetails(val){
  console.log("updated",val);
}
  return (
    <div >

      {editProfile ?
        <div className='flex flex-col justify-center items-center'>
          <form className='m-2 mt-10 w-64' onSubmit={formik.handleSubmit}>
            <div className='flex flex-col'>
                <label className='text-xs  mt-3'>User Email</label>
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
            <div className='flex flex-col mt-4'>
                <label className='text-xs  mt-3'>Full Name</label>
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
            <div className='flex flex-col mt-4'>
                <label className='text-xs mt-3'>Password</label>
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
            <div className='flex flex-col mt-4'>
                <label className='text-xs  mt-3'>Confirm Password</label>
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
            <div className='flex justify-center mt-10'>
                <button className='border w-full rounded-3xl font-bold p-1' type='submit' style={{ background: "#FFC017" }}>Update Data</button>
            </div>
            <div>
                <p className='text-red-600 text-sm text-center mt-5'>{errorMessage}</p>
            </div>
        </form>
        <div className='mb-5 p-3 rounded-full active:scale-95'>
        <AiOutlineCloseCircle className='text-5xl cursor-pointer ' onClick={()=>{setEditProfile(false)}}></AiOutlineCloseCircle>
        </div>

        </div>
        :
        <div className='flex flex-col justify-center items-center  h-96'>
          <div className='mb-5 border-4 border-black p-3 rounded-full active:scale-95'>
            <BsPencilFill className='text-5xl cursor-pointer ' onClick={()=>{setEditProfile(true)}}></BsPencilFill>
          </div>
          <div className='flex justify-between w-4/12'>
            <span>Full Name :</span> 
            <span className='font-extrabold'>{loggedInData.fullName}</span>
            
            </div>
          <div className='flex justify-between w-4/12'>
            <span>Email :</span> 
            <span className='font-extrabold'>{loggedInData.email}</span>
            </div>
          <div className='flex justify-between w-4/12'>
            <span>Password :</span>
            <span className='relative'>
            <span className='absolute -top-4 right-0 text-4xl font-extrabold '>...............</span>
            </span>
            </div>
        </div>
      }
    </div>
  )
}
