// Core Modules
const path = require("path");

// External Module
const express = require("express");
const storeRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");

storeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = storeRouter;
