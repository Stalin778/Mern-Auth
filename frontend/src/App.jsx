import React, { useState } from 'react'
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import routes from './routes/Routes';
import AppRoutes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import UserChat from './pages/UserChat';

const App = () => {
  // const [isAuthenticated,setAuth]=useState(!!localStorage.getItem('token'));

  return (
    <div>
    <UserChat/>
     
      </div>
  ) 
}

export default App