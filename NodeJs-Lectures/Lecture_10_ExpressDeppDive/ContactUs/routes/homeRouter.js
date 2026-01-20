import express from "express";
import path from "path";
import { rootDir } from "../utils/pathUtil.js";
export const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
  console.log(`Handling / for GET`, req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "home.html"));
});
