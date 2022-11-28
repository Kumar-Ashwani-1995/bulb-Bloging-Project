import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById } from '../../redux/action/post.action';
import { BsPersonCircle } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import CommentSection from '../organism/CommentSection';
import { DotLoader, OrbitSpinner } from '../atoms/Loader';
import '../CSS/reset.css'
import { BASE_URL } from '../../redux/action.type';
import Modal from '../molecules/Modal';
import LinkToWebSite from '../atoms/LinkToWebSite';

export default function PostPreviewPage() {
    let navigate = useNavigate();
    const ref = useRef(null);
    const [height, setHeight] = useState(0);
    let { postId } = useParams();
    let dispatch = useDispatch();
    let { post, loadingPostById } = useSelector(state => state.posts)
    const [loading, setLoading] = useState(false)
    const [postContent, setPostContent] = useState({})
    const [closeDialog, setcloseDialog] = useState(false)
    const [like, setlike] = useState(false)
    const [likeCount, setlikeCount] = useState(0)
    const [clapList, setClapList] = useState([])

    const contentById = (postId) => `${BASE_URL}/content?postsId=${postId}`;
    const postById = (postId) => `${BASE_URL}/posts/${postId}`;
    const updateClapById = (postId) => `${BASE_URL}/content/${postId}`;

    let { isLoggedIn, loggedInData } = useSelector(state => state.user)

    async function updateClap(value) {
        console.log(clapList);
        try {
            let req = await fetch(updateClapById(postContent.id),
                {
                    method: "PATCH", headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        clap: value,
                    })
                })
            let data = await req.json();
            const updatePost = `${BASE_URL}/posts/${postId}`;
            let response = await fetch(updatePost, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    clap: value.length
                })
            });
            let data1 = await response.json();
            return data1
        } catch (error) {
            console.log(error);
            return error
        }
    }


    const getPostContentById = async (postId) => {
        setLoading(true)
        try {
            let response = await fetch(contentById(postId));
            let data = await response.json();
            setPostContent(data[0]);
            setlike(data[0]?.clap?.includes(loggedInData?.id))
            setlikeCount(data[0]?.clap?.length)
            setClapList(data[0]?.clap)
            // console.log("db", data[0]?.clap);
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    async function likePost() {
        console.log(clapList);
        setClapList([...clapList, loggedInData?.id])
        updateClap([...clapList, loggedInData?.id])
    }
    async function unlikePost() {
        let val = clapList.filter(function (ele) {
            return ele != loggedInData?.id;
        })
        setClapList(val)

        updateClap(val)

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

    // useEffect(() => {
    //     console.log(ref?.current?.offsetHeight);
    //     // setHeight(ref?.current?.scrollIntoView() );
    // })
    const executeScroll = () =>ref?.current?.scrollIntoView()
    useEffect(() => {
        window.scrollTo(0, 0)
        getPostContentById(postId)
        dispatch(getPostById(postId))
    }, [postId])

    // function deletePostModal() {
    //     // deletePostById(post.id) 
    // }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className='w-full'>
            {closeDialog && (
                <Modal ModalText="Delete" setcloseDialog={setcloseDialog} confirmMethod={()=>{deletePostById(post.id)}}></Modal>
            )}
            {loadingPostById ?
                <div className='flex justify-center items-center h-screen'>
                    {/* <OrbitSpinner></OrbitSpinner> */}
                    <DotLoader></DotLoader>
                </div>
                :
                <div className='m-10 mr-0'>


                    <div className='flex flex-wrap border-b-2 pb-5 mr-10 justify-between'>
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
                            <div className='flex text-3xl mt-4 items-center'>
                                {loggedInData?.id === post.userId ?
                                    <>
                                        <div><p className='text-xs mt-0 mr-6'>{postContent.clap?postContent.clap?.length:0} Likes <AiOutlineHeart className='text-xs inline'></AiOutlineHeart></p></div>
                                        <AiOutlineEdit className='active:scale-90 mr-6 cursor-pointer' onClick={() => { navigate(`/dashboard/BlogLab/${postId}`) }}></AiOutlineEdit>
                                        <AiOutlineDelete className='active:scale-90 mr-6 cursor-pointer' onClick={() => {setcloseDialog(true)}}></AiOutlineDelete>
                                    </>
                                    :
                                    <div className='flex items-center'>
                                        <p className='text-xs mt-0 mr-4'>{likeCount} Likes </p>
                                        {
                                            like ?
                                                <AiFillHeart className='active:scale-90 cursor-pointer mr-5' onClick={() => { setlike(false); setlikeCount(prev => prev - 1); unlikePost() }}></AiFillHeart>
                                                :
                                                <AiOutlineHeart className='active:scale-90 cursor-pointer mr-5' onClick={() => { setlike(true); setlikeCount(prev => prev + 1); likePost() }}></AiOutlineHeart>
                                        }
                                    </div>
                                }


                                <FaRegComment className='active:scale-90 cursor-pointer mr-5' onClick={() => { executeScroll() }}></FaRegComment>
                            </div>
                        }
                    </div>

                    <h1 className='mr-10 text-5xl font-extrabold mt-10'>{post.title[0]?.toUpperCase() + post.title?.substring(1)}</h1>
                    <h2 className='mr-10 italic mt-4'>About : {post.description}</h2>
                    {
                        loading ?
                            <DotLoader></DotLoader>
                            :
                            <div className='w-full mt-10'>
                                <div className='unreset mr-10'
                                    dangerouslySetInnerHTML={{ __html: postContent.innerContent }}
                                />
                            </div>

                    }
                    <hr className='w-11/12 mb-10'></hr>
                    {!isLoggedIn && <div className='text-gray-500 text-xl text-center'>
                        <LinkToWebSite to="/login" linkName="Log in" styleToAdd="text-blue-500 font-bold mr-2">Log in </LinkToWebSite>
                        {/* <LinkToWebSite to="" linkName="Bulb" styleToAdd="text-5xl text-black font-bold font-serif"></LinkToWebSite> */}
                         to Comment, Like and Write Amazing post's
                    </div>}
                    <div id="comments" ref={ref}>
                        <CommentSection postId={postId} username={post.username} userId={post.id}></CommentSection>
                    </div>
                    
                </div>
            }
        </div>
    )
}
