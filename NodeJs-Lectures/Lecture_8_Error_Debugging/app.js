import { createServer } from "http";
import testingSyntax from "./syntax.js";
import runtime from "./runtime.js";
import logical from "./logical.js";

const server = createServer((req, res) => {
  console.log(req.url, req.method);
  console.log("hello");
  testingSyntax();
  runtime();
  logical();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
