import { fetchUserdata, fetchUserRealtions,fetchUsers, sendReqService } from "../service/userInfo.service.js";


const userInfoController=async(req,res)=>{
    
    const userReq=req.user;
    console.log(userReq.id);
    console.log(userReq);
    
    try{
        
        const userData=await fetchUserdata(userReq.id);

        
        res.status(201).json({success:true,message:"user info fetched successfully",userData})

    }catch(err){
        console.log(err);
        res.status(500).json({success:false,message:err.message});

    }
}
const userRelationcontroller=async(req,res)=>{
    const user_id=req.user.id;
    try{
        
        const userRelations=await fetchUserRealtions(user_id);
    
        res.status(201).json({success:true,message:"user relations fetched successfully",userRelations})
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
}
const usersController=async(req,res)=>{
    const username=req.query.username;
   
    try{
        const users=await fetchUsers(username);
        res.status(201).json({success:true,message:"users fetched successfully",users});
    }catch(err){
        res.status(500).json({success:false,message:err.message})
    }
}
const userFriendReqController=async(req,res)=>{
const user_id=req.user.id;
const req_data={requester:req.body.friend_id,requestee:user_id}
try{
  
    const user=await sendReqService(req_data);

}catch(err){
    res.status(500).json({success:false,message:err})
}
}
export {userInfoController,userRelationcontroller,usersController,userFriendReqController};









