import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Grid from "@mui/material/Grid";

export default function Payment() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffe082",
        width: 700,
        height: 300,
        borderRadius: "16px",
        m: 2,
      }}
    >
      <Box p={1} sx={{ height: 500, width: 800, flexDirection: "column-2" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography p={3} variant="h5" sx={{ fontWeight: "bold" }}>
              Procedimiento de pago
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Número de tarjeta:</Typography>
            <TextField
              id="outlined-required"
              type="text"
              name="card"
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Fecha de caducidad:</Typography>
            <TextField
              id="outlined-required"
              type="text"
              name="date"
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Titular de la tarjeta:</Typography>
            <TextField
              id="outlined-required"
              type="text"
              name="name"
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>CVV:</Typography>
            <TextField
              id="outlined-required"
              type="password"
              name="cvv"
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
