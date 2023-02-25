const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createConnection({
  user: process.env.MYSQL_USER,
  host: process.env.MYSQL_HOST,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
exports.getToDoThings = async function () {
  const [row] = db.query(`SELECT * FROM todos`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      result.send(`Selected values successfully!`);
    }
  });
  return row;
};

exports.deleteToDoThing = async function (id) {
  const [row] = getToDoThing(id);
};

exports.createToDoThing = async function (title, author, content, priority) {
  const [result] = await db.query(
    `
        INSERT INTO ${process.env.MYSQL_DATABASE} (title, author, content, priority) VALUE (?, ?, ?, ?)
    `,
    [title, author, content, priority]
  );

  const id = result.insertId;
  return getToDoThing(id);
};
