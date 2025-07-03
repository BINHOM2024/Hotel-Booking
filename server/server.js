import express from "express"
import "dotenv/config"
import cors from "cors"
import {clerkMiddleware} from "@clerk/express"
import connectToDB from "./configs/db.js"
import userRouter from "./routes/userRoute.js"
import hotelRouter from "./routes/hotelRoutes.js"
import connectToCloudinary from "./configs/cloudinary.js"
import roomRouter from "./routes/roomRoutes.js"
import bookingRouter from "./routes/bookingRoutes.js"
import stripeWebHooks  from "./controllers/stripeWebHooks.js"
import webHookRouter from "./routes/webHookRoute.js"

const PORT = process.env.PORT || 2030

connectToDB();
connectToCloudinary()

const app = express()
app.use("/api/clerk", webHookRouter);
app.use(cors())
app.post(
  "/api/stripe",
  express.raw({ type: "application/json" }), 
  stripeWebHooks
);

app.use(express.json())
app.use(clerkMiddleware())
app.use("/api/user",userRouter)
app.use("/api/hotels",hotelRouter)
app.use("/api/rooms",roomRouter)
app.use("/api/bookings",bookingRouter)


app.get("/", (req, res) => res.send("welcome to hotel booking"))
app.listen(PORT,()=>console.log(`server is running on port: ${PORT}`))