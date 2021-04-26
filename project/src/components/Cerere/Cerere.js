import React from 'react'
import Navbar from '../Navbar/Navbar';
import Joi from "joi-browser";
import Form from "../common/form";

class Cerere extends Form {
  state = {
    data: { text: "", text: "" },
    errors: {},
  };

  schema = {
    tip: Joi.string().label("tip"),
    numar: Joi.string().required().label("numar"),
  };

  doSubmit = () => {
    this.props.history.push("../home");
  };
  

   

  render() {
    return (
      <React.Fragment>
        <div>
          <Navbar />
          <div className="container">
            <h1>Cerere</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderSelect("tip", "Tip resursa")}
              {this.renderInput("numar", "Numar")}

              {this.renderButton("Send")}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Cerere;