import { findUserName, findUserRelations, findUsers, reqModel } from "../models/fetchUserdata.model.js";


const fetchUserdata =async(user_id)=>{
  try{
    const data=await findUserName(user_id);
   console.log(data);
    return data;
    

  }catch(err){
    console.log(err);
    throw err;
  }
  

}

const fetchUserRealtions=async(user_id)=>{
  try{
    
    const relationdata=await findUserRelations(user_id);
    return relationdata;
  }catch(err){
    throw err;
  }
  
}
const fetchUsers=async(username)=>{
    try{
    const resusernames=await findUsers(username);
  console.log(resusernames);
    return resusernames;
    }catch(err){
      throw err;

    }

  
   
  }
const sendReqService=async(req_data)=>{

  try{

 
  const sendReq=await reqModel(req_data);
  return sendReq;

  }catch(err){
    console.log(err);
    throw err;
  }
}
export {fetchUserdata,fetchUserRealtions,fetchUsers,sendReqService};