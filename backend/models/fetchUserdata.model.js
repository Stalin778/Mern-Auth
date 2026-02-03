import { User } from "./user.model.js";
import { UserRelation } from "./user.model.js";

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
            username:user.username,
            profileImg:user.profileImg,
            userstatus:user.userstatus
        }
        return data;
    
       
    
    
    
    

}
const findUserRelations=async(user_id)=>{
    const user=await UserRelation.findOne({_id:user_id});
    if(!user) throw new Error("user not found");
    return user;
}
const findUsers=async(username)=>{
    console.log(username);
    const user=await User.findOne({username:username},{username:1,profileImg:1});
    if(!user) throw new Error("user not found");
    return user;

}
export {findEmail,registerUser,findUserName,findUserRelations,findUsers};
