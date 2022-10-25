var express = require('express');
var path = require('path');
var app = express();

var dataBase = 'postgres://tzujgzncupqavl:ef5edc1b9a70a0e75be9387c72ac69bdfb7b49e07e13cca7c680eb7aec34e2ac@ec2-23-20-140-229.compute-1.amazonaws.com:5432/d8pcl8k4iefts8'


app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

.get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.dataBase,
  ssl: {
    rejectUnauthorized: false
  }
});


app.use(express.static(__dirname)); // set static files location, in this case the route, add a file name if not
app.listen(process.env.PORT || 3000);
