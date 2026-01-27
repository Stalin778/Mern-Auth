import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
dotenv.config();
import router from './router/auth.js';
import mongoose from 'mongoose';
import prouter from './router/protected.js';

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> console.log("database is connected to the uri"))
    .catch(err=>console.log(err));



const app=express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    console.log("somethins");
    res.send("hellow world");

})
app.use('/auth',router);
app.use('/protected',prouter);

app.get('/',(req,res)=>{
    res.send("hellow world");

});

app.listen(process.env.PORT,()=>{
    console.log("server is running at"+process.env.PORT);
})
