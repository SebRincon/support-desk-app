import axios from "axios";

const API_URL = "/api/users";

// Regiser User
const register = async (userData) => {
  // Create HTTP request to api & pass data
  const response = await axios.post(API_URL, userData);
  // On response, store the data on localStorage

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
};

export default authService;
