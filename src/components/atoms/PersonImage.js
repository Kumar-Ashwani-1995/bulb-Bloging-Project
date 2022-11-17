import React from 'react'

export default function PersonImage(props) {
  return (
    <img className={props.styleToAdd} style={{height:props.height,width:props.width}} src={props.imageURL} alt={props.altName}></img>
  )
}
