import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import format from "date-fns/format";
import Chip from "@mui/material/Chip";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Camper3 from "../../Images/Camper3.jpg";

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
          flexDirection: "row",
          borderRadius: "16px",
        }}
      >
        <Box m={9}>
          <img alt="camper" src={Camper3} width="200px"></img>
        </Box>
        <Box sx={{ m: 8 }}>
          <Typography>
            ¡Genial! Estos son los detalles de tu reserva:
          </Typography>
          <Typography m={2}>
            Día de entrada:{" "}
            <Chip
              icon={<ArrowForwardIcon />}
              label={format(date.startDate, "dd/MM/yyyy")}
              variant="outlined"
            />
          </Typography>
          <Typography m={2}>
            Día de salida:{" "}
            <Chip
              icon={<ArrowBackIcon />}
              label={format(date.endDate, "dd/MM/yyyy")}
              variant="outlined"
            />
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
