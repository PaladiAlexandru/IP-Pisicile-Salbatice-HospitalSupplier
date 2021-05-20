import React from "react";
import Navbar from "../Navbar/Navbar";

const IstoricComenzi = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className="container">
        <h1 className="text-center" style={{ paddingTop: "30%" }}>
          Istoric Comenzi
        </h1>
      </div>
    </React.Fragment>
  );
};

export default IstoricComenzi;
