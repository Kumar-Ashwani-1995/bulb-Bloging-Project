import React from 'react'
import { BsPersonCircle } from 'react-icons/bs';

export default function PersonImage(props) {
  return (
    <BsPersonCircle className='text-2xl inline' data-testid="personImage"></BsPersonCircle>
  )
}
