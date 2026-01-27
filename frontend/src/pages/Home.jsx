import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate();
const handleLogin=(e)=>{
    e.preventDefault();
    navigate('/login');
}
const handleRegister=(e)=>{
    e.preventDefault();
    navigate('/register');
}

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <p className=''>this is home route
             </p>
        <button onClick={handleLogin} className="bg-black p-5 m-5 rounded-2xl text-white">Login</button>
        <button onClick={handleRegister} className='bg-black p-5 m-5 rounded-2xl text-white'>Register</button>
    </div>
  )
}

export default Home