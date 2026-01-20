import { Home } from "../models/home.js";

export const getAddHome = (req, res, next) => {
  res.render("host/edit-home", { pageTitle: "Add New Home", currentPage: "add-home", editing: false });
};

export const getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId).then(([homes]) => {
    const home = homes[0];
    if (!home) {
      console.log("Home not found for editing");
      return res.redirect("/host/host-home-list");
    }
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit Home",
      currentPage: "host-homes",
      editing: editing,
    });
  });
};

export const getHostHome = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes, fields]) => {
    res.render("host/host-home-list", { registeredHomes, pageTitle: "Host Home List", currentPage: "host-homes" });
  });
};

export const postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoURL, description } = req.body;

  const home = new Home(houseName, price, location, rating, photoURL, description);

  home
    .save()
    .then(() => {
      res.render("host/added-home", {
        pageTitle: "Home Added",
        currentPage: "homes added",
      });
    })
    .catch((err) => {
      console.log("Error adding home", err);
    });
};

export const postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoURL, description } = req.body;

  const home = new Home(houseName, price, location, rating, photoURL, description);
  home.id = id;
  home
    .save()
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log("Error adding home", err);
    });
};

export const postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.deleteById(homeId)
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {});
};
