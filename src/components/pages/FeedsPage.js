import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FeedContent from '../organism/FeedContent'
import FeedsNavbar from '../organism/FeedsNavbar'

export default function FeedsPage() {
  let {pageType} = useParams()
  useEffect(() => {
    console.log(pageType);
  }, [pageType])
  
  
  return (
    <div>
      <FeedsNavbar></FeedsNavbar>
      {/* <iframe srcDoc='<h1>H1</h1><h2>h2</h2><h3>h3</h3><h1>H1</h1><h2>h2</h2><h3>h3</h3>'></iframe>
      <div className='unreset'><h1 >H1</h1><h2>h2</h2><h3>h3</h3></div> */}
      {/* {pageType} */}
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
      <FeedContent></FeedContent>
    </div>
  )
}
