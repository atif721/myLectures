import express from "express";
import mongoose from "mongoose";
import path from "path";
import session from "express-session";
import MongoStore from "connect-mongo";
import multer from "multer";

import { authRouter } from "./routes/authRouter.js";
import { storeRouter } from "./routes/storeRouter.js";
import { hostRouter } from "./routes/hostRouter.js";
import { getError } from "./controllers/error.js";
import { rootDir } from "./utils/pathUtil.js";

const PORT = 3000;
const MONGO_URL = "mongodb+srv://root:pass321@learningnodemongo.6f1howb.mongodb.net/airbnb?appName=LearningNodeMongo";

const app = express();

const randomString = (length) => {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, randomString(7) + "_" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (["image/png", "image/jpg", "image/jpeg"].includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const multerOptions = {
  storage,
  fileFilter,
};

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(multer(multerOptions).single("photo"));

app.use(express.static(path.join(rootDir, "public")));

app.use("/uploads", express.static(path.join(rootDir, "uploads")));

app.use(
  session({
    secret: "Complete BackEnd Nodejs",
    resave: false,
    saveUninitialized: true,
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
app.use(getError);

// Only connect if not already connected
if (!mongoose.connection.readyState) {
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("✅ Connected to MongoDB");
      app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
      });
    })
    .catch((err) => {
      console.error("❌ Error connecting to MongoDB:", err);
    });
} else {
  // Already connected, just start the server
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}
