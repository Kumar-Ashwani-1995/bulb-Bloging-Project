import React from 'react'
import { Link } from 'react-router-dom'


export default function LinkToWebSite(props) {
  return (
    <Link to={props.to} className={`${props.styleToAdd} font-mono`}>{props.linkName}</Link>
  )
}
