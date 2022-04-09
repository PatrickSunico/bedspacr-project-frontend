import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate, Redirect, useNavigate } from "react-router-dom";
import { authData } from "../../../features/auth/authSlice";

const ProtectedRoutes = () => {
 const data = useSelector(authData);
 const navigate = useNavigate();
 const { user } = data;

 useEffect(() => {
  if (!user && user == null) {
   console.log("Hello");
   navigate("/login");
   clearInterval(intervalId);
  }
 }, [user, navigate]);

 return user && user != null ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
