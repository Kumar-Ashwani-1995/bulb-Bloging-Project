import React from 'react'
import CustomButton from '../atoms/CustomButton'

export default function CategoryListing() {
    function DisplayByCategory(value){
        console.log(value);
    }
  return (
    <div className='flex flex-wrap justify-start'>
        <CustomButton styleToAdd="text-gray-500 border p-1 px-2 text-sm m-1" onClickMethod={DisplayByCategory}>Programing</CustomButton>
        <CustomButton styleToAdd="text-gray-500 border p-1 px-2 text-sm m-1" onClickMethod={DisplayByCategory}>Data Science</CustomButton>
        <CustomButton styleToAdd="text-gray-500 border p-1 px-2 text-sm m-1" onClickMethod={DisplayByCategory}>Technology</CustomButton>
        <CustomButton styleToAdd="text-gray-500 border p-1 px-2 text-sm m-1" onClickMethod={DisplayByCategory}>Self Improvement</CustomButton>
        <CustomButton styleToAdd="text-gray-500 border p-1 px-2 text-sm m-1" onClickMethod={DisplayByCategory}>Writing</CustomButton>
        <CustomButton styleToAdd="text-gray-500 border p-1 px-2 text-sm m-1" onClickMethod={DisplayByCategory}>Relationship</CustomButton>
        <CustomButton styleToAdd="text-gray-500 border p-1 px-2 text-sm m-1" onClickMethod={DisplayByCategory}>Machine Learning</CustomButton>
        <CustomButton styleToAdd="text-gray-500 border p-1 px-2 text-sm m-1" onClickMethod={DisplayByCategory}>Productivity</CustomButton>
        <CustomButton styleToAdd="text-gray-500 border p-1 px-2 text-sm m-1" onClickMethod={DisplayByCategory}>Plotics</CustomButton>

    </div>
  )
}
