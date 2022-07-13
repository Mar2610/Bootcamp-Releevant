import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export default function PaymentConfirmed() {
  const navigate = useNavigate();

  function finish() {
    navigate("/");
  }

  return (
    <>
      <Box display="flex" justifyContent="center" p={5}>
        <Alert
          sx={{
            height: 100,
            width: 300,
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
          alignItems="center"
          spacing={2}
          severity="success"
        >
          Reserva realizada con éxito!
        </Alert>
      </Box>
      <Box>
        <Button
          color="success"
          size="small"
          variant="contained"
          onClick={finish}
        >
          Volver al inicio
        </Button>
      </Box>
    </>
  );
}
