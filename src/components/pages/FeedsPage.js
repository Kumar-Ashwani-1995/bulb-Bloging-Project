import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getPostByCategory, getPostData, getTrendingData } from '../../redux/action/post.action';
import { PostLoader } from '../atoms/Loader';
import CategoryListing from '../molecules/CategoryListing';
import FeedContent from '../organism/FeedContent'
import FeedsNavbar from '../organism/FeedsNavbar'

export default function FeedsPage() {
  let { pageType } = useParams();
  const { search } = useLocation();
  let query = useMemo(() => new URLSearchParams(search), [search]);
  let navigate = useNavigate();

  let dispatch = useDispatch();
  let { postList, postLoadingList } = useSelector(state => state.posts)
  let category = {
    "0": "others",
    "1": "programming",
    "2": "science",
    "3": "Motivational",
    "4": "politics"
  }
  const [categoryId, setCategoryId] = useState(query.get("cat") ? query.get("cat").split(",") : [])
  useEffect(() => {
    window.scrollTo(0, 0)
    // console.log(categoryId, "catids", typeof categoryId);
    if (pageType !== "category") {
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
          if (!categoryId || categoryId.length <= 0) {
            dispatch(getPostByCategory("fetchAll"))
          }
        }
        break;
      case "search":
        break;

      default:
        dispatch(getPostData());
        break;
    }
  }, [pageType])

  useEffect(() => {
    if (categoryId?.length > 0) {
      navigate("?cat=" + categoryId)
      console.log(categoryId);
      dispatch(getPostByCategory(categoryId))
    } else {
      navigate("")
      dispatch(getPostByCategory("fetchAll"))
    }
  }, [categoryId])


  return (
    <div>
      <FeedsNavbar></FeedsNavbar>
      {
        pageType === "category"
          ?
          <div className='ml-8'>
            <CategoryListing categoryId={categoryId} setId={setCategoryId}></CategoryListing>
          </div>
          : <></>
      }
      {
        pageType === "search"
          ?
          <div className='ml-10'>
            <p className='text-2xl'>Showing Results</p>
          </div>
          : <></>
      }
      {
        postLoadingList ?
          <div className='mx-5'>
            <PostLoader></PostLoader>
          </div> :
          postList.length > 0 ? postList.map((post) => {
            return <FeedContent key={post.id} post={post}></FeedContent>
          })
            :
            <div className='mx-6 ' >
              <p className='ml-10 mt-10'>No Post for selection</p>
              <PostLoader ></PostLoader>

            </div>

      }


    </div>
  )
}
