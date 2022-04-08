import axios from "axios";

// Register User
const register = async (userData) => {
 const SIGNUP = "api/users/signup";

 try {
  const response = await axios.post(SIGNUP, userData);
  if (response.data) {
   localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
 } catch (error) {
  if (error.response) {
   const { data } = error.response;
   throw data.error;
  }
 }

};

const login = async (userData) => {
 const SIGNIN = "api/users/signin";
 try {
  const response = await axios.post(SIGNIN, userData);
  console.log(response);
  if (response.data) {
   localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
 } catch (error) {
  console.log(error);
 }
};

const authService = {
 register,
 login,
};
export default authService;
