import React from 'react'
import CustomButton from '../atoms/CustomButton'
import { RiLockPasswordLine } from 'react-icons/ri';
import { BsPersonCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function LoginForm(props) {
  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate('/dashboard')
  }
  return (
    <div >
      <p className='text-5xl font-bold font-sans text-center'>{props.isSignUp ? "Sign in" : "Login"}</p>
      <form className='m-2 mt-10 w-64' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label className='text-xs mb-1 mt-3'>User Email</label>
          <span className='relative items-end'>
            <BsPersonCircle className='absolute text-xl top-2 right-0 font-light text-gray-400'></BsPersonCircle>
          </span>
          <input className='border-b-2 outline-none placeholder:text-xs py-1 pl-2 pr-7' placeholder={" Type your User Email"}></input>
        </div>
        <div className='flex flex-col mt-1'>
          <label className='text-xs mb-1 mt-3'>Password</label>
          <span className='relative items-end'>
            <RiLockPasswordLine className='absolute text-xl top-2  right-0 font-light text-gray-400'></RiLockPasswordLine>
          </span>
          <input className='border-b-2 outline-none placeholder:text-xs py-1 pl-2 pr-7' type="password" placeholder={" Type your password"}></input>
        </div>
        <div className='flex justify-center mt-10'>
          <button className='border w-full rounded-3xl font-bold p-1' type='submit' style={{ background: "#FFC017" }}>{props.isSignUp ? "Sign up" : "Log in"}</button>
        </div>
      </form>
      <CustomButton styleToAdd="text-xs float-right mt-10 text-blue-400" onClickMethod={props.toggleLoginForm} param="backToLoginOption">{"<<"} back to Login options</CustomButton>

    </div>
  )
}
