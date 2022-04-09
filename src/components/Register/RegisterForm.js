// React Utils
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

// Redux Toolkit Slice and Reducer
import {
 registerUser,
 authData,
 resetForm,
} from "../../features/auth/authSlice";

// SCSS
import "./Register.scss";

// Form Components
import Input from "../Global/Input/Input";
import Checkbox from "../Global/Checkbox/Checkbox";
import Button from "../Global/Button/Button";
import Loader from "../Loader/Loader";

// Logos
import { ReactComponent as GoogleLogin } from "../../img/google.svg";
import { ReactComponent as FacebookLogin } from "../../img/facebook.svg";

const RegisterForm = () => {
 // dispatch and navigate
 const navigate = useNavigate();
 const dispatch = useDispatch();

 // destructure the states
 const data = useSelector(authData);
 const { isLoading, isError, isSuccess, message, user } = data;

 const [checkLoginState, setCheckLoginState] = useState(false);
 const [formData, setFormData] = useState({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  repeat_password: "",
 });

 const { first_name, last_name, email, password, repeat_password } = formData;

 useEffect(() => {
  if (isError) {
   toast.error(message);
  }

  // if isSuccess or if user objects inside cookie exists
  if (isSuccess || user) {
   navigate("/dashboard/property-listings");
  }

  dispatch(resetForm());
 }, [user, isError, isSuccess, message, navigate, dispatch]);

 // Form Input Change Handler
 const handleChange = async (event) => {
  const { value, name } = event.target;

  // sets data to state
  setFormData((prevState) => ({
   ...prevState,
   [name]: value,
  }));
 };

 // Form Submission Handler
 const handleSubmit = async (event) => {
  event.preventDefault();

  const userData = {
   first_name,
   last_name,
   email,
   password,
   repeat_password,
  };

  const result = await dispatch(registerUser(userData));
 };

 return (
  <div className="w-full max-w-lg">
   <form onSubmit={handleSubmit} noValidate>
    <div className="flex flex-wrap">
     <div className="flex flex-row w-full justify-between">
      <Input
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
       onChange={handleChange}
       label="First Name"
       placeholder="First Name"
       name="first_name"
       type="text"
       value={first_name}
       required
      />

      <Input
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
       label="Last Name"
       placeholder="Last Name"
       name="last_name"
       type="text"
       onChange={handleChange}
       value={last_name}
       required
      />
     </div>

     <Input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
      label="Email"
      placeholder="Email Address"
      name="email"
      type="email"
      value={email}
      onChange={handleChange}
      required
     />

     <Input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
      label="Password"
      placeholder="Password"
      name="password"
      type="password"
      value={password}
      onChange={handleChange}
      autocomplete="current-password"
      required
     />

     <Input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
      label="Confirm Password"
      placeholder="Confirm Password"
      name="repeat_password"
      type="password"
      value={repeat_password}
      onChange={handleChange}
      autocomplete="current-password"
      required
     />

     <div className="w-full flex px-3 mb-4 justify-between">
      <Checkbox
       className="mr-2 leading-tight"
       type="checkbox"
       label="Keep me logged in"
       checked={checkLoginState}
       onChange={(e) => setCheckLoginState(e.target.checked)}
       disabled={false}
      />
     </div>

     <div className="w-full px-3 mb-4">
      {isLoading ? (
       <Loader />
      ) : (
       <Button className="h-12 w-full text-white font-bold py-3 px-3 rounded login-button primary-color-bg login-button">
        Sign Up
       </Button>
      )}
     </div>
    </div>
   </form>

   <div className="w-full px-3 mb-4">
    <Button className="h-12 w-full py-3 px-3 rounded inline-flex items-center bg-white">
     <GoogleLogin />
     <span className="flex-1 mr-4 text-gray-800">Sign up with Google</span>
    </Button>
   </div>

   <div className="w-full px-3 mb-4">
    <Button className="h-12 w-full py-3 px-3 rounded inline-flex items-center bg-white">
     <FacebookLogin />
     <span className="flex-1 mr-4 text-gray-800">Sign up with Facebook</span>
    </Button>
   </div>

   <div className="w-full px-3 mb-4 divider">OR</div>

   <p className="w-full text-center register-link">
    Already Registered?
    <Link to="/login" className=" ml-2 underline primary-color-text">
     Login
    </Link>
   </p>
  </div>
 );
};

export default RegisterForm;
