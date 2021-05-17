import React from "react";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className="container">
        <h1 className="text-left" >
          Bun venit, Alex!
        </h1>
        <p className="text-left" style={{ fontSize: "20px" }}>
          Spital: Spitalul Universitar de Urgență București
        </p>
        <p className="text-left" style={{ fontSize: "20px" }}>
          Adresa spital: Splaiul Independenței 169, București 050098
        </p>
        <p className="text-left" style={{ fontSize: "20px" }}>
          Administrator spital: Paladi Alexandru
        </p>
        <p className="text-left" style={{ fontSize: "20px"}}> 
          Șoferi:
          <ul style={{ marginLeft: "25px"}}>
            <li>John Cena</li>
            <li>Brendan Ellis</li>
            <li>Anika Bailey</li>
          </ul>
        </p>


      </div>
    </React.Fragment>
  );
};

export default Home;


