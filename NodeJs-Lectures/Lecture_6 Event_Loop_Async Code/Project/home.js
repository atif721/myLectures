import { IncomingMessage, ServerResponse } from "http";

/**
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */

const home = (req, res) => {
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
        }
        a {
          list-style: none;
          text-decoration: none;
          color: red;
        }
        button {
          background: wheat;
          padding: 10px;
          border-radius: 7px;
          outline: 1px solid gray;
          border: none;
        }
      </style>
      <body>
        <div class="welc">
          <h1>Welcome to a Basic Calculator App</h1>
          <button>
            <a href="/calculator">Go to Calculator</a>
          </button>
        </div>
      </body>
    </html>
    `);
  return res.end();
};

export default home;
