import express from "express";
import path from "path";
import { rootDir } from "../utils/pathUtil.js";

export const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
  const value = req.body;
  console.log(value);
  res.sendFile(path.join(rootDir, "views", "addedHome.html"));
});
