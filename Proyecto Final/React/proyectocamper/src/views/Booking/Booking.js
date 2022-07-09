import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(null);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  function handleSelect(data) {
    let startDate = "";
    let endDate = "";

    for (let i in data) {
      startDate = data[i].startDate;
      endDate = data[i].endDate;
    }

    setDate({
      startDate: startDate,
      endDate: endDate,
    });
  }

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

    const response = await fetch("http://localhost:3001/insertDate", bookDate);
    const data = await response.json();
    if (data.ok) {
      setDate(data);
    }
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
      setDisabled(disDays.flat());
    }
    disabledDates();
  }, []);

  console.log(disabled);

  // console.log(dis);

  return (
    <div>
      <DateRangePicker
        ranges={[date]}
        onChange={handleSelect}
        disabledDates={disabled ?? []}
        dateDisplayFormat={"yyyy.MM.dd"}
      />
      <Button onClick={handleDates}>Enviar</Button>
    </div>
  );
}
