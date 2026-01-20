export const getError = (req, res, next) => {
  res.status(404).render("404", { pageTitle: "airbnb home", currentPage: "404" });
};
