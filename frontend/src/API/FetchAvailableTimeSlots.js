import axiosInstance from "./axiosInstance";

export const fetchAvailableTimeSlots = async (date) => {
  try {
    date = date?.format("YYYY-MM-DD");

    const response = await axiosInstance.get("/timeslot/get-time-slots", {
      params: { date: date },
    });

    return response.data;
  } catch (error) {
    console.log("error fetching data", error);
  }
};
