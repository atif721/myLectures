const getLogin = (req, res, next) => {
  res.render("auth/login", { pageTitle: "Login", currentPage: "login", isLoggedIn: false });
};

const postLogin = (req, res, next) => {
  console.log(req.body);
  // res.cookie("isLoggedIn", true);
  req.session.isLoggedIn = true;
  res.redirect("/");
};

const postLogout = (req, res, next) => {
  console.log(req.body);
  req.session.destroy(() => {
    res.redirect("/");
  });
  // res.clearCookie("isLoggedIn");
  // res.cookie("isLoggedIn", false);
};

export default {
  getLogin,
  postLogin,
  postLogout,
};
