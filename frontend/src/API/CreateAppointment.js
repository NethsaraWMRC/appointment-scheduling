import axios from "axios";

const base_url = "http://localhost:8080/api/v1/appointment";

export const createAppointment = async (appointment) => {
  console.log("app", appointment);
  try {
    const response = await axios.post(base_url + "/create-appointment", {
      userId: appointment.userId,
      timeSlotId: appointment.selectedTime.id,
      fullname: appointment.fullName,
      message: appointment.message,
      phone: appointment.phoneNumber,
    });

    return response.data;
  } catch (error) {
    console.log("error fetching data", error);
  }
};
