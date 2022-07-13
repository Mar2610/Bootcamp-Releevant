import { Grid } from "@mui/material";
import Camper1 from "../../Images/Camper1.jpg";
import Typography from "@mui/material/Typography";
import Camper2 from "../../Images/Camper2.jpg";

export default function Vans() {
  return (
    <>
      <Grid container spacing={2} width="90%" m={7} sx={{ bgcolor: "white" }}>
        <Grid sx={{ m: 5 }} item xs={3}>
          <img alt="camper1" width="300px" src={Camper1}></img>
        </Grid>
        <Grid sx={{ m: 5 }} item xs={7}>
          <Typography sx={{ color: "#795548" }} variant="h4">
            Descubre nuestra casa móvil
          </Typography>
          <Typography m={4}>
            Aliquam sed hendrerit urna, ac vestibulum metus. Integer tincidunt
            ullamcorper enim, vel iaculis massa sollicitudin ut. Etiam gravida
            libero non orci efficitur, congue mollis tortor efficitur. Integer
            quis mauris justo. Curabitur ante odio, interdum vel purus quis,
            maximus vulputate nunc. In quis enim urna. Mauris eu dignissim
            nulla. Nam feugiat, lectus at iaculis hendrerit, orci ante rhoncus
            libero, at imperdiet urna enim ac magna. Nam massa enim, tincidunt
            eu viverra eget, ultricies et nulla. Aenean luctus, urna a efficitur
            consectetur, neque ante gravida enim, id auctor purus metus quis
            sapien. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec non ligula nunc. Vestibulum
            accumsan tincidunt nisi. Maecenas malesuada scelerisque enim, nec
            euismod ante blandit sit amet. Aenean dignissim tortor nisi, quis
            tempus magna aliquam et.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} width="90%" m={7} sx={{ bgcolor: "white" }}>
        <Grid sx={{ m: 5 }} item xs={7}>
          <Typography sx={{ color: "#795548" }} variant="h4">
            Con todas las comodidades
          </Typography>
          <Typography m={4}>
            Aliquam sed hendrerit urna, ac vestibulum metus. Integer tincidunt
            ullamcorper enim, vel iaculis massa sollicitudin ut. Etiam gravida
            libero non orci efficitur, congue mollis tortor efficitur. Integer
            quis mauris justo. Curabitur ante odio, interdum vel purus quis,
            maximus vulputate nunc. In quis enim urna. Mauris eu dignissim
            nulla. Nam feugiat, lectus at iaculis hendrerit, orci ante rhoncus
            libero, at imperdiet urna enim ac magna. Nam massa enim, tincidunt
            eu viverra eget, ultricies et nulla. Aenean luctus, urna a efficitur
            consectetur, neque ante gravida enim, id auctor purus metus quis
            sapien. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec non ligula nunc. Vestibulum
            accumsan tincidunt nisi. Maecenas malesuada scelerisque enim, nec
            euismod ante blandit sit amet. Aenean dignissim tortor nisi, quis
            tempus magna aliquam et.
          </Typography>
        </Grid>
        <Grid sx={{ m: 5 }} item xs={3}>
          <img alt="camper2" width="300px" src={Camper2}></img>
        </Grid>
      </Grid>
      <Grid container spacing={3} width="30%" m={7} sx={{ bgcolor: "white" }}>
        <Grid sx={{ m: 2 }} item xs={7}>
          <Grid sx={{ m: 3 }} item xs={3}>
            <img alt="camper2" width="300px" src={Camper2}></img>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={3} width="30%" m={7} sx={{ bgcolor: "white" }}>
        <Grid sx={{ m: 2 }} item xs={7}>
          <Grid sx={{ m: 3 }} item xs={3}>
            <img alt="camper2" width="300px" src={Camper2}></img>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={3} width="30%" m={7} sx={{ bgcolor: "white" }}>
        <Grid sx={{ m: 2 }} item xs={7}>
          <Grid sx={{ m: 3 }} item xs={3}>
            <img alt="camper2" width="300px" src={Camper2}></img>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
