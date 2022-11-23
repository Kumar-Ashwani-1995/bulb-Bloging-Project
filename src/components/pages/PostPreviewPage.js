import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById } from '../../redux/action/post.action';
import { BsPersonCircle } from 'react-icons/bs';
import { AiTwotoneHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import CommentSection from '../organism/CommentSection';
import { DotLoader, OrbitSpinner } from '../atoms/Loader';
import '../CSS/reset.css'
import { BASE_URL } from '../../redux/action.type';

export default function PostPreviewPage() {
    let navigate = useNavigate();
    let { isLoggedIn, loggedInData } = useSelector(state => state.user)
    useEffect(() => {
        console.log("Login data: ", loggedInData);
    }, [loggedInData])

    const ref = useRef(null);
    const [height, setHeight] = useState(0);
    let { postId } = useParams();
    let dispatch = useDispatch();
    let { post, loadingPostById } = useSelector(state => state.posts)
    const [loading, setLoading] = useState(false)
    const [postContent, setPostContent] = useState({})
    const [like, setlike] = useState(false)
    const contentById = (postId) => `${BASE_URL}/content?postsId=${postId}`;
    const postById = (postId) => `${BASE_URL}/posts/${postId}`;


    const getPostContentById = async (postId) => {
        setLoading(true)
        try {
            let response = await fetch(contentById(postId));
            let data = await response.json();
            setPostContent(data[0]);
            // console.log(data[0]);
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    const deletePostById = async (postId) => {
        let req = await fetch(postById(postId),
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        let data = await req.json();
        navigate("/dashboard/post/all")
        console.log(data);
    }

    useEffect(() => {
        // console.log(ref);
        setHeight(ref?.current?.offsetHeight);
    }, [post])

    useEffect(() => {
        window.scrollTo(0, 0)
        getPostContentById(postId)
        dispatch(getPostById(postId))
    }, [postId])
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className='w-full'>
            {loadingPostById ?
                <div className='flex justify-center items-center h-screen'>
                    {/* <OrbitSpinner></OrbitSpinner> */}
                    <DotLoader></DotLoader>
                </div>
                :
                <div className='m-10 mr-0'>


                    <div className='flex border-b-2 pb-5 mr-10 justify-between'>
                        <div className='flex'>
                            <BsPersonCircle className='inline text-5xl'></BsPersonCircle>
                            <div className='flex flex-col'>
                                <span className='text-base font-semibold ml-5'>{post.username}</span>
                                <span className='text-gray-500'>
                                    <span className='text-xs font-semibold mx-5'>{new Date(post.date).toLocaleDateString(undefined, options)}</span>
                                    <span className='text-xs font-semibold mx-5'>{post.readingTime} min Read</span>

                                </span>
                            </div>
                        </div>
                        {isLoggedIn &&
                            <div className='flex text-3xl mt-4'>
                                {loggedInData.id === post.userId ?
                                    <>
                                        <AiOutlineEdit className='active:scale-90 mr-6' onClick={() => { navigate(`/dashboard/BlogLab/${postId}`) }}></AiOutlineEdit>
                                        <AiOutlineDelete className='active:scale-90 mr-6' onClick={() => { deletePostById(post.id) }}></AiOutlineDelete>
                                    </>
                                    :
                                    <></>
                                }
                                {loggedInData.id !== post.userId ?
                                    (
                                        like ?
                                        <AiTwotoneHeart className='active:scale-90 mr-5' style={{ color: "#FFC017" }} onClick={() => { setlike(false) }}></AiTwotoneHeart> :
                                        <AiOutlineHeart className='active:scale-90 mr-5' onClick={() => { setlike(true) }}></AiOutlineHeart>
                                        )
                                :<></>
                        }

                                <FaRegComment className='active:scale-90  mr-5' onClick={() => { window.scrollTo(0, (height)) }}></FaRegComment>
                            </div>
                        }
                    </div>

                    <h1 className='mr-10 text-5xl font-extrabold mt-10'>{post.title[0]?.toUpperCase() + post.title?.substring(1)}</h1>
                    <h3 className='mr-10 italic mt-4'>About : {post.description}</h3>
                    {
                        loading ?
                            <DotLoader></DotLoader>
                            :
                            <div className='w-full mt-10 ' ref={ref}>
                                <div className='unreset mr-10'
                                    dangerouslySetInnerHTML={{ __html: postContent.innerContent }}
                                />
                            </div>

                    }
                    <hr className='w-11/12 mb-10'></hr>
                    {isLoggedIn && <div id="comments" >
                        <CommentSection postId={postId} username={post.username} userId={post.id}></CommentSection>
                    </div>}
                </div>
            }
        </div>
    )
}
