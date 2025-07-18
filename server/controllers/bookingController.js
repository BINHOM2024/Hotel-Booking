import transporter from "../configs/nodeMailer.js";
import bookingModel from "../models/booking.js";
import hotelModel from "../models/hotel.js";
import RoomModel from "../models/rooms.js";
import stripe from "stripe";

const checkAvailability = async ({ checkInDate, checkOutDate, room }) => {
  try {
    const bookings = await bookingModel.find({
      room,
      checkInDate: { $lte: checkOutDate },
      checkOutDate: { $gte: checkInDate },
    });
    const isAvailable = bookings.length === 0;
    return isAvailable;
  } catch (error) {
    console.log(error.message);
  }
};

export const checkAvailabilityAPI = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate } = req.body;
    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room,
    });
    res.json({ success: true, isAvailable });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const createBooking = async (req, res) => {
  try {
    const user = req.user._id;
    const { room, checkInDate, checkOutDate, guests} = req.body;
    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room,
    });
    if (!isAvailable)
      return res.json({ success: false, message: "Room is not available" });
    const roomData = await RoomModel.findById(room).populate("hotel");
    let totalPrice = roomData.pricePerNight;
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
    totalPrice *= nights;
    const booking = await bookingModel.create({
      user,
      room,
      hotel: roomData.hotel._id,
      guests: +guests,
      checkInDate,
      checkOutDate,
      totalPrice,
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: req.user.email,
      subject: "Hotel Booking Details",
      html: `
            <h2>Your Booking Details</h2>
            <p>Dear ${req.user.userName},</p>
            <p>Thank you for your booking! Here are your details:</p>
            <ul>
            <li><strong>Booking ID:</strong> ${booking._id}</li>
            <li><strong>Hotel Name:</strong> ${roomData.hotel.name}</li>
            <li><strong>Location:</strong> ${roomData.hotel.address}</li>
            <li><strong>Date:</strong> ${booking.checkInDate.toDateString()} - ${booking.checkOutDate.toDateString()}</li>
            <li><strong>Day(s):</strong> for ${nights} day(s)</li>
            <li><strong>Booking Amount:</strong> $ ${booking.totalPrice }</li>
            </ul>
           <p>We look forward to welcoming you!</p>
           <p>If you need to make any changes, feel free to contact us.</p>
           <p>Kind Regards,</p>
           <p>YTT</p> 
            `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Booking created successfully" });
  } catch (error) {
    res.json({ success: false, message: "Failed to create booking" });
  }
};

export const getUserBooking = async (req, res) => {
  try {
    const user = req.user._id;
    const bookings = await bookingModel
      .find({ user })
      .populate("room hotel")
      .sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getHotelBookings = async (req, res) => {
  try {
    const hotel = await hotelModel.findOne({ owner: req.user._id });
    if (!hotel) return res.json({ success: false, message: "No hotel found" });
    const bookings = await bookingModel
      .find({ hotel: hotel._id })
      .populate("room hotel user")
      .sort({ createdAt: -1 });
    const totalBookings = bookings.length;
    const totalRevenue = bookings.reduce(
      (acc, booking) => acc + booking.totalPrice,
      0
    );
    res.json({
      success: true,
      dashboardData: { totalBookings, totalRevenue, bookings },
    });
  } catch (error) {
    res.json({ success: false, message: "failed to fetch bookings" });
  }
};

export const stripePayment = async (req, res) => {
  try {
    const { bookingId } = req.body;
    const booking = await bookingModel.findById(bookingId);
    const roomData = await RoomModel.findById(booking.room).populate("hotel");
    const totalPrice = booking.totalPrice;
    const { origin } = req.headers;

    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

    const line_items = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: roomData.hotel.name,
          },
          unit_amount: totalPrice * 100,
        },
        quantity: 1,
      },
    ];

    const session = await stripeInstance.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/loader/my-bookings`,
      cancel_url: `${origin}/my-bookings`,
      metadata: {
        bookingId,
      },
    });
    res.json({ success: true, url: session.url });
  } catch (error) {
    res.json({ success: false, message: "Payment Failed" });
  }
};
