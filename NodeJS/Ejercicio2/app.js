const express = require("express"); // Con require se declara que es necesario la librería express
const app = express(); // Nuestra aplicación va a usar express y puede acceder a todas las funciones de la librería
app.use(express.json());


const notas = [{id:1, from: "Marta", text: "Hola", for: "Maria"}, {id:2, from: "Cristina", text: "Adiós", for: "Noelia"},
                {id:3, from: "Celia", text: "Que tal", for: "Esther"}]

app.get("/nota", (request, response) => {
  let myQuery = request.query.id;
  let id = notas.find(nota => nota.id === myQuery);
    response.json(id);
});


const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});