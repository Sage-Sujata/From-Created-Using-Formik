import React, { Fragment } from "react";
import Sujata from "./Suji";
import Form1 from "./Form";
import Login from "./Login";
import LoginForm from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <ul className="navbar-nav mr-auto">
        <li>
          <Link to={"/"} className="nav-link">
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link to={"/register"} className="nav-link">
            Register
          </Link>
        </li>
        <li>
          <Link to={"/login"} className="nav-link">
            Login
          </Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Form1} />
      </Switch>
      {/* <Sujata /> */}
      {/* <Form1 /> */}
      {/* <Login /> */}
    </Fragment>
  );
}

export default App;
