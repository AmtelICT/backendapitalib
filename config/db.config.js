'user strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : "127.0.0.1",
  port:3306,
  user     : 'adamcyber',
  password : 'Adam@#Cyber1994?@',
  database : 'crudnodeboiler'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;