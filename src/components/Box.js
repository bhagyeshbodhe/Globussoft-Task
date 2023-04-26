import React from "react";
import "./box.css";

const Box = ({ number, label, firstIcon, secondIcon }) => {
  return (
    <div className="box">
      <div>{firstIcon}</div>

      <div className="numbers">
        {number} <br />
        {label}
      </div>

      <div className="secondIconDiv">{secondIcon}</div>
    </div>
  );
};

export default Box;
