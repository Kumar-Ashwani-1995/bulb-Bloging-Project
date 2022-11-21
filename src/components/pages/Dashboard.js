import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from '../molecules/SideNavbar'
import UtilitySection from '../organism/UtilitySection'

export default function Dashboard() {
  return (
    <div className='relative w-full'>
      <div className='flex'>
        <div className='sticky top-0 w-1/12  h-full' style={{background:"#FFC017"}}>
          <SideNavbar></SideNavbar>
        </div>
        <div className='w-8/12 h-full pb-36' >
          <Outlet></Outlet>
        </div>
        <div className='sticky top-0 w-3/12 border h-full'
        //  style={{background:"#FFC017"}}
         >
          <UtilitySection></UtilitySection>
        </div>
      </div>
    </div>
  )
}
