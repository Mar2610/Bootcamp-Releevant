// 1 - Sacar todos los alumnos que tienen 23 años
// 2 - Sacar aquellas personas que tienen el sexo femenino y no tienen 23 años
// 3 - Introducir un alumno nuevo, si su DNI ya existe, entonces debe de sacar un mensaje de error y no crear el alumno
// 4 - Introducir un nuevo alumno, si ese alumno ya existe en la lista, entonces actualizar sus datos, si no, crearlo de nuevo.
// 5 - Eliminar los alumnos que tengan menos 23 años (23 incluido)
// 6 - Elimnar aquellos alumnos cuyo nombre empiece por M

const express = require("express"); // Con require se declara que es necesario la librería express
const { ObjectId } = require("mongodb");
const app = express(); // Nuestra aplicación va a usar express y puede acceder a todas las funciones de la librería
app.use(express.json());

let db = null;
var MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
  if (err) throw err;
  db = client;
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

app.get("/alumnos/primero/:Edad", async function (request, response) {
  let database = db.db("alumnos");
  await database
    .collection("alumnos")
    .find({ edad: 23 })
    .toArray((err, results) => {
      if (err) throw err;
      response.json(results);
    });
});

app.get("/alumnos/segundo", async function (request, response) {
  let database = db.db("alumnos");
  await database
    .collection("alumnos")
    .find({ $and: [{ sexo: "Femenino" }, { edad: { $ne: 23 } }] })
    .toArray((err, results) => {
      if (err) throw err;
      response.json(results);
    });
});

app.post("/alumnos/insert", async function (request, response) {
  let database = db.db("alumnos");
  const nif = await database
    .collection("alumnos")
    .findOne({ dni: request.body.dni });

  if (nif == null) {
    await database.collection("alumnos").insertOne(request.body);
  } else {
    console.log("Usuario ya registrado");
  }
  response.json(true);
});

app.post("/alumnos/insertOther", async function (request, response) {
  let database = db.db("alumnos");
  const nif = await database
    .collection("alumnos")
    .findOne({ dni: request.body.dni });

  if (nif == null) {
    await database.collection("alumnos").insertOne(request.body);
  } else {
    await database
      .collection("alumnos")
      .updateOne(
        { _id: ObjectId(request.body._id) },
        { $set: { nombre: request.body } }
      );
  }
  response.json(true);
});
