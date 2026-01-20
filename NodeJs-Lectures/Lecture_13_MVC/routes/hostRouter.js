import express from "express";

import { getAddHome, getHostHome, postAddHome } from "../controllers/hostController.js";

export const hostRouter = express.Router();

hostRouter.get("/add-home", getAddHome);
hostRouter.post("/add-home", postAddHome);

hostRouter.get("/host-home-list", getHostHome);
