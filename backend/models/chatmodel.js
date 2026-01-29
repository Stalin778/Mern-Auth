import mongoose from "mongoose";

const chatSchema=new mongoose.Schema({
    roomId:{
        type:String,
        
        required:true,
    },
    
    senderId:{
        type:String,
        required:true,
    },
    
    message:{
        type:String,
        required:true,
        trim:true,
    },
    

},{
        timestamps:true
    })
const Chat=mongoose.model('Chat',chatSchema);
export default Chat;