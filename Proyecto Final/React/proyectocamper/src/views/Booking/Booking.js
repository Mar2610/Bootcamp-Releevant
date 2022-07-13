import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Calendar from "../../Components/Calendar";
import BookResume from "../../Components/BookResume/BookResume";
import { useAuthContext } from "../../Contexts/LoginContext";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import Payment from "../../Components/Payment/Payment";
import "./bookin.css";

export default function Booking() {
  const navigate = useNavigate();
  const { auth } = useAuthContext();
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  async function handleDates(e) {
    e.preventDefault();
    const bookDate = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        startDate: date.startDate.toDateString(),
        endDate: date.endDate.toDateString(),
      }),
    };

    const response = await fetch(
      `http://localhost:3001/insertDate/${auth.userName}`,
      bookDate
    );
    const data = await response.json();
    if (response.status === 200) {
      setDate(data);
      setActiveStep(3);
    }
  }

  const steps = [
    "Elige tus fechas",
    "Resumen de tu reserva",
    "Realiza el pago",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function login() {
    navigate("/login");
  }

  function form() {
    navigate("/form");
  }

  function finish() {
    navigate("/");
  }

  const stepsComponent = {
    0: <Calendar date={date} setDate={setDate} />,
    1: <BookResume date={date} />,
    2: <Payment />,
  };

  console.log(activeStep);

  return (
    <>
      {auth ? (
        <Box sx={{ width: "90%", m: 5, justifyContent: "center" }}>
          <Stepper activeStep={activeStep} alternativeLabel={true}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step
                  sx={{ fontWeight: "bold", color: "red" }}
                  key={label}
                  {...stepProps}
                >
                  <StepLabel
                    sx={{ fontWeight: "bold", color: "red" }}
                    {...labelProps}
                  >
                    {" "}
                    {label}{" "}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
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
          ) : (
            <>
              <Box display="flex" justifyContent="center" p={1}>
                {stepsComponent[activeStep]}
              </Box>
              <Box sx={{ flex: "1 1 auto" }}>
                <Button
                  color="success"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Anterior
                </Button>
                <Button
                  color="success"
                  size="small"
                  variant="contained"
                  onClick={
                    activeStep === steps.length - 1 ? handleDates : handleNext
                  }
                >
                  {activeStep === steps.length - 1
                    ? "Pagar y finalizar"
                    : "Siguiente"}
                </Button>
              </Box>
            </>
          )}
        </Box>
      ) : (
        <Box display="flex" justifyContent="center" p={5}>
          <Stack
            sx={{
              height: 300,
              width: "30%",
              textAlign: "center",
              justifyContent: "center",
            }}
            spacing={2}
          >
            <Alert severity="warning" sx={{ backgroundColor: "#ef5350" }}>
              <AlertTitle sx={{ textAlign: "center" }}>Atención</AlertTitle>
              Debes registrarte o iniciar sesión{" "}
              <strong>para realizar tu reserva</strong>
            </Alert>
            <>
              <Box>
                <Button
                  sx={{ backgroundColor: "#ccff90", color: "black", m: 2 }}
                  onClick={login}
                >
                  Inicia sesión
                </Button>
                <Button
                  sx={{ backgroundColor: "#eeff41", color: "black", m: 2, '&:hover': {
                    backgroundColor: "orange"
                  } }}
                  onClick={form}
                >
                  Regístrate
                </Button>
              </Box>
            </>
          </Stack>
        </Box>
      )}
    </>
  );
}
