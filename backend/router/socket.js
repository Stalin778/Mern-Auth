import {Server} from 'socket.io';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path:'../.env'});
import Chat from '../models/chatmodel.js';



mongoose
.connect(process.env.MONGO_CHAT_URI)
.then(()=> console.log("chat database is active"))
.catch(err=>console.log(err));

const io=new Server(3000,{
  cors:"*",
  methods:["GET","POST"]
})
io.on("connect",(socket)=>{
  console.log("user connected"+socket.id);
  socket.on("chat message",(msg)=>{
    console.log(msg);
  })
})
