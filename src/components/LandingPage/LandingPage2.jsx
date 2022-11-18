import React from "react";
import "./styles/LandingPage2.css";
const LandingPage2 = ({ List2 }) => {
  return (
    <div className="Landingpage2-Boss">
      {List2.map((List2Show) => (
        <div className="LandingPage22">
          <img className="Image17" src={List2Show[0]} alt="" />
          <div className="Landingpage23flex">
            <img className="Image18" src={List2Show[1]} alt="" />
            <div className="LandingPage23">
              <a className="desqriped"> {List2Show[2]} </a>
              <p> {List2Show[3]} </p>
              <p className="Valorant-game"> {List2Show[4]} </p>
              <div className="English-page2"> {List2Show[5]} </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPage2;
