import React from 'react'

const UserChat = () => {
  return (
    <div className=' bg-yellow-100  h-screen grid grid-cols-[1fr_3fr] p-4'>
        <div className="left bg-amber-300 rounded-l-2xl p-1 flex flex-col">
        <p className="title">Chat</p>
        <hr/>
        <div className='w-25 h-25 rounded-full mx-auto my-0 flex flex-col items-center justify-center mt-10 bg-amber-100  '>M</div>
        <div className="profile_name text-center mt-5">Sameer Shaikh</div>
        <select className='bg-green-400 p-1 rounded-2xl text-green-200 text-center self-center ' >
            <option value="availabe">Availabel</option>
            <option value="Busy">Busy</option>
            <option value="At Work">At Work</option>
            <option value="Study">Study</option>
        </select>
    <input type='text' value="" placeholder='search' className='h-10 mt-10 rounded-2xl px-5 w-full bg-gray-100' />
    <div className="accounts mt-5 px-2">
        <div className='bg-'>this is fist account</div>
    </div>
        </div>
        <div className="rigtht bg-blue-100 rounded-r-2xl">will</div>
    </div>
  )
}

export default UserChat