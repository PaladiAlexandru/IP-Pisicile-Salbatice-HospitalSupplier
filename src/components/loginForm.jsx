import React from "react";

import Joi from "joi-browser";
import Form from "./common/form";
import { login } from "./../services/fakeAuthService";
import Navbar from "./navbar";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    const id = login(this.state.data.username, this.state.data.password);

    if (id) {
      localStorage.setItem("id", id);
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
