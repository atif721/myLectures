import express from "express";
import userRequestHandler from "./user.js";

const app = express();

app.use("/", (req, res, next) => {
  console.log("Come in first middleware", req.url, req.method);
  // res.send("<h1>Welcome to NODEJS lectures</h1>");
  next();
});

app.use("/", (req, res, next) => {
  console.log("Come in second middleware", req.url, req.method);
  res.send("<h1>this is form</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
