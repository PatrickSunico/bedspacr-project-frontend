import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
 logOutUser,
 resetState,
 authData,
} from "../../../features/auth/authSlice";

const NavbarLinks = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const data = useSelector(authData);
 const { user } = data;

 const onLogout = () => {
  dispatch(logOutUser());
  dispatch(resetState());
  navigate("/");
 };

 return (
  <div className="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto">
   <div className=" lg:flex-grow">
    <Link
     className=" block mt-4 lg:inline-block lg:mt-0  mr-4 hover:text-gray-800 nav-links"
     to="/buy"
    >
     Buy
    </Link>

    <Link
     className=" block mt-4 lg:inline-block lg:mt-0  mr-4 hover:text-gray-800 nav-links"
     to="/sell"
    >
     Sell
    </Link>
   </div>

   <>
    <Link
     className=" block mt-4 lg:inline-block lg:mt-0  mr-4 hover:text-gray-800 nav-links"
     to="/login"
    >
     Login
    </Link>
    <Link
     className=" block mt-4 lg:inline-block lg:mt-0  mr-4 hover:text-gray-800 nav-links"
     to="/register"
    >
     Signup
    </Link>

    {user && user != null ? (
     <button
      onClick={onLogout}
      className=" background-transparent outline-none focus:outline-none block mt-4 lg:inline-block lg:mt-0  mr-4 hover:text-gray-800 nav-links"
     >
      Logout
     </button>
    ) : (
     ""
    )}
   </>
  </div>
 );
};

export default NavbarLinks;
