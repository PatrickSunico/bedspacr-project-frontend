import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import ReactDOM from "react-dom";

import './App.scss';

// Components
// import Home from "components/Home";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PropertyListing from './components/Property Listing/PropertyListing';
import DashboardDetails from './components/Dashboard Listing Details/DashboardDetails';

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Alert /> */}
      <div className="container-padding">
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/dashboard/property-listings"
            component={PropertyListing}
          />
          <Route
            exact
            path="/dashboard/property-details"
            component={DashboardDetails}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
