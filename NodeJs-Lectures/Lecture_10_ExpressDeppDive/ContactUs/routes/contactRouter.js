import express from "express";
import path from "path";
import { rootDir } from "../utils/pathUtil.js";

export const contactRouter = express.Router();

contactRouter.get("/contact-us", (req, res, next) => {
  console.log(`Handling /contact-us for GET`, req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "addedHome.html"));
});
