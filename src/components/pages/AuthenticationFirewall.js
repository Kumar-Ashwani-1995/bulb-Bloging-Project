import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

export default function AuthenticationFirewall() {
    let isLoggedIn = true;
    return (isLoggedIn ? <Outlet /> : <Navigate to="/" replace />)

}
