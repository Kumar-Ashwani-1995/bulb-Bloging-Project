import React from 'react'

export default function CustomButton(props) {
  return (
    <button aria-label={props.children} data-testid={props.children} className={`active:scale-95 ${props.styleToAdd}`} style={props.style} onClick={()=>{props.onClickMethod(props.param)}}>{props.children}</button>
  )
}
