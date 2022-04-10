import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
 Outlet,
 Navigate,
 Redirect,
 useNavigate,
 useLocation,
} from "react-router-dom";
import { authData } from "../../../features/auth/authSlice";

const ProtectedRoutes = () => {
 const data = useSelector(authData);
 const navigate = useNavigate();
 const { user } = data;
 const location = useLocation();

 useEffect(() => {
  if (!user && user == null) {
   navigate("/login");
  }
 }, [user, navigate]);

 return user && user != null ? (
  <Outlet />
 ) : (
  <Navigate to="/login" state={{ location }} replace />
 );
};

export default ProtectedRoutes;
