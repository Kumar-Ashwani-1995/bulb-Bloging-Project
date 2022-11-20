import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { authLogOutUser } from '../../redux/action/post.action';

export default function LogOut(props) {
  let dispatch = useDispatch();
  return (
    <div className="relative">
          <div className="fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-72	bg-white border-2 shadow-2xl rounded-xl border-white">
              <div className="flex flex-col">
                <div className="w-full flex justify-between px-2 h-10 items-center rounded-t-xl" style={{background:"#FFC017"}}>
                  <p className='font-bold text-xl ml-2'>Log Out</p>
                  <button className='font-bold text-xl' onClick={()=>{props.setcloseDialog(false)}}><AiOutlineCloseCircle></AiOutlineCloseCircle></button>
                </div>
                <div className="w-full h-20 flex justify-center items-center">
                <button className='border rounded-2xl px-2 py-1 mr-2' style={{background:"#FFC017"}}
                onClick={()=>{dispatch(authLogOutUser());props.setcloseDialog(false);sessionStorage["loggedIn"]=null}}
                >Confirm</button>
                <button className='border rounded-2xl px-2 py-1 ml-2 bg-black text-white'
                onClick={()=>{props.setcloseDialog(false)}}
                >cancle</button>
                </div>
              </div>
          </div>

        </div>
  )
}
