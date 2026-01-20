import { Home } from "../models/home.js";

export const getAddHome = (req, res, next) => {
  res.render("host/add-home", { pageTitle: "Add New Home", currentPage: "add-home" });
};

export const getHostHome = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("host/host-home-list", { registeredHomes, pageTitle: "Host Home List", currentPage: "host-homes" })
  );
};

export const postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoURL } = req.body;

  const home = new Home(houseName, price, location, rating, photoURL);

  home.save();

  res.render("host/added-home", { pageTitle: "AirBnB Home List", currentPage: "added-home" });
};
