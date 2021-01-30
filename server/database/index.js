const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (err) throw err;
});

mysqlConnection.query(
  "CREATE DATABASE IF NOT EXISTS `laisdb`",
  (err, result) => {
    if (err) throw err;
  }
);

mysqlConnection.query(
  "CREATE TABLE IF NOT EXISTS `laisdb`.`laisads` (`id` INT NOT NULL AUTO_INCREMENT, `title` VARCHAR(255) NOT NULL, `content` VARCHAR(255) NOT NULL, `createdat` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`));",
  (err, result) => {
    if (err) throw err;
  }
);

module.exports = mysqlConnection;
