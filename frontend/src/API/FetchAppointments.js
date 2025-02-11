import axios from "axios";

const base_url = "http://localhost:8080/api/v1/appointment";

export const fetchAppointment = async (userId) => {
  try {
    const response = await axios.get(base_url + "/get-user-appointments", {
      params: { userId: userId },
    });

    return response.data;
  } catch (error) {
    console.log("error fetching data", error);
  }
};
