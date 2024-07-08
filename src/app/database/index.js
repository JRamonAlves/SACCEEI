const { Pool } = require("pg");

const pool = new Pool({
  user: "ramon",
  host: "localhost",
  database: "mydb",
  password: "1305",
  port: 1842,
});

module.exports = pool;
