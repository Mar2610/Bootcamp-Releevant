import { useAuthContext } from "../../Contexts/LoginContext";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import profile from "../../Images/profile.jpg"

export default function ImgMediaCard() {
  const { auth } = useAuthContext();

  return (
    <>
    <h1>Mi perfil</h1>
    <Card sx={{ maxWidth: 345, bgcolor:"#81d4fa"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={profile}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {auth.name} {auth.surname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Nombre de usuario: {auth.userName}</p>
          <p>Email: {auth.email}</p>
          <p>Teléfono: {auth.phoneNumber}</p>
          {auth.rol === 1 && (
            <p>Administrador/a</p>
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="success" size="small" variant="contained">Editar perfil</Button>
        <Button color="error" size="small" variant="contained">Eliminar cuenta</Button>
      </CardActions>
    </Card>
    </>
  );
}
