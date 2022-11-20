import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom";

export default function AuthenticationFirewall() {
    let { isLoggedIn } = useSelector(state => state.user)
    useEffect(() => {
        console.log("Login Status: "+isLoggedIn);
    }, [isLoggedIn])
    
    return (isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />)

}
