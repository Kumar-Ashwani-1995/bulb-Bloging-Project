import React from 'react'
import LinkToWebSite from '../atoms/LinkToWebSite'
import { OrbitSpinner } from '../atoms/Loader'

export default function PageNotFoundPage() {
  return (
    <div className='relative'>
      
      <div className='flex flex-col -ml-20 justify-center items-center h-screen'>
      <div className=''>
      Sorry Page Not Found! Take me to
      <LinkToWebSite to="/" linkName={" Home "} styleToAdd=" text-xl text-blue-500 font-bold mt-3 mb-6"></LinkToWebSite>
      page
      </div>
        <OrbitSpinner></OrbitSpinner>
      </div>
    </div>
  )
}
