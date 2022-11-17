import React from 'react'

export default function CustomButton(props) {
  return (
    <button className={`${props.styleToAdd}`} onClick={()=>{props.onClickMethod(props.children)}}>{props.children}</button>
  )
}
