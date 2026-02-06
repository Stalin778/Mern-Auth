import React, { useState } from 'react'
import MainChat from './components/MainChat'
import Profile1info from './components/Profile1info'
import Profile2info from './components/Profile2info'
import { UserContext } from '../context/UserContext'

const UserChat = () => {
  const [selectedUser,setSelectedUser]=useState(null);
  return (
    <UserContext.Provider value={{selectedUser,setSelectedUser} }>
      <div className=' bg-yellow-100  h-screen grid grid-cols-[1fr_3fr_1fr] p-2'>
        <Profile1info />
        <div className="rigtht bg-[#FCF8F8] h-full "><MainChat /></div>
        <Profile2info />
      </div></UserContext.Provider>

  )
}

export default UserChat 