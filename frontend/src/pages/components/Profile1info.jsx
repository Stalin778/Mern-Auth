import React, { use, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

const Profile1info = () => {
  const navigate=useNavigate();
  const token=localStorage.getItem('token');
  const [userData,setUserData]=useState({username:'',email:'',profileImg:'',userStatus:''})
useEffect(()=>{
  axios.get("http://localhost:8085/protected/profile",{
    headers:{
      "x-auth-token":token
    }
  })
.then(res=>{
setUserData({...userData,username:res.data.userData.username,email:res.data.email,profileImg:res.data.profileImg,userStatus:res.data.userData.userstatus})
console.log(userData);
})
  .catch(err=>{
    console.log(err);

  })
} ,[token]);
  
  
  const [search,setSearch]=useState("");
  
  useEffect(()=>{

  })
  return (
    <div className="left bg-amber-300 rounded-l-2xl p-1 flex flex-col">
        <p className="title">Chat</p>
        <hr />
        <div className='w-25 h-25 rounded-full mx-auto my-0 flex flex-col items-center justify-center mt-10 bg-amber-100  '>{}</div>
        <div className="profile_name text-center mt-5">{userData.username}</div>
        <div className="flex">
 <p className='mx-auto bg-green-400 text-green-200 rounded-3xl px-2'>Availabel</p>
</div>
        <input type='text' value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder='search' className='h-10 mt-10 rounded-2xl px-5 w-full bg-gray-100' />
        <div className="accounts mt-5 px-2 flex flex-col gap-2">
          
          <div>
            <div className="Main_profile flex items-center gap-2 w-full ">
              <div className="profile_image h-10 w-10  rounded-full bg-blue-100 ">
                <img src="#" alt="M" className='m-auto' />
              </div>
              <div className="profile_info">
                <div className="profile_name w-60 flex justify-between ">
                  <p className="p_name">Sammer shaikh</p>
                  <p className="last_active text-sm">12:00</p>
                </div>
                <div className="lastmsg text-gray-600">This was sent by him</div>
              </div>
            </div>
          </div>



        </div>
      </div>
  )
}

export default Profile1info