import { findUserName } from "../models/fetchUserdata.model.js";


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
export {fetchUserdata };