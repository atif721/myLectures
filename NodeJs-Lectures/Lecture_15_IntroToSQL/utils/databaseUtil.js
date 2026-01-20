import mysql from "mysql2";

export const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "pass321",
    database: "airbnb",
    port: 3307,
  })
  .promise();
