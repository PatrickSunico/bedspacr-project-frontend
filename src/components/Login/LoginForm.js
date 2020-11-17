import React from "react";
import { Link, Redirect } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap mb-6">
        {/* <Input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
          label="Email Address"
          placeholder="Email"
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
        /> */}

        <div className="w-full flex px-3 mb-4 justify-between">
          {/* <Checkbox
            className="mr-2 leading-tight"
            type="checkbox"
            name="loggedIn"
            label="Keep me logged in"
            onChange={(e) => onChange(e)}
            checked={loggedIn}
            disabled={false}
          /> */}

          <Link
            to="/"
            className="md:w-1/2 block text-gray-500 font-bold text-right"
          >
            {/* <PrimaryColored className="text-sm">Forgot Password</PrimaryColored> */}
          </Link>
        </div>

        <div className="w-full px-3 mb-4">
          {/* <Button className="h-12 w-full text-white font-bold py-3 px-3 rounded">
            Login
          </Button> */}
        </div>

        <div className="w-full px-3 mb-4">
          {/* <Button
            socialLogin
            className="h-12 w-full text-white py-3 px-3 rounded inline-flex items-center"
          >
            <GoogleLogin />
            <GenericSpan className="flex-1 mr-4">Login to Google</GenericSpan>
          </Button> */}
        </div>

        <div className="w-full px-3 mb-4">
          {/* <Button
            socialLogin
            className="h-12 w-full text-white py-3 px-3 rounded inline-flex items-center"
          >
            <FacebookLogin />
            <GenericSpan className="flex-1 mr-4">Login to Facebook</GenericSpan>
          </Button> */}
        </div>

        <div className="w-full px-3 mb-4" divider>
          OR
        </div>

        <p login className="w-full  text-center">
          Dont have an account?
          <Link to="/register">Register</Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
