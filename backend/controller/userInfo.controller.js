import { fetchUserdata } from "../service/userInfo.service.js";


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
export {userInfoController};









