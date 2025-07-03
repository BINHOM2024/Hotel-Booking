import userModel from "../models/user.js";
import {clerkClient} from "@clerk/express"
const userAuth = async (req, res, next) => {
  try {
    const { userId } = req.auth();
    if (!userId)
      return res.json({ success: false, message: "not Authenticated" });
    const user = await userModel.findById(userId);
    if (!user) {
        const clerkUser = await clerkClient.users.getUser(userId); 
      const newUser = {
        _id: clerkUser.id,
        userName: clerkUser.firstName + " " + clerkUser.lastName,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        image: clerkUser.imageUrl,
      };

      user = await userModel.create(newUser);
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
export default userAuth;
