import axios from "axios";

const base_url = "http://localhost:8080/api/v1/appointment";

export const cancelAppointment = async (appointmentId) => {
  try {
    const response = await axios.put(
      base_url + "/" + appointmentId + "/cancel"
    );

    return response.data;
  } catch (error) {
    console.log("error fetching data", error);
  }
};
