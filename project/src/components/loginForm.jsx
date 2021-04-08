import React from "react";

import Joi from "joi-browser";
import Form from "./common/form";
import { login } from "./../services/fakeAuthService";

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
    const token = login(this.state.data.username, this.state.data.password);
    console.log(token);
    if (token) this.props.history.push("/homepage");
  };

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
