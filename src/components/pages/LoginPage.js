import React, { useState } from 'react'
import CustomButton from '../atoms/CustomButton'
import LoginForm from '../molecules/LoginForm'
import SocialMediaLogin from '../molecules/SocialMediaLogin'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import '../CSS/loginPage.css'


export default function LoginPage() {
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  let navigate = useNavigate();
  function toggleLoginForm(value) {
    if (value !== "backToLoginOption") {
      setShowLoginForm(true)
      setIsSignUp(false);
    }
    else {
      setShowLoginForm(false)
    }
  }
  function navigateTo(params) {
    if (params === "-1") {
      navigate(-1)
    } else {
      navigate(`${params}`)
    }
  }
  function setSignUp() {
    setIsSignUp(true);
    setShowLoginForm(true);
  }
  return (
    <div className='flex justify-center'>
      <div className='border relative m-5 rounded-sm py-14 px-60 shadow-2xl loginPage_padding'>
        <CustomButton styleToAdd="absolute top-5 right-10 text-2xl loginPage_close" onClickMethod={navigateTo} param="-1"><AiOutlineCloseCircle></AiOutlineCloseCircle></CustomButton>

        {showLoginForm ? <LoginForm isSignUp={isSignUp} toggleLoginForm={toggleLoginForm}></LoginForm> :
          <>
            <p className='text-3xl font-serif mb-10'>Welcome Back.</p>
            <SocialMediaLogin toggleLoginForm={toggleLoginForm}></SocialMediaLogin>
            <p className='font-semibold text-center mt-10'>No account?
              <CustomButton styleToAdd="text-green-700 ml-1 font-bold" onClickMethod={setSignUp}  >Create one</CustomButton>
            </p>
            <p className='w-64 text-xs mt-7 text-center'>Click “Sign In” to agree to Bulb Terms of Service and acknowledge that Bulb's Privacy Policy applies to you.</p>
          </>
        }
      </div>
    </div>
  )
}
