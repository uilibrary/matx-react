import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from 'app/hooks/useAuth'

const AuthGuard = ({ children }) => {
    const { isAuthenticated } = useAuth()
    const redirect = useNavigate();
    let authenticated = isAuthenticated;

    return <>{authenticated ? children : redirect("/session/signin")}</>;
}

export default AuthGuard
