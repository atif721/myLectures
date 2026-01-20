import express from "express";
import path from "path";
import { registeredHomes } from "./hostRouter.js";

export const storeRouter = express.Router();

storeRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  res.render("home", { registeredHomes, pageTitle: "airbnb home", currentPage: "home" });
});
