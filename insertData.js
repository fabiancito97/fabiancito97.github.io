const { pool } = require("./db");

async function insertData() {
  const [name, color] = process.argv.slice(2);
  console.log(name, color);
}

insertData();