/**
 *
 * Usage
 *
 *      <Input
 *         label="Mobile Number"
 *         name="mobileNumber"
 *         className="input-field-wrapper"
 *         placeholder="Please enter Mobile number"
 *         onChange={handleChange}
 *         value={formFields.mobileNumber}
 *         error={errors.mobileNumber}
 *       />
 *
 */

import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Input = ({
  label = "",
  name = "",
  className = "",
  type = "text",
  placeholder = "",
  onChange = () => {},
  value = "",
  error = "",
  ...rest
}) => {
  return (
    <div className={`input-container ${className}`}>
      {label && (
        <label className={`input-label ${error && "error"}`}>{label}</label>
      )}
      <input
        className={`input-field ${error && "error"}`}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...rest}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string | PropTypes.number,
  error: PropTypes.string,
};

Input.defaultProps = {
  label: "",
  name: "",
  className: "",
  type: "text",
  placeholder: "",
  onChange: () => {},
  value: "",
  error: "",
};
