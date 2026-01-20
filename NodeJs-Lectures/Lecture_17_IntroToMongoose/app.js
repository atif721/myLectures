import express from "express";
import mongoose from "mongoose";

import { storeRouter } from "./routes/storeRouter.js";
import { hostRouter } from "./routes/hostRouter.js";
import path from "path";
import { rootDir } from "./utils/pathUtil.js";
import { getError } from "./controllers/error.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, "public")));

app.use(storeRouter);
app.use("/host", hostRouter);

app.use(getError);

const PORT = 3000;

const MONGO_URL = "mongodb+srv://root:pass321@learningnodemongo.6f1howb.mongodb.net/airbnb?appName=LearningNodeMongo";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connceting to Mongo", err);
  });
