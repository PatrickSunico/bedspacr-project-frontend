import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate, Redirect, useNavigate } from "react-router-dom";
import { authData } from "../../../features/auth/authSlice";

const ProtectedRoutes = () => {
 const data = useSelector(authData);
 const { user } = data;

 return user && user != null ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
