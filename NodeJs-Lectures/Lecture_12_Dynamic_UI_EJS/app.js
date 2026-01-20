import express from "express";
import { storeRouter } from "./routes/storeRouter.js";
import { hostRouter } from "./routes/hostRouter.js";
import path from "path";
import { rootDir } from "./utils/pathUtil.js";

const userRoute = storeRouter;
const hostRoute = hostRouter;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, "public")));

app.use(userRoute);
app.use("/host", hostRoute);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "airbnb home", currentPage: "404" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
