import React from 'react'
import CustomButton from '../atoms/CustomButton'

export default function CategoryListing(props) {
    function DisplayByCategory(value){
        console.log(value);
    }
  return (
    <div className='flex flex-wrap justify-start'>
        <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt}`} onClickMethod={DisplayByCategory}>Programing</CustomButton>
        <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt}`} onClickMethod={DisplayByCategory}>Data Science</CustomButton>
        <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt}`} onClickMethod={DisplayByCategory}>Technology</CustomButton>
        <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt}`} onClickMethod={DisplayByCategory}>Self Improvement</CustomButton>
        <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt}`} onClickMethod={DisplayByCategory}>Writing</CustomButton>
        <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt}`} onClickMethod={DisplayByCategory}>Relationship</CustomButton>
        <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt}`} onClickMethod={DisplayByCategory}>Machine Learning</CustomButton>
        <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt}`} onClickMethod={DisplayByCategory}>Productivity</CustomButton>
        <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 ${props.stylesAt}`} onClickMethod={DisplayByCategory}>Plotics</CustomButton>

    </div>
  )
}
