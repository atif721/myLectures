import { Home } from "../models/home.js";
import { Favourite } from "../models/favourite.js";

export const getIndex = (req, res, next) => {
  Home.fetchAll()
    .then((registeredHomes) => {
      res.render("store/index", { registeredHomes: registeredHomes, pageTitle: "AirBnB Home", currentPage: "home" });
    })
    .catch((err) => {
      console.log("Error Fetching Homes", err);
    });
};

export const getHome = (req, res, next) => {
  Home.fetchAll()
    .then((registeredHomes) => {
      res.render("store/home-list", {
        registeredHomes: registeredHomes,
        pageTitle: "Home List",
        currentPage: "home-list",
      });
    })
    .catch((err) => {
      console.log("Error Fetching Homes", err);
    });
};

export const getBookings = (req, res, next) => {
  res.render("store/bookings", { pageTitle: "My Bookings", currentPage: "bookings" });
};

export const getFavouriteList = (req, res, next) => {
  Favourite.getFavourites().then((favourites) => {
    favourites = favourites.map((fav) => fav.houseId);
    console.log(favourites);
    Home.fetchAll()
      .then((registeredHomes) => {
        const favouriteHomes = registeredHomes.filter((home) => favourites.includes(home._id.toString()));
        console.log("This is favourite", favouriteHomes);
        console.log("This is registeredHomes", registeredHomes);
        res.render("store/favourite-list", {
          favouriteHomes: favouriteHomes,
          pageTitle: "My Favourites",
          currentPage: "favourites",
        });
      })
      .catch((err) => {
        console.log("Error Fetching Homes", err);
      });
  });
};

export const postAddtoFavourite = (req, res, next) => {
  const homeId = req.body.id;
  const fav = new Favourite(homeId);
  fav
    .save()
    .then((result) => {
      console.log("fav added", result);
    })
    .catch((err) => {
      console.log("Error while marking favourite");
    })
    .finally(() => {
      res.redirect("/favourite-list");
    });
};

export const postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId)
    .then((result) => {
      console.log("fav added", result);
    })
    .catch((err) => {
      console.log("Error while marking favourite");
    })
    .finally(() => {
      res.redirect("/favourite-list");
    });
};

export const getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("home details not found");
      res.redirect("/home");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Details",
        currentPage: "Home",
      });
    }
  });
};
