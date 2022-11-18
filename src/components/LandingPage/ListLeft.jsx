import React from "react";
import "./styles/ListLeft.css";
const ListLeft = ({ List }) => {
  return (
    <div>
      {List.map((ListLeft) => (
        <div className="LandingPage-left-2">
          <img className="Images-left-2" src={ListLeft[0]} alt="" />
          <div className="LandingPage-left-2-coulam">
            <p>{ListLeft[1]}</p>
            <p className="Game">{ListLeft[2]}</p>
          </div>
          <div className="Redorbdiv">
            <div className="RedOrbleft">{ListLeft[3]}</div>
            <p>{ListLeft[4]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListLeft;
