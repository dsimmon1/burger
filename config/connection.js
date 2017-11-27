var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com" || "localhost",
  user: "re1r4n459roc9v00" || "root",
  password: "x8ae27ee82vpfgll" || "",
  database: "g7xoezu92wypkiq0" || "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;