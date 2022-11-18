import React from "react";
import "./styles/LandingPage2.css";
const LandingPage2 = ({ List2 }) => {
  return (
    <div className="Landingpage3-Boss">
      {List2.map((List2Show) => (
        <div className="LandingPage3-">
          <img className="Image19" src={List2Show[0]} alt="" />
          <div className="Landingpage24flex">
            <div className="LandingPage24">
              <a className="desqriped3"> {List2Show[1]} </a>
              <p> {List2Show[2]} </p>
              <p className="Valorant-game"> {List2Show[3]} </p>
              <div className="English-page2"> {List2Show[4]} </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPage2;
