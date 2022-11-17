import React from 'react'
import NavigationLeftSection from '../molecules/NavigationLeftSection'
import NavigationRightSection from '../molecules/NavigationRightSection'


export default function Header() {
  return (
    <div >
      <nav className='fixed px-5 w-full h-20 flex justify-between items-center border border-b-black z-50' style={{background:"#FFC017"}}>
          <NavigationLeftSection></NavigationLeftSection>
          <NavigationRightSection></NavigationRightSection>
      </nav>
    </div>
  )
}
