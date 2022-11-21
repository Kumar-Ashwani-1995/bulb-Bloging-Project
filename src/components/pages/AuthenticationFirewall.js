import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom";
import { getDbStatus } from '../../redux/action/post.action';

export default function AuthenticationFirewall() {
  let dispatch = useDispatch();
    let { isLoggedIn } = useSelector(state => state.user)
    useEffect(() => {
        console.log("Login Status: "+isLoggedIn);
    }, [isLoggedIn])
    dispatch(getDbStatus())
    return (isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />)

}
