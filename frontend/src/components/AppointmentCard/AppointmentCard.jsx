import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { cancelAppointment } from "../../API/CancelAppointment";

function AppointmentCard({
  date,
  startTime,
  endTime,
  appointmentId,
  setIsChange,
}) {
  const handleCancel = async () => {
    try {
      const res = await cancelAppointment(appointmentId);
      setIsChange((prev) => !prev);

      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        width: { xs: "75%", sm: "50%", md: "25%" },

        height: "auto",
        backgroundColor: "rgb(252, 248, 248)",
        borderRadius: "15px",
        boxShadow: "2px 5px 5px rgba(0,0,0,0.1)",
        padding: "10px",
        marginBottom: "25px",
      }}
    >
      <Typography>
        <span style={{ fontWeight: 600 }}>Scheduled Date -</span>{" "}
        <span style={{ fontSize: "14px", opacity: 0.7 }}>{date}</span>
      </Typography>
      <Typography>
        <span style={{ fontWeight: 600 }}>Scheduled Date -</span>{" "}
        <span style={{ fontSize: "14px", opacity: 0.7 }}>
          {startTime} - {endTime}
        </span>
      </Typography>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <Button color="error" onClick={handleCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

export default AppointmentCard;
