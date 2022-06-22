const express = require("express"); // Con require se declara que es necesario la librería express
const app = express(); // Nuestra aplicación va a usar express y puede acceder a todas las funciones de la librería
app.use(express.json());
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "bbdd_camper",
  port: 3306,
});

function conectar() {
  connection.connect(function (err) {
    if (err) {
      return console.error("error: " + err.message);
    }
    console.log("Conectado!");
  });
}

app.get("/user/:username", (request, response) => {
  conectar();
  connection.query(
    `SELECT * FROM users where userName="${request.params.username}"`,
    (err, rows, fields) => {
      if (err) throw err;
      response.json(rows);
    }
  );
});

app.post("/insertUser", (request, response) => {
  conectar();
  connection.query(
    `INSERT INTO users (name, surname, email, phoneNumber, driveLicense, password, userName) 
    VALUES ('${request.body.name}', '${request.body.surname}', '${request.body.email}', ${request.body.phoneNumber},
        '${request.body.driveLicense}', '${request.body.password}', '${request.body.userName}');`,
    (err, rows, fields) => {
      if (err) throw err;
      response.json(rows);
    }
  );
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
