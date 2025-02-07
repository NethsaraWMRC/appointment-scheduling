import React from "react";
import Calender from "../../components/Calender/Calender";
import TimeSelection from "../../components/TimeSelection/TimeSelection";
import { Box, Button, Typography } from "@mui/material";
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
          height: "70vh",
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

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",

            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              marginTop: "15px",
              marginLeft: "15px",
            }}
          >
            Pick a Time
          </Typography>

          <TimeSelection />

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                margin: "25px 15px 0 15px",
                borderRadius: "10px",
                backgroundColor: "rgba(6, 82, 169, 0.8)",
                width: "50%",
              }}
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
