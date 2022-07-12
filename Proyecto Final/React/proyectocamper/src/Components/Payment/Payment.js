import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Payment () {
    return (
        <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#ffe082",
              width: "30vw",
              height: "55vh",
              borderRadius: "16px",
              m: 2
            }}
          >
            <Typography p={3} variant="h5" sx={{ fontWeight: "bold" }}>
              Procedimiento de pago
            </Typography>
            <Box p={1}>
              <Typography>Número de cuenta:</Typography>
              <TextField
                id="outlined-required"
                label="Número de cuenta"
                type="text"
                name="userName"
                sx={{ backgroundColor: "white" }}
              />
            </Box>
            <Box p={1}>
              <Typography>lhvjdhfv</Typography>
              <TextField
                id="outlined-required"
                label="Contraseña"
                type="password"
                name="password"
                sx={{ backgroundColor: "white" }}
              />
            </Box>
          </Box>
        )
} 