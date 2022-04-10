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
  if (error) {
   throw error;
  }
 }
};

const login = async (userData) => {
 const SIGNIN = "api/users/signin";
 try {
  const response = await axios.post(SIGNIN, userData);

  if (response.data) {
   localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
 } catch (error) {
  if (error) {
   throw error;
  }
 }
};

const logout = async () => {
 localStorage.removeItem("user");
};

const authService = {
 register,
 login,
 logout,
};
export default authService;
