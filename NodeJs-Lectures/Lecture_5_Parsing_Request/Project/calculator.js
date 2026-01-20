import { IncomingMessage, ServerResponse } from "http";

/**
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */

const calculator = (req, res) => {
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
          <h1>A Basic Calculator to Calculate Sum</h1>
          <form action="/calculate-result" method="POST" class="cal_form">
            <div class="inputs">
              <div>
                <label for="number1">Number-1</label>
                <input type="number" name="number1" id="num1" />
              </div>
              <div>
                <label for="number2">Number-2</label>
                <input type="number" name="number2" id="num2" />
              </div>
            </div>
            <button type="submit" class="sum_btn">SUM</button>
          </form>
        </div>
      </body>
    </html>
      `);
  return res.end();
};

export default calculator;
