import React from "react";
import "./Login.scss";

import { ReactComponent as HouseSprite } from "../../img/house-sprite.svg";

// Components
import LoginForm from "../Login/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-wrap h-screen">
      {/* Left */}
      <div className="items-center hidden md:flex  w-full md:w-1/2 xl:w-1/2 bg-white p-8">
        <div className="w-full max-w-sm ml-auto mr-auto flex flex-col items-center">
          <HouseSprite className="block ml-auto mr-auto" />
          <h2 className="ml-auto mr-auto text-center mt-10 mb-10 text-3xl xl:text-4xl font-black">
            Find the right
            <span className="ml-3 primary-color-text">Home</span>
          </h2>
          <ul className="hidden md:block list-disc list-inside text-xl font-thin">
            <li className="leading-6">Join millions of users</li>
            <li className="leading-6">Browse through thousands of houses</li>
            <li className="leading-6">Manage your property listings</li>
          </ul>
        </div>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-gray-100">
        <div className="overflow-hidden flex justify-center p-8 h-full items-center flex-col  mt-0 sm:mt-10 md:mt-0 xl:mt-0">
          <h3 className="ml-auto mr-auto text-center mb-10 text-3xl xl:text-4xl font-black">
            Sign In to your
            <span className="ml-3 primary-color-text">Account</span>
          </h3>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
