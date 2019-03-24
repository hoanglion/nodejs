var config = require("config");
var mysql = require("mysql");

var connString =
  "mysql://root:12345@localhost/dulich?charset=utf8_general_ci&timezone=-0700";

var connection = mysql.createConnection(connString);

// var connection = mysql.createConnection({
//     host        : config.get("mysql.host"),
//     user        : config.get("mysql.user"),
//     password    : config.get("mysql.password"),
//     database    : config.get("mysql.database"),
// });

function getConnection() {
  if (!connection) {
    connection.connect();
  }
  return connection;
}

module.exports = {
  getConnection: getConnection
};
