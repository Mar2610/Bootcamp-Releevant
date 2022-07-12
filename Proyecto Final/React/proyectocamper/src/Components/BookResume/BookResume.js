import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import format from "date-fns/format";
import Chip from "@mui/material/Chip";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BookResume({ date }) {
  return (
    <Grid>
      <Box
        sx={{
          mr: 2,
          width: 800,
          height: 300,
          backgroundColor: "#ffe082",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: "16px",
        }}
      >
        <Typography variant="h5">
          Detalles de tu reserva:
        </Typography>
        <Typography>
          - Día de entrada: <Chip icon={<ArrowForwardIcon />} label={format(date.startDate, "dd/MM/yyyy")} variant="outlined" />
        </Typography>
        <Typography>
          - Día de salida: <Chip icon={<ArrowBackIcon />} label={format(date.endDate, "dd/MM/yyyy")} variant="outlined" />
        </Typography>
      </Box>
    </Grid>
  );
}
