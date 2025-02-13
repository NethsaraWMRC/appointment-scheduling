import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createAppointment } from "../../API/CreateAppointment";

function Form() {
  const location = useLocation();
  const navigate = useNavigate();

  const userId = JSON.parse(localStorage.getItem("userId"));

  const { selectedDate, selectedTime, isNotificationChecked } =
    location.state || {};

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    message: "",
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Basic validation
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Check if full name is filled
    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required.";
      isValid = false;
    }

    // Check if phone number is valid
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits.";
      isValid = false;
    }

    // Check if message is filled
    if (!formData.message) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const dataToSend = {
        fullName: formData.fullName,
        userId: userId,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
        selectedDate,
        selectedTime,
        isNotificationChecked,
      };

      try {
        const res = await createAppointment(dataToSend);
        console.log(res);
      } catch (error) {
        console.log(error);
      }

      navigate("/appointments");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 600,
          margin: "15px 0 30px 0",
        }}
      >
        Fill your details
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          gap: "15px",
        }}
      >
        <Typography sx={{ marginBottom: "10px" }}>Full Name</Typography>
        <TextField
          id="full-name"
          name="fullName"
          label="Full Name"
          variant="outlined"
          value={formData.fullName}
          onChange={handleInputChange}
          error={!!errors.fullName}
          helperText={errors.fullName}
          sx={{ height: "50px", "& .MuiInputBase-root": { height: "100%" } }}
        />

        <Typography sx={{ marginBottom: "10px" }}>Phone Number</Typography>
        <TextField
          id="phone-number"
          name="phoneNumber"
          label="Phone Number"
          variant="outlined"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
          sx={{ height: "50px", "& .MuiInputBase-root": { height: "100%" } }}
        />

        <Typography sx={{ marginBottom: "10px" }}>Message</Typography>
        <TextField
          id="message"
          name="message"
          label="Message"
          variant="outlined"
          multiline
          maxRows={4}
          value={formData.message}
          onChange={handleInputChange}
          error={!!errors.message}
          helperText={errors.message}
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
              minWidth: "150px",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Form;
