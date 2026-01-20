import express from "express";
import path from "path";
import { rootDir } from "./utils/pathUtil.js";
import { homeRouter } from "./routes/homeRouter.js";
import { contactRouter } from "./routes/contactRouter.js";

const homeRoute = homeRouter;
const contactRoute = contactRouter;

const app = express();

app.use(express.urlencoded());

app.use(homeRoute);
app.use(contactRoute);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
