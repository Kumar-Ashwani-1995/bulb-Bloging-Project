import React from 'react'
import Header from '../organism/Header'
import Footer from '../organism/Footer'
import { Outlet } from 'react-router-dom'

export default function PublicPage() {
  return (
    <>
      <Header></Header>
      <div className='pt-20 h-screen'>
        <Outlet></Outlet>
      </div>
      <div className="pt-52">
        {/* <Footer></Footer> */}
      </div>
    </>
  )
}
