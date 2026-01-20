import express from "express";
import path from "path";
import { rootDir } from "../utils/pathUtil.js";

export const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", { registeredHomes, pageTitle: "airbnb add home", currentPage: "addHome" });
});

export const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  registeredHomes.push(req.body);

  res.render("addedHome", { registeredHomes, pageTitle: "airbnb home list", currentPage: "addedHome" });
});
