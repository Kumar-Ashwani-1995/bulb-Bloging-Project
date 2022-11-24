import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getMyPost, getPostByCategory, getPostData, getPostDataByLimit, getTrendingData } from '../../redux/action/post.action';
import CustomButton from '../atoms/CustomButton';
import { PostLoader } from '../atoms/Loader';
import BlogCard from '../molecules/BlogCard';
import CategoryListing from '../molecules/CategoryListing';
import FeedsNavbar from '../organism/FeedsNavbar'

export default function FeedsPage() {
  let { pageType } = useParams();
  const { search } = useLocation();
  let query = useMemo(() => new URLSearchParams(search), [search]);
  let navigate = useNavigate();

  let dispatch = useDispatch();
  let { loggedInData } = useSelector(state => state.user)
  let { postList, postLoadingList } = useSelector(state => state.posts)
  let category = {
    "0": "others",
    "1": "programming",
    "2": "science",
    "3": "Motivational",
    "4": "politics"
  }
  const [categoryId, setCategoryId] = useState(query.get("cat") ? query.get("cat").split(",") : [])
  // _page=1&_limit=10

  const [loadMore, setloadMore] = useState(1)

  function increment() {
    setloadMore(prev => prev + 1)
  }
  function decrement(params) {
    setloadMore(prev => prev - 1)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    apiCall()
  }, [loadMore])


  useEffect(() => {
    // window.scrollTo(0, 0)
    // setloadMore(1)
    // console.log(categoryId, "catids", typeof categoryId);
    if (pageType !== "category") {
      setCategoryId([])
    }
    apiCall()

  }, [pageType])

  function apiCall() {
    switch (pageType) {
      case "all":
        dispatch(getPostDataByLimit(loadMore))
        break;
      case "mypost":
        dispatch(getMyPost(loggedInData?.id, loadMore))
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
  }

  useEffect(() => {
    if (pageType === "category") {
      if (categoryId?.length > 0) {
        navigate("?cat=" + categoryId)
        console.log(categoryId);
        dispatch(getPostByCategory(categoryId))
      } else {
        navigate("")
        dispatch(getPostByCategory("fetchAll"))
      }
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
          postList.length > 0 ?
            <div>
              {
                postList.map((post) => {
                  return <BlogCard key={post.id} post={post}></BlogCard>

                })
              }
              <div className='text-center mt-5'>

                {
                  loadMore > 1 ?
                    <CustomButton styleToAdd="border bg-black rounded-2xl px-4 py-1 text-white float-left m-10" onClickMethod={decrement}>Previous</CustomButton>
                    : <></>
                }
                {
                  postList.length == 10 ?
                    <CustomButton styleToAdd="border bg-black rounded-2xl px-6 py-1 text-white float-right m-10" onClickMethod={increment}>next</CustomButton>
                    : <></>
                }
              </div>
            </div>
            :
            <div className='mx-6 ' >
              <p className='ml-10 mt-10 '>Sorry! No Post for selection</p>
              <PostLoader ></PostLoader>
              {/* <div className='text-center mt-5'>
                <CustomButton styleToAdd="border bg-black rounded-2xl px-3 py-1 text-white" onClickMethod={decrement}>Previous</CustomButton>
              </div> */}
            </div>

      }


    </div>
  )
}
