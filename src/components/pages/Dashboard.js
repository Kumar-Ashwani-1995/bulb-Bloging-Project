import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from '../molecules/SideNavbar'
import UtilitySection from '../organism/UtilitySection'

export default function Dashboard() {
  return (
    <div className='relative'>
      <div className='flex'>
        <div className='sticky top-0 basis-1/12 border h-full'>
          <SideNavbar></SideNavbar>
        </div>
        <div className='basis-8/12 border' style={{ height: "1000px" }}>
          <Outlet></Outlet>
        </div>
        <div className='sticky bottom-0 basis-3/12 border'>
          <UtilitySection></UtilitySection>
        </div>
      </div>
    </div>
  )
}
