import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
dotenv.config();

import mongoose from 'mongoose';
import authRouter from './router/auth.router.js';
import userInfo from './router/userInfo.router.js';

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> console.log("database is connected to the uri"))
    .catch(err=>console.log(err));



const app=express();
app.use(express.json());
app.use(cors());


app.use('/auth',authRouter);
app.use('/protected',userInfo);
app.get('/',(req,res)=>{
    res.send("hellow world");

});

app.listen(process.env.PORT,()=>{
    console.log("server is running at"+process.env.PORT);
})
