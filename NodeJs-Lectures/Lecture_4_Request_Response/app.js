import { createServer } from "http";

const server = createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/lecture1") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node JS Lectures</title></head>");
    res.write("<body><h1>Lecture-1 Check Feteched Data</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/lecture2") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node JS Lectures</title></head>");
    res.write("<body><h1>Lecture-2 Routing</h1></body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node JS Lectures</title></head>");
  res.write("<body><h1>Welcome to NodeJS Lecture Request & Response</h1></body>");
  res.write("</html>");
  res.end();

  // process.exit();
});

//
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
