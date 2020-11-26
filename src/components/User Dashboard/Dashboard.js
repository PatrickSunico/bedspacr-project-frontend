import React from "react";
import "./Dashboard.scss";

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div id="main-dashboard h-screen">
      <div className="flex flex-wrap">
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

        <div className="main-body w-full bg-gray-200 pl-0 lg:pl-64 min-h-screen">
          <div className="px-20 py-10">
            <div className="flex flex-row justify-between">
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full  px-2 py-2 text-2xl font-black text-gray-700 focus:outline-none focus:ring focus:border-blue-300 items-center"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    All Properties
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div className="lg:hidden origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Account settings
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Support
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      License
                    </Link>
                    <form method="POST" action="#">
                      <button
                        type="submit"
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                      >
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <button className="h-12 text-white font-medium py-3 px-3 rounded primary-color-bg ">
                Add a Listing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
