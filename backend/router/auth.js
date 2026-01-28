import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import User from '../models/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
dotenv.config();

const router=express.Router();


router.post('/register',async(req,res)=>{
   
    const{username,email,password}=req.body;
    try{
        if(!username || !email || !password) return res.status(400).json({message:"all fields are required"});
       const normalemail=email.toLowerCase();
        const user=await User.findOne({email});
        if(user) return res.status(400).json({message:"user already exists"});
        const hashedpass=await bcrypt.hash(password,10);
        const newUser=new User({username,email:normalemail,password:hashedpass});
        await newUser.save();
        res.status(201).json({message:"new user registered succesfully"});
    }
    catch(error){
        res.status(500).json({message:"internal server error"});

    
    }
})
router.post('/login',async(req,res)=>{
    
    const{email,password}=req.body;
    
    try{
        if(!email || !password) return res.status(400).json({message:"all fields are required"});
        const user=await User.findOne({email});
      
        if(!user){
            return res.status(404).json({message:"user not found"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({message:"invalid credintials"});
        }
        const token=jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({token});
      

    }
    catch(e){
        res.status(500).json({message:"internal server error"});
    }
})



export default router;
