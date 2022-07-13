import { useAuthContext } from "../../Contexts/LoginContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function Login() {
  const { auth, setAuth } = useAuthContext();
  const navigate = useNavigate();
  const MY_AUTH_APP = "MY_AUTH_APP";
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  async function login(e) {
    e.preventDefault();
    const login = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    const response = await fetch("http://localhost:3001/login", login);
    if (response.status === 200) {
      const data = await response.json();
      setAuth(data);
      window.localStorage.setItem(MY_AUTH_APP, JSON.stringify(data));
      navigate("/");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }

  function handleInputs(e) {
    setUser((user) => ({ ...user, [e.target.name]: e.target.value }));
  }

  return (
    <Box justifyContent="center" display="flex" p={4}>
      <>
        {!auth ? (
          <Box
            component="form"
            onSubmit={login}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#ffecb3",
              width: "30vw",
              height: "55vh",
              borderRadius: "16px",
            }}
          >
            <Typography p={3} variant="h5" sx={{ fontWeight: "bold" }}>
              Inicio de sesión
            </Typography>
            <Box p={1} onSubmit={login}>
              <Typography>Nombre de usuario:</Typography>
              <TextField
                id="outlined-required"
                type="text"
                name="userName"
                onChange={handleInputs}
                value={user.userName}
                sx={{ backgroundColor: "white" }}
              />
            </Box>
            <Box p={1}>
              <Typography>Contraseña:</Typography>
              <TextField
                id="outlined-required"
                type="password"
                name="password"
                onChange={handleInputs}
                value={user.password}
                sx={{ backgroundColor: "white" }}
              />
            </Box>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#7cb342",
                color: "black",
                fontWeight: "bold",
                m: 2,
              }}
            >
              Iniciar sesión
            </Button>
          </Box>
        ) : (
          <Stack sx={{ width: "100%" }} display="flex" alignItems="center">
            <Alert variant="filled" severity="error" sx={{ width: "300" }}>
              Sesión iniciada
            </Alert>
          </Stack>
        )}
      </>
    </Box>
  );
}
