import Home from "../models/home.js";
import User from "../models/user.js";

export const getIndex = (req, res, next) => {
  Home.find()
    .then((registeredHomes) => {
      res.render("store/index", {
        registeredHomes: registeredHomes,
        pageTitle: "AirBnB Home",
        currentPage: "index",
        isLoggedIn: req.isLoggedIn,
        user: req.session.user,
      });
    })
    .catch((err) => {
      console.log("Error Fetching Homes", err);
    });
};

export const getHome = (req, res, next) => {
  Home.find()
    .then((registeredHomes) => {
      res.render("store/home-list", {
        registeredHomes: registeredHomes,
        pageTitle: "Home List",
        currentPage: "home-list",
        isLoggedIn: req.isLoggedIn,
        user: req.session.user,
      });
    })
    .catch((err) => {
      console.log("Error Fetching Homes", err);
    });
};

export const getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
    isLoggedIn: req.isLoggedIn,
    user: req.session.user,
  });
};

export const getFavouriteList = async (req, res, next) => {
  const userId = req.session.user._id;
  const user = await User.findById(userId).populate("favourites");
  try {
    res.render("store/favourite-list", {
      favouriteHomes: user.favourites,
      pageTitle: "My Favourites",
      currentPage: "favourites",
      isLoggedIn: req.isLoggedIn,
      user: req.session.user,
    });
  } catch (err) {
    console.log("Error Fetching Homes", err);
  }
};

export const postAddtoFavourite = async (req, res, next) => {
  const homeId = req.body.id;
  const userId = req.session.user._id;
  const user = await User.findById(userId);

  try {
    if (!user.favourites.includes(homeId)) {
      user.favourites.push(homeId);
      await user.save();
    }
  } catch (error) {
    console.log("Error while marking favourite", err);
  }

  res.redirect("/favourite-list");
};

export const postRemoveFavourite = async (req, res, next) => {
  const homeId = req.params.homeId;
  const userId = req.session.user._id;
  const user = await User.findById(userId);

  try {
    if (user.favourites.includes(homeId)) {
      user.favourites = user.favourites.filter((fav) => fav != homeId);
      await user.save();
    }
  } catch (error) {
    console.log("Error while marking favourite", err);
  }

  res.redirect("/favourite-list");
};

export const getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId)
    .then((home) => {
      if (!home) {
        console.log("home details not found");
        res.redirect("/home");
      } else {
        res.render("store/home-detail", {
          home: home,
          pageTitle: "Home Details",
          currentPage: "Home",
          isLoggedIn: req.isLoggedIn,
          user: req.session.user,
        });
      }
    })
    .catch((err) => {
      console.log("Error while getting home details", err);
    });
};
