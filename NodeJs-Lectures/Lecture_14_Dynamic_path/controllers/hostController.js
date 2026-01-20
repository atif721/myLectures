import { Home } from "../models/home.js";

export const getAddHome = (req, res, next) => {
  res.render("host/edit-home", { pageTitle: "Add New Home", currentPage: "add-home", editing: false });
};

export const getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found for editing");
      return res.redirect("/host/host-home-list");
    }

    console.log(homeId, editing, home);
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit Home",
      currentPage: "host-homes",
      editing: editing,
    });
  });
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

  res.redirect("/host/host-home-list");
};

export const postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoURL } = req.body;

  const home = new Home(houseName, price, location, rating, photoURL);
  home.id = id;
  home.save();

  res.redirect("/host/host-home-list");
};

export const postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Came to delete page: ", homeId);
  Home.deleteById(homeId, (error) => {
    console.log(error);
  });
  res.redirect("/host/host-home-list");
};
