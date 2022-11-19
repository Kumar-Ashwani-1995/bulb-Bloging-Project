import React from 'react'
import LinkToWebSite from '../atoms/LinkToWebSite'

export default function NavigationRightSection() {
  return (
    <div className='flex items-center'>
      <LinkToWebSite to="docs" linkName="Docs" styleToAdd="text-lg text-black mr-6"></LinkToWebSite>
      <LinkToWebSite to="aboutUs" linkName="About Us" styleToAdd="text-lg text-black  mr-6"></LinkToWebSite>
      <LinkToWebSite to="dashboard/create" linkName="Write" styleToAdd="text-lg text-black  mr-6"></LinkToWebSite>
      <LinkToWebSite to="login" linkName="Sign In" styleToAdd="text-lg text-black  mr-6"></LinkToWebSite>
      <LinkToWebSite to="dashboard/post/all" linkName="Explore more" styleToAdd="text-sm text-white px-4 py-2 rounded-3xl bg-black mr-6"></LinkToWebSite>
    </div>
  )
}
