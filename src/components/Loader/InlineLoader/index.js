import React from "react";
import "./style.scss";

const InlineLoader = ({ color = "#fff", width = "80px", height = "80px" }) => {
  return (
    <div className="lds-ring" style={{ width, height }}>
      <div
        style={{ borderColor: `${color} transparent transparent transparent` }}
      ></div>
      <div
        style={{ borderColor: `${color} transparent transparent transparent` }}
      ></div>
      <div
        style={{ borderColor: `${color} transparent transparent transparent` }}
      ></div>
      <div
        style={{ borderColor: `${color} transparent transparent transparent` }}
      ></div>
    </div>
  );
};

export default InlineLoader;
