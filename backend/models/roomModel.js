import mongoose from "mongoose";

const roomSchema=new mongoose.Schema({
    roomId:{
        type:String,
        required:true,
        unique:true
    },
    ownerId:{
        type:String,
        required:true
    },
    members:{
        type:[String],

    }

},{
    timestamsps:true
})
const Room=mongoose.model('Room',roomSchema);
export default Room;
