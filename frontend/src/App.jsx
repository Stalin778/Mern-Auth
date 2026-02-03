import React, { useState } from 'react'
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import routes from './routes/Routes';
import AppRoutes from './routes/Routes';
import { BrowserRouter, Routes } from 'react-router-dom';
import UserChat from './pages/UserChat';

const App = () => {
  // const [isAuthenticated,setAuth]=useState(!!localStorage.getItem('token'));

  return (
    <div>
    <AppRoutes/>
      </div>
  ) 
}

export default App