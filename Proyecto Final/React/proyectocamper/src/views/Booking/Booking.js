import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";

export default function Booking() {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  function handleSelect(data) {
    let startDate = "";
    let endDate = "";

    for(let clave in data) {
        startDate = data[clave].startDate;
        endDate = data[clave].endDate;
    }

    setDate({
        startDate: startDate,
        endDate: endDate
    })
  }

  return (
    <div>
      <DateRangePicker ranges={[date]} onChange={handleSelect} />
    </div>
  );
}
