const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/myprofile", (req, res) => {
  res.send("Hey how are you doing?");
});

// const PORT = process.env.PORT || 3000;
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
