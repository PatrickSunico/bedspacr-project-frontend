import axios from "axios";

const API_URL = "api/users/signup";

// Register User
const register = async (userData) => {
 try {
  const response = await axios.post(API_URL, userData);
  console.log(response);
  if (response.data) {
   localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
 } catch (error) {
  if (error.response) {
   console.log(error.response);
   //    return error.response;
  }
 }
};

const authService = {
 register,
};
export default authService;
