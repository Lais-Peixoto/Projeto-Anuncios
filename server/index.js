const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const mysqlConnection = require("./database");
const fakeData = require("./data");
fakeData;

app.get("/", (req, res) => {
  mysqlConnection.query("SELECT * FROM `laisdb`.`laisads` ORDER BY createdat DESC", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});


app.post("/create", (req, res) => {
  let title = req.body.title;
  let content = req.body.content;

  mysqlConnection.query(
    "INSERT INTO `laisdb`.`laisads` (title, content) VALUES (?, ?)",
    [title, content],
    (err, result) => {
      if (err) throw err;
      console.log("Successfully added to database.");
      res.send({result: true});
    }
  );

});

app.listen(3001, () => {
  console.log("Server is running on PORT 3001.");
});
