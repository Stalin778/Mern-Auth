import { User, UserRelation } from "./user.model.js";
import mongoose  from "mongoose";

const registerUser=async(userData)=>{
    const{username,email,password}=userData;

    try{
           const newUser=new User({username,email,password});
         await newUser.save();
           return;
        
            }catch(err){
                throw err;

            }
}


const findEmail=async(email)=>{
    try{
        const user=await User.findOne({email});
        return user;
    }catch(err){
        throw err;
    }
}
const findUserName=async(user_id)=>{
    
        const user=await User.findOne({_id:user_id})  
        if(!user) throw new Error("user not found");
        const data={
            id:user_id,
            username:user.username,
            profileImg:user.profileImg,
            userstatus:user.userstatus
        }
        return data;
    
       
    
    
    
    

}
const findUserRelations=async(user_id)=>{
    
    
    const user=await UserRelation.find({UserIds:new mongoose.Types.ObjectId(user_id)});
    console.log(user);
    if(user.length===0) throw new Error("No relations");
    return user;
}
const findUsers=async(username)=>{
    console.log(username);
    const user=await User.find({username:{$regex:username,$options:"i"}},{username:1,profileImg:1});
    if(!user) throw new Error("user not found");
    return user;

}
const reqModel = async (req_data) => {
  try {
    console.log(req_data);
    if (req_data.requester === req_data.requestee) {
      throw new Error("Cannot send request to yourself");
    }

    const userIds = [
      new mongoose.Types.ObjectId(req_data.requester),
      new mongoose.Types.ObjectId(req_data.requestee),
    ].sort();

    const fReq = new UserRelation({
      UserIds: userIds,
      lastMsg: "",
      reqStatus: "pending",
    });

    await fReq.save();
    return fReq;

  } catch (err) {
    if (err.code === 11000) {
      throw new Error("Relation already exists");
    }
    throw err;
  }
};
export {findEmail,registerUser,findUserName,findUserRelations,findUsers,reqModel};
