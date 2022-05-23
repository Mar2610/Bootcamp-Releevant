const express = require("express"); // Con require se declara que es necesario la librería express
const app = express(); // Nuestra aplicación va a usar express y puede acceder a todas las funciones de la librería
app.use(express.json());
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "notas",
    port: 3306
});

function conectar() {
    connection.connect(function (err) {
        if (err) {
            return console.error("error: " + err.message);
        }
        console.log("Conectado!");
    });
};

function desconectar() {
    // Cerrar conexion
    connection.end(function (err) {
      if (err) {
        return console.error("error: " + err.message);
      }
      console.log("Desconectado!");
    });
};

app.get("/notas/getLetter/:id", (request, response) => {
    conectar();
    connection.query(
        `SELECT * FROM cartas where IdPersona=${request.params.id}`,
        (err, rows, fields) => {
          if (err) throw err;
          response.json(rows);
        }
      );
});

app.post("/notas/postLetter", (request, response) => {
    conectar();
    connection.query(
        `INSERT INTO cartas (Texto, IdPersona) VALUES ('${request.body.Texto}', ${request.body.IdPersona})`,
        (err, rows, fields) => {
          if (err) throw err;
          response.json(rows);
        }
      );
});

app.delete("/notas/deleteLetter/:Id", (request, response) => {
    conectar();
    connection.query(
        `DELETE FROM cartas WHERE Id=${request.params.Id}`,
        (err, rows, fields) => {
          if (err) throw err;
          response.json(rows);
        }
      );
});

app.put("/notas/putLetter/:Id", (request, response) => {
    conectar();
    connection.query(
        `UPDATE cartas SET Texto='${request.body.Texto}' WHERE Id=${request.params.Id}`,
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