import React, { useState } from 'react'
import CustomButton from '../atoms/CustomButton'

import { useNavigate } from 'react-router-dom';
import SignUpForm from '../atoms/SignUpForm';
import SignInForm from '../atoms/SignInForm';

export default function LoginForm(props) {
  let navigate = useNavigate();
 
  function navigateToDashboard(e) {


    navigate('/dashboard/post/all')
  }
  return (
    <div >
      <p className='text-5xl font-bold font-sans text-center'>{props.isSignUp ? "Sign up" : "Login"}</p>
      {props.isSignUp ?
        <SignUpForm navigateToDashboard={navigateToDashboard} backToLogin={props.toggleLoginForm}></SignUpForm>
        :
        <SignInForm navigateToDashboard={navigateToDashboard}></SignInForm>
      }
      <CustomButton styleToAdd="text-xs float-right mt-10 text-blue-400" onClickMethod={props.toggleLoginForm} param="backToLoginOption">{"<<"} back to Login options</CustomButton>

    </div>
  )
}
