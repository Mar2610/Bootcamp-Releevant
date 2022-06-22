const express = require("express"); // Con require se declara que es necesario la librería express
const { ObjectId } = require("mongodb");
const cors = require("cors");
const app = express(); // Nuestra aplicación va a usar express y puede acceder a todas las funciones de la librería
app.use(express.json());
app.use(cors());

let db = null;
var MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
  if (err) throw err;
  db = client;
  const PORT = 8080;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

app.get("/personas", async function (request, response) {
  let database = db.db("personas");
  await database
    .collection("personas")
    .find()
    .toArray((err, results) => {
      if (err) throw err;
      response.json(results);
    }); // Para traer todos los datos
});

app.delete("/personas/delete/:Nombre", async function (request, response) {
  let database = db.db("personas");
  let persona = await database
    .collection("personas")
    .findOne({ nombre: { $eq: request.params.Nombre } });
  await database
    .collection("personas")
    .deleteOne({ _id: ObjectId(persona._id) });
  response.json(true);
});

app.put("/personas/put", async function (request, response) {
  let database = db.db("personas");
  await database
    .collection("personas")
    .updateOne(
      { _id: ObjectId(request.body._id) },
      {$set: { nombre: request.body.nombre, apellidos: request.body.apellidos, edad: request.body.edad }}
    );
  response.json(true);
});

app.post("/personas/post", async function (request, response) {
    let database = db.db("personas");
  await database
    .collection("personas")
    .insertOne(request.body)
  response.json(true);
});

app.get("/persona/:Id", async function (request, response) {
  let database = db.db("personas"); //nombre de Base de datos
  let persona = await database
    .collection("personas")
    .findOne({  _id: { $eq: ObjectId(request.params.Id) }});
  response.json(persona);
});