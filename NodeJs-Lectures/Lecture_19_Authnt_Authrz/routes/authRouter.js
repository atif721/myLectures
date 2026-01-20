import express from "express";
import authRouters from "../controllers/authController.js";

export const authRouter = express.Router();

authRouter.get("/signup", authRouters.getSignup);
authRouter.post("/signup", authRouters.postSignup);

authRouter.get("/login", authRouters.getLogin);
authRouter.post("/login", authRouters.postLogin);

authRouter.post("/logout", authRouters.postLogout);