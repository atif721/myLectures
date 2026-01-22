import express from "express";
import mongoose from "mongoose";
import path from "path";

import { getError } from "./controllers/errorController.js";
import { rootDir } from "./utils/pathUtil.js";

const PORT = 3000;
const MONGO_URL = "mongodb+srv://root:pass321@learningnodemongo.6f1howb.mongodb.net/todoapp?appName=LearningNodeMongo";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

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
