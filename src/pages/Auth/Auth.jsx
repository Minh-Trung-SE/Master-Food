import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import { Register } from './Register'

export const Auth = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={'login'}/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element = {<Register/>} />
    </Routes>
  )
}