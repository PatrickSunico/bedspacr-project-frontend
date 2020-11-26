import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="side-nav w-1/2 md:w-1/3 lg:w-64 fixed  md:left-0 h-screen lg:block bg-white border-r z-30 hidden px-4 py-10">
      <ul>
        <li>
          <Link
            className=" block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-gray-800 py-2"
            to="/dashboard"
          >
            Property Listing
          </Link>
        </li>

        <li>
          <Link
            className=" block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-gray-800 py-2"
            to="/deposits"
          >
            Deposits
          </Link>
        </li>

        <li>
          <Link
            className=" block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-gray-800 py-2"
            to="/dashboard"
          >
            Tickets
          </Link>
        </li>

        <li>
          <Link
            className=" block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-gray-800 py-2"
            to="/dashboard"
          >
            Contracts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
