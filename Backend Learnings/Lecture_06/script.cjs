const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

// dynamic routing
app.get("/profile/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Profile page for user: ${username}`);
});

app.get("/author/:username/:age", (req, res) => {
  res.send(`Author of page is ${req.params.username} and age is ${req.params.age}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
