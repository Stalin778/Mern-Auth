import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

const Chat = () => {
  const [msg, setMsg] = useState('');
  const [msgs, setMsgs] = useState([]);
  const [socketid, setSocketid] = useState('');

  useEffect(() => {
    socket.on("connect", () => {
      setSocketid(socket.id);
      console.log("Connected:", socket.id);
    });

    socket.on("chat message", (msg) => {
      setMsgs(prev => {
        if (msg.userid !== socket.id) {
          return [...prev, msg];
        }
        return prev;
      });
    });

    return () => {
      socket.off("connect");
      socket.off("chat message");
    };
  }, []);
 const handleMsg=(e)=>{
    setMsg(e.target.value);
    

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!msg.trim()) return;

    const msgobj = {
      msg,
      userid: socket.id
    };

    setMsgs(prev => [...prev, msgobj]);
    socket.emit('chat message', msgobj);
    setMsg('');


  };
 
  return (
   <div className="flex items-center justify-center h-screen w-screen bg-amber-300">
      <div className="container relative bg-amber-100 w-96 h-96 flex flex-col p-4">

      
        <div className="flex flex-col gap-2 overflow-y-auto pb-14">
          {msgs.map((msg, index) => (
            <div
              key={index}
              className={`chatsection  bg-white px-3 py-2 rounded-lg max-w-[75%] ${msg.userid==socketid?'self-end':'self-start'}`}
            >
             <div className='text-gray-400 '> {msg.userid}</div>
              {msg.msg}
            </div>
          ))}
        </div>

        
        <form
          className="flex absolute bottom-0 left-0 w-full p-2 gap-2 bg-amber-100"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="msg"
           onChange={handleMsg}
            className="bg-white h-10 flex-1 px-2 rounded"
          />
          <button
            className="h-10 px-5 bg-blue-100 rounded-xl"
            type="submit"
          >
            Send
          </button>
        </form>

      </div>
    </div>

  );
};

export default Chat;





