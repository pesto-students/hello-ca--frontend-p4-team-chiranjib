import React from "react";
import "./style.scss";

const Card = ({ children, variant = "" }) => {
  return (
    <div
      className={`card ${
        variant === "filled" ? "filled" : variant === "primary" ? "primary" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
