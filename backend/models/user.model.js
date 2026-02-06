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


const UserRelationSchema = new mongoose.Schema(
  {
    UserIds: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }],
      validate: {
        validator: v => Array.isArray(v) && v.length === 2,
        message: 'UserIds must contain exactly two users'
      },
      required: true
    },

    lastMsg: {
      type: String,
      default: ''
    },

    reqStatus: {
      type: String,
      enum: ['accepted', 'pending', 'blocked'],
      default: 'pending'
    }
  },
  { timestamps: true }
);

const UserRelation=mongoose.model("UserRelation",UserRelationSchema);
export {UserRelation}

const MessageSchema=mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    conversationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserRelation',
        required:true
    },
    message:{
        type:String,
        required:true
        
    }
},{timestamps:true})
const Message=mongoose.model("Message",MessageSchema);
export {Message};

   