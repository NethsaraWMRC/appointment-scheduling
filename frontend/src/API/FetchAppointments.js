import axiosInstance from "./axiosInstance";

export const fetchAppointment = async (userId) => {
  try {
    const response = await axiosInstance.get(
      "/appointment/get-user-appointments",
      {
        params: { userId: userId },
      }
    );

    return response.data;
  } catch (error) {
    console.log("error fetching data", error);
  }
};
