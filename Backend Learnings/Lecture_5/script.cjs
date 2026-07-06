const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ------- middleware -------
app.use((req, res, next) => {
  console.log(`Middleware 1`);
  next();
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// -------- routes ---------
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/myprofile", (req, res) => {
  res.send("Hey how are you doing?");
});

app.get("/myprofile2", (req, res, next) => {
  return next(new Error("Hey how are you doing?"));
});

// --------- error handling middleware -----------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// const PORT = process.env.PORT || 3000;
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
