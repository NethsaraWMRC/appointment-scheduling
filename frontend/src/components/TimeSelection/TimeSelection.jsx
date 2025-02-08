import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import TimeCard from "./TimeCard";
import { fetchAvailableTimeSlots } from "../../API/FetchAvailableTimeSlots";

function TimeSelection({ selectedDate, setSelectedTime }) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);
  const [timeArray, setTimeArray] = useState([]);

  useEffect(() => {
    fetchTimeSlots();
  }, [selectedDate]);

  const fetchTimeSlots = async () => {
    try {
      const response = await fetchAvailableTimeSlots(selectedDate);
      setTimeArray(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (index) => {
    setSelectedCardIndex(index);
    setSelectedTime(timeArray[index]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        overflow: "scroll",
        scrollbarWidth: "none",
        alignItems: "center",
        marginTop: "20px",
        padding: "0 10px",
      }}
    >
      {timeArray &&
        timeArray.map((item, index) => (
          <TimeCard
            key={index}
            cardIndex={index}
            startTime={item.startTime}
            endTime={item.endTime}
            isSelect={selectedCardIndex === index}
            onSelect={() => handleSelect(index)}
          />
        ))}
    </Box>
  );
}

export default TimeSelection;
