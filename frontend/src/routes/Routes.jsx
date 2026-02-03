import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import Profile from '../pages/Profile'

import UserChat from '../pages/UserChat'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={
      
        <ProtectedRoute>
        <Profile/>
        </ProtectedRoute>
        
     }/>
     <Route path='/Chat' element={
      
        <ProtectedRoute>
        <UserChat/>
        </ProtectedRoute>
     }/>
     
    </Routes>
  )
}

export default AppRoutes