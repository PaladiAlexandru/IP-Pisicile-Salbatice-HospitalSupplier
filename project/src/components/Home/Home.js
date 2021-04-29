import React from "react";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className="container">
        <h1 className="text-center" style={{ paddingTop: "30%" }}>
          Home
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Home;
