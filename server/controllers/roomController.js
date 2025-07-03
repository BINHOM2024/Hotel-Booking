import hotelModel from "../models/hotel.js";
import { v2 as cloudinary } from "cloudinary";
import RoomModel from "../models/rooms.js";

export const createRoom = async (req, res) => {
  try {
    const { roomType, pricePerNight, amenities } = req.body;
    const checkHotel = await hotelModel.findOne({ owner: req.auth().userId });
    if (!checkHotel)
      return res.json({ success: false, message: "no hotel found" });
    const uploadImages = req.files.map(async (file) => {
      const response = await cloudinary.uploader.upload(file.path);
      return response.secure_url;
    });

    const images = await Promise.all(uploadImages);
    await RoomModel.create({
      hotel: checkHotel._id,
      roomType,
      pricePerNight: +pricePerNight,
      amenities: JSON.parse(amenities),
      images,
    });
    res.json({ success: true, message: "Room created successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const getRooms = async (req, res) => {
  try {
    const rooms = await RoomModel.find({ isAvailable: true })
      .populate({
        path: "hotel",
        populate: {
          path: "owner",
          select: "image",
        },
      })
      .sort({ createdAt: -1 });

    res.json({ success: true, rooms });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getOwnerRooms = async (req, res) => {
  try {
    const hotelData = await hotelModel.findOne({ owner: req.auth().userId });
    const rooms = await RoomModel.find({ hotel: hotelData._id }).populate(
      "hotel"
    );
    res.json({ success: true, rooms });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const toggleRoomAvailable = async (req, res) => {
  try {
    const { roomId } = req.body;
    const roomData = await RoomModel.findById(roomId);
    roomData.isAvailable = !roomData.isAvailable;
    await roomData.save();
    res.json({ success: true, message: "room availability updated" });
  } catch (error) {
      console.log(error.message)
    res.json({ success: false, message: error.message });
  }
};
