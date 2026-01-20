import { IncomingMessage, ServerResponse } from "http";

/**
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */

const sumRequestHandler = (req, res) => {
  console.log("1. In sum Request Handler", req.url);
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
    console.log("2. Chunk Came");
  });

  req.on("end", () => {
    console.log("3. End event");
    const fullBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullBody);
    const bodyObject = Object.fromEntries(params);
    const num1 = Number(bodyObject.number1);
    const num2 = Number(bodyObject.number2);
    const result = num1 + num2;
    console.log("4. Sending response");

    res.setHeader("Content-Type", "text/html");
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Calculator</title>
    </head>
    <style>
    .welc {
        height: 100vh;
        width: 600px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
      }
    .cal_form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    .inputs {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }
    </style>
    <body>
      <div class="welc">
        <h1>Summation Result of ${num1}+${num2} = ${result}</h1>
      </div>
    </body>
    </html>
    `);
    return res.end();
  });
};

export default sumRequestHandler;
