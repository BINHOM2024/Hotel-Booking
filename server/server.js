import express from "express"
import "dotenv/config"
import cors from "cors"
import {clerkMiddleware} from "@clerk/express"
import connectToDB from "./configs/db.js"
import clerkWebHook from "./controllers/clerkWebHook.js"

const PORT = process.env.PORT || 2030

const app = express()
app.use(cors())
app.use(express.json()) 
app.use(clerkMiddleware())
app.use("/api/clerk",clerkWebHook)
connectToDB()


app.get("/", (req, res) => res.send("welcome to hotel booking"))
app.listen(PORT,()=>console.log(`server is running on port: ${PORT}`))