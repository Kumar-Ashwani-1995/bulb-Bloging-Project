import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function DisablePublicPage() {
    let { isLoggedIn } = useSelector(state => state.user)
    return (isLoggedIn ?  <Navigate to="/dashboard/post/all" replace /> : <Outlet />)
}
