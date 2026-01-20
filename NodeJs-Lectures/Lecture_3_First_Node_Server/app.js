import { createServer } from "http";

//method-1
// function requestListner(req, res) {
//   console.log(req);
// }
// http.createServer(requestListner);

//method-2
const server = createServer((req, res) => {
  console.log(req);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
