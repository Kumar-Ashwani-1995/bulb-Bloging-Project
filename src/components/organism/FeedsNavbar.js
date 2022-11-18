import React from 'react'
import CustomButton from '../atoms/CustomButton'

export default function FeedsNavbar() {
  return (
    <div className='m-10'>
        <CustomButton styleToAdd="" param="toLoginForm">All</CustomButton>
        <CustomButton styleToAdd="" param="toLoginForm">My Posts</CustomButton>
        <CustomButton styleToAdd="" param="toLoginForm">Trending</CustomButton>
        <CustomButton styleToAdd="" param="toLoginForm">Category</CustomButton>
    </div>
  )
}
