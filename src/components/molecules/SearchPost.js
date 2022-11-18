import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';


export default function SearchPost() {
    const [searchText, setSearchText] = useState("")
    function search(params) {
        console.log(searchText);
        setTimeout(() => {
            setSearchText("")
        }, 1000);
    }
  return (
    <span className='relative'>
    <input className='w-10/12 pr-9 border-2 rounded-3xl h-11 p-3 placeholder:text-center'
    onChange={(e)=>{setSearchText(e.target.valuel)}} value={searchText} placeholder='Search'></input>
    <AiOutlineSearch className='absolute top-0 right-3 text-2xl cursor-pointer' onClick={()=>{search()}}></AiOutlineSearch>
    </span>
  )
}
