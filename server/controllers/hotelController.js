import userModel from "../models/user.js";
import hotelModel from "../models/hotel.js";

const registerHotel = async (req, res) => {
  try {
    const { name, address, contact, city } = req.body.hotelRegister;
    const owner = req.user._id;
    const checkHotel = await hotelModel.findOne({ owner });
    if (checkHotel)
      return res.json({ success: false, message: "Hotel Already Registered" });
    await hotelModel.create({ name, address, contact, city, owner });
    await userModel.findByIdAndUpdate(owner, { role: "hotelOwner" });
    res.json({ success: true, message: "Hotel Registered Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
export default registerHotel;
