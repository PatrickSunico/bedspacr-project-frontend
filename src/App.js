import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Third Party Libraries
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import ReactDOM from "react-dom";
import "./App.scss";
// Components

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PropertyListing from "./components/Property Listing/PropertyListing";
import DashboardDetails from "./components/Dashboard Listing Details/DashboardDetails";

const App = () => {
 return (
  <>
   <Router>
    <Navbar />
    {/* <Alert /> */}
    <div className="container-padding">
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
       path="/dashboard/property-listings"
       element={<PropertyListing />}
      />
      <Route
       path="/dashboard/property-details"
       element={<DashboardDetails />}
      />
     </Routes>
    </div>
   </Router>
   <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
   />
  </>
 );
};

export default App;
