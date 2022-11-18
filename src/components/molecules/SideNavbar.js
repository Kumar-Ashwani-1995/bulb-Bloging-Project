import React from 'react'
import LinkToWebSite from '../atoms/LinkToWebSite'
import BulbLogo from '../atoms/BulbLogo'
import { TfiHome } from 'react-icons/tfi';
import { AiOutlineBell } from 'react-icons/ai';
import { TfiWrite } from 'react-icons/tfi';
import { CgProfile } from 'react-icons/cg';


export default function SideNavbar() {
  return (
    <div className='flex flex-col justify-center items-center my-20' >
        <LinkToWebSite to="/" linkName={<BulbLogo></BulbLogo>} styleToAdd="text-6xl text-black font-bold mb-6"></LinkToWebSite>
        <p className='text-xs'>Bulb</p>
        <LinkToWebSite to="" linkName={<TfiHome></TfiHome>} styleToAdd="text-4xl text-black font-bold my-6 mt-14"></LinkToWebSite>
        <LinkToWebSite to="updates" linkName={<AiOutlineBell></AiOutlineBell>} styleToAdd="text-4xl text-black font-bold my-6"></LinkToWebSite>
        <LinkToWebSite to="create" linkName={<TfiWrite></TfiWrite>} styleToAdd="text-4xl text-black font-bold my-6"></LinkToWebSite>
        <LinkToWebSite to="profile" linkName={<CgProfile></CgProfile>} styleToAdd="text-4xl text-black font-bold  mt-16"></LinkToWebSite>
    </div>
  )
}
