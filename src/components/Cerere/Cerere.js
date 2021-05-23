import React from "react";
import Navbar from "../Navbar/Navbar";
import Joi from "joi-browser";
import Form from "../common/form";
import axios from "axios";

class Cerere extends Form {
  state = {
    data: { tip: "", numar: "" },
    errors: {},
  };

  schema = {
    tip: Joi.string().label("tip"),
    numar: Joi.string().label("numar"),
  };

  doSubmit = () => {
    var product = "";

    if (this.state.data.tip === "masti") product = "mask";
    else if (this.state.data.tip === "combinezoane") product = "combinezon";
    else if (this.state.data.tip === "sticleDezinfectant") product = "dezinfectant";
    else if (this.state.data.tip === "pacheteCuVataMedicinala") product = "vata";
    else if (this.state.data.tip === "pansamente") product = "pansament";

    axios
      .post("https://matching-backend-api.herokuapp.com/route/demand", {
        orderID: "101",
        hospitalID: localStorage.getItem("hpId"),
        productNeed: product,
        quantity: this.state.data.numar,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
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
