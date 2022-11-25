import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function Modal(props) {
  return (
    <div className="fixed right-0 left-0 bottom-0 top-0 bg-slate-500 bg-opacity-70 w-screen h-screen overflow-y-auto" >
          <div className="fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-72	bg-white shadow-2xl rounded-md">
              <div className="flex flex-col">
                <div className="w-full flex justify-between px-2 h-10 items-center rounded-t-md" style={{background:"#FFC017"}}>
                  <p className='font-bold ml-2'>{props.ModalText}</p>
                  <button className='font-bold text-xl' onClick={()=>{props.setcloseDialog(false)}}><AiOutlineCloseCircle></AiOutlineCloseCircle></button>
                </div>
                <div className="w-full h-20 flex justify-center items-center">
                <button className='border rounded-2xl px-2 py-1 mr-2 font-semibold' style={{background:"#FFC017"}}
                onClick={props.confirmMethod}
                >Confirm</button>
                <button className='border rounded-2xl px-2 py-1 ml-2 bg-black text-white'
                onClick={()=>{props.setcloseDialog(false)}}
                >cancel</button>
                </div>
              </div>
          </div>

        </div>
  )
}
