import { IncomingMessage, ServerResponse } from "http";

/**
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */
import { Home } from "../models/home.js";

export const getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", { registeredHomes, pageTitle: "AirBnB Home", currentPage: "home" })
  );
};

export const getHome = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", { registeredHomes, pageTitle: "Home List", currentPage: "home-list" })
  );
};

export const getBookings = (req, res, next) => {
  res.render("store/bookings", { pageTitle: "My Bookings", currentPage: "bookings" });
};

export const getFavourtieList = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/favourite-list", { registeredHomes, pageTitle: "Favourite Homes", currentPage: "favourites" })
  );
};
