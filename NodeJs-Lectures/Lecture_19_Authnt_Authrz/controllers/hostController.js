import Home from "../models/home.js";

export const getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add New Home",
    currentPage: "add-home",
    editing: false,
    isLoggedIn: req.isLoggedIn,
  });
};

export const getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found for editing");
      return res.redirect("/host/host-home-list");
    }
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit Home",
      currentPage: "host-homes",
      editing: editing,
      isLoggedIn: req.isLoggedIn,
    });
  });
};

export const getHostHome = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Home List",
      currentPage: "host-homes",
      isLoggedIn: req.isLoggedIn,
    });
  });
};

export const postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoURL, description } = req.body;

  const home = new Home({ houseName, price, location, rating, photoURL, description });

  home
    .save()
    .then(() => {
      console.log("Home Saved Successfully");
      res.render("host/added-home", {
        pageTitle: "Home Added",
        currentPage: "homes added",
        isLoggedIn: req.isLoggedIn,
      });
    })
    .catch((err) => {
      console.log("Error adding home", err);
    });
};

export const postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoURL, description } = req.body;

  Home.findById(id)
    .then((home) => {
      if (!home) {
        console.log("Home not found for editing");
        return res.redirect("/host/host-home-list");
      }
      home.houseName = houseName;
      home.price = price;
      home.location = location;
      home.rating = rating;
      home.photoURL = photoURL;
      home.description = description;

      return home.save();
    })
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log("Error adding home", err);
    });
};

export const postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findByIdAndDelete(homeId)
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log("Error while deleting home", err);
    });
};
