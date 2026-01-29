import { Server } from 'socket.io';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import Chat from '../models/chatmodel.js';
import Room from '../models/roomModel.js';
import { addMemberToRoom, createroom, findroom } from '../roomManager/roomcontroller.js';


mongoose
  .connect(process.env.MONGO_CHAT_URI)
  .then(() => console.log("chat database is active"))
  .catch(err => console.log(err));

const io = new Server(3000, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})
console.log(io.sockets.adapter.rooms)
io.on("connection", (socket) => {
  console.log("user connected" + socket.id);
  console.log(socket.handshake.auth.username);

 //create messages
socket.on("create room", async (data, callback) => {
try{
  const result=await createroom(data);
  callback(result);
}
catch(err){
callback({success:false,message:"internal server error"})
}
  })
  //search room
  socket.on("search room", async(data, callback) => {
   try {
    const result = await findroom(data);
    callback(result);
  } catch (err) {
    callback({ success: false, message: "internal server error" });
  }
  })
//join room
  socket.on("join room", async(data,callback) => {
        socket.join(data.roomId);
      const room=await addMemberToRoom(data.roomId,data.userId);
      if(!room){
        return callback({
          success:false,
          message:"room not found"
        })
      }
      else{
        return callback({
          success:true,
          message:"joined room successfully"
        })
      }

  })
  socket.on("get messages",async(roomId,callback)=>{
    
    try{
    const res= await Chat.find({roomId:roomId.roomId}).sort({createdAt:1})
      
      console.log(res);
        return callback({
          success:true,
          obj:res
        })
      

    }catch(err){
      console.log(err);
      return callback({
        
        success:false,
        obj:{res:'server issue try again later'}
      })

    }
    
  })
socket.on("message",(msg,callback)=>{
  


try{
  const newmsg= Chat({roomId:msg.roomId,senderId:msg.senderId,message:msg.message});
  newmsg.save();


  io.to(msg.roomId).emit("message",(msg))
  
  return callback(({
    success:true,
    message:"message sent successfully"
  }))

}
catch(err){
  console.log(err);
  return callback({

    success:false,
    message:'internal server error'
  })
}

})



})
