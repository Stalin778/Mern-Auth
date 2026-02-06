import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext';
const MainChat = () => {
   const {selectedUser,setSelectedUser}=useContext(UserContext);
    useEffect(()=>{
      if(selectedUser===null) console.log("select the user");
      else{ console.log(selectedUser+"from the main chat");}
    },[selectedUser])
  const handleMsgSubmit = (e) => {
    e.preventDefault();
    
  }
  const handleChatClose=()=>{
    
    setSelectedUser(null);
  }
  return (
   
    <div className=' h-[calc(100vh-10px)]  flex flex-col'>
    {selectedUser?(<div className='flex flex-col h-screen'>
      <h2 className='flex justify-between px-2 items-center'><p>User Chat</p> <button onClick={handleChatClose} className='close_chat'>X</button></h2>
      <hr className='mt-1' />
      <div className="messages flex-1 overflow-y-auto w-full">

        <div className="msg_body max-w-[70%]   w-fit p-2 m-2 rounded-xl text-start">
          <div className="name text-sm px-1 ">Sammer Shaikh ,12:00</div>
          <div className="msg_text bg-blue-200  py-2 px-1 m-0 rounded-2xl">
            Hey this is msg from sammer
            loremipsum5000 loremipsum
          </div>
        </div>



      </div>

      <form className='grid grid-cols-[30fr_1fr] border-2 rounded-2xl h-15  border-black items-center mb-2 px-2'>
        <input type='text' placeholder='message' className=' rounded-l-2xl h-full w-full outline-none' />
        <i  onClick={handleMsgSubmit} className="fa-solid fa-paper-plane"></i>
      </form></div>):(<p className='self-center my-auto'>select user to start chatting</p>)}


    </div>

  )
}

export default MainChat