import React from "react";
import "./style.scss";

const InlineLoader = ({
  color = "#fff",
  width = "80px",
  height = "80px",
  thickness = "2px",
}) => {
  return (
    <div className="lds-ring" style={{ width, height }}>
      <div
        style={{
          borderWidth: thickness,
          borderColor: `${color} transparent transparent transparent`,
        }}
      ></div>
      <div
        style={{
          borderWidth: thickness,
          borderColor: `${color} transparent transparent transparent`,
        }}
      ></div>
      <div
        style={{
          borderWidth: thickness,
          borderColor: `${color} transparent transparent transparent`,
        }}
      ></div>
      <div
        style={{
          borderWidth: thickness,
          borderColor: `${color} transparent transparent transparent`,
        }}
      ></div>
    </div>
  );
};

export default InlineLoader;
