import React, { use, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useEffect,useContext} from 'react';
import profileAlt from '../../assets/profileAlt.png'
import { UserContext } from '../../context/UserContext';
const Profile1info = () => {
  const {setSelectedUser}=useContext(UserContext);

  const token=localStorage.getItem('token');
  const [userData,setUserData]=useState({username:'',email:'',profileImg:'',userStatus:''})
useEffect(()=>{
  axios.get("http://localhost:8085/protected/profile",{
    headers:{
      "x-auth-token":token
    }
  })
.then(res=>{
setUserData({...userData,username:res.data.userData.username,email:res.data.userData.email,profileImg:res.data.userData.profileImg,userStatus:res.data.userData.userstatus})
console.log(res);
})
  .catch(err=>{
    console.log(err);

  })
} ,[token]);
  
  
  
  const [profileImg,setProfileImg]=useState(false);
  useEffect(()=>{
    if(userData.profileImg){
      setProfileImg(true);
    }

  },[])
  const [search,setSearch]=useState('');
  const [searchResult,setSearchResult]=useState([]);
  useEffect(()=>{
 const timer=setTimeout(()=>{
   if(search.trim().length>2){
 axios.get("http://localhost:8085/protected/users",{
  headers:{"x-auth-token":token},
  params:{username:search}})
    .then(res=>setSearchResult(res.data.users))
    .catch(err=>console.log(err));
  }
   },300); 
     return () => clearTimeout(timer);
  },[search])
 const handleProfileClick=(obj)=>{
 setSelectedUser(obj);
 }
  return (
   
    <div className="left bg-amber-300 rounded-l-2xl p-1 flex flex-col">
        <p className="title">Chat</p>
        <hr />
        <div className='w-25 h-25 rounded-full mx-auto my-0 flex flex-col items-center justify-center mt-10 bg-amber-100  '>{
            profileImg?(
              <img src={userData.profileImg} alt='profileImage' className='w-full h-full object-cover'/>
            ):
            ( <div className="text-2xl font-bold">
      {userData.username.charAt(0).toUpperCase()}
    </div>)
        
        
        
}</div>
        <div className="profile_name text-center mt-5">{userData.username}</div>
        <div className="flex">
 <p className='mx-auto bg-green-400 text-green-200 rounded-3xl px-2'>Availabel</p>
</div>
        <input type='text' value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder='search' className='h-10 mt-10 rounded-2xl px-5 w-full bg-gray-100' />
        <div className="accounts mt-5 px-2 flex flex-col gap-2">
          {search.length<2?( <div>
            <div className="Main_profile flex items-center gap-2 w-full ">
              <div className="profile_image h-10 w-10  rounded-full bg-blue-100 ">
                <img src={profileAlt} alt="f" className=' object-cover w-full h-full rounded-full' />
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

):(<div className="searchResult flex flex-col gap-2 ">
          
  {searchResult.length<=0?(<p className='text-black font-bold'>No results</p>):(
    searchResult.map((obj,index)=>{return( <div key={obj._id} className='flex flex-col'>
            <div onClick={()=>handleProfileClick(obj._id)} className="Main_profile flex  items-center gap-2 w-full ">
              <div className="profile_image h-10 w-10  rounded-full bg-blue-100 ">
                <img src={profileAlt} alt="f" className=' object-cover w-full h-full rounded-full' />
              </div>
              <div className="profile_info">
                <div className="profile_name w-60 flex justify-between ">
                  <p className="p_name">{obj.username}</p>
                  <p className="last_active text-sm">12:00</p>
                </div>
                
              </div>
            </div>
          </div>)})
         
          )}
          </div>
          )}
        

        
        </div>


      
      </div>
  )
}

export default Profile1info