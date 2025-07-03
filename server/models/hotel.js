import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  { 
    name: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    owner: { type: Object, required: true, ref: "User" },
    city: { type: String, required: true },
  },
  { timestamps:true }
);
hotelSchema.index(
  { name: 1, address: 1, contact: 1, city: 1 },
  { unique: true }
);
const hotelModel = mongoose.model("Hotel", hotelSchema);
export default hotelModel;
