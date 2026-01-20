import express from "express";
import {
  getBookings,
  getFavouriteList,
  getHome,
  getHomeDetails,
  getIndex,
  postAddtoFavourite,
  postRemoveFavourite,
} from "../controllers/storeController.js";

export const storeRouter = express.Router();

storeRouter.get("/", getIndex);
storeRouter.get("/home", getHome);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/favourite-list", getFavouriteList);

storeRouter.get("/home/:homeId", getHomeDetails);

storeRouter.post("/favourite-list", postAddtoFavourite);
storeRouter.post("/favourite-list/delete/:homeId", postRemoveFavourite);
