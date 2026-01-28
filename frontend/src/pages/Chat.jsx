import React, { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client';
import  axios from 'axios';
const Chat = () => {
  const [userdata, setUserData] = useState({ username: '', email: '' });
  
  const socketRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const token = localStorage.getItem('token');

const chatHandler=(data)=>{
  console.log(data);
}
  useEffect(() => {
    socketRef.current = io("http://localhost:3000");
    socketRef.current.on("connect",()=>{
      console.log(socketRef.current.id);
    })
     socketRef.current.on("chat message",chatHandler);
 
    axios.get("http://localhost:8085/protected/profile", {
      headers: {
        "x-auth-token": token
      }
    })
      .then(res => {
        setUserData(prev =>({ ...prev, username: res.data.username, email: res.data.email }))
      })
      .catch(err => { });

        return ()=>{
          socketRef.current.off("chat message",chatHandler);
          socketRef.current.disconnect();
        }
  }, []);




  return (
    <div className='bg-amber-300 h-screen w-auto flex items-center justify-center'>
      <div className="container bg-amber-100 h-[80%] w-[80%]  flex flex-col">
        <div className="roominof my-0 h-10 bg-amber-200 flex items-center px-5 ">Hello</div>
        <div className="messages text-2xl  overflow-y-auto gap-2 flex-1 flex flex-col  p-2 px-3  ">



          <div className="message bg-green-200 max-w-[70%] w-fit self-end  rounded-2xl px-5  ">
            <div className='text-sm '>name</div>
            here we will display the message
          </div>
        </div>


        <div className="sendbox mt-auto">
          <form className='grid grid-cols-[4fr_1fr] ' onSubmit={handleSubmit}>
            <input type="text" className="msginput bg-white   " />
            <button className=' bg-blue-400'>Send</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Chat