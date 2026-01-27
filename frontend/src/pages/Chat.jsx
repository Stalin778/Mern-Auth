import React from 'react'
 import { io } from "socket.io-client";
const Chat = () => {
   
const userid=123;
const socket = io(`http://localhost:9096/${userid}`, {
  transports: ["websocket"], // optional but helpful
});

socket.on("connect", () => {
  console.log("connected to server:", socket.id);
});

socket.on("connect_error", (err) => {
  console.log("connection error:", err.message);
});
const handleMessage=(e)=>{

  e.preventDefault();
   socket.emit('chat message',"hellow ");
 
}
socket.on('hello',(arg)=>{
    console.log(arg);
  })
  return (
    <div>This is chat page
      <button onClick={handleMessage} className='h-fit w-fit bg-amber-300'> press me to sent the message</button>
    </div>
  )
}

export default Chat