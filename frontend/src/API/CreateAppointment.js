import axiosInstance from "./axiosInstance";

export const createAppointment = async (appointment) => {
  console.log("app", appointment);
  try {
    const response = await axiosInstance.post(
      "/appointment/create-appointment",
      {
        userId: appointment.userId,
        timeSlotId: appointment.selectedTime.id,
        fullname: appointment.fullName,
        message: appointment.message,
        phone: appointment.phoneNumber,
      }
    );

    return response.data;
  } catch (error) {
    console.log("error fetching data", error);
  }
};
