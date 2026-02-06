import express from 'express';
import auth from '../middleware/auth.js'; 
import {userFriendReqController, userInfoController, userRelationcontroller, usersController} from '../controller/userInfo.controller.js'

const userInfo=express.Router();

userInfo.get("/profile",auth,userInfoController);
userInfo.get("/relations",auth,userRelationcontroller);
userInfo.get("/users",auth,usersController);
userInfo.post("/relations",auth,userFriendReqController);
export default userInfo;