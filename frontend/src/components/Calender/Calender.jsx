import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box } from "@mui/material";
import dayjs from "dayjs";

export default function Calender({ selectedDate, setSelectedDate }) {
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const disablePastDates = (date) => {
    return date.isBefore(dayjs(), "day");
  };

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={selectedDate}
          onChange={handleDateChange}
          shouldDisableDate={disablePastDates}
        />
      </LocalizationProvider>
    </Box>
  );
}
