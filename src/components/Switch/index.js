/**
 *
 * Usage
 * <Swicth checked={true} handleChange={handleChange} />
 *
 * const handleChange = (event) => {
 *      //  event.target.checked will get true or false.
 * }
 */

import React from "react";
import "./style.scss";

const Switch = ({
  className = "",
  checked = false,
  handleChange = () => {},
}) => {
  return (
    <div className={`swicth-container ${className}`}>
      <label class="switch">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
