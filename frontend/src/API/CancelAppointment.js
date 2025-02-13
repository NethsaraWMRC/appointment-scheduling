import axiosInstance from "./axiosInstance";

export const cancelAppointment = async (appointmentId) => {
  try {
    const response = await axiosInstance.put(
      "/appointment/" + appointmentId + "/cancel"
    );

    return response.data;
  } catch (error) {
    console.log("error fetching data", error);
  }
};
