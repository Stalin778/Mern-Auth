import express from "express";
import auth from '../middleware/auth.js';
import User from "../modules/db.js";
const prouter=express.Router();

prouter.post('/a',auth,(req,res)=>{
    res.json({message:"this is protected router"});
});

prouter.get('/profile',auth,async(req,res)=>{

    const user = await User.findById(req.user.id).select("-password");
  res.json(user);
})

export default prouter;