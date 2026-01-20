import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log(`Second dummy Middleware`, req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log(`Third dummy Middleware`, req.url, req.method);
//   res.send(`<h1>Welcome to Complete Cooding</h1>`);
// });

app.get("/", (req, res, next) => {
  console.log(`Handling / for GET`, req.url, req.method);
  res.send(`<h1>Welcome to Get method app</h1>`);
});

app.get("/contact-us", (req, res, next) => {
  console.log(`Handling /contact-us for GET`, req.url, req.method);
  res.send(`
    <h1>Please Give your Details</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name: " />
    <input type="email" name="email" placeholder="Enter your Email: " />
    <input type="submit" name="" id="" />
    </form>
  `);
});

app.post("/contact-us", (req, res, next) => {
  console.log(`Handling /contact-us for POST`, req.url, req.method);
  res.send(`
    <h1>Thanks for your time</h1>
  `);
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
