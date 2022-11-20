import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../redux/action/post.action';

export default function PostPreviewPage() {
    let { postId } = useParams();
    let dispatch = useDispatch();
    let { post, loadingPostById } = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(getPostById(postId))


    }, [postId])

    return (
        <div>
            {loadingPostById ?
                <>loading...</>
                :
                <>
                <h1>{post.title}</h1>
                <h3>{post.description}</h3>
                <h3>{post.username}</h3>
                
                <div className='unreset'>
                    <iframe srcDoc={post.content} className='h-full w-full border-0 m-0'></iframe>
                </div>
                </>
            }
        </div>
    )
}
