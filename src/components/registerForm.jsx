import React from "react";
import Joi from "joi-browser";

import Form from "./common/form";
import Navbar from "./navbar";
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };
  schema = {
    name: Joi.string().label("Name").required(),
    password: Joi.string().min(5).required().label("Password"),
    username: Joi.string().email().label("Email").required(),
  };

  doSubmit = () => {
    //Call the server
    console.log("Submited!");
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
