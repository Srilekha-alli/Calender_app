import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarView() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([
    { date: "2025-01-01", type: "LinkedIn Post", notes: "Posted about partnership." },
    { date: "2025-01-05", type: "Email", notes: "Sent follow-up email." },
  ]);

  const handleDateClick = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    const eventsOnDate = events.filter((event) => event.date === formattedDate);
    if (eventsOnDate.length) {
      alert(
        `Communications on ${formattedDate}:\n${eventsOnDate
          .map((event) => `${event.type}: ${event.notes}`)
          .join("\n")}`
      );
    } else {
      alert("No communications on this date.");
    }
  };

  const addEvent = () => {
    const newEvent = {
      date: prompt("Enter date (YYYY-MM-DD):"),
      type: prompt("Enter communication type:"),
      notes: prompt("Enter notes:"),
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <h2>Calendar View</h2>
      <Calendar onClickDay={handleDateClick} onChange={setDate} value={date} />
      <button onClick={addEvent}>Add Communication</button>
    </div>
  );
}

export default CalendarView;
