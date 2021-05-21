import React from "react";

import Joi from "joi-browser";
import Form from "./common/form";
//import { login } from "./../services/fakeAuthService";
import Navbar from "./navbar";

class LoginForm extends Form {
  state = {
    username: "",
    password: "",
    id: "",
  };
  async componentDidMount() {
    const axios = require("axios").default;
    const sendGetRequest = async () => {
      try {
        await axios
          .get("https://ip-lab.herokuapp.com/users", {
            headers: {
              authorization: "Basic c3BpdGFsZTp0ZW1wUEBzc3cwcmQ=",
            },
          })
          .then((response) => {
            response.data.forEach((element) => {
              const username = element.username;
              const password = element.password;
              const id = element.id;
              if (
                this.state.data.username === username &&
                this.state.data.password === password
              ) {
                console.log(element);
                localStorage.setItem("userId", element.id);
                this.setState({ username, id, password });
              }
            });
          });

        //console.log(resp.data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };
    sendGetRequest();
  }
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //const id = login(this.state.data.username, this.state.data.password);

    if (localStorage.getItem("userId")) {
      localStorage.setItem("username", this.state.data.username);
      this.props.history.push("/home");
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>Login Form</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}

            {this.renderButton("Login")}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
