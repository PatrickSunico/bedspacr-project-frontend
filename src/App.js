import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
  <Router>
   <Navbar />
   {/* <Alert /> */}
   <div className="container-padding">
    <Routes>
     <Route exact path="/" element={<Home />} />
     <Route exact path="/register" element={<Register />} />
     <Route exact path="/login" element={<Login />} />
     <Route
      exact
      path="/dashboard/property-listings"
      element={<PropertyListing />}
     />
     <Route
      exact
      path="/dashboard/property-details"
      element={<DashboardDetails />}
     />
    </Routes>
   </div>
  </Router>
 );
};

export default App;
