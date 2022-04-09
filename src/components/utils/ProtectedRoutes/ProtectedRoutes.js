import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { authData } from "../../../features/auth/authSlice";
import DashboardListing from "../../Dashboard/DashboardListing/DashboardListing";

const useAuth = () => {};

const ProtectedRoutes = () => {
 const [isLoggedIn, setLoggedIn] = useState(false);
 const data = useSelector(authData);
 const { user, isAuthenticated } = data;

 return user && user != null ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
