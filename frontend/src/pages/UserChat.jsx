import React from 'react'
import MainChat from './components/MainChat'
import Profile1info from './components/Profile1info'
import Profile2info from './components/Profile2info'

const UserChat = () => {
  return (
    <div className=' bg-yellow-100  h-screen grid grid-cols-[1fr_3fr_1fr] p-2'>
     <Profile1info />
     <div className="rigtht bg-[#FCF8F8] h-full "><MainChat/></div>
      <Profile2info/>
    </div>
  )
}

export default UserChat 