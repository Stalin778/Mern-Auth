import express from 'express';
import auth from '../middleware/auth.js'; 
import {userInfoController, userRelationcontroller, usersController} from '../controller/userInfo.controller.js'

const userInfo=express.Router();

userInfo.get("/profile",auth,userInfoController);
userInfo.get("/relations",auth,userRelationcontroller);
userInfo.get("/users",auth,usersController);
export default userInfo;