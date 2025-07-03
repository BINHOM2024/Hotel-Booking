
import userModel from "../models/user.js";
import { Webhook } from "svix";



const clerkWebHook = async (req, res) => {
  try {
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const payloadString = req.body.toString(); 
    const { data, type } = wh.verify(payloadString, headers);

  
    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          userName: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          email: data.email_addresses?.[0]?.email_address || "",
          image: data.image_url || "",
        };
         await userModel.create(userData);
        break;
      }
      case "user.updated": {
        const userData = {
          _id: data.id,
          userName: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          email: data.email_addresses?.[0]?.email_address || "",
          image: data.image_url || "",
        };
        await userModel.findByIdAndUpdate(data.id, userData, { new: true });
        break; 
      }
      case "user.deleted":
        await userModel.findByIdAndDelete(data.id);
        break;
    }

    res.status(200).json({ success: true, message: "Webhook processed" });
  } catch (error) {
    console.error("Webhook error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

export default clerkWebHook