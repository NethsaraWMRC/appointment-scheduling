import axios from "axios";
import { convertedTimeData } from "./data";

const base_url = "http://localhost:8080/api/v1";

export const fetchAvailableTimeSlots = async (date) => {
  try {
    // const response = await axios.get("/get-time-slot/" + date);
    const response = convertedTimeData;

    return response;
  } catch (error) {
    console.log("error fetching data", error);
  }
};
