import mongoose from "mongoose";

const connectToDB = async() => {
  try {
    mongoose.connection.on("connected", () => console.log("database connected"));
    mongoose.connect(`${process.env.MONGODB_URL}/hotel-booking`);
  } catch (error) {
    console.log(error.message);
  }
};
export default connectToDB;
