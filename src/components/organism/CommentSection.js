import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../redux/action.type'
import CustomButton from '../atoms/CustomButton'
import CommentCard from '../molecules/CommentCard';
import { DotLoader } from '../atoms/Loader';
import { useSelector } from 'react-redux';



export default function CommentSection(props) {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")
  const [loading, setLoading] = useState(false)
  let userData = sessionStorage["loggedIn"] ? JSON.parse(sessionStorage["loggedIn"]).email ?JSON.parse(sessionStorage["loggedIn"]):{}:{}
  let { isLoggedIn} = useSelector(state => state.user)


  const commentByPost = (postId) => `${BASE_URL}/comments?postId=${postId}&_sort=date&_order=desc`;
  useEffect(() => {
    getComments(props.postId)
  }, [props.postId])
  async function getComments(postId) {
    setLoading(true)
    try {
      let response = await fetch(commentByPost(postId));
      let data = await response.json();
      // console.log(data);
      setComments(data)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }
  async function commentOnPost(obj) {
    try {
      const comment = `${BASE_URL}/comments`;
      let response = await fetch(comment, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(obj)
      });
      let data = await response.json();
      getComments(props.postId)
      setComment("")
    } catch (error) {
      console.log(error);
      return error
    }
  }
  function postComment(params) {
    console.log(comment);
    let date = new Date();
    let obj = {
      body: comment,
      clap: 0,
      userId: userData.id,
      username: userData.fullName,
      date: date,
      postId: props.postId
    }
    if(comment!=""){
      commentOnPost(obj);
    }
  }
  return (
    <div>
      
      {isLoggedIn && <div className='mr-10 ml-4'>
        <textarea className='border rounded-2xl px-8  py-2 w-full' aria-labelledby="commentArea" name="comment" rows="4" cols="50" value={comment} onChange={(e) => { setComment(e.target.value) }}>
        </textarea>
        <CustomButton styleToAdd={` float-right flex bg-white text-black py-2 px-2 mr-2 text-xl rounded-2xl`} style={{ background: "#FFC017" }} onClickMethod={postComment} param={comment} >
          <span className='text-sm'>Comment</span>
        </CustomButton>
      </div>}
      <div className='mt-20'>
        {
          loading ? <><DotLoader></DotLoader></> :
            comments.map((com) => {
              return <CommentCard key={com.id} comment={com}></CommentCard>
            })
        }
      </div>
    </div>
  )
}
