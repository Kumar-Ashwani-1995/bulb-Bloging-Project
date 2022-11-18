import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from '../pages/LoginPage'
import PageNotFoundPage from '../pages/PageNotFoundPage'
import PublicPage from '../pages/PublicPage'
import HomePage from '../pages/HomePage'
import HowToUse from "../pages/HowToUse";
import AboutUsPage from "../pages/AboutUsPage";
import AuthenticationFirewall from "../pages/AuthenticationFirewall";
import Dashboard from "../pages/Dashboard";
import ProfilePage from "../pages/ProfilePage";
import FeedsPage from "../pages/FeedsPage";
import CreateBlogPage from "../pages/CreateBlogPage";

export default function Routing() {
  return (
    <Routes>
        <Route path="/" element={<PublicPage />}>
          <Route index element={<HomePage />}></Route>
          <Route path="docs" element={<HowToUse />}></Route>
          <Route path="aboutUs" element={<AboutUsPage />}></Route>
        </Route>

        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<FeedsPage />}></Route>
          <Route path='profile' element={<ProfilePage />}></Route>
          <Route element={<AuthenticationFirewall />}>
            <Route path='create' element={<CreateBlogPage></CreateBlogPage>}></Route>
          </Route>
        </Route>

        <Route path="login" element={<LoginPage />}></Route>
        <Route path="/404" element={<PageNotFoundPage />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
  )
}
