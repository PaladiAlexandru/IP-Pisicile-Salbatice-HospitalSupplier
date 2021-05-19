import React from "react";
import Navbar from "../Navbar/Navbar";
import { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    username: "",
    id: "",
    hpName: "",
    adress: "",
    admins: [],
    drivers: [],
  };
  async componentDidMount() {
    const username = localStorage.getItem("username");
    const id = localStorage.getItem("id");
    this.setState({ username, id });

    await axios

      .get("http://ip-lab.herokuapp.com/institutii/")
      .then((response) => {
        response.data.forEach((element) => {
          const adress = element.adresa;
          const hpName = element.nume;
          const admins = element.administratori;
          const drivers = element.soferi;
          if (admins[0] === username)
            this.setState({ adress, hpName, admins, drivers });
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className="container">
          <h1 className="text-left">Bun venit, {this.state.username}!</h1>
          <p className="text-left" style={{ fontSize: "20px" }}>
            Spital: {this.state.hpName}
          </p>
          <p className="text-left" style={{ fontSize: "20px" }}>
            Adresa spital: {this.state.adress}
          </p>
          <p className="text-left" style={{ fontSize: "20px" }}>
            Administratori spital: {this.state.admins}
          </p>
          <p className="text-left" style={{ fontSize: "20px" }}>
            Șoferi:
          </p>
          <ul style={{ marginLeft: "25px" }}>
            {this.state.drivers.map((driver) => {
              return <li key={driver}>{driver}</li>;
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
