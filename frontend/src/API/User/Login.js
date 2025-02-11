import axios from "axios";

const base_url = "http://localhost:8080/api/v1/user";

export const login = async (userData) => {
  try {
    const response = await axios.post(base_url + "/login", userData);

    return response.data;
  } catch (error) {
    console.log("error fetching data", error);
  }
};
