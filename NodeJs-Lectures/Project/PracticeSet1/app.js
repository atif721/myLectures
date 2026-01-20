import { createServer } from "http";

const server = createServer((req, ref) => {
  console.log(req.url, req.method);

  
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http:localhost:${PORT}`);
});
