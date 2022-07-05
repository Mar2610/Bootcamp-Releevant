import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import { Button } from "@mui/material";
import { format } from "date-fns";

export default function Booking() {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  

  function handleSelect(data) {
    let startDate = "";
    let endDate = "";

    for (let i in data) {
      startDate = new Date(data[i].startDate.getFullYear()+data[i].startDate.getMonth()+data[i].startDate.getDate());
      endDate = new Date(data[i].endDate.getFullYear()+data[i].endDate.getMonth()+data[i].endDate.getDate());
    }

    setDate({
      startDate: startDate,
      endDate: endDate,
    });
    console.log(date);
  }

  let days = [];

  for(let i in date) {
    days.push(date[i].toString());
  }


  // console.log(days);

  async function handleDates(e) {
    e.preventDefault();
    const bookDate = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(date),
    };

    const response = await fetch("http://localhost:3001/insertDate", bookDate);
    const data = await response.json();
    if (data.ok) {
      setDate(data);
    }
  }

  const dates = [date];
  const disabledDates = dates.map((element) => new Date(element));

  return (
    <div>
        <DateRangePicker
          ranges={[date]}
          onChange={handleSelect}
          disabledDates={disabledDates}
          dateDisplayFormat={"yyyy.MM.dd"}
        />
        <Button onClick={handleDates}>Enviar</Button>
    </div>
  );
}
