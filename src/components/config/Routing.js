import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
// import LoginPage from '../pages/LoginPage'
// import PageNotFoundPage from '../pages/PageNotFoundPage'
// import PublicPage from '../pages/PublicPage'
// import HomePage from '../pages/HomePage'
// import HowToUse from "../pages/HowToUse";
// import AboutUsPage from "../pages/AboutUsPage";
// import AuthenticationFirewall from "../pages/AuthenticationFirewall";
// import Dashboard from "../pages/Dashboard";
// import ProfilePage from "../pages/ProfilePage";
// import FeedsPage from "../pages/FeedsPage";
// import CreateBlogPage from "../pages/CreateBlogPage";
// import PostPreviewPage from '../pages/PostPreviewPage';


const LoginPage = React.lazy(() => import('../pages/LoginPage'))
const PageNotFoundPage = React.lazy(() => import('../pages/PageNotFoundPage'))
const PublicPage = React.lazy(() => import('../pages/PublicPage'))
const HomePage = React.lazy(() => import('../pages/HomePage'))
const HowToUse = React.lazy(() => import("../pages/HowToUse"))
const AboutUsPage = React.lazy(() => import("../pages/AboutUsPage"))
const AuthenticationFirewall = React.lazy(() => import("../pages/AuthenticationFirewall"))
const Dashboard = React.lazy(() => import("../pages/Dashboard"))
const ProfilePage = React.lazy(() => import("../pages/ProfilePage"))
const FeedsPage = React.lazy(() => import("../pages/FeedsPage"))
const CreateBlogPage = React.lazy(() => import("../pages/CreateBlogPage"))
const PostPreviewPage = React.lazy(() => import('../pages/PostPreviewPage'))



export default function Routing() {
  return (
    <Routes>



      <Route path="/" element={
        <React.Suspense fallback={<>home loading...</>}>
          <PublicPage />
        </React.Suspense>
      }>
        <Route index element={
          <React.Suspense fallback={<>inner home loading...</>}>
            <HomePage />
          </React.Suspense>
        }></Route>
        <Route path="docs" element={
          <React.Suspense fallback={<>docs loading...</>}>
            <HowToUse />
          </React.Suspense>
        }></Route>
        <Route path="aboutUs" element={
          <React.Suspense fallback={<>aboutUs loading...</>}>
            <AboutUsPage />
          </React.Suspense>}></Route>
      </Route>


      <Route path="dashboard" element={
        <React.Suspense fallback={<>dashboard loading...</>}>
          <Dashboard />
        </React.Suspense>}>
        <Route path='post/:pageType' element={
          <React.Suspense fallback={<>page loading...</>}>
            <FeedsPage />
          </React.Suspense>}></Route>
        <Route path='postPreview/:postId' element={
          <React.Suspense fallback={<>post loading...</>}>
            <PostPreviewPage />
          </React.Suspense>}></Route>
        <Route element={<AuthenticationFirewall />}>
          <Route path='profile' element={
            <React.Suspense fallback={<>profile loading...</>}>
              <ProfilePage />
            </React.Suspense>}></Route>
          <Route path='BlogLab/:element' element={
            // <React.Suspense fallback={<>create loading...</>}>
              <CreateBlogPage></CreateBlogPage>
            // </React.Suspense>
          }></Route>
        </Route>
      </Route>

      <Route path="login" element={
        <React.Suspense fallback={<>loading...</>}>
          <LoginPage />
        </React.Suspense>
      }></Route>
      <Route path="/404" element={
        <React.Suspense fallback={<>loading...</>}>
          <PageNotFoundPage />
        </React.Suspense>}></Route>
      {/* <Route path="*" element={<Navigate to="/404" />}></Route> */}
    </Routes>
  )
}
