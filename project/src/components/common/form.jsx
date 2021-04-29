import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const result = Joi.validate(obj, schema);
    return result.error ? result.error.details[0].message : null;
  };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };
  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };
  renderSelect = (name, label, type = "text") => {
    return (
      <div className="form-group">
        <label htmlFor="name">{label}</label>
        <select name={name} id={name} className="form-control">
          <option value="masti">Masti</option>
          <option value="combinezoane">Combinezoane</option>
          <option defaultValue value="sticleDezinfectant">
            Sticle Dezinfectant
          </option>
          <option value="pacheteCuVataMedicinala">
            Pachete cu vata medicinala
          </option>
          <option value="pansamente">Pansamente</option>
        </select>
      </div>
    );
  };
  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        error={errors[name]}
        value={data[name]}
        name={name}
        label={label}
        onChange={this.handleChange}
      />
    );
  };
}

export default Form;
