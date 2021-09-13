import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Login from "./components/logincomponent";
import SignUp from "./components/signupcomponent";
import Home from "./components/homecomponent";
import Nav from "./components/nav.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signin" component={Login} />
              <Route path="/signup" component={SignUp} />
            </Switch>
            {/* <Home /> */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
