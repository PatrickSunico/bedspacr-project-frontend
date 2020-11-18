import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Login.scss";

// Form Components
import Input from "../Global/Input/Input";
import Checkbox from "../Global/Checkbox/Checkbox";
import Button from "../Global/Button/Button";

// Logos
import { ReactComponent as GoogleLogin } from "../../img/google.svg";
import { ReactComponent as FacebookLogin } from "../../img/facebook.svg";

const onChange = async (event) => {
  const { target } = event;
  console.log(target);
};

const LoginForm = () => {
  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap mb-6">
        <Input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
          onChange={(e) => onChange(e)}
          label="Email Address"
          placeholder="Email"
          name="email"
          type="email"
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

        <div className="w-full flex px-3 mb-4 justify-between">
          <Checkbox
            className="mr-2 leading-tight"
            type="checkbox"
            name="loggedIn"
            label="Keep me logged in"
            onChange={(e) => onChange(e)}
            disabled={false}
          />

          <Link
            to="/"
            className="md:w-1/2 block text-gray-500 font-bold text-right"
          >
            <span className="text-sm primary-color-text font-thin">
              Forgot Password
            </span>
          </Link>
        </div>

        <div className="w-full px-3 mb-4">
          <Button className="h-12 w-full text-white font-bold py-3 px-3 rounded login-button primary-color-bg login-button">
            Login
          </Button>
        </div>

        <div className="w-full px-3 mb-4">
          <Button className="h-12 w-full py-3 px-3 rounded inline-flex items-center bg-white">
            <GoogleLogin />
            <span className="flex-1 mr-4 text-gray-800">Login to Google</span>
          </Button>
        </div>

        <div className="w-full px-3 mb-4">
          <Button className="h-12 w-full py-3 px-3 rounded inline-flex items-center bg-white">
            <FacebookLogin />
            <span className="flex-1 mr-4 text-gray-800">Login to Facebook</span>
          </Button>
        </div>

        <div className="w-full px-3 mb-4 divider">OR</div>

        <p className="w-full text-center register-link">
          Dont have an account?
          <Link to="/register" className=" ml-2 underline primary-color-text">
            Register
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
