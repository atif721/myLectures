import express from "express";

import {
  getAddHome,
  getHostHome,
  postAddHome,
  getEditHome,
  postEditHome,
  postDeleteHome,
} from "../controllers/hostController.js";

export const hostRouter = express.Router();

hostRouter.get("/add-home", getAddHome);
hostRouter.post("/add-home", postAddHome);
hostRouter.get("/host-home-list", getHostHome);
hostRouter.get("/edit-home/:homeId", getEditHome);
hostRouter.post("/edit-home", postEditHome);
hostRouter.post("/delete-home/:homeId", postDeleteHome);
