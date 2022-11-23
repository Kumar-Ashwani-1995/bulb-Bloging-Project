
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BsPencilFill } from 'react-icons/bs';
import FeatureImage from './FeatureImage';
import { BASE_URL } from '../../redux/action.type';
import CustomButton from '../atoms/CustomButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../../redux/action/post.action';
// import { useFormik } from 'formik'
// import * as Yup from 'yup'



export default function BlogCreator() {
    let navigate = useNavigate();
    let { element } = useParams();
    let { post, loadingPostById } = useSelector(state => state.posts)
    let dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [postContent, setPostContent] = useState({})

    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [featuredImage, setFeaturedImage] = useState('');
    const [categoryId, setcategoryId] = useState([])
    const [error, setError] = useState(false)
    const contentById = (postId) => `${BASE_URL}/content?postsId=${postId}`;

    useEffect(() => {
        if (element !== "new") {
            getPostContentById(element)
            dispatch(getPostById(element))
            console.log(post, postContent);
        }
    }, [])
    useEffect(() => {
        if (element === "new") {
            setDescription("")
            setcategoryId([0])
            setValue("");
            setTitle("")
            setFeaturedImage("")
        }
    }, [element])

    useEffect(() => {
        console.log(post, postContent);
        if (element !== "new" && post.title && postContent) {
            setDescription(post.description)
            setcategoryId(post.category)
            setValue(postContent.innerContent);
            setTitle(post.title)
            setFeaturedImage(post.featureImg)
        }
    }, [postContent, post])

    // let formik = useFormik({
    //     initialValues: {
    //         value : "",
    //         title : "",
    //         description : ""
    //     },
    //     onSubmit: async function (value) {
    //         console.log(value);
    //         saveData()
    //         // if (loginInStatus === "success") {
    //         //     formik.resetForm();
    //         // } else {
    //         //     setError("Invalid Email or password")
    //         // }

    //     },
    //     validationSchema: Yup.object({
    //         value: Yup.string().min(20, 'Content should be little more descriptive').required("Content is required"),
    //         title: Yup.string().min(5, 'Title should have min 5 char').required("Content is required"),
    //         description: Yup.string().min(10, 'Description should have min 10 char').required("description is required"),
            
    //     })
    // })

    const getPostContentById = async (postId) => {
        setLoading(true)
        try {
            let response = await fetch(contentById(postId));
            let data = await response.json();
            setPostContent(data[0]);
            console.log(data[0]);
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    async function postDataToDB(post, value) {

        try {
            const uploadPost = `${BASE_URL}/posts`;
            const uploadPostContent = `${BASE_URL}/content`;

            let response = await fetch(uploadPost, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(post)
            });
            let data = await response.json();
            if (data.title == post.title) {
                let resp = await fetch(uploadPostContent, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify({ postsId: data.id, innerContent: value })
                });
                let post_response = await resp.json();
                navigate(`/dashboard/postPreview/${data.id}`)
            }
            else {
                throw "error while posting data"
            }
            return data
        } catch (error) {
            console.log(error);
            return error
        }
    }
    async function patchDataToDB(post, value) {

        try {
            const updatePost = `${BASE_URL}/posts/${element}`;
            const updatePostContent = `${BASE_URL}/content/${postContent.id}`;

            let response = await fetch(updatePost, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(post)
            });
            let data = await response.json();
            if (data.title == post.title) {
                let resp = await fetch(updatePostContent, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify({ postsId: data.id, innerContent: value })
                });
                let post_response = await resp.json();
                navigate(`/dashboard/postPreview/${data.id}`)
            }
            else {
                throw "error while posting data"
            }
            return data
        } catch (error) {
            console.log(error);
            return error
        }
    }
    function readingTime(value) {
        const text = value;
        const wpm = 225;
        const words = text.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);
        return time
    }
    const saveData = async () => {
        let userData = JSON.parse(sessionStorage["loggedIn"])
        let date = new Date();
        let timeToRead = readingTime(value)
        let postData = { category: categoryId, date: date, readingTime: timeToRead, clap: 0, featureImg: featuredImage, title, description, userId: userData.id, username: userData.fullName }
        console.log(postData)
        
            if (element === "new") {
                postDataToDB(postData, value)
            } else {
                patchDataToDB(postData, value)
            }
        
    }

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

    let modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }

    function DisplayByCategory(value) {
        if (!categoryId?.includes(value)) {
            setcategoryId([...categoryId, value])
        } else {
            setcategoryId(
                categoryId?.filter((p) => {
                    if (p === value) {
                        return false
                    }
                    else {
                        return true
                    }
                })
            )
        }
        console.log(categoryId, value);
    }

    return (
        <div>
            <div className='flex justify-between items-baseline'>
                <span className='text-4xl font-serif font-semibold  p-2 flex justify-center items-center w-1/3 rounded-3xl' >
                    <BsPencilFill className='inline mt-3 m-2 mr-3'></BsPencilFill>
                    <p> {element === "new" ? "Create" : "Edit"} </p>
                </span>
                <input type="text" className='border-b-2 w-2/3 mt-7 outline-none text-3xl pr-5 placeholder:text-4xl text-right float-right' placeholder='Title' value={title} onChange={(e) => {
                    setTitle(e.target.value)
                }} />
                {
                    !title && error ? <p>Title is Required</p>:<></>
                }
            </div>
            <input type="text" className='border-b-2 w-full mt-10 outline-none text-xl pr-5 placeholder:text-2xl text-right' placeholder='Description' value={description} onChange={(e) => {
                setDescription(e.target.value)
            }} />
            <div className='flex items-center'>
                <span className='mt-1'>
                    <FeatureImage setImage={setFeaturedImage} featuredImage={featuredImage}></FeatureImage>
                </span>

                <span className='ml-6'>
                    <p className='text-xs ml-2 text-gray-400'> Select category : </p>
                    <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 rounded-2xl ${categoryId && categoryId.includes("1") ? "bg-green-100 " : ""}`} onClickMethod={DisplayByCategory} param="1">Programing</CustomButton>
                    <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 rounded-2xl ${categoryId && categoryId.includes("2") ? "bg-green-100 " : ""}`} onClickMethod={DisplayByCategory} param="2">Science</CustomButton>
                    <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 rounded-2xl ${categoryId && categoryId.includes("3") ? "bg-green-100 " : ""}`} onClickMethod={DisplayByCategory} param="3">Motivational</CustomButton>
                    <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 rounded-2xl ${categoryId && categoryId.includes("4") ? "bg-green-100 " : ""}`} onClickMethod={DisplayByCategory} param="4">Politics</CustomButton>
                    <CustomButton styleToAdd={`text-gray-500 border p-1 px-2 text-sm m-1 rounded-2xl ${categoryId && categoryId.includes("0") ? "bg-green-100 " : ""}`} onClickMethod={DisplayByCategory} param="0">Others</CustomButton>
                </span>
            </div>


            {/* <h1>Post Content</h1> */}
            <ReactQuill theme="snow" value={value} modules={modules} placeholder="Write your blog here." onChange={setValue} formats={formats}
                style={{ height: "250px", minHeight: "300px", margin: "30px 30px 70px 30px" }} />

            <div className='flex justify-end mr-10 mb-20'>
                <button className=' mb-1 px-5 py-2 rounded-lg active:scale-95' style={{ background: "#FFC017" }} onClick={() => {
                    saveData()
                }}>Publish</button>
            </div>
        </div>
    );
}
