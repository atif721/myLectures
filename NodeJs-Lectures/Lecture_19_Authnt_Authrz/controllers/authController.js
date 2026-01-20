import { check, validationResult } from "express-validator";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

const getSignup = (req, res, next) => {
  res.render("auth/signup", {
    pageTitle: "SignUp",
    currentPage: "signup",
    isLoggedIn: false,
    errors: [],
    oldInput: { firstName: "", lastName: "", email: "", password: "", userType: "" },
    user: {},
  });
};

const postSignup = [
  check("firstName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First Name should be atleast 2 characters long")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("First Name should contain only alphabets"),

  check("lastName")
    .matches(/^[A-Za-z\s]*$/)
    .withMessage("Last Name should contain only alphabets"),

  check("email").isEmail().withMessage("Please Enter a valid email").normalizeEmail(),

  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be atleast 8 characters long")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[!@#$%^&*().?,<>{}]/)
    .withMessage("Password must contain at least one speacial character"),

  check("confirmPassword")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),

  check("userType")
    .notEmpty()
    .withMessage("Please select a user type")
    .isIn(["guest", "host"])
    .withMessage("Invalid user type"),

  check("terms")
    .notEmpty()
    .withMessage("Please accept the terms and conditions")
    .custom((value, { req }) => {
      if (value !== "on") {
        throw new Error("Please accept the terms and conditions");
      }
      return true;
    }),

  (req, res, next) => {
    const { firstName, lastName, email, password, userType } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).render("auth/signup", {
        pageTitle: "SignUp",
        currentPage: "signup",
        isLoggedIn: true,
        errors: errors.array().map((err) => err.msg),
        oldInput: { firstName, lastName, email, password, userType },
        user: {},
      });
    }

    bcrypt
      .hash(password, 12)
      .then((hashedPassword) => {
        const user = new User({ firstName, lastName, email, password: hashedPassword, userType });
        return user.save();
      })
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => {
        return res.status(422).render("auth/signup", {
          pageTitle: "SignUp",
          currentPage: "signup",
          isLoggedIn: true,
          errors: [err.message],
          oldInput: { firstName, lastName, email, password, userType },
          user: {},
        });
      });
  },
];

const getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    currentPage: "login",
    isLoggedIn: false,
    errors: [],
    oldInput: { email: "" },
    user: {},
  });
};

const postLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(422).render("auth/login", {
        pageTitle: "Login",
        currentPage: "login",
        isLoggedIn: false,
        errors: ["User does not exist"],
        oldInput: { email },

        user: {},
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(422).render("auth/login", {
        pageTitle: "Login",
        currentPage: "login",
        isLoggedIn: false,
        errors: ["Invalid password"],
        oldInput: { email },
        user: {},
      });
    }

    req.session.isLoggedIn = true;
    req.session.user = user;
    await req.session.save();
    res.redirect("/");
  } catch (err) {
    console.log("Error ", err);
  }
};

const postLogout = (req, res, next) => {
  console.log(req.body);
  req.session.destroy(() => {
    res.redirect("/");
  });
};

export default {
  getSignup,
  postSignup,
  getLogin,
  postLogin,
  postLogout,
};
