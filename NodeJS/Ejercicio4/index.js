const express = require("express"); // Con require se declara que es necesario la librería express
const app = express(); // Nuestra aplicación va a usar express y puede acceder a todas las funciones de la librería
app.use(express.json());
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "alumnos",
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

/*1 - Sacar todos los alumnos que tienen 23 años
2 - Sacar aquellas personas que tienen el sexo femenino y no tienen 23 años
3 - Introducir un alumno nuevo, si su DNI ya existe, entonces debe de sacar un mensaje de error y no crear el alumno
4 - Introducir un nuevo alumno, si ese alumno ya existe en la lista, entonces actualizar sus datos, si no, crearlo de nuevo.
5 - Eliminar los alumnos que tengan menos 23 años (23 incluido)
6 - Elimnar aquellos alumnos cuyo nombre empiece por M*/

app.get("/alumnos/getAlumno/:Sexo/:Edad", (request, response) => {
    conectar();
    connection.query(
        `SELECT * FROM datosAlumnos where Sexo='${request.params.Sexo}' AND Edad!=${request.params.Edad}`,
        (err, rows, fields) => {
          if (err) throw err;
          response.json(rows);
        }
      );
});

app.get("/alumnos/getAlumno/:Edad", (request, response) => {
    conectar();
    connection.query(
        `SELECT * FROM datosAlumnos where Edad=${request.params.Edad}`,
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