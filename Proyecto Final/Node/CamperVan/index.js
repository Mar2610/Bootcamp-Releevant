const express = require("express"); // Con require se declara que es necesario la librería express
const app = express(); // Nuestra aplicación va a usar express y puede acceder a todas las funciones de la librería
app.use(express.json());
// const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
const md5 = require("md5");
const mysql = require("mysql2/promise");

async function conectar() {
  return await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "bbdd_camper",
    port: 3306,
  });
}

// function conectar() {
//   connection.connect(function (err) {
//     if (err) {
//       return console.error("error: " + err.message);
//     }
//     console.log("Conectado!");
//   });
// }

app.post("/login", async (request, response) => {
  let conection = await conectar();

  let encrypt = md5(request.body.password);
  const [rows] = await conection.execute(
    "SELECT * FROM users WHERE userName = ? AND password = ?",
    [request.body.userName, encrypt]
  );
  console.log(rows);

  if (rows.length === 0) {
    response.status(404).send("Usuario incorrecto")
  } else {
    response.status(200).send(rows[0])
  }
});

app.post("/insertUser", async (request, response) => {
  let conection = await conectar();
  let encrypt = md5(request.body.password);
  const [rows] = await conection.execute(
    "INSERT INTO users (name, surname, email, phoneNumber, password, userName) VALUES (?,?,?,?,?,?,?)",
    [
      request.body.name,
      request.body.surname,
      request.body.email,
      request.body.phoneNumber,
      encrypt,
      request.body.userName,
    ]
  );
  console.log(rows);
  response.json(true);
});

app.post("/insertDate", async (request, response) => {
  let conection = await conectar();
  const [rows] = await conection.execute(
    "INSERT INTO dates (date) VALUES (?)",
    [
      request.body.date
    ]
  );
  response.json(rows);
});

app.delete("/deleteUser/:id", (request, response) => {
  conectar();
  connection.query(
    `DELETE FROM users WHERE idUsers=${request.params.id}`,
    (err, rows, fields) => {
      if (err) throw err;
      response.json(rows);
    }
  );
});

app.get("/getProduct/:van", (request, response) => {
  conectar();
  connection.query(
    `SELECT * FROM products where van="${request.params.van}"`,
    (err, rows, fields) => {
      if (err) throw err;
      response.json(rows);
    }
  );
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
