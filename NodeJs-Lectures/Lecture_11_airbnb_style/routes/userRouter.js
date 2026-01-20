import express from "express";
import path from "path";
import { rootDir } from "../utils/pathUtil.js";
export const storeRouter = express.Router();

storeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});
