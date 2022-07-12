const express = require("express"); // Con require se declara que es necesario la librería express
const app = express(); // Nuestra aplicación va a usar express y puede acceder a todas las funciones de la librería
app.use(express.json());
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

app.post("/login", async (request, response) => {
  let conection = await conectar();

  let encrypt = md5(request.body.password);
  const [rows] = await conection.execute(
    "SELECT * FROM users WHERE userName = ? AND password = ?",
    [request.body.userName, encrypt]
  );
  console.log(rows);

  if (rows.length === 0) {
    response.status(404).send("Usuario incorrecto");
  } else {
    response.status(200).send(rows[0]);
  }
});

app.post("/insertUser", async (request, response) => {
  let conection = await conectar();
  let encrypt = md5(request.body.password);
  const [rows] = await conection.execute(
    "INSERT INTO users (name, surname, email, phoneNumber, password, userName, rol) VALUES (?,?,?,?,?,?,?)",
    [
      request.body.name,
      request.body.surname,
      request.body.email,
      request.body.phoneNumber,
      encrypt,
      request.body.userName,
      2,
    ]
  );
  console.log(rows);
  response.json(true);
});

app.post("/insertDate/:userName", async (request, response) => {
  let conection = await conectar();
  const [rows] = await conection.execute(
    "INSERT INTO cart2 (userName, startDate, endDate) VALUES (?,?,?)",
    [request.params.userName, request.body.startDate, request.body.endDate]
  );
  response.json(rows);
});

app.get("/getBooks", async (request, response) => {
  let conection = await conectar();
  const [rows] = await conection.execute(
    "SELECT * FROM cart2"
  );
  response.json(rows);
});

app.get("/getUsers", async (request, response) => {
  let conection = await conectar();
  const [rows] = await conection.execute("SELECT * FROM users");
  response.json(rows);
});

app.delete("/deleteUser/:idUsers", async function (request, response) {
  connection = await conectar();
  await connection.execute(
    "Delete from `users` where idUsers=?;",
    [request.params.idUsers]
  );
  response.json("Usuario eliminado");
});

app.put("/updateUser/:idUsers", async function (request, response) {
  connection = await conectar();
  let encrypt = md5(request.body.password);
  await connection.execute(
    "Update `users` set  name=?, surname=?, email=?, phoneNumber=?, password=?, userName=? where idUsers=?;",
    [
      request.body.name,
      request.body.surname,
      request.body.email,
      request.body.phoneNumber,
      request.params.idUsers,
      encrypt,
      request.body.userName
    ]
  );
  response.json("Usuario actualizado");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
