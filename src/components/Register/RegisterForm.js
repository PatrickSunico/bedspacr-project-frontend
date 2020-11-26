import React from "react";

import "./Register.scss";

// Form Components
import { Link } from "react-router-dom";
import Input from "../Global/Input/Input";
import Checkbox from "../Global/Checkbox/Checkbox";
import Button from "../Global/Button/Button";

// Logos
import { ReactComponent as GoogleLogin } from "../../img/google.svg";
import { ReactComponent as FacebookLogin } from "../../img/facebook.svg";

const RegisterForm = () => {
  const onChange = async (event) => {
    // const { target } = event;
    // console.log(target);
  };
  return (
    <div className="w-full max-w-lg">
      <form>
        <div className="flex flex-wrap">
          <div className="flex flex-row w-full justify-between">
            <Input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
              onChange={(e) => onChange(e)}
              label="First Name"
              placeholder="First Name"
              name="first_name"
              type="text"
              required
            />

            <Input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
              label="Last Name"
              placeholder="Last Name"
              name="last_name"
              type="text"
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <Input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
            label="Email"
            placeholder="Email Address"
            name="email"
            type="email"
            onChange={(e) => onChange(e)}
            required
          />

          <Input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            onChange={(e) => onChange(e)}
            required
          />

          <Input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
            label="Confirm Password"
            placeholder="Confirm Password"
            name="repeat_password"
            type="password"
            onChange={(e) => onChange(e)}
            required
          />

          <div className="w-full flex px-3 mb-4 justify-between">
            <Checkbox
              className="mr-2 leading-tight"
              type="checkbox"
              name="loggedIn"
              label="Keep me logged in"
              onChange={(e) => onChange(e)}
              disabled={false}
            />
          </div>

          <div className="w-full px-3 mb-4">
            <Button className="h-12 w-full text-white font-bold py-3 px-3 rounded login-button primary-color-bg login-button">
              Sign Up
            </Button>
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
          <span className="flex-1 mr-4 text-gray-800">
            Sign up with Facebook
          </span>
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
