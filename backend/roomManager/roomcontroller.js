import mongoose from 'mongoose';
import Room from '../models/roomModel.js';
import Chat from '../models/chatmodel.js';

const findroom=async(data)=>{
     try {
      const room = await Room.findOne({ roomId: data.roomId });

      if (room) {
        console.log("room found");
        return {
          success: true,
          message: "room found"
        }

      }
      else {
        return {
          success: false,
          message: "room not found"
        }
      }

    } catch (err) {
      return {
        success: false,
        message: "internal server error"
      }

    }
}
export {findroom};
const createroom=async(data)=>{
    try {
      const roomexist = await Room.findOne({ roomId: data.roomId });

      if (roomexist) {
        return {
          success: false,
          message: "room already exists"
        }
      }
      else {

        const newRoom = new Room({
          roomId: data.roomId,
          ownerId: data.ownerId,
        })

        await newRoom.save();
        return {
          success: true,
          message: "room created successfully"

        }
      }
    }
    catch (err) {
      return {
        success: false,
        message: "internal server error"
      }
    }
}
export {createroom}
const addMemberToRoom = async (roomId, userId) => {
  const room = await Room.findOneAndUpdate(
    { roomId },
    { $addToSet: { members: userId } }, // prevents duplicates
    { new: true }
  );

  return room;
};
export {addMemberToRoom}