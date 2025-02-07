import { Box, Radio, Typography } from "@mui/material";
import React, { useState } from "react";

function TimeCard({ cardIndex, startTime, endTime, isSelect, onSelect }) {
  const handleClick = () => {
    onSelect(cardIndex);
  };

  return (
    <Box
      sx={{
        border: "1px solid rgba(0,0,0,0.2)",
        borderRadius: "10px",
        padding: "5px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isSelect ? "red" : "white",
        cursor: "pointer",
        transition: "all 0.15s ease",
        marginBottom: "15px",
        width: "95%",

        "&:hover": {
          transform: "scale(1.02)",
          backgroundColor: "red",
        },
      }}
      onClick={handleClick}
    >
      {/* <Radio checked={isClicked} onChange={handleClick} /> */}
      <Typography
        sx={{
          fontSize: "16px",
        }}
      >
        {startTime} - {endTime}
      </Typography>
    </Box>
  );
}

export default TimeCard;
