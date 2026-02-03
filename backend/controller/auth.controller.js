
import {registerService,loginService} from '../service/authservice.js';

const registerController=async(req,res)=>{
    const userData=req.body;
    try{
    await registerService(userData);
    return res.status(201).json({success:true,message:"user registered successfull"});

    }catch(err){
        return res.status(500).json({success:false,message:err.message});
    }


}
const loginController=async(req,res)=>{
    const userData=req.body;
    try{
    const token= await loginService(userData);
        return res.status(200).json({success:true,message:"user logged in successfully",token})
    }catch(err){
        return res.status(500).json({success:false,message:err.message});
    }
}
export {registerController,loginController};