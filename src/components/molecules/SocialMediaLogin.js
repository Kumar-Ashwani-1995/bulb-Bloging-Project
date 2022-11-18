import React from 'react'
import CustomButton from '../atoms/CustomButton'
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function SocialMediaLogin(props) {
  return (
    <div className='flex flex-col'>
        <CustomButton styleToAdd="border m-2 p-2 pl-4 text-sm rounded-3xl" onClickMethod={props.toggleLoginForm} param="toLoginForm"><div className='flex items-center'><FcGoogle className='mr-2 ml-3 text-lg'></FcGoogle> Sign in with Google</div></CustomButton>
        <CustomButton styleToAdd="border m-2 p-2 pl-4 text-sm rounded-3xl" onClickMethod={props.toggleLoginForm} param="toLoginForm"><div className='flex items-center'><FaFacebookSquare className='mr-2 ml-3 text-lg text-blue-600'></FaFacebookSquare> Sign in with Facebook</div></CustomButton>
        <CustomButton styleToAdd="border m-2 p-2 pl-4 text-sm rounded-3xl" onClickMethod={props.toggleLoginForm} param="toLoginForm"><div className='flex items-center'><FaApple className='mr-2 ml-3 text-lg'></FaApple> Sign in with Apple</div></CustomButton>
        <CustomButton styleToAdd="border m-2 p-2 pl-4 text-sm rounded-3xl" onClickMethod={props.toggleLoginForm} param="toLoginForm"><div className='flex items-center'><FaTwitter className='mr-2 ml-3 text-lg text-blue-600'></FaTwitter> Sign in with Twitter</div></CustomButton>
        <CustomButton styleToAdd="border m-2 p-2 pl-4 text-sm rounded-3xl" onClickMethod={props.toggleLoginForm} param="toLoginForm"><div className='flex items-center'><FiMail className='mr-2 ml-3 text-lg'></FiMail> Sign in with email</div></CustomButton>
    </div>
  )
}
