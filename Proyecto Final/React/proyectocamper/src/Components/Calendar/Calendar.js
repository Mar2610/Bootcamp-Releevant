import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import { useAuthContext } from "../../Contexts/LoginContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Calendar({date, setDate}) {
  const { auth } = useAuthContext();
  const [disabled, setDisabled] = useState(null);

  function handleSelect(data) {
    let startDate = "";
    let endDate = "";

    for (let i in data) {
      startDate = data[i].startDate;
      endDate = data[i].endDate;
    }

    setDate({
      startDate,
      endDate
    });
  }

  useEffect(function () {
    async function disabledDates() {
      const response = await fetch("http://localhost:3001/getBooks");
      const datas = await response.json();
      let disDays = datas.map((item) =>
        eachDayOfInterval({
          start: new Date(item.startDate),
          end: new Date(item.endDate),
        })
      );
      console.log(disDays,'esto es disDays')
      setDisabled(disDays.flat());
    }
    disabledDates();
  }, []);


  return (
    <Box
      sx={{
        m: 5,
      }}
    >
      <Box sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              width: 700,
              height: 500,
              borderRadius: "16px",
            }}>
      <Typography m={2} variant="h5">1. Selecciona tus fechas</Typography>
      <DateRangePicker
        ranges={[date]}
        onChange={handleSelect}
        disabledDates={disabled ?? []}
        dateDisplayFormat={"yyyy.MM.dd"}
        sx={{width: 600}}
      />
      {/* <Button onClick={handleDates}>Enviar</Button> */}
      </Box>
    </Box>
  );
}
