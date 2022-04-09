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
import PropertyListing from "./components/PropertyListing/PropertyListing";

// Dashboard Components
import DashboardListing from "./components/Dashboard/DashboardListing/DashboardListing";
import DashboardDetails from "./components/Dashboard/DashboardListingDetails/DashboardDetails";

// Utils
import ProtectedRoutes from "./components/utils/ProtectedRoutes/ProtectedRoutes";
import PageNotFound from "./components/utils/PageNotFound/PageNotFound";

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

      {/* Dashboard */}

      <Route path="/" element={<ProtectedRoutes />}>
       <Route
        path="/dashboard/property-listings"
        element={<DashboardListing />}
       />
       <Route
        path="/dashboard/property-details"
        element={<DashboardDetails />}
       />
      </Route>

      {/* Not Found */}
      <Route path="*" element={<PageNotFound />} />
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
