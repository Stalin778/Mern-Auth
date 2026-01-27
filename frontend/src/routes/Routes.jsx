import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import Profile from '../pages/Profile'
import Chat from '../pages/Chat'

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
     <Route path='/chat' element={
      
        <ProtectedRoute>
        <Chat/>
        </ProtectedRoute>
     }/>
     
    </Routes>
  )
}

export default AppRoutes