import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Scheduled({
  selectedDate,
  startTime,
  endTime,
  setIsNotificationChecked,
}) {
  const handleCheckboxChange = (event) => {
    setIsNotificationChecked(event.target.checked);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: "1",
        color: "white",
        backgroundColor: "rgba(29,33,38, 0.8)",
        borderRadius: "10px",
        padding: "15px",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 600,
        }}
      >
        Scheduling
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5px",
          backgroundColor: "white",
          borderRadius: "5px",
          fontSize: "16px",
          color: "black",
        }}
      >
        {selectedDate || (startTime && endTime) ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography>{selectedDate}</Typography>

            <Typography>
              {startTime} - {endTime}
            </Typography>
          </Box>
        ) : (
          <Typography sx={{ fontSize: "14px", color: "rgba(0,0,0,0.3)" }}>
            Select a date and time slot.
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          marginTop: "15px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <NotificationsIcon sx={{ color: "white", fontSize: "30px" }} />

          <Box sx={{ display: "block" }}>
            <Typography sx={{ fontSize: "14px" }}>Notification</Typography>
            <Typography sx={{ fontSize: "12px" }}>
              Notify me for 1 day
            </Typography>
          </Box>
        </Box>

        <Checkbox
          color="default"
          sx={{ color: "white" }}
          onChange={handleCheckboxChange}
        />
      </Box>
    </Box>
  );
}

export default Scheduled;
