import React, { useState } from "react";
import Calender from "../../components/Calender/Calender";
import TimeSelection from "../../components/TimeSelection/TimeSelection";
import { Box, Button, Typography } from "@mui/material";
import Scheduled from "../../components/Scheduled/Scheduled";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigation = useNavigate();

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isNotificationChecked, setIsNotificationChecked] = useState(false);

  const handleNavigation = () => {
    if (selectedDate && selectedTime) {
      navigation("/form", {
        state: {
          selectedDate,
          selectedTime,
          isNotificationChecked,
        },
      });
    } else {
      alert("Please select a date and time.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "15px",
          marginBottom: "15px",
          fontSize: "24px",
          fontWeight: 600,
        }}
      >
        Select Date And Time
      </Typography>

      {/* Calender and Scheduled */}

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
          <Calender
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
          />
          <Scheduled
            selectedDate={selectedDate?.format("YYYY-MM-DD")}
            startTime={selectedTime?.startTime}
            endTime={selectedTime?.endTime}
            setIsNotificationChecked={setIsNotificationChecked}
          />
        </Box>

        {/* Time Slection */}

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

          <TimeSelection
            selectedDate={selectedDate}
            setSelectedTime={setSelectedTime}
          />

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
                backgroundColor: "rgba(9, 13, 17, 0.8)",
                width: "50%",
              }}
              onClick={handleNavigation}
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
