import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getPostByCategory, getPostData, getTrendingData } from '../../redux/action/post.action';
import CategoryListing from '../molecules/CategoryListing';
import FeedContent from '../organism/FeedContent'
import FeedsNavbar from '../organism/FeedsNavbar'

export default function FeedsPage() {
  let { pageType } = useParams();
  const { search } = useLocation();
  let query = useMemo(() => new URLSearchParams(search), [search]);
  let navigate=useNavigate();

  let dispatch = useDispatch();
  let { postList, postLoadingList } = useSelector(state => state.posts)
  let category = {
    "0": "others",
    "1": "programming",
    "2": "science",
    "3": "Motivational",
    "4": "politics"
  }
  const [categoryId, setCategoryId] = useState(query.get("cat")?query.get("cat").split(","):[])
  useEffect(() => {
    console.log(categoryId,"catids",typeof categoryId);
      if(pageType!=="category"){
        setCategoryId([])
      }
    switch (pageType) {
      case "all":
        dispatch(getPostData())
        break;
      case "mypost":
        dispatch(getPostData())
        break;
      case "trending":
        dispatch(getTrendingData())
        break;
      case "category":
        {
          if(!categoryId || categoryId.length<=0){
            // navigate("/dashboard/post/category")
            dispatch(getPostByCategory("fetchAll"))
          }
        }
        break;
      case "search":
        dispatch(getPostData())
        break;

      default:
        dispatch(getPostData());
        break;
    }
  }, [pageType])

  useEffect(() => {
    if(categoryId?.length>0){
      navigate("?cat="+categoryId)
      console.log(categoryId);
      dispatch(getPostByCategory(categoryId))
    }else{
      navigate("")
      dispatch(getPostByCategory("fetchAll")) 
    }
  },[categoryId])
  

  return (
    <div>
      <FeedsNavbar></FeedsNavbar>
      {/* <iframe srcDoc='<h1>H1</h1><h2>h2</h2><h3>h3</h3><h1>H1</h1><h2>h2</h2><h3>h3</h3>'></iframe>
      <div className='unreset'><h1 >H1</h1><h2>h2</h2><h3>h3</h3></div> */}
      {/* {pageType} */}

      {
        // !postLoadingList && 
        pageType === "category"
          ?
          <div className='ml-8'>
            <CategoryListing categoryId={categoryId} setId={setCategoryId}></CategoryListing>
          </div>
          : <></>

      }

      {
        postLoadingList ? <>loading...</> :
          postList.map((post) => {
            return <FeedContent key={post.id} post={post}></FeedContent>
          })

      }


    </div>
  )
}
