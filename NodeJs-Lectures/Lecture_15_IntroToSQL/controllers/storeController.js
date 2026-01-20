import { Home } from "../models/home.js";
import { Favourite } from "../models/favourite.js";

export const getIndex = (req, res, next) => {
  Home.fetchAll()
    .then(([rows]) => {
      res.render("store/index", { registeredHomes: rows, pageTitle: "AirBnB Home", currentPage: "home" });
    })
    .catch((err) => {
      console.log("Error Fetching Homes", err);
    });
};

export const getHome = (req, res, next) => {
  Home.fetchAll()
    .then(([rows]) => {
      res.render("store/home-list", { registeredHomes: rows, pageTitle: "Home List", currentPage: "home-list" });
    })
    .catch((err) => {
      console.log("Error Fetching Homes", err);
    });
};

export const getBookings = (req, res, next) => {
  res.render("store/bookings", { pageTitle: "My Bookings", currentPage: "bookings" });
};

export const getFavouriteList = (req, res, next) => {
  Favourite.getFavourites((favourites) => {
    const favouriteIds = favourites.map((id) => parseInt(id));

    Home.fetchAll()
      .then(([rows]) => {
        const favouriteHomes = rows.filter((home) => favouriteIds.includes(home.id));

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
  console.log("Came to add to favourite", req.body);
  Favourite.addToFavourite(req.body.id, (error) => {
    if (error) {
      console.log("Error while marking favourite");
      return res.redirect("/favourite-list");
    }
  });
  res.redirect("/favourite-list");
};

export const postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId, (error) => {
    if (error) {
      console.log("Error while removing", error);
    }
    res.redirect("/favourite-list");
  });
};

export const getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then(([homes]) => {
    const home = homes[0];
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
