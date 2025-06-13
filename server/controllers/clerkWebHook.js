import { json } from "express";
import userModel from "../models/user.js";
import { Webhook } from "svix";

const clerkWebHook = async (req, res) => {
  try {
    const wHook = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };
    await wHook.verify(JSON.stringify(req.body), headers);

      const { data, type } = req.body;
      const userData = {
          _id:data.id,
          userName:data.first_name + " " + data.last_name,
          email:data.email_addresses[0].email_address,
          image:data.image_url,
      }

      switch (type) {
          case "user.created": {
              await userModel.create(userData)
              break
          }
          case "user.updated": {
              await userModel.findByIdAndUpdate(data.id,userData)
              break
          }
          case "user.deleted": {
              await userModel.findByIdAndUpdate(data.id)
              break
          }
          default:
              
      }
      res.json({success:true,message:"webHook Received"})
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default clerkWebHook
