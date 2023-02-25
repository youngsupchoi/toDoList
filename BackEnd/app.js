const mysql = require("mysql2");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: process.env.MYSQL_USER,
  host: process.env.MYSQL_HOST,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

db.connect();

app.get("/todos", (req, res) => {
  db.query("SELECT * FROM TODOLISTSYSTEM.TODOS", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.put("/todos", (req, res) => {
  const toDoId = req.body.ToDoId;
  const author = req.body.author;
  const title = req.body.title;
  const content = req.body.content;
  const priority = req.body.priority;

  db.query(
    "UPDATE todos SET author =  ? , title = ?, content = ?, priority = ? WHERE ToDoID = ?",
    [author, title, content, priority, toDoId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("edited successfully");
        console.log(result);
      }
    }
  );
});

app.post("/create", (req, res) => {
  const author = req.body.author;
  const title = req.body.title;
  const content = req.body.content;
  const priority = req.body.priority;

  db.query(
    "INSERT INTO todos (author, title, content, priority) value (?, ?, ?, ?)",
    [author, title, content, priority],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("created successfully");
        console.log(result);
      }
    }
  );
});

app.delete("/todos/:toDoId", (req, res) => {
  const { toDoId } = req.params;
  db.query(
    "DELETE FROM TODOLISTSYSTEM.TODOS WHERE TODOID = ?",
    [toDoId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Deleted ${toDoId}`);
        res.send("Deleted values successfully!");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Your server is running on port 3001");
});
