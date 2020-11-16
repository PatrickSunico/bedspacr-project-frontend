import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react";

import "./App.scss";

// Components
// import Home from "components/Home";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}
export default App;
