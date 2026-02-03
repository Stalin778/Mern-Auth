import { findUserName, findUsers } from "../models/fetchUserdata.model.js";
import { findUserRelations } from "../models/fetchUserdata.model.js";
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
  
    const relationdata=findUserRelations(user_id);
    return relationdata;
  
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

export {fetchUserdata,fetchUserRealtions,fetchUsers};