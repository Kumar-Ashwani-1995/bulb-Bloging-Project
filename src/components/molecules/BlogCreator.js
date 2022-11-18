
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BsPencilFill } from 'react-icons/bs';
import FeatureImage from './FeatureImage';

export default function BlogCreator() {


    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [featuredImage, setFeaturedImage] = useState('')

    useEffect(() => {
        console.log(featuredImage)
        console.log(value)
    }, [featuredImage, value])

    const saveData = async () => {

        console.log(value)

    }

    const formatsImg = []
    const formats = [
        'font', 'size',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'script',
        'header', 'blockquote', 'code-block',
        'indent', 'list',
        'direction', 'align',
        'link', 'image', 'video', 'formula',
    ]

    const imgModules = {
        toolbar: [
            ['image'],
        ]
    }

    let modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }




    return (
        <div>
            <div className='flex justify-between items-baseline'>
                <span className='text-3xl font-serif font-semibold'><BsPencilFill className='inline -mt-3'></BsPencilFill> Create Post...</span>
                <input type="text" className='border-b-2 w-2/3 mt-7 outline-none text-3xl pr-5 placeholder:text-4xl text-right float-right' placeholder='Title' value={title} onChange={(e) => {
                    setTitle(e.target.value)
                }} />
            </div>
            <input type="text" className='border-b-2 w-full mt-10 outline-none text-xl pr-5 placeholder:text-2xl text-right' placeholder='Description' value={description} onChange={(e) => {
                setDescription(e.target.value)
            }} />

            <div className='mt-1'>
                <FeatureImage></FeatureImage>
            </div>

            <div className='flex justify-end mr-10'>
                <button className=' mb-1 px-5 py-2 rounded-lg'  style={{background:"#FFC017"}} onClick={() => {
                    saveData()
                }}>Publish</button>
            </div>
            {/* <h1>Post Content</h1> */}
            <ReactQuill theme="snow" value={value} modules={modules} onChange={setValue} formats={formats}
                style={{ height:"250px",minHeight: "300px", margin: "10px 30px 100px 30px" }} />




        </div>
    );
}
