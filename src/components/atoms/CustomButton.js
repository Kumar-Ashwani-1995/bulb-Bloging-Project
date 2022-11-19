import React from 'react'

export default function CustomButton(props) {
  return (
    <button className={`active:scale-95 ${props.styleToAdd}`} onClick={()=>{props.onClickMethod(props.param)}}>{props.children}</button>
  )
}
