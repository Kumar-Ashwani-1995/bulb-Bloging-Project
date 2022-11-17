import React from 'react'
import BulbLogo from '../atoms/BulbLogo'
import LinkToWebSite from '../atoms/LinkToWebSite'

export default function NavigationLeftSection() {
  return (
    <div className='flex items-center ml-4'>
      <LinkToWebSite to="" linkName={<BulbLogo></BulbLogo>} styleToAdd="text-4xl text-black font-bold"></LinkToWebSite>
      <LinkToWebSite to="" linkName="Bulb" styleToAdd="text-5xl text-black font-bold font-serif"></LinkToWebSite>
    </div>
  )
}
