import express from "express";
import mongoose from "mongoose";
import path from "path";
import session from "express-session";
import MongoStore from "connect-mongo";

import { authRouter } from "./routes/authRouter.js";
import { storeRouter } from "./routes/storeRouter.js";
import { hostRouter } from "./routes/hostRouter.js";
import { getError } from "./controllers/error.js";
import { rootDir } from "./utils/pathUtil.js";

const PORT = 3000;
const MONGO_URL = "mongodb+srv://root:pass321@learningnodemongo.6f1howb.mongodb.net/airbnb?appName=LearningNodeMongo";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "Complete BackEnd Nodejs",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: MONGO_URL,
      collectionName: "sessions",
    }),
  }),
);

app.use((req, res, next) => {
  console.log(req.url, req.method);
  req.isLoggedIn = !!req.session.isLoggedIn;

  next();
});

app.use(authRouter);
app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if (req.isLoggedIn) {
    next();
  } else {
    console.log("Not logged in redirecting to /login");
    res.redirect("/login");
  }
});

app.use("/host", hostRouter);
app.use(express.static(path.join(rootDir, "public")));
app.use(getError);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to Mongo", err);
  });
