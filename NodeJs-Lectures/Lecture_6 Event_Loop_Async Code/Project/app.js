import { createServer } from "http";
import sumRequestHandler from "./sum.js";
import home from "./home.js";
import calculator from "./calculator.js";

const server = createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url.toLowerCase() === "/") {
    return home(req, res);
  } else if (req.url.toLowerCase() === "/calculator") {
    return calculator(req, res);
  } else if (req.url.toLowerCase() === "/calculate-result" && req.method == "POST") {
    return sumRequestHandler(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Calculator</title>
      </head>
      <body>
        <h1>404 not found</h1>
        <a href="/">Go to Home</a>
      </body>
    </html>
    `);
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
