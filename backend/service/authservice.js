import dotenv from 'dotenv';

import { findEmail, registerUser } from '../models/fetchUserdata.model.js';
dotenv.config({path:'../.env'});
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const registerService=async(userData)=>{
const {username,email,password}=userData;

    try{
    if(!username || !email || !password) throw new Error("all fileds are required");
    const lowerEmail=email.toLowerCase();
    const emailExist=await(findEmail(lowerEmail));
    if(emailExist){
        throw new Error("User already exists");

    }   
    
        const hashedPassword=await bcrypt.hash(password,10);
        await registerUser({username,email:lowerEmail,password:hashedPassword});
        return {message:"User registered successfully"};
        
    

    }
    catch(err){
        console.log(err);

        throw err;
    }

}
const loginService=async(userData)=>{
    const{email,password}=userData;
    
        if(!email || !password) throw new Error("all fileds are required");
        const user=await findEmail(email);
        if(!user){
            throw new Error("Invalid credentials");


        }
        const matchPass=await bcrypt.compare(password,user.password);
        if(!matchPass){
            throw new Error("invalid credentials");

        }
        const token=jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:'3h'});
        return token;

    
    
        
}
export {registerService,loginService};