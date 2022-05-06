const express = require("express"); // Con require se declara que es necesario la librería express
const app = express(); // Nuestra aplicación va a usar express y puede acceder a todas las funciones de la librería
app.use(express.json())

let persona = {
  name: "Marta",
  surname: "de Haro"
};

app.get("/", (request, response) => { 
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/ejemplo/:numero", (request, response) => { // App es la variable que usa express, y después de la variable viene el verbo
  request.params.numero; 
  response.json(persona); // Después viene la URL a donde tiene que ir "/api/notes". Request es el objeto que contiene mi información
}); // Response es el objeto que manda respuesta

app.get("/api/ejemplo", (request, response) => { 
  console.log(request.query);
  response.json("Hey you");
});

app.get("/api/check", (request, response) => { 
  response.send("<h1>Check it !</h1>");
});

app.get("/id", (request, response) => { 
  let id = request.query.id;
  let x = request.query.x;

  let respuesta = {
    id: id,
    x: x
  }

  console.log(id);
  console.log(x);
  response.json(respuesta);
});

app.post("/newNote", (request, response) => { 
  console.log(request.body);
  response.json(request.body);
});

const notas = [{id: 1, autor: "Paco", texto: "Tomate", receptor: "Yo misma"},
{id: 2, autor: "Marta", texto: "Pájaro", receptor: "Yo misma"},
{id: 3, autor: "Lucia", texto: "Perro", receptor: "Yo misma"},
{id: 4, autor: "Adri", texto: "Gato", receptor: "Yo misma"},
{id: 5, autor: "Miguel", texto: "Conejo", receptor: "Yo misma"}];

app.get("/api/notas", (request, response) => { 
    let id = notas.find(nota => nota.id === 3);
    console.log(id);
    response.json(id);
  });

app.put("/api/note", (request, response) => { 
    console.log(request.body);
    response.json(request.body);
  });

  app.get("/nota", (request, response) => { 
    let myBody = request.body;
    let nota = notas.find(n => n.id == myBody.id);
    nota.texto = myBody.texto;
    console.log(notas);
    response.json(notas);
  });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
