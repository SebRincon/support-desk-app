import axios from "axios";

const API_URL = "/api/users";

// Regiser User
export const register = async (userData) => {
  // Create HTTP request to api & pass data
  const response = await axios.post(API_URL, userData);
  // On response, store the data on localStorage
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
};

export default authService;
