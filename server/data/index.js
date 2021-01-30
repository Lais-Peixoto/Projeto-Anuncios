const mysqlConnection = require("../database");

// FAKE DATA PARA MOSTRAR
let loremTitle = "Lorem";
let loremContent = "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.";

mysqlConnection.query(
  "INSERT INTO `laisdb`.`laisads` (title, content) VALUES (?, ?)",
  [loremTitle, loremContent],
  (err, result) => {
    if (err) throw err;
  }
);

mysqlConnection.query(
    "INSERT INTO `laisdb`.`laisads` (title, content) VALUES (?, ?)",
    [loremTitle, loremContent],
    (err, result) => {
      if (err) throw err;
    }
  );


  mysqlConnection.query(
    "INSERT INTO `laisdb`.`laisads` (title, content) VALUES (?, ?)",
    [loremTitle, loremContent],
    (err, result) => {
      if (err) throw err;
    }
  );

  mysqlConnection.query(
    "INSERT INTO `laisdb`.`laisads` (title, content) VALUES (?, ?)",
    [loremTitle, loremContent],
    (err, result) => {
      if (err) throw err;
    }
  );

  mysqlConnection.query(
    "INSERT INTO `laisdb`.`laisads` (title, content) VALUES (?, ?)",
    [loremTitle, loremContent],
    (err, result) => {
      if (err) throw err;
    }
  );

  mysqlConnection.query(
    "INSERT INTO `laisdb`.`laisads` (title, content) VALUES (?, ?)",
    [loremTitle, loremContent],
    (err, result) => {
      if (err) throw err;
    }
  );
  mysqlConnection.query(
    "INSERT INTO `laisdb`.`laisads` (title, content) VALUES (?, ?)",
    [loremTitle, loremContent],
    (err, result) => {
      if (err) throw err;
    }
  );
  mysqlConnection.query(
    "INSERT INTO `laisdb`.`laisads` (title, content) VALUES (?, ?)",
    [loremTitle, loremContent],
    (err, result) => {
      if (err) throw err;
    }
  );
  mysqlConnection.query(
    "INSERT INTO `laisdb`.`laisads` (title, content) VALUES (?, ?)",
    [loremTitle, loremContent],
    (err, result) => {
      if (err) throw err;
    }
  );
  mysqlConnection.query(
    "INSERT INTO `laisdb`.`laisads` (title, content) VALUES (?, ?)",
    [loremTitle, loremContent],
    (err, result) => {
      if (err) throw err;
    }
  );
  mysqlConnection.query(
    "INSERT INTO `laisdb`.`laisads` (title, content) VALUES (?, ?)",
    [loremTitle, loremContent],
    (err, result) => {
      if (err) throw err;
    }
  );
  mysqlConnection.query(
    "INSERT INTO `laisdb`.`laisads` (title, content) VALUES (?, ?)",
    [loremTitle, loremContent],
    (err, result) => {
      if (err) throw err;
    }
  );