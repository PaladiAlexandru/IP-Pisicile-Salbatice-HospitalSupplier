import "./App.css";
import { Component } from "react";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import NotFound from "./components/not-found";
import Navbar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import HomePage from "./components/homepage";
import axios from "axios";

class App extends Component {
  async componentDidMount() {
    const tok = "spitale:tempP@ssw0rd";
    const hash = btoa(tok);
    const Basic = "Basic " + hash;
    const res = await axios
      .get("https://ip-lab.herokuapp.com/api-token-auth/", {
        // Axios looks for the `auth` option, and, if it is set, formats a
        // basic auth header for you automatically.
        headers: {
          auth: {
            username: "spitale",
            password: "tempP@assw0rd",
          },
        },
      })
      .then(function (response) {
        console.log(response.data);
        console.log(response.headers["Authorization"]);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/homepage" component={HomePage} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/login" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
