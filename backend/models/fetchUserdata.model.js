import { User } from "./user.model.js";


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
export {findEmail,registerUser,findUserName};
