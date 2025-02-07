import React from "react";
import Calender from "../../components/Calender/Calender";
import TimeSelection from "../../components/TimeSelection/TimeSelection";
import { Box } from "@mui/material";
import Scheduled from "../../components/Scheduled/Scheduled";

function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "50%",
          height: "65vh",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Calender />
          <Scheduled />
        </Box>

        <TimeSelection />
      </Box>
    </Box>
  );
}

export default HomePage;
