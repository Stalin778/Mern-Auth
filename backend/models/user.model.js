import mongoose from 'mongoose';


const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    profileImg:{
        type:String,
        required:false,
        
    
    },
    userstatus:{
        type:String,
        required:false,
        default:"Busy"
    }
    
},{timestamps:true}) 
const User =mongoose.model('User',UserSchema);
export  {User};

const UserRelations=new mongoose.Schema({
    requester:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    status:{
        type:String,
        enum:['pending','accepted','blocked'],
        default:'pending'
    },
    actionBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        
    },
    lastmsg:{
        type:String,
        default:'',
    }


},{timestamps:true});
UserRelations.index({ requester: 1, receiver: 1 }, { unique: true });
const UserRelation=mongoose.model('UserRelation',UserRelations);
export {UserRelation};
const MessageSchema=mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    conversationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserRelation',
        required:true,
        
    },
    message:{
        type:String,
        required:true
        
    }
},{timestamps:true})
const Message=mongoose.model("Message",MessageSchema);
export {Message};

   