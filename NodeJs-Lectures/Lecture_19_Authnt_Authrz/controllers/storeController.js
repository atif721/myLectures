import Favourite from "../models/favourite.js";
import Home from "../models/home.js";

export const getIndex = (req, res, next) => {
  Home.find()
    .then((registeredHomes) => {
      res.render("store/index", {
        registeredHomes: registeredHomes,
        pageTitle: "AirBnB Home",
        currentPage: "home",
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

export const getFavouriteList = (req, res, next) => {
  Favourite.find()
    .populate("houseId")
    .then((favouriteIds) => {
      const favouriteHomes = favouriteIds.map((fav) => fav.houseId);
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
        isLoggedIn: req.isLoggedIn,
        user: req.session.user,
      });
    })
    .catch((err) => {
      console.log("Error Fetching Homes", err);
    });
};

export const postAddtoFavourite = (req, res, next) => {
  const homeId = req.body.id;
  Favourite.findOne({ houseId: homeId })
    .then((existingFav) => {
      if (existingFav) {
        return res.redirect("/favourite-list");
      }
      const fav = new Favourite({ houseId: homeId });
      return fav.save();
    })
    .then(() => {
      res.redirect("/favourite-list");
    })
    .catch((err) => {
      console.log("Error while marking favourite", err);
    });
};

export const postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({ houseId: homeId })
    .then((result) => {
      console.log("fav added", result);
    })
    .catch((err) => {
      console.log("Error while removing favourite", err);
    })
    .finally(() => {
      res.redirect("/favourite-list");
    });
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
