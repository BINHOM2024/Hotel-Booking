import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Hotel",
    },
    roomType: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    amenities: [
      {
        type: Object,
        ref: "User",
        required: true,
      },
    ],
    images: [{ type: String }],
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const RoomModel = mongoose.model("Room", roomSchema);
export default RoomModel;
