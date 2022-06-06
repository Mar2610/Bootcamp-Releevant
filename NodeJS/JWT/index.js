const express = require("express"); // Con require se declara que es necesario la librería express
const app = express(); // Nuestra aplicación va a usar express y puede acceder a todas las funciones de la librería
app.use(express.json());
const jwt = require("jsonwebtoken");

app.get("/Generatetoken/:Nombre", async function (request, response) {
  const accessToken = jwt.sign(
    { username: request.params.Nombre },
    "releevant",
    { expiresIn: "2h" }
  );
  response.json(accessToken);
});

app.post("/Checktoken", async function (request, response) {
  let authorization = request.get("authorization");

  let token = "";

  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }else{
      token = authorization
  }

  const decoded = jwt.verify(token, "releevant");

  if (!token || !decoded.username) {
    result = "Token invalid!";
  } else {
    result = decoded;
  }
  response.json(result);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
