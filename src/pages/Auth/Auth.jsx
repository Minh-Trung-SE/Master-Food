import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { Login } from './Login'
import { Register } from './Register'

export const Auth = () => {
    const { auth: { user } } = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if(user){
            navigate('/')
        }
    }, [user, navigate])
    return (
        <Routes>
            <Route path='/' element={<Navigate to={'login'} />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
        </Routes>
    )
}
