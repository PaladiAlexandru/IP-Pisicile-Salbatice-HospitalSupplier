import "./App.css";
import { Component } from "react";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import NotFound from "./components/not-found";

import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import axios from "axios";
import Home from "./components/Home/Home";
import Oferta from "./components/Oferta/Oferta";
import Cerere from "./components/Cerere/Cerere";
import MesajeGuvern from "./components/MesajeGuvern/MesajeGuvern";
import IstoricComenzi from "./components/IstoricComenzi/IstoricComenzi";
import Istoricapr from "./components/IstoricAprovizionariGuvern/Istoricapr";

class App extends Component {
  async componentDidMount() {
    await axios
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
        <main className="container">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/Oferta" component={Oferta} />
            <Route path="/Cerere" component={Cerere} />
            <Route path="/MesajeGuvern" component={MesajeGuvern} />
            <Route path="/IstoricComenzi" component={IstoricComenzi} />
            <Route path="/IstoricApr" component={Istoricapr} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
