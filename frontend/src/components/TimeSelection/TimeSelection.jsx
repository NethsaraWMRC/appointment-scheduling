import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TimeCard from "./TimeCard";
import { fetchAvailableTimeSlots } from "../../API/FetchAvailableTimeSlots";
import dayjs from "dayjs";

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
      {timeArray && timeArray.length > 0 ? (
        timeArray.map(
          (item, index) =>
            item.isAvailable && (
              <TimeCard
                key={index}
                cardIndex={index}
                startTime={dayjs(item?.startTime, "HH:mm:ss").format("HH:mm")}
                endTime={dayjs(item?.endTime, "HH:mm:ss").format("HH:mm")}
                isSelect={selectedCardIndex === index}
                onSelect={() => handleSelect(index)}
              />
            )
        )
      ) : (
        <Typography
          sx={{
            opacity: 0.35,
          }}
        >
          {" "}
          No available time slots
        </Typography>
      )}
    </Box>
  );
}

export default TimeSelection;
