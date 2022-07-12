import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

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
      navigate("/");
    }
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 3, width: "200" },
          display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#ffe082",
              width: "200",
              height: "200",
              borderRadius: "16px",
              m: 2
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Box sx={{m:2}}>
        <Typography sx={{ fontWeight: "bold" }} variant="h5">Formulario de registro</Typography>
          <TextField
            id="outlined-required"
            label="Nombre"
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleInputs}
            sx={{bgcolor: "white"}}
          />
          <TextField
            id="outlined-required"
            label="Apellidos"
            type="text"
            name="surname"
            value={newUser.surname}
            onChange={handleInputs}
            sx={{bgcolor: "white"}}
          />
          <TextField
            id="outlined-required"
            label="Email"
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleInputs}
            sx={{bgcolor: "white"}}
          />
          <TextField
            id="outlined-number"
            label="Teléfono"
            type="number"
            name="phoneNumber"
            value={newUser.phoneNumber}
            onChange={handleInputs}
            sx={{bgcolor: "white"}}
          />
          <TextField
            id="outlined-required"
            label="Nombre de usuario"
            type="text"
            name="userName"
            value={newUser.userName}
            onChange={handleInputs}
            sx={{bgcolor: "white"}}
          />
          <TextField
            id="outlined-required"
            label="Contraseña"
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleInputs}
            sx={{bgcolor: "white"}}
          />
        </Box>
        <Box>
          <Button sx={{m:2}} type="submit" variant="contained" color="success">
            Enviar
          </Button>
        </Box>
      </Box>
    </>
  );
}
