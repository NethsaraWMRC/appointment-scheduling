import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import TimeCard from "./TimeCard";

const timeArray = [
  {
    startTime: "9.00AM",
    endTime: "10.00AM",
  },
  {
    startTime: "9.00AM",
    endTime: "10.00AM",
  },
  {
    startTime: "9.00AM",
    endTime: "10.00AM",
  },
  {
    startTime: "9.00AM",
    endTime: "10.00AM",
  },
  {
    startTime: "9.00AM",
    endTime: "10.00AM",
  },
  {
    startTime: "9.00AM",
    endTime: "10.00AM",
  },
  {
    startTime: "9.00AM",
    endTime: "10.00AM",
  },
  {
    startTime: "9.00AM",
    endTime: "10.00AM",
  },
  {
    startTime: "9.00AM",
    endTime: "10.00AM",
  },
  {
    startTime: "9.00AM",
    endTime: "10.00AM",
  },
  {
    startTime: "9.00AM",
    endTime: "10.00AM",
  },
];

function TimeSelection() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        overflow: "scroll",
        scrollbarWidth: "none",
        alignItems: "center",
        marginTop: "20px",
        padding: "0 10px",
      }}
    >
      <Typography
        sx={{
          marginBottom: "15px",
        }}
      >
        Pick a Time
      </Typography>

      {timeArray.map((item, index) => (
        <TimeCard
          key={index}
          cardIndex={index}
          startTime={item.startTime}
          endTime={item.endTime}
          isSelect={selectedCardIndex === index}
          onSelect={setSelectedCardIndex}
        />
      ))}
    </Box>
  );
}

export default TimeSelection;
