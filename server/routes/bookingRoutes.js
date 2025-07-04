import express from "express"
import { checkAvailabilityAPI, createBooking, getHotelBookings, getUserBooking, stripePayment } from "../controllers/bookingController.js"
import userAuth from "../middleware/userAuth.js"

const bookingRouter = express.Router()

bookingRouter.post("/check-availability",checkAvailabilityAPI)
bookingRouter.post("/book",userAuth,createBooking)
bookingRouter.get("/user",userAuth,getUserBooking)
bookingRouter.get("/hotel", userAuth, getHotelBookings)


bookingRouter.post("/stripe-payment", userAuth, stripePayment)

export default bookingRouter