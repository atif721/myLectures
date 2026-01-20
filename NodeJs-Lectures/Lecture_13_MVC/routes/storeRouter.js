import express from "express";
import { getBookings, getFavourtieList, getHome, getIndex } from "../controllers/storeController.js";

export const storeRouter = express.Router();

storeRouter.get("/", getIndex);
storeRouter.get("/home", getHome);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/favourite-list", getFavourtieList);
