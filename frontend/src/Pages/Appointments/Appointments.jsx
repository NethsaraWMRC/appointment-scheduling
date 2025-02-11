import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import { fetchAppointment } from "../../API/FetchAppointments";

function Appointments() {
  const [appointments, setAppointments] = useState();
  const [isChange, setIsChange] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchAppointments();
  }, [isChange]);

  const fetchAppointments = async () => {
    try {
      const res = await fetchAppointment(user.id);
      setAppointments(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        paddingTop: "15px",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 600,
          marginBottom: "15px",
        }}
      >
        Scheduled Appointments
      </Typography>

      {appointments &&
        appointments.map(
          (item, index) =>
            item.status === "BOOKED" && (
              <AppointmentCard
                key={index}
                startTime={item.timeSlot.startTime}
                endTime={item.timeSlot.endTime}
                date={item.timeSlot.date}
                appointmentId={item.id}
                setIsChange={setIsChange}
              />
            )
        )}
    </Box>
  );
}

export default Appointments;
