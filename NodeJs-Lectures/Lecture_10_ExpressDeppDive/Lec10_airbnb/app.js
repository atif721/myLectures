import express from "express";
import { storeRouter } from "./routes/storeRouter.js";
import { hostRouter } from "./routes/hostRouter.js";
import path from "path";
import { rootDir } from "./utils/pathUtil.js";

const userRoute = storeRouter;
const hostRoute = hostRouter;

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());
app.use(userRoute);
app.use("/host", hostRoute);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
