import express from "express"
import userAuth from "../middleware/userAuth.js"
import userController from "../controllers/userController.js"

const userRouter = express.Router()
userRouter.get("/", userAuth, userController)

export default userRouter