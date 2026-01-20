import { writeFileSync } from "fs";
import { createServer } from "http";

const server = createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node JS Lectures</title></head>");
    res.write("<body><h1>Enter Your Details: </h1>");
    res.write("<form action='/submit-details' method='POST'>");
    res.write("<input type='text' name='username' placeholder='Enter your username: '/><br><br>");
    res.write("<label for='gender'>Gender: </label>");
    res.write("<input type='radio' name='gender' id='male' value='male'/>");
    res.write("<label for='male'>Male</label>");
    res.write("<input type='radio' name='gender' id='female' value='female'/>");
    res.write("<label for='female'>Female</label><br><br>");
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    // res.write("");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/submit-details" && req.method == "POST") {
    writeFileSync("user.txt", "Abdullah Atif");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node JS Lectures</title></head>");
  res.write("<body><h1>Welcome to NodeJS Lecture Request & Response</h1></body>");
  res.write("</html>");
  res.end();
});

//
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
