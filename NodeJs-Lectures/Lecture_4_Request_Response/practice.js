import { createServer } from "http";

const server = createServer((req, res) => {
  console.log(req.url, req.headers, req.method);

  if (req.url.toLowerCase() === "/myntra/men") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html> 
      <head>
      <title>Myntra Webpage</title>
      </head>
      <body>
      <h1>This is Myntra Men Page</h1>
      <button onclick="history.back()">Go Back</button>
      </body>        
    </html>
  `);
    return res.end();
  } else if (req.url.toLowerCase() === "/myntra/women") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<html> 
      <head>
      <title>Myntra Webpage</title>
      </head>
      <body>
      <h1>This is Myntra Women Page</h1>
      <button onclick="history.back()">Go Back</button>
      </body>        
    </html>`
    );
    return res.end();
  } else if (req.url.toLowerCase() === "/myntra/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<html> 
      <head>
      <title>Myntra Webpage</title>
      </head>
      <body>
      <h1>This is Myntra Kids Page</h1>
      <button onclick="history.back()">Go Back</button>
      </body>        
    </html>`
    );
    return res.end();
  } else if (req.url.toLowerCase() === "/myntra/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<html> 
      <head>
      <title>Myntra Webpage</title>
      </head>
      <body>
      <h1>This is Myntra Cart Page</h1>
      <button onclick="history.back()">Go Back</button>
      </body>        
    </html>`
    );
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`
<html>
  <head>
    <title></title>
  </head>
  <body>
    <div>
      <ul>
        <li><a href="/myntra/home">Home</a></li>
        <li><a href="/myntra/men">Men</a></li>
        <li><a href="/myntra/women">Women</a></li>
        <li><a href="/myntra/kids">Kids</a></li>
        <li><a href="/myntra/cart">Cart</a></li>
      </ul>
    </div>
  </body>
</html>
`);
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
