import express from "express"
import upload from "../middleware/uploadMiddleware.js"
import userAuth from "../middleware/userAuth.js"
import { createRoom, getOwnerRooms, getRooms, toggleRoomAvailable } from "../controllers/roomController.js"

const roomRouter = express.Router()
roomRouter.post("/", upload.array("images", 4), userAuth, createRoom)
roomRouter.get("/", getRooms)
roomRouter.get("/owner", userAuth, getOwnerRooms)
roomRouter.post("/toggle-availability",  userAuth, toggleRoomAvailable)

export default roomRouter