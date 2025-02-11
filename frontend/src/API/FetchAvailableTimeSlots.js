import axios from "axios";
import { convertedTimeData } from "./data";

const base_url = "http://localhost:8080/api/v1";

export const fetchAvailableTimeSlots = async (date) => {
  try {
    date = date?.format("YYYY-MM-DD");

    const response = await axios.get(base_url + "/timeslot/get-time-slots", {
      params: { date: date },
    });
    // const dummy = convertedTimeData;

    // console.log(response.data);

    return response.data;
  } catch (error) {
    console.log("error fetching data", error);
  }
};
