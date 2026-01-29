import React, { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client';
import axios from 'axios';
const Chat = () => {
  const [userdata, setUserData] = useState({ username: '', email: '' });
  const [roommsg,setRoomMsg]=useState([]);
  const [msgvalue, setMsgValue] = useState('');
const [roomId,setRoomId]=useState('');

const [currentroom,setCurrentRoom]=useState('');
const handleRoomId=(e)=>{setRoomId(e.target.value)}
  const handleMsgChange = (e) => { setMsgValue(e.target.value); }
  const socketRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(roomId!==''){
    const msgObject = {
      roomId:roomId,
      senderId: userdata.username,
      message: msgvalue
    }
    if (!socketRef.current) return;
    if (!msgvalue.trim()) return;
    socketRef.current.timeout(5000).emit('message', msgObject,(err,response)=>{
      if(err){
        console.log(err);

      }
      else{
        
        renderCurrentRoom(roomId);
      }
    });
    setMsgValue('');
  }
  else{
    console.log("room id is empty");
  }
  }
  const token = localStorage.getItem('token');

  
  const handleRoom = (e) => {
    e.preventDefault();
    if (!socketRef.current) return;
    socketRef.current.timeout(5000).emit("join room",{roomId:roomId,username:userdata.username},(err,response)=>{
      if(err){
        console.log(err);
      }
      else{
        console.log(response);
        setCurrentRoom(roomId);
        renderCurrentRoom(roomId);
      }
    })

  }
  const handleCreateRoom=(e)=>{
    e.preventDefault();
    if (!socketRef.current) return;
    socketRef.current.timeout(5000).emit("create room",{roomId:roomId,ownerId:userdata.username},(err,response)=>{
      if(err){
        console.log(err);
        
      }
      else{
        console.log(response);

      }
      
    
    });
  }
  const handleSearchRoom=(e)=>{
    e.preventDefault();
    socketRef.current.timeout(5000).emit("search room",{roomId:roomId},(err,response)=>{
      if(err){
        console.log(err);
      }
      else{
        console.log(response);
      }
    });
  }
  const renderCurrentRoom=(roomId)=>{
    
    socketRef.current.timeout(5000).emit("get messages",{roomId},(err,response)=>{
     
      if(err){
        console.log(err);
        console.log("there is err rendering the messages");

      }
      else{
        
        console.log(response.obj);
        //console.log(roomId+"this is room id");
         setRoomMsg([...response.obj]);
        //console.log(response);
      }
    })

  }
  useEffect(() => {
    const init = async () => {
      try {

        const res = await axios.get('http://localhost:8085/protected/profile', {
          headers: {
            "x-auth-token": token
          }
        })

        const { username, email } = res.data;
        setUserData(prev => ({ ...prev, username, email }));

        socketRef.current = io('http://localhost:3000', {
          auth: {
            username: username,
            token: token
          }
        });

        socketRef.current.on("connect", () => {
          console.log("on connect"+socketRef.current.id);
        })
       
        socketRef.current.on("message",(msg)=>{
          console.log("room id for rerendering is"+msg.roomId);
          
          renderCurrentRoom(msg.roomId);
          
        })
      } catch (err) {
        console.log("failer to fetch the profile", err);

      }
    }
    init();
    return () => {


      if (socketRef.current) {
        socketRef.current.off("message",messageHandler);
        
       // socketRef.current.disconnect();
        socketRef.current = null;


      }
    }


  }, [token]);
 const containerRef = useRef(null);

useEffect(() => {
  const el = containerRef.current;
  el.scrollTop = el.scrollHeight;
}, [roommsg]);


  return (
    <div className='bg-amber-300 h-screen w-auto flex flex-col items-center justify-center'>
      <div className="join_rom">
        <form onSubmit={handleRoom}>
          <input type='text' required value={roomId} onChange={handleRoomId} placeholder='enter the room name' className='bg-white border border-amber-600 p-1'/>
          <button type='submit' className='bg-blue-100 p-1 '>Join</button>
          <button type='button' onClick={handleCreateRoom} className='ml-2 bg-blue-100 p-1 '>CreateRoom</button>
          <button type='button' onClick={handleSearchRoom} className='ml-2 bg-blue-100 p-1 '>SearchRoom</button>
        </form>
      </div>
      <div className="container bg-amber-100 h-[80%] w-[80%]  flex flex-col">
        <div className="roominof my-0 h-10 bg-amber-200 flex items-center px-5 ">{currentroom}</div>
        <div ref={containerRef}  className="messages text-2xl  overflow-y-auto gap-2 flex-1 flex flex-col  p-2 px-3  ">


      {roommsg.map((msg,index)=>{
        
        return(
<div key={msg._id} className={`message bg-green-200 max-w-[70%] w-fit   rounded-2xl px-5 ${msg.senderId===userdata.username?'self-end':'self-start'}`}>
            <div  className='text-sm '>{msg.senderId}</div>
            {msg.message}
          </div>
        );
      })}
          
        </div >


        <div className="sendbox mt-auto">
          <form className='grid grid-cols-[4fr_1fr] ' onSubmit={handleSubmit}>
            <input type="text" className="msginput bg-white   " value={msgvalue} onChange={handleMsgChange} />
            <button className=' bg-blue-400'>Send</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Chat