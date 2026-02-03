import express from 'express';
import auth from '../middleware/auth.js'; 
import {userInfoController} from '../controller/userInfo.controller.js'

const userInfo=express.Router();

userInfo.get("/profile",auth,userInfoController);

export default userInfo;