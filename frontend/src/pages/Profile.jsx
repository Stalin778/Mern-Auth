import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const navigate=useNavigate();
  const token =localStorage.getItem('token');
  const [userdata,setUserData]=useState({username:'',email:''});
  useEffect(()=>{
 axios.get('http://localhost:8085/protected/profile',{
    headers:{
      "x-auth-token":token
    }
    })
    .then(res=>{
      console.log(res);
      setUserData({...userdata,username:res.data.userData.username,email:res.data.email})
    })
    .catch(err=>{
      console.log(err);
      })},[token]);
    const handleChat=(e)=>{
      e.preventDefault();
      navigate('/chat');
    }
    const handleLogout=(e)=>{
      e.preventDefault();
      localStorage.removeItem('token');
      navigate('/');
    }
  return (
    <div className='flex h-screen flex-col justify-center items-center'>
      <div className="cont1 bg-amber-400 h-100 w-70  pt-15 rounded-2xl">
        <div className="profile_img h-30 w-30 rounded-full bg-amber-100 flex items-center justify-center text-5xl mx-auto">{userdata.username[0]}</div>
        <div className="user_name ml-10 flex  gap-2 mt-5">
          <label className=' '>Name:</label>
          <p className="value">{userdata.username}</p>
        </div>
        <div className="email flex flex-col gap-2 mt-5 ml-10">
          <label>Email:</label>
        <p className="email_value">{userdata.email}</p>
                              <button onClick={handleChat} className=' h-fit w-fit p-2  rounded-2xl bg-blue-400'>Continue to chat</button>
              <button onClick={handleLogout} className=' h-fit w-fit p-2  rounded-2xl bg-red-400'>Logout</button>
        </div>

      </div>

    </div>
  )
}

export default Profile