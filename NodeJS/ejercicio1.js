const express = require("express");
const app = express(); 
app.use(express.json());

const notas = [{"id": 1, "autor": "Paco", "texto": "Tomate", "receptor": "Yo misma"},
{"id": 2, "autor": "Marta", "texto": "Pájaro", "receptor": "Yo misma"},
{"id": 3, "autor": "Lucia", "texto": "Perro", "receptor": "Yo misma"},
{"id": 4, "autor": "Adri", "texto": "Gato", "receptor": "Yo misma"},
{"id": 5, "autor": "Miguel", "texto": "Conejo", "receptor": "Yo misma"}];

app.get("/api/notas", (request, response) => { 
    response.json(notas);
  });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});