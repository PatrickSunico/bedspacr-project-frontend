import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

import { ReactComponent as BedspacrLogo } from "../../img/bedspacr-logo.svg";
import { ReactComponent as Search } from "../../img/search.svg";

// Components

import NavbarLinks from "./NavbarLinks/NavbarLinks";

function Navbar() {
 return (
  <nav className="fixed z-50 w-full flex items-center justify-between flex-wrap bg-white p-4 border-b border-gray-200">
   <div className=" flex flex-1 items-center flex-shrink-0 text-white mr-2 w-full">
    <Link className="flex-2" to="/">
     <BedspacrLogo />
    </Link>
    <div className="flex-1 w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
     <form className="mr-3 ml-3 flex flex-row ">
      <input
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l-sm py-2 px-4 focus:outline-none focus:shadow-outline"
       type="text"
       placeholder="e.g New York, NY"
      />
      <span className=" flex items-center bg-teal-500 rounded rounded-l-none border-0 px-3 font-bold text-grey-100">
       <button type="submit" className=" text-lg text-white font-bold rounded">
        <Search />
       </button>
      </span>
     </form>
    </div>
   </div>
   <div className="flex justify-end lg:hidden">
    <button
     type="button"
     className="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-black hover:border-black"
    >
     <svg
      className="fill-current h-3 w-3"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
     >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
     </svg>
    </button>
   </div>
   <NavbarLinks />
  </nav>
 );
}

export default Navbar;
