// Core Modules
const path = require("path");

// External Module
const express = require("express");
const storeRouter = express.Router();

// Local Module
const { registeredHomes } = require("./hostRouter");

storeRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  res.render("home", { registeredHomes: registeredHomes, pageTitle: "airbnb Home", currentPage: "Home" });
});

module.exports = storeRouter;
