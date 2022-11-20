import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CustomButton from '../atoms/CustomButton'

export default function CategoryListing(props) {
  let navigate = useNavigate();


  function DisplayByCategory(value) {
    if (props.categoryId) {
      if (!props?.categoryId?.includes(value)) {
        props.setId([...props.categoryId, value])
        console.log(props?.categoryId, value);
      } else {
          props.setId(
            props?.categoryId?.filter((p) => {
            if (p === value) {
              return false
            }
            else {
              return true
            }
          })
        )
      }
    }
    else {
      navigate("/dashboard/post/category?cat=" + value)
    }

  }
  return (
    <div className='flex flex-wrap justify-start'>
      <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt} ${props?.categoryId && props?.categoryId.includes("1") ? "bg-green-100 " : ""} `} onClickMethod={DisplayByCategory} param="1">Programing</CustomButton>
      <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt} ${props?.categoryId && props?.categoryId.includes("2") ? "bg-green-100 " : ""} `} onClickMethod={DisplayByCategory} param="2">Science</CustomButton>
      <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt} ${props?.categoryId && props?.categoryId.includes("3") ? "bg-green-100 " : ""} `} onClickMethod={DisplayByCategory} param="3">Motivational</CustomButton>
      <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt} ${props?.categoryId && props?.categoryId.includes("4") ? "bg-green-100 " : ""} `} onClickMethod={DisplayByCategory} param="4">Politics</CustomButton>
      <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt} ${props?.categoryId && props?.categoryId.includes("0") ? "bg-green-100 " : ""} `} onClickMethod={DisplayByCategory} param="0">Others</CustomButton>


      {/* <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt}`} onClickMethod={DisplayByCategory}>Relationship</CustomButton>
        <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt}`} onClickMethod={DisplayByCategory}>Machine Learning</CustomButton>
        <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt}`} onClickMethod={DisplayByCategory}>Productivity</CustomButton>
        <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt}`} onClickMethod={DisplayByCategory}>Plotics</CustomButton> */}

    </div>
  )
}
