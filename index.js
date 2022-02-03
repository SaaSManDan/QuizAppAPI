const express = require('express');
const mysql = require('mysql');

require('dotenv').config();

//Create connection
const db = mysql.createConnection({
  host : process.env.DB_HOST,
  user : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME
});

//Connect to db
db.connect((err) => {
  if(err) throw err;
  console.log('MySQL Connected...');
});

const app = express();

// Create DB
app.get('/getquestions', (req, res) => {
  let sql = "SELECT * FROM quiz_questions";
  db.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

app.listen('8080', () =>{

});
