import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    driveLicense: "",
    userName: "",
    password: "",
  });

  function handleInputs(e) {
    const { name } = e.target;
    setNewUser((user) => ({ ...user, [name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const requestUser = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    };

    const response = await fetch(
      "http://localhost:3001/insertUser",
      requestUser
    );
    if (response.ok) {
      navigate("/profile");
    }
  }

  return (
    <>
      <h1>Formulario de registro</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 3, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            id="outlined-required"
            label="Nombre"
            type="text"
            name="name" value={newUser.name} onChange={handleInputs}
          />
          <TextField
            id="outlined-required"
            label="Apellidos"
            type="text"
            name="surname" value={newUser.surname} onChange={handleInputs}
          />
          <TextField
            id="outlined-required"
            label="Email"
            type="email"
            name="email" value={newUser.email} onChange={handleInputs}
          />
          <TextField
            id="outlined-number"
            label="Teléfono"
            type="number"
            name="phoneNumber" value={newUser.phoneNumber} onChange={handleInputs}
          />
          <TextField
            id="outlined-required"
            label="Nombre de usuario"
            type="text"
            name="userName" value={newUser.userName} onChange={handleInputs}
          />
          <TextField
            id="outlined-required"
            label="Contraseña"
            type="password"
            name="password" value={newUser.password} onChange={handleInputs}
          />
        </div>
        <div>
        <Button type="submit" variant="contained" color="success">
          Enviar
        </Button>
        </div>
      </Box>
    </>
  );
}
