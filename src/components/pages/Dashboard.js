import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from '../molecules/SideNavbar'
import UtilitySection from '../organism/UtilitySection'
import '../CSS/dashboard.css'
import FeedsNavbar from '../organism/FeedsNavbar'

export default function Dashboard() {
  return (
    <div className='relative w-full dashboard_page'>
      <div className='flex justify-between items-stretch '>
        <div className='sticky top-0 w-1/12 min-w-fit h-full dashboard_sideNav' style={{ background: "#FFC017" }}>
          <SideNavbar></SideNavbar>
        </div>
        <div className='hidden fixed top-0 dashboard_Nav'>
          <FeedsNavbar></FeedsNavbar>
        </div>
        <div className='w-8/12 h-full pb-36 dashboard_content' >
          <Outlet></Outlet>
        </div>
        <div className='sticky top-0 right-0 w-3/12  border-l h-full dashboard_utility'
        >
          <UtilitySection></UtilitySection>
        </div>
      </div>
    </div>
  )
}
