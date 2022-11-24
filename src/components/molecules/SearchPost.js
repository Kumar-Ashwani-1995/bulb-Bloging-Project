import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPostBySearchTerm } from '../../redux/action/post.action';
import '../CSS/searchPost.css'


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
    <span className='relative searchPost_searchBox'>
    <input className='pr-9 border-2 rounded-3xl h-11 p-3 shadow-xl placeholder:text-center placeholder:text-black searchPost_searchInput' 
    onChange={(e)=>{setSearchText(e.target.value)}} onKeyDown={(e)=>{
      if (e.key==="Enter"){
        search()
      }
    }} value={searchText} placeholder='Search'></input>
    <AiOutlineSearch className='absolute top-0 right-3 text-2xl cursor-pointer searchPost_searchIcon' onClick={()=>{search()}}></AiOutlineSearch>
    </span>
  )
}
