import express from "express"
import clerkWebHook from "../controllers/clerkWebHook.js";

const webHookRouter = express.Router();

// Use raw body parser ONLY for Clerk webhooks
webHookRouter.post("/", express.raw({ type: "application/json" }),clerkWebHook);

export default webHookRouter;
