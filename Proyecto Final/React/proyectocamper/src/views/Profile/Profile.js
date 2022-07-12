import { useAuthContext } from "../../Contexts/LoginContext";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import profile from "../../Images/profile.jpg";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function ImgMediaCard() {
  const { auth, setAuth } = useAuthContext();
  const navigate = useNavigate();
  const MY_AUTH_APP = "MY_AUTH_APP";
  const [isEditing, setIsEditing] = useState(false);
  const [editUser, setEditUser] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    password: "",
    userName: ""
  });

  const logout = useCallback(
    function () {
      window.localStorage.removeItem(MY_AUTH_APP);
      setAuth(null);
      navigate("/");
    },
    [MY_AUTH_APP, navigate, setAuth]
  );

  async function deleteUsers() {
    const response = await fetch(
      `http://localhost:3001/deleteUser/${auth.idUsers}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log(data);
    if (data) {
      navigate("/");
      logout();
    }
  }

  function handleInputs(e) {
    const { name } = e.target;
    setAuth((user) => ({ ...user, [name]: e.target.value }));
    setEditUser((user) => ({ ...user, [name]: e.target.value }));
  }

  async function updateUsers(e) {
    e.preventDefault();
    const updateUser = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editUser),
    };
    const response = await fetch(
      `http://localhost:3001/updateUser/${auth.idUsers}`,
      updateUser
    );
    const data = await response.json();
    console.log(data);
    setIsEditing(false);
    setEditUser();
  }

  function login() {
    navigate("/login");
  }

  return (
    <>
      {auth ? (
        <Grid container md={12}>
          <Grid item md={6}>
            <Card sx={{ maxWidth: 345, bgcolor: "#d4e157", m: 10 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={profile}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {auth.userName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p>
                    Nombre y apellidos: {auth.name} {auth.surname}
                  </p>
                  <p>Email: {auth.email}</p>
                  <p>Teléfono: {auth.phoneNumber}</p>
                  {auth.rol === 1 && <p>Administrador/a</p>}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={() => setIsEditing(true)}
                  color="success"
                  size="small"
                  variant="contained"
                >
                  Editar perfil
                </Button>
                <Button
                  color="error"
                  size="small"
                  variant="contained"
                  onClick={deleteUsers}
                >
                  Eliminar cuenta
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item md={6} sx={{ p: 6 }}>
            {isEditing && (
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 5, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <Box sx={{ width: 600, bgcolor: "#d4e157" }}>
                  <Typography sx={{p:3}} variant="h5">
                    Rellena los campos para editar tu perfil
                  </Typography>
                  <TextField
                    id="outlined-required"
                    label="Nombre"
                    onChange={handleInputs}
                    name="name"
                    sx={{ bgcolor: "white" }}
                  />
                  <TextField
                    id="outlined-required"
                    label="Apellidos"
                    onChange={handleInputs}
                    name="surname"
                    sx={{ bgcolor: "white" }}
                  />
                  <TextField
                    id="outlined-required"
                    label="Email"
                    onChange={handleInputs}
                    name="email"
                    sx={{ bgcolor: "white" }}
                  />
                  <TextField
                    id="outlined-required"
                    label="Teléfono"
                    onChange={handleInputs}
                    name="phoneNumber"
                    sx={{ bgcolor: "white" }}
                  />
                  <TextField
                    id="outlined-required"
                    type="password"
                    label="Contraseña"
                    onChange={handleInputs}
                    name="password"
                    sx={{ bgcolor: "white" }}
                  />
                  <TextField
                    id="outlined-required"
                    label="Nombre de usuario"
                    onChange={handleInputs}
                    name="userName"
                    sx={{ bgcolor: "white" }}
                  />
                </Box>
                <Button
                  color="success"
                  size="small"
                  variant="contained"
                  onClick={updateUsers}
                  sx={{m:2}}
                >
                  Editar
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      ) : (
        <Stack
          sx={{ width: "100%", m: 5 }}
          spacing={1}
          display="flex"
          alignItems="center"
        >
          <Alert severity="warning" sx={{ width: "200" }}>
            <AlertTitle>Atención</AlertTitle>
            Debes iniciar sesión <strong>para ver o modificar tu perfil</strong>
          </Alert>
          <Button
            sx={{
              backgroundColor: "#7cb342",
              color: "black",
              fontWeight: "bold",
            }}
            onClick={login}
          >
            Inicia sesión
          </Button>
        </Stack>
      )}
    </>
  );
}
