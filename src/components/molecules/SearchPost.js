import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPostBySearchTerm } from '../../redux/action/post.action';


export default function SearchPost() {
    const [searchText, setSearchText] = useState("")
    let navigate = useNavigate();
    let dispatch = useDispatch();
    function search() {
      console.log(searchText);
      if (searchText) {
        navigate(`/dashboard/post/search?term=${searchText}`)
        dispatch(getPostBySearchTerm(searchText));
        setTimeout(() => {
          setSearchText("")
        }, 1000);
      }else{
        console.log("getting all now");
        navigate(`/dashboard/post/all`)
      }
    }
  return (
    <span className='relative'>
    <input className='w-10/12 pr-9 border-2 rounded-3xl h-11 p-3 placeholder:text-center'
    onChange={(e)=>{setSearchText(e.target.value)}} onKeyUp={(e)=>{search()}} value={searchText} placeholder='Search'></input>
    <AiOutlineSearch className='absolute top-0 right-3 text-2xl cursor-pointer' onClick={()=>{search()}}></AiOutlineSearch>
    </span>
  )
}
